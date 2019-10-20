const BlogSequelize = require('../models/Blog.sequelize');
const BlogService = require('../services/blog-service');

describe('Blog Service should...', () => {
    test('get the findAll from the sequelize model', () => {
        BlogSequelize.findAll = jest.fn(() => []);    

        BlogService.findAll();

        expect(BlogSequelize.findAll).toHaveBeenCalledTimes(1);
    })
})