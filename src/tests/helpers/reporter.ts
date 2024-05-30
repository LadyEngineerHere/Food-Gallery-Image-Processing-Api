// Import necessary modules from 'jasmine-spec-reporter' package
import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption
} from 'jasmine-spec-reporter';

// Define a class extending DisplayProcessor for customization
class CustomProcessor extends DisplayProcessor {
  // Override the displayJasmineStarted method to prepend 'TypeScript' to the log message
  public displayJasmineStarted(info: jasmine.SuiteInfo, log: string): string {
    return `TypeScript ${log}`;
  }
}

// Clear existing Jasmine reporters and add a new SpecReporter with custom options
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE // Set displayStacktrace option to NONE
    },
    customProcessors: [CustomProcessor] // Add CustomProcessor as a custom display processor
  })
);
