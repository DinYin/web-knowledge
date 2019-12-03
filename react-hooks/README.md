#30分钟精通React Hooks
```
# 安装
$ yarn global add umi # 或者 npm install -g umi

# 新建应用
$ mkdir react-hooks && cd react-hooks

# 新建页面
$ umi generate page index

# 本地开发
$ umi dev

# 构建上线
$ umi build
```
Hooks 顾名思义，字面意义上来说就是 React 钩子的概念。拥有了hooks，你再也不需要写Class了，你的所有组件都将是Function。既然没有了class，就没有了this。
搞不清使用哪个生命周期钩子函数？ ——拥有了Hooks，生命周期钩子函数可以先丢一边了。
 为组件中的this指向而晕头转向吗？ ——既然Class都丢掉了，哪里还有this？你的人生第一次不再需要面对this。
 解决的问题：
1、不用写class,
2、不用关心this指向
3、不用关心生命周期
4、状态共享