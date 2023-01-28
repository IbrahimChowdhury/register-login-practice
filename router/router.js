const { appendFile } = require("fs")

let router = require("express").Router()
let path = require("path")

let users = require("../model/schema_model")

// home page 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/home.html"))
})


// show  register page
router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/register.html"))
})

// sending data or info or Post Request
router.post("/register", async (req, res) => {
    try {
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password

        let user = await users.findOne({ email: email })
        if (user) {
            res.send(`<h1>User has already exist</h1>`)
        }

        else if (name != "" & email != "" && password != "") {
            let new_User = users({
                name: name,
                email: email,
                password: password
            })

            await new_User.save()

            // how to use ejs file
            res.render("register_successful", {
                name: name,
                email: email,
                password: password
            })

        }
        else {
            res.send("please fillup all the section")
        }


    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/login.html"))
})


router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await users.findOne({ email: email })



        if (user && password == user.password) {
            await users.find({}, (err, usr) => {
                res.render("login_successful", {
                    Users: usr
                })
            })
        }




    } catch (error) {

    }
})





module.exports = router