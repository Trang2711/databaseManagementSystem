var user = null;
var userId = null;
var rootRef = firebase.database().ref();
async function initPersonalPage() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('; ');
    userId = ca[ca.length - 2];
    console.log(userId);
    var snapshot = await rootRef.child('/ACCOUNT/' + userId).once("value");
    console.log(snapshot.val());
    user = snapshot.val();

    var container = document.querySelector('.container-body')
    var findJob = document.getElementById('findJobBtn');
    var cv = document.getElementById("myCV");
    var signOut = document.getElementById('lognOut');
    var userAccount = document.getElementById('userAccountIcon');

    container.innerHTML = view.search
    userAccount.innerText = user.USERNAME;

    findJob.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.search;
    });

    cv.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.infoPersonalLayout;
        document.getElementById('containerInfo').innerHTML = view.showPersonal;

        cvInitPage();
    });

    signOut.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "./home.html"
    })
}
window.onload = initPersonalPage();

function cvInitPage(){
    showInfoCV();
    var container = document.getElementById('containerInfo');
    var editInfo = document.getElementById('editInfo');
    var showInfo = document.getElementById('showInfo');
    editInfo.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.infoPersonalEdit;
        showEditInfoCV();
        editInfo.classList.add('active');
        showInfo.classList.remove('active');

    });

    showInfo.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.showPersonal;
        showInfo.classList.add('active');
        showInfoCV();
        editInfo.classList.remove('active');
    });
}

async function showInfoCV() {

    var snapshot = await rootRef.child('/STUDENT/' + userId).once("value");
    var personalInfo = snapshot.val();
    fillTextByClass("fullname", personalInfo.FIRSTNAME + " " + personalInfo.LASTNAME);
    fillTextById("dayOfBirth", personalInfo.DATEOFBIRTH);
    fillTextById("phoneNumber", personalInfo.PHONE);

    let snapshot1 = await rootRef.child('/EDUCATION').orderByChild("STUDENT_ID").equalTo(userId).once('value');
    let education = snapshot1.val();
    let listIdEducation = Object.getOwnPropertyNames(education);
    let educationTable = document.getElementById('educationTable');

    listIdEducation.forEach(id => {
        let newRow = educationTable.insertRow(-1);

        let newCell1 = newRow.insertCell(0);
        newCell1.innerText = education[id].DATE;

        let newCell2 = newRow.insertCell(1);
        newCell2.innerText = education[id].SCHOOL;
    })

    let snapshot2 = await rootRef.child('/EXPERIENCE').orderByChild("STUDENT_ID").equalTo(userId).once('value');
    let experience = snapshot2.val();
    let listIdExperience = Object.getOwnPropertyNames(experience);
    let experienceList = document.getElementById('experienceList');

    listIdExperience.forEach(id => {
        if (id != "length") {
            var btn = document.createElement("li");
            btn.classList.add("list-group-item");
            let html = `<p>${experience[id].COMPANY_NAME + " - " + experience[id].DESCRIPTION} </p>
        <p class="note">${experience[id].DATE}</p>`;
            btn.innerHTML = html;
            experienceList.appendChild(btn);
        }
    })

    let snapshot3 = await rootRef.child('/STUDENT_SKILL').orderByChild("STUDENT_ID").equalTo(userId).once('value');
    let skill = snapshot3.val();
    let listIdStudent_Skill = Object.getOwnPropertyNames(skill);
    let skillList = document.getElementById('skillList');

    listIdStudent_Skill.forEach(idSkillOfStudent=>{
        var id = skill[idSkillOfStudent].SKILL_ID;
        console.log(id);
        rootRef.child('/SKILL/' + id).once('value')
            .then(snap=>{
                console.log(snap.val());
                let skillName = snap.val().SKILL;
                let btn = document.createElement("div");
                btn.classList.add("col");
                btn.classList.add("py-3");
                let html = `<i class="fas fa-check"></i><span>${skillName}</span>`;
                btn.innerHTML = html;
                skillList.appendChild(btn);
            })
    })
}

async function showEditInfoCV() {
    showInfoCV();
    //edit info
}

function fillTextById(elementId, text) {
    document.getElementById(elementId).innerText = text;
}
function fillTextByClass(elementClass, text) {
    let elements = document.getElementsByClassName(elementClass);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = text;
    }
}
