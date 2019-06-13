import React from 'react';
import styles from './basketStyle.module.css'

class Basket extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
  }
}
  
render(){
  
    return (
    <section>
      <p>Shopping Cart</p>
      <ul>
        {this.props.listBasketItems.map((idPhfone, index) => (
          <li key={ idPhfone }>
              <p>{ idPhfone }</p>
            <button 
              className={styles.button}
              onClick={() => {this.props.removeFromBasket(index)}}>x
            </button>
          </li>
        ))}
        
      </ul>
    </section>
  );
} 
  

};

export default Basket;
