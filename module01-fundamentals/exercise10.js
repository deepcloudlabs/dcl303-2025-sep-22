let names = ["zehra", "ali", "aytül", "ayşegül", "şule", "şima", "fatma", "veli"];
console.log(names);
names.sort((name1, name2) => name1.localeCompare(name2,'tr-TR'));
console.log(names);
