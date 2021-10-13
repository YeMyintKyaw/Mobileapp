"use strict";
window.addEventListener("DOMContentLoaded",
    function() {
        if(typeof localStorage === "undefined"){
            window.alert("このブラウザは Local Storage　技能が実行されていません");
            return;
        } else {
            saveLocalStorage();
        }
    }
);
function saveLocalStorage(){
    const save = document.getElementById("save");
    save.addEventListener("click",
        function(e) {
            e.preventDefault();
            const key = document.getElementById("textKey").value;
            const value = document.getElementById("textMemo").value;

            if (key=="" || value=="") {
                window.alert("key、Memo はいずれも必須です。");
                return;
            } else {
                localStorage.setItem(key, value);
                let w_msg = "LocalStorageに" + key + " " + value + "を保存しました。";
                window.alert(w_msg);
                document.getElementById("textKey").value = "";
                document.getElementById("textMemo").value = "";
            }
        }  
    );
};