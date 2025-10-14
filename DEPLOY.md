# 部署指南

## GitHub Pages 自动部署

本项目已配置 GitHub Actions，可以自动将 `hc-component/dev` 部署到 GitHub Pages。

### 配置步骤

#### 1. 启用 GitHub Pages

1. 访问 GitHub 仓库：https://github.com/xiongpan0718/hc_web_component
2. 进入 **Settings** → **Pages**
3. 在 **Source** 下拉菜单中选择 **GitHub Actions**

#### 2. 触发部署

部署会在以下情况自动触发：
- 推送代码到 `main-new` 分支
- 在 Actions 页面手动触发工作流

#### 3. 查看部署

部署完成后，网站将在以下地址访问：
```
https://xiongpan0718.github.io/hc_web_component/
```

### 本地测试

在推送前可以本地测试构建：

```bash
cd packages/hc-component/dev
pnpm install
pnpm run build
pnpm run preview
```

### 工作流说明

- **工作流文件**：`.github/workflows/deploy.yml`
- **构建目录**：`packages/hc-component/dev`
- **输出目录**：`packages/hc-component/dev/dist`
- **Base Path**：`/hc_web_component/`（在生产环境中自动应用）

### 故障排除

如果部署失败，检查：
1. GitHub Actions 工作流日志
2. 确保所有依赖都在 `pnpm-lock.yaml` 中
3. 确认构建命令在本地能成功运行
4. 检查 GitHub Pages 设置是否正确

### 分支说明

- `main-new`：用于 GitHub Pages 部署（不包含敏感信息）
- 其他分支：用于 GitLab 内部开发

