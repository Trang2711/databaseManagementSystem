window.onload = function(){
        initHome();
}
function initHome(){
    var container = document.getElementById('container');
    container.innerHTML = view.home;
    directionPage();
}