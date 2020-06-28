import React,{Component} from 'react';
import NavBars from './NarBars'
import ShoopingList from './ShoopingList'
import ItemModele from './itemModele' 
import {Container} from 'reactstrap'
import store from '../store'
import {loadUser}from '../actions/authAction'
import './App.css';

// import 'semantic-ui-css/semantic.min.css';


class App extends  Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }
    render(){
    
        
        


        return(
            <div>
            <NavBars />
            <Container>
            <ItemModele/>
             <ShoopingList/>
            </Container>
             </div>
         
        )
    }
}

export default App 