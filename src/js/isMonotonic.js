var isMonotonic = function(nums) {
    let up;
    for (let i = 0; i < nums.length - 1; ++i) {
        const l = nums[i];
        const r = nums[i + 1];
        if (up === undefined) {
            if (l !== r) {
                up = r > l;
            }
            continue;
        }
        
        if (l !== r && up !== (r > l))
            return false;
    }

    return true;
};

console.log(isMonotonic([1,2,2,3]));