/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
class Tree {
  children: Array<Tree>;
  isWord: boolean;
  constructor(children = [], isWord = false) {
    this.children = children;
    this.isWord = isWord;
  }
}

class WordDictionary {
  root: Tree;
  constructor() {
    this.root = new Tree();
  }

  addWord(word: string): void {
    const len = word.length;
    let root = this.root;

    for (let i = 0; i < len; i++) {
      const j = word.charCodeAt(i);
      root.children[j] ??= new Tree([], i === len - 1);

      root.children[j].isWord ||= i === len - 1;

      root = root.children[j];
    }
  }

  search(word: string): boolean {
    const len = word.length;
    const stack: Array<Tree & { index: number }> = [{ ...this.root, index: 0 }];
    while (stack.length) {
      const { children = [], isWord, index } = stack.pop();
      if (index === len && isWord) {
        return true;
      }
      if (index === len) {
        continue;
      }
      const j = word.charCodeAt(index);
      if (j < 97) {
        stack.push(...children.filter(Boolean).map((i) => ({ ...i, index: index + 1 })));
      } else {
        if (children[j]) {
          stack.push({ ...children[j], index: index + 1 });
        }
      }
    }

    return false;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
