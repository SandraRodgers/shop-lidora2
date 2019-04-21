import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { getDress  } from "../../../ducks/reducer";
import './product.css'



class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
    
    };
 
  }

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`).then(response => {
      this.setState({ productInfo: response.data });
      //we get the productid from the component and set state so that productInfo contains that product (object)
    }).then( ()=> {if(this.state.productInfo[0].category === 'dresses'){
      this.props.getDress(this.state.productInfo[0].dressesid)
    }})
    console.log(this.props.dress)
 
  }






  render() {
    console.log(this.state.productInfo)
   

 
    return (
      <div>
     <div className="container">
          <div className="column1">
            {this.props.dress[0] && (
              <img
                className="product-img"
                src={this.props.dress[0].image}
                alt=""
              />
            )}
          </div>
          <div className="column2">
            {this.props.dress[0] && (
              <p className="product-title">{this.props.dress[0].name}</p>
            )}
            {this.props.dress[0] && (
              <p>Price: ${this.props.dress[0].price} </p>
            )}
            {this.props.dress[0] && (
              <p>Size: {this.props.dress[0].size}</p>
            )}
            </div>
     

      </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDress: getDress }
)(Product);
