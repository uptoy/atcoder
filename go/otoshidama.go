package main

import "fmt"

func main() {
	var N, Y int
	fmt.Scan(&N, &Y)

	for i := 0; i <= N; i++ {
		for j := 0; j <= N; j++ {
			k := N - i - j
			if k < 0 {
				continue
			}
			if 10000*i+5000*j+1000*k == Y {
				fmt.Println(i, j, k)
				return
			}
		}
	}
	fmt.Println(-1, -1, -1)
}
