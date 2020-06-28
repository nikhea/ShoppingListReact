import React,{Component} from 'react';
import NavBars from './NarBars'
import ShoopingList from './ShoopingList'
import ItemModele from './itemModele' 
import {Container} from 'reactstrap'
import './App.css';
import {Provider} from 'react-redux'
import store from '../store'
// import 'semantic-ui-css/semantic.min.css';


class App extends  Component {

    render(){
        


        return(
            <Provider store={store}>

         
            <div>
            <NavBars />
            <Container>
            <ItemModele/>
             <ShoopingList/>
            </Container>
          
        
            </div>
            </Provider>
        )
    }
}

export default App 