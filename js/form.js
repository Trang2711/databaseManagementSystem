window.user = null;
function handleFormSignIn() {
    var backHome = document.getElementById('backHome');
    backHome.addEventListener('click', event => {
        event.preventDefault()
        // location.reload();
        initHome()
    })

    document.getElementById('signInForm').addEventListener('submit', function(event){
        event.preventDefault();
        signIn();
    })
}
function handleFormSignUpForCompany() {
    var backHome = document.getElementById('backHome');
    backHome.addEventListener('click', event => {
        event.preventDefault()
        // location.reload();
        initHome()
    })

    var signInForm = document.getElementById('signUpForCompanyForm');
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        signUp("company");
    })
}
function handleFormSignUpForEmployee() {
    var backHome = document.getElementById('backHome');
    backHome.addEventListener('click', event => {
        event.preventDefault()
        // location.reload();
        initHome()
    })
    var signUpForm = document.getElementById('signUpForEmployeeForm');
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        signUp("employee");
    })
}


function signIn() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    var usernameNote = document.getElementById('usernameHelp');
    var passwordNote = document.getElementById('passwordHelp');
    let check = true;
    if (username == "" || !username) {
        usernameNote.innerText = 'Vui lòng nhập tên tài khoản!';
        check = false;
    } else {
        usernameNote.innerText = '';
    }
    if (!password || password == "") {
        passwordNote.innerText = 'Vui lòng nhập mật khẩu';
        check = false;
    } else {
        passwordNote.innerText = '';
    }
    if(!check){
        return
    }
    var rootRef = firebase.database().ref();
    rootRef.child('/ACCOUNT').orderByChild("USERNAME").equalTo(username).once('value')
        .then(function (snapshot) {
            let account = snapshot.val();
            if(!account){
                alert('Username không tồn tại!');
            } else{
                let id = Object.getOwnPropertyNames(account)[0];
                if(account[id].PASSWORD == password){
                    document.cookie = id;
                    if(account[id].ACCOUNT_TYPE == "Job seeker"){
                        window.location.href = "./personal.html";
                    }
                    else if(account[id].ACCOUNT_TYPE == "Enterprise"){
                        window.location.href = "./company.html";
                        // initCompanyPage(account[id]);
                    }
                }
                else{
                    alert('Username hoặc password bị sai!')
                }
            }
        })
}

function  signUp(account_type) {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var email = document.getElementById('emailInput').value;
    var phoneNumber = document.getElementById('phoneNumberInput').vaule;
    var re_password = document.getElementById('re-passwordInput').value;

    var usernameNote = document.getElementById('usernameHelp');
    var passwordNote = document.getElementById('passwordHelp');
    var emailNote = document.getElementById('emailHelp');
    var phoneNumberNote = document.getElementById('phoneNumberHelp');
    var re_passwordNote = document.getElementById('re-passwordHelp');

    let check = true;
    if(!username){
        usernameNote.innerText = "Vui lòng nhập username!";
        check = false;
    } else{
        usernameNote.innerText = "";
    }
    if(!email){
        emailNote.innerText = "Vui lòng nhập email";
        check = false;
    } else{
        emailNote.innerText = "";
    }
    if(!password){
        passwordNote.innerText = "Vui lòng nhập mật khẩu";
        check = false;
    } else{
        passwordNote.innerText = "";
    }
    if(!re_password){
        re_passwordNote.innerText = "Vui lòng xác nhận mật khẩu";
        check = false;
    } else{
        re_passwordNote.innerText = "";
    }
    if(password != re_password){
        re_passwordNote.innerText = "Mật khẩu không khớp";
        check = false;
    } else{
        re_passwordNote.innerText = "";
    }
    if(check){
        var rootRef = firebase.database().ref();
        var newPostKey = rootRef.child("/ACCOUNT").push().key;
        var newData = null;
        if(account_type == "employee"){
            newData = {
                ACCOUNT_TYPE: "Job seeker",
                ID: newPostKey,
                PASSWORD: password,
                USERNAME: username
            };
        } else if(account_type == "company"){
            newData = {
                ACCOUNT_TYPE: "Enterprise",
                ID: newPostKey,
                PASSWORD: password,
                USERNAME: username
            };
        }
        var update = {};
        update['/ACCOUNT/' + newPostKey] = newData;
        rootRef.update(update);
        alert("Đăng kí thành công!");
    }
}

