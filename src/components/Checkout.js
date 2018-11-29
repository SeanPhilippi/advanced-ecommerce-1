import React from 'react';

class Checkout extends React.Component {

   styling = {
      marginTop: '12px',
      float: 'right',
      fontWeight: 'bold'
   }

   // handleCheckout = () => {

   // }

   render() {
      return (
         <button onClick='' style={this.styling}>
            Checkout
         </button >
      )
   }
}

export default Checkout;