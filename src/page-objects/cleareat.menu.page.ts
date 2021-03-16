export class CleareatMenuPage {

    getDish(name:string): WebdriverIO.Element {
        return $(`dish*=${name}`);
    }

    getAddToCartBtnOnDish(dish:WebdriverIO.Element): WebdriverIO.Element {
        return dish.$('button.quantity-arrow-plus');
    }

    getRemoveFromCartBtnOnDish(dish:WebdriverIO.Element): WebdriverIO.Element {
        return dish.$('button.quantity-arrow-minus');
    }

    getNumberOfAddedItemsOnDish(dish:WebdriverIO.Element): number {
        return +(dish.$('input.number').getValue());
    }
}