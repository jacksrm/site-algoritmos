import fs from 'fs';

function readDir() {
  const testFolder = __dirname + '/../public/images';
  let struct = [];

  fs.readdirSync(testFolder).forEach((file) => {
    struct.push(file);
  });

  return struct;
}

const listImages = readDir();

export default listImages; 