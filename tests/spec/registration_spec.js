describe('Should register a Volunteer',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/registration');
	});

	it('get a response from the db', function() {
		element(by.input('user.name')).sendKeys('Customer');
		element(by.input('user.username')).sendKeys('Gabriel');
		element(by.input('user.password')).sendKeys('12345678');
		element(by.input('user.passwordConfirm')).sendKeys('12345678');
		element(by.input('user.email')).sendKeys('Gab@gmail.com');
		element(by.select("useraccept"));
		element(by.select("isorganisation"));
		var elem = ptor.findElement(protractor.By.id('Register'));
		elem.click();
		//expect(element(by.input('user.passwordConfirm')).getText()).toEqual('12345678');
		//expect(element('input[name="worktype"]:checked').val()).toBe('parttime');
		
  });
});
