/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    // The branch that triggers a release
    branches: ['main'],
    plugins: [
        // Analyzes commit messages to determine the version bump
        ['@semantic-release/commit-analyzer', {
            preset: 'angular',
            releaseRules: [
                { type: 'docs', scope: 'README', release: 'patch' },
                { type: 'refactor', release: 'minor' },
                { type: 'style', release: 'patch' },
                { type: 'chore', release: 'patch' },
                { type: 'build', release: 'patch' },
                { type: 'ci', release: 'patch' },
                { type: 'test', release: 'minor' },
                { type: 'perf', release: 'major' },
                { type: 'feat', release: 'major' },
                { type: 'fix', release: 'minor' },
            ]
        }],
        // Generates the release notes based on the commits
        ['@semantic-release/release-notes-generator', {
            preset: 'angular',
            presetConfig: {
                types: [
                    { type: 'feat', section: '✨ Features', hidden: false },
                    { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
                    { type: 'perf', section: '🚀 Performance', hidden: false },
                    { type: 'refactor', section: '🛠 Refactors', hidden: true },
                    { type: 'docs', section: '📚 Documentation', hidden: false },
                    { type: 'chore', section: '🧹 Chore', hidden: false },
                    { type: 'build', section: '📦 Build', hidden: false },
                    { type: 'ci', section: '🤖 CI', hidden: false },
                    { type: 'test', section: '🧪 Test', hidden: false },
                    { type: 'style', section: '🎨 Style', hidden: false },
                ]
            }
        }],
        // Updates the CHANGELOG.md file automatically
        '@semantic-release/changelog',
        // Updates the version in package.json
        '@semantic-release/npm',
        // Commits the changelog and package.json back to the repo
        ['@semantic-release/git', {
            assets: ['package.json', 'package-lock.yaml', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        // Creates the GitHub release and uploads any assets
        '@semantic-release/github'
    ]
};