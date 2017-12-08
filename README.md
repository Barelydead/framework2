Ramverk 2
---------------

[![BCH compliance](https://bettercodehub.com/edge/badge/Barelydead/framework2?branch=master)](https://bettercodehub.com/)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d247096c0bfb7a88f4c/maintainability)](https://codeclimate.com/github/Barelydead/framework2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2d247096c0bfb7a88f4c/test_coverage)](https://codeclimate.com/github/Barelydead/framework2/test_coverage)
[![Build Status](https://travis-ci.org/Barelydead/framework2.svg?branch=master)](https://travis-ci.org/Barelydead/framework2)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Barelydead/framework2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/framework2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/Barelydead/framework2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/framework2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Barelydead/framework2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/framework2/build-status/master)

This repo is a part of the bth-course framework2


## Install

```
git clone https://github.com/Barelydead/framework2.git
```

```
cd framework2/
```

```
npm install
```

```
npm start
```

## Test
Mitt repo omfattas av unittest med mocha och linters eslint och stylelint.

```
npm test
```

## Docker

Kör flera instanser av servern på olika node-versioner.
```
docker-compose up -d
```

rikta webläsaren till localhost:3000
Docker startar en container för express och en för MongoDB
