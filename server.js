import express from "express";
import bcrypt from "bcrypt";

// init  server
const app = express();

// middlewares
app.use(express.static("public"));
app.use(express.json()) // enables form sharing

// routes
// home route
app.get('/', (req, res) => {
    res.sendFile("index.html", {root : "public"})
})

// signup
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", {root : "public"})

})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile("404.html", { root : "public" })
})

app.use((req, res) => {
    res.redirect('404')
})

app.listen(300, () => {
    console.log('listening on port 300');
})