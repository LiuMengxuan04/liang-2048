# 合成梁祖 · 梁系 2048

用「滑动变祖器」梗图做的轻量级 2048 网页小游戏。原生 HTML / CSS / JavaScript，无构建步骤、无后端、无依赖。

## 玩法

- 电脑：方向键或 WASD；手机：在棋盘上滑动；也可使用屏幕方向按钮。
- 两个相同数字合并，目标是合成 **2048 · 梁祖**。达成后可继续挑战。
- 支持撤销一步、重新开始、自动保存进度与历史最高分。
- 合成粒子、冲击光环、浮动加分、境界突破提示与合成音效。
- 音效须用户手势激活，可关闭并记住设置；支持系统减少动画偏好。

## 十一重境界

| 数字 | 境界 |
|---:|---|
| 2 | 小难梁 |
| 4 | 炼气梁 |
| 8 | 牢梁 |
| 16 | 梁子 |
| 32 | 金丹梁 |
| 64 | 梁圣 |
| 128 | 化神梁 |
| 256 | 梁神 |
| 512 | 大乘梁 |
| 1024 | 渡劫梁 |
| 2048 | 梁祖 |

## 本地运行

```bash
python3 -m http.server 8080
```

打开 http://localhost:8080 。因为使用 ES Modules，请不要直接双击 HTML 以 file:// 访问。

## 测试

```bash
node test.mjs
node test-effects.mjs
```

覆盖合并规则、方向、无效移动、死局、随机数字守恒，以及音频手势延迟初始化、静音与减少动画路径。浏览器真实音频体验仍取决于设备及其静音设置。

## GitHub Pages

在仓库 Settings → Pages 中选择 **Deploy from a branch → main → / (root)**，即可部署此静态项目。

## 素材来源与声明

图片来自 [Lichtspektrum/liang-intensity-calibrator](https://github.com/Lichtspektrum/liang-intensity-calibrator) 的 `public/frames/frame-00.webp` 至 `frame-30.webp`，每隔 3 帧选取一张。上游项目的 MIT 许可完整保留在 [assets/SOURCE-LICENSE](assets/SOURCE-LICENSE)，其原 README 保留在 [assets/SOURCE-README.md](assets/SOURCE-README.md)。游戏代码为本项目独立实现。

本项目仅供娱乐与网络梗二创，非梁文锋、DeepSeek 或任何机构的官方作品，不代表其观点。进度仅存储在当前浏览器 localStorage，不上传用户游戏数据。
