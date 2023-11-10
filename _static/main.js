
function addLineDivs(el, className) {
    var div;
    div = document.createElement('div');
    div.classList = "line top " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line bottom " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line left " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line right " + className;
    el.append(div);
}

document.addEventListener("DOMContentLoaded", function(event) {

    var starBg = document.querySelectorAll("[data-background-hash='nullauto_static/grid-bg.pngnullnull#ffffffnullrepeat-xleft topnullnull']");
    for (var i = 0; i < starBg.length; i++) {
        console.log(starBg[i]);
        addLineDivs(starBg[i], "grid");
    }

});
