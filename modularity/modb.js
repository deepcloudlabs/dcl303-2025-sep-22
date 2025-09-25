import {is_even} from "./moda";

export function* get_evens(...numbers){
    for (let number of numbers){
        if (is_even(number)){
            yield number;
        }
    }
}