function insertSort(a, n)
{
    for (var i = 1; i < n; i++)
    {
        //为a[i]在前面的a[0...i-1]有序区间中找一个合适的位置
        for (var j = i - 1; j >= 0; j--)
            if (a[j] < a[i])
                break;

        //如找到了一个合适的位置
        if (j != i - 1)
        {
            //将比a[i]大的数据向后移
            var temp = a[i];
            for (var k = i - 1; k > j; k--)
                a[k + 1] = a[k];
            //将a[i]放到正确位置上
            a[k + 1] = temp;
        }
    }
}

var a = [20,40,30,10,60,50];
var ilen = a.length;
console.log("原来的数组：");
for (i=0; i<ilen; i++)
    console.log(a[i]);

insertSort(a, ilen);

console.log("排序后的数组：")
for (i=0; i<ilen; i++)
    console.log(a[i]);
