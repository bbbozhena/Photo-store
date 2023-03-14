import { Express } from "express";
import { connectToDb, getDb } from "./Db";
const PORT = 3000;
const app = Express();

let db;


connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port on ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`Db conniection error ${err}`)
  }
});
