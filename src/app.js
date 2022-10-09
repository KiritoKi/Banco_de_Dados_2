import express from "express";
const app = express();

var port = 3333;

app.set("engine ejs", "ejs");
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import controller from "../controller/controller";

app.post('/', (request, response) => {

});

app.get('/', (request, response) => {
    response.render("index");
});

app.listen(port, () => {
    console.log("Server is ON / port = 3333");
});