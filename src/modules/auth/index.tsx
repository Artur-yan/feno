import React, {useContext, useState} from "react";
import StateContext from "../../contexsts/stateContext";
import MeanSvg from '../../assets/icons/mean.png';
import MailSvg from '../../assets/icons/mail.svg';
import UserSvg from '../../assets/icons/user.svg';
import facebookSvg from '../../assets/icons/facebook.svg';
import googleSvg from '../../assets/icons/google.svg';
import appleSvg from '../../assets/icons/apple.svg';
import {ButtonBase} from "../../components/Form/Button";
import {Link} from "react-router-dom";
import './style.scss';
import {Input} from "../../components/Form/Input";
import CheckBoxSquare from "../../components/Form/CheckBox/checkBoxSquare";
import Paths from "../../routes/paths";

export const Auth = function ({className}) {
  const [remember, setRemember] = useState(false);
  const { userState } = useContext(StateContext);
  return (
    <div className={`${className} auth`}>
      <div className="cover">
        <img src={MeanSvg} alt="cover"/>
      </div>
      <div className="actions">
        <h4 className='G-fs-24'>Sign in to our platform</h4>
        <div className="authInputs">
          <Input placeholder='name@flowbite.com' label='Email address' icon={MailSvg}/>
          <Input placeholder='••••••••••' label='Password' icon={UserSvg}/>
          <div className="authRemember">
            <CheckBoxSquare label='Remember me' value={remember} onChange={() => setRemember(!remember)}/>
            <span className='G-blue'>Forgot password?</span>
          </div>
        </div>
        <div className="authButtons">
          <ButtonBase classes='P-btn-primary md' showArrow={true} onClick={() => {userState.setUser({name: 'TestUser'})}}>
            <Link to={Paths.PROFILE}>
              Sign In
            </Link>
          </ButtonBase>
          <ButtonBase classes='P-btn-link md'>
            <Link to={Paths.PROFILE}>
              Sign in with magic link 🪄
            </Link>
          </ButtonBase>
        </div>
      </div>
      <div className="noRegistered">
        <p className='G-fs-14'>Not registered? <span className='G-blue'>Create account </span></p>
      </div>
      <div className="authSocial">
        <span className="line"></span>
        <span className="signWith">Or Sign With</span>
        <span className="line"></span>
      </div>
      <div className="socialLogin">
        <div className="socialLoginItem">
          <img src={facebookSvg} alt=""/>
        </div>
        <div className="socialLoginItem">
          <img src={googleSvg} alt=""/>
        </div>
        <div className="socialLoginItem">
          <img src={appleSvg} alt=""/>
        </div>
      </div>
    </div>
  )
};