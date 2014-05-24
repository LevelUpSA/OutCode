describe('Should register an Organiser',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/registration');
	});

	it('get a response from the user', function() {
		element(by.input('user.name')).sendKeys('Gabriel');
		element(by.input('user.username')).sendKeys('Tester');
		element(by.input('user.password')).sendKeys('12345678');
		element(by.input('user.passwordConfirm')).sendKeys('12345678');
		element(by.input('user.email')).sendKeys('Gab@gmail.com');
		element(by.select("isorganisation"));

		//element(by.input('user.organisationname')).sendKeys('CompanyA');
		//element(by.textarea('user.organisationdescription')).sendKeys('Big Money');
		element(by.select("useraccept"));
		
		var elem = ptor.findElement(protractor.By.id('Register'));
		elem.click();
		//expect(element(by.input('user.password')).getText()).toEqual('user.passwordConfirm');
  });
});
