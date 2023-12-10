if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res =>{
                
                console.log("service worker registered")
                Notification.requestPermission().then(res =>{
                    if (Notification.permission == "granted") {
                        console.log("granted permission")
                        return
                    }
                    console.log(res)
                })

    })
            .catch(err => console.log("service worker not registered", err))
    })
}
function login(){
    event.preventDefault();
    var email=document.getElementById('email');
    var createPassword=document.getElementById('cre-password');
    var loginData = JSON.parse(localStorage.getItem("userData"));
    if(!loginData){
        Swal.fire({
            icon: 'error',
            title: 'User Not Found',
          })
    }
    if(loginData.email !== email.value){
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
          })
    }else if(loginData.createPassword !== createPassword.value){
        Swal.fire({
            icon: 'error',
            title: 'Incorrect Password'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Successfully Login',
          })
        setTimeout(() => {
            window.location.href ="./home.html"
            
        },2000)
    }

}
