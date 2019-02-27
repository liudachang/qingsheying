(function(){
    var dl = document.querySelector(".shuru input");
    var name = document.querySelector("#test")
    var fh = document.querySelector(".tj button");
    dl.onblur= ()=>{
        var reg = /^[a-z0-9]{6}$/i
        if(reg.test(dl.value)){
            name.innerHTML = "";
            fh.onclick = ()=>{
                location.href = "http://127.0.0.1:3000/html/start.html";
                document.cookie = `HHHH=${dl.value}`; //Cookie的KV对中=左右不能加空格
                document.cookie = 'password=0917'; //不会覆盖上一次的赋值，实际是多加了一个Cookie
            }
        }else{
            name.innerHTML="用户名或密码不正确"
        }
    };
   
    
})();