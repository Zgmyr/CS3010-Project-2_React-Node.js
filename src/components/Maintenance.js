import {Link} from "react-router-dom";
import '../CSS/Maintenance.css'

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";

const Maintenance = () => {
    return (
        <main>
            <section className="maintenance-page">
                <div className="container border border-dark warning-box">
                    <h3><FontAwesomeIcon icon={faScrewdriverWrench}/> Under Maintenance&nbsp;
                        <FontAwesomeIcon icon={faScrewdriverWrench}/></h3>
                    <div className="warning-content">
                        <p>Thank you for taking an interest in my work, however this page is still being worked on. To
                            return to the home page click <Link to="/">here</Link>.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Maintenance;