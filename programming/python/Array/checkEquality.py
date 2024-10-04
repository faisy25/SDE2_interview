# Array Comparison: Check for Equality
# Write a function arraysEqual(arr1, arr2) that takes two arrays and returns true if they are identical (same elements in the same order), and false otherwise.

# Example 1
# arr1 = [1, 2, 3, 4];
# arr2 = [1, 2, 3, 4];
# Output: true

# Example 2
# arr1 = [1, 2, 3, 4];
# arr2 = [1, 2, 3, 5];
# Output: false


# Brute force solution
def checkEquality(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    for i in range(0,len(arr1)):
        print(i)
        if arr1[i] != arr2[i]:
            return False
    return True

print(checkEquality(arr1,arr2))