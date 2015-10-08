var Tune = function(title) {
    this.title = title;


    var performedBy = new Array();

    this.addPerformer = function (preformer) {
        var i = performedBy.length;
        performedBy[i] = preformer;
    }

    this.listPerformers = function () {
        var singers = "";
        for (var i = 0; i < performedBy.length; i++) {
            singers += performedBy[i] + "";
        }
        return singers;
    }
}

window.onload = function () {
    var song = new Tune("Hello");
    song.addPerformer("Me");
    song.addPerformer("You");
    song.addPerformer("Us");
    document.writeln("Song is " + song.title);
    document.writeln("Performed by " + song.listPerformers());
}