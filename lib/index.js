/**
 * @fileoverview A custom eslint plugin made by David Hazra
 * @author David Hazra
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rulesDir = path.join(__dirname, 'rules');
const rules = fs.readdirSync(rulesDir)
  .reduce((acc, file) => {
    const ruleName = path.basename(file, '.js');
    acc[`@dahazra/${ruleName}`] = 'error';
    return acc;
}, {});

module.exports = {
    rules: requireIndex(rulesDir),
    configs: {
        recommended: {
            rules
        }
    }
};
  