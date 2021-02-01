import React from "react";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Home from "./components/Home";
// import Login from "./components/Login";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
import "./App.css";




function App() {
  return (
    <div>
    <div className="demo-big-content">
    <Layout>
        <Link to= "/"><Header className="header-color" title="RACHEL TIRABASSI" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header></Link>
        <Drawer title="RT">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
</div>   
  );
}

export default App;
