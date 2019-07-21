let sizeIds = []

module.exports = {
  getPreviousAddress: (req, res) => {
    const dbInstance = req.app.get("db");
    let customer_id = +req.params.id;
    console.log("getprevadd:", customer_id);
    if (customer_id) {
      dbInstance
        .getPreviousAddress(customer_id)
        .then(response => res.status(200).json(response))
        .catch(err => {
          res.status(500).send({ errorMessage: "error" });
          console.log(err);
        });
    }
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
            .then(response => 
              res.status(200).json(response))
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
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "error" });
            console.log(err);
          });
      }
    });
  },

  postOrder: (req, res) => {
    console.log(req.body)
    
    // console.log("hit post order:", req.session.user.cart);
    let {
      total,
      payment,
      date,
      shipped_date,
      fulfilled,
      productids,
      coupon
    } = req.body;
    for(let i=0; i<productids.length; i++){
      sizeIds.push(productids[i])

    }
 
    let customer_id = req.session.user.customerid;
    const dbInstance = req.app.get("db");

    dbInstance.createOrder([
      total,
      payment,
      date,
      shipped_date,
      fulfilled,
      productids,
      coupon,
      customer_id
    ]).then((response)=>{
      console.log('response ids',response[0])
      let orderid = response[0].orderid
      let customer_id = response[0].customer_id
      let productid;
      let size
      let name = 'temp'
      for(let i=0; i<sizeIds.length; i++){
        console.log('loop sizeIds', sizeIds[i])
        for(let key in sizeIds[i]){
           productid = sizeIds[i][key]
           size = key
          console.log('for-in-loop productid', productid)
          console.log('for-in-loop size', size)
        }
        dbInstance.createOrderDetails([orderid, customer_id, productid, size, name])
      }
      sizeIds=[]

    })

    if (req.session.user) {
      req.session.user.cart = [];
      req.session.user.total = 0;
      req.session.user.productids = [];
    }

    res.json(req.session.user);

    // .catch(err => {
    //   res.status(500).send({ errorMessage: "error" });
    //   console.log(err);
    // })
  }
};
