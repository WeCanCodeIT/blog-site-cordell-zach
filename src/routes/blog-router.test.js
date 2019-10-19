const app = require("../../app");
const BlogController = require('../controllers/blog-controller');
const supertest = require("supertest");
const underTest = supertest(app);

describe("GET /blog", () => {
    test("should receive an HTTP status code of 200", () => {
        underTest
        .get("/blog")
        .expect(200)
        .end((err, res) => {
            done();
        })
    });
  
    test("should call BlogController.renderAll method once", () => {
        BlogController.renderAll = jest.fn();
        underTest.get("/category").end((err, res) => {
          expect(BlogController.renderAll).toHaveBeenCalledTimes(1);
          done();
        });
    })
});