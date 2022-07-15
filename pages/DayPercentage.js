import {useState} from 'react';

export default function DayPercentage(props){
    

    //this code is only for test react contexts


    const [resultadoDP,setResultado] = useState();
  // let resultado  = "";
    let in1 = 10;
    let in2 = 1;

    function CalcularDP(){
       var a = document.getElementById('input1').value;
       var b = document.getElementById('input2').value;
         
          setResultado( sub3(a,b) + "d"+sub4(a,b) + "h"+sub5(a,b) + "m");  
       }

    return (
        <div className={props.display} >
             <div>
                <input type="text" defaultValue={in1} id="input1" /> % of <input type="text" defaultValue={in2} id="input2"/> day(s) is : <h3>{resultadoDP} </h3> .
            </div> 
            <div>
                <input type="button" value="Calculate" onClick={CalcularDP}  />  
            </div> 
        </div>
    )
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