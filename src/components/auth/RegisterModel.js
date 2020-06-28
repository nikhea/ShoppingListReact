import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../actions/authAction'
import {clearErrors} from '../../actions/erroAction'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap'






class RegisterModel extends Component {
    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props
        if (error !== prevProps.error) {
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({ msg: error.msg.msg})
            }else{
                this.setState({msg: null})
            }
        }
        // if authenteced colse model
        if (this.state.model) {
          if(isAuthenticated){
              this.toggle()
          }

        } 
    }
    state = {
        modal: false,
        name: '',
        email:'',
        password: '',
        msg: null
      }
  
      toggle = () => {
          //Clear Error
          this.props.clearErrors()

          this.setState({
              modal: !this.state.modal
          })
      }
      handelSubmite  =(e) =>{
          e.preventDefault()
          const {name, email,password} = this.state;

          //create user object
          const newUser = {
              name,
              email,
              password
          }
          //Attempt to register
          this.props.register(newUser)
        //   //Close modele
        //   this.toggle()
         
          
      }
      handelChange= (e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
      
      }
    render() { 
        return ( 
            <div>
          <NavLink onClick={this.toggle} href='#'>
              Register
          </NavLink>

            <Modal
                isOpen={this.state.modal}
                toggle={this.state.toggle}
            >
            <ModalHeader  toggle={this.toggle}> Register</ModalHeader>
            <ModalBody>
            {this.state.msg? <Alert color='danger'>{this.state.msg}</Alert>: null }
                <Form onSubmit={this.handelSubmite}>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                     type='text'
                     name='name'
                     id='name'
                     placeholder='Name'
                     className='mb-3'
                    //  required
                     onChange={this.handelChange}
                    />
                     <Label for='email'>Email</Label>
                       <Input
                     type='email'
                     name='email'
                     id='email'
                    //  required
                     placeholder='Email'
                     onChange={this.handelChange}
                     className='mb-3'
                    />
                     <Label for='password'>Password</Label>
                       <Input
                     type='password'
                     name='password'
                     id='password'
                     placeholder='Password'
                    //  required
                     className='mb-3'
                     onChange={this.handelChange}
                    />
                    <Button
                    color='dark'
                    style={{marginTop:'1rem'}}
                    block
                    className='mt-3'
                    >

                        Register
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
  return{   
      isAuthenticated:state.auth.isAuthenticated,
      error: state.error

  }
}
export default connect(mapStateToProps, {register, clearErrors})(RegisterModel)