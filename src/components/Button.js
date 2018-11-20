import React from 'react';

class Button extends React.Component {

   render() {
      return (
         <button onClick={ this.props.increment } >
            Add To Cart
         </button>
      )
   }  
}

export default Button;