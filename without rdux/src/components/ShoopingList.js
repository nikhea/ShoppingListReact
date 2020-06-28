import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import uuid from 'uuid'
import { timeout } from 'q';



class ShoopList extends Component {
    state = {
        items:[
            {id:uuid(), name: 'Eggs'},
            {id:uuid(), name: 'Milk'},
            {id:uuid(), name: 'Steak'},
            {id:uuid(), name: 'Water'},
        ]
      }
    render() { 
        const {items} = this.state
        return ( 
            <div className='container'>
            <button 
            onClick={()=> {
            const name=prompt('enter item')
            if(name){
                this.setState(state => ({
                    items: [...state.items, {id:uuid(), name}]
                }))
            }
            }}
            
            className='btn btn-secondary'>Add Item</button>
                <div className='list-group'>
                <TransitionGroup>
                    {items.map(({id, name}) =>(
                     <CSSTransition key={id} timeout={500} classNames='fade'>
                         <div className='list-group-item'>
                         <button
                         className='remove-btn
                         btn btn-secondary
                         
                         ' 
                        onClick = {() => {
                            this.setState(state => ({
                                items: state.items.filter(item => item.id !==id)
                            }))
                        }}
                         >&times;</button>
                             {name}
                         </div>
                     </CSSTransition>
                    ))}
                </TransitionGroup>

                </div>
            </div>
         );
    }
}
 
export default ShoopList;