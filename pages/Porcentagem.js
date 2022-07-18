 
// import DivididoPorCem from './Auxiliar.js';
// import DiasEmHoras from './Auxiliar.js';

import { Form } from "react-bootstrap";
export default function CalcularPorcentagem(lstCom,BaseFinal){
   
    // if(lstCom[4].ButtonValue == 'Days')
    // {
    //   return  PorcentagemDeDias(lstCom); 
    // }else if(lstCom[4].ButtonValue == 'Hours')
    // {
    //   return  PorcentagemDeHoras(lstCom); 
    // }else if(lstCom[4].ButtonValue == 'Minutes')
    // {
    //   return  PorcentagemDeMinutos(lstCom); 
    // }else 
    // {
    //   return  "Erro ao realizar operação de porcentagem.";
    // }
 
  }

  function PorcentagemDeMinutos(lstCom){
    let min = PorcentagemDeUmNumero(lstCom[3].ButtonValue,lstCom[0].ButtonValue);
    return  FormatarEmTempo(min);
   }

  function PorcentagemDeHoras(lstCom){
   let min = PorcentagemDeUmNumero(HorasEmMinutos(lstCom[3].ButtonValue),lstCom[0].ButtonValue);
   return  FormatarEmTempo(min);
  }

  function PorcentagemDeDias(lstCom){
    let min = PorcentagemDeUmNumero(DiasEmMinutos(lstCom[3].ButtonValue),lstCom[0].ButtonValue);
    return  FormatarEmTempo(min);
  }

  function FormatarEmTempo(min){
    return  MinutosParaBaseDias(min)+ "d" + MinutosParaBaseHoras(min)+"h"+MinutosParaBaseMinutos(min)+ "m" + MinutosParaBaseSegundos(min) + 's';
  }

  function HorasEmMinutos(a){
    return a * 60;
  }

  function DiasEmMinutos(a){
    return a * 1440; // a * 60 * 24
  }

  function PorcentagemDeUmNumero(numero,porcentagem){
      return numero * (porcentagem/100);
  }

  function MinutosParaBaseDias(Minutos){
    return Math.trunc( Minutos / 1440);
  }

  function MinutosParaBaseHoras(Minutos){
    return Math.trunc( (Minutos%1440)/(60))
  }
  function MinutosParaBaseMinutos(Minutos){
    return Math.trunc((Minutos%1440)%60);
  }

  function MinutosParaBaseSegundos(Minutos){
    return Math.trunc((((Minutos%1440)%60)*60)%60);
  }