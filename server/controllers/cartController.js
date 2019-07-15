const addToCart = (req, res) => {
  const { product, price, size, quantity, productid } = req.body;
  console.log(req.body)
  if (product.flashid) {
    product.time = Date.now();
  }

  product.size = size;
  product.quantity = +quantity;
  product.productid = productid
  req.session.user.cart.push(product);
  req.session.user.total += price * quantity;
  req.session.user.productids.push(productid)
  res.status(200).json(req.session.user);

  //check for flash item (not using this code):

  // let tempItem = [];
  // for (let i = 0; i < req.session.user.cart.length; i++) {
  //   if (req.session.user.cart[i].flashid) {
  //     tempItem.push(req.session.user.cart[i]);
  //   }
  // }
  console.log(req.session.user.cart)
};

const removeFromCart = (req, res) => {
 
  const { productName } = req.params;
  const {productid} = req.body
 
  let index;
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].name === productName) {
      index = i;
    }
  }
  for(let i=0; i<req.session.user.productids.length; i++){
    if(req.session.user.productids[i] === productid){
      req.session.user.productids.splice(i, 1);
    }
  }
  req.session.user.total -=
    req.session.user.cart[index].price * req.session.user.cart[index].quantity;
  req.session.user.cart.splice(index, 1);
  res.status(200).json(req.session.user);
  console.log(req.session.user.productids)
};

const removeFlashItem = req => {

  let currentTime = Date.now();
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].time) {
      // console.log("time", req.session.user.cart[i].time);
      if (currentTime > req.session.user.cart[i].time + 1000 *60 *10) {
        // let { flashid } = req.session.user.cart[i].flashid;
      
        req.session.user.total -= req.session.user.cart[i].price;
        req.session.user.cart.splice(i, 1);
    
      }
    }
  }
};


module.exports = { addToCart, removeFromCart, removeFlashItem };
