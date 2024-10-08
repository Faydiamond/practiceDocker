import express from "express"
import mysql from "mysql2/promise"

const app = express()

const config = {
  host: 'mysql3', //localhost
  user: 'daniel',
  port: 3306,
  password: 'daniel',
  database: 'testdb'

}

app.get("/" , (req,res) => {
    res.send("Hellow world!")
})


app.get("/test", async  (req, res) => {
   //res.send("here")
   try {
    const connection = await mysql.createConnection(config)
    const [result] = await connection.query(`SELECT NOW() as now`);
    console.log(result[0]);
    
    return res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});


app.listen(4000)
console.log("Corriendo por el puerto 4000");
