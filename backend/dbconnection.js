const mysql = require('mysql2');
import connection from './configuration'

const con = mysql.createConnection(config_details);

export default con;