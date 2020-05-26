/**
 * @feature 链表
 * 定义:链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继，链表的尾元素指向一个null节点。
 * 链表具有的属性:链表操作插入和删除元素的效率非常高
 */

// 定义一个节点类
function Node(element) {
    this.element = element
    this.next = null
}

// 定义一个链表类
function LinkList() {
    this.head = new Node('head') // 初始化链表的头节点
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
    this.findPrev = findPrev

    // 查找节点
    function find(element) {
        let currNode = this.head
        while (currNode.element != element) {
            currNode = currNode.next
        }
        return currNode
    }

    // 插入节点
    // newElement: 新节点对象， element: 新元素前面的元素
    function insert(newElement, element) {
        let newNode = new Node(newElement)
        let current = this.find(element)
        newNode.next = current.next
        current.next = newNode
    }

    // 显示链表元素
    function display() {
        let currNode = this.head
        // 遍历链表，如果节点的值不为null，就打印出来。 没有包含头节点
        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    // 工具函数，用于找到目标节点的前一个节点，方便做删除操作
    function findPrev(element) {
        let currNode = this.head
        while ((currNode.next != null) && (currNode.next.element == element)) {
            return currNode
        }
        return currNode
    }

    // 删除节点: 需要找到被删除节点的前一个节点并改变其next指向直接指向到被删除元素后面的节点
    function remove(element) {
        let prevNode = this.findPrev(element)
        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next
        }
    }
}

/********************代码测试****************** */
const cities = new LinkList()
cities.insert('beijing', 'head')
cities.insert('shanghai', 'beijing')
cities.insert('guangzhou', 'shanghai')
cities.insert('shenzhen', 'guangzhou')
cities.insert('haha', 'head')
cities.remove('haha')
cities.display()
