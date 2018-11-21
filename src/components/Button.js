import React from 'react';

class Button extends React.Component {

   render() {
      const { add } = this.props;
      return (
         <button onClick={ add } >
            Add To Cart
         </button>
      )
   }  
}

export default Button;