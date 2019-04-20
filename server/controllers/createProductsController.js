module.exports = {
  addDress: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      name,
      price,
      style,
      sleeves,
      length,
      size,
      fabric,
      customize,
      image,
      location,
      description
    } = req.body;
    dbInstance
      .addDress([
        name,
        price,
        style,
        sleeves,
        length,
        size,
        fabric,
        customize,
        image,
        location,
        description
      ])
      .then(response => res.status(200).json(response))
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
