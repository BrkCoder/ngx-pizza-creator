/// <reference types="cypress" />

import * as cypressTypeScriptPreprocessor from './cy-ts-preprocessor';
module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  return config;
};