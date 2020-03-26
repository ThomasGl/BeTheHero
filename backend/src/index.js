const express = require('express');
const cors = require('cors');
const routes = require('./routes');
/* for a correct interpretation, for a file e.g. routes
we must add a './' in the beggining, if the file was a folder level up
we would use '../' */

const app = express();

/*
extremely important remark, to have the line below
it tells the application the type of object it must handle 
*/
app.use(cors());
app.use(express.json());
app.use(routes);
/*
we can use:

Driver: SELECT * FROM users

or we can use Js itself:
Query Builder: table('users').select('*').where()
*/

app.listen(3333);