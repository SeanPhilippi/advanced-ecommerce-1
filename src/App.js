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
        products: state.products
    }

    increment = () => {
        this.setState((prevState) => {
            return {numberOfCartItems: prevState.numberOfCartItems + 1}
        })
    }
    
    render() {
        console.log('cartItems', this.state.numberOfCartItems);
        // inserting product objects from products prop passed down from App component
        // object values populating rendered ProductDetail components
        const products = this.state.products.map(product => {
            return (
                <ProductDetail product={product} increment={this.increment} />
            )
        })

        const { numberOfCartItems} = this.state;

        return (
            <div className="App">
                <Header cartItems={ numberOfCartItems }/>
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
                            <Carousel/>
                            <div className="row">
                                { products }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <hr/>
                    <Footer/>
                </div>
            </div>
        );
    } 
}

export default App;
