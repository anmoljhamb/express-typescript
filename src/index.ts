import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Working. 101",
    });
});

app.listen(PORT, () => {
    console.log(`Listening on the url *:${PORT}`);
});
