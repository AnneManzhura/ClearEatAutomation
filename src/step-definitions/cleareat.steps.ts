import { binding, then, when, given } from 'cucumber-tsflow';
import {CleareatHeaderPage} from "../page-objects/cleareat.header.page";
import {CleareatLoginPage} from "../page-objects/cleareat.login.page";
import {CleareatMenuPage} from "../page-objects/cleareat.menu.page";
import {Then} from 'cucumber'

@binding()
export class CleareatSteps {

    cleareatHeaderPage = new CleareatHeaderPage();
    cleareatLoginPage = new CleareatLoginPage();

    @given(/^I open ClearEat page$/)
    openClearEatPage () {
        this.cleareatHeaderPage.open();
    };

    @when(/^I click on Login Btn in header$/)
    clickOnLoginIn () {
        this.cleareatHeaderPage.loginBtn.click();
    };

    @when(/^I enter "([^"]*)" into email field$/)
    enterEmail (email:string) {
        this.cleareatLoginPage.emailField.setValue(email);
    };

    @when(/^I enter "([^"]*)" into password field$/)
    enterPassword (password:string) {
        this.cleareatLoginPage.passwordField.setValue(password);
    };

    @when(/^I click on Login button on Login Page$/)
    clickOnLoginOnLoginPage () {
        this.cleareatLoginPage.loginBtn.click();
    };

    @when(/^I click on Logout Btn$/)
    clickOnLogoutOnLoginPage () {
        this.cleareatHeaderPage.logoutBtn.click();
    };

    @then(/^I see alert with text "([^"]*)"$/)
    seeAlert (text:string) {
        expect(this.cleareatLoginPage.alert).toBeDisplayed();
        expect(this.cleareatLoginPage.alert.getText()).toEqual(text);
    };

    @then(/^I am at home page$/)
    seeUrl () {
        browser.waitUntil(function () {
            return browser.getUrl() === 'https://cleareat.herokuapp.com/#/';
        }, 5000, 'home page is expected to open');
    };

    @then(/^I see History and Logout buttons in header$/)
    seeBtnsClient () {
        expect(this.cleareatHeaderPage.historyBtn).toBeDisplayed();
        expect(this.cleareatHeaderPage.logoutBtn).toBeDisplayed();
    };

    @then(/^I do not see History and Logout buttons in header$/)
    notSeeBtnsClient () {
        expect(this.cleareatHeaderPage.historyBtn).not.toBeDisplayed();
        expect(this.cleareatHeaderPage.logoutBtn).not.toBeDisplayed();
    };

    @then(/^I see menu with dishes$/)
    seeMenu () {
        expect(this.cleareatHeaderPage.menu).toBeDisplayed();
    };

    @then(/^I see Add and Orders buttons in header$/)
    seeBtnsAdmin () {
        expect(this.cleareatHeaderPage.ordersBtn).toBeDisplayed();
        expect(this.cleareatHeaderPage.addBtn).toBeDisplayed();
    };

    @then(/^I do not see menu$/)
    notSeeMenu () {
        expect(this.cleareatHeaderPage.menu).not.toBeDisplayed();
    };

    @then(/^I see login form$/)
    seeLoginForm () {
        expect(this.cleareatLoginPage.loginForm).toBeDisplayed();
    };

    @when(/^I click on plus btn on dish "([^"]*)"$/)
    addDishToCart (name:string) {
        const cleareatMenuPage = new CleareatMenuPage();
        const dish = cleareatMenuPage.getDish(name);
        cleareatMenuPage.getAddToCartBtnOnDish(dish).click();
    };

    @when(/^I click on minus btn on dish "([^"]*)"$/)
    removeDishFromCart (name:string) {
        const cleareatMenuPage = new CleareatMenuPage();
        const dish = cleareatMenuPage.getDish(name);
        cleareatMenuPage.getRemoveFromCartBtnOnDish(dish).click();
    };

    @then(/^I see (\d+) added dish(|es) in cart$/)
    seeNumberOfDishesInCart (num:number, an:any) {
        expect(this.cleareatHeaderPage.getCounterOnCart()).toStrictEqual(num);
    };

    @then(/^I see (\d+) added item(|s) on dish "([^"]*)"$/)
    seeNumberOfAddedItemsOnDish (num:number, an:any, name:string) {
        const cleareatMenuPage = new CleareatMenuPage();
        const dish = cleareatMenuPage.getDish(name);
        expect(cleareatMenuPage.getNumberOfAddedItemsOnDish(dish)).toStrictEqual(num);
    };

}
