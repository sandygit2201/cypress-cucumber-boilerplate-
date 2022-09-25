import {Given} from "@badeball/cypress-cucumber-preprocessor";
import Landingpage from "../../pages/landingpage";

Given("Login as user {string}", (userName)=> {

    Landingpage.loginAs(userName);

});