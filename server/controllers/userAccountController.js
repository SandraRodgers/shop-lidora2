module.exports ={
    editAddress: (req, res) => {
        console.log(typeof +req.params.id)
        console.log(req.body)
        
        let {name, line_one, line_two, city, state, zipcode } = req.body
        let customer_id = +req.params.id

        console.log('cus',customer_id)
        const dbInstance = req.app.get("db");
        // dbInstance.findAddress(customer_id).then(response => {
        //     console.log(response)
        //     if (response.length > 0) {
                // console.log(response)
                dbInstance.updateAddress(name, line_one, line_two, city, state, zipcode,customer_id ).then(response => {
                    console.log(response)
                    res.status(200).json(response)
                }
                    )
                .catch(err => {
                    res.status(500).send({ errorMessage: "error" });
                    console.log(err);
                  })
            


        // .then(response => res.status(200).json(response))
       
    }
}