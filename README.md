# JLPT

<div align="center">
  <!-- Npm Version -->
  <a href="https://www.npmjs.com/package/jlpt">
    <img src="https://img.shields.io/npm/v/jlpt.svg" alt="NPM package" />
  </a> 
  <a href="https://www.npmjs.com/package/jlpt">
    <img src="https://img.shields.io/npm/dy/jlpt" alt="JLPT downloads" />
  </a>
</div>

### About

A simple NPM library that can return the vocabulary words using to practice for the JLPT (Japanese-Language Proficiency Test) from N5 to N1.

### Usage

#### Node.js

##### Install package

```sh
npm install jlpt
```

##### CommonJS

```javascript
const kanji = require("jlpt");
```

##### ES6

```javascript
import Kanji from "jlpt";
```

### Quick Reference

```javascript
// Returns an level of JLPT as an object
import { getKanji } from "jlpt";

const n5 = getKanji(1);

// => [{
//  "kanji": "政",
//    "onyomi": "セイ ショウ",
//    "kunyomi": "まつりごと",
//    "meaning": "Politics, Government"
//  }, ...
//    }]
```
