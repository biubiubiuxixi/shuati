/**
 * 直接插入排序
 */
var a = [1, 2, 8, 9, 2, 3, 6, 5, 4];
var n = a.length;
console.log('原来的数组' + a.map((i) => i));
insertSort(a, n)
console.log('排序后的数组' + a.map((i) => i));

function insertSort(a, n) {
    for (let i=1;i<n;i++) {
        for (var j = i-1;j>=0;j--) {
            if (a[j]<a[i]) {
                break;
            }
        }
        if (j != i-1) {
            // 将比a[i]大的数字往后移
            let temp = a[i];
            for (var k = i-1;k>j;k--) {
                a[k+1]=a[k];
            }
            a[k+1]=temp;
        }
    }
}