let meyveler = [
    "elma", "armut", "domates", "karpuz", "kiraz",
    "portakal", "muz", "çilek", "şeftali", "nar", "kivi"
]

for (let meyve of meyveler) {
    if (meyve.match(/^[a-zA-ZıöüğşçÖÇŞİĞÜİ]{5}$/)){
        console.log(meyve);
    }
}