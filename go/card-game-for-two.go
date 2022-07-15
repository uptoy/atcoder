package main

import (
	"fmt"
	"sort"
)

func main() {
	var N int
	fmt.Scan(&N)
	a := make([]int, N)
	for i := range a {
		fmt.Scan(&a[i])
	}
	sort.Sort(sort.Reverse(sort.IntSlice(a)))
	var score [2]int
	d := 0
	for _, v := range a {
		score[d] += v
		d = 1 - d
	}
	fmt.Println(score[0] - score[1])
}
