import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import { toggleSelect, removeLoader, toggleCatInfo } from "./js/loader";
import { elements} from "./js/elements";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

Notify.init({
    width: '50%',
    position: 'center-top',
});



elements.select.addEventListener("change", handlerSelect);

fetchBreeds()
    .then((breeds) => {
        toggleSelect();
        elements.select.innerHTML = createSelectMurkup(breeds);
        new SlimSelect({
            select: '.breed-select',
            settings: {
        placeholderText: 'Find a breed',
        }
        })
    }
    )
    .catch(() => Notify.failure('Oops! Something went wrong! Try reloading the page!'))
    .finally(()=>  removeLoader());


function handlerSelect(evt) {
    const selectedBreed = evt.target.value;

    fetchCatByBreed(selectedBreed)
        .then((data) => {
            toggleCatInfo();
            elements.catInfo.innerHTML = createInfoMurkup(data[0]);
        })
        .catch(() => Notify.failure('Oops! Something went wrong! Try reloading the page!'))
        .finally(()=>  removeLoader());
}



function createSelectMurkup(arr) {
    return arr.map(({id,name})=> `<option value="${id}">${name}</option>`).join("");
}


function createInfoMurkup(obj) {
    const {breeds:[{name, description, temperament }], url } = obj;
    return `<div class="card-set-item"><img src="${url}" alt="${name}"></div>
      <div class="card-set-item">
        <h2 class="cat-breed">${name}</h2>
        <p class="cat-breed-description">${description}</p>
        <p class="cat-breed-temperament">Temperament: ${temperament}</p>
      </div>`
};






    

