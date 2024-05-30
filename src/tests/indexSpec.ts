// Import the 'app' module from the parent directory
import app from '../app';
// Import 'supertest' for making HTTP requests to the 'app'
import supertest from 'supertest';

// Create a request object using 'supertest' and the imported 'app'
const request = supertest(app);

// Describe block for testing endpoint responses
describe('Test endpoint responses', () => {
  // Test case for GET request to '/api' endpoint
  it('Gets /api endpoint', async (done) => {
    // Send a GET request to '/api' endpoint and await the response
    const response = await request.get('/api');
    // Assert that the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Invoke 'done()' to signal completion of the async test
    done();
  });
});
