import { addLoader, toggleCatInfo} from "./loader";
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sjxMw1O3pDXURKUsrpjwnQicYeT4J5xCIP0O2KHpu7eK7AqckNUkqyn0gopZ8Cuq";
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_sjxMw1O3pDXURKUsrpjwnQicYeT4J5xCIP0O2KHpu7eK7AqckNUkqyn0gopZ8Cuq";



export function fetchBreeds() {
    addLoader();
    const END_POINT = '/breeds';
    const params = new URLSearchParams({
        api_key: API_KEY,
    })
    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}



export function fetchCatByBreed(breedId) {
    addLoader();
    toggleCatInfo();
    const END_POINT = '/images/search';
    const params = new URLSearchParams({
        breed_ids: breedId,
        api_key: API_KEY,
    })
    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}

