const signin = (req, res) => {
  const {
    display_name,
    email,
    firebase_uid,
    profile_photo,
    isadmin
  } = req.body;

  const db = req.app.get("db");
  //first check to see if the user is registered in the database
  db.findUser(email)
    .then(response => {
      //if the user isn't there, add them to the customer table
      if (response.length === 0) {
        db.addUser([
          display_name,
          email,
          firebase_uid,
          profile_photo,
          isadmin
        ]).then(
          db.findUser(email).then(response => {
            // create a session
            req.session.user = {
              customerid: response[0].customer_id,
              displayName: response[0].display_name,
              email: response[0].email,
              isadmin: response[0].isadmin,
              sessionid: req.sessionID,
              cart: [],
              total: 0.0
            };
            res.status(200).json(req.session.user);
          })
        );
      } else {
        req.session.user = {
          customerid: response[0].customer_id,
          displayName: response[0].display_name,
          email: response[0].email,
          isadmin: response[0].isadmin,
          sessionid: req.sessionID,
          cart: [],
          total: 0.0
        };
      
     
        res.status(200).json(req.session.user);
      }
    })
    .catch(err => console.log(err));
};

const getUser = (req, res) => {
  console.log("sessionID:" + req.sessionID)
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: "No user logged in" });
  }
};

const logout = async (req, res) => {
  console.log("logout on the back");
  req.session.destroy();
  res.status(200).send(req.session);
  if (!req.session) {
    console.log("no session");
  }
};

module.exports = { signin, getUser, logout };
