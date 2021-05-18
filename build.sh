#!/bin/sh
ng build angular-elements --prod --output-hashing=none && cat dist/angular-elements/runtime.js dist/angular-elements/polyfills.js dist/angular-elements/main.js dist/angular-elements/styles.js > ./preview/angular-elements.js
