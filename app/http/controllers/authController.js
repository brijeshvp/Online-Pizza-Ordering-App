// factory function -> which creates and returns an object(object creational pattern)
function authController(){
    return{
        login(req,res){
            res.render('auth/login')
        },
        register(req,res){
            res.render('auth/register')
        }
    }
}

// export and recieve it in web.js
module.exports = authController