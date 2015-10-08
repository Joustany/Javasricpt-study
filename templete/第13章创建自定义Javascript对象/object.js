var theobjs = new Array();
var currentOpacity = 0;
//淡出
function opacityDown(obj) {
        
    currentOpacity = theobjs[obj].objGetOpacity();

    currentOpacity -= 0.1;

    theobjs[obj].objSetOpacity(currentOpacity);
}

//展现       
function opacityUp(obj) {
    
    currentOpacity = theobjs[obj].objGetOpacity();
    
    currentOpacity+=0.1;
    
    theobjs[obj].objSetOpacity(currentOpacity);
}

var flag = 1;

document.onclick = function () {
    
    currentOpacity=theobjs["div1"].objGetOpacity();
    if(flag){
    
        if(currentOpacity > 0){
            opacityDown("div1");
            opacityUp("div2");
        }
        else{
            flag = !flag;
        }
    }
    else{
        if(currentOpacity < 1){
            opacityUp("div1");
            opacityDown("div2");
        }
        else{
            flag = !flag;
        }
    }
    
    
}

function DivObj(obj) {
    this.obj = obj;
    console.log(this.obj);
    
    this.objGetOpacity = function () {
        return parseFloat(this.obj.style.opacity);
    }
    
    this.alphaOpacity = function(value) {
        var opacity = value * 100;
        this.obj.style.filter = "alpha(opacity=)" + opacity + ")";
    };
    
    this.cssOpacity = function(value) {
        this.obj.style.opacity=value;
    };
    
    this.objSetOpacity = function(value) {
        this.alphaOpacity(value);
        this.cssOpacity(value);
    }
    
}

window.onload=function() {
    theobjs["div1"] = new DivObj(document.getElementById("div1"));
    theobjs["div2"] = new DivObj(document.getElementById("div2"));
    
    //设置最初的不透明度
    theobjs["div1"].objSetOpacity(1.0);
    theobjs["div2"].objSetOpacity(0.0);
}