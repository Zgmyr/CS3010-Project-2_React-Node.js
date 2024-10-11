import {Link, useNavigate} from "react-router-dom";
import '../CSS/Login.css';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import {useState} from "react";

const Registration = (props) => {
    const { handleLogin, handleId } = props;
    const nav = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( inputs )
        });
        const status = response.status;
        const responseJson = await response.json();
        console.log('responseJson',responseJson);
        /* endpoint gives back 201 for account creation, and 409 if account exists */
        if (status === 201) {
            /* store the response json (id) in our userId state using the method we passed in
            * to <Registration> handleId */
            handleId(responseJson.id)
            handleLogin(true);
            nav("/");
        }
        else {
            alert(responseJson.error);
        }

        // console.log(inputs);
    }

    const handleReset = () => {
        setInputs(values => ({}));
    }

    return (
        <main>
            <section className="login-background">
                <div className="login-wrapper">
                    <h3>Sign Up:</h3>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="userName">Username:</label>
                        <div className="input-box">
                            <input
                                id="userName"
                                name="userName"
                                value={inputs.userName || ""}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter username"
                                required
                            />
                            <FontAwesomeIcon icon={faUser} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="pwd">Password:</label>
                        <div className="input-box">
                            <input
                                id="pwd"
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                                type="password"
                                placeholder="Enter password"
                                required
                            />
                            <FontAwesomeIcon icon={faLock} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="pwd">Repeat Password:</label>
                        <div className="input-box">
                            <input
                                id="re-pwd"

                                // name="password"
                                name = "rePassword"
                                value={inputs.rePassword || ""}
                                onChange={handleChange}

                                type="password"
                                placeholder="Re-Enter password"
                                required
                            />
                            <FontAwesomeIcon icon={faRepeat} className="font-awesome-icons"/>
                        </div>

                        <button type="submit" className="btn">Register</button>
                        <button type="reset" onClick={handleReset} className="btn">Reset All</button>
                        <br/>
                        <br/>
                        <p>Go back to <Link to="/login">login</Link>.</p>

                    </form>
                </div>
            </section>
        </main>
    );
};

export default Registration;