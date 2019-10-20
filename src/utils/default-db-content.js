const BlogsTable = require('../models/Blog.sequelize');

const defaultBlogPopulation = [
    {
        author: "Zachary Kramer",
        title: "'til the day I die",
        body: "It's funny cause it's true!",
        genre: "Sardonic Autobiography",
        tags: "not a number",
        publishDate: "tomorrow"
    },
    {
        // author: "Zachary Kramer",
        // title: "'til the day I die",
        // body: "It's funny cause it's true!",
        // genre: "Sardonic Autobiography",
        // tags: "not a number",
        // publishDate: "tomorrow"
    }
];

const defaultGenrePopulation = [
    {genreType: "Sardonic Autobiography"},
    {genreType: "Salty Old Fisherman's Tale"},
    {genreType: "Something I read while in the Men's room"},
    {genreType: "Atrocious Anecdotes from Argentina"},
    {genreType: "Things that will make your mother gasp"}

    //some other shit
];

const buildDefaultContent = async () => {
    defaultBlogPopulation.forEach(async defaultBlogs => {
        let newBlog = await BlogsTable.create(defaultBlogs);
    });
};

module.exports = buildDefaultContent;