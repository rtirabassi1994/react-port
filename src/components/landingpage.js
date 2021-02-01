import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";

class Landing extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landingGrid">
                    <Cell col={12}>
                    <img 
                    src= "https://miro.medium.com/max/306/1*JbXe-wn4CivSw6e9GmmFvw.png"
                    alt="computer"
                    className="computer-image"
                    />
                    <div className="banner-text">
                        <h1>FULL STACK WEB DEVELOPER</h1> 
                        
                        <hr/>
                        <div>
                        <h6 className= "banner-title">EXPERIENCE WITH:</h6>
                        <p> HTML/CSS || Bootstrap || Javascript || MongoDB || React || Express || Node JS</p>
                        </div>
                        
                        <h6 className= "banner-title">FOLLOW ME ON:</h6>
                        <div className="social-links">
                            {/* GitHub */}
                            <a href="https://github.com/rtirabassi1994" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            
                            {/* LinkedIn Icon */}
                            <a href="https://www.linkedin.com/in/racheltirabassi/" target="_blank" rel="noopener noreferrer" > 
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            
                            {/* Twitter */}
                            <a href="https://twitter.com/racheltboss?lang=en" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                        </div>
                        
                    </div>
                    </Cell>  
                </Grid>
            </div>
        )
    }
}

export default Landing;