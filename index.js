const express = require("express");
const mongoose = require("mongoose");
const app = express();

const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");
require("dotenv").config();
app.use(express.json());

app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);

app.use("api/naruto", (req, res) => {
  try {
    res.status(200).send({
      message: "itachi uchiha is the best",
    });
  } catch (error) {
    res.status(404).send({
      messgae: "not found in naruto",
    });
  }
});
app.listen(4000, () => {
  console.log("server is running 4000");
});

const url = "mongodb+srv://root:root@node.z4hwsxc.mongodb.net/";
// const url = "mongodb://masteruser:password@sample-cluster.cluster-c7sm6skqiysm.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"
// const url = "mongodb://localhost:27017/test";
// const url = "mongodb://192.168.1.2:27017/test"
// console.log("url", url);
mongoose
  .connect(url)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Create a MongoDB client, open a connection to DocDB; as a replica set,
//  and specify the read preference as secondary preferred
