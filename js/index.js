//通过js获取数据,通过ajax发送后与数据库数据比较
var account = document.querySelector("#account");
var password = document.querySelector("#password");
var index = document.querySelector("[name=index]");
var login = document.querySelector("[name=login]");
//点击登录获取表单数据与数据库对比
index.onclick = function(){
	var uesr = account.value;
	var pw = password.value;
	//实例化ajax
	var xhr = new XMLHttpRequest();
	//配置请求
	xhr.open("post","index.php" );
	//添加头部信息
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded" );
	//发送头部信息
	xhr.send("user="+user+"&pw="+pw);
	//检测ajax状态
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var text = xhr.responseText;
				if(text==1){
					alert("登陆成功");
				}else{
					if(text==0){
						alert("密码错误");
					}else{
						alert("账号错误");
					}
				}
			}
		}
	}
}