import express from 'express';
import path from 'path';
import { resizeImage, resizedImagePath } from '../../utils/Imageregenerate';
import { promises as fsPromises } from 'fs';

const images = express.Router();

images.get('/', async (req, res) => {
  try {
    const filename = req.query.filename as string;
    const height = parseInt(req.query.height as string);
    const width = parseInt(req.query.width as string);
    const outputImgPath = resizedImagePath(filename, height, width);
    
    console.log('Requested filename:', filename);
    console.log('Requested height:', height);
    console.log('Requested width:', width);
    console.log('Output image path:', outputImgPath);
    
    if (!await imageExists(outputImgPath)) {
      console.log('Resized image does not exist. Generating...');
      const resizedImage = await resizeImage(filename, height, width);
      await fsPromises.writeFile(outputImgPath, resizedImage);
      console.log('Resized image saved at:', outputImgPath);
    } else {
      console.log('Resized image already exists at:', outputImgPath);
    }
    
    res.sendFile(path.resolve(outputImgPath));
  } catch (err) {
    console.error('Error processing image:', err);
    res.render('errors', { message: err.message });
  }
});

async function imageExists(filePath: string): Promise<boolean> {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

export default images;
