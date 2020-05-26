/**
 * @feature 双向链表
 */

function Node(element) {
    this.element = element
    this.prev = null
    this.next = null
}

function LinkList() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.remove = remove
    this.findLast = findLast
    this.dispReverse = dispReverse
    this.display = display

    function find(element) {
        let currNode = this.head
        while (currNode.element != element) {
            currNode = currNode.next
        }
        return currNode
    }

    function insert(newElement, element) {
        let newNode = new Node(newElement)
        let current = this.find(element)
        newNode.next = current.next
        newNode.prev = current
        current.next = newNode

    }

    function display() {
        let currNode = this.head
        // 遍历链表，如果节点的值不为null，就打印出来。 没有包含头节点
        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    function remove(element) {
        let currNode = this.find(element)
        if (currNode.next != null) {
            currNode.prev.next = currNode.next
            currNode.next.prev = currNode.prev
            currNode.next = null
            currNode.prev = null
        }
    }

    function findLast() {
        let currNode = this.head
        while (currNode.next != null) {
            currNode = currNode.next
        }
        return currNode
    }

    // 反序显示双向连遍历
    function dispReverse() {
        let currNode = this.head
        currNode = this.findLast()
        while (currNode.prev != null) {
            console.log(currNode.element);
            currNode = currNode.prev
        }
    }
}

/********************代码测试****************** */
const cities = new LinkList()
cities.insert('beijing', 'head')
cities.insert('shanghai', 'beijing')
cities.insert('guangzhou', 'shanghai')
cities.insert('shenzhen', 'guangzhou')
// cities.insert('haha', 'head')
// cities.remove('haha')
cities.display()
cities.dispReverse()
