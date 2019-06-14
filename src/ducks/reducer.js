import axios from "axios";

const initialState = {
  productInfo: [],
  dresses: [],
  bonnets: [],
  currentProduct: [],
  bagIsOpen: false,
  user: []
};

//get product data
const GET_DRESSES = "GET_DRESSES";
const GET_DRESS = "GET_DRESS";
const GET_BONNETS = "GET_BONNETS";
const GET_BONNET = "GET_BONNET"

//UI
const OPEN_BAG = "OPEN_BAG";

//authentication
const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER_SESSION = "GET_USER_SESSION";

//cart
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DRESSES}_FULFILLED`:
      return { ...state, dresses: action.payload.data };

    case `${GET_DRESS}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_BONNETS}_FULFILLED`:
      return { ...state, bonnets: action.payload.data };

      case `${GET_BONNET}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${OPEN_BAG}`:
      return { ...state, bagIsOpen: !state.bagIsOpen };

    case `${SIGN_IN}_FULFILLED`:
      return { ...state, user: action.payload.data };

    case `${LOG_OUT}_FULFILLED`:
      return { ...state, user: action.payload.data };

    case `${GET_USER_SESSION}_FULFILLED`:
      return { ...state, user: action.payload.data };

    case `${ADD_TO_CART}_FULFILLED`:
      return { ...state, user: action.payload.data };

    case `${REMOVE_FROM_CART}_FULFILLED`:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}

export function getDresses() {
  return {
    type: GET_DRESSES,
    payload: axios.get("/api/admin/getDresses")
  };
}

export function getDress(dressesid) {
  return {
    type: GET_DRESS,
    payload: axios.get(`/api/dress/${dressesid}`)
  };
}

export function getBonnets() {
  return {
    type: GET_BONNETS,
    payload: axios.get("/api/admin/getBonnets")
  };
}

export function getBonnet(bonnetsid) {
  return {
    type: GET_BONNET,
    payload: axios.get(`/api/bonnet/${bonnetsid}`)
  };
}

export function openBag(bagIsOpen) {
  return {
    type: OPEN_BAG,
    payload: bagIsOpen
  };
}

export function signIn(displayName, email, uid, photoURL) {
  return {
    type: SIGN_IN,
    payload: axios.post("/api/auth/signin", {
      display_name: displayName,
      email: email,
      firebase_uid: uid,
      profile_photo: photoURL
    })
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
    payload: axios.get("/api/auth/logout")
  };
}

export function getUserSession() {
  return {
    type: GET_USER_SESSION,
    payload: axios.get("/api/auth/user").catch(err => err)
  };
}

export function addToCart(product, price) {
  return {
    type: ADD_TO_CART,
    payload: axios.post("/api/cart", {
      product: product,
      price: price
    })
  };
}

export function removeFromCart(productName) {
  return {
    type: REMOVE_FROM_CART,
    payload: axios.delete(`/api/cart/${productName}`)
  };
}
