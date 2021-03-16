export class CleareatLoginPage {

    get loginBtn(): WebdriverIO.Element {
        return $('form button.main-bg')
    }

    get loginForm(): WebdriverIO.Element {
        return $('div.card')
    }

    get alert():WebdriverIO.Element {
        return  $('form div.alert');
    }

    get emailField():WebdriverIO.Element {
        return  $('input[formcontrolname$=\'username\']');
    }

    get passwordField():WebdriverIO.Element {
        return  $('input[formcontrolname$=\'password\']');
    }

}