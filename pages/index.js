import {useState} from 'react';

import React from 'react';
import ReactDOM from 'react-dom';


 
 
//npm run dev to start
function DayPercentage(props){
    
    const [resultado,setResultado] = useState("");
  // let resultado  = "";
    let in1 = 10;
    let in2 = 1;

    function Calcular(){
       var a = document.getElementById('input1').value;
       var b = document.getElementById('input2').value;
         
          setResultado( sub3(a,b) + "d"+sub4(a,b) + "h"+sub5(a,b) + "m");  
         console.log(resultado);
       }

    return (
        <div>
             <div>
                <input type="text" defaultValue={in1} id="input1" /> % of <input type="text" defaultValue={in2} id="input2"/> day(s) is : <h3>{resultado} </h3> .
            </div> 
            <div>
                <input type="button" value="Calculate" onClick={Calcular}  />  
            </div> 
        </div>
    )
}

function Home() {
    return  ( 

      
<div class="container">
    <Materialize />



    <div class="row">
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Result</span>
                        <p>Parcial Result</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Message</a>

                    </div>
                </div>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">7</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">8</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">9</span>
            </div>
        </div>
        <div class="col s2 m2">
            <div class="card-panel darken-1">
                <span class="dark-text">Decimal </span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel darken-1">
                <span class="dark-text">= </span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">4</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">5</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">6</span>
            </div>
        </div>
        <div class="col s2 m2">
            <div class="card-panel darken-1">
                <span class="dark-text">Days </span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel darken-1">
                <span class="dark-text">% </span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">1</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">2</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">3</span>
            </div>
        </div>
        <div class="col s2 m2">
            <div class="card-panel darken-1">
                <span class="dark-text">Minutes </span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel darken-1">
                <span class="dark-text">In</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col s1 m1">
            <div class="card-panel blue-grey">
                <span class="white-text">C</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel teal">
                <span class="white-text">0</span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel blue-grey">
                <span class="white-text">.</span>
            </div>
        </div>
        <div class="col s2 m2">
            <div class="card-panel darken-1">
                <span class="dark-text">Seconds </span>
            </div>
        </div>
        <div class="col s1 m1">
            <div class="card-panel darken-1">
                <span class="dark-text">Of </span>
            </div>
        </div>
    </div>





    <DayPercentage />

</div>
       
          )
}

function Materialize(){
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

         
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
       </div>     
    );
}
  
function sub1(a,b){ 
    return b*24*(a/100) ;
}

function sub2(a,b){
    return sub1(a,b)*60
    }

function sub3(a,b){
    return Math.trunc( sub2(a,b) / 1440);
    }

function sub4(a,b){
    return Math.trunc( (sub2(a,b)%1440)/(60))
    }

function sub5(a,b){
    return Math.trunc((sub2(a,b)%1440)%60);
    }
 
      function teste2(){
        var dt = new Date();
        var result = dt.setDate(dt.getDate() + parseFloat(10.5));
        console.log(result);
      }

    

export default Home



 