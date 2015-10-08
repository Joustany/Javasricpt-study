window.onload = function () {
    //console.log(img.item(0).id);
    document.getElementById("inputAttr").onclick = imagesAttribute;
    getLinks();
}

function imagesAttribute() {
    var img = document.images;
    for (var i=0; i < img.length; i++) {
        var imgItems = img.item(i);
        console.log(imgItems.id);
        var imgAttr = imgItems.id + " " + imgItems.alt + " " +  imgItems.className;
        console.log(imgAttr);
    }
}

function getLinks() {
    var theLinks = document.links;
    var theHrefs = document.getElementById("hrefs");
    
    for (var i =0; i < theLinks.length; i++) {
        var Hrefs = theLinks.item(i).href;
        var p = document.createElement("span");
        var txt = document.createTextNode(Hrefs);
        p.appendChild(txt);
        theHrefs.appendChild(p);
    }
}

