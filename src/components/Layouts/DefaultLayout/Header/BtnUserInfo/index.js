import s from "./styleBtnUserInfo.scss";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const BtnUserInfo = ({isActivePC, isActiveMB}) => {
    
    
  
    const [activeLogin,setActiveLogin] = useState(false);
    const [hiddenModal,setHiddenModal] = useState(true);
    console.log('sd');
    
    const handleToggle = () =>{
        setActiveLogin(!activeLogin);
    }
    
    const handleExit = () =>{
      setHiddenModal(!hiddenModal); 
    }
    
  return (
    <div className="btnUserInfoContainer">
      {/* Btn for PC and Tablet */}
      <button className={isActivePC ? "btnUserInfo active" : "btnUserInfo"} onClick={handleExit}>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </button>
      {/* Btn for Mobile */}
      
      <div className={isActiveMB ? "btnUserInfoMobile active": 'btnUserInfoMobile'}>
        <button onClick={handleExit} className="btnSignUpMobile" >Đăng ký</button>
        <button onClick={handleExit}  className={"btnSignInMobile"}>Đăng nhập</button>
      </div>
      <div className={hiddenModal ? "overPlay hidden" : "overPlay"}>
        <div className={activeLogin ? 'container change' : 'container'}>
          <div className="forms-container">
            <div className="form-control signup-form">
              <form action="#">
                <h2>Signup</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <button>Signup</button>
              </form>
              {/* <span>or signup with</span> */}
              {/* <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div> */}
            </div>
            <div className="form-control signin-form">
              <form action="#">
                <h2>Signin</h2>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button>Signin</button>
              </form>
              {/* <span>or signin with</span>
              <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div> */}
            </div>
          </div>
          
          <div className="intros-container">
            <div className="intro-control signin-intro">
              <div className="intro-control__inner">
                <h2>Welcome back!</h2>
                <p>
                  Welcome back! We are so happy to have you here. It's great to
                  see you again. We hope you had a safe and enjoyable time away.
                </p>
                <button id="signup-btn" onClick={handleToggle}>No account yet? Signup.</button>
              </div>
            </div>
            <div className="intro-control signup-intro">
              <div className="intro-control__inner">
                <h2>Come join us!</h2>
                <p>
                  We are so excited to have you here.If you haven't already,
                  create an account to get access to exclusive offers, rewards,
                  and discounts.
                </p>
                <button id="signin-btn" onClick={handleToggle}>
                  Already have an account? Signin.
                </button>
              </div>
            </div>
          </div>
          <FontAwesomeIcon onClick={handleExit} icon={faXmark} size="lg" style={{cursor:'pointer',position: 'absolute', right:'0',padding: '10px', zIndex: '3'}}></FontAwesomeIcon>
          
        </div>
      </div>
    </div>
  );
};

export default BtnUserInfo;
