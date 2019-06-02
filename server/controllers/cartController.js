const addToCart = (req, res) => {
  const { product, price } = req.body;
  req.session.user.cart.push(...product);
  req.session.user.total += price;
  res
    .status(200)
    .json(req.session.user)
    .catch(err => console.log(err));
    console.log(req.session.user)
};

const removeFromCart = (req, res) => {
    const {productName} = req.params
    console.log(req.session.user)
    for(let i = 0 ; i< req.session.user.cart.length; i++) {
        if (req.session.user.cart[i].name === productName) {
            console.log("need to delete" + req.session.user.cart[i].name)
            console.log("need to subtract" + req.session.user.cart[i].price)
    }}
    res
    .status(200)
    .json(req.session.user)
}

module.exports = { addToCart, removeFromCart };
