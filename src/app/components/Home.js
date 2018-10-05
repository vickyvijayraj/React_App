import React from "react";

export class Home extends React.Component{
    constructor(props){
      super();
        this.age = props.age;

    }

    onMakeOlder(){


        this.age+=3;
        console.log(this.age);
    }
    render(){
        
        return(
            <div className="badge">
               <p>Your Name is {this.props.name}</p>
               <p>Your age is {this.age}</p>
              <hr/>
              
              <button onClick={() => this.onMakeOlder()} className="btn btn-success">
                My age is
              </button>
                          
             </div>  
        )
 
    }
}

