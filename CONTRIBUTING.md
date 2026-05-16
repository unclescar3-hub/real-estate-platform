# Contributing to Real Estate Platform

Thank you for your interest in contributing! We appreciate your effort to improve this project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/real-estate-platform.git`
3. Add upstream: `git remote add upstream https://github.com/unclescar3-hub/real-estate-platform.git`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process, dependencies, etc.

### Examples
```
feat(auth): add two-factor authentication
fix(api): resolve pagination bug in property listing
docs(readme): update installation instructions
test(properties): add unit tests for search filter
```

## 🔍 Code Quality

Before submitting a PR:

```bash
# Run linting
npm run lint:fix

# Format code
npm run format

# Run tests
npm test

# Check coverage
npm run test:coverage
```

All tests must pass and code coverage should be >= 80%.

## 📋 Pull Request Process

1. Update documentation if you've changed APIs or features
2. Add tests for new functionality
3. Ensure all tests pass: `npm test`
4. Ensure code is properly formatted: `npm run format`
5. Fill out the PR template completely
6. Link related issues: `Closes #123`

### PR Title Format
Follow conventional commits:
```
feat: add property favorites feature
fix: resolve search filter bug
docs: update API documentation
```

## 🏗️ Development Workflow

### Setting Up Development Environment

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

### Testing Requirements

- Write unit tests for new functions
- Write integration tests for API endpoints
- Achieve at least 80% code coverage
- Use descriptive test names

```bash
# Run specific test file
npm test -- path/to/test.js

# Run tests matching pattern
npm test -- --testNamePattern="auth"

# Debug tests
node --inspect-brk node_modules/.bin/jest --runInBand
```

## 📚 Documentation

When adding features:

1. Update README.md if user-facing
2. Add JSDoc comments to functions
3. Update API documentation
4. Add examples if applicable

### JSDoc Example
```javascript
/**
 * Validates email address
 * @param {string} email - The email to validate
 * @returns {boolean} True if valid email format
 * @throws {Error} If email is empty
 */
function validateEmail(email) {
  // implementation
}
```

## 🐛 Reporting Bugs

Use the [Bug Report Template](https://github.com/unclescar3-hub/real-estate-platform/issues/new?template=bug_report.md):

- Clear, descriptive title
- Detailed description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details

## ✨ Suggesting Features

Use the [Feature Request Template](https://github.com/unclescar3-hub/real-estate-platform/issues/new?template=feature_request.md):

- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Any related issues

## 🔐 Security

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

## 📚 Additional Resources

- [Project Roadmap](./ROADMAP.md)
- [Security Policy](./SECURITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [API Documentation](./docs/API.md)

## ❓ Questions?

- Check existing issues and discussions
- Ask in GitHub Discussions
- Contact the maintainers

## 🙏 Thank You!

Every contribution, no matter how small, helps make this project better. We're grateful for your support!

---

**Happy Contributing!** 🎉
