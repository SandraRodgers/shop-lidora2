module.exports = {
  getPreviousAddress: (req, res) => {
    const dbInstance = req.app.get("db");
    let customer_id = +req.params.id;
    console.log(customer_id);
    dbInstance
      .getPreviousAddress(customer_id)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "error" });
        console.log(err);
      });
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
      }
    });
  }
};
