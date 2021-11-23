function miniMaxSum(arr) {
    let sum = arr.reduce( (a,b) => a + b )
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let minSum = sum - max;
    let maxSum = sum - min;
    console.log(`${minSum} ${maxSum}`)
}
