import { useState, useMemo, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Login.module.scss";
import { UserContext } from "../../Context/ContextProv";

const FormCard = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    document.title = "Login | NITSMUN";
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate, isLoggedIn]);
  // const [mssg, setMssg] = useState("");
  const isLoginEnabled = useMemo(() => {
    return Boolean(user.email && user.password);
  }, [user.email, user.password]);
  const handleSub = async (e) => {
    e.preventDefault();
    if (!user.email.includes("@")) {
      toast("Please enter a valid email");
      return;
    }

    if (user.password.length < 8) {
      toast("Password must be atleast 8 characters long");
      return;
    }
    setSubmitting(true);
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          if (res.data.message === "Login successful") {
            Cookies.set("authToken", res.data.token);
            navigate("/registration");
            window.location.reload();
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "Too many requests, please try again later.":
            toast("Too many requests, please try again later.");
            break;
          case "Please fill all required fields":
            toast("Please fill all required fields");
            break;
          case "No account found":
            toast("No account found");
            break;
          case "Your account has been scheduled for deletion.":
            toast("Your account has been scheduled for deletion.");
            break;
          case "Wrong email or password":
            toast("Wrong email or password");
            break;
          case "Failed to log in":
            toast("Failed to log in");
            break;
          default:
            toast("Something went wrong, please try again");
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.loginWrap}>
      {/* {mssg === "" ? null : <div className={styles.messageBox}>{mssg}</div>
      } */}
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Welcome Back</h1>
        <p className={styles.p}>Log in to access your NITS-MUN account</p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Enter Personal Email"
          className={styles.textBox}
          name="email"
          value={user.email}
          onChange={(e) => setUser({ email: e.target.value, password: user.password })}
        />
        <input
          type="password"
          placeholder="Enter password"
          className={styles.textBox}
          name="password"
          onChange={(e) => setUser({ email: user.email, password: e.target.value })}
        />
        {/*         
        <div className={styles.forgotCont}>
          <Link to="/ForgotPassword" className={styles.button}>
            Forgot Password?
          </Link>
        </div> */}
        <div className={styles.subCont}>
          <input
            type="submit"
            value={submitting ? "Submitting..." : "Log In"}
            className={styles.subBtn}
            disabled={!isLoginEnabled || submitting}
            style={{
              cursor: !isLoginEnabled || submitting ? "not-allowed" : "pointer",
              opacity: submitting || !isLoginEnabled ? "0.5" : "1",
            }}
            onClick={handleSub}
          />

          <h6 className={styles.signupQuestion}>
            Forgot Password?{" "}
            <Link to="/forgotPassword" className={styles.a}>
              Click here to reset
            </Link>
          </h6>
          <h6 className={styles.signupQuestion}>
            Haven&apos; t signed up?{" "}
            <Link to="/signup" className={styles.a}>
              Sign Up Here
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
};
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <Navbar page="CONTACT" />
      <div className={styles.pageCont}>
        <div className={styles.innerCont}>
          <div className={styles.logoCont}>
            <div className={styles.parent}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703270578/nitsmun/oAuth-logo_z5vdk0.svg"
                alt="logo loading..."
                className={styles.img}
              />
            </div>
            <h1 className={styles.h1}>
              Join us in shaping a better world through NITS MUN!
            </h1>
          </div>
          <FormCard />
        </div>
      </div>
    </div>
  );
};
export default Login;
