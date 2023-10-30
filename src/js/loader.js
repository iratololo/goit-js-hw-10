import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { elements} from "./elements";


elements.loader.classList.add("js-hidden");
elements.select.classList.add("js-hidden");

export function addLoader() {
    elements.loader.classList.remove("js-hidden");
    Loading.standard(elements.loader.textContent);
}

export function removeLoader() {
    elements.loader.classList.add("js-hidden");
    Loading.remove();
}

export function toggleSelect() {
    elements.select.classList.toggle("js-hidden");
}

export function toggleCatInfo() {
    elements.catInfo.classList.toggle("js-hidden");
}
