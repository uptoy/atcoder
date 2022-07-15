package main

import "fmt"

func main() {
	var N int
	fmt.Scan(&N)
	d := make([]int, N)
	for i := range d {
		fmt.Scan(&d[i])
	}

	mp := make(map[int]bool)
	for _, v := range d {
		mp[v] = true
	}
	fmt.Println(len(mp))
}
