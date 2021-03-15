import { binding, then, when, given } from 'cucumber-tsflow';
import {CleareatHomePage} from "../page-objects/cleareat.home.page";
import {CleareatLoginPage} from "../page-objects/cleareat.login.page";

@binding()
export class CleareatSteps {

    cleareatHomePage = new CleareatHomePage();
    cleareatLoginPage = new CleareatLoginPage();

    @given(/^I open ClearEat page$/)
    openClearEatPage () {
        this.cleareatHomePage.open();
    };

    @when(/^I click on Login Btn in header$/)
    clickOnLoginIn () {
        this.cleareatHomePage.loginBtn.click();
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

    @then(/^I see alert with text "([^"]*)"$/)
    seeAlert (text:string) {
        expect(this.cleareatLoginPage.alert).toBeDisplayed();
        expect(this.cleareatLoginPage.alert.getText()).toEqual(text);
    };

    /*
        @when(/^I click on the Search button$/)
        clickOnSearchBtn () {
            this.duckduckgoPage.btnSearch.click();
        };

        @then(/^I see Clearmove site in the (\d+) place$/)
        seeCLSiteInPlace (place:number) {
            expect(this.duckduckgoPage.findResultElementByIndex((place-1))).toHaveHrefContaining("http://clearmove.com/");
        };

        @then(/^I see (\d+) results on the page$/)
        seeNResultsOnPage (nResults:number) {
            expect(this.duckduckgoPage.countNumberOfResultsOnPage()).toEqual(nResults)
        };*/
}