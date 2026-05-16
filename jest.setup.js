// Global test setup
beforeAll(() => {
  // Setup code here
});

afterAll(() => {
  // Cleanup code here
});

// Suppress console logs during tests
if (process.env.NODE_ENV === 'test') {
  global.console = {
    ...console,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    // Keep error so test failures are visible
  };
}
