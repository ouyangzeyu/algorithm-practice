/**
 * @feature 字典
 * 定义:字典是一种以键 - 值对形式存储数据的数据结构。
 */

function Dictionary() {
    this.dataStore = new Array()
    this.add = add
    this.find = find
    this.remove = remove

    function add(key, value) {
        this.dataStore.push({[key]: value})
    }

    function find(key) {
        return this.dataStore[key]
    }

    function remove(key) {
        delete this.dataStore[key]
    }
}

/********************代码测试****************** */
const person = new Dictionary()
person.add('name', '小明')
person.add('name', '小红')
person.add('name', '小花')
console.log(person.dataStore);


