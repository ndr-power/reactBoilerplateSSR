import React from 'react';
import axios from 'axios';
import ChildClass from './Child'
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: 0, data: null};
        this.getData = this.getData.bind(this);
        this.dataFromChild = this.dataFromChild.bind(this);
    }
    getData(){
        axios.get('/getUsers')
        .then((data) => {
            console.log(data.users)
            this.setState({users: data.data.users})
        })
    }
    dataFromChild(data) {
        this.setState({data: data.info});
    }
    render(){
        return (
            <div>
            <h1>Users</h1>
            <ChildClass callback={this.dataFromChild} fromParent = "something Cool" />
            <h2>Child: {this.state.data}</h2>
            </div>
        )
    }
}