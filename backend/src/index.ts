import app from "./app.js";
import {connectToDatabase} from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 5000 & connected TO THE database");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database", err);
  });
