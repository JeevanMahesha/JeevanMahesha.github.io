/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: ["main"],
    plugins: [
        ["@semantic-release/commit-analyzer", {
            "releaseRules": [
                { "type": "feat", "release": "major" },
                { "type": "build", "release": "patch" },
                { "type": "chore", "release": "patch" },
                { "type": "refactor", "release": "patch" },
                { "type": "fix", "release": "minor" },
                { "type": "test", "release": "minor" },
                { "type": "ci", "release": "minor" },
                { "type": "docs", "release": "minor" },
                { "type": "style", "release": "minor" },
                { "type": "perf", "release": "patch" },
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        "@semantic-release/github"
    ]
};
