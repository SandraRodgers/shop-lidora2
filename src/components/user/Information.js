import React, {Component} from "react";
import axios from 'axios'

//redux
import { connect } from "react-redux";
import { getUserSession, getCurrentAddress } from "../../ducks/reducer";

import SideBar from "./SideBar";




class Information extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentAddress: [],
            customerAddressId: 0,
            name: "",
            line_one: "",
            line_two: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            toggleForm: false
       
        }
    }

    componentDidMount(){
        this.props.getUserSession()
        this.getCurrentAddress();
    }

    // componentDidUpdate(prevProps){
    //     if(this.props.user){
    //     if(prevProps.currentAddress !==this.props.currentAddress){
    //         this.getCurrentAddress()
    //     }}
    // }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    getCurrentAddress=()=> {
        if(this.props.user && this.props.user.customerid){
        this.props.getCurrentAddress(this.props.user.customerid).then(() => {
          let currentAddress = [];
          if (this.props.currentAddress)
            for (let i = 0; i < this.props.currentAddress.length; i++) {
              if (this.props.currentAddress[i].current === true) {
                currentAddress.push(this.props.currentAddress[i]);
                
    
                this.setState({
                  currentAddress: [this.props.currentAddress[i]],
                  customerAddressId: this.props.currentAddress[i]
                    .customer_address_id,
                  name: this.props.currentAddress[i].name,
                  line_one: this.props.currentAddress[i].line_one,
                  line_two: this.props.currentAddress[i].line_two,
                  city: this.props.currentAddress[i].city,
                  state: this.props.currentAddress[i].state,
                  zipcode: this.props.currentAddress[i].zipcode,
                  addressComplete: true
                }, ()=>{this.props.currentAddress.splice(0,1, this.state.currentAddress[0])});
              }
            }
        });
      }}

     toggleForm=()=>{
         this.setState({toggleForm: true})
     } 

     editAddress=()=>{
     
        axios.put(`/api/account/address/${this.props.user.customerid}`, {
            name: this.state.name,
            line_one: this.state.line_one,
            line_two: this.state.line_two,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
        } ).then((response)=>{
            this.setState({
                name: response.data[0].name,
                line_one: response.data[0].line_one,
                line_two: response.data[0].line_two,
                city: response.data[0].city,
                state: response.data[0].state,
                zipcode: response.data[0].zipcode
            })
            console.log(response.data[0])})
     }

    render(){
        console.log( this.state.name,
            this.state.line_one,
           this.state.line_two,
             this.state.city,
         this.state.state,
            this.state.zipcode,)
        let information;
        if (this.props.location.pathname === "/user/information") {
            information = "900";
          } else {
            information = "200";
          }
        
          return (
            <div className = 'I-component'>
         <SideBar  information={information} />

<div className='I-component-inner'>

         {this.state.currentAddress.length > 0 ?
             
             <div>
         <div className = 'I-address-title'>SAVED </div>
         <div className="I-previous-address">
                <div className="I-pa-line">{this.state.name} </div>
                <div className="I-pa-line">
                  {this.state.line_one} {this.state.line_two}
                </div>
                <div className="I-pa-line">
                  {this.state.city} {this.state.state}
                </div>
                <div className="I-pa-line">{this.state.zipcode}</div>
              </div>

              <button
                onClick={this.toggleForm}
              className="I-edit-button"

            >   EDIT ADDRESS
            </button> 
              </div> 
              
              
           
          

              
              :

              <div className = 'I-address-title'>NO SAVED ADDRESS</div> 
}


{this.state.toggleForm === true ?
            <div className="I-edit-address-form-container">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                placeholder="Name"
                className="I-shipping-address-1"
              />
              <input
                onChange={this.handleChange}
                value={this.state.line_one}
                name="line_one"
                placeholder="Address"
                className="I-shipping-address-1"
              />

              <input
                onChange={this.handleChange}
                value={this.state.line_two}
                name="line_two"
                placeholder="Apartment, suite, etc. (Optional)"
                className="I-shipping-address-1"
              />
              <input
                onChange={this.handleChange}
                value={this.state.city}
                name="city"
                placeholder="City"
                className="I-shipping-address-1"
              />
              <div className="I-shipping-address-2-div">
        
                <select
                  onChange={this.handleChange}
                  value={this.state.state}
                  name="state"
                  placeholder="State"
                  className="I-shipping-address-2-select"
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <input
                  onChange={this.handleChange}
                  value={this.state.zipcode}
                  name="zipcode"
                  className="I-shipping-address-2"
                  placeholder="Zipcode"
                />
              </div>
              <button
                onClick={this.editAddress}
              className="I-edit-button-2"

            >   EDIT ADDRESS
            </button> 
            </div>: null}
            </div>
            </div>
          );
    }

}




  


const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    { getUserSession: getUserSession, getCurrentAddress: getCurrentAddress }
  )(Information);
  
