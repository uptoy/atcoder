package main

import "fmt"

func main() {
	var A, B, C, X int
	fmt.Scan(&A, &B, &C, &X)

	var ans int
	for a := 0; a <= A; a++ {
		for b := 0; b <= B; b++ {
			for c := 0; c <= C; c++ {
				if 500*a+100*b+50*c == X {
					ans++
				}
			}
		}
	}
	fmt.Println(ans)
}
