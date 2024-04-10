const {PORT} = require("./config/settings");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");
const ProductRouter = require("./routes/product.route");
app.use("/api/products", ProductRouter);

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); } );