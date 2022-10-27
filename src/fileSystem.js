/*
  Design an in-memory file system to simulate the following functions:

  ls: Given a path in string format. If it is a file path, return a list that only contains this file's name.
  If it is a directory path, return the list of file and directory names in this directory.
  Your output (file and directory names together) should in lexicographic order.

  mkdir: Given a directory path that does not exist, you should make a new directory according to the path.
  If the middle directories in the path don't exist either, you should create them as well.
  This function has void return type.

  addContentToFile: Given a file path and file content in string format.
  If the file doesn't exist, you need to create that file containing given content.
  If the file already exists, you need to append given content to original content. This function has void return type.

  readContentFromFile: Given a file path, return its content in string format.

  Example:
  Input: 
  ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
  [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

  Output:
  [null,[],null,null,["a"],"hello"]

  Explanation:
  filesystem

  Note:
  You can assume all file or directory paths are absolute paths which begin with / and do not end with / except that the path is just "/".
  You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content
    or list a directory or file that does not exist.
  You can assume that all directory names and file names only contain lower-case letters, and same names won't exist in the same directory\
*/

class Node {
  content = null;
  nodes = new Map();
}

class FileSystem {
  root = new Node();

  constructor() {}

  _traverse(path) {
    if (path === "/") return this.root;
    const folders = path.split('/').slice(1);

    let node = this.root;
    for (const folder of folders) {
      node = node.nodes.get(folder);
    }

    return node;
  }

  _traverseAndCreate(path) {
    const folders = path.split('/').slice(1);

    let node = this.root;
    for (const folder of folders) {
      if (!node.nodes.get(folder)) {
        node.nodes.set(folder, new Node());
      }
      node = node.nodes.get(folder);
    }

    return node;
  }
  
  ls(path) {
    const node = this._traverse(path);

    if (node.content) return [path.match(/[^/]*$/)[0]];
    else return Array.from(node.nodes.keys());
  }

  mkdir(path) {
    this._traverseAndCreate(path);
    
    return null;
  }

  addContentToFile(path, content) {
    const node = this._traverseAndCreate(path);

    if (node.content) node.content += content;
    else node.content = content;

    return null;
  }

  readContentFromFile(path) {
    const node = this._traverse(path);

    return node.content;
  }
}

const fileSystem = new FileSystem();
fileSystem.mkdir("/a");
fileSystem.mkdir("/a/b");
console.log(fileSystem.ls("/a"));
fileSystem.addContentToFile("/b/c", "hi");
console.log(fileSystem.readContentFromFile("/b/c"));
console.log(fileSystem.ls("/b"));
console.log(fileSystem.ls("/b/c"));
console.log(fileSystem.ls("/"));
