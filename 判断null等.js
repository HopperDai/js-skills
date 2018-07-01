class isWhat {
    constructor(value) {
        if (!value && typeof value == 'object') {
            console.log('null')
        } else if (!value && typeof value == 'undefined') {
            console.log('undefined');
        } else if (!value && typeof value == 'string') {
            console.log('空字符串');
        } else {
            console.log('others');
        }
    }
}

new isWhat(null);
new isWhat(undefined);
new isWhat('');

//TODO
// 判断数据类型的标准方法