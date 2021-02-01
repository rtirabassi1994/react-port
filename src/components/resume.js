import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render () {
        return(
            <div><Grid>
                <Cell col={4}><div style= {{textAlign: 'center'}}>
                    <img
                    src="https://i.pinimg.com/originals/36/bf/ca/36bfcaedb089d34bc32e4460ea32441c.jpg"
                    alt="monogram"
                    style= {{height: '200px'}}/>
                    </div>
                    <h2 style={{fontFamily: 'Bebas Neue', fontSize: '60px'}}>Rachel Tirabassi</h2>
                    <h4 style={{color: 'grey', fontFamily: 'Bebas Neue', fontSize: '40px'}}>Full-Stack Marketer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%/'}}/>
                    <p style={{fontFamily: 'Hind'}}>Seeking a full-time position in digital marketing and web development.</p>
                    
                    <h5 style={{fontFamily: 'Bebas Neue', fontSize: '30px'}}>Address</h5>
                    <p style={{fontFamily: 'Hind'}}>11395 Somerset Trail, Painesville OH 44077</p>
                    <h5 style={{fontFamily: 'Bebas Neue', fontSize: '30px'}}>Phone</h5>
                    <p style={{fontFamily: 'Hind'}}>(440) 867-0430</p>
                    <h5 style={{fontFamily: 'Bebas Neue', fontSize: '30px'}}>Email</h5>
                    <p style={{fontFamily: 'Hind'}}>tirabassi.rachel@gmail.com</p>
                    <h5 style={{fontFamily: 'Bebas Neue', fontSize: '30px'}}>LinkedIn</h5>
                    <p style={{fontFamily: 'Hind'}}>https://www.linkedin.com/in/racheltirabassi/</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%/'}}/>
                    </Cell>
                <Cell className='right-side-column' col={8}>
                    <h2 style={{fontFamily: 'Bebas Neue'}}>Education</h2>
                    
                    <Education
                    startYear={2020}
                    endYear={2021}
                    schoolName="Case Western Reserve University"
                    schoolDescription="Full Stack Web Development Certificate"
                    schoolClasses="HTML, CSS, JavaScript, JQuery, APIs, JSON, AJAX, NodeJS, SQL, Express, Mongo, React"
                    />
                    
                    <Education
                    startYear={2014}
                    endYear={2017}
                    schoolName="The Ohio State University"
                    schoolDescription="Bachelor of Science in Communication Analysis and Practice"
                    schoolClasses="Activities:  Public Relations Student Society of America, Club Operation Smile"
                    />

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%/'}}/>

                    <h2 style={{fontFamily: 'Bebas Neue'}}>Experience</h2>

                    <Experience
                        startYear={2017}
                        endYear="Present"
                        jobName= "Dolbey Systems Inc."
                        jobTitle= "Digital Marketing Specialist"
                        jobDescription= "I managed social media accounts and grew following for Dolbey and its two sister companies. I created content by designing graphics in Photoshop and writing blog posts. I also designed bi-weekly email newsletters on Constant Contact to drive traffic to Dolbey's site." 
                    />

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%/'}}/>


                    <h2 style={{fontFamily: 'Bebas Neue'}}>Skills</h2>

                    <Skills 
                    skill="Javascript"
                    progress={75}/>
                    
                    <Skills
                    skill="HTML/CSS"
                    progress={90}/>

                    <Skills
                    skill="Social Media Marketing"
                    progress={95}/>

                   <Skills
                    skill="React"
                    progress={65}
                    />


                    
                
                
                
                
                </Cell>
            
            
            
            
            
            </Grid></div>
        )
    }
}

export default Resume;