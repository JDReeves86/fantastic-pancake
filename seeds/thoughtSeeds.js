const Thought = require('../models/thought');

const thoughtData = [
    {
        thoughtText: 'I am Immortan Joe and I want my wives!',
        username: 'ImmortanJoe'
    },
    {
        thoughtText: 'The Gigahorse is the coolest car in all of the wasteland',
        username: 'ImmortanJoe'
    },
    {
        thoughtText: 'I wonder what ever happened to the pilot..',
        username: 'MaxRockatansky'
    },
    {
        thoughtText: "That dang feral kid won'&#39;'t stop following me, He'&#39;'s kind of growing on me..",
        username: 'MaxRockatansky'
    },
]

const seedThoughts = async () => {
    await Thought.deleteMany({});
    await Thought.insertMany(thoughtData);
};

module.exports = seedThoughts


