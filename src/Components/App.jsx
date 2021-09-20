import React from 'react';
import SmallAnimal from './SmallAnimal';
import getId from '../Shared/id';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            animals: [],
            cowInput: ''
            };
    }

    addAnimal = (a) => {
        const animal = {id: getId(), 
                        color: this.state.cowInput, 
                        animal: a
                        };
        const animals = this.state.animals.slice();
        animals.push(animal);
        this.setState({
            animals: animals
        })
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }
    deleteAnimal = (id) => {
        console.log(id);
        const animals = this.state.animals.slice();
        for(let i=0; i < animals.length; i++){
            if (animals[i].id == id) {
                animals.splice(i, 1);
                break;
            }
        }
        this.setState({
            animals: animals
        })
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    /* deleteAnimal = (id) => {
        console.log(id);
        const animals = this.state.animals.slice();
        for(let i=0; i < animals.length; i++){
            if (animals[i].id == id) {
                animals.splice(i, 1);
                break;
            }
        }
        this.setState({
            animals: animals
        })
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    } */

    editAnimal = (id, color) => {
        console.log(id);
        const animals = this.state.animals.slice();
        for(let i=0; i < animals.length; i++){
            if (animals[i].id == id) {
                animals[i].color = color;
                break;
            }
        }
        this.setState({
            animals: animals
        })
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }
    cowInputHandler = (e) => {
        this.setState({
            cowInput: e.target.value,
        });
    }

    componentDidMount() {
        const animals = JSON.parse(localStorage.getItem('allAnimals'));
        if (null === animals) {
            return;
        }
        this.setState({
            animals: animals
        })
    }


    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
                    <button className="input-button" onClick={()=>this.addAnimal('cow')}>Add Cow</button>
                    <button className="input-button" onClick={()=>this.addAnimal('sheep')}>Add Sheep</button>
                </div>
                {this.state.animals.map((b, i) => <SmallAnimal key={b.id} delete={this.deleteAnimal} edit={this.editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
            </>
        );
    }
}
    
export default App;