function ajax(url,funSucc,funFailed){

    var xhr = new XMLHttpRequest();
    url = url+'?'+new Date().getTime();//与Math.random()同理  清除缓存

    xhr.open('POST',url,true);
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
        if(xhr.status == 200){
            funSucc(xhr.responseText)
        }
				else{
            if(xhr.status){
                funFailed(xhr.statusText)
            }            
       }
      }
    }
    
}