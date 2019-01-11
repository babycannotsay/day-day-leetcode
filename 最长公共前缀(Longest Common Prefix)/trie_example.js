class TreeNode {
  constructor(char, node) {
    this.links = {};
    this.addTreeNode(char, node);
  }
  addTreeNode(char = "a", node = null) {
    const link = this.links[char.charCodeAt() - "a".charCodeAt()];
    if (typeof link === "number" && link !== 0) {
      this.links[char.charCodeAt() - "a".charCodeAt()]++;
      return;
    }
    this.links[char.charCodeAt() - "a".charCodeAt()] = 1;
  }
}
class TrieTree {
  constructor(str) {
    this.root = new TreeNode();
    if (typeof str === "string") {
      this.insert(str);
    }
  }
  insert(str) {
    let dummyNode = this.root;
    Array.prototype.forEach.call(str, v => {
      if (dummyNode.next) {
        // console.log(v)
        dummyNode.next.addTreeNode(v);
      } else {
        dummyNode.next = new TreeNode(v);
      }
      dummyNode = dummyNode.next;
    });
  }
}

const tree = new TrieTree("sad");
tree.insert("sand");
console.log(JSON.stringify(tree));
