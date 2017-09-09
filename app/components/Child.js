import React from 'react';
class ChildClass extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.callback({info: 'Hello, I\'m there from my Child'})
    }
    render(){
        return <h1>Yo, {this.props.fromParent}</h1>
    }
}
export default ChildClass;