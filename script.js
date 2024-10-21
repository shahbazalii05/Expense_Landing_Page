var rslidebar=document.querySelector(".rslidebar");
var slidebar=document.querySelector("#slider");
rslidebar.addEventListener("click",function(){
        slidebar.style.display = "block";
    rslidebar.style.display = "none";
})

document.querySelector(".rpslidebar").addEventListener("click",function(){
    slidebar.style.display = "none";
    rslidebar.style.display = "block";
})