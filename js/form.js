
function handleFormSignIn() {
    var backHome = document.getElementById('backHome');
    backHome.addEventListener('click', event => {
        event.preventDefault()
        location.reload();
        // container.innerHTML = view.home
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
        location.reload();
        // container.innerHTML = view.home
    })
}
function handleFormSignUpForEmployee() {
    var backHome = document.getElementById('backHome');
    backHome.addEventListener('click', event => {
        event.preventDefault()
        location.reload();
        // container.innerHTML = view.home
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
                alert('Username không tồn tại!')
                window.location()
            } else{
                let id = Object.getOwnPropertyNames(account)[0];
                if(account[id].PASSWORD == password){
                    window.location.href = "./personal.html"
                }
                else{
                    alert('Username hoặc password bị sai!')
                }
            }
        })
}
