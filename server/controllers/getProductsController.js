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

  getBowties: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBowties()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getSuspenders: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSuspenders()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getHairbows: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getHairbows()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getHeadbands: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getHeadbands()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBibdanas: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBibdanas()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBurpcloths: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBurpcloths()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getDroolpads: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDroolpads()
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
  },
  getBowtie: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBowtie(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getSuspender: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSuspender(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getHairbow: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getHairbow(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getHeadband: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getHeadband(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBibdana: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBibdana(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBurpcloth: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBurpcloth(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getDroolpad: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDroolpad(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
