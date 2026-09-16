document.addEventListener("DOMContentLoaded",function(){
    const links = document.querySelectorAll(".nav-links",".navbar-nav",".dropdowm-item")

    const navbarCollapse = document.getElementById('navbarSupportedContent');

    links.forEach(function (link){
        link.addEventListener("click",function(){
            if(navbarCollapse.classList.contains('show')){
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse){
                    bsCollapse.hide();
                }
            }
        })
    })
})

const navbar = document.querySelector(".navbar-toggler");

navbar.addEventListener("mouseover", function () {

    navbar = false
    navbar.style.border = "2px solid #012559";
    navbar.style.boxShadow = "0 0 10px rgba(1, 37, 89, 0.3)";
        navbar = false
});