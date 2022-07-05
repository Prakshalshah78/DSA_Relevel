function MergeIntervals(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        curr = intervals[i]; //[2,6]
        prev = intervals[i - 1]; //[1,4]

        if (curr[0] <= prev[1]) {
            intervals[i] = [prev[0], Math.max(prev[1], curr[1])]; //[1,6]
            console.log(intervals);
            intervals.splice(i - 1, 1);
            debugger;
            i-=1;
        }
    }
    return intervals;
}

let arr = [[1, 4], [2, 6], [8, 10]];
//           0     1      2
console.log(MergeIntervals(arr))