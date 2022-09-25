@w2a
Feature: xyz banking application on w2a site

#  runs for every scenario
  Background: invoke application
    Given Invoke application Home page

  @deposit
  Scenario: Deposit amount on a customer login
    Given Login as user 'Harry Potter'
    And Deposit 1000 and verify balance

