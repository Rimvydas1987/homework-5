const createDiv = () => document.createElement('DIV');


//komponentas
const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element
}

const addClass = (element, className) => element.classList.add(className);//sukuriam klases uzdejima

const withClassName = (element, className) => element.classList.add(className);//bus naudojama HOC




const root = document.querySelector('#root');
root.appendChild(createDivText('Hello!!!'));

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

/* animals.forEach(animal => {
    const div = createDivText(animal); //elemento sukurimas
    addClass(div,'grozis');//panaudojam klase grozis
    root.appendChild(div); //apendina divus i root
}); */


//HOC------

const GrazusCreateDivText = (text, className) => {
    const div = createDivText(text);
    withClassName(div, className);
    return div;
}
/* 
animals.forEach(animal => {
    const div = GrazusCreateDivText(animal, 'grozis')
    root.appendChild(div); //apendina divus i root
}); */


const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]'

const obj = JSON.parse(booksTypes);
console.log(obj)
obj.forEach(function(book) {
    return book.title;
});

obj.forEach(book => {
    const div = GrazusCreateDivText(book.title, 'grozis')
    root.appendChild(div); //apendina divus i root
});


/* JSON.parse(booksTypes).forEach(type => {
    const div = GrazusCreateDivText(type.title, 'grozis');
    root.appendChild(div); // nuleidimas ant zemes i root diva
}) */