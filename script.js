const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav =document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
let currentTheme = "";

// change the theme on load acourdning local storge 
if (window.localStorage.theme) {
    currentTheme=window.localStorage.theme;
    document.documentElement.setAttribute('data-theme',currentTheme);
    if (currentTheme==="dark") {
        darkMode();
        toggleSwitch.checked = true ;
    }else if (currentTheme==="light") {
        lightMode();
        toggleSwitch.checked =false ;
    }
}

function imgMode (color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
    nav.style.background = 'rgb( 0 0 0 / 50% )';
    textBox.style.background = 'rgb(255 255 255 / 50% )';
    toggleIcon.children[0].textContent ='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imgMode("dark");
}

function lightMode() {
    nav.style.background = 'rgb(255 255 255 / 50% )';
    textBox.style.background = 'rgb(0 0 0 / 50% )';
    toggleIcon.children[0].textContent ='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    imgMode("light");
}

// event listiner

function switchTheme (event) {
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        window.localStorage.theme = "dark";
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme','light');
        window.localStorage.theme = "light";
        lightMode();
    }
    
}

toggleSwitch.addEventListener('change',switchTheme);

