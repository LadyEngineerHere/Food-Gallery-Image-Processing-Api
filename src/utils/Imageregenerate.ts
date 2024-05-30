import sharp from 'sharp';
import path from 'path';

/**
 * Resizes an image to the specified dimensions.
 * @param filename - The filename of the original image.
 * @param height - The desired height of the resized image.
 * @param width - The desired width of the resized image.
 * @returns A Promise resolving to the resized image buffer.
 */
const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  // Construct the absolute path to the original image file
  const sourceImagePath = path.resolve(`public/images/full/${filename}.jpg`);
  
  // Resize the image using Sharp library
  return sharp(sourceImagePath)
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover
    })
    .toBuffer();
};

/**
 * Generates the filepath for the resized image.
 * @param filename - The filename of the original image.
 * @param height - The desired height of the resized image.
 * @param width - The desired width of the resized image.
 * @returns The filepath for the resized image.
 */
const resizedImagePath = (
  filename: string,
  height: number,
  width: number
): string => {
  // Construct the filepath for the resized image
  return `public/images/resized/${filename}${height}x${width}.jpg`;
};

// Testing: Resize an image and log the result
const testFilename = 'example'; // Replace with an actual filename for testing
const testHeight = 300; // Replace with the desired height for testing
const testWidth = 400; // Replace with the desired width for testing

resizeImage(testFilename, testHeight, testWidth)
  .then((resizedBuffer) => {
    // Log the result (for testing purposes)
    console.log('Resized image buffer:', resizedBuffer);
  })
  .catch((error) => {
    console.error('Error resizing image:', error);
  });

export { resizeImage, resizedImagePath };
