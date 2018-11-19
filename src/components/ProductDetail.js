import React from 'react';

const ProductDetail = props => {
   const stars = [];
   const numOfStars = props.product.rating;
   const rating = () => {
      for (let i = 0; i < numOfStars; i++) {
         stars.push(<span className="glyphicon glyphicon-star"></span>)
      }
      console.log(props.product.id, stars.length)
   }

   const finishRating = () => {
      if (stars.length < 5) {
         for (let x = 0; x < 5 - stars.length; x++) {
            stars.push(<span className="glyphicon glyphicon-star-empty"></span>)
         }
      }
   }

   rating();
   finishRating();

   return (
      <div className="col-sm-4 col-lg-4 col-md-4">
         <div className="thumbnail">
               <img src="{ props.product.imageUrl }" alt=""/>
               <div className="caption">
                  <h4 className="pull-right">{ props.product.price }</h4>
                  <h4><a href="#">{ props.product.name }</a>
                  </h4>
                  <p>{ props.product.description }</p>
               </div>
               <div className="ratings">
                  <p className="pull-right">{ props.product.reviews }</p>
                  <p>
                     { stars }
                     {/* <span className="glyphicon glyphicon-star"></span>
                     <span className="glyphicon glyphicon-star"></span>
                     <span className="glyphicon glyphicon-star"></span>
                     <span className="glyphicon glyphicon-star"></span>
                     <span className="glyphicon glyphicon-star"></span> */}
                  </p>
               </div>
         </div>
      </div>
   )
}

export default ProductDetail;