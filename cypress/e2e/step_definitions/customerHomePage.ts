import {Given} from "@badeball/cypress-cucumber-preprocessor";
import customerHomePage from "../../pages/customerHomePage";

Given("Deposit {int} and verify balance",  (depositAmount:number)=> {

    customerHomePage.depositAmount(depositAmount)

});