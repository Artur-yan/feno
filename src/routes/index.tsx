import React, {Suspense, useState} from "react";
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import Main from "../modules/layouts/main";
import {
  Home,
} from "../modules/home";
import {Auth} from "../modules/auth";
import {Profile} from "../modules/profil";
import {Orders} from "../modules/orders";
import {Transaction} from "../modules/transaction";
import StateContext from "../contexsts/stateContext";
import Paths from './paths';
import {IUserModel} from "../platform/api/user/res/user-model";
import '../App.scss';

const RoutContainer = () => {

  const [user, setUser] = useState<IUserModel>(null);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
        <StateContext.Provider value={
          {
            userState: {user, setUser},
          }
        }>
          <BrowserRouter>
            <Switch>
              <Main exact path={Paths.HOME} component={Home}/>
              <Main exact path={Paths.AUTH} component={Auth}/>
              <Main exact path={Paths.PROFILE} component={Profile}/>
              <Main exact path={Paths.ORDERS} component={Orders}/>
              <Main exact path={Paths.TRANSACTIONS} component={Transaction}/>
              <Redirect to={Paths.HOME} />
            </Switch>
          </BrowserRouter>
        </StateContext.Provider>
    </Suspense>
  )
};

export default RoutContainer;
