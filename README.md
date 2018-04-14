## Reference
    - https://denford.me/cucumber-js-tutorial-cfb053fe3e7
        - https://github.com/denford/TuteCumbernpm install -g protractor

## Setup
```
    npm install --save-dev cucumber    # install cucumber.js
    npm install selenium-webdriver
```
Download ChromeDriver from http://chromedriver.storage.googleapis.com/index.html and put it to a path node.js 
can find.

If put it into node_modules/.bin, need to add a script to run the test script：
```
    "scripts": {
        "demo": "node test-demo.js"
    }
```