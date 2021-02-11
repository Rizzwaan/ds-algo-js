import math


def max_subarray(arr):

    max_sum = -math.inf

    for i in range(0, len(arr)):
        temp = 0
        for j in range(i, len(arr)):
            temp = temp + arr[j]
            max_sum = max(temp, max_sum)

    return max_sum


arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

print(max_subarray(arr))
