module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji} {subject}",
  list: ["feat", "chore", "refactor", "fix", "style", "docs"],
  questions: ["type", "subject"],
  types: {
    feat: {
      description: "新機能の追加や既存機能の拡張（ユーザーに影響のある変更）",
      emoji: "🚀",
      value: "feat",
    },
    chore: {
      description: "ビルド処理、依存関係、設定ファイルの更新（機能に影響しない作業）",
      emoji: "📦",
      value: "chore",
    },
    refactor: {
      description: "機能変更を伴わないコード改善（内部構造の最適化、可読性向上）",
      emoji: "🧩",
      value: "refactor",
    },
    fix: {
      description: "バグ修正やエラーの解決（既存機能の不具合を直す）",
      emoji: "🔧",
      value: "fix",
    },
    style: {
      description:
        "CSS・レイアウト・UI の見た目調整（色、余白、フォント、レスポンシブ対応など）",
      emoji: "🎨",
      value: "style",
    },
    docs: {
      description: "ドキュメントの追加・修正（README、コメント、仕様書など）",
      emoji: "📓",
      value: "docs",
    },
  },
};
