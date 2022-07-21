export default function Painel(props){
    return(
    
        
        <div className="col s12 m12 " >
            <div className="row">
                <div className="card blue-grey darken-1 ">
                    <div className="card-content white-text">
                        <span className="card-title">{props.Result} </span>
                        <p>{props.Parcial}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">{props.Sub}</a> 
                    </div>
                </div>
            </div>
            </div>
       
    
    );
}