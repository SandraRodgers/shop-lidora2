const addToCart = (req, res) => {
  const dbInstance = req.app.get("db");
  const { product, price, size, quantity, productid } = req.body;
  console.log(req.body);
  if (product.flashid) {
    let flashid = product.flashid;
    console.log("hit flashid", flashid);
    product.time = Date.now();
    dbInstance.updateFlashsaleStatusT(flashid);
  }

  product.size = size;
  product.quantity = +quantity;
  product.productid = productid;
  product.idSize = { productid: size };
  req.session.user.cart.push(product);
  req.session.user.total += price * quantity;

  console.log("quantity", product.quantity);

  if (product.quantity === 1) {
    req.session.user.productids.push(productid);
  } else {
    for (let i = 1; i <= product.quantity; i++) {
      req.session.user.productids.push(productid);
    }
  }

  res.status(200).json(req.session.user);

  //check for flash item (not using this code):

  // let tempItem = [];
  // for (let i = 0; i < req.session.user.cart.length; i++) {
  //   if (req.session.user.cart[i].flashid) {
  //     tempItem.push(req.session.user.cart[i]);
  //   }
  // }
  console.log("add to cart ids:", req.session.user.productids);
};

const removeFromCart = (req, res) => {
  console.log(req.session.user.cart);
  console.log(req.body.index);
  //  console.log(req.session.user.productids)
  const { productName } = req.params;
  const { productid } = req.body;
  const { index } = req.body;


  let price;
  let quantity


  console.log("remove from cart ids:", req.session.user.productids);
  // for (let i = 0; i < req.session.user.productids.length; i++) {
  //   if (req.session.user.productids[i] === productid) {
  //   }
  //   req.session.user.productids.splice(i, quantity);
  // }
  // console.log(req.session.user.productids);

  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (
      i === index &&
      req.session.user.cart[i].name === productName &&
      req.session.user.cart[i].productid === productid
    ) {
      price = req.session.user.cart[i].price;
      quantity = req.session.user.cart[i].quantity;
      req.session.user.cart.splice(i, 1);
      req.session.user.productids.splice(i, quantity);

    }
  }

  req.session.user.total -= price * quantity;
  // req.session.user.cart.splice(index, 1);
  res.status(200).json(req.session.user);
  console.log(req.session.user.productids)
};

const removeFlashItem = req => {
  const dbInstance = req.app.get("db");
  let currentTime = Date.now();
  for (let i = 0; i < req.session.user.cart.length; i++) {
    if (req.session.user.cart[i].time) {
      if (currentTime > req.session.user.cart[i].time + 1000 * 60) {
        // if (currentTime > req.session.user.cart[i].time + 1000 *60 *10) {
        let flashid = req.session.user.cart[i].flashid;
        console.log("hit", req.session.user.cart[i]);
        req.session.user.total -= req.session.user.cart[i].price;
        req.session.user.cart.splice(i, 1);
        dbInstance.updateFlashsaleStatusF(flashid);
      }
    }
  }
};

module.exports = { addToCart, removeFromCart, removeFlashItem };
