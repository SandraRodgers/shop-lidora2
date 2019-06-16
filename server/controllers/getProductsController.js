module.exports = {
  getDresses: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDresses()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBonnets: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBonnets()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getShorts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getShorts()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getBloomers: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBloomers()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getSkirts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSkirts()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getVests: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getVests()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getProductInfo: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getProductInfo(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },
  getDress: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDress(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBonnet: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBonnet(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getShort: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getShort(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBloomer: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBloomer(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getSkirt: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSkirt(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getVest: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getVest(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
