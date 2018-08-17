import React, { Component } from 'react';
import PropType  from 'prop-types';

class Content extends Component{
    static propTypes={
        body: PropType.object.isRequired,
      }
render(){
    const{body}=this.props;
    return( 
       <div>
            {body}
       </div>
    );
}

}
export default Content;