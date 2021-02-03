# Brute force
# Complexity Time: O(n^2) Space : O(1)

def two_sum(nums, target):
    for i in range(0, len(nums)):
        number_to_search = target - nums[i]
        for j in range(i+1, len(nums)):
            if nums[j] == number_to_search:
                return [i, j]

    return None


def two_sum_optimised(nums, target):
    lookup = dict()
    for i in range(0, len(nums)):
        if nums[i] in lookup:
            return [lookup[nums[i]], i]
        else:
            lookup[target - nums[i]] = i

    return None


# Test cases
nums1 = [3, 1, 7, 4, 5]
nums2 = [6, 7, 8, 12]
nums3 = [8, 1]
nums4 = []
nums5 = [9]

target = 9


'''
Check test cases here
'''
# print(two_sum(nums1, target))
# print(two_sum(nums2, target))
# print(two_sum(nums3, target))
# print(two_sum(nums4, target))
# print(two_sum(nums5, target))


# Test for two sum opimised

# print(two_sum_optimised(nums1, target))
# print(two_sum_optimised(nums2, target))
# print(two_sum_optimised(nums3, target))
# print(two_sum_optimised(nums4, target))
print(two_sum_optimised(nums5, target))
