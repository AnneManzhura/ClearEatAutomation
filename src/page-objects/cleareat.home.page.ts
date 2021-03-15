export class CleareatHomePage {

    get loginBtn(): WebdriverIO.Element {
        return $('a[href$=\'#/login\']')
    }



    open (): void {
        return browser.url('https://cleareat.herokuapp.com');
    }
}