import React from 'react'

class App extends React.Component{
    //runs first
    constructor(props){
        super(props);
        console.log('hello');
    }

    // saves dynamic data
    state = {
        count: 0,
    };

    add = () => {
        console.log('add');
        this.setState(current => ({count: current.count + 1,}));
    }

    minus = () => {
        console.log('minus');
        this.setState(current => ({count: current.count - 1,}));
    }

    // runs after rendering
    componentDidMount(){
        console.log('component rendered');
    }

    // runs after update
    componentDidUpdate(){
        console.log('I just updated');
    }

    componentWillUnount(){
        console.log('Goodbye, cruel world');
    }

    // react automatically runs render()
    render(){
        console.log("I'm rendering");
        return (<div>
            <h1>The number is: {this.state.count}.</h1>
            <button onClick={this.add} >Add</button>
            <button onClick={this.minus} >Minus</button>
            </div>
            
            );
            
    }
}


export default App;