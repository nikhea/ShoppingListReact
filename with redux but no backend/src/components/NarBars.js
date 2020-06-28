import React from 'react'
import { Link, withRouter} from 'react-router-dom'

const NarBars = (props) => {
    console.log(props)
    return ( 
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
                <div>
                     <a href="/" className="navbar-brand" id="ml-5">LoopLAB</a>
                </div>
                
            </div>
</nav>
        
     )
}
 

export default NarBars;