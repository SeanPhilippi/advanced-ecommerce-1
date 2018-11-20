import React from 'react';

class Button extends React.Component {

   render() {

      const { increment } = this.props;
      return (
         <button onClick={ increment } >
            Add To Cart
         </button>
      )
   }  
}

export default Button;