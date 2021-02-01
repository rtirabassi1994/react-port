import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card,  CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
// import logo from './w2w.PNG'; // with import

class Projects extends Component {
    constructor(props) {
       super(props);
       this.state = { activeTab: 0};
   }
    
   toggleCategories() {
    if(this.state.activeTab === 0){
        
        // Weather App
        return(
   
        
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <h1 className="project-title">Weather App</h1>
    <CardText>
    A weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities. Uses the OpenWeather API to retrieve weather data for cities, uses AJAX to hook into the API to retrieve data in JSON format, and features dynamically updated HTML and CSS powered by jQuery.
    </CardText>
    <CardActions border>
        <a href="https://rtirabassi1994.github.io/homework6-weather/"><Button colored>View</Button></a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        {/* <IconButton name="share" /> */}
    </CardMenu>
</Card>

        )
        } else if(this.state.activeTab === 1) {
        // Password Generator
            return (
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <h1 className="project-title">Password Generator</h1>
    <CardText>
    An application that generates a random password based on user-selected criteria. Runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.
    </CardText>
    <CardActions border>
    <a href="https://rtirabassi1994.github.io/homework3-password/"><Button colored>View</Button></a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
       )
        } else if(this.state.activeTab === 2) {
        
        // Project 1
            return (
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <h1 className="project-title">Project 1: "What 2 Watch"</h1>
                <CardText>
                    This project pulls information from an API when the users searches for a specific movie or TV show. The search results pull the movie trailer, movie release information, actors, and more. 
                </CardText>
                <CardActions border>
                <a href="https://rtirabassi1994.github.io/project1-w2w/"><Button colored>View</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        )
        } else if(this.state.activeTab === 3) {
        
        // Project 2
            return (
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <h1 className="project-title">Project 2: "Quaran-Tini"</h1>
                <CardText>
                    Project 2 is for the user who wants to create specific cocktail recipes based on an ingredient or name. Based on the search, the user is then able to save a specific drink for later and email it to themselves. The project uses CocktailDB API to pull information and SQL to store data.
                </CardText>
                <CardActions border>
                <a href="https://quaran-tini.herokuapp.com/"><Button colored>View</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>
    )
    }

 
   }
   
   render () {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange= {(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Weather App</Tab>
                    <Tab>Password Generator</Tab>
                    <Tab>Project 1: "What to Watch"</Tab>
                    <Tab>Project 2: "Quaran-tini"</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Projects;