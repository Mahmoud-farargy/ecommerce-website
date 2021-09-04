import React, { Fragment, useState, useEffect } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { BsTablet, BsEnvelope } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { toastify } from "../../../utilities/utilities";
import { connect } from "react-redux";
// import Map from "./Map/Map";
import "./Contact.scss";

const Contact = ({changeCurrentPage}) => {
    useEffect(() => {
        changeCurrentPage("Contact");
    },[changeCurrentPage]);
    const [formInputs, setFormInput] = useState({
        message: "",
        email: "",
        name: "",
        subject: "",
    });
    const [isFormSubmitted, setFormSubmission] = useState(false);
    const onInputChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        (typeof val !== undefined && name) && setFormInput({
            ...formInputs,
            [name]: val
        });
    }

    const onFormSubmission = (e) => {
        e.preventDefault();
        setFormSubmission(true);
        if(Object.values(formInputs).every(val => (val !== "" && val !== undefined ) )){
            toastify({msg:"Your messasge has been sent. Thanks!", type: "success"});
            const inputsCopy = JSON.parse(JSON.stringify(formInputs));
            Object.keys(inputsCopy).map(key =>  inputsCopy[key] = '');
            setFormInput(inputsCopy);
            setFormSubmission(false);
        }
    }
    return (
        <Fragment>
            <div id="contactUs">
                <SectionHeader title="Contact" />
                <div className="contact--inner row d--container">
                        {/* <Map /> */}
                        <h2>Get in Touch</h2>
                    <form className="contact--form col-lg-8 col-md-8 row col-sm-12" onSubmit={(e) => onFormSubmission(e)}>
                       <textarea className="col-12 w-100" required value={formInputs.message} onChange={(e) => onInputChange(e)} cols="30" rows="9" placeholder="Enter Message" name="message"></textarea>
                        {
                            isFormSubmitted && !formInputs.message
                            && <div className="text-danger">Message is required</div>
                        }
                       <div className="contact--name--email flex-row">
                            <input type="text" required placeholder="Enter Name" value={formInputs.name} onChange={(e) => onInputChange(e)} name="name" />
                            {
                                isFormSubmitted && !formInputs.name
                                && <div className="text-danger">Your name is required</div>
                            }
                            <input type="email" required placeholder="Enter Email" value={formInputs.email} onChange={(e) => onInputChange(e)} name="email" />
                            {
                                isFormSubmitted && !formInputs.email
                                && <div className="text-danger">Your email is required</div>
                            }
                       </div>
                       <input className="col-12 w-100" type="text" required placeholder="Enter Subject" value={formInputs.subject} onChange={(e) => onInputChange(e)} name="subject" />
                       {
                            isFormSubmitted && !formInputs.subject
                            && <div className="text-danger">Subject is required</div>
                        }
                       <input className="col-lg-2 col-md-3 col-sm-12" required type="submit" value="Send" />
                    </form>
                   
                    <div className="contact--info flex-column col-lg-3 col-md-3 col-sm-12">
                       <div className="contact--info--item flex-row">
                             <VscHome />  
                            <div className="flex-column">
                                <h3 className="contact--info--title">Alexandria, Egypt.</h3>
                                <p className="contact--info--details">San Stefano, BD 91770</p>
                            </div>
                       </div>
                       <div className="contact--info--item flex-row">
                             <BsTablet />  
                            <div className="flex-column">
                                <h3 className="contact--info--title">+20 253 565 2365</h3>
                                <p className="contact--info--details">Mon to Fri 9am to 6pm</p>
                            </div>
                       </div>
                       <div className="contact--info--item flex-row">
                             <BsEnvelope />  
                            <div className="flex-column">
                                <h3 className="contact--info--title">support@colorlib.com</h3>
                                <p className="contact--info--details">Send us your query anytime!</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        changeCurrentPage: (title) => dispatch({type: "changePageTitle", title})
    }
}
export default connect(null,mapDispatchToProps)(Contact); 