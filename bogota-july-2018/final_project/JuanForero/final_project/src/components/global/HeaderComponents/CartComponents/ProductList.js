import React, {Component} from 'react';

class ProductList extends Component{

    delete(key){
        this.props.delete(key)
    }
    render(){
        var todoItems=this.props.items;
        return(
          todoItems.map((item)=>
          <div className="itemsTodoList" key={item.key}>  
              <div onClick={()=>this.delete(item.key)}>
                   {item.tasks} 
              </div>
          
          </div>
            )
        );
    }
    }
export default ProductList;