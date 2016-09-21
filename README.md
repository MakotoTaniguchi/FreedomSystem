※新卒時代に作成しました

# FreedomSystem

node.jsとMySqlの連携と環境構築の勉強に作成してみました。

## 課題
* MVCの基本原則に法っていないのを改修
 - C(Controller) 画面遷移の処理を書くだけが、
   ライブラリクラスのオブジェクトを作成しているので、
   各Modelでオブジェクトを作成して使用する。
   ※その際にクロージャーで閉じて使用する。
 - M(Model) モデル処理にライブラリクラスを用意しているのをLibフォルダを作成して移動。
   DBとの接続や処理はModel内で完結するように修正
 - V(View) テンプレートエンジン(express)を使用しているので問題は今のところなし。
   ※出来ればexpressは開発中止になっているので、違うテンプレートエンジンに移行
