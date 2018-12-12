import React from 'react';

class Checkout extends React.Component {

   styling = {
      marginTop: '12px',
      float: 'right',
      fontWeight: 'bold'
   }

   handleCheckout() {
      fetch('/orders', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.props.cart)
      })
         .then(res => res.json())
         .catch(err => console.log(err))
   }


   render() {
      return (
         <button onClick={() => this.handleCheckout()} style={this.styling}>
            Checkout
         </button >
      )
   }
}

export default Checkout;