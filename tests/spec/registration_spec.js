describe('Should register a Volunteer',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/registration');
	});

	it('get a response from the db', function() {
		element(by.input('user.name')).sendKeys('Gab');
		element(by.input('user.username')).sendKeys('Gab');
		element(by.input('user.password')).sendKeys('Gab');
		element(by.input('user.confirm')).sendKeys('Gab');
		element(by.input('user.email')).sendKeys('Gab');
		element(by.select("selectedAction.UserStatus"));
		element(by.select("selectedAction.AgreeStatus"));
		var elem = ptor.findElement(protractor.By.id('registration'));
		elem.click();
  });
});
