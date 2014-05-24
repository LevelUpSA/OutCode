describe('Should register an Organisation',function(){

	var ptor;

	beforeEach(function(){
		ptor = protractor.getInstance();
		browser.get('http://10.25.3.79:4000/index.html#/registration');
	});

	it('get a response from the db', function() {
		element(by.input('user.name')).sendKeys('Gab');
		//expect(element(by.binding('user.name')).getText()).toEqual('Gab');

		element(by.input('user.username')).sendKeys('Tester');
		//expect(element(by.binding('user.username')).getText()).toEqual('Tester');

		element(by.input('user.password')).sendKeys('12345678');
		//expect(element(by.binding('user.password')).getText()).toEqual('12345678');

		element(by.input('user.confirm')).sendKeys('12345678');
		//expect(element(by.binding('user.confirm')).getText()).toEqual('12345678');

		
		element(by.input('user.email')).sendKeys('Gab@gmail.com');
		//expect(element(by.binding('projectname')).getText()).toEqual('Gab@gmail.com');

		element(by.select("selectedAction.OrgStatus"));
		element(by.input('organiser.name')).sendKeys('CompanyA');
		//expect(element(by.binding('organiser.name')).getText()).toEqual('CompanyA');

		element(by.input('organiser.description')).sendKeys('Big Money');
		//expect(element(by.binding('organiser.description')).getText()).toEqual('Big Money');

		element(by.select("selectedAction.AgreeStatus"));

		var elem = ptor.findElement(protractor.By.id('registration'));
		elem.click();
		//expect(element(by.binding('organiser.description')).getText()).toEqual('Big Money');

		//expect(element(by.input('user.password')).getText()).toEqual('user.confirm');

  });
});
