import React from "react";
import {
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Counter from "./components/counter";
import CounterInfo, { getDataViaLoader } from "./components/counterInfo";
import FAQCounter from "./components/faqCounter";
import NotFound from "./components/notFoundPage";
import ToDo from "./components/todo";
import "./styles/body.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route // in this the layout component would go inside it like we did layout component in quintet to have all routes in base component and can move
      path="/"
      element={
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              React
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to="counter">
                  Counter
                </NavLink>
                <NavLink className="nav-item nav-link" to="/">
                  Features
                </NavLink>
                <NavLink className="nav-item nav-link" to="/">
                  Pricing
                </NavLink>
                <NavLink className="nav-item nav-link disabled" to="/">
                  Disabled
                </NavLink>
              </div>
            </div>
          </nav>
          <main>
            {/* this is the outlet like we did in angular to load the component and show on ui, where all the routes take places*/}
            <Outlet loader={getDataViaLoader}></Outlet>
          </main>
        </React.Fragment>
      }
    >
      <Route index element={<ToDo></ToDo>}></Route>
      <Route path="counter" element={<Counter></Counter>}>
        <Route path="aboutCounter" element={<CounterInfo></CounterInfo>} loader={getDataViaLoader}> </Route>
        <Route path="faqCounter" element={<FAQCounter></FAQCounter>} ></Route>
      </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);
function App() {
  return (
    // <BrowserRouter>
    //   <div className="body">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <a className="navbar-brand" href="#">
    //         React
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //           <NavLink className="nav-item nav-link active" to="counter">
    //             Counter
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/">
    //             Features
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/">
    //             Pricing
    //           </NavLink>
    //           <NavLink className="nav-item nav-link disabled" to="/">
    //             Disabled
    //           </NavLink>
    //         </div>
    //       </div>
    //     </nav>
    //     <Routes>
    //       <Route
    //         index
    //         // path="/" // or we can use index as it is a index route
    //         element={<ToDo></ToDo>}
    //       ></Route>
    //       <Route path="/counter" element={<Counter></Counter>}></Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div className="body">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
