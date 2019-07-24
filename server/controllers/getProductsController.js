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
        res.status(200).json(response)
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
  },
  getFavorites: (req, res) => {
    ///need to decide how many of each category to display up front
    const dbInstance = req.app.get("db");
    let favorites = [];
    dbInstance.getFavoriteBibdanas().then(response => {
      favorites.push(response[0]);
    }).then(()=> dbInstance.getFavoriteBloomers().then(response => {
      favorites.push(response[0]);
    })).then(()=>  dbInstance.getFavoriteBonnets().then(response => {
      favorites.push(response[0]);
    })).then(()=> dbInstance.getFavoriteBowties().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteBurpcloths().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteDresses().then(response => {
      console.log('favorite dress', response[0], response[1])
      favorites.push(response[0], response[1],response[2])
    })).then(()=> dbInstance.getFavoriteDroolpads().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteHairbows().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteHeadbands().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteShorts().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteSkirts().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteSuspenders().then(response => {
      favorites.push(response[0])
    })).then(()=> dbInstance.getFavoriteVests().then(response => {
      favorites.push(response[0])
    }))
    .then(() =>{
      res.status(200).json(favorites);
    }).catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
  },

getFlashsale: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getFlashsales()
      .then(response => {
 
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
},
getFlashsaleProduct: (req, res) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .getFlashsale(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
}
};
