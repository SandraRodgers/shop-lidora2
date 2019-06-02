const sessionUser=[]

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
            //create a session 
            req.session.user = {
              customerid: response[0].customer_id,
              displayName: response[0].display_name,
              email: response[0].email,
              isadmin: response[0].isadmin,
              cart: [],
              total: 0.0
            },
            sessionUser.push(req.session.user),
            // res.status(200).json(req.session.user)
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
          sessionUser.push(req.session.user)
          // res.status(200).json(req.session.user);
        }
      })
      .catch(err => console.log(err));
  };

  const getUser = (req, res) => {
    console.log(sessionUser)
    if (sessionUser.length) {
      res.json(sessionUser);
    } else {
      res.status(401).json({ error: "Please sign in" });
    }
  };
  
  module.exports = { signin, getUser };

 