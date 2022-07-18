

export default function NumeroBase(NumeroInserido,BaseFinal){

     
    var min = 0;
    if(BaseFinal == 'Days')
    {
      min = NumeroInserido * 1440;
    }else if(BaseFinal == 'Hours')
    {
        min = NumeroInserido * 60;
    }else if(BaseFinal == 'Minutes')
    {
        min = NumeroInserido; 
    }else if(BaseFinal == 'Seconds')
    {
        min = NumeroInserido / 60;
    }else 
    {
      return  "Error during conversion.";
    }
 

    var ret  = `${ FormatarEmTempo(min)}. `

    return ret;
  }

  function FormatarEmTempo(min){
    return  MinutosParaBaseDias(min)+ "d" + MinutosParaBaseHoras(min)+"h"+MinutosParaBaseMinutos(min)+ "m" + MinutosParaBaseSegundos(min) + 's';
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
   


