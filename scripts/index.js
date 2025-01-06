
const menuicon = document.getElementById ("menu-icon");
const menuIcon = document.getElementById ("menu");

menuIcon.addEventListener("click", ()=>{
    if(menu.className === "hidden"){
        menu.claslist.remove("hidden");
    }
    else{
        menu.claslist.add("hidden");
    }
});
