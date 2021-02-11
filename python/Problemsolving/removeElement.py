arr = [0, 1, 2, 2, 3, 0, 4, 2]

target = 2


def removeElement(arr, target):
    for i in range(0, len(arr)):
        if arr[i] == target:
            for j in range(i+1, len(arr)):
                arr[j-1] = arr[j]
                i -= 1
    print(arr)

# print(removeElement(arr, target))


if __name__ == '__main__':
    print(removeElement(arr, target))
