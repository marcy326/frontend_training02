//// 1. 時間リアルタイム更新
// function set2fig(num) {
//     // 桁数が1桁だったら先頭に0を加えて2桁に調整する
//     var ret;
//     if( num < 10 ) { ret = "0" + num; }
//     else { ret = num; }
//     return ret;
// }
// function showClock(class_name) {
//     var targets = document.getElementsByClassName(class_name);
//     var now = new Date();
//     var Hour = set2fig(now.getHours());
//     var Min = set2fig(now.getMinutes());
//     for (i=0; i < targets.length; i++){
//         var target = targets[i];
//         target.innerHTML = Hour + ":" + Min;
//     }
// }
// showClock("DateTimeDisp");
// setInterval('showClock()',1000);

// 2. スクロールの初期位置を一番下に設定
//let target = document.getElementById('scroll');
//target.scrollTo(0, target.scrollHeight);

// 3. テキストエリアの高さを自動調整
window.addEventListener("DOMContentLoaded", () => {
    let target = document.getElementById('scroll');
    target.scrollTo(0, target.scrollHeight);
    // textareaタグを全て取得
    const textareaEls = document.querySelectorAll("textarea");
  
    textareaEls.forEach((textareaEl) => {
      // デフォルト値としてスタイル属性を付与
      textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
      // inputイベントが発生するたびに関数呼び出し
      textareaEl.addEventListener("input", setTextareaHeight);
      textareaEl.addEventListener("input", setMessageHeight);
    });
    window.addEventListener("resize", setMessageHeight);
});
// textareaの高さを計算して指定する関数
function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
}

function setHeight() {
    setTextareaHeight();
    setMessageHeight();
}

// 4. テキストエリアとヘッダーの高さを取得して、メッセージ部分のmargin調整
function getHeight(id_name){
    var obj = document.getElementById(id_name);
    var h = obj.offsetHeight;
    return h;
};

function setMessageHeight() {
    var messages = document.getElementById("scroll");
    messages.style.marginTop =  (getHeight("header"))+'px';
    messages.style.marginBottom =  (getHeight("footer"))+'px';
}
setMessageHeight();
