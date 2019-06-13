import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './components/BasketComponent/Basket';
import Filter from './components/Filter/Filter';
import Catalog from './components/Catalog/Catalog';
import Viewer from './components/Viever/Viewer';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],


    };

    this.addIdToBasket = (id) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          id
        ]
      })
    }



    this.removeIdFromBasket = (index) => {
    this.state.basketItems.splice(index, 1);
     this.setState({
       basketItems: this.state.basketItems
     })
      
    };
  }
  render() {

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket 
                listBasketItems={this.state.basketItems}
                removeFromBasket={this.removeIdFromBasket}
              />
            </div>

            <div className="col-md-10">
              {this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  addIdToBasket={this.addIdToBasket}
                />
              ) : (
                  <Catalog
                    phones={this.state.phones}
                    onPhoneSelected={(phoneId) => {
                      this.setState({
                        selectedPhone: getById(phoneId),
                      });
                    }}
                    addIdToBasket={this.addIdToBasket}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    );
}}



export default App;


