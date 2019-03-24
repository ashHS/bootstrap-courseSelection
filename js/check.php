<?php
  //设置编码方式
  header("Content-Type:text/html;charset=utf-8");
  //获取用户名
  $user=$_POST["user"];
  //连接数据库
  $mysql = new mysqli("localhost","root","sun441081","test");
  //设置数据库编码方式
  $mysql->set_charset("utf-8");
  //查询语句
  $sql = "SELECT user FROM login";
  //执行查询语句
  $res = $mysql->query($sql);
  //处理拿到的数据
  $arr = $res->fetch_all(MYSQL_ASSOC);
  //获取数据长度
  $len = count($arr);
  //遍历每条数据
  for($i=0;$i<$len;$i++){
	  //如果有这个用户名
	  if($arr[$i]["user"]==$user){
		  //返回0
		  echo "0";
		  return ;
	  }
  }
  //否则返回1
  echo "1";
?>