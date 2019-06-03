const addToCart = (req, res) => {
  const { product, price } = req.body;
  console.log(product, price)
  req.session.user.cart.push(product);
 req.session.user.total += price;
  res.status(200).json(req.session.user)
   
};

const removeFromCart = (req, res) => {
    const {productName} = req.params
    console.log(req.session.user)
    for(let i = 0 ; i< req.session.user.cart.length; i++) {
        if (req.session.user.cart[i].name === productName) {
            req.session.user.total -= req.session.user.cart[i].price
            req.session.user.cart.splice(i, 1);
    }}
    res
    .status(200)
    .json(req.session.user)
}

module.exports = { addToCart, removeFromCart };