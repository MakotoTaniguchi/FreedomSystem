
/*
 * GET login page.
 */

/*
// 正常に繊維してきた
 */
exports.login = function(req, res){
    var errorTitle = '';
    if(req.query.estr){
        errorTitle = "E-mailまたはパスワードが一致しませんでした";
    }
    res.render('login', { title: errorTitle});
};


/*
// Submitで繊維した
 */
exports.login_post = function(req, res){

    var database = db.createClient;

    database.query("select * from user_info_base  where mail_address = ? and password = ?", [req.body.email, req.body.password],
    function(err, result, fields){
        if(result.length){
            res.redirect('/login');
        }
        else{
            res.redirect('/login?estr=1');
        }
    });
}
