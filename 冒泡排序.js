/**
 * @feature 冒泡排序
 * 定义:之所以叫冒泡排序是因为使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂浮到另一端，它是最慢的排序算法之一，但也是一种最容易实现的排序算法
 */

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

/************* 测试代码 *****************/
console.log(bubbleSort([1, 3, 2, 5, 6, 20, 58]));


// 优化
function bubbleSort2(arr) {
    // 如果数组已经排序好了，那就不需要再排序了
    let sorted = true
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                sorted = false // 发生了交换则循环继续
            }
        }

        if (sorted) { // 没有发生交换，说明已经是排序好的，则直接返回数组
            break
        }
    }

    return arr
}
