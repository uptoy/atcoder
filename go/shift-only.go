package main

import "fmt"

func main() {
	var N int
	fmt.Scan(&N)
	A := make([]int, N)
	for i := range A {
		fmt.Scan(&A[i])
	}

	ans := 0
	for {
		ok := true
		for _, v := range A {
			if v%2 != 0 {
				ok = false
			}
		}
		if !ok {
			break
		}

		for i := range A {
			A[i] /= 2
		}
		ans++
	}
	fmt.Println(ans)
}

// 別解1
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func count(n int) int {
	var c int
	for n%2 == 0 {
		c++
		n /= 2
	}
	return c
}

func main1() {
	var N int
	fmt.Scan(&N)
	A := make([]int, N)
	for i := range A {
		fmt.Scan(&A[i])
	}

	ans := 40
	for _, v := range A {
		ans = min(ans, count(v))
	}
	fmt.Println(ans)
}


// 別解2
func main2() {
    var N int
    fmt.Scan(&N)
    A := make([]int, N)
    for i := range A {
        fmt.Scan(&A[i])
    }

    var a uint
    for i := range A {
        a |= uint(A[i])
    }

    fmt.Println(trailingZeros(a))
}

func trailingZeros(x uint) int {
    var count int
    for i := uint(0); i < 40; i++ {
        if (x>>i)&1 == 0 {
            count++
        } else {
            break
        }
    }
    return count
}
