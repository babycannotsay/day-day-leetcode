class TreeNode {
  constructor(char, node, isWord) {
    this.links = {};
    this.addTreeNode(char, node, isWord);
  }
  addTreeNode(char = "a", node = null, isWord) {
    if (node === null) {
      return;
    }
    const link = this.links[char.charCodeAt() - "a".charCodeAt()];
    if (link) {
      link.size++;
      if (isWord) {
        link.wordCount++;
      }
      return;
    }
    this.links[char.charCodeAt() - "a".charCodeAt()] = {
      word: node,
      size: 1,
      wordCount: isWord ? 1 : 0
    };
  }
  findTreeNode(char, node) {
    return (
      !!this.links[char.charCodeAt() - "a".charCodeAt()] &&
      this.links[char.charCodeAt() - "a".charCodeAt()].word === node
    );
  }
  deleteTreeNode(char = "a", isWord) {
    const link = this.links[char.charCodeAt() - "a".charCodeAt()];
    if (!link) {
      return;
    }
    if (link) {
      if (--link.size === 0) {
        delete this.links[char.charCodeAt() - "a".charCodeAt()];
        return;
      }
      if (isWord) {
        this.links[char.charCodeAt() - "a".charCodeAt()].wordCount--;
      }
      return;
    }
  }
}
class TrieTree {
  constructor(nodes) {
    this.root = new TreeNode();
    if (typeof nodes === "string") {
      this.insert(nodes);
    } else if (Array.isArray(nodes) && nodes.length > 0) {
      this.batch_insert(nodes);
    }
  }
  insert(str) {
    let dummyNode = this.root;
    Array.prototype.forEach.call(str, (v, index) => {
      if (dummyNode.next) {
        // console.log(v)
        dummyNode.next.addTreeNode(
          v,
          str.slice(0, index + 1),
          index === str.length - 1
        );
      } else {
        dummyNode.next = new TreeNode(
          v,
          str.slice(0, index + 1),
          index === str.length - 1
        );
      }
      dummyNode = dummyNode.next;
    });
  }
  batch_insert(strs) {
    strs.forEach(str => {
      this.insert(str);
    });
  }
  find(str) {
    let dummyNode = this.root;
    return Array.prototype.every.call(str, (v, index) => {
      if (dummyNode.next) {
        // console.log(v)
        if (dummyNode.next.findTreeNode(v, str.slice(0, index + 1))) {
          dummyNode = dummyNode.next;
          return true;
        }
        return false;
      } else {
        return false;
      }
    });
  }
  batch_find(strs) {
    return strs.filter(str => this.find(str));
  }
  delete(str) {
    let dummyNode = this.root;
    Array.prototype.forEach.call(str, (v, index) => {
      dummyNode.next.deleteTreeNode(v, str.length - 1 === index);
      dummyNode = dummyNode.next;
    });
  }
  batch_delete(strs) {
    strs.forEach(str => {
      this.delete(str);
    });
  }
}

const tree = new TrieTree(["he", "hi", "his", "she", "her", "hers"]);
// console.log(tree.batch_find(["he",'hi','his','she','herd','hers']));
// tree.batch_delete(['his', 'she', 'her'])
// tree.delete("sand");
console.log(JSON.stringify(tree));
