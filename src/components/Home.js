import "../CSS/Home.css";
import logo from '../img/tritonLogo.jpg';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons"

const Home = () => {
    return (
        <>
            {/*BANNER*/}
            <section className="bgimage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                            <h2 className="hero_title">Hi, it's me Zack</h2>
                            <p className="hero_desc">...I'm studying computer science at UMSL</p>
                            <div className="explore-row">
                                <Link to="/maintenance" className="explore-buttons"><em>View my Portfolio</em>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCode}/></Link>
                                <Link to="/maintenance" className="explore-buttons"><em>Check out my Resume</em>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFile}/></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/*ABOUT SECTION*/}
            <section className="flex-container about-section">
                <div className="about-info">
                    <h3>Who am I?</h3>
                    <p>Welcome to my website! My name is Zack and I’m working toward my Bachelor in Computer Science here at the University of Missouri St Louis. My current areas of study include system programming, web development, & Java, though I'm also interested in learning artificial intelligence & game development.</p>
                </div>
                <div className="about-info" id="about-img">
                    <img src={logo} alt="UMSL Triton logo"/>
                </div>
            </section>
        </>
    );
};

export default Home;