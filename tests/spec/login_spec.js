describe('should load the login', function() {

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/login');
	});

	it('the input box should show a name', function() {
		element(by.input('user.username')).sendKeys('Gab');
		//expect(element(by.binding('user.username')).getText()).toEqual('Gab');

		element(by.input('user.password')).sendKeys('12345678');
		//expect(element(by.binding('user.password')).getText()).toEqual('12345678');
		
		var elem = ptor.findElement(protractor.By.id('login'));
		elem.click();
		//expect(element(by.binding('projectname')).getText()).toEqual('Example');

	});

});