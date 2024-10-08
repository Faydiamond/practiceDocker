import mysql from "mysql2/promise"

const config = {
    host: 'mysql3', //localhost
    user: 'daniel',
    port: 3307,
    password: 'daniel',
    database: 'testdb'

}

const connection = await mysql.createConnection(config)

export class Model {
  static async getAll () {
    let movies = `SELECT NOW() as now`
    
    
    const [result] = await connection.query(movies)  //desestructuro pq viene dos
    if (result.length === 0 ) return []
    return result;
    
  }

 
 
 



}
