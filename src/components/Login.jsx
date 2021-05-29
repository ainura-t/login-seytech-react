import { Link } from "react-router-dom";
import "../styles.css";
import { FaEnvelope, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  return (
    <div className="log">
      <div className="space"></div>
      <div className="login">
        <h3>LOGIN TO YOUR ACCOUNT</h3>
        <div>
          <input type="email" placeholder="Email*" />
          <FaEnvelope className="fa" />
        </div>
        <div>
          <input type="password" placeholder="Password*" />
          <FaEyeSlash className="fa" />
        </div>
        <button className="in">Log in</button>
        <p>Don't have an account?</p>
        <Link className="link" to="/">
          Create an account
        </Link>
      </div>
    </div>
  );
};
export default Login;
