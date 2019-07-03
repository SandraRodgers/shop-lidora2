module.exports ={

getPreviousAddress: (req, res) => {
 
    const dbInstance = req.app.get("db");
    let customer_id = +req.params.id
    console.log(customer_id)
    dbInstance
      .getPreviousAddress(customer_id)
      .then(response => res.status(200).json(response))
      .catch(err => {
        res.status(500).send({ errorMessage: "error" });
        console.log(err);
      });
  }}