"use strict"

const createDiv = () => document.createElement('DIV');
/* 
function PridetiDiv(){
        let divElementas = document.createElement("div");
        return divElementas;
    }
 */


const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element
}

/* const root = document.querySelector('#root');
root.appendChild(createDivText('Hello!!!')); */

//3 Uzduotis

const data = ['Labas', 'Pats', 'tu labas'];


        
/* for (let i=0; i < data.length; i++) {

    let div = document.createElement("div");
    div.innerHTML = (data[i]);
    root.appendChild(div);
} */

/* const createDivText2 = (data) => {
    for (let i=0; i < data.length; i++) {
        const element = document.createElement('DIV');
        const textNode = document.createTextNode(data[i]);
        element.appendChild(textNode);
    return element
    }
}

const root = document.querySelector('#root');
root.appendChild(createDivText('Hello!!!'));
 */





//-----------


//const data2 = new Set(['Labas', 'pats', 'tu labas']);



//-------------



/* const data3 = new Map([

    ['viens', 'Labas'],

    ['du', 'pats'],

    ['trys', 'tu labas']

]);
 */






//--------------------------






/* const data4 = {

    viens: 'Labas',

    du: 'pats',

    trys: 'tu labas'

}


let a =['Labas', 'pats', 'tu labas'];
a.sort(function(s,t) {
    const a = s.toLocaleLowerCase().charAt(2);
    const b = s.toLocaleLowerCase().charAt(2);
    /* if (a < b) == (b > a);
    return -1
    
}) */




//--------------------------




/* prieš pirmo masyvo data renderinmą surūšiuoti masyvą pagal abėcėle naudojant tik trečią stringo raidę. T.y. b,t ' ' Kitaip tariant išrūšiuoti pagal trečias raides */



//1.Naudojant for each atspausdinti visus gyvulius po viena su console.log
//2.Isrusiuoti gyvulius pagal pavadinimo ilgi, kad pirma eitu ilgiausia pavadinima turintis gyvulys
//3.su konsole log isvesti masyva pries ir po rusiavimo (du skirtingi masyvai)


const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

console.log("-----1. Uzduotis------")
animals.forEach(function(gyvuliai) {
    console.log(gyvuliai);
});
animals.forEach((value) => console.log(value))

//--------------
//animals.forEach((value, index, komoda) => console.log(value, index, komoda));
//komosa yra tas pats animals

console.log("-----2. Uzduotis------")

animals.sort((a, b) => b.length - a.length);
console.log(animals)




console.log("-----3. Uzduotis------")
console.log()
//animals.slice (isimena pirma animal)

//-----------------------------------
//back tick

const v = 'varle';

const niceSentence = 'Ruda ' + v + ' plaukia geritai';
console.log(niceSentence)

const niceSentence1 = `Ruda ${v} plaukia geritai`;
console.log(niceSentence1)

console.log('----------------MAP----------------------')
//----------------------------map---------------------------------
const a = animals.forEach((value) => console.log(value))
const b = animals.map((value, index) => console.log(value, index));

console.log(a); //undifined
console.log(b); // map grazins masyva su undifined

//map sukuria nauja masyva ir jame keicia reiksmes (komodos sausumu vepliai)