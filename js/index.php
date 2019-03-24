<?php
  //设置编码方式
  header("Content-Type:text/html;charset=utf-8");
  //连接数据库,以对象的方式去创建一个数据库连接
  $mysql = new mysqli("localhost","root","sun441081","test");
  //如果连接失败,erron这个函数就返回错误号,error返回错误信息
  if(mysqli_connect_errno()){
	  echo "连接数据库失败".mysqli_connect_error();
  }
  //设置查询数据库时候的编码方式
  $mysql->set_charset("utf-8");
  //获取提交的账号
  $zhanghao = $_POST["user"];
  //获取提交的密码
  $zhanghao = $_POST["pw"];
  //定义审查字符串
  $sql = "SELECT 'user','password' FROM 'login' WHERE user='{$zhanghao}'";
  //执行查询 把结果集存在一个变量里面
  $res = $mysql->query($sql);
  //处理结果集
  $arr = $res->fetch_all(MYSQL_ASSOC);
  //如果结果非空
  if(!empty($arr)){
	  //判断账号用户名是否一致
	  if($zhanghao==$arr[0]["user"]){
		  //判断密码是否一致
		  if($pw==$arr[0]["password"]){
			  echo "1";
		  }else{
			  echo "0";
		  }
	  }
	}else{
		  echo "2";
  }
?>