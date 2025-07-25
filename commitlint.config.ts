import { RuleConfigSeverity, UserConfig } from '@commitlint/types';

// Define commonly used constants
const SCOPE_ENUM = ['client', 'common', 'config', 'scripts', 'deps', 'ci', 'docs', 'test'];

const TYPE_ENUM = [
  'feat', // A new feature
  'fix', // A bug fix
  'docs', // Documentation updates
  'chore', // Miscellaneous tasks
  'style', // Code style changes (non-functional)
  'refactor', // Code restructuring without behavior change
  'ci', // Continuous Integration
  'test', // Adding or updating tests
  'revert', // Reverting previous changes
  'perf', // Performance improvements
];

const commitLintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce scope usage and validation
    'scope-enum': [RuleConfigSeverity.Error, 'always', SCOPE_ENUM],

    // Enforce type usage and validation
    'type-enum': [RuleConfigSeverity.Error, 'always', TYPE_ENUM],

    // Body formatting rules
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],

    // Footer formatting rules
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],

    // Header formatting rules
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
    'header-trim': [RuleConfigSeverity.Error, 'always'],

    // Subject formatting rules
    'subject-case': [
      RuleConfigSeverity.Error,
      'never',
      ['start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],

    // Type formatting rules
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
  },
  ignores: [
    (commit: string) =>
      commit.startsWith('Merge') || commit === 'Initial commit' || commit.includes('[skip ci]'), // Common bot-related commit
  ],
};

export default commitLintConfig;
