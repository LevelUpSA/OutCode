describe('should load the login', function() {

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/login');
	});

	it('the input box should show a name', function() {
		element(by.input('user.username')).sendKeys('Gab');
		element(by.input('user.password')).sendKeys('Gab');
		var elem = ptor.findElement(protractor.By.id('login'));
		elem.click();
	});

});