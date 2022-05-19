var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    if(btn.innerText=="Subscribe"){
        btn.style.backgroundColor="white";
        btn.style.color="black";
        btn.style.borderColor="black";
        btn.innerText="Subscribed";
    } else {
        btn.style.backgroundColor="black";
        btn.style.color="white";
        btn.style.borderColor="black";
        btn.innerText="Subscribe";
    }
})