var winH = 0, winW = 0, backwall, partId = "wall-2";

$(".part-selector").click(function () {
    partId = $(this).attr("id");
    $(".part-selector").removeClass("active");
    $(this).addClass("active");
});
$(".palette-item").click(function () {
    var color = $(this).css("background-color");
    $("." + partId).css("background-color", color);
});
$("#reset-colors").click(function () {
    $(".wall-1").css("background-color", "white");
    $(".wall-2").css("background-color", "white");
    $(".floor").css("background-color", "white");
});

window.onload = function () {
    winH = window.innerHeight;
    winW = window.innerWidth;
    backwall = document.getElementById("backwall");
    repositionBackface();
};
window.onresize = function () {
    winH = window.innerHeight;
    winW = window.innerWidth;
    repositionBackface();
};

function repositionBackface() {
    var x = 0;
    if (winW < winH) {
        x = winW;
    } else {
        x = winH;
    }
    backwall.style.transform = "translateZ(-" + (x - 1) + "px)";
    backwall.style.webkitTransform = "translateZ(-" + (x - 1) + "px)";
}