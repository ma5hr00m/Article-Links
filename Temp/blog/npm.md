---
title: Electron开发课表组件
date: 2023-04-25
categories:
- 开发
tags:
- 前端开发
- Electron
---

在[`hduHelp`](https://github.com/hduhelp)例会听学长普及了跨端开发的知识，正好阿菇对跨端开发也颇有兴趣，就写了一片文章，记录开发过程中遇到的问题。

[Electron官方文档 👈 ](https://www.electronjs.org/zh/)

<!--more-->



### Electron依赖库安装问题

在开发过程中，我们需要安装一些依赖库，比如`electron`、`@electron-forge/cli`，出于某些原因，我们无法直接使用`npm`安装这些库。

我们可以使用`cnpm`



#### nrm 关于 ES Moudle的问题

安装底版本的`nrm`即可

```bash
npm install -g nrm open@8.4.2 --save
```

 之后即可正常使用。



#### npm无法安装某些依赖库

最简单的方法，不是各种换源，直接给当前终端设置代理就行。

```bash
export http_proxy=http://127.0.0.1:7890
export http_proxy=https://127.0.0.1:7890
```

明天研究以下tabby怎么设置代理。

还有notion，很调的样子。

#### npx electron-forge import执行失败

报错如下。

```bash
❯ Processing configuration and dependencies
  ✖ Installing dependencies
    › Failed to install modules: ["@electron-forge/cli@^6.1.1","@electron-forge/maker-squirrel@^6.1.1","@electro…
      With output: Command failed with a non-zero return code (1):
      npm install @electron-forge/cli@^6.1.1 @electron-forge/maker-squirrel@^6.1.1 @electron-forge/maker-zip@^6.…
      npm ERR! code ENETUNREACH
      npm ERR! errno ENETUNREACH
      npm ERR! request to https://registry.npmjs.org/@electron-forge%2fmaker-squirrel failed, reason:
      npm ERR! A complete log of this run can be found in: /home/agu/.npm/_logs/2023-04-26T00_29_55_781Z-debug-0…
      npm ERR! code ENETUNREACH
      npm ERR! errno ENETUNREACH
      npm ERR! request to https://registry.npmjs.org/@electron-forge%2fmaker-squirrel failed, reason:
      npm ERR! A complete log of this run can be found in: /home/agu/.npm/_logs/2023-04-26T00_29_55_781Z-debug-0…
  ◼ Copying base template Forge configuration
  ◼ Fixing .gitignore
◼ Finalizing import
```

在`package.json`中设置`author`和`description`字段即可



发布`github`版本没有搞明白，但打包后生成的`rpm`确实可以安装使用了，感觉不算很难。

现在的任务就是调用`hduLib`爬数据写页面了😋。
