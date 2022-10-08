function exportfile() {

let x = window.prompt ("ゴミファイルを何個ダウンロードしますか？", "");
// Blobオブジェクトを作成する
const blob = new Blob(['ただのゴミファイル\nなんの意味も持たない'],{type:"text/plain"});

// HTMLのa要素を生成
const link = document.createElement('a');

// BlobオブジェクトをURLに変換
link.href = URL.createObjectURL(blob);

// ファイル名を指定する
link.download = 'ゴミファイル.txt';

// a要素をクリックする処理を行う
for (let i = 0; i < x; i++) {
  link.click();
}
}