const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const Posts = require('../database-mongo');
const db=require('../database/index.js')
app.use(express.bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/Posts',function(req,res){
	db.save(JSON.parse(body));
	res.send(body)
	console.log(body);
});


app.get('/Posts', function (req, res) {
  Posts.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});




app.listen(3000, () => console.log('Example app listening on port 3000!'))