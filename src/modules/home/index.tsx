import React from "react";
import MeanSvg from '../../assets/icons/mean.png';
import {ButtonBase} from "../../components/Form/Button";
import Paths from "../../routes/paths";
import './style.scss';


export const Home = function ({className, history}) {

  return (
    <div className={`${className} home`}>
      <div className="cover">
        <img src={MeanSvg} alt="cover"/>
      </div>
      <div className="actions">
        <h2>Join the crowd! Log in to your account or create a new one in just a few clicks</h2>
        <p>Get the brush that’s working to give you a better smile and a longer life. </p>
        <div className="authButtons">
          <ButtonBase classes='P-btn-primary md' showArrow={true} onClick={() => history.push(Paths.AUTH)}>
              Create An Account
          </ButtonBase>
          <ButtonBase classes='P-btn-link md' onClick={() => history.push(Paths.AUTH)}>
              Sign in to your account
          </ButtonBase>
        </div>
      </div>
    </div>
  )
};