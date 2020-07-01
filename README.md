# cube-ui-demo-app

## github地址
git@github.com:wwml725/cube-ui-demo-app.git

## 

```
vue create app
vue add cube-ui
```

## 学习中的问题
#### 双击页面会所小问题
- index.html文件中更改meta标签的设置
```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<meta name="viewport" content="width=device-width,initial-scale=1.0">-->
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

#### css不熟悉的语法
```
height:cacl(100%-20px)
```

#### cube-ui相关问题

使用vue add cube-ui直接安装，cube-ui.js文件中没有RecycleList组件，添加上就行