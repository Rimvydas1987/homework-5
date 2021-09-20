import person from '../Data/person'
const element = (
    <div>
    <h1>Hello, barsukas!</h1>
    <small>{5+8}</small>{/* taip pridedam JS */}
    <small>{person.name} {person.pavarde}</small>
    </div>
);

export default element;