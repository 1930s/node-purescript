'use strict';

const {writeFileSync} = require('fs');
const {join} = require('path');

const {bin, name} = require('./package.json');
const content = `This is a placeholder file of a PureScript binary installed with npm.
If you see this file, that means the installation has failed
and the placeholder has not been replaced with a valid binary.
Try installing \`${name}\` npm package again.
`;

writeFileSync(join(__dirname, Object.values(bin)[0]), content, {mode: '755'});
