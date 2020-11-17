import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUpAddressForm from "./SignUpAddressForm";
import Container from "@material-ui/core/Container";
import Logo from "../../../img/logo.svg";
import Croissant from "../../../img/dishes/signUp2.png";

class SignUpAddress extends Component {
  render() {
    return (
      <div className="signUp-address__wrapper">
        <div className="signUp-address">
          <Link to="/" >
            <img src={Logo} alt="logo" className="signUp-address__logo"/>
          </Link>
          
          <Container fixed className="signUp-address__main">
            <h1>You are just a few steps away.</h1>
            <p>
              Your restaurant location will help us reach out to your target
              customers better
            </p>
            <SignUpAddressForm />
          </Container>
        </div>
        <img src={Croissant} alt="Croissant" className="croissant" />
      </div>
      
    );
  }
}
export default SignUpAddress;
