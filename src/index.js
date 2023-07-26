const express = require("express");
const app = express();
const path = require("path");
const collection = require("./mongodb");
// const callection = require("./mongodb");
const hbs = require("hbs");
// "ngrok-skip-browser-warning": "69420";

const tempelatePath = path.join(__dirname, '../tempelates');
const publicPath = path.join(__dirname, '../public')

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatePath);
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath))


app.get("/signup", (req, res) => {
    res.render("signup")
})


app.get("/", (req, res) => {
    res.render("login")
})


app.use(express.static(__dirname + '../public'));
app.use( express.urlencoded(__dirname + '../tempelates'));
// **********************************************
 
app.post("/signup", async (req, res) => {
    try {
        
    
        const data = {
            name: req.body.name,
            password: req.body.password,
            realname: req.body.realname,
            phno: req.body.phno,
            exam:req.body.exam
            
        }

        await collection.insertMany([data])
        res.render("home")
    }
    catch {
        res.render("error")
    }
    
    

})
// *************************************************
app.post("/login", async (req, res) => {
    
    try {
        const check = await collection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            // res.render("home")
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }
        else {
            res.render("error")
            //wrong pass
        }
        
    }
    catch {
        res.render("error")
        //wrong det
        // console.log(error.response);

    }
    

})


app.listen(30001, () => {
    
    console.log("port connected");
});













