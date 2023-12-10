function registerform() {
    event.preventDefault();
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var createPassword=document.getElementById('cre-password');
    var confirmPassword=document.getElementById('con-password');
    if (name.value === " ".trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Name should not be empty',
            text: 'Something went wrong!',
          })
    
    } else if(email.value===" ".trim()) {  
        Swal.fire({
            icon: 'error',
            title: 'email should not be empty',
            text: 'Something went wrong!',
          })
    }else if(createPassword.value===" ".trim()) {  
        Swal.fire({
            icon: 'error',
            title: 'Create password should not be empty',
            text: 'Something went wrong!',
          })
    }else if(createPassword.value !== confirmPassword.value) {  
        Swal.fire({
            icon: 'error',
            title: 'Confirm password should be same',
            text: 'Something went wrong!',
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: `${name.value} You register successfully `,
            showConfirmButton: false,
            timer: 1500,
          })
          var userData={
            name:name.value,
            email:email.value,
            createPassword:createPassword.value,
            confirmPassword:confirmPassword.value
        }
        localStorage.setItem("userData",JSON.stringify(userData));
        setTimeout(() =>{
            window.location.href="./index.html"
        },2000)         

    }
}