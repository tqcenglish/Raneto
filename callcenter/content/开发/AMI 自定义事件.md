# AMI 自定义事件
在拨号规则中构建自定义事件，CC 服务端通过对事件的监控进行请求处理。
** RESTful 接口，在拨号规则中调用会影响效率 **

1. 更新外呼计划
```
{
  name: 'updateOutCallPlan',
  extension: '15202846181',
  status: 'called'
}
```
在手动外呼任务中的客户主动打入电话时将手动外呼计划设置为已拨。

2. 生成手动外呼计划
```
{
  name: 'createOutCallPlan',
  planType: 'manual',
  queue: '639'
}
```
生成计划前判断是否已有计划，若有不创建。


