import React, { Component} from "react"
import { Link} from 'react-router-dom';

class Retos extends Component
{

render()
{
    return(
        <div>
            <div className="g-form-container">
                <div className="g-form-tip">
                    <h1>Retos</h1>
                        {this.props.areas.map(response=>{
                            return(
                                <div>
                                     <Link to={"/retodetalle/"+response.des_area}>                                                   
                                    <div class="target-green" >                              
                                        
                                        <div class="card-header"><strong>{response.des_area}</strong></div>
                                        <img src={"http://localhost/aprendo/fotos/"+response.foto_area}/>
                                        
                                     
                                    </div>
                                    </Link>
                                 </div>                                                      
                                 )}
                                        )}

                </div>
            </div>
        </div>
    )
}
}

export default Retos
