$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/html/header.html",
        type:"get",
        success: function(res) {
            //动态添加<link>到<head>元素中，自动引入header.css
            $("<link rel='stylesheet' href='../css2/header2.css'>").appendTo("head");
            //用接收到的片段代替页面上空的<header>
            $(res).replaceAll("#header");
        }
    });
        //console.log(document.cookie);
        var arr = document.cookie.split('; ');
        var cookieObj = {};  //用于保存Cookie数据的对象
        arr.forEach( (str)=>{
            var pair = str.split('=');//把'key=value'拆成['key', 'value']
            // console.log(pair);
           cookieObj[ pair[0]] = pair[1];
           
        } )
        if(cookieObj.HHHH == undefined){

        }else{
        //console.log(cookieObj.name);
        var denglu = document.querySelector("#d3");
        //console.log(denglu)
        denglu.innerHTML=`<a>${cookieObj.HHHH}</a>`
        }
})