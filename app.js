const express = require("express");
const usermodel = require("./usermodel");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("1234");
});

app.get("/create", async (req, res) => {
    try {
        let createduser = await usermodel.create({
            name: "Saikat",
            username: "saikat123",
            email: "saikat@example.com",
        });
        console.log("User created successfully");
        res.send(createduser);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Error creating user");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
