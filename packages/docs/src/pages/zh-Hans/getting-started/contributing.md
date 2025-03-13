---
meta:
  title: 参与此项目
  description: 贡献给开放源码，可以帮助开发者免费获得令人惊叹的工具。了解你如何帮助开发 Vuetify 框架。
  keywords: 贡献、捐赠、功能请求
related:
  - /getting-started/unit-testing/
  - /about/code-of-conduct/
  - /introduction/roadmap/
---

# 参与此项目

Vuetify 是由一个提交问题、创建合并请求和提供宝贵反馈的出色社区促成的。

<PageFeatures />

<VoPromotionsCardVuetify />

让你能够创建令人惊艳的应用是我们的使命。你经常会发现有些事情这样做更好。也许你发现了一个bug，或者你有增加功能的想法。这是极好的！你可以克隆 Vuetify 的仓库并在上面进行开发工作。

<PromotedPromoted slug="vuetify-discord" />

## 报告问题

仓库的工单列表是专门用来提交 bug 报告和特性请求的。其它无关紧要的问题将会被立即关闭。在报告一个问题之前：

- 搜索相似的 [issue][]，它可能已经被解答了。

  > 如果已存在一个类似的 Issue，你不需要为此打开另一个 Issue。 如果你想要以任何方式帮助它，你可以为已经存在的 Issue 提供适当的信息。
- 尝试使用[最新](https://github.com/vuetifyjs/vuetify/releases/latest)版本在 [Vuetify Play](https://play.vuetifyjs.com/) 或可克隆的仓库中以复现预期行为。
- 请确保问题复现是 **最小化的**、**简洁的**。

这些步骤能够确保我们掌握一切必要的信息，以迅速细分和解决你的问题。 当你完成复现后，使用 [Vuetify议题创建器](https://issues.vuetifyjs.com/)提交一个新问题。 必须要使用议题创建器来创建议题，否则问题将自动关闭。

当你编写一个议题的时候，请尽可能地提供更多的细节。请注意，“复现步骤”应该是另一个开发人员在单击您的复现链接后应该采取的一系列操作，而不是回忆您是如何发现错误的。

晦涩的、缺乏适当复现步骤的Issue可能会被 [核心团队][]的成员关闭。 关于报告Issue和创建复现步骤的其他问题，请加入官方的 Vuetify [Discord 社区][]

::: tip
当你创建复现步骤时，排除复现时不需要的所有 **元素、属性和数据变量** 。 这有助于大大减少定位和最终解决这个问题所需的时间。
:::

在下一节中，您将逐步学习如何设置您的本地环境以及如何配置Vuetify用于开发。

## 本地开发

Vuetify 仓库是一个 [lerna](https://github.com/lerna/lerna) 管理的 monorepo，它连接了 vuetify 代码库，文档，api 生成器，同时减少同时处理多个项目之间的摩擦。以下指南旨在帮助你立即启动并运行。

### 设置您的本地环境

所需软件：

- [Git](https://git-scm.com/) >v2.20
- [Node.js](https://nodejs.org/) LTS
- [pnpm](https://pnpm.io/)

我们的一些依赖关系使用 [node-gyp](https://github.com/nodejs/node-gyp#installation) 来构建， 您不需要安装 node-gyp，但可能需要额外的工具，尤其是在 Windows 操作系统上。详细信息请参阅 node-gyp 文档。

安装完所有内容后，克隆仓库：

```bash
# 使用 HTTPS
git clone https://github.com/vuetifyjs/vuetify.git

# 使用 SSH
git clone git@github.com:vuetifyjs/vuetify.git
```

::: info
[我应该使用哪个远程地址？](https://docs.github.com/en/free-pro-team@latest/github/using-git/which-remote-url-should-i-use)
:::

然后安装依赖项并执行初始生成以将所有包链接在一起：

```bash
# Navigate to the vuetify folder
cd vuetify

# Install all project dependencies
pnpm i

# Build the packages
pnpm build vuetify
pnpm build api
```

构建过程会编译所有的 Vuetify 包以进行开发，这可能需要一段时间（喝点☕吧）。一旦包构建完毕，你就可以开始开发了。

### Vuetify

Vuetify 库位于 `packages/vuetify` 中。在 `packages/vuetify/dev` 中你将找到一个 `Playground.vue` 文件；在项目根目录运行 `pnpm dev` 将在 **localhost:8090** 上启动一个开发服务器，并加载此文件。在你复制的 Playground.vue 文件中测试你的更改，然后将其内容粘贴到你的拉取请求中。

您也可以使用 [`pnpm link`](https://pnpm.io/cli/link) 在您自己的项目中测试 Vuetify

- 切换目录至 `packages/vuetify`
- 执行 `pnpm link --global`
- 在切换到您的项目目录
- 执行 `pnpm link --global vuetify`

如果你的项目正在使用 vuetify-loader，你必须在 Vuetify 库里运行 `pnpm build:lib` 才能看到变化。或者您可以使用 `pnpm watch` 启用增量构建。

#### Playground.vue

<strong x-id=“1”>Playground</strong> 文件是用于Vuetify开发的清洁室，是框架内迭代更改的推荐方法。

```html
<template>
  <v-app>
    <v-container>
      <!--  -->
    </v-container>
  </v-app>
</template>

<script setup>
  //
</script>
```

### 开发文档

位于 `packages/docs` 的文档也使用了 `packages/api-generator` 的一些文件。一个针对文档的开发服务器可以通过在根目录运行 `pnpm dev docs` 命令，并通过浏览器访问 [localhost:8095](http://localhost:8095/) 地址来查看。

如果你想要在文档中看到来自 Vuetify 的更改，你需要在启动文档服务器之前在 vuetify 包中运行 `pnpm build:lib`。

### API 文档生成工具

所有的 API 描述都由 api-generator 这个包管理。必须在构建文档之前来构建这个包。可以通过修改 `src/locale/en` 目录下的 JSON 文件来更新 API 的描述，请在处理 API 描述时遵守以下的几条规定：

- 只支持 `en` 语言。文档翻译应当使用 [Crowdin](https://crowdin.com/project/vuetify) 来处理。
- 属性名称应使用粗体的 markdown 标记，例如：**prop-name**。
- 插槽和其他相关的文字应该使用代码块 markdown 标记，例如：`some-slot`。
- 描述的键值应该是驼峰式 (camelCase)，但 `slot` 的键值应当是 烤串式 (kebab-case)。
- 键值应当以字母表顺序排列。
- 描述部分依照 `generic.json` < `Source.json` < `Component.json` 的优先级来减少其中的重复翻译。可以在文档设置中开启**Developer Mode（开发者模式）**来查看源码。

### 提交更改 / 拉取请求 (Pull requests)

首先，您应该创建一个 vuetify 仓库的分叉来推送您的更改。 在 [GitHub 文档](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) 中可以找到关于分叉仓库的信息。

然后将你的分支添加为远程git：

```bash
# 使用 HTTPS
git remote add fork https://github.com/YOUR_USERNAME/vuetify.git

# 使用 SSH
git remote add fork git@github.com:YOUR_USERNAME/vuetify.git
```

#### 选择一个基础分支

在开始开发之前，你应该知道你的修改应该基于哪个分支。 如果有疑问，请使用 master，因为对 master 的更改通常可以合并到不同的分支中，而无需变基。

| 版本        | 更改类型     | 分支          |
| --------- | -------- | ----------- |
| Vuetify 3 | 开发文档     | `master`    |
| Vuetify 3 | Bug修复    | `master`    |
| Vuetify 3 | 新功能      | `dev`       |
| Vuetify 3 | 非兼容变更的功能 | `next`      |
| Vuetify 2 | 开发文档     | `v2-stable` |
| Vuetify 2 | Bug修复    | `v2-stable` |
| Vuetify 2 | 新功能      | `v2-dev`    |

```bash
# 切换至所需的分支
# v3
git switch master
# v2
git switch v2-stable

# 拉取上游更新
git pull

# 创建一个新分支以在其中进行工作
git switch --create fix/1234-some-issue
```

::: warning
绝对不要在基础分支上直接提交，而应该在其上创建新的 feature 分支，并在这个新分支上工作
:::

按照 <a href=“#Commit guidelines”>提交准则</a> 提交您的更改，然后使用`git push-u fork` 将分支推送到您的fork，然后按照提供的模板在Vuetify仓库上打开一个pull请求。

::: error
包含了无关 commit 的 pull 请求或者你的本地的 merge 操作会被直接**关闭**。
:::

## 使用 GitHub

Vuetify的仓库位于 [GitHub](https://github.com/vuetifyjs/vuetify) 上，并且是所有开发相关信息的主要位置。

这些服务中一些更值得注意的环节包括：

**GitHub**

- [Issues][]
- [讨论区](https://github.com/vuetifyjs/vuetify/discussions)

----

以下部分是为了让您熟悉我们的 Vuetify 开发的标准操作过程。

<PromotedPromoted slug="vue-jobs" />

### 问题分类

随着 Vuetify 的规模和受欢迎程度增加，新的议题、问题和特性请求不断涌现。 为了组织这些请求，[核心团队][]开发了一个工具，该工具不仅可以帮忙对议题进行分类，还可以辅助创建议题。

[Issues][] 面板大量使用 GitHub 的标签系统和一些轻度自动化，例如添加 `triage` 标签到新的 issue 中。

#### 文档-语言

我们 **不** 接受与除 `en` 外的语言相关的任何文档更改的 PR。 除 `en` 之外的所有语言更改将通过我们的 [Crowdin 项目](https://crowdin.com/project/vuetify)提交。 你可以通过以下两种方式之一帮助翻译：

- 直接在文档中使用上下文翻译服务。 只需在文档的语言下拉菜单中点击 `Help translate` 即可。
- 直接通过 [Crowdin 项目](https://crowdin.com/project/vuetify)。

**注意**: 语言不会被添加到文档站点的语言下拉选项，直到他们完成了至少50%的翻译。

### 请求新功能

待定

### 提交准则

所有提交消息都需要遵循使用 _angular_ 预设的 [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 标准。

- 使用作用域: `<type>(scope): <subject>`

  ```bash
  fix(VSelect): don't close when a detachable child is clicked

  fixes #12354
  ```

- 不使用作用域: `<type>(scope): <subject>`

  ```bash
  docs: restructure nav components

  Moved duplicated functionality in drawer to reduce
  scope of responsibility
  ```

#### 一般规则

- 提交消息必须有主题且可以有正文部分。它们之间需用空行分割。
- 主题行不能超过 60 个字符
- 主题行必须用命令语气书写（fix，而不是 fixed / fixes 等）
- 正文副本必须包括所有已解决 issue 的编号：

  ```bash
  docs(sass-variables): fix broken link to api

  resolves #3219
  resolves #3254
  ```

- 正文必须在 72 个字符以内换行
- 正文只能包含对“是什么”和“为什么”的解释，而不是“怎样做”，后者属于文档和实现的范畴。

#### 提交类型

以下是一个 _angular_ 预设中使用的 **提交类型** 的列表:

- **feat:**提交一个新特性或功能。向后兼容的特性将在下一个 **次要版本** 中发布，而有非兼容变更将在下一个 **主要版本** 中发布。带有非兼容变更的提交主体必须以 `BREAKING CHANGE` 开头，然后描述 API 是如何更改的。
- **fix:** 为 vuetify 的代码库中的错误提供修复的提交。
- **docs:** 为文档更新提供的提交。
- **style:** 不影响代码运行方式的提交，这些只是对样式的更改。
- **refactor:** 提交既不修复错误也不添加功能。
- **perf:** 提升性能的提交。
- **test:** 提交以添加缺少的或更正现有的测试。
- **chore:** 其他不修改 src 或测试文件的提交。
- **revert:** 还原以前提交的提交。

<PromotedPromoted slug="vuetify-reddit" />

[Discord 社区]: https://community.vuetifyjs.com/
[核心团队]: /about/meet-the-team/
[issue]: https://github.com/vuetifyjs/vuetify/issues
[Issues]: https://github.com/vuetifyjs/vuetify/issues
