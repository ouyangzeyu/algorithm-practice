/**
 * @feature 选择排序
 * 定义:选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序
 */

function selectSort(arr) {
    let minIndex, temp
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }

    return arr
}
/************* 测试代码 *****************/
console.log(selectSort([1, 3, 2, 5, 6, 20, 58]));
