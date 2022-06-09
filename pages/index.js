import {useState} from 'react';
 
function Home() {
    return <DayPercentage />
}


function DayPercentage(props){
    
    

    const in1 = props.in1;
    const in2 = props.in2;
    var resultado = props.resultado;

    function Calcular(){
          console.log(this);
          var a = 10;
          var b = 1;
          resultado = sub3(a,b) + "d"+sub4(a,b) + "h"+sub5(a,b) + "m";
          console.log(resultado);
        }

    return (
        <div>
             <div>
                <input type="text" value={in1} /> % of <input type="text" value={in2}/> day(s) is : {resultado}
            </div> 
            <div>
                <input type="button" value="Calculate" onClick={Calcular()}  />  
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


 
export default Home



 