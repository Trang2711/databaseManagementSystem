function directionPage(){
    var container = document.querySelector('.container-body')
    var findJob = document.getElementById('findJobBtn');
    var cv = document.getElementById("myCV");

    container.innerHTML = view.search

    findJob.addEventListener('click', event=>{
        event.preventDefault();
        container.innerHTML = view.search;
    });

    cv.addEventListener('click', event=>{
        event.preventDefault();
        container.innerHTML = view.infoPersonalLayout;
        document.getElementById('containerInfo').innerHTML = view.showPersonal;
        cvDirection();
    });


}
directionPage();
function cvDirection(){
    var container = document.getElementById('containerInfo');
    var editInfo = document.getElementById('editInfo');
    var showInfo = document.getElementById('showInfo');
    editInfo.addEventListener('click', event=>{
        event.preventDefault();
        container.innerHTML = view.infoPersonalEdit;
        editInfo.classList.add('active');
        showInfo.classList.remove('active');

    });

    showInfo.addEventListener('click', event=>{
        event.preventDefault();
        container.innerHTML = view.showPersonal;
        showInfo.classList.add('active');
        editInfo.classList.remove('active');
    });
}