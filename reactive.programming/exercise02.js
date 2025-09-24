import {range, filter, map} from "rxjs";

range(1,10_000)
    .pipe(
        filter( n => n%2 === 0),
        map(u => u ** 3)
    )
    .subscribe(
        v => console.log(v)
    )