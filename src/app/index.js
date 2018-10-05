import React from "react";
import { render } from  "react-dom";
import { Header } from  "./components/Header";
import { Home } from  "./components/Home";
import { Footer } from  "./components/Footer";

class App extends React.Component{
    render(){
            return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Home name= {"Vicky"} age={26} />
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Footer/>
                        
                    </div>
                </div>
            </div>



        );

   }


}

render(<App/>, window.document.getElementById("app"));