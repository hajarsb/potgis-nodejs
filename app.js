const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password:"",
    database:"Fertilite"
})
client.connect();



client.query(`Select * from ph`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})

