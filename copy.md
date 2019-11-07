<!--
 * @Author: xuhuan
 * @Date: 2019-11-04 15:41:43
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-04 15:42:39
 * @Description:
 -->

1. docker 删除 tag 为 none 的镜像

```bash
docker images|grep none|awk '{print $3}'|xargs docker rmi
```
