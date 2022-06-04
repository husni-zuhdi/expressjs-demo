require("dotenv").config()
const app = require("./app")

// Setup server port
const port = process.env.PORT || 8080;

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});