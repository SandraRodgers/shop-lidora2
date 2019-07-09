const addToCart = (req, res) => {
  const { product, price, size, quantity } = req.body;
  // console.log(req.body)
  if (product.flashid) {
    product.time = Date.now();
  }

  product.size = size;
  product.quantity = +quantity;
  req.session.user.cart.push(product);
  req.session.user.total += price * quantity;
  res.status(200).json(req.session.user);

  //check for flash item (not using this code):

  // let tempItem = [];
  // for (let i = 0; i < req.session.user.cart.length; i++) {
  //   if (req.session.user.cart[i].flashid) {
  //     tempItem.push(req.session.user.cart[i]);
  //   }
  // }
  // console.log(req.session.user.cart)
};

const removeFromCart = (req, res) => {
  const { productName } = req.params;
  // console.log(req.session.user);
  let index;
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].name === productName) {
      index = i;
    }
  }
  req.session.user.total -=
    req.session.user.cart[index].price * req.session.user.cart[index].quantity;
  req.session.user.cart.splice(index, 1);
  res.status(200).json(req.session.user);
};

const removeFlashItem = req => {
  // console.log(req.session.user.cart);
  let currentTime = Date.now();
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].time) {
      console.log("time", req.session.user.cart[i].time);
      if (currentTime > req.session.user.cart[i].time + 10000) {
        let { flashid } = req.session.user.cart[i].flashid;
        console.log("remove:", req.session.user.cart[i].flashid);
        req.session.user.total -= req.session.user.cart[i].price;
        req.session.user.cart.splice(i, 1);
        console.log(req.session.user.cart);
      }
    }
  }
};


module.exports = { addToCart, removeFromCart, removeFlashItem };
