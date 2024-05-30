import { resizeImage } from '../utils/Imageregenerate';

// Describe block to group related test cases
describe('Testing image processing', () => {
  
  // Test case to verify error handling for invalid filename
  it('Throws an error if an invalid filename is given', async () => {
    // Using expectAsync to handle asynchronous expectations
    await expectAsync(resizeImage('burger', 30, 30)).toBeRejectedWithError(
      Error, // Expected error type
      'Input file is invalid' // Expected error message
    );
  });

  // Test case to verify successful completion of the operation
  it('Successfully completes the operation when the correct filename, height, and width values are given.', async () => {
    // Using expectAsync to handle asynchronous expectations
    await expectAsync(resizeImage('pasta', 60, 30)).toBeResolved();
  });
});
