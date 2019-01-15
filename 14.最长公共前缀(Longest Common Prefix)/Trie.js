class TreeNode {
  constructor(chars, index) {
    this.add(chars, index);
  }
  add(chars = "", index = 0) {
    if (chars.length === 0 || chars.length === index) {
      return;
    }
    if (this[chars[index]]) {
      this[chars[index]].size++;
      if (chars.length - 1 === index) {
        this[chars[index]].wordCount++;
      }
      this[chars[index]].next.add(chars, index + 1);
      return;
    }
    this[chars[index]] = {
      size: 1,
      word: chars.slice(0, index + 1),
      wordCount: index === chars.length - 1 ? 1 : 0,
      next:
        index === chars.length - 1
          ? new TreeNode()
          : new TreeNode(chars, index + 1)
    };
  }
  search(nodes = "") {
    if (this[nodes[0]]) {
      if (nodes.length === 1 && this[nodes[0]].wordCount > 0) {
        return this[nodes[0]];
      }
      return this[nodes[0]].next.search(nodes.slice(1));
    }
    return null;
  }
  has(nodes = "") {
    if (this[nodes[0]]) {
      if (nodes.length === 1) {
        return this[nodes[0]];
      }
      return this[nodes[0]].next.has(nodes.slice(1));
    }
    return null;
  }
  delete(nodes = "") {
    if (this[nodes[0]]) {
      if (nodes.length === 1) {
        this[nodes[0]].size--;
        this[nodes[0]].wordCount--;
        if (this[nodes[0]].size === 0) {
          delete this[nodes[0]];
        }
        return Object.keys(this).length === 0;
      }
      if (this[nodes[0]].next.delete(nodes.slice(1))) {
        this[nodes[0]].size--;
        if (this[nodes[0]].size === 0) {
          delete this[nodes[0]];
        }
        return Object.keys(this).length === 0;
      }
    }
    return;
  }
  startsWith(nodes = "") {
    if (this[nodes[0]]) {
      if (nodes.length === 1) {
        return true;
      }
      return this[nodes[0]].next.startsWith(nodes.slice(1));
    }
    return false;
  }
  startsWith(nodes = "") {
    let next = this;
    let len = nodes.length;
    while (len > 0) {
      if (next[nodes[0]]) {
        next = next[nodes[0]].next;
        nodes = nodes.slice(1);
        len--;
      } else {
        break;
      }
    }
    return len === 0;
  }
}

class TrieTree {
  constructor(nodes) {
    this.root = new TreeNode();
    this.insert(nodes);
  }
  insert(nodes) {
    if (typeof nodes === "string") {
      this.root.add(nodes);
    } else if (Array.isArray(nodes)) {
      nodes.forEach(node => this.root.add(node));
    }
  }
  delete(nodes) {
    if (typeof nodes === "string") {
      this.root.delete(nodes);
    } else if (Array.isArray(nodes)) {
      nodes.forEach(node => this.root.delete(node));
    }
  }
  find(nodes) {
    if (typeof nodes === "string") {
      return this.root.search(nodes);
    } else if (Array.isArray(nodes)) {
      return nodes.map(node => this.root.search(node));
    }
  }
  startsWith(prefix) {
    return this.root.startsWith(prefix);
  }
  findWordCount(nodes) {
    if (typeof nodes === "string") {
      return this.find(nodes).wordCount;
    } else if (Array.isArray(nodes)) {
      return nodes.map(node => (this.find(node) || { wordCount: 0 }).wordCount);
    }
  }
  has(nodes) {
    return this.root.has(nodes);
  }
  findCommonPrefix(nodes) {
    if (nodes.length === 0) return "";
    this.insert(nodes);

    let fisrtNode = nodes[0];
    let len = fisrtNode.length;
    let i = 0;
    for (; i < len; i++) {
      const has = this.has(fisrtNode.slice(0, i + 1));
      if (has === null || has.size !== nodes.length) {
        break;
      }
    }
    return fisrtNode.slice(0, i);
  }
  sort(dummyNode = this.root, arr = []) {
    if (dummyNode === this.root) {
      Object.keys(dummyNode)
        .sort()
        .forEach(key => {
          Array.from({ length: dummyNode[key].wordCount }).forEach(() => {
            arr.push(dummyNode[key].word);
          });
          this.sort(dummyNode[key].next, arr);
        });
      return arr;
    } else if (Object.keys(dummyNode).length > 0) {
      Object.keys(dummyNode).forEach(node => {
        Array.from({ length: dummyNode[node].wordCount }).forEach(() => {
          arr.push(dummyNode[node].word);
        });
        this.sort(dummyNode[node].next, arr);
      });
      return arr;
    }
  }
}

// console.log(
//   JSON.stringify(new TrieTree(["he", 'hi', 'his', 'she', 'hi']))
// );
// const tree = new TrieTree([
//   // "he",
//   // "hi",
//   // "hello",
//   // "da",
//   // "dall",
//   // "his",
//   // "she",
//   // "her",
//   // "hers",
//   // "her",
//   // "abgvj"
//   'apple',
// ]);
const tree = new TrieTree();
// console.log(tree.startsWith('app'))
// tree.delete(['abgvj', 'he', 'hi'])
// console.log(JSON.stringify(tree));
console.log(tree.findCommonPrefix(["flower", "flow", "flight"]));
// console.log(tree.findCommonPrefix(["abc", 'abca']));
// console.log(tree.find(["hi", "herd", "a"]));
// console.log(tree.findWordCount(["hi", "herd", "a", "her"]));
// console.log(JSON.stringify(tree.sort()));
