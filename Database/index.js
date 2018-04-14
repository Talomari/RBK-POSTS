const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbmvp');


let postsSchema=mongos.schema({
	//the schema here
	text:String
})

let Posts = mongoose.model('Posts', repoSchema);

let save=(data)=> {
	var obj={text:text}
	var post=new Posts(obj)
	post.save();
}


module.exports.save=save
module.exports.Posts=Posts


