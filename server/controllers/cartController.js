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

module.exports = { addToCart };
