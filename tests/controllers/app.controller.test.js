const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

// import our getIndexPage function
const indexPage = require("../../controllers/app.controller.js");

describe("getIndexPage", () => {
	it("sould return index page", () => {
		let req = {}
		let res = {
			send: sinon.spy()
		}
		indexPage.getIndexPage(req, res)
		console.log(res.send);
		//expect to get an 'Error' on first call
		expect(res.send.firstCall.args[0]).to.equal("Hey");
	});
});
