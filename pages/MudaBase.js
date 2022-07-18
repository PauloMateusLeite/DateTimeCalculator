

export default function MudaBase(NumeroInserido,BaseInicial,BaseFinal){
    console.log('ok',NumeroInserido,BaseInicial,BaseFinal);

    var min = 0;
    if(BaseInicial == 'Days')
    {
      min = NumeroInserido * 1440; 

    }else if(BaseInicial == 'Hours')
    {
        min = NumeroInserido * 60;
    }else if(BaseInicial == 'Minutes')
    {
        min = NumeroInserido; 
    }else if(BaseInicial == 'Seconds')
    {
        min = NumeroInserido / 60;
    }else 
    {
      return  "Error during conversion.";
    }

    if(BaseFinal == 'Days')
    {
      return FormatarEmTempo(min);

    } 
    
    if(BaseFinal == 'Hours')
    {
    return ( MinutosParaBaseDias(min) * 24 ) + MinutosParaBaseHoras(min)+"h"+MinutosParaBaseMinutos(min)+ "m" + MinutosParaBaseSegundos(min) + 's';
    }
    
    if(BaseFinal == 'Minutes')
    {
        return (((( MinutosParaBaseDias(min) * 24 ) + MinutosParaBaseHoras(min) ) *60)+MinutosParaBaseMinutos(min))+ "m" + MinutosParaBaseSegundos(min) + 's';
    }
    
    if(BaseFinal == 'Seconds')
    {
        return ((((((( MinutosParaBaseDias(min) * 24 ) + MinutosParaBaseHoras(min) ) *60)+MinutosParaBaseMinutos(min)))*60 ) + MinutosParaBaseSegundos(min)) + 's';

    } 
 
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
   

