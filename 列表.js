/**
 * @feature 列表
 * 定义:列表是一组有序的数据每个列表中的数据项成为元素，在js中，列表中的元素可以是任意数据类型
 * 列表应该具有的属性:
 * @listSize 列表的元素个数
 * @pos 列表的当前位置
 * @length {function}  返回列表中元素的个数
 * @clear {function}  空列表中的所有元素
 * @toString {function} 返回列表的字符串形式
 * @getElement {function} 返回当前位置的元素
 * @insert {function} 在现有元素后插入新元素
 * @append {function} 在列表的末尾添加新元素
 * @remove {function} 从列表中删除元素
 * @front {function} 将列表的当前位置设移动到第一个元素 
 * @end {function} 将列表的当前位置移动到最后一个元素  
 * @prev {function} 将当前位置后移一位
 * @next {function} 将当前位置前移一位
 * @currPos {function} 返回列表的当前位置
 * @moveTo {function} 将当前位置移动到指定位置
 * @find {function} 是否能找到指定元素
 */

function List() {
    this.dataStore = [] // 初始化一个空数组来保存列表元素 
    this.listSize = 0
    this.pos = 0
    this.append = append
    this.toString = toString
    this.clear = clear
    this.insert = insert
    this.find = find
    this.remove = remove
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.length = length
    this.currPos = currPos
    this.moveTo = moveTo
    this.getElement = getElement
    this.contains = contains

    // 定义append方法
    function append(element) {
        this.dataStore[this.listSize++] = element
    }

    // find方法，找到了就返回元素在列表中的位置，否则返回-1
    function find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i
            } else {
                return -1
            }
        }
    }

    // 定义删除方法
    function remove(element) {
        let foundAt = this.find(element)
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1)
            --this.listSize
            return true
        } else {
            return false
        }
    }

    // length方法
    function length() {
        return this.listSize
    }

    // toString方法，把列表元素显示出来就可以了
    function toString() {
        return this.dataStore
    }

    // insert插入元素方法
    function insert(element, after) {
        let insertPos = this.find(after)
        if (inserPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element)
            ++this.listSize
            return true
        } else {
            return false
        }
    }

    // clear清空列表中的元素
    function clear () {
        delete this.dataStore
        this.dataStore = []
        this.listSize = this.pos = 0
    }

    // contains判断是否在列表中的方法
    function contains (element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return true
            }
        }
        return false
    }

    // 如下是遍历列表相关的方法
    function front () {
        return this.pos = 0
    }
    function end () {
        return this.pos = this.listSize - 1
    }
    function prev () {
        if (this.pos > 0) {
            --this.pos
        }
    }
    function next () {
        if (this.pos < this.listSize - 1) {
            ++this.pos
        }
    }
    function currPos () {
        return this.pos
    }
    function moveTo (position) {
        this.pos = position
    }
    function getElement () {
        return this.dataStore[this.pos]
    }
}


/*------------ 逻辑测验 ------------- */
const names = new List()
names.append('小黑')
names.append('小明')
names.append('小红')
names.append('小花')
names.remove('小黑')

console.log(names.toString(), names.listSize);
