function Tune (title) {
    this.title = title;
}

function printTitle() {
    document.writeln(this.title + "<br />");
}

window.onload=function() {
    Tune.prototype.print = printTitle;
    
    var oneTune = new Tune("one title");
    oneTune.print();
    
    var anotherTune = new Tune("another title");
    anotherTune.print();
}