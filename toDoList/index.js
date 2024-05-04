const express = require("express");
const app = express();
const port = 8089;

app.set("view engine", "ejs");
app.use(express.urlencoded());

let tasks = [
];

app.get("/", (req, res) => {
    res.render("index", { tasks });
});

app.post("/add", (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    tasks.splice(index, 1);
    res.redirect("/");
});

app.post("/edit/:index", (req, res) => {
    const index = req.params.index;
    const updatedTask = req.body.task;
    tasks[index] = updatedTask;
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

