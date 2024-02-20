import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./Components";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
  

      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/sukses" element={ <Sukses/> } />
          <Route path="/" element= { <Home/> } />
        </Routes>
    </BrowserRouter>
    );
  }
}
