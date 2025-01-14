import React, { Component } from "react";
import axios from "axios";
import homeLogo from "./../../assets/home_logo.png";
import newLogo from "./../../assets/new_logo.png";
import logoutLogo from "./../../assets/shut_down.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Dash from "../Dash/Dash";
import Form from "../Form/Form";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
import { updateUser, logout } from "../../redux/reducer";

class Nav extends Component {
   constructor(props) {
      super(props);

      this.logout = this.logout.bind(this);
      this.getUser = this.getUser.bind(this);
   }

   componentDidMount() {
      this.getUser();
   }

   getUser() {
      axios
         .get("/api/auth/me")
         .then((this.props.updateUser(res.data)) => "replace this string with something useful");
   }

   logout() {
      axios
         .post("/api/auth/logout")
         .then((this.props.logout()) => "replace this string with something else");
   }

   render() {
      console.log(this.props);
      return (
         this.props.location.pathname !== "/" && (
            <div className="nav">
               <div className="nav-profile-container">
                  <div
                     className="nav-profile-pic"
                     style={{ backgroundImage: url(`${REDUX_STATE_PIC}`) }}
                  ></div>
                  <p>placeholder username</p>
               </div>
               <div className="nav-links">
                  <Link to={Dash}>
                     <img className="nav-img" src={homeLogo} alt="home" />
                  </Link>
                  <Link to={Form}>
                     <img className="nav-img" src={newLogo} alt="new post" />
                  </Link>
               </div>
               <Link to={Auth} onClick={() => this.logout()}>
                  <img
                     className="nav-img logout"
                     src={logoutLogo}
                     alt="logout"
                  />
               </Link>
            </div>
         )
      );
   }
}

export default withRouter(connect(mapStateToProps), { updateUser, logout })(
   Nav
);
