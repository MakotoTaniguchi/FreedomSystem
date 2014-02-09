/*
 // 正常に繊維してきた
 */
exports.registration = function(req, res){
    var errorTitle = '';
    if(req.query.estr){
        errorTitle = "すでに登録されています";
    }
    res.render('user_registration', { title: errorTitle});
};


/*
// ユーザ登録
 */
exports.registration_post = function(req, res){

    var database = db.createClient;

    var query = "insert into user_info_base(name, mail_address, password) values(?,?,?)";

    database.query(query, [req.body.name, req.body.email, req.body.password],
        function(err, result, fields){
            if(err == null){
                res.redirect('/login');
            }
            else{
                res.redirect('/user_registration?estr=1');
            }
        });
};