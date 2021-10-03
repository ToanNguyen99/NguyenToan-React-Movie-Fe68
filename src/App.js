import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import { UserTemplate } from "templates/UserTemplate";

const CheckoutTemplateLazy = lazy(() =>
  import("templates/CheckoutTemplate/CheckoutTemplate")
);

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/news" exact Component={News} />
        <Route path="/register" exact Component={Register} />
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        <UserTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/" exact Component={Home} />
        {/* <Suspense
          fallback={
            <div
              className="w-full flex items-center justify-center"
              style={{ height: "100vh" }}
            >
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
            </div>
          }
        >
         
        </Suspense> */}
      </Switch>
    </Router>
  );
}

export default App;
