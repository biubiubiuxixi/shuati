/**
 * 快速排序
 */
var a = [1, 2, 8, 9, 2, 3, 6, 5, 4];
console.log('原来的数组' + a.map((i) => i));
a = quickSort(a);
console.log('排序后的数组' + a.map((i) => i));

function quickSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    let n = Math.floor(arr.length/2);
    let nValue = arr[n];
    let right = [];
    let left = [];
    for (let i=0;i<arr.length;i++) {
        if(arr[i]>nValue) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(quickSort(right));
}