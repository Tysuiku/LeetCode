def climbStairs(n):
    if n <= 2:
        return n

    ways = [0] * (n + 1)
    # ways = [0, 0, 0]

    ways[1] = 1
    # ways = [0, 1, 0]

    ways[2] = 2
    # ways = [0, 1, 2]

    for i in range(3, n + 1):
        ways[i] = ways[i - 1] + ways[i - 2]

    return ways[n]


print(climbStairs(2))
print(climbStairs(3))
print(climbStairs(4))

# for i in range(3, 4):
#     print(i)
