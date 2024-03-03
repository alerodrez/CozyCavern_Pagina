function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display == "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}