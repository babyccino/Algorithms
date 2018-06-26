#include <string>
#include <utility>

static int factorial(int num) {
    int ret = num;
    while(num > 1) {
        ret *= --num;
    }
    return ret;
}

std::vector<std::vector<int>> permute(const std::vector<int>& nums) {
    std::vector<std::vector<int>> ret;
    ret.reserve(factorial(nums.size()));
    permuteInterior(nums, 0, ret);
    return std::move(ret);
}

void permuteInterior(const std::vector<int>& nums, const int& start, std::vector<std::vector<int>>& ret) {
    if (start == nums.size() - 1) {
        ret.push_back(std::move(nums));
    } else {
        permuteInterior(nums, start + 1, ret);
        for (int i = start + 1; i < nums.size(); ++i) {
            std::vector<int> newVec = nums;
            std::swap(newVec[start], newVec[i]);
            permuteInterior(newVec, start + 1, ret);
        }
    }
}
    
