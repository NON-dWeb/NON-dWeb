/* Animation du slider */

// Objet contenant la liste des sliders
sliders = {};

// Creation d'un nouveau slider
function createSlider(name) {
    // creation d'un objet slider
    currentSlider = {};

    // ajout à la liste des sliders
    sliders[name] = currentSlider;

    currentSlider.name = name;
    currentSlider.items = document.querySelectorAll(name + ' .slider img');
    currentSlider.nbSlide = currentSlider.items.length;
    currentSlider.suivant = document.querySelector(name + ' .right');
    currentSlider.precedent = document.querySelector(name + ' .left');
    currentSlider.count = 0;

    // ajoute les évènements sur le clic
    currentSlider.suivant.addEventListener('click', function (e) { slideSuivante(name); });
    currentSlider.precedent.addEventListener('click', function (e) { slidePrecedente(name); });
}

function slideSuivante(name) {
    // récupération du slider depuis la liste à partir de son nom
    currentSlider = sliders[name];

    currentSlider.items[currentSlider.count].classList.remove('active');

    if (currentSlider.count < currentSlider.nbSlide - 1) {
        currentSlider.count++;
    } else {
        currentSlider.count = 0;
    }

    currentSlider.items[currentSlider.count].classList.add('active');

    //console.log(currentSlider.count);   
}


function slidePrecedente(name) {
    // récupération du slider depuis la liste à partir de son nom
    currentSlider = sliders[name];

    currentSlider.items[currentSlider.count].classList.remove('active');

    if (currentSlider.count > 0) {
        currentSlider.count--;
    } else {
        currentSlider.count = currentSlider.nbSlide - 1;
    }

    currentSlider.items[currentSlider.count].classList.add('active');

    // console.log(currentSlider.count);

}

function keyPress(e) {
    //console.log(e);

    if (e.keyCode === 37) {
        // récupère la liste des clés de l'objet
        keys = Object.keys(sliders);        
        // pour chaque clé contenu dans le tableau (id du slider)
        for (i = 0; i < Object.keys(sliders).length; i++) {
            sliders[keys[i]].precedent.click();
        }
    } else if (e.keyCode === 39) {
        keys = Object.keys(sliders);
        for (i = 0; i < keys.length; i++) {
            sliders[keys[i]].suivant.click();
        }
    }
}
document.addEventListener('keydown', keyPress);


createSlider('#slider0');
createSlider('#slider1');
createSlider('#slider2');
createSlider('#slider3');
createSlider('#slider4');
createSlider('#slider5');


