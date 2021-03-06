import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";

//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg";

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { getUserSession, getCurrentAddress } from "../../ducks/reducer";

import Payment from "./Payment"

class CheckoutTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caliTax: 0,
      sdTax: 0,
      total: 0,
      currentAddress: [],
      couponApplied:[],
      productIds: [],
      complete: false,
      redirect: false
    };
  }

  componentDidMount() {
    this.props.getUserSession().then(() => {
      this.checkUser()
    })
    this.getCurrentAddress();
    if(this.props.couponApplied){
      this.setState({couponApplied: [this.props.couponApplied]})}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAddress !== this.props.currentAddress) {
      let currentAddress = [];
      if (this.props.currentAddress)
        for (let i = 0; i < this.props.currentAddress.length; i++) {
          if (this.props.currentAddress[i].current === true) {
            currentAddress.push(this.props.currentAddress[i]);

            this.setState(
              {
                currentAddress: [this.props.currentAddress[i]]
              },
              () => {
                this.props.currentAddress.splice(
                  0,
                  1,
                  this.state.currentAddress[0]
                );
              }
            );
          }
        }
    }
    if (this.props.user && this.props.user.cart) {
      for (let i = 0; i < this.props.user.cart.length; i++) {
        if (this.props.user.cart[i].flashid) {
          if (prevProps.user.cart !== this.props.user.cart) {
            this.props.getUserSession();
          }
        }
      }
    }
    if(prevState.currentAddress !== this.state.currentAddress){
      this.calculateCATax()
    }

    if (this.props.user && this.props.user.cart) {
      if (prevProps.user.cart !== this.props.user.cart) {
        this.props.getUserSession();
      }
    }
  }

  timeConvert=(num)=>{ 
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
     minutes = minutes.toString()
   if(minutes.length===1){
     minutes = '0'+minutes
   }
    return  hours + ":" + minutes   }   

  getCurrentAddress = () => {
    this.props.getCurrentAddress(this.props.user.customerid).then(() => {
      let currentAddress = [];
      if (this.props.currentAddress)
        for (let i = 0; i < this.props.currentAddress.length; i++) {
          if (this.props.currentAddress[i].current === true) {
            currentAddress.push(this.props.currentAddress[i]);
            this.setState({
              currentAddress: [this.props.currentAddress[i]]
            });
          }
        }
    });
  };

  calculateCATax = () => {
    let SDZips = ['91901', '91902', '91903', '91905', '91906', '91908', '91909', '91910', '91911', '91912', '91913', '91914', '91915', '91916', '91917', '91919', '91921', '91931', '91932', '91933', '91934', '91935', '91941', '91942', '91943', '91944', '91945', '91946', '91947', '91948', '91950', '91951', '91962', '91963', '91976', '91977', '91978', '91979', '91980', '91987', '91990', '92003', '92004', '92007', '92008', '92009', '92013', '92014', 
    '92018', '92019', '92020', '92021', '92022', '92023', '92024', '92025', '92026', '92027', '92028', '92029', '92030', '92033', '92036', '92037', '92038', '92039', '92040', '92046', '92049', '92051', '92052', '92054', '92055', '92056', '92057', '92058', '92059', '92060', '92061', '92064', '92065', '92066', '92067', '92068', '92069', '92070', '92071', '92072', '92074', '92075', '92078', '92079', '92081', '92082', '92083', '92084', '92085', '92086', '92088', '92090', '92091', '92092', '92093', '92096', '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108', '92109', '92110', '92111', '92112', '92113', '92114', '92115', '92116', '92117', '92118', '92119', '92120', '92121', '92122', '92123', '92124', '92126', '92127', '92128', '92129', '92130', '92131', '92132', '92133', '92134', '92135', 
    '92136', '92137', '92138', '92139', '92140', '92142', '92143', '92145', '92147', '92149', '92150', '92152', '92153', '92154', '92155', '92158', '92159', '92160', '92161', '92162', '92163', '92164', '92165', '92166', '92167', '92168', '92169', '92170', '92171', '92172', '92173', '92174', '92175', '92176', '92177', '92178', '92179', '92182', '92184', '92186', '92187', '92190', '92191', '92192', '92193', '92194', '92195', '92196', '92197', '92198', '92199' ]

    if (this.state.currentAddress[0].state === "CA") {
      let caliTax = (this.props.user.total * .0725)
      this.setState({caliTax: caliTax })
      // let withCATax= (this.props.user.total * .0725) + this.props.user.total
    } else {
    }
    for(let i=0; i<SDZips.length; i++){
      if(this.state.currentAddress[0].zipcode===SDZips[i]){
        let sdTax = (this.props.user.total * .0025)
        this.setState({sdTax: sdTax})
        // let withSDTax = (this.props.user.total * .0025) + this.props.user.total
     
      }
    }
  };

  checkUser = () => {
    if(
      this.props.user &&
      this.props.user.cart && this.props.user.cart.length === 0)
    this.setState({redirect: true}, () =>{ this.setState({redirect: true})}
    )
  }


  paymentComplete=()=>{
    this.setState({complete: true})
  }

  render() {

    if(this.state.redirect ===true){
      return <Redirect push to="/" />
  }

    let fixedCATax; 
    let fixedSDTax;
    let fixedTotal;
    let fixedDiscount;
    let orderDetails =[]
    let width;

if(this.state.complete===false){
  width='55vw'
} else {
  width = '100vw'
}

if(this.props.user && this.state.caliTax && this.state.sdTax){
     fixedCATax = this.state.caliTax.toFixed(2);
     fixedSDTax = this.state.sdTax.toFixed(2)}

if(this.props.user && this.state.caliTax && this.state.sdTax){
     fixedTotal = (this.props.user.total + this.state.caliTax + this.state.sdTax).toFixed(2)
    } else if(
      this.props.user && this.state.caliTax){
        fixedTotal = (this.props.user.total + this.state.caliTax).toFixed(2)
      } else if(this.props.user && this.props.user.total){
        fixedTotal = (this.props.user.total ).toFixed(2)
      }
     
 
    if(this.props.user && this.props.user.discount){
     fixedDiscount = this.props.user.discount.toFixed(2)}

  
    return (
      <div className="checkout-two-container">
        <div className="checkout-two-column-1"  style={{width:width}}>

          <img alt="logo" className="checkout-one-column-1-logo" src={Logo} />
          <div className="checkout-column-1-steps">
            <Link className='checkout-goback' to={this.props.locationKey}>Cart</Link>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <Link to='/checkout/one' className='checkout-goback'>Information</Link>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <Link className='checkout-goback'  >Payment</Link>
          </div>


  {this.state.complete === false ? 
        <div className="checkout-two-column-3" >
          <div className="BAG-item-components">
          <div className="checkout-order-summary"> Order Summary</div> 
            {this.props.user &&
              this.props.user.cart &&
              this.props.user.cart.map((product, index) => {
           
                let prodArr =[product.productid, product.idSize.productid, product.name, product.quantity]
            

                orderDetails.push(prodArr)

         
                return (
                  <div key={index}>
                    <div className="checkout-one-items-list">
                      <img
                        alt="product"
                        className="checkout-one-items-list-images"
                        src={product.image}
                      />
                      <div className=" checkout-one-items-list-name-quantity">
                        <div
                          className="checkout-one-items-list-font"
                          style={{ fontWeight: "900" }}
                        >
                          {product.name} x {product.quantity}{product.time ? <div>  {
                        this.timeConvert(Math.floor(Date.now()/1000 - product.time/1000 ))}</div>: null}
                        </div>
                        <div>${product.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            
            {this.state.caliTax > 0 ?  <div className="checkout-two-added">
            7.25% California Sales Tax: ${fixedCATax}
            </div>: null}
           
              {this.state.sdTax > 0?  <div className="checkout-two-added">
            .25% San Diego County Sales Tax: ${fixedSDTax}
            </div>: null}

             {this.state.couponApplied[0] && this.state.couponApplied[0].length !==0  ?  <div className="checkout-two-added">
            Coupon Applied: ${fixedDiscount}
            </div> : null}

           
            <div className="checkout-one-total">
              {this.props.user && <h3>Total: ${fixedTotal} </h3>}
            </div>
          </div>
        </div> : 
        
        
        null
        
        }




{this.state.complete === false ? 

          <div className="checkout-previous-shipping-address-container">
            <div className="checkout-previous-shipping-header">Payment</div>
            <div className= "checkout-two-instructions">
              Shop Lidora uses PayPal to ensure that all transactions are secure
              and encrypted. After clicking the button below, you will be
              redirected to PayPal to complete your purchases securely.
            </div>
            <div className= "checkout-two-instructions">A PayPal account is NOT required to make your payment. You can choose to checkout with PayPal, or you can click on the button which says "Pay with Debit or Credit Card" to enter your payment information directly. </div>
            <Payment  paymentComplete={this.paymentComplete} orderDetails={orderDetails}  total = {fixedTotal} coupon={this.state.couponApplied[0]}/>
          </div> 
          
          :
          <div className="checkout-previous-shipping-address-container">
            <div className="checkout-previous-shipping-header">Payment Complete!</div>
            <div className= "checkout-two-instructions">
              Your order is complete.  Most items are made by hand upon order, so please expect your order to take at least one week in addition to shipping time. 
              
              </div>
              <div>Shop Lidora will contact you within the next 1-2 days to give you an estimate of when your items will be completed and shipped. Thank you for shopping at Shop Lidora and supporting small businesses!
            </div>

<Link to='/'>
  <button
              
              className="checkout-return-to-store-button"

            >   RETURN TO STORE
            </button> </Link>

            </div>
        
          
          
          
          
          
          
          
          }



       </div>

       {this.state.complete === false ? 
        <div className="checkout-two-column-2" >
          <div className="BAG-item-components">
            {this.props.user &&
              this.props.user.cart &&
              this.props.user.cart.map((product, index) => {
           
                let prodArr =[product.productid, product.idSize.productid, product.name, product.quantity]
            

                orderDetails.push(prodArr)

         
                return (
                  <div key={index}>
                    <div className="checkout-one-items-list">
                      <img
                        alt="product"
                        className="checkout-one-items-list-images"
                        src={product.image}
                      />
                      <div className=" checkout-one-items-list-name-quantity">
                        <div
                          className="checkout-one-items-list-font"
                          style={{ fontWeight: "900" }}
                        >
                          {product.name} x {product.quantity}{product.time ? <div>  {
                        this.timeConvert(Math.floor(Date.now()/1000 - product.time/1000 ))}</div>: null}
                        </div>
                        <div>${product.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            
            {this.state.caliTax > 0 ?  <div className="checkout-two-added">
            7.25% California Sales Tax: ${fixedCATax}
            </div>: null}
           
              {this.state.sdTax > 0?  <div className="checkout-two-added">
            .25% San Diego County Sales Tax: ${fixedSDTax}
            </div>: null}

             {this.state.couponApplied[0] && this.state.couponApplied[0].length !==0  ?  <div className="checkout-two-added">
            Coupon Applied: ${fixedDiscount}
            </div> : null}

           
            <div className="checkout-one-total">
              {this.props.user && <h3>Total: ${fixedTotal} </h3>}
            </div>
          </div>
        </div> : 
        
        
        null
        
        }



      </div>
    );
  }
}

const mapStateToProps = state => state;

const MyComponent = connect(
  mapStateToProps,
  { getUserSession: getUserSession, getCurrentAddress: getCurrentAddress }
)(CheckoutTwo);
export default withRouter(MyComponent);
