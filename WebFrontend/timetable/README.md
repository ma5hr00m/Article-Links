# HDU课表查询组件

前端部培训后留下的小任务，比较感兴趣，做一下。

## 要求

尝试使用某种跨端框架和云函数，实现一个查看课表应用，形式不限。推荐使用hdu-lis包拿到数据。

![展示图片](https://cdn.nlark.com/yuque/0/2023/png/432943/1682095945134-8bb3c96c-feb8-475e-aa23-564f5e851353.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0)

## 开发

> 按照习惯，先贴出来[Electron 官方文档](https://www.electronjs.org/zh/docs/latest/)。
>
> 有问题第一时间看官方文档，二手资料总是充满意想不到的错误，太折磨了。

### 问题

#### 图形硬件

当我运行`npm start`时，会出现以下报错，但是未影响程序运行。

```bash
libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
[16638:0425/143527.613762:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 1 times!
[16638:0425/143527.618895:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 2 times!
[16638:0425/143534.955972:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 3 times!
```

在网上搜罗了一圈没有找到好的解决方案，于是使用了一个`ignore.js`隐藏这个报错。

> 😋看不到就是没有！

#### 缺少支持

与上一个问题同时出现，也是不影响程序运行。

```bash
libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
```

暂未解决。

