# Measmerize Software Engineering Technical Assessment

## Prerequisites to test the application

You need to have Node installed.
If you don't have it globally, execute:

  > yarn

  or

  > npm install

## How to execute the test

To test the application, open the Console and type:

  > yarn test

The test is performed by using the input json file contained in 

  `./input/nodes.json`

If you want to test by using other input files:

  - add the new input file somewhere in the solution folder
  - open the `solution.js` file, and import the just added input json file
  - change the input of the `arrangeArray` function call

## Technical Assessment Overview

This is a Measmerize technical assessment for potential JavaScript and Python Software Engineers.

The purpose of this exercise is to assess your:

- Algorithmic skills
- Optimisation skills
- Code quality
- Thinking process

We are not looking for a brute force implementation, but a solution that demonstrates your understanding of the problem statement and data model in tandem with the points above

## Problem Statement

In this exercise you are presented with a flat array of unsorted nodes. Each node has the following properties

- `nodeId` The ID of the node
- `name` A sample property associated with the node
- `parentId` The ID of the parent node
- `previousSiblingId` The ID of the node that appears as direct previous sibling

The input file of nodes can be found [here](/input/nodes.json).

The nodes require rearranging, so you are expected to implement a solution that can rearrange this flat array of nodes into a sorted tree structure, where every node is placed under its parent and along with its siblings.

If a `null` value is given for either `parentId` or `previousSiblingId`, that is because it either has no parent (root-level of the tree) or is the first child of its parent, respectively.

If a node is a parent of other node(s), these "children" should appear in an array property called `children` on the parent node. If a node has no child nodes, this `children` array will be empty.

You can find the expected output [here](/output/expected-tree.json) for clarity.

### Examples

#### Example 1

```json
{
  "nodeId": "8",
  "name": "eight",
  "parentId": "7",
  "previousSiblingId": null
}
```

The above node has a `nodeId` of "8". The `parentId` property of `"7"` instructs that this node should be in the `children` array of the node with ID "7". The `previousSiblingId` property of `null` instructs that this node does not have a preceding sibling node, so will appear as the first child of node "7".

#### Example 2

```json
{
  "nodeId": "4",
  "name": "four",
  "parentId": "6",
  "previousSiblingId": "2"
}
```

The above node has a `nodeId` of "4". The `parentId` property of `"6"` instructs that this node should be in the `children` array of the node with ID "6". The `previousSiblingId` property of `"2"` instructs that this node should be preceded by the node with ID "2" in the `children` array.

## Important Information

- You are not expected to mutate any input whilst deriving the output.
- There can be many root-level nodes.
- Expect that a node can have an arbitrary quantity of siblings.
- Expect an arbitrary depth of nodes (children of children).

## Deliverables

1. Your solution (that takes in the provided input and creates the expected output).
2. Instructions to run the code.
3. Comments throughout the code that highlights your thinking process.
4. All this code should be in GitHub.
