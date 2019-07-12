module.exports = {
  createCoupon: (req, res) => {
      console.log(req.body)
    const dbInstance = req.app.get("db");
    const { code, discount, type, expired } = req.body;
    dbInstance
      .createCoupon(code, discount, type, expired)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
