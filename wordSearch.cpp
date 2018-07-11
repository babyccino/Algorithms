bool existInner(std::vector<std::vector<char>>& board, const std::string& word,
  const int& i, const int& j, int pos) {
  if (board[j][i] == '*') return false;
  if (word[pos] != board[j][i]) return false;
  if (++pos == word.size()) return true;

  char temp = board[j][i];
  board[j][i] = '*';
  if (i - 1 >= 0)
    if (existInner(board, word, i - 1, j, pos)) return true;
  if (i + 1 < board[j].size())
    if (existInner(board, word, i + 1, j, pos)) return true;
  if (j - 1 >= 0 && i < board[j - 1].size())
    if (existInner(board, word, i, j - 1, pos)) return true;
  if (j + 1 < board.size() && i < board[j + 1].size())
    if (existInner(board, word, i, j + 1, pos)) return true;
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
