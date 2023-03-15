import input1 from './input/nodes.json' assert {type: 'json'};


function arrangeArray(inputNodes) {

  // first of all, let's sort the input nodes array by parent, child and siblings nodes
  const outputNodesFlat = [];
  inputNodes.forEach(node => {

    // add a new children attribute to the current node
    node.children = [];

    const parentIdx = outputNodesFlat.findIndex(x => x.nodeId == node.parentId);
    const childIdx = outputNodesFlat.findIndex(x => x.parentId == node.nodeId);
    const prevSiblingIdx = outputNodesFlat.findIndex(x => x.nodeId == node.previousSiblingId);
    const nextSiblingIdx = outputNodesFlat.findIndex(x => x.previousSiblingId == node.nodeId);

    if(childIdx > -1) {
      outputNodesFlat.splice(childIdx, 0, node);
    } else if(parentIdx > -1) {
      outputNodesFlat.splice(parentIdx + 1, 0, node);
    } else if(nextSiblingIdx > -1) {
      outputNodesFlat.splice(nextSiblingIdx, 0, node);
    } else if(prevSiblingIdx > -1) {
      outputNodesFlat.splice(prevSiblingIdx + 1, 0, node);
    } else {
      if(node.parentId == null) {
        // if no parent is defined and no sibling is present, prepend the node
        outputNodesFlat.unshift(node);
      } else {
        // otherwise just append it to the output flat array
        outputNodesFlat.push(node);
      }
    }
  });

  // after the flat array is sorted, let's create the final array with the proper nested children
  const outputNodes = [];
  outputNodesFlat.forEach(node => {
    if(node.parentId == null) {
      // if it's a root node, just append it to the final output
      outputNodes.push(node);
    } else {
      // otherwise it's a child, so append it to its parent node
      searchForParentAndAppend(outputNodes, node);
    }
  });

  function searchForParentAndAppend(nodeSet, currentNode) {
    const parentIdx = nodeSet.findIndex(x => x.nodeId == currentNode.parentId);
    // if the parent has been found, append the current node to its children
    if(parentIdx > -1) {
      nodeSet[parentIdx].children.push(currentNode);
    } else {
      // otherwise, recursively search for a parent among the children tree of each node of the set
      nodeSet.forEach(node => {
        searchForParentAndAppend(node.children, currentNode);
      });
    }
  }

  console.log(JSON.stringify(outputNodes, undefined, 4));
}


arrangeArray(input1);
