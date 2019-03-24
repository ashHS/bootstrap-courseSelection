<?php
  //定义编码方式
  header("Content-Type:text/htmll;charset=utf-8");
  //连接数据库
  $mysql = new mysqli("localhost","root","sun441081","test");
  //获取提交的用户名
  $user = $_POST["user"];
  //获取提交的密码
  $pw = $_POST["pw"];
  //定义查询语句
  $sql = "INSERT INTO 'login' ('user','password') VALUES ('{$user}','{$pw}')";
  //执行查询语句
  $res = $mysql->query($sql);
  //如果储存成功 返回1
  if($mysql->affected_rows==1){
	  wcho "1";
  }
?>