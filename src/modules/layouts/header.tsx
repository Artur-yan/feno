import React, {useContext} from "react";
import MenuSvg from '../../assets/icons/menu.svg';
import MainSvg from '../../assets/icons/mainLogo.svg';
import avatar from '../../assets/icons/avatar.png';
import alertSvg from '../../assets/icons/alert.svg';
import {ButtonBase} from "../../components/Form/Button";
import Paths from "../../routes/paths";
import {Link} from "react-router-dom";
import StateContext from "../../contexsts/stateContext";

const Header = () => {
  const { userState } = useContext(StateContext);

  return (
    <div className='mainHeader'>
      <div>
        <div className="leftMenu">
          <img src={MenuSvg} alt=""/>
        </div>
      </div>
      <div className='center'>
        <Link to={Paths.HOME}><img src={MainSvg} alt=""/></Link>
      </div>
      <div className='right'>
        {userState.user ? (
          <div className='userInfo'>
            <img src={alertSvg} alt=""/>
            <img className='avatar' src={avatar} alt=""/>
          </div>
        ) : (
          <ButtonBase classes='P-btn-primary sm' onClick={() => {}} loading={false}>
            <Link to={Paths.AUTH}>
              Buy now
            </Link>
          </ButtonBase>
        )}

      </div>
    </div>
  )
}

export default Header;