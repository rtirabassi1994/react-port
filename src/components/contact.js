import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render () {
        return(
            <div className= "contact-body">
                <Grid className="contact-grid"> 
                <Cell col={6}>
                    <h2>Rachel Tirabassi</h2>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHZ0JrjKrlY_g/profile-displayphoto-shrink_400_400/0/1549130302019?e=1617235200&v=beta&t=-NiaP19aakf5rX_N31vYKABm8CbqI7k1G53v9xIG4cE'
                    alt="headshot"
                    style={{height: '250px'}}/>
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello! Thanks for checking out my portfolio. I am a Cleveland-based Digital Marketing Specialist for Dolbey, an award-winning health IT company that specializes in clinical documentation software. I am also enrolled in Case Western Reserve University's Full Stack Web Development Bootcamp with an expected graduation date in February 2021. I am currently looking for a full-time position that combines my marketing experience and new web development skills.</p>
                </Cell>
                <Cell col={6}><h2>Contact Me</h2>
                < hr/>

                
                <div className="contact-list">  <List>
  <ListItem>
    <ListItemContent style= {{fontSize: '30px', fontFamily: 'Bebas Neue'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        (440) 867-0430</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style= {{fontSize: '30px', fontFamily: 'Bebas Neue'}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
        tirabassi.rachel@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style= {{fontSize: '30px', fontFamily: 'Bebas Neue'}}>
        <i className="fa fa-home" aria-hidden="true"/>
        11395 Somerset Trail Painesville, OH 44077</ListItemContent>
  </ListItem>
</List></div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;