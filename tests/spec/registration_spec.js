describe('Should register a Volunteer',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/registration');
	});

	it('get a response from the db', function() {
		element(by.input('user.name')).sendKeys('CustomerName');
		//expect(element(by.binding('user.name')).getText()).toEqual('CustomerName');

		element(by.input('user.username')).sendKeys('Gabriel');
		//expect(element(by.binding('user.username')).getText()).toEqual('Gabriel');

		element(by.input('user.password')).sendKeys('12345678');
		//expect(element(by.binding('user.password')).getText()).toEqual('12345678');

		element(by.input('user.confirm')).sendKeys('12345678');
		element(by.input('user.email')).sendKeys('Gab@gmail.com');
		//expect(element(by.binding('user.email')).getText()).toEqual('Gab@gmail.com');

		element(by.select("selectedAction.UserStatus"));
		element(by.select("selectedAction.AgreeStatus"));
		
		var elem = ptor.findElement(protractor.By.id('registration'));
		elem.click();
		//expect(element(by.binding('user.email')).getText()).toEqual('Gab@gmail.com');

		//expect(element(by.input('user.confirm')).getText()).toEqual('12345678');

		
  });
});
