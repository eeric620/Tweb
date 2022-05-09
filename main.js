let image1 = document.querySelector('#item__one-img');
let image2 = document.querySelector('#item__two-img');
let image3 = document.querySelector('#item__three-img');
let pageTitle = document.querySelector('#head__title');

let r = "", g = "", b = "";
let item1 = document.querySelector('#item__one');
let item2 = document.querySelector('#item__two');
let item3 = document.querySelector('#item__three');
document.getElementById('one__option5').checked = false;


function changeTitle() {
    switch (image1.className) {
        case 'france':
            pageTitle.innerHTML = "France";
            break;
        case 'spain':
            pageTitle.innerHTML = "Spain";
            break;
        case 'denmark':
            pageTitle.innerHTML = "Denmark";
            break;
        case 'germany':
            pageTitle.innerHTML = "Germany";
            break;
        case 'romania':
            pageTitle.innerHTML = "Romania";
            break;
    }
}

function changeTitleTwo() {
    switch (image2.className) {
        case 'greece':
            pageTitle.innerHTML = "Greece";
            break;
        case 'kazakhstan':
            pageTitle.innerHTML = "Kazakhstan";
            break;
        case 'russia':
            pageTitle.innerHTML = "Russia";
            break;
        case 'ukraine':
            pageTitle.innerHTML = "Ukraine";
            break;
        case 'moldova':
            pageTitle.innerHTML = "Moldova";
            break;
    }
}

function changeTitleThree() {
    switch (image3.className) {
        case 'japan':
            pageTitle.innerHTML = "Japan";
            break;
        case 'china':
            pageTitle.innerHTML = "China";
            break;
        case 'india':
            pageTitle.innerHTML = "India";
            break;
        case 'finland':
            pageTitle.innerHTML = "Finland";
            break;
        case 'norway':
            pageTitle.innerHTML = "Norway";
            break;
    }
}


document.body.addEventListener('change', function (e) {
    let target = e.target;

    switch (target.id) {
        case 'one__option1':
            image1.src = 'images/france.png';
            image1.className = "france";
            item1.style.border = `2px solid black`;
            item1.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item2.style.border = "none";
            item3.style.border = "none";
            r = "0%";
            break;
        case 'one__option2':
            image1.src = 'images/spain.svg.png';
            image1.className = "spain";
            item1.style.border = `2px solid black`;
            item1.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item2.style.border = "none";
            item3.style.border = "none";
            r = "25%";
            break;
        case 'one__option3':
            image1.src = 'images/denmark.svg.png';
            image1.className = "denmark";
            item1.style.border = `2px solid black`;
            item1.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item2.style.border = "none";
            item3.style.border = "none";
            r = "50%";
            break;
        case 'one__option4':
            image1.src = 'images/germany.svg.png';
            image1.className = "germany";
            item1.style.border = `2px solid black`;
            item1.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item2.style.border = "none";
            item3.style.border = "none";
            r = "75%";
            break;
        case 'one__option5':
            image1.src = 'images/romania.svg.png';
            image1.className = "romania";
            item1.style.border = `2px solid black`;
            item1.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item2.style.border = "none";
            item3.style.border = "none";
            r = "100%";
            break;

        case 'two__option1':
            image2.src = 'images/greece.png';
            image2.className = "greece";
            item2.style.border = `2px solid black`;
            item2.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item3.style.border = "none";
            g = "0%";
            r = r;
            break;
        case 'two__option2':
            image2.src = 'images/kazakhstan.svg.png';
            image2.className = "kazakhstan";
            item2.style.border = `2px solid black`;
            item2.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item3.style.border = "none";
            g = "25%";
            break;
        case 'two__option3':
            image2.src = 'images/russia.png';
            image2.className = "russia";
            item2.style.border = `2px solid black`;
            item2.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item3.style.border = "none";
            g = "50%";
            break;
        case 'two__option4':
            image2.src = 'images/ukraine.svg.webp';
            image2.className = "ukraine";
            item2.style.border = `2px solid black`;
            item2.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item3.style.border = "none";
            g = "75%";
            break;
        case 'two__option5':
            image2.src = 'images/moldova.svg.png';
            image2.className = "moldova";
            item2.style.border = `2px solid black`;
            item2.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item3.style.border = "none";
            g = "100%";
            break;

        case 'three__option1':
            image3.src = 'images/japan.svg.png';
            image3.className = "japan";
            item3.style.border = `2px solid black`;
            item3.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item2.style.border = "none";
            b = "0%";
            break;
        case 'three__option2':
            image3.src = 'images/china.png';
            image3.className = "china";
            item3.style.border = `2px solid black`;
            item3.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item2.style.border = "none";
            b = "25%";
            break;
        case 'three__option3':
            image3.src = 'images/india.svg.png';
            image3.className = "india";
            item3.style.border = `2px solid black`;
            item3.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item2.style.border = "none";
            b = "50%";
            break;
        case 'three__option4':
            image3.src = 'images/finland.jpeg';
            image3.className = "finland";
            item3.style.border = `2px solid black`;
            item3.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item2.style.border = "none";
            b = "75%";
            break;
        case 'three__option5':
            image3.src = 'images/norway.svg.png';
            image3.className = "norway";
            item3.style.border = `2px solid black`;
            item3.style.border = `2px solid rgb(${r}, ${g} , ${b})`;
            item1.style.border = "none";
            item2.style.border = "none";
            b = "100%";
            break;
    }
    console.log(r, g, b);
});

function resetFunction() {
    item1.style.border = "none";
    item2.style.border = "none";
    item3.style.border = "none";
    pageTitle.innerHTML = "Flag";
    image1.src = 'images/flag.png';
    image2.src = 'images/flag.png';
    image3.src = 'images/flag.png';
    document.getElementById('one__option1').checked = true;
    document.getElementById('two__option1').checked = true;
    document.getElementById('three__option1').checked = true;

}