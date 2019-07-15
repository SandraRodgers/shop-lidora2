import axios from "axios";

const initialState = {
  productInfo: [],
  dresses: [],
  bonnets: [],
  shorts: [],
  bloomers: [],
  skirts: [],
  vests: [],
  bibdanas: [],
  bowties: [],
  burpcloths: [],
  droolpads: [],
  hairbows: [],
  headbands: [],
  suspenders: [],
  currentProduct: [],
  bagIsOpen: false,
  user: [],
  loading: false,
  currentAddress: [],
  couponApplied: []
};

//get product data
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const GET_DRESSES = "GET_DRESSES";
const GET_DRESS = "GET_DRESS";
const GET_BONNETS = "GET_BONNETS";
const GET_BONNET = "GET_BONNET";
const GET_SHORTS = "GET_SHORTS";
const GET_SHORT = "GET_SHORT";
const GET_BLOOMERS = "GET_BLOOMERS";
const GET_BLOOMER = "GET_BLOOMER";
const GET_SKIRTS = "GET_SKIRTS";
const GET_SKIRT = "GET_SKIRT";
const GET_VESTS = "GET_VESTS";
const GET_VEST = "GET_VEST";
const GET_BIBDANA = "GET_BIBDANA";
const GET_BIBDANAS = "GET_BIBDANAS";
const GET_BOWTIE = "GET_BOWTIE";
const GET_BOWTIES = "GET_BOWTIES";
const GET_BURPCLOTH = "GET_BURPCLOTH";
const GET_BURPCLOTHS = "GET_BURPCLOTHS";
const GET_DROOLPAD = "GET_DROOLPAD";
const GET_DROOLPADS = "GET_DROOLPADS";
const GET_HAIRBOW = "GET_HAIRBOW";
const GET_HAIRBOWS = "GET_HAIRBOWS";
const GET_HEADBAND = "GET_HEADBAND";
const GET_HEADBANDS = "GET_HEADBANDS";
const GET_SUSPENDER = "GET_SUSPENDER";
const GET_SUSPENDERS = "GET_SUSPENDERS";
const GET_FLASHSALE = "GET_FLASHSALE";

//UI
const OPEN_BAG = "OPEN_BAG";

//authentication
const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER_SESSION = "GET_USER_SESSION";

//cart
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

//checkout
const GET_CURRENT_ADDRESS = "GET_CURRENT_ADDRESS";
const HOLD_COUPON = "HOLD_COUPON";

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_PRODUCT:
      return { ...state, currentProduct: [] };

    case `${GET_DRESSES}_FULFILLED`:
      return { ...state, dresses: action.payload.data };

    case `${GET_DRESSES}_PENDING`:
      return { ...state, loading: true };

    case `${GET_DRESS}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_DRESS}_PENDING`:
      return { ...state, loading: true };

    case `${GET_BONNETS}_FULFILLED`:
      return { ...state, bonnets: action.payload.data };

    case `${GET_BONNET}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_SHORTS}_FULFILLED`:
      return { ...state, shorts: action.payload.data };

    case `${GET_SHORT}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_BLOOMERS}_FULFILLED`:
      return { ...state, bloomers: action.payload.data };

    case `${GET_BLOOMER}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_SKIRTS}_FULFILLED`:
      return { ...state, skirts: action.payload.data };

    case `${GET_SKIRT}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_VESTS}_FULFILLED`:
      return { ...state, vests: action.payload.data };

    case `${GET_VEST}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_BIBDANAS}_FULFILLED`:
      return { ...state, bibdanas: action.payload.data };

    case `${GET_BIBDANA}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_BOWTIES}_FULFILLED`:
      return { ...state, bowties: action.payload.data };

    case `${GET_BOWTIE}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_BURPCLOTHS}_FULFILLED`:
      return { ...state, burpcloths: action.payload.data };

    case `${GET_BURPCLOTH}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_DROOLPADS}_FULFILLED`:
      return { ...state, droolpads: action.payload.data };

    case `${GET_DROOLPAD}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_HAIRBOWS}_FULFILLED`:
      return { ...state, hairbows: action.payload.data };

    case `${GET_HAIRBOW}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_HEADBANDS}_FULFILLED`:
      return { ...state, headbands: action.payload.data };

    case `${GET_HEADBAND}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_SUSPENDERS}_FULFILLED`:
      return { ...state, suspenders: action.payload.data };

    case `${GET_SUSPENDER}_FULFILLED`:
      return { ...state, currentProduct: action.payload.data };

    case `${GET_FLASHSALE}_FULFILLED`:
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

    case `${GET_CURRENT_ADDRESS}_FULFILLED`:
      return { ...state, currentAddress: action.payload.data };

    case HOLD_COUPON:
      return { ...state, couponApplied: action.couponApplied };

    default:
      return state;
  }
}

export function updateProduct(currentProduct) {
  return {
    type: UPDATE_PRODUCT,
    payload: currentProduct
  };
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

export function getShorts() {
  return {
    type: GET_SHORTS,
    payload: axios.get("/api/admin/getShorts")
  };
}

export function getShort(shortsid) {
  return {
    type: GET_SHORT,
    payload: axios.get(`/api/short/${shortsid}`)
  };
}

export function getBloomers() {
  return {
    type: GET_BLOOMERS,
    payload: axios.get("/api/admin/getBloomers")
  };
}

export function getBloomer(bloomersid) {
  return {
    type: GET_SHORT,
    payload: axios.get(`/api/bloomer/${bloomersid}`)
  };
}

export function getSkirts() {
  return {
    type: GET_SKIRTS,
    payload: axios.get("/api/admin/getSkirts")
  };
}

export function getSkirt(skirtsid) {
  return {
    type: GET_SKIRT,
    payload: axios.get(`/api/skirt/${skirtsid}`)
  };
}

export function getVests() {
  return {
    type: GET_VESTS,
    payload: axios.get("/api/admin/getVests")
  };
}

export function getVest(vestsid) {
  return {
    type: GET_VEST,
    payload: axios.get(`/api/vest/${vestsid}`)
  };
}

export function getBibdanas() {
  return {
    type: GET_BIBDANAS,
    payload: axios.get("/api/admin/getBibdanas")
  };
}

export function getBibdana(bibdanasid) {
  return {
    type: GET_BIBDANA,
    payload: axios.get(`/api/bibdana/${bibdanasid}`)
  };
}

export function getBowties() {
  return {
    type: GET_BOWTIES,
    payload: axios.get("/api/admin/getBowties")
  };
}

export function getBowtie(bowtiesid) {
  return {
    type: GET_BOWTIE,
    payload: axios.get(`/api/bowtie/${bowtiesid}`)
  };
}

export function getBurpcloths() {
  return {
    type: GET_BURPCLOTHS,
    payload: axios.get("/api/admin/getBurpcloths")
  };
}

export function getBurpcloth(burpclothsid) {
  return {
    type: GET_BURPCLOTH,
    payload: axios.get(`/api/burpcloth/${burpclothsid}`)
  };
}

export function getDroolpads() {
  return {
    type: GET_DROOLPADS,
    payload: axios.get("/api/admin/getDroolpads")
  };
}

export function getDroolpad(droolpadsid) {
  return {
    type: GET_DROOLPAD,
    payload: axios.get(`/api/droolpad/${droolpadsid}`)
  };
}

export function getHairbows() {
  return {
    type: GET_HAIRBOWS,
    payload: axios.get("/api/admin/getHairbows")
  };
}

export function getHairbow(hairbowsid) {
  return {
    type: GET_HAIRBOW,
    payload: axios.get(`/api/hairbow/${hairbowsid}`)
  };
}

export function getHeadbands() {
  return {
    type: GET_HEADBANDS,
    payload: axios.get("/api/admin/getHeadbands")
  };
}

export function getHeadband(headbandsid) {
  return {
    type: GET_HEADBAND,
    payload: axios.get(`/api/headband/${headbandsid}`)
  };
}

export function getSuspenders() {
  return {
    type: GET_SUSPENDERS,
    payload: axios.get("/api/admin/getSuspenders")
  };
}

export function getSuspender(suspendersid) {
  return {
    type: GET_SUSPENDER,
    payload: axios.get(`/api/suspender/${suspendersid}`)
  };
}

export function getFlashsale(flashid) {
  return {
    type: GET_FLASHSALE,
    payload: axios.get(`/api/flashsale/${flashid}`)
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

export function addToCart(product, price, size, quantity, productid) {
  return {
    type: ADD_TO_CART,
    payload: axios.post("/api/cart", {
      product: product,
      price: price,
      size: size,
      quantity: quantity,
      productid: productid
    })
  };
}

export function removeFromCart(productName, productid) {
  return {
    type: REMOVE_FROM_CART,
    payload: axios.put(`/api/cart/${productName}`, {productid})
  };
}

export function getCurrentAddress(customerid) {
  return {
    type: GET_CURRENT_ADDRESS,
    payload: axios.get(`/api/previousAddress/${customerid}`).catch(err => err)
  };
}

export function holdCoupon(coupon) {
  console.log(coupon);
 
  return {
    type: HOLD_COUPON,
    couponApplied: coupon
  };
}
