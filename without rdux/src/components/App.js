import React,{Component} from 'react';
import NavBars from './NarBars'
import ShoopingList from './ShoopingList'
import './App.css';
// import 'semantic-ui-css/semantic.min.css';


class App extends  Component {

    render(){
        


        return(
            <div>
            <NavBars />
            
             <h1>hello</h1>
             <ShoopingList/>
            </div>
        )
    }
}

export default App 