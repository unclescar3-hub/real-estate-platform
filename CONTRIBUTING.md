# Contributing to Real Estate Platform

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and professional in all interactions. We are committed to providing a welcoming and inclusive environment.

## Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- Git
- MongoDB or PostgreSQL (for testing)

### Development Setup

1. **Fork the repository**
   ```bash
   Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/real-estate-platform.git
   cd real-estate-platform
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/unclescar3-hub/real-estate-platform.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create `.env` file**
   ```bash
   cp .env.example .env
   # Edit .env with your local settings
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Creating a Branch

Create a branch with a descriptive name:

```bash
git checkout -b feature/add-property-filters
# or for fixes:
git checkout -b fix/property-search-bug
# or for documentation:
git checkout -b docs/update-api-docs
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `perf/` - Performance improvements

### Making Changes

1. **Write your code** following our style guidelines
2. **Test your changes**
   ```bash
   npm test
   ```
3. **Check linting**
   ```bash
   npm run lint
   ```
4. **Format code**
   ```bash
   npm run format
   ```

### Commit Messages

Follow Conventional Commits format:

```
type(scope): subject

body

footer
```

**Types:**
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Build process, dependencies, etc.

**Examples:**
```
feat(property): add image upload functionality
fix(search): correct pagination offset calculation
docs(readme): update installation instructions
test(auth): add JWT verification tests
```

### Pushing Your Changes

```bash
# Keep your branch up to date
git fetch upstream
git rebase upstream/main

# Push to your fork
git push origin feature/your-feature
```

## Submitting a Pull Request

### Before Submitting

- [ ] Your code follows the style guidelines
- [ ] All tests pass: `npm test`
- [ ] No linting errors: `npm run lint`
- [ ] Code is formatted: `npm run format`
- [ ] Commits are meaningful
- [ ] Branch is up to date with `main`

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #123

## Testing
Describe how you tested this change

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No new warnings generated
```

### PR Review Process

1. **Automated Checks**: CI/CD pipeline runs
2. **Code Review**: Team reviews your code
3. **Requested Changes**: Address feedback
4. **Approval**: PR approved by maintainers
5. **Merge**: Your PR is merged to main

## Testing Guidelines

### Unit Tests

```bash
npm test
```

Write tests for:
- New features
- Bug fixes
- Edge cases
- Error handling

### Test Structure

```javascript
describe('Feature Name', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionUnderTest(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

### Test Coverage

Maintain minimum 80% coverage:

```bash
npm run test:coverage
```

## Code Style Guidelines

### JavaScript/Node.js

- Use ES6+ features
- Use async/await over promises
- Use const/let, avoid var
- Use meaningful variable names
- Maximum line length: 100 characters

### Comments

```javascript
// Good: Explains why, not what
const expiryTime = now + (24 * 60 * 60 * 1000); // 24 hours in milliseconds

// Bad: States the obvious
const x = y + 1; // add one to y
```

### File Organization

```
components/
├── PropertyCard/
│   ├── PropertyCard.jsx
│   ├── PropertyCard.module.css
│   ├── PropertyCard.test.jsx
│   └── index.js
```

## Documentation

- Keep README.md updated
- Add JSDoc comments for functions
- Update API docs for new endpoints
- Add inline comments for complex logic

### JSDoc Example

```javascript
/**
 * Searches for properties based on criteria
 * @param {string} location - City or address
 * @param {number} minPrice - Minimum price filter
 * @param {number} maxPrice - Maximum price filter
 * @returns {Promise<Array>} Array of matching properties
 * @throws {Error} If location is empty
 */
async function searchProperties(location, minPrice, maxPrice) {
  // implementation
}
```

## Issue Guidelines

### Reporting Bugs

**Title:** Brief, descriptive title

**Description:**
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/logs (if applicable)
- Environment (browser, OS, Node version)

### Requesting Features

**Title:** Brief feature description

**Description:**
- Problem it solves
- Proposed solution
- Alternative solutions considered
- Additional context

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release PR
4. Merge to main
5. Create GitHub release
6. NPM publish (if applicable)

## Helpful Resources

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [React Best Practices](https://react.dev/learn)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Getting Help

- Check [existing issues](https://github.com/unclescar3-hub/real-estate-platform/issues)
- Review [Discussions](https://github.com/unclescar3-hub/real-estate-platform/discussions)
- Ask questions in PR comments
- Email: dev@realestate.com

## Recognition

Contributors are recognized in:
- `CONTRIBUTORS.md`
- GitHub contributors page
- Release notes

---

**Thank you for contributing!** 🙌

Your efforts help make Real Estate Platform better for everyone.