// 単語リストとその意味（JSON形式）
const words = {
  "agree to/with A": {
    "meaning": "Aに同意する、Aと一致する",
    "example": "I agree to your proposal.",
    "japanese": "私はあなたの提案に同意します。"
  },
  "assure A that S V": {
    "meaning": "AにSがVすることを保証する",
    "example": "I assure you that everything will be fine.",
    "japanese": "私はあなたに全てがうまくいくことを保証します。"
  },
  "establish": {
    "meaning": "設立する、確立する",
    "example": "The company was established in 1990.",
    "japanese": "その会社は1990年に設立されました。"
  },
  "compare A with/to B": {
    "meaning": "AをBと比較する",
    "example": "Compare the prices of the two products.",
    "japanese": "2つの製品の価格を比較してください。"
  },
  "persuade A to V": {
    "meaning": "AにVするよう説得する",
    "example": "She persuaded him to join the team.",
    "japanese": "彼女は彼にチームに参加するよう説得しました。"
  }
};

let currentIndex = 0; // 現在の単語インデックス
let currentOrder = []; // テストの順序（順番またはランダム）

// テスト開始
function startTest(order) {
  currentIndex = 0; // インデックスをリセット

  // 順序を設定
  if (order === 'random') {
    currentOrder = shuffle(Object.keys(words));
  } else {
    currentOrder = Object.keys(words);
  }

  // 画面表示を切り替え
  document.getElementById('order-selection').style.display = 'none';
  document.getElementById('word-container').style.display = 'block';

  loadQuestion();
}

// 配列をランダムに並べ替える（シャッフル）
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 問題をロード
function loadQuestion() {
  const wordKey = currentOrder[currentIndex];
  const wordData = words[wordKey];

  document.getElementById("word").textContent = wordKey;

  // 選択肢を生成
  const options = generateOptions(wordData.meaning);
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = ""; // 前の選択肢をクリア

  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option, wordData.meaning);
    choicesDiv.appendChild(button);
  });

  // 結果と例文をリセット
  document.getElementById("result").textContent = "";
  document.getElementById("example").textContent = "";
}

// 選択肢を生成
function generateOptions(correctAnswer) {
  const allMeanings = Object.values(words).map(word => word.meaning);
  const options = [correctAnswer];

  while (options.length < 3) {
    const randomOption = allMeanings[Math.floor(Math.random() * allMeanings.length)];
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  return shuffle(options); // 選択肢をシャッフル
}

// 答えをチェック
function checkAnswer(selectedAnswer, correctAnswer) {
  const resultDiv = document.getElementById("result");
  const exampleDiv = document.getElementById("example");

  if (selectedAnswer === correctAnswer) {
    resultDiv.textContent = "正解！";
    exampleDiv.textContent = `例文: ${words[currentOrder[currentIndex]].example} (${words[currentOrder[currentIndex]].japanese})`;
  } else {
    resultDiv.textContent = "不正解。もう一度選んでください。";
    exampleDiv.textContent = "";
  }
}

// 次の問題へ
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentOrder.length) {
    alert("テストが終了しました！");
    document.getElementById('word-container').style.display = 'none';
    document.getElementById('order-selection').style.display = 'block';
    return;
  }

  loadQuestion();
}
