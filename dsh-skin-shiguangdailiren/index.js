import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const imageUrl = new URL('./assets/640.png', import.meta.url)
const imagePath = fileURLToPath(imageUrl)

/**
 * Host half of the permanent 时光代理人 skin: serves the wallpaper at
 * /skin/640.png so the browser can paint it as the app background.
 */
function apply(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/skin/640.png',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        try {
          const bytes = await readFile(imagePath)
          res.writeHead(200, {
            'content-type': 'image/png',
            'content-length': bytes.length,
            'cache-control': 'public, max-age=86400'
          })
          res.end(bytes)
        } catch (err) {
          console.error('skin-shiguangdailiren: failed to serve wallpaper', err)
          res.writeHead(404)
          res.end()
        }
      }
    }), 'skin-shiguangdailiren: wallpaper route')
  })
}

export { apply }
