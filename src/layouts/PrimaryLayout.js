import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = (props) => (
  <div>
    <Header />
    <div className="container">
        <div className={props.row ? props.row : "row justify-content-md"}>
            {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout;