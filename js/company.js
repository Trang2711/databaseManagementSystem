var user = null;
var userId = null;
var rootRef = firebase.database().ref();

async function initCompanyPage() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('; ');
    userId = ca[ca.length - 2];
    var snapshot = await rootRef.child('/ACCOUNT/' + userId).once("value");
    console.log(snapshot.val());
    user = snapshot.val();

    var container = document.querySelector('.container-body')
    var findJob = document.getElementById('findJobBtn');
    var companyCV = document.getElementById("companyCV");
    var signOut = document.getElementById('lognOut');
    var companyAccount = document.getElementById('companyAccountIcon');

    container.innerHTML = view.search
    companyAccount.innerText = user.USERNAME;

    findJob.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.search;
    });

    companyCV.addEventListener('click', event => {
        event.preventDefault();
        container.innerHTML = view.infoPersonalLayout;
        document.getElementById('containerInfo').innerHTML = view.infoCompany;

        cvInitPage();
    });

    signOut.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "./home.html"
    })
}
window.onload = initCompanyPage();

function cvInitPage() {
    showInfoCV();
}

async function showInfoCV() {

    var snapshot = await rootRef.child('/COMPANY/' + userId).once("value");
    var companyInfo = snapshot.val();
    fillTextById('companyName', companyInfo.NAME);
    fillTextById('companyWebsite', companyInfo.WEBSITE);
    fillTextById('companyEmail', 'Email: ' + user.EMAIL);
    fillTextById('companyPhone', 'Số điện thoại: ' + companyInfo.PHONE);
    fillTextById('companyDescription', companyInfo.DESCRIPTION);

    let snapshot1 = await rootRef.child('/JOB').orderByChild("COMPANY_ID").equalTo(userId).once('value');
    let job = snapshot1.val();
    console.log(job);
    let listIdJob = Object.getOwnPropertyNames(job);
    let listJob = document.getElementById('listJob');
    let i = 0
    listIdJob.forEach(id => {
        i++;
        console.log(job[id]);
        let html = `<div class="col" style="margin-bottom: 30px;">
        <div id="${id}" class="card">
            <div class="card-body">
                <div class="delete-card">
                    <i class="far fa-trash-alt"></i>
                </div>
                <h5>${job[id].TITLE}</h5>
                <p class="lead" style="font-size: 20px;">Công ty: ${companyInfo.NAME}<br>Lương: ${job[id].SALARY.LOW} - ${job[id].SALARY.HIGHT}
                    triệu<br>Vị trí tuyển dụng: ${job[id].EMPLOYMENT_TYPE}</p>
                <button type="button" class="btn btn-sm btn-primary detail-btn" data-toggle="modal"
                    data-target="#showJobModal">
                    Chi tiết
                </button>

                <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal"
                    data-target="#editJobModal">
                    Chỉnh sửa
                </button>
            </div>
        </div>
    </div>`
        listJob.innerHTML = listJob.innerHTML + html;
        if (i % 2 == 0) {
            listJob.innerHTML = listJob.innerHTML + `<div class="w-100"></div>`;
        }
    });

    var listDetailBtn = document.getElementsByClassName('detail-btn');
    for (let i = 0; i < listDetailBtn.length; i++) {
        listDetailBtn[i].addEventListener('click', async function () {
            let id = this.parentNode.parentNode.id;
            fillTextById('modalTitle', job[id].TITLE);
            fillTextById('senioriryLevel', job[id].SENIORIRY_LEVEL);
            fillTextById('city', job[id].CITY);
            fillTextById('jobType', job[id].EMPLOYMENT_TYPE);
            fillTextById('desciptionJob', job[id].DESCRIPTION);
            let snapshot2 = await rootRef.child('/JOB_SKILL').orderByChild("JOB_ID").equalTo(parseInt(id)).once('value');
            let jobSkill = snapshot2.val();
            if (jobSkill) {
                let listIdJobSkill = Object.getOwnPropertyNames(jobSkill);
                listIdJobSkill.forEach(idJobSkill => {
                    var id = jobSkill[idJobSkill].SKILL_ID;
                    console.log(id);
                    rootRef.child('/SKILL/' + id).once('value')
                        .then(snap => {
                            console.log(snap.val());
                            let skillName = snap.val().SKILL;
                            let element = document.createElement("span");
                            element.innerText = skillName;
                            skillList.appendChild(element);
                        })
                })
            }
        })
    }
    createJob();
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

function createJob() {
    let createJobForm = document.getElementById('createJob');
    createJobForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let title = document.getElementsByName("title")[0].value;
        let senioriryLevel = document.getElementsByName("senioriryLevel")[0].value;
        let city = document.getElementsByName("city")[0].value;
        let jobType = document.getElementsByName("jobType")[0].value;
        let decription = document.getElementsByName("decription")[0].value;
        let skill = document.getElementsByName("skill")[0].value;

        var notify = document.getElementById("notify");

        if (title && senioriryLevel && city && jobType && decription && skill){
            var rootRef = firebase.database().ref();
            var newPostKey = rootRef.child("/ACCOUNT").push().key;
            var currentDate = new Date();
            var date = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var newData = {
                CITY: city,
                COMPANY_ID: userId,
                DESCRIPTION: decription,
                EMPLOYMENT_TYPE: jobType,
                PUBLISHED_DATE: date + "/" + month + "/" + year,
                SENIORIRY_LEVEL: senioriryLevel,
                TITLE: title
            };
            var update = {};
            update['/JOB/' + newPostKey] = newData;
            rootRef.update(update);
            notify.innerText = "Đăng kí thành công!";
        } else{
            notify.innerText = "Vui lòng nhập đầy đủ các trường!";
        }
    })
}