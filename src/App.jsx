import { useEffect, useState } from "react";
import Home from "./components/blog/Home";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Blogs from "./components/blog/Blog-data";
import Logincontext from "./components/blog/Logincontext";
import Editblog from "./components/blog/Edit-blog";
import User from "./components/blog/user";
import Addblog from "./components/blog/Addblog";
import Blogpreview from "./components/blog/Blog-preview";
import store from "./services/store";
import Protectrouter from "./components/blog/Protectrouter";
import Signin from "./components/blog/login/signin";

function App() {
  useEffect(() => {
    const data = {
      name: "Mohit Rathod",
      email: "mohit@gmail.com",
      password: "mohit123",
    };
    sessionStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <Logincontext>
      <Provider store={store}>
        <nav>
          <BrowserRouter>
            {/* <div className="d-flex align-items-center w-100 justify-content-around bg-black text-light">
              <p className="fs-4 pt-2">React-Router</p>
              <div className="d-flex gap-5">
                <Link to="/" className="text-light text-decoration-none">
                  Blog-App
                </Link>
                <Link to="/task" className="text-light text-decoration-none">
                  Router-Task
                </Link>
              </div>
            </div> */}

            <Routes>
              <Route path="/" element={<Home></Home>}>
                <Route path="/home" element={<Blogs></Blogs>}></Route>
                <Route path="/user" element={<User></User>}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/edit/:id" element={<Protectrouter Component={Editblog} />}></Route>
                <Route
                  path="/blogpreview/:id"
                  element={<Blogpreview></Blogpreview>}
                ></Route>
                <Route path="/addblog" element={<Protectrouter Component={Addblog} />}></Route>
                <Route path="/protected" element={<Protectrouter />}></Route>

              
              </Route>
             
            </Routes>
          </BrowserRouter>
        </nav>
      </Provider>
    </Logincontext>
  );
}

export default App;
