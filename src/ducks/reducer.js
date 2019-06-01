import axios from "axios";

const initialState = {
  productInfo: [],
  dresses: [],
  currentProduct: [],
  bagIsOpen: false,
  user: {}
};

const GET_DRESSES = "GET_DRESSES";
const GET_DRESS = "GET_DRESS";
const OPEN_BAG = "OPEN_BAG";
const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DRESSES}_FULFILLED`:
      return { ...state, dresses: action.payload.data };

    case `${GET_DRESS}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${OPEN_BAG}`:
      return { ...state, bagIsOpen: !state.bagIsOpen };

    case `${SIGN_IN}_FULFILLED`:
      return {...state, user: action.payload.data}
    
    case `${LOG_OUT}`:
    return {...state, user: {}}

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

export function openBag(bagIsOpen) {
  return {
    type: OPEN_BAG,
    payload: bagIsOpen
  };
}

export function signIn(displayName, email, uid, photoURL){
  return{
    type: SIGN_IN,
    payload: axios.post('/api/auth/signin', {display_name: displayName, email:email, firebase_uid: uid, profile_photo: photoURL })
  }
}

export function logOut(user){
  return{
    type: LOG_OUT,
    payload: user
  }
}




