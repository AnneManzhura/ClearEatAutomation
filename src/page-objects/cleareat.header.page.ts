export class CleareatHeaderPage {

    get loginBtn(): WebdriverIO.Element {
        return $('a[href$=\'#/login\']');
    }

    get logoutBtn(): WebdriverIO.Element {
        return $('a*=Вийти');
    }

    get historyBtn(): WebdriverIO.Element {
        return $('a[href$=\'#/history\']');
    }

    get ordersBtn(): WebdriverIO.Element {
        return $('a[href$=\'#/admin\']');
    }

    get addBtn(): WebdriverIO.Element {
        return $('a[href$=\'#/add\']');
    }

    get menu(): WebdriverIO.Element {
        return $('div.menu');
    }

    get cart(): WebdriverIO.Element {
        return $('a.cart mat-icon');
    }

    open (): void {
        return browser.url('https://cleareat.herokuapp.com');
    }

    getCounterOnCart(): number {
        return +(this.cart.$('span.cart-badge').getText());
    }
}

