const {fromEvent, scan, throttleTime} = "rxjs";

window.onload = () => {
    console.log(fromEvent)
    fromEvent(document.querySelector("#exercise03"),'click')
        .pipe(
           throttleTime(5_000),
           scan(count => count + 1, 0)
        )
        .subscribe( count => console.log(count))
}