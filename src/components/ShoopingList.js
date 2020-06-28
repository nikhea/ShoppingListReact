import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import {connect} from 'react-redux'
import {getItem, deleteItem} from '../actions/itemActions'






class ShoopList extends Component {
    componentDidMount() {
        this.props.getItem()
        console.log(this.props.getItem.length)
    }
    handelDelete = (_id) => {
        this.props.deleteItem(_id)
    }
  
    render() { 
        const {items} = this.props.item
        return ( 
                 <div className='container'>
                <div className='list-group'>
              
                <TransitionGroup>
                    {items.map(({_id, name}) =>(
                     <CSSTransition key={_id} timeout={500} classNames='fade'>
                         <div className='list-group-item'>
                         <button
                         className='remove-btn
                         btn btn-secondary' 
                        onClick = {() => {this.handelDelete(_id)}}
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