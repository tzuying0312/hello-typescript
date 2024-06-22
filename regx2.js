function extractKeyValuePairs(input) {
    var regex = /(\w+)=(\d+)/g;
    var matches = input.match(regex);
    if (!matches) {
        return null;
    }
    var result = '';
    matches.forEach(function (match, index) {
        if (index > 0) {
            result += ',';
        }
        var _a = match.split('='), key = _a[0], value = _a[1];
        result += "\"myProject:us-central1:".concat(key, "?port=").concat(value, "\"");
    });
    return result;
}
var example = "myInstance=3306,myInstance2=1234";
var extracted = extractKeyValuePairs(example);
console.log(extracted);
