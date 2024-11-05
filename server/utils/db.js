import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thecoffeejunkie'
})

con.connect(function(err) {
    if(err){
        console.log('Connection Error')
    }else{
        console.log('Connection Success')
    }
})

export default con;