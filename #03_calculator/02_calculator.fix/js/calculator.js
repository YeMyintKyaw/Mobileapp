'use strict'
//ページ上の　Element を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqual = document.getElementById("btnEqual");

//イベントを登録
elementSelect.addEventListener("change", clear);
elementNum1.addEventListener("change", clear);
elementNum2.addEventListener("change", clear);

elementbtnEqual.addEventListener("click", update);

//関数（update)
function update(){
    //計算結果を求める
    const result = calculate(
     Number(elementNum1.value),   //  １番目のテキスト入力フォームの値
     Number(elementNum2.value),   //  ２番目のテキスト入力フォームの値
     elementSelect.value     //　セレクトボックスの値　（計算の書類）
   );
// 画面の表示
elementResult.innerHTML = result; 
}
//関数（calculate) を作り、処理をまとめる。
function calculate(num1, num2, calcType){
    let result;
    switch(calcType){
        case "type-add":
            result = num1 + num2;
             break;
        case "type-substract":
            result = num1 - num2;
            break;
        case "type-multiply":
            result = num1 * num2;
            break;
        case "type-divide":
            result = num1 / num2;
            break;
    }
    return result;
}

// 関数　『clear] 計算結果をクリアします。
function clear() {
     elementResult.innerHTML = "";
 }