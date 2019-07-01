const addToCart = (req, res) => {
  const { product, price, size, quantity } = req.body;
  console.log(req.body)
  product.time = Date.now();
  product.size = size
  product.quantity = +quantity
  req.session.user.cart.push(product);
  req.session.user.total += (price*quantity);
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
  console.log(req.session.user);
  let index;
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].name === productName) {
      index = i;
    }
  }
  req.session.user.total -= req.session.user.cart[index].price;
  req.session.user.cart.splice(index, 1);
  res.status(200).json(req.session.user);
};

const removeFlashItem = (req, res) => {
  console.log(req.params);
  const { flashid } = req.params;
  console.log(req.session.user.cart);
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].flashid === +flashid) {
      console.log("match");
      req.session.user.total -= req.session.user.cart[i].price;
      req.session.user.cart.splice(i, 1);
    }
  }
  res.status(200).json(req.session.user);
};

module.exports = { addToCart, removeFromCart, removeFlashItem };
