var mysql = require('mysql');
var config = require('../config');

// ModelBase
var Database = function(){};

// 認証
Database.prototype.dbAuth = config.databaseAuth;

// 接続
Database.prototype._getClient = function(){
    if(this.client == undefined){
        this.client = mysql.createConnection(this.dbAuth);
    }
    return this.client;
};

// クエリ実行
Database.prototype.query = function(query, params, callback){
    var client  = this._getClient();
    return client.query(query, params, callback);
}

// 終了処理
Database.prototype.end = function(callback){
   if(this.client){
       this.client.end(callback);
       delete this.client;
   }
}

// Databaseクラスのインスタンスを取得
function createClient(){
    return new Database();
}

exports.createClient = createClient();