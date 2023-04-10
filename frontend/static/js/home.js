function showNav(){
    document.getElementById("nav").classList.toggle("hidden1");
    document.getElementById("icon").classList.toggle("fa-xmark");
}
function down_bg(){
    document.getElementById("about").classList.remove("hidden1")
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}