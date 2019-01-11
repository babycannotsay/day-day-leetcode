/**
 * @param {string[]} strs
 * @return {string}
 */

class TreeNode {
  constructor(char, node) {
    this.links = {};
    this.size = 1;
    this.addTreeNode(char, node);
  }
  addTreeNode(char = "a", node = null) {
    if (node === null) {
      return;
    }
    let link = this.links[char.charCodeAt() - "a".charCodeAt()];
    if (link) {
      this.size++;
      return;
    }
    this.links[char.charCodeAt() - "a".charCodeAt()] = node;
  }
}
class TrieTree {
  constructor(strs) {
    this.root = new TreeNode();
    this.minCommonPrefix = "";
    if (Array.isArray(strs) && strs.length > 0) {
      this.insertAndFindCommon(strs);
    }
  }
  insertAndFindCommon(strs) {
    let dummyNode = this.root;
    let minCommonPrefix = "";
    const minLength = strs.reduce(
      (length, str) => Math.min(length, str.length),
      strs[0].length
    );
    Array.from({ length: minLength }).some((v, index) => {
      dummyNode.next = new TreeNode();
      strs.forEach(str => {
        dummyNode.next.addTreeNode(str[index], str.slice(0, index + 1));
      });
      if (dummyNode.next.size !== strs.length) {
        return true;
      }
      minCommonPrefix = Object.values(dummyNode.next.links)[0];
      dummyNode = dummyNode.next;
      return false;
    });
    this.minCommonPrefix = minCommonPrefix;
  }
}

var longestCommonPrefix = function(strs) {
  const tree = new TrieTree(strs);
  return tree.minCommonPrefix;
};
