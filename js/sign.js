//利用表单验证和ajax验证结合,对于必填的字段和格式进行验证以及对于账号是否重复与数据库中的数据进行验证对比
var account = document.querySelector("#account");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var notice1 = document.querySelector(".notice1");
var notice2 = document.querySelector(".notice2");
var form = document.querySelector("form");
var submit = document.querySelector("[type=submit]");
var finish=0;
//账号控件获得焦点的时候触发的事件
	account.onfocus=function(){
		notice1.style.display = 'block';
	}
	account.onblur=function(){
		if(account.value.length==8){
			notice1.style.display = 'none';
			finish=1;
		}
	}
	
//重输密码控件获得焦点的时候触发的事件
	password2.onfocus=function(){
		notice2.style.display = 'block';
	}
//账号控件内容改变失去焦点的时候判断账号是否重复
// account.onchange = function(){
// 	//获取账号内容
// 	var user = account.value;
// 	//实例化ajax对象
// 	var xhr = new XMLHttpRequest();
// 	//配置ajax请求
// 	xhr.open("post","check.php");
// 	//发送头信息
// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// 	//发送请求
// 	xhr.send("user="+user);
// 	//检测ajax状态改变
// 	xhr.onreadystatechange = function(){
// 		//当响应完成时
// 		if(xhr.readyState == 4){
// 			//当响应成功时
// 			if(xhr.status == 200){
// 				//接受响应的结果
// 				var text = xhr.responseText;
// 				//如果text=0说明用户账号已被占用
// 				if(text == 0){
// 					notice1.style.display = "block";
// 					notice1.innerHTML = "该账号已被占用"
// 					//禁用提交按钮
// 					submit.disabled = true;
// 				}else{
// 					notice1.style.display = "none";
// 					notice1.innerHTML = "请输入八位长度字符串"
// 					//回复表单按钮
// 					submit.disabled = false;
// 				}
// 			}
// 		}
// 	}
// }
//密码控件内容改变失去焦点的时候判断两次输入的是否一致
password2.onchange = function(){
	//获取第一次输入密码的结果
	var pw2_1 = password.value;
	//获取第二次
	var pw2_2 = password2.value;
	//如果不同
	if(pw2_1!=pw2_2){
		notice2.style.display = "block";
		finish=0;
	}else{
		notice2.style.display = "none";
		finish=1;
	}
}
password.onchange = function(){
	//获取第一次输入密码的结果
	var pw1_1 = password.value;
	//获取第二次
	var pw1_2 = password2.value;
	//如果不同
	if(pw1_1!=pw1_2){
		notice2.style.display = "block";
		finish=0;
	}else{
		notice2.style.display = "none";
		finish=1;
	}
}
	submit.onclick=function(){
		if(finish==1){
			alert('注册成功！')
			location.href="index.html"
		}
	}
//表单提交之后将数据保存到数据库
// form.onsubmit = function(){
// 	//实例化ajax对象
// 	var xhr = new XMLHttpRequest();
// 	//配置ajax请求
// 	xhr.open("post","insert.php");
// 	//设置头信息
// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// 	//发送请求
// 	xhr.send("user="+account.value+"&pass="+password2.value);
// 	//监听ajax状态变化
// 	xhr.onreadystatechange = function(){
// 		//如果响应完成
// 		if(xhr.readyState == 4){
// 			//如果响应成功
// 			if(xhr.status == 200){
// 				//接受响应的数据
// 				var text = xhr.responseText
// 				//如果为1则注册成功
// 				if(text == 1){
// 					alert("注册成功！");
// 					location.href = "index.html"
// 				}
// 			}
// 		}
// 	}
// }