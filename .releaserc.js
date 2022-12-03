module.exports = {
  "branches": [
    "main"
  ],
  "plugins": [
    [
      "@semantic-release/commit-analyzer", 
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          {"type": "docs", "scope": "README", "release": "patch"},
          {"type": "refactor", "release": "patch"},
          {"type": "style", "release": "patch"},
          {"type": "fix", "release": "patch"},
          {"type": "enhancement", "release": "minor"},
          {"type": "feat", "release": "minor"},
          {"type": "move", "release": false},
          {"type": "remove", "release": false},
          {"type": "chore", "release": "patch"},
          {"type": "ci", "release": false},
          {"type": "revert", "release": "patch"},
          {"type": "test", "release": false}
        ],
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
        "changelogTitle": "# 🚦 CHANGELOG | 변경 사항을 기록해요."
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md"]
      }
    ]
  ]
}
