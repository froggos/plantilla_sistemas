let toggler = document.querySelector(".sidebar-toggler");
toggler.addEventListener("click", function(){
    toggle();
});

const toggle = () => {
    document.querySelector("body").classList.toggle("active");
}