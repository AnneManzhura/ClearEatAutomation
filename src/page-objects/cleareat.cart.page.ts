export class CleareatCartPage {

    get cartBox(): WebdriverIO.Element {
        return $('app-order .mat-card');
    }

    get dishCard(): WebdriverIO.Element {
        return $('dish mat-card-title');
    }

    get orderSum(): number {
        return +($('div.sum b').getText().split(' ')[0]);
    }

    get nextBtn(): WebdriverIO.Element {
        return $('span*=Далі');
    }

    get nextBtnOnSecondScreen(): WebdriverIO.Element {
        return $('button[type$=\'submit\']').$('span*=Далі');
    }

    get paymentTab(): WebdriverIO.Element {
        return $('div.mat-step-label*=Оплата');
    }

    get payAfterDeliveryBtn(): WebdriverIO.Element {
        return $('button.pay-choice:nth-child(2)');
    }

    get viewOrderBtn(): WebdriverIO.Element {
        return $('span*=Переглянути');
    }
}