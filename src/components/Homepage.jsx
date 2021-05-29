import "../styles.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaKey,
  FaImage,
  FaPlus
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome to SEYTECH!</h1>
      <p>
        In order to register you need a code. Please ask to your admin if you
        don't have it
      </p>
      <div className="box">
        <h3>CREATE AN ACCOUNT</h3>
        <div className="inp">
          <div>
            <input className="user-in" type="text" placeholder="Name*" />
            <FaUser className="fa user" />
          </div>
          <div>
            <input type="text" placeholder="Last Name*" />
            <FaUser className="fa" />
          </div>
          <div>
            <input type="email" placeholder="Email*" />
            <FaEnvelope className="fa" />
          </div>
          <div>
            <input type="phone" placeholder="Phone*" />
            <FaPhone className="fa" />
          </div>
          <div>
            <input type="password" placeholder="Password*" />
            <FaEnvelope className="fa" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password*" />
            <FaKey className="fa" />
          </div>
          <div>
            <input type="password" placeholder="Register Code*" />
            <FaKey className="fa" />
          </div>
          <div>
            <input type="state" placeholder="State*" />
            <FaPlus className="fa" />
          </div>
          <div>
            <input type="url" placeholder="Avatar Url*" />
            <FaImage className="fa" />
          </div>
        </div>
        <button className="reg">Register</button>
        <p>Already have an account?</p>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
