// function toggleMenu() {
//     const menu2 = document.getElementsByClassName("menu2")
//     for(let i = 0; i < menu2.length; i++) {menu2[i].style.display = "block";}
// }

// function toggleMenu() {
//     document.getElementsByClassName("menu2")[0].style.display = "block";
// }

function toggleMenu() {
    const menu2 = document.getElementsByClassName("menu2")[0];
    const computedStyle = window.getComputedStyle(menu2);

    if (computedStyle.display === "none")
        menu2.style.display = "block";
    else
        menu2.style.display = "none";
}