import {Link, Outlet} from "react-router-dom";
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">This website was created by me, Zachary Gmyr, as a project for
                                CMP_SCI 3010 with the University of Missouri St Louis. As this semester continues, this
                                website will continue to be updated and become more interactive. My vision is for this
                                website to be a virtual space where I can showcase projects I’ve worked on, whether C++,
                                Java, Web Development, or otherwise.</p>
                            <p><em>~ Zack | February 2024</em></p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Navigation</h6>
                            <ul className="footer-links">
                                <li>
                                    <Link to="#" onClick={() => { window.scroll(0,0); }}>Return to Top</Link>
                                </li>
                                <li>
                                    <Link to="/maintenance">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/maintenance">Resume</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>External Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="https://www.umsl.edu" target="_blank">University of Missouri St Louis</a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/html/default.asp" target="_blank">Learn HTML</a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/css/default.asp" target="_blank">Learn CSS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
            </footer>
        </>
    );
};

export default Footer;