function showNav(){
    document.getElementById("nav").classList.toggle("hidden1");
    document.getElementById("icon").classList.toggle("fa-xmark");
}
function down_bg(){
    document.getElementById("page2").classList.remove("hidden1")
    document.getElementById("page2").scrollIntoView({behavior: "smooth"});
}