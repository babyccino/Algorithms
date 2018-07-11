/*
Problem description:

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board = {
  {'A','B','C','E'},
  {'S','F','C','S'},
  {'A','D','E','E'}
}

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Solution is based on DFS.

*/

bool existInner(std::vector<std::vector<char>>& board, const std::string& word,
  const int& i, const int& j, int pos) {
  // visited cells are marked with '*'
  if (board[j][i] == '*') return false;
  if (word[pos] != board[j][i]) return false;
  if (++pos == word.size()) return true;

  char temp = board[j][i];
  board[j][i] = '*';
  // the algorithm checks if the cell left of the one which is being checked is in range
  // then recursively checks if it is part of the word being checked
  if (i - 1 >= 0)
    if (existInner(board, word, i - 1, j, pos)) return true;
  // then right is checked
  if (i + 1 < board[j].size())
    if (existInner(board, word, i + 1, j, pos)) return true;
  // then above
  if (j + 1 < board.size() && i < board[j + 1].size())
    if (existInner(board, word, i, j + 1, pos)) return true;
  // then below
  if (j - 1 >= 0 && i < board[j - 1].size())
    if (existInner(board, word, i, j - 1, pos)) return true;
  board[j][i] = temp;

  return false;
}

bool exist(std::vector<std::vector<char>>& board, const std::string& word) {
  for (int j = 0; j < board.size(); ++j) {
    for (int i = 0; i < board[j].size(); ++i) {
      if (existInner(board, word, i, j, 0)) return true;
    }
  }
  return false;
}
