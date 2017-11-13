package main

import (
	"fmt"
)

// Our intern left it incomplete and it should be doing an in-order traversal
// of the tree and sending the node values to a string. The expected output is:
// "1123567891019100". Please add the implementation and share a Go playground
// link showing how far you got. If that proves too easy, output strings in pre
// and post orders as well.

// tree a binary tree implementation
type tree struct {
	Left  *tree
	Value int
	Right *tree
}

func (t *tree) Walk() string {
	if t == nil {
		return ""
	}
	s := ""
	if t.Left != nil {
		s += t.Left.Walk()
	}
	s += fmt.Sprint(t.Value)
	if t.Right != nil {
		s += t.Right.Walk()
	}
	return s
}

func insert(t *tree, v int) *tree {
	// leaf node
	if t == nil {
		return &tree{nil, v, nil}
	}

	// recursively insert.
	if v < t.Value {
		t.Left = insert(t.Left, v)
	} else {
		t.Right = insert(t.Right, v)
	}

	return t
}

func newTree(vals ...int) *tree {
	var t *tree
	for _, val := range vals {
		t = insert(t, val)
	}

	return t
}

func main() {
	t := newTree(5, 2, 6, 7, 19, 3, 8, 9, 10, 100, 1, 1)
	fmt.Println(t.Walk())
}
