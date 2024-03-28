

try{
    var posts = function(req,res)
    {
        res.render('posts')
    }
}
catch(err)
{
    console.log(err)
}
module.exports = posts