const fileNames = [
    // LEAVE HERE FOR CLI: Globals Components
    'Subtitle',
    'Title',
    'HeaderSection',
    'Footer',
    'Header',
    'DisplayCard',
    'TextCard',
    'TwoGrid',
    'Carsouels',
];

const index = fileNames.reduce((dictionary, file) => {
    dictionary[file] = require(`./components/${file}`);
    return dictionary;
}, {});

module.exports = index;
