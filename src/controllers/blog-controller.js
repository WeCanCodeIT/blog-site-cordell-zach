const blogService = require('../services/blog-service');
const blogRouter = require('../routes/blog-router');
const blog = require('../models/Blog');

class BlogController {
  static async addBlog (req, res) {
    const author = req.body.author;
    const title = req.body.title;
    const blogBody = req.body.blogBody;
    const genre = req.body.genre;
    const tags = req.body.tags;
    const publishDate = req.body.publishDate;

    await blogService.addBlog(new Blog(author, publishDate, blogBody, title, genre, tags));
    res.redirect('/blogs');
  }
  
  static async renderAll (req, res) {
      // res.render("/blogs/all", { Blog: await blogService.findAll()});
    try {
      const allBlogs = await blogService.findAll();
      res.render('/blogs/all', { allBlogs });
    } catch (error) {
      res.render("error", {error});
    }

  }

  static async renderSingle (req, res) {
    const blog = await blogService.findById(req.params.id);
    blog.body = await blog.getBody();
    res.render("../blogs/single", { blog });
  }
}

module.exports = BlogController;