import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'



class ItemModel extends Component {
    state = {
        modal: false,
        name: ''
      }
      toggle = () => {
          this.setState({
              modal: !this.state.modal
          })
      }
      handelSubmite  =(e) =>{
          e.preventDefault()
          const newItem ={
              name: this.state.name
          }

          //add item via addItem action 
          this.props.addItem(newItem)

          //Close modele
          this.toggle()
         
          
      }
      handelChange= (e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
      }
    render() { 
        return ( 
            <div>
            <Button
            color='dark'
            style={{marginBottom: '2rem', marginTop: '2rem'}}
            onClick={this.toggle}
            >ADD ITEM</Button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.state.toggle}
            >
            <ModalHeader  toggle={this.toggle}> ADD TO SHOPPING LIST</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handelSubmite}>
                <FormGroup>
                    <Label for='item'>Item</Label>
                    <Input
                     type='text'
                     name='name'
                     id='item'
                     placeholder='Add Shopping item'
                     onChange={this.handelChange}
                    />
                    <Button
                    color='dark'
                    style={{marginTop:'1rem'}}
                    block>
                        ADD Item
                    </Button>
                </FormGroup>

                </Form>
            </ModalBody>
            </Modal>

            </div>
         );
    }
}
 
const mapStateToProps = (state) =>{
  return{   item: state.item
  }
}
export default connect(mapStateToProps, {addItem})(ItemModel)