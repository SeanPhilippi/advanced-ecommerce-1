import React, { Component } from 'react';
import state from './state';
import logo from './logo.svg';
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
    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({}))
    }

    addProduct = (product) => {
        this.setState({
            cart: [
                ...this.state.cart,
                product
            ]
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
