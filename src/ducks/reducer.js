import axios from "axios";

const initialState = {
  dresses: []
};

const GET_DRESSES = "GET_DRESSES";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DRESSES}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, dresses: action.payload.data };
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
