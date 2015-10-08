//全局变量
var dragObject = null;
var mouseOffset = null;

//捕获鼠标相关事件
document.onmousemove = mouseMove;
document.onmouseup = mouseUp;

//创建鼠标位置
function mousePoint(x, y) {
    this.x = x;
    this.y = y;
}

//寻找鼠标位置
function mousePosition(evnt) {
    var x = parseInt(evnt.clientX);
    var y = parseInt(evnt.clientY);
    return new mousePoint(x, y);
}

//获取元素在页面中的位置偏移量
function getMouseOffset (target, evnt) {
    var theEvent = evnt ? evnt : window.event;
    var mousePos = mousePosition(theEvent);
    
    var x = mousePos.x - target.offsetLeft;
    var y = mousePos.y - target.offsetTop;
    return new mousePoint(x, y);
}

//停止拖放
function mouseUp(evnt) {
    dragObject = null;
}

//当拖动时捕获鼠标的移动
function mouseMove(evnt) {
    if (!dragObject) return;
    var theEvent = evnt ? evnt : window.Event;
    var mousePos = mousePosition(theEvent);
    
    //如果可拖放，设置新的绝对位置
    if (dragObject) {
        dragObject.style.position = 'relative';
        
        dragObject.style.top = mousePos.y - mouseOffset.y + "px";
        dragObject.style.left = mousePos.x - mouseOffset.x + "px";
        return false;
    }
}

//使对象可拖放
function makeDraggable (item) {
    if (item) {
        item = document.getElementById(item);
        item.onmousedown = function(theEvent) {
            dragObject = this;
            mouseOffset = getMouseOffset(this, theEvent);
            console.log(theEvent);
            return false;
        }
    }
}

window.onload=function() {
    makeDraggable("div1");
}