const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
 
app.get("/" , (req, res) => {
    res.send("hello");
})

app.get("/:username/:id" , (req, res) => {
    //console.log(req.params);
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
    //res.send(`welcome to the page of @${username}.`);
});

//query strings
app.get("/search", (req, res) => {
    //console.log(req.query);
    //res.send("no results");
    let { q } = req.query;
    // checking and printing when query is not entered in the url
    if(!q) {
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});

// multiple paths
// app.get("/apple" , (req, res) => {
//     res.send("you contacted apple path");
// })

// app.get("/orange" , (req, res) => {
//     res.send("you contacted orange path");
// })

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// })

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// })

// app.use((req, res) => {
//     console.log("request received");

//     // sending a response 
//     // 1
//     //res.send("this is a basic response");

//     // 2
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     //3
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });