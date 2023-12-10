let logout=document.getElementById("logout")
function logOut(){
    setTimeout(()=>{
        window.location.href="./index.html"
    },1000)
}
logout.addEventListener("click",logOut)