
## Goal ##

The goal of this text is to explain how Edge teams can submit contributions to products owned by Trilogy Central Engineering. We are modeling this based on the open source standard - [Setting guidelines for repository contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).

## Out of scope ##

Product-specific contribution rules and instructions are out of scope. We will create dedicated contributing.md files for each individual product. 

## What is new in this version: ##

It simplifies and deprecates [this](https://docs.google.com/document/d/1e-i4dgLk0mD5GYH-JqDi5yd9v4z5on5C6isDAeVVjVA/edit) older, more complex contribution process. Important differences to note:
- E2E tests are no longer required.
- Change specs are no longer required.
- Removes constraints against building features ‘out of process’.

## What do you need to do before your first contribution: ##

* You need a git account and request [here](https://operations.devfactory.com/servicedesk/customer/portal/20) access to [Git](https://github.com/trilogy-group/) and [Jira](https://jira.devfactory.com/). If you need to create Jira Epics in Jira (for new features), you will need to be granted the Jira “PM” role, ask for that explicitly.
* You need to identify the product and its repos you want to contribute to. You can find the list of products [here](https://docs.google.com/spreadsheets/d/1fbwvBic1Xj4N5daYJKc80dJMy8opm-Y-qyfygdNIUmg/edit#gid=2) and using the product names you can search for repos in the [Trilogy Github account](https://github.com/trilogy-group).
* You need product-specific build and deploy instructions. We are working to have 1-click environments for all products, [this](https://docs.google.com/spreadsheets/d/108tfMgiDCeeG6jT1IK6NYvkeMBfxZvTo1rjpNxFdYAM/edit#gid=0) list is continuously updated.

## What is accepted as a contribution: ##

This is a one sentence summary: Defect fixes, enhancements or new features, accompanied by the automated tests validating them, that can be merged with no conflicts, do not break the build and do not cause regressions.

## What is not accepted: ##

The opposite of the above: any contributions that have merge conflicts, break the build, are not tested, break existing tests or cause regressions.

## What do you need to do to contribute: ##

**Step 1:** Write the code changes that represent your contribution. 
This is entirely up to you. 
* **Instructions:**
  * use [this](https://confluence.devfactory.com/display/CodeReview/Analyzer+UI) code review tool so you prevent rejections for static code quality issues.
  * build the product and run all the automated tests (unit/integration/API tests) to ensure you will not face any issues during Step 5.

**Step 2:** Write automated tests validating the code changes you have made.
* **Instructions:** 
  * Your own testing of your code changes. They must work correctly and not introduce any regressions. So you need to write the unit/ingtegration/API tests that validate them and include them in the same PR. 
* **What to do if you fail:**
  * Cover your code with unit/integration/API tests and provide the tests as part of the PR. 
  * Only automated tests are accepted, any manual tests will lead to your PR being rejected.  

**Step 3:**  Submit your contribution as a Pull Request under 1k LoC/PR. 
* **Instructions:**
  * Write small PRs because they are easier and safer to test, review and release, carrying a lower regresion risk.
  * We also need to understand why you are submitting this contribution. As part of the PR, provide the following:
    * a link to the central Jira defect you are fixing or the feature/enhancement you are building. 
    * explain how the product will work differently once your contribution is merged, compare and contrast the new behavior with the existing behavior.
    * create or update the product’s README.md with important changes to the product architecture, user interfaces, environment variables, exposed ports, file locations and container parameters.
* **What to do if you fail:**
  * Break down your code into multiple PRs that can be tested, reviewed and merged independently.
  * Follow the feedback provided by the reviewer and resubmit your PR.

**Step 4:** Reviewer approves your PR, merges it with no conflicts, build or test failures.
* **Instructions:**
  * The reviewer is the product codebase owner (the Product Chief Architect), if he fails your PR he will always provide feedback on why and what you need to fix before resubmitting.
  * The reviewer will not resolve any conflicts between your PR and the target branch, you need to do that.
  * If despite all the tests you provided, the build breaks or existing unit/integration/API tests fail, your PR will be reverted and you will get feedback on what broke so you can fix the issue and resubmit the PR.
* **What to do if you fail:** 
  * Follow the feedback provided by the reviewer and resubmit your PR.


