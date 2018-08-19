import React, {Component} from 'react';
import {connect} from 'react-redux';
class ShoWeather extends Component{
      render(){
              const values=this.props.info;
          return(   
              <div>
                  <table>
                   <tr> 
                       <th>
                        <h2>Country:</h2>
                        </th>
                        <th>
                         {(values.countries)}
                         </th>
                    </tr>
                    <tr>
                        <th>
                 <h2>City:</h2>
                        </th>
                        <th>
                         {(values.cities)}
                        </th>
                 </tr>
                 <tr>
                 <th>
                 <h2>Temperature:</h2>        
                     </th>
                        <th> 
                         {(values.temperature)}
                        </th>
                 </tr>
                 <tr>
                     <th>
                 <h2>Humidity:</h2>
                     </th>
                     <th>
                         {(values.humdities)}  
                     </th>
                 </tr>
                 <tr>
                     <th>
                 <h2>Description:</h2>  
                    </th>    
                    <th>                         
                         {(values.descriptions)}
                     </th>
                   </tr>      
                 </table>
          </div>
          )
      }   
}

const mapStateProps=state=>{
    return{
        info:state.info
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        //Methods
    }
}
export default connect(mapStateProps,mapDispatchToProps)(ShoWeather);