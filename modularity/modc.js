import {get_evens} from "./modb";

export function fun(){
    for (let even of get_evens(1,2,3,4,5,6,7,8,9,10)){
        console.log(even)
    }
}
