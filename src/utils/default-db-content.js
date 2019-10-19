const BlogsTable = require('../models/Blog.sequelize');

const defaultBlogPopulation = [
    {
        author: "Zachary Kramer",
        title: "'til the day I die",
        body: "It's funny cause it's true!",
        genre: "Sardonic Autobiography",
        tags: "not a number",
        publishDate: "tomorrow"
    }
];

const defaultGenrePopulation = [
    //some other shit
];

const buildDefaultContent = async () => {
    defaultBlogPopulation.forEach(async defaultBlogs => {
        let newBlog = await BlogsTable.create(defaultBlogs);
    })
}


module.exports = buildDefaultContent;