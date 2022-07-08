 
import DivididoPorCem from './Auxiliar.js';
import DiasEmHoras from './Auxiliar.js';

export default function CalcularPorcentagem(lstCom){
    console.log('Calc. Porc.',lstCom);

    // if(lstCom[4].ButtonValue == 'Days')
    // {
    //   return  PorcentagemDeDias(lstCom); 
    // }else 
    // {
    //   return  "Erro ao realizar operação de porcentagem.";
    // }

    return  PorcentagemDeDias(lstCom);


  }

  function PorcentagemDeDias(lstCom){
    return  sub3(lstCom[0].ButtonValue,lstCom[3].ButtonValue) + "d"+sub4(lstCom[0].ButtonValue,lstCom[3].ButtonValue) + "h"+sub5(lstCom[0].ButtonValue,lstCom[3].ButtonValue) + "m" ;
  }

  function sub1(a,b){ 
    return DiasEmHoras(b)*(DivididoPorCem(a)) ;
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

