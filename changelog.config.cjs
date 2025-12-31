module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji}{subject}",
  list: ["feat", "fix", "docs", "refactor", "style", "chore"],
  questions: ["type", "subject", "body"],
  types: {
    feat: {
      description: "新機能の追加",
      emoji: "🚀",
      value: "feat",
    },
    fix: {
      description: "バグ修正",
      emoji: "🛠️",
      value: "fix",
    },
    docs: {
      description: "ドキュメントの更新",
      emoji: "📘",
      value: "docs",
    },
    refactor: {
      description: "仕様追加・バグ修正を伴わないコード改善",
      emoji: "🧩",
      value: "refactor",
    },
    style: {
      description: "コードの書式・スタイル調整（ロジック変更なし）",
      emoji: "🖼️",
      value: "style",
    },
    chore: {
      description: "ビルド・依存関係・開発環境などの雑務",
      emoji: "📦",
      value: "chore",
    },
  },
};
