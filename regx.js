function isValidFormat(input) {
    // 定義正規表達式，匹配多個形如 a=b 的鍵值對，中間用逗號分隔
    var regex = /^(\w+=\d+)(,\w+=\d+)*$/;
    input = input.replace(/ /g, '');
    // 使用正規表達式測試輸入字符串
    return regex.test(input);
}

// 測試例子
var example1 = "a=123, b=456,c=789";
var example2 = "x=999";
console.log("\"".concat(example1, "\" is valid format:"), isValidFormat(example1));
console.log("\"".concat(example2, "\" is valid format:"), isValidFormat(example2));

// 正規表達式 const regex = /^(\w+=\w+)(,\w+=\w+)*$/; 表示：
// ^：匹配字符串的開始位置。
// (\w+=\w+)：匹配一個形如 a=b 的鍵值對。
// (,\w+=\w+)*：使用括號和星號表示這個模式可以出現零次或多次，即匹配多個逗號分隔的鍵值對。
// $：匹配字符串的結束位置
