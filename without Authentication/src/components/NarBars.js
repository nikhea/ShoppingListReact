import React,{Component} from 'react'
import {
    Collapse,
    Navbar, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class NavBars extends Component {
constructor(props){
     super(props)
     this.state = {
          isOpen :  false
     }
}
toggle = () => {
    this.setState({
         isOpen : !this.state.isOpen
    })
}
     render() { 
          return ( 
              <div>
                   <Navbar color='dark' dark expand='sm' className='mb-5'>
                      <Container>
                           <NavbarBrand href='/'>SHOPPING LIST </NavbarBrand>
                           <NavbarToggler onClick={this.toggle} />
                           <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar className='ml-auto'>
                                <NavItem >
                                     <NavLink href=' http://localhost:5000/api/items'> FacBook</NavLink>
                                </NavItem>

                                </Nav>
                           </Collapse>
                      </Container>
                   </Navbar>
              </div>
           );
     }
}

 
export default NavBars;