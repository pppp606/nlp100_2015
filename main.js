// ----------------------------------------------------------------------------------------------
// 00. 文字列の逆順
// 文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
// ----------------------------------------------------------------------------------------------
var answer = 'stressed'.split("").reverse().join("");
console.log("00------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 01. 「パタトクカシーー」
// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．
// ----------------------------------------------------------------------------------------------
var answer = "";
for(var i in o = [0, 2, 4, 6]){
  answer += "パタトクカシーー".charAt(o[i]);
}
console.log("01------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
// ----------------------------------------------------------------------------------------------
var answer = "";
for (var i = 0; i < "パトカー".length; i++) {
  answer += "パトカー".charAt(i) + "タクシー".charAt(i);
}
console.log("02------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 03. 円周率
// "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."という文を単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．
// ----------------------------------------------------------------------------------------------
var list = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.".replace(/,|\./g,'').split(" ");
var answer = [];
for(var i = 0; i<list.length; i++ ){
  answer[i] = list[i].length;
}
console.log("03------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 04. 元素記号
// "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，
// 1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，それ以外の単語は先頭に2文字を取り出し，
// 取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．
// ----------------------------------------------------------------------------------------------
var list = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.".replace(/,|\./g,'').split(" ");
var answer = {};
for(var i = 0; i<list.length; i++ ){
  answer[String(i+1)] = list[i].slice(0,2);
}
for(var i in o = [1, 5, 6, 7, 8, 9, 15, 16, 19]){
  answer[o[i]] = answer[o[i]].charAt(0);
}
console.log("04------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 05. n-gram
// 与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．
// ----------------------------------------------------------------------------------------------
/**
* N-gram変換
* @class Ngram
* @param {array | string} list 処理を施す文字列または配列
* @param {Number} n 結合する数
* @property {array} word 単語n-gram処理をした結果の配列
* @property {array} character 文字n-gram処理をした結果の配列
* @property {string} separator 文字列結合に使う文字
*/
var Ngram = function(list,n,separator){
  this.list = list;
  this.n = n;
  this.word = [];
  this.character = [];
  this.separator = separator;
  this.init = function(){
    //文字列の場合配列に返還
    if(typeof this.list == "string"){
      this.list = this.list.replace(/,|\./g,'').split(" ");
    }
    this.setWord();
    this.setCharacter();
  }
  this.setWord = function(){
    this.word = [];
    this.njoin(this.list,this.word);
  }
  this.setCharacter = function(){
    this.character = [];
    var strings = this.list.join("").split("");
    this.njoin(strings,this.character);
  }
  /**
  * @method njoin 入力した配列をn-gramに処理して返す
  * @param {array} in_list 処理を施す文字列の入った配列
  * @param {array} out_list 結果を格納する配列
  */
  this.njoin = function(in_list,out_list){
    for(var i = 0; i<= in_list.length - this.n; i++){
      var t = [];
      for (var j=0; j<this.n; j++){
        t.push(in_list[i+j]);
      }
      out_list.push(t.join(this.separator));
    }
  }
  this.init();
}
var answer = new Ngram("I am an NLPer",2,"-");
console.log("05------------------------------------------------");
console.log(answer.word);
console.log(answer.character);

// ----------------------------------------------------------------------------------------------
// 06. 集合
// "paraparaparadise"と"paragraph"に含まれる文字bi-gramの集合を，それぞれ, XとYとして求め，XとYの和集合，積集合，差集合を求めよ．さらに，'se'というbi-gramがXおよびYに含まれるかどうかを調べよ．
// ----------------------------------------------------------------------------------------------
/**
* @namespace ArrayHelper
* @method union 和集合
* @method intersection 積集合
* @method difference 差集合
* @method shuffle ランダムにシャッフル
*/
var ArrayHelper = {
  union:function(A,B){
    var T = A.concat(B);
    T = T.filter(function (x, i, self) {
      return self.indexOf(x) === i;
    });
    return T;
  },
  intersection:function(A,B){
    var T = A.concat(B);
    T = T.filter(function (x, i, self) {
      return self.indexOf(x) === i && i !== self.lastIndexOf(x);
    });
    return T;
  },
  difference:function(A,B){
    var I = this.intersection(A,B);
    var T = A.concat(B);
    T = T.filter(function (x, i, self) {
      return (I.indexOf(x) == -1);
    });
    return T;
  },
  shuffle:function(array) {
    var m = array.length;
    var t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
var X = new Ngram("paraparaparadise",2,"-");
var Y = new Ngram("paragraph",2,"-");
console.log("06------------------------------------------------");
console.log(ArrayHelper.union(X.character,Y.character));
console.log(ArrayHelper.intersection(X.character,Y.character));
console.log(ArrayHelper.difference(X.character,Y.character));
console.log(Boolean(X.character.indexOf("s-e")+1));
console.log(Boolean(Y.character.indexOf("s-e")+1));

// ----------------------------------------------------------------------------------------------
// 07. テンプレートによる文生成
// 引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y="気温", z=22.4として，実行結果を確認せよ．
// ----------------------------------------------------------------------------------------------
var tmplSentence = function (x, y, z) {
  return x+"時の"+y+"は"+z;
}
var answer = tmplSentence(12,"気温",22);
console.log("07------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 08. 暗号文
// 与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．
//
// 英小文字ならば(219 - 文字コード)の文字に置換
// その他の文字はそのまま出力
// この関数を用い，英語のメッセージを暗号化・復号化せよ．
// ----------------------------------------------------------------------------------------------
/**
* 暗号化処理
* @class Cipher
* @param {string} diffcode 変換処理に使う差分
* @param {RegExp} pattern 変換処理を行う文字のパターン
*/
var Cipher = function(diffcode,pattern){
  this.diffcode = diffcode;
  this.pattern = pattern;
  /**
  * 処理の実行
  * @method process
  * @param {string} str 暗号化、復号化を行う文字列
  * @return {string} 変換後の文字列
  */
  this.process = function(str){
    var strings = str.split("");
    var encodeStrings = "";
    for (var i = 0; i < strings.length; i++) {
      if(strings[i].match(this.pattern)){
        encodeStrings += String.fromCharCode(this.diffcode - strings[i].charCodeAt(0));
      }else{
        encodeStrings += strings[i];
      }
    }
    return encodeStrings;
  }
}
var cipher = new Cipher(219,/^[a-z]+$/);
var answer = cipher.process("Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.")
console.log("08------------------------------------------------");
console.log(answer);
console.log(cipher.process(answer));

// ----------------------------------------------------------------------------------------------
// 09. Typoglycemia
// スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．
// 適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．
// ----------------------------------------------------------------------------------------------
/**
* 前後1文字以外の文字をランダムに並び替え
* @method middleStringShuffle
* @param {string} word 元になる文字
* @return {string} 変換後の文字列
*/
var middleStringShuffle = function(word) {
  var middles  = word.slice(1,-1).split("");
  var re = '$1' + ArrayHelper.shuffle(middles).join("") + '$2';
  var find = /^(.).+(.)$/;
  return strings[i].replace(find,re);
}
var strings = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .".split(" ");
var answer = [];
for (var i = 0; i < strings.length; i++) {
  if(strings[i].length>4){
    answer.push(middleStringShuffle(strings[i]));
  }else{
    answer.push(strings[i]);
  }
}
answer = answer.join(" ");
console.log("09------------------------------------------------");
console.log(answer);

// ----------------------------------------------------------------------------------------------
// 20. JSONデータの読み込み
// Wikipedia記事のJSONファイルを読み込み，「イギリス」に関する記事本文を表示せよ．問題21-29では，ここで抽出した記事本文に対して実行せよ．
//
// 21. カテゴリ名を含む行を抽出
// 記事中でカテゴリ名を宣言している行を抽出せよ．
//
// 22. カテゴリ名の抽出
// 記事のカテゴリ名を（行単位ではなく名前で）抽出せよ．
//
// 23. セクション構造
// 記事中に含まれるセクション名とそのレベル（例えば"== セクション名 =="なら1）を表示せよ．
//
// 24. ファイル参照の抽出
// 記事から参照されているメディアファイルをすべて抜き出せ．
//
// 25. テンプレートの抽出
// 記事中に含まれる「基礎情報」テンプレートのフィールド名と値を抽出し，辞書オブジェクトとして格納せよ．
//
// 26. 強調マークアップの除去
// 25の処理時に，テンプレートの値からMediaWikiの強調マークアップ（弱い強調，強調，強い強調のすべて）を除去してテキストに変換せよ（参考: マークアップ早見表）．
//
// 27. 内部リンクの除去
// 26の処理に加えて，テンプレートの値からMediaWikiの内部リンクマークアップを除去し，テキストに変換せよ（参考: マークアップ早見表）．
//
// 28. MediaWikiマークアップの除去
// 27の処理に加えて，テンプレートの値からMediaWikiマークアップを可能な限り除去し，国の基本情報を整形せよ．
//
// 29. 国旗画像のURLを取得する
// テンプレートの内容を利用し，国旗画像のURLを取得せよ．（ヒント: MediaWiki APIのimageinfoを呼び出して，ファイル参照をURLに変換すればよい）
// ----------------------------------------------------------------------------------------------

/**
記事データを取得し整形
* @class MyWikipediaAPI
* @property {has} datas 記事タイトルをキーに持つ整形済みデータ
* @property {string} url 記事データのULR
* @param {strings} url 記事データのULR
*/
var MyWikipediaAPI = function(url){
  this.datas = [];
  this.url = url;
  /**
  * ajaxでdata取得
  * @method getData
  * @return jsonデータ
  */
  this.getData = $.ajax({
      url:this.url,
      type:'GET',
      cache:true,
      context:this,
      dataType:'text'
    });
  /**
  * データの整形
  * @method shaping
  * @param {string} t 行分割したテキスト
  */
  this.shaping = function(t){
    //カテゴリ(問21,22)
    t.categoles = t.text.match(/\[\[カテゴリ:[^\]]*?\]\]/g);
    if(t.categoles){
      for (var j = 0; j < t.categoles.length; j++) {
        t.categoles[j] = t.categoles[j].replace(/\[\[カテゴリ:([^\]]*?)\]\]/,'$1');
      }
    }
    //セクション(問23)
    t.sections = t.text.match(/={2,} [^=]*? ={2,}/g);
    if(t.sections){
      for (var j = 0; j < t.sections.length; j++) {
        _level = t.sections[j].replace(/(={2,}).+/,'$1').length - 1
        t.sections[j] = {
          level:_level,
          name:t.sections[j].replace(/^={2,} (.*?) ={2,}$/,'$1')
        }
      }
    }
    //ファイル(問24)
    t.files = t.text.match(/\[\[ファイル:[^\]]*?\]\]/g);
    if(t.files){
      for (var j = 0; j < t.files.length; j++) {
         _datas = t.files[j].replace(/\[\[ファイル:([^\]]*?)\]\]/,'$1').split("|");
         t.files[j] = {
           name:_datas[0],
           size:_datas[1],
           alt:_datas[2]
         }
      }
    }
    //基礎情報(問25~29)
    if(t.text.match(/{{基礎情報[\s\S]*?}}\n/g)){
      //基礎情報スタート位置
      var _lines = t.text.replace(/[\s\S]*{{基礎情報 国([\s\S]*)/g,'$1').replace(/\|\n/g,'\n|').split("\n|");
      var _setLines = []
      for (var j = 0; j < _lines.length; j++) {
        var targetLine = _lines[j];
        //問25
        targetLine = targetLine.trim().replace('|','');
        //基礎情報が終わるポイント
        if(targetLine.indexOf("}}\n") == 0){
          j = _lines.length + 1;
        }else if(targetLine.indexOf("}}\n") > 0){
          targetLine = targetLine.split("}}\n")[0];
          j = _lines.length + 1;
        }
        if(j<_lines.length && targetLine != ""){
          //問26
          targetLine = targetLine.replace(/'{2,}/g,'');
          //問27
          var _reg = /\[\[(.*?)\]\]/g;
          var _rep = "__reg__link__ptn__";
          var _links = targetLine.match(_reg);
          if(_links){
            targetLine = targetLine.replace(_reg,_rep);
            for (var k = 0; k < _links.length; k++) {
              var _cnp = _links[k].replace(_reg,'$1').split("|");
              targetLine = targetLine.replace(_rep,_cnp[_cnp.length - 1]);
            }
          }
          //問28
          targetLine = targetLine
            .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
            .replace(/{{[^\|]*?\|/g,'')
            .replace(/}}/g,'')
            .replace(/\[[^\[]*?\]/g,'');

          //キー配列に変換
          var _name = targetLine.replace(/([^=]*?)=[\s\S]*/,'$1').trim();
          var _val = targetLine.replace(/.*?=([\s\S]*)/,'$1').trim().replace(/\n/,'');
          _setLines[_name] = _val;
        }
      }
      t.baseData = _setLines;
    }
    this.datas[t.title] = t;
  }
  /**
  * 国旗画像のデータを取得
  * @method getFlagImg
  * @param {string} name 国名
  * @return jsonデータ
  */
  this.getFlagImg = function(name){
    if(this.datas[name].baseData["国旗画像"]){
      return $.ajax({
          url: 'https://en.wikipedia.org/w/api.php?action=query&titles=File:' + encodeURIComponent(this.datas[name].baseData["国旗画像"]) + '&prop=imageinfo&iiprop=url&format=json',
          type:'get',
          context:this,
          dataType:'jsonp'
      });
    }
  }
}
