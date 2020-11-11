/* Installing locally - npm init; write package name as expressdemo and then press Enter all the way */


var port = 9090;
var ex = require("express");
var app = ex();  // creating the reference
var bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());
app.use(ex.urlencoded({extended:true}))    //

// app.use((req,res,next)=> {
//     console.log("Middleware Called.....")
//     console.log(req.url);
//     console.log(req.method);
//     next();
// })

console.log("module loaded......");
app.get("/",(req,res) => {
    res.send("Welcome to express module");
})
app.get("/a",(req,res) => {
    res.send("Welcome to express module a path")
})
app.get("/b",(req,res) => {
    res.send("Welcome to express module b path")
})

// http://localhost:9090/user/user/Raj/Deep
app.get("/user/:fname/:lname", (req,res) => {
    console.log(req.params);
    let user = req.params.fname;
    res.send("Welcome " + req.params.fname + " " + req.params.lname + "!");
})

// Query Parameters
// http://localhost:9090/emp?id=100&name=Ravi&salary=1400
app.get("/emp", (req,res) => {
    let id = req.query["id"];
    let name = req.query["name"];
    let salary = req.query["salary"];
    //res.send( "ID is " + id + " name is " + name + " and salary is " + salary);
    res.send( "ID is " + id + " name is " + name + " and salary is " + (eval(salary)+4000));
})

// Login
app.get("/login", (req,res) => {
    let username = req.query["username"];
    let password = req.query["password"];
    if(username == "Dat" && password == "12345") {
        res.send("Successful Login!");
    } else {
        res.send("Failure");
    }
})
app.get("/loginPage", (req,res) => {
    res.sendFile("C:/Users/dxfeb/Desktop/Training/Phase_2_simplilearn/nodeJS/login.html");
})


// POST METHOD -

app.post("/", (req,res) => {
    console.log("Post Method Called.....");
    res.send("Welcome to Post method");
})

app.post("/login", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    if(username == "Dat" && password == "12345") {
        res.send("POST Successful Login!");
    } else {
        res.send("POST Failure");
    }
})

// PUT method

app.put("/", (req,res) => {
    res.send("PUT method called");
})

app.put("/updateEmp",(req,res)=> {
    let salary = req.body.salary;
    let id = req.body.id;
    console.log("Id is "+id+" Salary is "+salary);
    salary = eval(salary)+600;
    res.send("Salary"+salary);
})



// DELETE method

app.delete("/", (req,res) => {
    res.send("DELETE method called");
})

app.delete("/deleteEmp/:id",(req,res)=> {
    let id = req.params.id;
    //Call DB Module 
    res.send("Your record deleted successfully with "+id);
});

app.listen(port, () => console.log(`Server is running on ${port}`))

