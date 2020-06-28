import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import {connect} from 'react-redux'
import {getItem, deleteItem} from '../actions/itemActions'






class ShoopList extends Component {
    componentDidMount() {
        this.props.getItem()
    }
    handelDelete = (id) => {
        this.props.deleteItem(id)
    }
  
    render() { 
        const {items} = this.props.item
        return ( 
                 <div className='container'>
                <div className='list-group'>
              
                <TransitionGroup>
                    {items.map(({id, name}) =>(
                     <CSSTransition key={id} timeout={500} classNames='fade'>
                         <div className='list-group-item'>
                         <button
                         className='remove-btn
                         btn btn-secondary
                         
                         ' 
                        onClick = {() => {this.handelDelete(id)}}
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

const mapStateToProps = (state) => {
  return{
     item : state.item
  }
}
 
export default connect(mapStateToProps, {getItem, deleteItem})(ShoopList);