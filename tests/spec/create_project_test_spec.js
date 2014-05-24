describe('loads the create project page',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/newProject');
	});

	it('test fields for input', function(){
		element(by.input('projectname')).sendKeys('Example');
		element(by.textarea('projectdescription')).sendKeys('all the values go here');
		//expect(element(by.binding('projectname')).getText()).toEqual('Example');
		//expect(element(by.input('projectdescription')).getText()).toEqual('all the values go here');
	});
});