module.exports = {
  getPreviousAddress: (req, res) => {
    const dbInstance = req.app.get("db");
    let customer_id = +req.params.id;
    console.log("getprevadd:", customer_id);
    if(customer_id){
    dbInstance
      .getPreviousAddress(customer_id)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "error" });
        console.log(err);
      });}
  },

  addNewAddress: (req, res) => {
    console.log(req.body);

    let { name, city, state, zipcode } = req.body;
    let current = true;
    let customer_id = req.body.customerid;
    let line_one = req.body.lineone;
    let line_two = req.body.linetwo;
    const dbInstance = req.app.get("db");
    dbInstance.findAddress(customer_id).then(response => {
      if (response.length > 0) {
        dbInstance.updateAddressStatus(customer_id).then(() =>
          dbInstance
            .addAddress(
              name,
              customer_id,
              line_one,
              line_two,
              city,
              state,
              zipcode,
              current
            )
            .then(response => res.status(200).json(response))
            .catch(err => {
              res.status(500).send({ errorMessage: "error" });
              console.log(err);
            })
        );
      } else {
        dbInstance
          .addAddress(
            name,
            customer_id,
            line_one,
            line_two,
            city,
            state,
            zipcode,
            current
          )
          .then(response => res.status(200).json(response)).catch(err => {
            res.status(500).send({ errorMessage: "error" });
            console.log(err);
          })
      }
    });
  },

postOrder: (req, res)=> {
  console.log(req.body)
  let {total, payment, date, shipped_date, fulfilled, productids, coupon } = req.body
  let customer_id = req.session.user.customerid
  const dbInstance = req.app.get("db");
  
  
  dbInstance.createOrder([total, payment, date, shipped_date, fulfilled, productids, coupon, customer_id ])

  if(req.session.user){
    req.session.user.cart = [] 
    req.session.user.total = 0
    req.session.user.productids = []
  }
  
    res.json(req.session.user);
  
  
  // .catch(err => {
  //   res.status(500).send({ errorMessage: "error" });
  //   console.log(err);
  // })  
console.log(req.session.user)

}
};
