function setCookie(key, value) {
    var cookieDate = new Date(2010, 11, 10, 19, 30, 30);
    document.cookie = key + "=" + encodeURI(value) + "; expires=" + cookieDate.toUTCString() + "; path=/";
}


//获取cookie的值
//cookie字符串示例:var1=somevalue; var2=3.55; var3=ture
function readCookie(key) {
    var cookie = document.cookie;
    
    var first = cookie.indexOf(key + "=");
    
    //存在cookie
    if (first >= 0) {
        var str = cookie.substring(first, cookie, length);
        var last = str.length;
        
        //如果是最后一个cookie
        if (last < 0) last = str.length;
        
        //获取cookie的值
        str = str.substring(0,last).split("=");
        return decodeURI(str[1]);
    }
    else{
        return null;
    }
}

function eraseCookie (key) {
    var cookieDate = new Date(2000,11,10,19,30,30);
    document.cookie = key + "=; expires=" + cookieDate.toUTCString() + "; path=/";
}