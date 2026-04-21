import app from "./app.js";

const PORT = 3333;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on url http://127.0.0.1:${PORT}`);
});
