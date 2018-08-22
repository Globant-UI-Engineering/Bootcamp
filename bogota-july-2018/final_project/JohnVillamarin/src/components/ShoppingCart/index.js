import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../action";

const ShoppingCart = (props) =>{ 
    return (
        <div className="col-6 col-sm-4">
            <div className="card mt-5">
                <div className="card-header"><h6>shopping cart</h6></div>
                <table>                    
                    <tbody>
                        {props.cart.map(product =>
                            <tr key={product.id}>
                                <td>{product.desciption}</td>
                                <td className="text-right">${product.price}</td>
                                <td className="text-right"><button onClick={() => props.removeFromCart(product)}>X</button></td>
                            </tr>                            
                        )}
                    </tbody>
                </table> 
                <div className="card-footer text-white bg-secondary">                    
                    Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}                        
                </div>                                    
            </div>   
        </div> 
    )    
}
const mapStateToProps = state=>{
    return{
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        removeFromCart(product){
            dispatch(removeFromCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart)