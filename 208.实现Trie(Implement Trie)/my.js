/**
 * Initialize your data structure here.
 */
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
    let next = this;
    let len = nodes.length;
    let has = false;
    while (len > 0) {
      if (next[nodes[0]]) {
        has = next[nodes[0]].wordCount > 0;
        next = next[nodes[0]].next;

        nodes = nodes.slice(1);
        len--;
      } else {
        break;
      }
    }
    return len === 0 && has;
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
var Trie = function() {
  this.root = new TreeNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.root.add(word);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.root.search(word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.root.startsWith(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
