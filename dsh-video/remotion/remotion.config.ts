import { Config } from '@remotion/cli/config';

// dsh-video 渲染项目配置（宿主渲染走 @remotion/renderer，此处供 CLI/调试使用）
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setCodec('h264');
