import "./App.css";
import React, {useEffect} from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";

const App = () => {

  const [{},dispatch] = useStateValue();

  useEffect(()=>
  {
    //will only run when app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>> ", authUser);

      if(authUser)
      {
        //the user logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  },[])




  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>

          <Route exact path="/" element={<Home />}></Route>

          <Route path="/login" element=  {<Login />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>

          <Route path="/payment" element={<Payment />}></Route>

          

          

          

          

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
