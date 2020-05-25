/**
 * @feature 队列
 * 定义:队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序排列的数据，先进先出
 */

function Queue() {
    this.dataStore = []
    this.enqueue = enqueue // 向队尾添加元素
    this.dequeue = dequeue // 删除队首元素
    this.front = front // 读取队首元素
    this.back = back // 读取队尾元素
    this.toString = toString // 显示队列
    this.isEmpty = isEmpty // 判断队列是否为空

    function enqueue(element) {
        this.dataStore.push(element)
    }

    function dequeue() {
        this.dataStore.shift()
    }

    function front() {
        return this.dataStore[0]
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    function toString() {
        let str = ''
        for (let i = 0; i < this.dataStore.length; i++) {
            str += this.dataStore[i] + '\n'
            return str
        }
    }

    function isEmpty() {
        if (this.dataStore.length == 0) {
            return true
        } else {
            return false
        }
    }
}
