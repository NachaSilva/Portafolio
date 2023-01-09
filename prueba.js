var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e){
    var xPosition = e.clientX;  //- (theThing.offsetWidth / 2);
    var yPosition = e.clientY; //- (theThing.offsetHeight / 2);

   /* var parentPosition = getPosition(container);*/

    var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    theThing.style.transform = translate3dValue;
}

//function getPosition(element) {
//    var xposition = 0;
//    var yPosition = 0;

//    while (element) {
//        xPosition += (element.offsetLeft -element.scrollLeft + element.clientLeft);
//        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//        element = element.offsetParent;
//    }
//    return {
//        x: xPosition,
//        y: yPosition
//    }
//}