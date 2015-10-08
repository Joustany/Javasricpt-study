function Tune () {
    
}

function printTitle() {
    document.writeln(this.title + "<br />");
}

window.onload=function() {
    
    //通过prototype属性扩展对象
    var t = Tune.prototype;
    
    //getter和setter
    t._defineGetter_("title", function() { return "Title is " + this.myTitle; });
    t._defineSetter_("title", function(tt) { this.myTitle = tt; });
    t.print = printTitle;
    
    var oneTune = new Tune;
    oneTune.title = "One Title";
    oneTune.print();
    
    var anotherTune = new Tune;
    anotherTune.title = "another title";
    anotherTune.print();
}