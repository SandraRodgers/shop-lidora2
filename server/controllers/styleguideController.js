module.exports = {
  getFabrics: (req, res) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    const { name, img, current } = req.body;
    dbInstance
      .addFabric([name, img, current])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
