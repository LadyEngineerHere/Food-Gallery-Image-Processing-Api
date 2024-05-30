import express from 'express';
import images from './api/images'; // Importing the images router
import fs from 'fs';
import path from 'path';

// Create a router instance for handling routes
const routes = express.Router();

// Route handler for the root endpoint
routes.get('/', (req: express.Request, res: express.Response) => {
  // Read filenames of images from the 'public/images/full' directory
  const imagesFilenames: string[] = fs
    .readdirSync(path.resolve('public/images/full'))
    .map((filename) => filename.slice(0, -4)); // Remove the file extension
  // Render the index view and pass the filenames as data
  res.render('index', { filenames: imagesFilenames });
});

// Mount the images router under the '/images' endpoint
routes.use('/images', images);

// Export the router for use in other modules
export default routes;
