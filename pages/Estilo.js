import Materialize from './Materialize';


const uniqueVar = ` .vermelho {color:red;}                     
                    .fonte8 {font-size: 8px;}                  
                    .fonte12 {font-size: 12px;}                
                    .fonte10 {font-size: 10px;}                
                    .CinzaEscuro {color:#808080;}              
                    .CinzaClaro {color:#5C5C5B;}               
                    .LinhaFina {line-height: 50%;}             
                    .red {border: 1px solid #FF0000;}          
                    .showD {display: block;}                  
                    .hideD {display: none;}                    
                    .botao:active {background-color: #F0F0F0;} 
                    .botao:hover {background-color: #F6F6F6;}
                    .red: {border:1px solid #FF0000;background-color: #FaFaFa;} `;

export default function Estilo(){
    return(
        <div>
            <style>
                {uniqueVar}
            </style>  
            <Materialize />

        </div>
    );

}