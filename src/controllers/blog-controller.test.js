const BlogController = require('../controllers/blog-controller');
const blogService = require('../services/blog-service');

describe("BlogController", () => {
    test("render all should be called once", async () => {
        //arrange
       const requestMock = {}
       const responseMock = {
        render: jest.fn()
       };
       blogService.findAll = jest.fn(() => []);
        //act
        await BlogController.renderAll(requestMock, responseMock)
        //assert
        expect(responseMock.render).toHaveBeenCalledTimes(1)
        expect(responseMock.render).toHaveBeenCalledWith("blogs/all", {blog: []})
    })
});