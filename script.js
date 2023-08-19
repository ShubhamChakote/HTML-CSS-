const btn = document.querySelector("button.down")

var flag = 0

btn.addEventListener('click',()=>{

if(flag==0){

    btn.innerHTML="up";
    document.querySelector("#ans").style.display="none";
    flag = 1;

}
else{

    btn.innerHTML="down";
    document.querySelector("#ans").style.display="block";
    flag = 0;

}






})



/*btn.addEventListener('click',()=>{

    if(btn.contains('active')){

        btn.classList.remove("active");

    }
    else{
        btn.classList.add("active");
    }
    


})*/
