import '../CSS/Account.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const Account = (props) => {
    /* we will need the current id (from 'user_accounts' table) to post/update the 'user_account_details'
    * table through our fetch call */
    const { currentId } = props;

    /* fetch call to '/account' endpoint will expect a property 'userId' that should hold the value
    * of the user's id as stored in the 'user_accounts' table */
    const [inputs, setInputs] = useState({ userId: currentId });

    /* This should run whenever page is loaded or dependency changes, though currentId should not change
    * while on this page... */
    useEffect(() => {
        const fetchAccountInfo = async () => {

            try {
                const response = await fetch(`http://localhost:8080/account?userId=${currentId}`);
                const status = response.status;

                /* returns '200' & .json if account exists
                *  returns '204' & empty .json if no data for account */
                if (status === 200) {
                    const accountInfo = await response.json();
                    setInputs(accountInfo); // updates current 'inputs' state with returned account info
                }
                else if (status === 204) {
                    /* no account exists */
                    console.log("User account information does not exist");
                }
            }
            catch (error) {
                console.error("Error fetching user account information:",error);
            }

        };

        fetchAccountInfo();
    }, [currentId]);






    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        /* First we attempt to update account record with 'PUT'
        *  ... if account record does not already exist we create record with 'POST' */
        const updateResponse = await fetch(`http://localhost:8080/account`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( inputs )
        });
        const updateResponseStatus = updateResponse.status;

        if (updateResponseStatus === 404) {
            /* no record exists yet for this account, we will POST it instead */
            const createResponse = await fetch('http://localhost:8080/account', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( inputs )
            });
            const createStatus = createResponse.status;
            const createResponseJson = await createResponse.json();
            console.log('responseJson',createResponseJson);
        }
        console.log('Inputs:',inputs);
    }

    const handleReset = () => {
        setInputs(values => ({}));
    }

    return (
        <main>
            <section className="account-background">
                <div className="account-header">
                    <h3>Your Account:</h3>
                </div>
                <form className="account-wrapper" onSubmit={handleSubmit}>
                    <fieldset id="personalInfo">
                        <h4>Personal Info:</h4>

                        <label htmlFor="first-name">First Name:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="firstName"
                                value={inputs.firstName || ""}
                                onChange={handleChange}
                                id="first-name"
                                pattern="[A-Za-z]*"
                                title="Alphabet Characters Only!"
                                placeholder="e.g. &quot;John&quot;"
                                required
                            />
                            <FontAwesomeIcon icon={faAddressCard} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="last-name">Last Name:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="lastName"
                                value={inputs.lastName || ""}
                                onChange={handleChange}
                                id="last-name"
                                pattern="[A-Za-z]*"
                                title="Alphabet Characters Only!"
                                placeholder="e.g. &quot;Doe&quot;"
                                required
                            />
                        </div>

                        <label htmlFor="email">Email:</label>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                id="email"
                                placeholder="e.g. myemail@email.com"
                                required
                            />
                            <FontAwesomeIcon icon={faEnvelope} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="phone-num">Phone #:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="phoneNumber"
                                value={inputs.phoneNumber || ""}
                                onChange={handleChange}
                                id="phone-num"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                title="Use the format: 123-456-7890"
                                placeholder="e.g. 123-456-7890"
                                required
                            />
                            <FontAwesomeIcon icon={faPhone} className="font-awesome-icons"/>
                        </div>

                    </fieldset>
                    <fieldset id="addressInfo">
                        <h4>Address Info:</h4>

                        <label htmlFor="address-one">Address Line 1:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="address1"
                                value={inputs.address1 || ""}
                                onChange={handleChange}
                                id="address-one"
                                placeholder="e.g. &quot;Main Street&quot;"
                                required
                            />
                            <FontAwesomeIcon icon={faAddressBook} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="address-two">Address Line 2:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="address2"
                                value={inputs.address2 || ""}
                                onChange={handleChange}
                                id="address-two"
                                placeholder="(optional)"
                            />
                        </div>

                        <label htmlFor="city">City:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="city"
                                value={inputs.city || ""}
                                onChange={handleChange}
                                id="city"
                                placeholder="e.g. &quot;Anytown&quot;"
                                required
                            />
                            <FontAwesomeIcon icon={faBuilding} className="font-awesome-icons"/>
                        </div>

                        <label>State:</label>
                        <div className="input-box">
                            <select
                                name="state"
                                value={inputs.state}
                                onChange={handleChange}
                                required
                            >
                                <option selected="selected"></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <FontAwesomeIcon icon={faMapLocationDot} className="font-awesome-icons"/>
                        </div>

                        <label htmlFor="zip-code">Zip Code:</label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="zipCode"
                                value={inputs.zipCode || ""}
                                onChange={handleChange}
                                id="zip-code"
                                pattern="[0-9]{5}"
                                maxLength="5"
                                title="5 Digits!"
                                placeholder="e.g. 12345"
                                required
                            />
                        </div>

                    </fieldset>
                    <fieldset id="end-of-form">
                        <button type="submit" className="btn">Update Account Info</button>
                        <button type="reset" onClick={handleReset} className="btn">Reset All</button>
                    </fieldset>
                </form>

            </section>
        </main>
    );
};

export default Account;