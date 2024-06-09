const express = require('express');
const app = express();
const fs = require('fs')
const users = require("./data.json");
const port = 9000;

app.use(express.urlencoded({ extended: false }))

// ROUTES

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html)
});

// rest api 

app.get("/api/users", (req, res) => {
    return res.send(users);
})

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id);
    return res.json(user)
})
    .patch((req, res) => {
        const id = Number(req.params.id)
        const index = users.findIndex((user) => user.id === id)
        const bodyPatch = req.body;

        users[index] = { ...users[index], ...bodyPatch, id: id };

        fs.writeFile("./data.json", JSON.stringify(users), (err, bodyPatch) => {
            return res.json(users[index]);
        })
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        const index = users.findIndex((user) => user.id === id)
        users.splice(index, 1);

        fs.writeFile("./data.json", JSON.stringify(users), (err, bodyPatch) => {
            return res.json(users);
        })
    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
        return res.json('success');
    })
})

app.listen(port, (req, res) => {
    console.log("server initialised at http://localhost:9000");
})