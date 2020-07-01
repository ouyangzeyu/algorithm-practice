/**
 * @feature 插入排序
 * 插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置
 */

function insertSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i];
        for (let j = i; j > 0; j--) {
            if (temp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

/************* 测试代码 *****************/
console.log(insertSort([1, 3, 2, 5, 6, 20, 58]));