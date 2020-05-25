/**
 * @feature 栈
 * 定义:栈就是和列表类似的一种数据结构，它可用来解决计算机世界里的很多问题。栈是一种高 效的数据结构，因为数据只能在栈顶添加或删除，所以这样的操作很快，而且容易实现。栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶,栈被称为一种后入先出（LIFO，last-in-ﬁrst-out）的数据结构。
 * 栈具有的属性:由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。为了得到栈底的元素，必须先拿掉上面的元素。入栈使用 push()方法，出栈使用pop()方法,peek()方法则只返回栈顶元素，而不删除它。
 */

 function Stack () {
     this.dataStore = [] // 初始化数据
     this.top = 0 // 栈顶位置
     this.push = push
     this.pop = pop
     this.peek = peek
     this.length = length
     this.clear = clear

     function push (element) {
         this.dataStore[this.top++] = element
     }

     // 返回栈顶元素同时top减1
     function pop () {
         return this.dataStore[--this.top]
     }

     function peek () {
        return this.dataStore[this.top - 1]
     }

     // 返回栈内元素的个数
     function length () {
         return this.top
     }

     function clear () {
         this.top = 0
     }
 }