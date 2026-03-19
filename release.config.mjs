/**
 * Semantic-release for this Next.js site.
 * Uses the `conventionalcommits` preset so behavior matches @commitlint/config-conventional.
 *
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
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
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: '✨ Features', hidden: false },
            { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
            { type: 'perf', section: '🚀 Performance', hidden: false },
            { type: 'revert', section: '⏪ Reverts', hidden: false },
            { type: 'docs', section: '📚 Documentation', hidden: false },
            { type: 'style', section: '🎨 Style', hidden: false },
            { type: 'refactor', section: '🛠 Refactors', hidden: false },
            { type: 'test', section: '🧪 Tests', hidden: false },
            { type: 'build', section: '📦 Build', hidden: false },
            { type: 'ci', section: '🤖 CI', hidden: false },
            { type: 'chore', section: '🧹 Chores', hidden: false },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/exec',
      { prepareCmd: 'pnpm install --no-frozen-lockfile' },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'pnpm-lock.yaml', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

export default config;
