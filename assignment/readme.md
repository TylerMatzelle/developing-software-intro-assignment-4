# Assignment 4

This assignment will present a series of instructions. Each instruction should be completed before continuing to the next one.
Please be informative in your pull request descriptions! Each section will be graded independantly.

Note: Any branch that starts with `feature/` is called a "feature branch".

## 1. Fork, Clone & Initialize (50 Points)

- Fork this repository into your github account
- Clone your remote repository onto your local machine
- Create a new branch called "feature/npm" and checkout this branch
- This repository does not start as an NPM package. Initialize it as an NPM Package.
  - Name it `acsd-assignment-4-[yourname]`
  - Make sure the version starts as `1.0.0`
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 2. Make Your Package a TypeScript Project (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/typescript" and checkout this branch
- Setup your package for TypeScript
- Add NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - compile & start
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 3. Automate Linting (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/lint" and checkout this branch
- Add ESLint to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - compile & run
  - lint, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 4. Automate Code Formatting (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/format" and checkout this branch
- Add Prettier to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - compile & run
  - lint, format, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 5. Automate Testing (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/testing" and checkout this branch
- Add Mocha & Chai to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - test
  - compile & run
  - lint, format, test, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 6. Istanbul (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/istanbul" and checkout this branch
- Add `nyc` to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - test
  - test with coverage
  - compile & run
  - lint, format, test, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 7. Yargs (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/yargs" and checkout this branch
- Add `yargs` to your project
- Setup yargs to accept a single parameter, and have your program console.log "Hello" and the value of the parameter.
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

## 8. Module (50 Points)

- Checkout your master branch and pull the newest version from your remote repository
- Create a new branch called "feature/module" and checkout this branch
- Create a module with a single function that will console.log "Hello" to the value of a parameter.
- Incorporate the module into the file handling yargs
- Write a test to validate that your function works as intended
- Update the readme.md
- Version your package
- Commit your changes
- Push your feature branch to your remote repository
- Merge your feature branch into master using a Pull Request on Github

# Submission

Once you have completed your assignment, create a Pull Request back into this repository.

# Notes

Some of the instructions are very general (i.e: "Update the readme.md"). You have been taught what the contents of a readme.md file are for,
and the quality of these updates will be measured. Every instruction deserves your complete attention. This is a preview of how specific your final is going
to be.

## Major Criteria

- [ ] Did you complete the task?
- [ ] Was your code neat?
- [ ] Did the NPM commands work?
- [ ] Were your commits informative?
- [ ] Was your readme useful, complete, and accurate?
- [ ] Did your tests pass?
- [ ] Were your tests useful?
