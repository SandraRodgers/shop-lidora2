module.exports = {
  createCoupon: (req, res) => {
    console.log(req.body);
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
  },
  getCoupon: (req, res) => {
    const dbInstance = req.app.get("db");
    const { code } = req.params;
    dbInstance
      .getCoupon(code)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  applyCoupon: (req, res) => {
   
    let { discount, type, code } = req.body;

    console.log(req.body)
    if (type === "Percentage") {
      let toSubtract = req.session.user.total * discount;
      req.session.user.total  -= toSubtract;
      console.log(req.session.user.total )
    } else if (type === "Dollar Amount") {
      req.session.user.total -= +discount;
    }
    const dbInstance = req.app.get("db");
    dbInstance.applyCoupon(code).then(() => {
      
      res.status(200).json(req.session.user);
      
    });
  }
};
