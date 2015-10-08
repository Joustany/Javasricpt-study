//如果启用cookie
window.onload = function () {
    if (navigator.cookieEnabled) {
        
        var sum = readCookie("sum");
        
        if (sum) {
            var iSum = parseInt(sum) + 1;
            alert("cookie cout is " + iSum);
            if(iSum > 5) {
                eraseCookie("sum");
            }
            else {
                setCookie("sum", iSum);
            }
        }
        else {
            alert("no cookie, setting now");
            setCookie("sum", 0);
        }
    }
}

//将cookie有效日期设置为2010年
function setCookie(key,value) {
    
    var cookieDate = new Date(2015, 11, 10, 19, 30, 30);
    document.cookie=key + "=" + encodeURI(value) + "; expires=" + cookieDate.toUTCString() + "; path=/";
}

//在每个cookie之前用分号隔开
function readCookie(key) {
    var cookie = document.cookie;
    console.log(cookie);
    var first = cookie.indexOf(key+"=");
    console.log(first);
    
    //存在cookie
    if (first >= 0) {
        var str = cookie.substring(first, cookie.length);
        console.log(str);
        var last = str.indexOf(";");
        console.log(last);
        
        //如果是最后一个cookie
        if (last < 0) last = str.length;
        else {
            console.log("NO");
        }
        
        //获取cookie的值
        str = str.substring(0, last).split("=");
        return decodeURI(str[1]);
        
    }
    else {
        return null;
    }
}

function eraseCookie(key) {
    var cookieDate = new Date(2000, 11, 10, 19, 30, 30);
    document.cookie = key + "= ; expires=" + cookieDate.toUTCString() + "; path=/";
}