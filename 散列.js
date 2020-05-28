/**
 * @feature 散列
 * 定义:散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却 效率低下，比如查找一组数据中的最大值和最小值。这些操作得求助于其他数据结构，二叉查找树就是一个很好的选择。
 */

function HashTable() {
    this.table = new Array()
    this.put = put // 插入数据
    this.get = get // 获取数据
    this.simpleHash = simpleHash // 计算散列值
    this.showDistro = showDistro // 显示散列表中的数据分布

    function simpleHash() {
        
    }
}
