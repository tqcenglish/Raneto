# [Jenkins](https://jenkins.io/)
Jenkins 是自动构建工具.参考链接

- [部分一](https://strongloop.com/strongblog/roll-your-own-node-js-ci-server-with-jenkins-part-1/)
- [部分二](https://strongloop.com/strongblog/roll-your-own-node-js-ci-server-with-jenkins-part-2/)
- [Jenkins+Github持续集成](http://www.jianshu.com/p/b2ed4d23a3a9)

创建 jenkins 下的 node.js 环境。文中关于 node.js 插件的配置以 [node.js plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin)为准。

> 若不使用 CVS 需要安装插件 https://wiki.jenkins-ci.org/display/JENKINS/File+System+SCM 才能指定源代码目录

## (Ubuntu 下安装 Jenkins)[https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Ubuntu]
  通过自带 apt 安装后访问 localhost:8080
  ```
  sudo cat /var/lib/jenkins/secrets/initialAdminPassword
  ```
  1. 获取初始密码填写后进入配置界面.
  2. 选择插件安装(自定义或手动安装).
  3. 启动后依次安装如下插件, 网络解析错误可以选择手动下载安装。
    GitHub Plugin
    Clover Plugin
    Checkstyle Plug-in
    TAP Plugin
    Embeddable Build Status Plugin
    NodeJS Plugin
