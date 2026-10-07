import type { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class ConsoleReporter implements Reporter {
  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status === 'passed' ? 'PASS' : 'FAIL';
    const duration = `${result.duration}ms`;
    console.log(`[${status}] ${test.title} (${duration})`);
  }

  onEnd() {
    console.log('\nTest run complete.');
  }
}

export default ConsoleReporter;
