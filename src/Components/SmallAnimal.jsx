import React from 'react';
class SmallAnimal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editInput: '',
            editInputFarm: ''
            };
    }

    editInputHandler = (e) => {
        this.setState({
            editInput: e.target.value,
        });
    }
    editInputFarmHandler = (e) => {
        this.setState({
            editInputFarm: e.target.value,
        });
    }


render () {  
    return (
    <div className = "small-circle" style={{
        backgroundColor: this.props.color,
        borderRadius: this.props.animal == 'cow' ? '50%' : '5px'
    }}>
        <div>
            <span className="text">{"Color: " + this.props.color}</span>
            <span className="text">{"Farm: " + this.props.farm}</span>
        </div>

        <button className="input-buttonSmallDelete" onClick={()=>this.props.delete(this.props.id)}>Į skerdyklą</button>
        
        <div className="editColor">
            <input className="updateInput" type="text" value={this.state.editInput} onChange={this.editInputHandler}/>
            <button className="input-buttonSmallUpdate" onClick={()=>this.props.edit(this.props.id, this.state.editInput)}>edit color</button>
        </div>

        <div className="farm">
            <input className="updateInput" type="text" value={this.state.editInputFarm} onChange={this.editInputFarmHandler}/>
            <button className="input-buttonSmallUpdateFarm" onClick={()=>this.props.edit(this.props.id, this.state.editInputFarm)}>Change Farm</button>
        </div>
    </div>);
}
}   
export default SmallAnimal;