function directionPage(){
    var container = document.getElementById('container');
    var signIn = document.getElementById("signIn");
    var signUpForCompany = document.getElementById('signUpForCompany');
    var signUpForEmployee = document.getElementById('signUpForEmployee');


    signIn.addEventListener('click', event=>{
        event.preventDefault();
        container.innerHTML = view.signIn;
        handleFormSignIn();
    });
    signUpForEmployee.addEventListener('click', event=>{
        event.preventDefault();
        console.log("signUpForEmployee")
        container.innerHTML = view.signUpForEmployee;
        handleFormSignUpForEmployee();
    });
    signUpForCompany.addEventListener('click', event=>{
        event.preventDefault();
        console.log('signUpForCompany')
        container.innerHTML = view.signUpForCompany;
        handleFormSignUpForCompany();
    })
}