import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from './components/Modal';

export default class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={ProductList} />
        <Route  exact path="/madlab" component={ProductList} />
        <Route  exact path="/madlab/details" component={ProductList} />
        <Route path="/details" component={Details}/>
        <Route  exact path="/madlab/cart" component={ProductList} />
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal />

    </React.Fragment>
  )
  }
}

