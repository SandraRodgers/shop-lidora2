
module.exports ={
    getDresses: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance
          .getDresses()
          .then(response => {
            res.status(200).json(response)})
          .catch(error => {
            console.log(error);
            res.status(500).send(error);
          });
      },
      getProductInfo: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance
          .getProductInfo(req.params.id)
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "Error" });
            console.log(err);
          });
      }
}