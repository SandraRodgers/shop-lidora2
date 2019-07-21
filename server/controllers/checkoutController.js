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
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "error" });
            console.log(err);
          });
      }
    });
  },

  postOrder: (req, res) => {
    console.log(req.body);

    let {
      total,
      payment,
      date,
      shipped_date,
      fulfilled,
      orderDetails,
      coupon
    } = req.body;

    console.log(orderDetails);

    let customer_id = req.session.user.customerid;
    const dbInstance = req.app.get("db");
    let productids = "temp";

    dbInstance
      .createOrder([
        total,
        payment,
        date,
        shipped_date,
        fulfilled,
        productids,
        coupon,
        customer_id
      ])
      .then(response => {
        let orderid = response[0].orderid;
        let customer_id = response[0].customer_id;
        let productid;
        let size;
        let name;
        let quantity;

        for (let i = 0; i < orderDetails.length; i++) {
          productid = orderDetails[i][0];
          if (orderDetails[i][1] === null) {
            size = "one size fits all";
          } else {
            size = orderDetails[i][1];
          }

          name = orderDetails[i][2];
          quantity = orderDetails[i][3];
          dbInstance.createOrderDetails([
            orderid,
            customer_id,
            productid,
            size,
            name,
            quantity
          ]);
        }
      });

    if (req.session.user) {
      req.session.user.cart = [];
      req.session.user.total = 0;
      req.session.user.productids = [];
    }

    res.json(req.session.user);


  }
};
