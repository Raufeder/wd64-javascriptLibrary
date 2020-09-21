let movie = {
    nameOfMovie: 'La La Land',
    runTime: '128 minutes',
    characters: [{name: 'Sebastian', age: 27, items:['Piano', 'Jazz']},
                 {name: 'Mia', age: 27, items:['Script', 'Prop']}],
    genre: 'Comedy/Drama/Musical/Romance',
};
console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.characters);
console.log(movie.genre);
console.log(movie.characters[0].items[0]);