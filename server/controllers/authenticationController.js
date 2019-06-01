const signin = (req, res) => {
  console.log(req.body);
  const {
    display_name,
    email,
    firebase_uid,
    profile_photo,
    isadmin
  } = req.body;
  const db = req.app.get("db");
  db.findUser(email)
    .then(response => {
      console.log(response.length);
      if (response.length === 0) {
        console.log(
          "inside if" + display_name,
          email,
          firebase_uid,
          profile_photo,
          isadmin
        );
        db.addUser([
          display_name,
          email,
          firebase_uid,
          profile_photo,
          isadmin
        ]).then(
          (req.session.user = {
            customerid: response[0].customer_id,
            displayName: response[0].display_name,
            email: response[0].email,
            isadmin: response[0].isadmin,
            cart: [],
            total: 0.0
          }),
          res.status(200).json(req.session.user)
        );
      } else {
        req.session.user = {
          customerid: response[0].customer_id,
          displayName: response[0].display_name,
          email: response[0].email,
          isadmin: response[0].isadmin,
          cart: [],
          total: 0.0
        };
        res.status(200).json(req.session.user);
      }
    })
    .catch(err => console.log(err));
};

module.exports = { signin };
