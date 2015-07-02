/**
 * ͨ����ʱ�������ֽ�������ִ��
 * @param {array} items
 * @param {function} process
 * @param {function} callback
 */
function timedProcessArray(items, process, callback) {
    var todos = items.concat();

    setTimeout(function () {
        var start = +new Date();
        do {
            process(todos.shift());
        } while (todos.length && (+new Date() - start < 50)); // ����50ms��ͨ����ʱ��ִ��
        if (todos.length) {
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}