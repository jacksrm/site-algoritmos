"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);

function readDir() {
  const testFolder = __dirname + '/../../public/images';
  let struct = [];

  _fs2.default.readdirSync(testFolder).forEach((file) => {
    struct.push(file);
  });

  return struct;
}

const listImages = readDir();

exports. default = listImages; 