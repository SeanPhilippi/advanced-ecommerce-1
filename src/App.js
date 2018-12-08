import React, { Component } from 'react';
import state from './state';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

class App extends Component {
    state = {
        numberOfCartItems: state.numberOfCartItems,
        products: state.products,
        cart: []
    }

    // connecting React to Express backend server

    // WHERE I LEFT OFF
    // maybe I don't need controllers and models at all
    // figure out .get express action I would need if I need one at all? 
    // how do I fetch my products collection data from mlab?  

    componentDidMount() {
        fetch('http://mongodb://kesto:password1@ds161018.mlab.com:61018/advanced-ecommerce-1/collections/products')
            .then(res => {
                res.json().then(data => {
                    console.log(data);
                    return this.setState({ products: data })
                })
                    .catch(console.error);
            })
    }

    addProduct = (product) => {
        this.setState({
            cart: [
                ...this.state.cart,
                product
            ]
        })
    }

    handleCheckout = () => {
        fetch('/', {
            method: 'post',
            body: {

            }
        })
    }
    // mapping product components, makes it easier to refer to individual product values
    // and buttons clicked can refer to the product they are attached to.  
    products = this.state.products.map(product => {
        return (
            <ProductDetail product={product} add={this.addProduct} cart={this.state.cart} />
        )
    })

    render() {

        return (
            <div className="App">
                <Header cart={this.state.cart} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p className="lead">Shop Name</p>
                            <div className="list-group">
                                <a href="#" className="list-group-item">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Carousel />
                            <div className="row">
                                {this.products}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <hr />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
