/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function(params) {
    return `
        body {
            background: ${params.primaryColor};
            font-size: ${params.fontSize}px;
        }
    `;
};

module.exports = generateOverride;