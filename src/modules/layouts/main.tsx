import React from "react";
import {Route, withRouter} from "react-router-dom";
import Header from "./header";
import './style.scss';
import Footer from "./footer";

const Main = function (props: any) {
  const {
    component: ChildComponent,
    match,
    history,
    ...rest
  } = props;

  return (
    <div className='G-container'>
      <div className="G-page">
        <Header/>
        <Route
          {...rest}
          render={matchProps => {
            return <ChildComponent className='G-main-padding' {...matchProps} />;
          }}
        />
        <Footer/>
      </div>
    </div>
  )
};

export default withRouter(Main);
