import axios from "axios";

const initialState = {
  productInfo: [],
  dresses: [],
  dress:[]
};

const GET_DRESSES = "GET_DRESSES";
const GET_DRESS = "GET_DRESS";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case `${GET_DRESSES}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, dresses: action.payload.data };

      case `${GET_DRESS}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, dress: action.payload.data };


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
