/*! Copyright (c) 2022 HP Development Company, L.P. */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Firefox */\r\n@supports (-moz-appearance:none) {\r\n    @font-face {\r\n        font-family: \"HP Simplified Light\";\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        src: url(\"moz-extension://__MSG_@@extension_id__/HPSimplified_Lt.ttf\") format(\"truetype\");\r\n    }\r\n}\r\n\r\n/* Chromium browsers */\r\n@supports not (-moz-appearance:none) {\r\n    @font-face {\r\n        font-family: \"HP Simplified Light\";\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        src: url(\"chrome-extension://__MSG_@@extension_id__/HPSimplified_Lt.ttf\") format(\"truetype\");\r\n    }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_branding_hp_sure_click_css_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(603);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_branding_hp_sure_click_css_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* data- attribute improves the specificity of our CSS. We want it to apply to our overlay and only our overlay */\r\n/* All our CSS is to stop it being overridden by CSS in the site we are overlaying */\r\n:host {\r\n    --color-primary: 109, 208, 251;\r\n    --color-danger: 235, 94, 94;\r\n    --color-contrast: 22, 20, 29;\r\n\r\n    --color-lightbox-bg-blocked: rgba(190, 19, 19, 0.8);\r\n    --color-lightbox-bg-unknown: rgba(var(--color-contrast), 0.5);\r\n\r\n    --color-text-primary: 255, 255, 255;\r\n\r\n    --font-family: \"HP Simplified Light\", \"Helvetica\", Arial, sans-serif;\r\n    --font-family-url: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n    --font-base: 18px;\r\n}\r\n\r\n#br-fullpage-overlay {\r\n    all: initial;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: var(--color-lightbox-bg-unknown);\r\n    backdrop-filter: blur(2px);\r\n    z-index: 2147483647;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: var(--font-base);\r\n}\r\n\r\n/* Resetting all elements underneath */\r\n#br-fullpage-overlay * {\r\n    font-size: 1em;\r\n    font-family: var(--font-family);\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    top: auto;\r\n    left: auto;\r\n    bottom: auto;\r\n    right: auto;\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    letter-spacing: normal;\r\n    line-height: 1.4em;\r\n}\r\n\r\n#br-fullpage-overlay.br-fullpage-overlay--1 {\r\n    background-color: var(--color-lightbox-bg-blocked);\r\n}\r\n\r\n#br-fullpage-overlay .br-fullpage-overlay-content {\r\n    flex-grow: 0;\r\n    font-size: 1em;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    color: rgb(var(--color-text-primary));\r\n}\r\n\r\n#br-fullpage-overlay .br-fullpage-branding {\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    background-color: rgba(22, 20, 29, 0.8);\r\n    align-content: flex-start;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 2.5em;\r\n    padding: 0.5em 1em;\r\n}\r\n\r\n#br-fullpage-overlay .logo-hp {\r\n    height: 100%;\r\n}\r\n\r\n#br-fullpage-overlay .logo-wolf {\r\n    position: relative;\r\n    top: 1px;\r\n    height: 90%;\r\n}\r\n\r\n#br-fullpage-overlay .br-fullpage-branding svg {\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n#br-fullpage-overlay .br-fullpage-warning-box {\r\n    background-color: rgba(22, 20, 29);\r\n    padding: 1em;\r\n    height: auto;\r\n    flex-grow: 1;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-title {\r\n    font-size: 32px;\r\n    font-weight: 400;\r\n    margin-bottom: 1em;\r\n    display: inline-flex;\r\n    align-items: flex-start;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-title .logo-cp {\r\n    height: 1em;\r\n    width: auto;\r\n    fill: currentColor;\r\n    margin-right: 12px;\r\n    position: relative;\r\n    top: 8px;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-title .logo-cp svg {\r\n    width: auto;\r\n    height: 100%;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-description p {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-infobox {\r\n    background-color: rgb(var(--color-danger));\r\n    color: rgb(var(--color-contrast));\r\n    padding: 1em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n#br-fullpage-overlay .br-warning-actions {\r\n    margin-top: 2em;\r\n}\r\n\r\n#br-fullpage-overlay .button {\r\n    appearance: none;\r\n    margin: 0 1em 1em 0;\r\n    overflow: visible;\r\n    text-decoration: none;\r\n    text-transform: none;\r\n    user-select: none;\r\n    vertical-align: middle;\r\n    -webkit-tap-highlight-color: transparent;\r\n    white-space: nowrap;\r\n    outline: 0px;\r\n    box-shadow: none;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    background-color: transparent;\r\n    border-radius: 0;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    line-height: 20px;\r\n    min-width: 112px;\r\n    padding: 11px 23px 11px 15px;\r\n    position: relative;\r\n    transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s, color 0.3s ease 0s;\r\n}\r\n\r\n#br-fullpage-overlay .button.button--with-icon {\r\n    padding: 7px 23px 8px 8px;\r\n}\r\n\r\n#br-fullpage-overlay .button svg {\r\n    fill: currentColor;\r\n    width: auto;\r\n    height: 1.5em;\r\n    margin-right: 6px;\r\n}\r\n\r\n#br-fullpage-overlay .button--safe {\r\n    border-color: rgba(var(--color-primary), 1);\r\n    color: rgba(var(--color-primary), 1);\r\n}\r\n\r\n#br-fullpage-overlay .button--safe:hover,\r\n#br-fullpage-overlay .button--safe:focus,\r\n#br-fullpage-overlay .button--safe:active {\r\n    background-color: rgba(var(--color-primary), 0.1);\r\n    border-color: rgba(var(--color-primary), 0.8);\r\n}\r\n\r\n#br-fullpage-overlay .button--neutral {\r\n    color: rgb(var(--color-text-primary));\r\n    border-color: rgba(var(--color-text-primary), 0.9);\r\n}\r\n\r\n#br-fullpage-overlay .button--neutral:hover,\r\n#br-fullpage-overlay .button--neutral:focus,\r\n#br-fullpage-overlay .button--neutral:active {\r\n    background-color: rgba(var(--color-text-primary), 0.1);\r\n    border-color: rgba(var(--color-text-primary), 1);\r\n}\r\n\r\n#br-fullpage-overlay .button--ghost {\r\n    color: rgb(255, 255, 255);\r\n    border-color: transparent;\r\n}\r\n\r\n#br-fullpage-overlay .button--ghost:hover,\r\n#br-fullpage-overlay .button--ghost:focus,\r\n#br-fullpage-overlay .button--ghost:active {\r\n    border-color: transparent;\r\n    background-color: rgba(var(--color-primary), 0.1);\r\n}\r\n\r\n\r\n@media (min-width: 460px) {\r\n    #br-fullpage-overlay .br-fullpage-warning-box {\r\n        padding: 2em;\r\n    }\r\n\r\n    #br-fullpage-overlay .br-fullpage-overlay-content {\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    #br-fullpage-overlay .br-fullpage-branding {\r\n        padding: 2.2em 1em;\r\n        width: 4.5em;\r\n        height: auto;\r\n        justify-content: center;\r\n    }\r\n\r\n    #br-fullpage-overlay .logo-hp,\r\n    #br-fullpage-overlay .logo-wolf {\r\n        height: auto;\r\n        width: 100%;\r\n    }\r\n\r\n    #br-fullpage-overlay .logo-hp svg,\r\n    #br-fullpage-overlay .logo-wolf svg {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 0 0 1em 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 660px) {\r\n    #br-fullpage-overlay .br-fullpage-overlay-content {\r\n        width: 90%;\r\n        max-width: 800px;\r\n    }\r\n    #br-fullpage-overlay .br-fullpage-branding {\r\n        padding: 1.4em;\r\n        width: 5.5em;\r\n    }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 476:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 933:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ../lib/common/maybe.ts
function maybe_some(value) {
    return value !== undefined;
}
function maybe_none(value) {
    return value === undefined;
}
function serializeMaybe(value) {
    if (maybe_some(value)) {
        return value;
    }
    else {
        return null;
    }
}
function deserializeMaybe(value) {
    if (value === null) {
        return undefined;
    }
    else {
        return value;
    }
}
function maybe_isEqual(a, b) {
    return a === b;
}
var MaybeCompareOptions;
(function (MaybeCompareOptions) {
    MaybeCompareOptions[MaybeCompareOptions["none"] = 0] = "none";
    MaybeCompareOptions[MaybeCompareOptions["compareUndefined"] = 1] = "compareUndefined";
})(MaybeCompareOptions || (MaybeCompareOptions = {}));
function maybeCompare(a, b, compare = maybe_isEqual, options = MaybeCompareOptions.none) {
    if (maybe_some(a) && maybe_some(b)) {
        return compare(a, b);
    }
    if (options & MaybeCompareOptions.compareUndefined) {
        return maybe_none(a) && maybe_none(b);
    }
    return false;
}

;// CONCATENATED MODULE: ../lib/common/murmur-hash.ts
function murmurHashString(key, seed) {
    let len = key.length * 2;
    const m = 0xc6a4a793;
    const r = 16;
    let h = seed ^ (len * m);
    for (let i = 0; (i < key.length) && (len >= 4); i += 2) {
        const data = (key.charCodeAt(i) + (key.charCodeAt(i + 1) << 16));
        const k = data;
        h += k;
        h *= m;
        h ^= (h >> 16);
        len -= 4;
    }
    if (len === 2) {
        let data = key.charCodeAt(key.length - 1);
        h += data;
        h *= m;
        h ^= (h >> r);
    }
    h *= m;
    h ^= (h >> 10);
    h *= m;
    h ^= (h >> 17);
    return h;
}
function murmurHashNumber(key, seed) {
    let len = 4;
    const m = 0xc6a4a793;
    const r = 16;
    let h = seed ^ (len * m);
    const data = key & 0xffffffff;
    const k = data;
    h += k;
    h *= m;
    h ^= (h >> 16);
    h *= m;
    h ^= (h >> 10);
    h *= m;
    h ^= (h >> 17);
    return h;
}
function murmur_hash_murmurHash(key, seed) {
    if (typeof key === 'string') {
        return murmurHashString(key, seed);
    }
    else if (typeof key === 'boolean') {
        return murmurHashNumber(key ? 1 : 0, seed);
    }
    else {
        return murmurHashNumber(key, seed);
    }
}

;// CONCATENATED MODULE: ../lib/common/hash-map.ts
function isPowerOf2(value) {
    const mask = value - 1;
    return (value & mask) === 0;
}
function mod(n, d) {
    return n & (d - 1);
}
var TryPutStatus;
(function (TryPutStatus) {
    TryPutStatus[TryPutStatus["ValueInserted"] = 0] = "ValueInserted";
    TryPutStatus[TryPutStatus["ValueUpdated"] = 1] = "ValueUpdated";
    TryPutStatus[TryPutStatus["Failure"] = 2] = "Failure";
})(TryPutStatus || (TryPutStatus = {}));
function convertToArray(elements, selector) {
    const filteredElements = elements.filter((element) => {
        return element !== undefined && element !== null;
    });
    const mappedElements = filteredElements.map(selector);
    return mappedElements;
}
class hash_map_HashMap {
    constructor(hash, compare, initialCapacity = 0, fillFactor = 0.75) {
        this.hash = hash;
        this.compare = compare;
        this.fillFactor = fillFactor;
        this.size = 0;
        this.elements = [];
        if (initialCapacity !== 0) {
            this.resize(initialCapacity);
        }
    }
    shouldResize(size) {
        if (this.elements.length === 0) {
            return true;
        }
        return (size / this.elements.length) >= this.fillFactor;
    }
    findNextCapacity() {
        if (this.elements.length === 0) {
            return 2;
        }
        return this.elements.length * 2;
    }
    findIndex(hash, elements = this.elements) {
        const index = mod(hash, elements.length);
        if (index < 0) {
            throw new Error(`HashMap.findIndex: index < 0: ${index} < 0`);
        }
        if (index >= elements.length) {
            throw new Error(`HashMap.findIndex: index >= elements.length: ${index} >= ${elements.length}`);
        }
        return index;
    }
    compareKeys(ha, ka, hb, kb) {
        return (ha === hb) && this.compare(ka, kb);
    }
    tryPut(hash, key, value, start, end, elements = this.elements) {
        for (let i = start; i < end; i += 1) {
            const element = elements[i];
            if (element !== undefined && element !== null) {
                const [currentHash, currentKey, currentValue] = element;
                if (this.compareKeys(hash, key, currentHash, currentKey)) {
                    elements[i] = [hash, key, value];
                    return TryPutStatus.ValueUpdated;
                }
            }
            else {
                elements[i] = [hash, key, value];
                return TryPutStatus.ValueInserted;
            }
        }
        return TryPutStatus.Failure;
    }
    resize(capacity) {
        if (capacity <= this.elements.length) {
            throw new Error(`HashMap.resize: capacity <= this.elements.length: ${capacity} <= ${this.elements.length}`);
        }
        if (capacity <= this.size) {
            throw new Error(`HashMap.resize: capacity <= this.size: ${capacity} <= ${this.size}`);
        }
        if (!isPowerOf2(capacity)) {
            throw new Error(`HashMap.resize: !isPowerOf2(${capacity})`);
        }
        const elements = new Array(capacity);
        for (let element of this.elements) {
            if (element !== undefined && element !== null) {
                const [hash, key, value] = element;
                const index = this.findIndex(hash, elements);
                if (this.tryPut(hash, key, value, index, elements.length, elements) !== TryPutStatus.Failure) {
                    continue;
                }
                if (this.tryPut(hash, key, value, 0, index, elements) !== TryPutStatus.Failure) {
                    continue;
                }
                throw new Error(`HashMap.resize: !tryPut`);
            }
        }
        this.elements = elements;
    }
    has(key) {
        return this.get(key) !== undefined;
    }
    isHole(element) {
        return element === undefined;
    }
    tryGet(hash, key, start, end) {
        const foundHole = true;
        for (let i = start; i < end; i += 1) {
            const element = this.elements[i];
            if (element !== undefined && element !== null) {
                const [currentHash, currentKey, currentValue] = element;
                if (this.compareKeys(hash, key, currentHash, currentKey)) {
                    return [!foundHole, currentValue];
                }
            }
            else if (this.isHole(element)) {
                return [foundHole, undefined];
            }
        }
        return [!foundHole, undefined];
    }
    get(key) {
        if (this.size === 0) {
            return undefined;
        }
        const hash = this.hash(key);
        const index = this.findIndex(hash);
        let [foundHole, value] = this.tryGet(hash, key, index, this.elements.length);
        if (value) {
            return value;
        }
        if (foundHole) {
            return undefined;
        }
        [foundHole, value] = this.tryGet(hash, key, 0, index);
        return value;
    }
    put(key, value) {
        if (this.shouldResize(this.size + 1)) {
            this.resize(this.findNextCapacity());
        }
        const hash = this.hash(key);
        const index = this.findIndex(hash);
        switch (this.tryPut(hash, key, value, index, this.elements.length)) {
            case TryPutStatus.ValueInserted:
                this.size += 1;
                return;
            case TryPutStatus.ValueUpdated:
                return;
        }
        switch (this.tryPut(hash, key, value, 0, index)) {
            case TryPutStatus.ValueInserted:
                this.size += 1;
                return;
            case TryPutStatus.ValueUpdated:
                return;
        }
        throw new Error('HashMap.put: !tryPut');
    }
    putMany(keyValues) {
        for (const [key, value] of keyValues) {
            this.put(key, value);
        }
    }
    tryRemove(hash, key, start, end) {
        const foundHole = true;
        const removed = true;
        for (let i = start; i < end; i += 1) {
            const element = this.elements[i];
            if (element !== undefined && element !== null) {
                const [currentHash, currentKey, currentValue] = element;
                if (this.compareKeys(hash, key, currentHash, currentKey)) {
                    this.elements[i] = null;
                    return [!foundHole, removed];
                }
            }
            else if (this.isHole(element)) {
                return [foundHole, !removed];
            }
        }
        return [!foundHole, !removed];
    }
    remove(key) {
        if (this.isEmpty()) {
            return false;
        }
        const hash = this.hash(key);
        const index = this.findIndex(hash);
        let [foundHole, removed] = this.tryRemove(hash, key, index, this.elements.length);
        if (removed) {
            this.size -= 1;
            return true;
        }
        if (foundHole) {
            return false;
        }
        [foundHole, removed] = this.tryRemove(hash, key, 0, index);
        if (removed) {
            this.size -= 1;
        }
        return removed;
    }
    isEmpty() {
        return this.size === 0;
    }
    toArray() {
        const selectKeyValue = ([hash, key, value]) => {
            return [key, value];
        };
        return convertToArray(this.elements, selectKeyValue);
    }
    *[Symbol.iterator]() {
        for (const element of this.elements) {
            if (element !== undefined && element !== null) {
                const [hash, key, value] = element;
                yield [key, value];
            }
        }
    }
}
class hash_map_HashSet {
    constructor(hash, compare, initialCapacity = 0, fillFactor = 0.75) {
        this.map = new hash_map_HashMap(hash, compare, initialCapacity, fillFactor);
    }
    get size() {
        return this.map.size;
    }
    addMany(keys) {
        let nKeysAdded = 0;
        for (const key of keys) {
            if (this.add(key)) {
                nKeysAdded += 1;
            }
        }
        return nKeysAdded;
    }
    add(key) {
        const sizeBefore = this.map.size;
        this.map.put(key, key);
        const sizeAfter = this.map.size;
        return (sizeAfter - sizeBefore) === 1;
    }
    has(key) {
        return this.map.has(key);
    }
    remove(key) {
        return this.map.remove(key);
    }
    isEmpty() {
        return this.map.isEmpty();
    }
    toArray() {
        const selectKey = ([hash, key, value]) => {
            return key;
        };
        return convertToArray(this.map.elements, selectKey);
    }
    *[Symbol.iterator]() {
        for (const element of this.map.elements) {
            if (element !== undefined && element !== null) {
                const [hash, key, value] = element;
                yield key;
            }
        }
    }
}
function defaultHash(instance) {
    return instance.hash();
}
function defaultCompare(a, b) {
    return a.compare(b);
}
function makeDefaultHashMap() {
    return new hash_map_HashMap(defaultHash, defaultCompare);
}
function makeDefaultHashSet() {
    return new hash_map_HashSet(defaultHash, defaultCompare);
}

;// CONCATENATED MODULE: ../lib/common/string-utils.ts



var StringCompareOptions;
(function (StringCompareOptions) {
    StringCompareOptions[StringCompareOptions["CaseSensitive"] = 0] = "CaseSensitive";
    StringCompareOptions[StringCompareOptions["LowerCase"] = 1] = "LowerCase";
    StringCompareOptions[StringCompareOptions["LocaleLowerCase"] = 2] = "LocaleLowerCase";
})(StringCompareOptions || (StringCompareOptions = {}));
function string_utils_compareStrings(a, b, options = StringCompareOptions.CaseSensitive) {
    switch (options) {
        case StringCompareOptions.CaseSensitive:
            return a === b;
        case StringCompareOptions.LowerCase:
            return a.toLowerCase() === b.toLowerCase();
        case StringCompareOptions.LocaleLowerCase:
            return a.toLocaleLowerCase() === b.toLocaleLowerCase();
        default:
            throw new Error('stringCompare');
    }
}
function hashString(value) {
    let hash = 0;
    hash = murmur_hash_murmurHash(value, hash);
    return hash;
}
function makeStringHashSet() {
    return new HashSet(hashString, string_utils_compareStrings);
}
function makeStringHashMap() {
    return new hash_map_HashMap(hashString, string_utils_compareStrings);
}
function line(value) {
    return `${value}\n`;
}
function surround(value, typeName, openTag, closeTag, indentLevel) {
    const indent = makeIndent(indentLevel - 1);
    if (value) {
        return `${line(`${typeName}${openTag}`)}${value}${indent(closeTag)}`;
    }
    else {
        return `${typeName}${openTag}${closeTag}`;
    }
}
function makeKeyValuePrinter(toString, indent) {
    return (key, value) => {
        return line(indent(`${toString(key)}: ${toString(value)},`));
    };
}
function mapToString(map, seenObjects, indentLevel) {
    const indent = makeIndent(indentLevel);
    function toString(value) {
        return toStringRecursive(value, seenObjects, indentLevel);
    }
    const printKeyValue = makeKeyValuePrinter(toString, indent);
    let result = "";
    map.forEach((value, key) => {
        result += printKeyValue(key, value);
    });
    return surround(result, "Map", "{", "}", indentLevel);
}
function makeValuePrinter(toString, indent) {
    return (value) => {
        return line(indent(`${toString(value)},`));
    };
}
function setToString(set, seenObjects, indentLevel) {
    const indent = makeIndent(indentLevel);
    function toString(value) {
        return toStringRecursive(value, seenObjects, indentLevel);
    }
    const printValue = makeValuePrinter(toString, indent);
    let result = "";
    set.forEach((key) => {
        result += printValue(key);
    });
    return surround(result, "Set", "{", "}", indentLevel);
}
function arrayToString(array, seenObjects, indentLevel) {
    const indent = makeIndent(indentLevel);
    function toString(value) {
        return toStringRecursive(value, seenObjects, indentLevel);
    }
    const printValue = makeValuePrinter(toString, indent);
    let result = "";
    if (array.length > 250) {
        result = printValue("...");
    }
    else {
        array.forEach((value) => {
            result += printValue(value);
        });
    }
    return surround(result, "Array", "[", "]", indentLevel);
}
function objectToString(value, seenObjects, indentLevel) {
    const indent = makeIndent(indentLevel);
    function toString(value) {
        return toStringRecursive(value, seenObjects, indentLevel);
    }
    const printKeyValue = makeKeyValuePrinter(toString, indent);
    let result = "";
    for (const propertyName of Object.getOwnPropertyNames(value)) {
        const property = value[propertyName];
        if (!isFunction(property)) {
            result += printKeyValue(propertyName, property);
        }
    }
    return surround(result, typeName(value), "{", "}", indentLevel);
}
const defaultToStringFunction = (() => {
    const emptyObject = {};
    return emptyObject.toString;
})();
function defaultToString(value) {
    return defaultToStringFunction.call(value);
}
function hasCustomToString(value) {
    return value.toString !== defaultToStringFunction;
}
function isFunction(value) {
    return value instanceof Function;
}
function makeIndentation(indentLevel) {
    if (indentLevel <= 0) {
        return "";
    }
    const tab = "\t";
    let indentation = "";
    for (let level = 0; level < indentLevel; level += 1) {
        indentation += tab;
    }
    return indentation;
}
function makeIndent(indentLevel) {
    const indentation = makeIndentation(indentLevel);
    return (value) => {
        return `${indentation}${value}`;
    };
}
function typeOf(value) {
    return value.constructor;
}
function typeName(value) {
    return typeOf(value).name;
}
function toStringRecursive(value, seenObjects, indentLevel) {
    function didSee(value) {
        return seenObjects.has(value);
    }
    function seeObject(value) {
        seenObjects.add(value);
        return seenObjects;
    }
    const nextIndentLevel = indentLevel + 1;
    if (value === undefined) {
        return "undefined";
    }
    else if (value === null) {
        return "null";
    }
    else if (typeof value === "boolean") {
        return value.toString();
    }
    else if (typeof value === "number") {
        return value.toString();
    }
    else if (typeof value === "string") {
        return value;
    }
    else if (value instanceof Array) {
        return arrayToString(value, seeObject(value), nextIndentLevel);
    }
    else if (value instanceof Map) {
        return mapToString(value, seeObject(value), nextIndentLevel);
    }
    else if (value instanceof Set) {
        return setToString(value, seeObject(value), nextIndentLevel);
    }
    else if (value instanceof URL) {
        return url_utils_URLToString(value);
    }
    else if (isFunction(value)) {
        return typeName(value);
    }
    else if (didSee(value)) {
        return typeName(value);
    }
    else if (hasCustomToString(value)) {
        return value.toString();
    }
    else {
        return objectToString(value, seeObject(value), nextIndentLevel);
    }
}
function string_utils_toString(value, initialIndentLevel = 0) {
    const seenObjects = new Set();
    const indentLevel = initialIndentLevel;
    return toStringRecursive(value, seenObjects, indentLevel);
}
function safeToString(value) {
    if (value === undefined) {
        return "undefined";
    }
    else if (value === null) {
        return "null";
    }
    else {
        return value.toString();
    }
}
function isString(value) {
    return typeof value === 'string';
}
function isEmptyString(value) {
    return value.length === 0;
}

;// CONCATENATED MODULE: ../lib/common/scheme.ts
var scheme_Scheme;
(function (Scheme) {
    Scheme["HTTP"] = "http:";
    Scheme["HTTPS"] = "https:";
    Scheme["FTP"] = "ftp:";
    Scheme["FTPS"] = "ftps:";
    Scheme["WS"] = "ws:";
    Scheme["WSS"] = "wss:";
    Scheme["FILE"] = "file:";
    Scheme["CHROME"] = "chrome:";
    Scheme["EDGE"] = "edge:";
    Scheme["ABOUT"] = "about:";
    Scheme["JAVASCRIPT"] = "javascript:";
    Scheme["CHROME_EXTENSION"] = "chrome-extension:";
    Scheme["FIREFOX_EXTENSION"] = "moz-extension:";
    Scheme["WILDCARD_ONE"] = "+:";
    Scheme["WILDCARD_SOME"] = "*:";
})(scheme_Scheme || (scheme_Scheme = {}));

;// CONCATENATED MODULE: ../lib/common/url-utils.ts




var UrlCompareOptions;
(function (UrlCompareOptions) {
    UrlCompareOptions[UrlCompareOptions["Default"] = 0] = "Default";
    UrlCompareOptions[UrlCompareOptions["IgnoreSearchParams"] = 1] = "IgnoreSearchParams";
})(UrlCompareOptions || (UrlCompareOptions = {}));
var UrlComponent;
(function (UrlComponent) {
    UrlComponent[UrlComponent["Protocol"] = 1] = "Protocol";
    UrlComponent[UrlComponent["Username"] = 2] = "Username";
    UrlComponent[UrlComponent["Password"] = 4] = "Password";
    UrlComponent[UrlComponent["Host"] = 8] = "Host";
    UrlComponent[UrlComponent["Port"] = 16] = "Port";
    UrlComponent[UrlComponent["Pathname"] = 32] = "Pathname";
    UrlComponent[UrlComponent["Search"] = 64] = "Search";
    UrlComponent[UrlComponent["All"] = 127] = "All";
})(UrlComponent || (UrlComponent = {}));
function compareUrlComponents(a, b, components) {
    function compare(component) {
        return (components & component) !== 0;
    }
    if (compare(UrlComponent.Protocol) && a.protocol !== b.protocol) {
        return false;
    }
    if (compare(UrlComponent.Username) && a.username !== b.username) {
        return false;
    }
    if (compare(UrlComponent.Password) && a.password !== b.password) {
        return false;
    }
    if (compare(UrlComponent.Host) && a.host !== b.host) {
        return false;
    }
    if (compare(UrlComponent.Port) && a.port !== b.port) {
        return false;
    }
    if (compare(UrlComponent.Pathname) && a.pathname !== b.pathname) {
        return false;
    }
    if (compare(UrlComponent.Search) && a.search !== b.search) {
        return false;
    }
    return true;
}
function removeComponent(components, component) {
    return components & (~component);
}
function isSameUrl(a, b, options = UrlCompareOptions.Default) {
    switch (options) {
        case UrlCompareOptions.Default:
            return compareUrlComponents(a, b, UrlComponent.All);
        case UrlCompareOptions.IgnoreSearchParams:
            return compareUrlComponents(a, b, removeComponent(UrlComponent.All, UrlComponent.Search));
        default:
            throw new Error(`isSameUrl: invalid options: ${options}`);
    }
}
function isURL(value) {
    return value instanceof URL;
}
function url_utils_parseUrl(spec) {
    try {
        return new URL(spec);
    }
    catch (e) {
        return undefined;
    }
}
function maybeParseUrl(spec) {
    const url = url_utils_parseUrl(spec);
    if (url === undefined) {
        return spec;
    }
    else {
        return url;
    }
}
function parseURLIfNecessary(urlOrSpec) {
    if (isURL(urlOrSpec)) {
        return urlOrSpec;
    }
    else {
        return url_utils_parseUrl(urlOrSpec);
    }
}
function isSameUrlOrSpec(a, b, options = UrlCompareOptions.Default) {
    if ((a instanceof URL) && (b instanceof URL)) {
        return isSameUrl(a, b);
    }
    else if ((typeof a === "string") && (typeof b === "string")) {
        return a === b;
    }
    else {
        return undefined;
    }
}
function isFileUrl(url) {
    return compareStrings(url.protocol, Scheme.FILE);
}
function isExtensionUrl(url) {
    const extensionSchemes = [
        Scheme.CHROME_EXTENSION,
        Scheme.FIREFOX_EXTENSION
    ];
    return extensionSchemes.some((extensionScheme) => compareStrings(url.protocol, extensionScheme));
}
function isBrowserUrl(url) {
    const browserSchemes = [
        Scheme.CHROME,
        Scheme.ABOUT,
        Scheme.EDGE
    ];
    return browserSchemes.some((browserScheme) => compareStrings(url.protocol, browserScheme));
}
function url_utils_URLToString(url) {
    if (url === undefined) {
        return "";
    }
    if (url instanceof URL) {
        return url.toString();
    }
    else {
        return url;
    }
}
function safeEncodeURI(uri) {
    if (uri === undefined) {
        return "";
    }
    return encodeURI(uri);
}
function safeEncodeURIComponent(component) {
    if (component === undefined) {
        return "";
    }
    return encodeURIComponent(component);
}
function hashUrlComponents(url, components, seed) {
    function compare(component) {
        return (components & component) !== 0;
    }
    let hash = seed;
    if (compare(UrlComponent.Protocol)) {
        hash = murmurHash(url.protocol, hash);
    }
    if (compare(UrlComponent.Username)) {
        hash = murmurHash(url.username, hash);
    }
    if (compare(UrlComponent.Password)) {
        hash = murmurHash(url.password, hash);
    }
    if (compare(UrlComponent.Host)) {
        hash = murmurHash(url.host, hash);
    }
    if (compare(UrlComponent.Port)) {
        hash = murmurHash(url.port, hash);
    }
    if (compare(UrlComponent.Pathname)) {
        hash = murmurHash(url.pathname, hash);
    }
    if (compare(UrlComponent.Search)) {
        hash = murmurHash(url.search, hash);
    }
    return hash;
}
function hashUrl(url, options = UrlCompareOptions.Default, seed = 0) {
    switch (options) {
        case UrlCompareOptions.Default:
            return hashUrlComponents(url, UrlComponent.All, seed);
        case UrlCompareOptions.IgnoreSearchParams:
            return hashUrlComponents(url, removeComponent(UrlComponent.All, UrlComponent.Search), seed);
        default:
            throw new Error(`hashUrl: invalid options: ${options}`);
    }
}
function makeUrlHashMap(options = UrlCompareOptions.Default) {
    return new HashMap((url) => hashUrl(url, options), (a, b) => isSameUrl(a, b, options));
}
function makeUrlHashSet(options = UrlCompareOptions.Default) {
    return new HashSet((url) => hashUrl(url, options), (a, b) => isSameUrl(a, b, options));
}

;// CONCATENATED MODULE: ../lib/common/browser.ts



var browser_Browser;
(function (Browser) {
    Browser[Browser["chrome"] = 0] = "chrome";
    Browser[Browser["firefox"] = 1] = "firefox";
    Browser[Browser["edgeChromium"] = 2] = "edgeChromium";
})(browser_Browser || (browser_Browser = {}));
const browserSchemeMap = new Map([
    [scheme_Scheme.CHROME_EXTENSION, browser_Browser.chrome],
    [scheme_Scheme.FIREFOX_EXTENSION, browser_Browser.firefox],
]);
const currentBrowser = (() => {
    var _a;
    const manifestURL = url_utils_parseUrl(chrome.runtime.getURL("manifest.json"));
    if (maybe_none(manifestURL)) {
        return undefined;
    }
    let browser = browserSchemeMap.get(manifestURL.protocol);
    if (browser === browser_Browser.chrome) {
        if ((_a = navigator.userAgentData) === null || _a === void 0 ? void 0 : _a.brands.some(brandInfo => brandInfo.brand === "Microsoft Edge")) {
            browser = browser_Browser.edgeChromium;
        }
    }
    return browser;
})();
function getCurrentBrowserInfo() {
    const manifestURL = parseUrl(chrome.runtime.getURL("manifest.json"));
    if (none(manifestURL) || none(currentBrowser)) {
        return { browser: "unknown", urlHostname: "" };
    }
    return { browser: browser_Browser[currentBrowser], urlHostname: manifestURL.hostname };
}
function browserToDisplayString(browser) {
    switch (browser) {
        case browser_Browser.chrome:
            return "Google Chrome";
        case browser_Browser.firefox:
            return "Mozilla Firefox";
        case browser_Browser.edgeChromium:
            return "Microsoft Edge";
    }
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/page-suppressors.ts


class BasePageSuppressor {
    constructor(pageManager, config) {
        this.pageManager = pageManager;
        this.config = config;
    }
}
class PasswordFillerSuppressor extends BasePageSuppressor {
    constructor() {
        super(...arguments);
        this.currentIntervalId = 0;
        this.isFirefox = currentBrowser === browser_Browser.firefox;
        this.passwordMayBeInjected = false;
        this.trustedInputEventSeen = false;
        this.webkitAutofillSelector = this.pageManager.PASSWORD_QUERY_STRING.split(",").map(query => query + ":-webkit-autofill").join(",");
        this.onInputCB = (event) => this.onInput(event);
    }
    checkForSuppressionMarkers() {
        if (this.shouldRun()) {
            if (!this.isFirefox) {
                this.clearIntervals();
                if (this.checkChromiumAutofill()) {
                    return true;
                }
                this.setExponentialInterval(() => {
                    if (this.alreadySuppressed || this.pageManager.hasTripped) {
                        this.clearIntervals();
                    }
                    else {
                        this.checkChromiumAutofill();
                    }
                }, 50, 1.3);
            }
            if (!this.trustedInputEventSeen) {
                for (const passwordElement of this.pageManager.passwordElements) {
                    if (this.isPasswordPresent(passwordElement)) {
                        this.pageManager.suppressDetection("prefilled password");
                        return true;
                    }
                }
                this.addListeners();
            }
        }
        return false;
    }
    shouldRun() {
        return this.pageManager.passwordElements.length > 0
            && this.config.trustPagesWithAutofilledPasswords
            && !this.passwordMayBeInjected;
    }
    setExponentialInterval(callback, initial_interval, backoff_factor) {
        const id = this.currentIntervalId;
        this.setExponentialIntervalImpl(callback, initial_interval, backoff_factor, id);
    }
    setExponentialIntervalImpl(callback, interval, backoff_factor, id) {
        setTimeout(() => {
            if (id !== this.currentIntervalId) {
                return;
            }
            callback();
            const next_interval = interval * backoff_factor;
            this.setExponentialIntervalImpl(callback, next_interval, backoff_factor, id);
        }, interval);
    }
    clearIntervals() {
        this.currentIntervalId += 1;
    }
    checkChromiumAutofill() {
        if (document.querySelectorAll(this.webkitAutofillSelector).length > 0) {
            this.pageManager.suppressDetection("Chromium autofill");
            return true;
        }
        return false;
    }
    addListeners() {
        this.pageManager.passwordElements.forEach(pw => pw.addEventListener("input", this.onInputCB));
    }
    removeListeners() {
        this.pageManager.passwordElements.forEach(pw => pw.removeEventListener("input", this.onInputCB));
    }
    onInput(event) {
        this.removeListeners();
        if (this.alreadySuppressed) {
            return;
        }
        if (event.isTrusted) {
            this.trustedInputEventSeen = true;
            if (this.isFirefox && event.inputType === "insertReplacementText") {
                this.pageManager.suppressDetection("Firefox autofill");
            }
        }
        else {
            this.passwordMayBeInjected = true;
            this.pageManager.suppressDetection("password injection");
        }
    }
    isPasswordPresent(passwordElement) {
        let htmlValue = "";
        if (passwordElement.hasAttribute("value")) {
            htmlValue = passwordElement.getAttribute("value");
        }
        if (passwordElement.value.length > 0) {
            return passwordElement.value !== htmlValue;
        }
        return false;
    }
    get alreadySuppressed() {
        return this.pageManager.isSuppressed;
    }
}
class LinkAnalyserSuppressor extends BasePageSuppressor {
    checkForSuppressionMarkers() {
        if (this.shouldRun()) {
            const res = new LinkAnalyserSuppressor.Result();
            if (res.pageMightBeSafe()) {
                this.pageManager.suppressDetection("link analyser");
                return true;
            }
        }
        return false;
    }
    shouldRun() {
        return this.pageManager.interestingInputElements.length > 0 && this.config.useLinkAnalysisHeuristic;
    }
}
LinkAnalyserSuppressor.Result = class {
    constructor() {
        this.linkCount = 0;
        this.pageHost = "";
        this.nullLink = {
            total: 0,
            withOnClickHandler: 0
        };
        this.externalLink = {
            total: 0,
            countByDomain: new Map()
        };
        this.pageHost = this.buildBaseHostName(new URL(location.href));
        const allLinks = document.querySelectorAll("a");
        this.linkCount = allLinks.length;
        allLinks.forEach(link => {
            const linkUrl = this.checkforNullLink(link);
            if (linkUrl) {
                this.checkForExternalLink(linkUrl);
            }
        });
    }
    checkForExternalLink(url) {
        if (this.pageHost !== this.buildBaseHostName(url)) {
            ++this.externalLink.total;
            let count = this.externalLink.countByDomain.get(url.hostname);
            if (maybe_none(count)) {
                count = 1;
            }
            else {
                ++count;
            }
            this.externalLink.countByDomain.set(url.hostname, count);
        }
    }
    checkforNullLink(linkElement) {
        let url = null;
        try {
            url = new URL(linkElement.href);
        }
        catch (e) {
            ++this.nullLink.total;
            return null;
        }
        if ((url.protocol !== "http:" && url.protocol !== "https:")
            || (url.href.search("#") !== -1 && url.hash.length === 0)) {
            ++this.nullLink.total;
            if (linkElement.onclick) {
                ++this.nullLink.withOnClickHandler;
            }
            return null;
        }
        return url;
    }
    buildBaseHostName(url) {
        const originalTLDSuffix = new Set(["com", "org", "net", "int", "edu", "gov", "mil"]);
        const parts = url.hostname.split(".");
        switch (parts.length) {
            case 0:
            case 1:
                return null;
            case 2:
                return url.hostname;
            case 3:
                if (parts[0] === "www" || originalTLDSuffix.has(parts[2])) {
                    return parts.slice(1).join(".");
                }
                else {
                    return url.hostname;
                }
            default:
                return parts.slice(1).join(".");
        }
    }
    pageMightBeSafe() {
        if (this.linkCount < 4) {
            return false;
        }
        if (this.nullLink.total / this.linkCount > 0.4) {
            return false;
        }
        if (this.externalLink.total / this.linkCount > 0.6) {
            return false;
        }
        return true;
    }
};

;// CONCATENATED MODULE: ../lib/common/number-utils.ts
function number_utils_isInRange(value, min, max) {
    return (value >= min) && (value <= max);
}
function number_utils_isNumber(value) {
    return typeof value === "number";
}

;// CONCATENATED MODULE: ../lib/host/message-types.ts

var MessageType;
(function (MessageType) {
    MessageType[MessageType["handshakeV1"] = 0] = "handshakeV1";
    MessageType[MessageType["launchBrowserRequestV1"] = 1] = "launchBrowserRequestV1";
    MessageType[MessageType["launchBrowserResponseV1"] = 2] = "launchBrowserResponseV1";
    MessageType[MessageType["pageEventV1"] = 3] = "pageEventV1";
    MessageType[MessageType["configRequestV1"] = 4] = "configRequestV1";
    MessageType[MessageType["configChangedV1"] = 5] = "configChangedV1";
    MessageType[MessageType["trustUrlV1"] = 6] = "trustUrlV1";
    MessageType[MessageType["downloadCompleteV1"] = 7] = "downloadCompleteV1";
    MessageType[MessageType["logMessageV1"] = 8] = "logMessageV1";
    MessageType[MessageType["addUserTrustedOriginV1"] = 9] = "addUserTrustedOriginV1";
    MessageType[MessageType["addUserUntrustedOriginV1"] = 10] = "addUserUntrustedOriginV1";
    MessageType[MessageType["helperErrorV1"] = 11] = "helperErrorV1";
    MessageType[MessageType["dormantStateChangedV1"] = 12] = "dormantStateChangedV1";
    MessageType[MessageType["extensionReadyV1"] = 13] = "extensionReadyV1";
    MessageType[MessageType["externalAppLinkRequestV1"] = 14] = "externalAppLinkRequestV1";
    MessageType[MessageType["externalAppLinkResponseV1"] = 15] = "externalAppLinkResponseV1";
    MessageType[MessageType["isFileURLTrustedRequestV1"] = 16] = "isFileURLTrustedRequestV1";
    MessageType[MessageType["isFileURLTrustedResponseV1"] = 17] = "isFileURLTrustedResponseV1";
    MessageType[MessageType["blockedFileRequestV1"] = 18] = "blockedFileRequestV1";
    MessageType[MessageType["blockedFileResponseV1"] = 19] = "blockedFileResponseV1";
    MessageType[MessageType["popupDataRequestV1"] = 20] = "popupDataRequestV1";
    MessageType[MessageType["popupDataResponseV1"] = 21] = "popupDataResponseV1";
    MessageType[MessageType["clearRememberedDecisionsV1"] = 22] = "clearRememberedDecisionsV1";
    MessageType[MessageType["blockedPageStringsRequestV1"] = 23] = "blockedPageStringsRequestV1";
    MessageType[MessageType["blockedPageStringsResponseV1"] = 24] = "blockedPageStringsResponseV1";
    MessageType[MessageType["heartbeatV1"] = 25] = "heartbeatV1";
    MessageType[MessageType["enabledFeaturesRequestV2"] = 26] = "enabledFeaturesRequestV2";
    MessageType[MessageType["enabledFeaturesResponseV2"] = 27] = "enabledFeaturesResponseV2";
    MessageType[MessageType["clearRememberedOriginV3"] = 28] = "clearRememberedOriginV3";
    MessageType[MessageType["optionsDataRequestV3"] = 29] = "optionsDataRequestV3";
    MessageType[MessageType["optionsDataResponseV3"] = 30] = "optionsDataResponseV3";
    MessageType[MessageType["configChangedV3"] = 31] = "configChangedV3";
    MessageType[MessageType["reputationChangedV3"] = 32] = "reputationChangedV3";
    MessageType[MessageType["configChangedV4"] = 33] = "configChangedV4";
    MessageType[MessageType["blockedPageDataRequestV4"] = 34] = "blockedPageDataRequestV4";
    MessageType[MessageType["blockedPageDataResponseV4"] = 35] = "blockedPageDataResponseV4";
    MessageType[MessageType["configChangedV5"] = 36] = "configChangedV5";
    MessageType[MessageType["popupDataResponseV5"] = 37] = "popupDataResponseV5";
    MessageType[MessageType["blockedPageDataResponseV6"] = 38] = "blockedPageDataResponseV6";
    MessageType[MessageType["trustUrlV6"] = 39] = "trustUrlV6";
    MessageType[MessageType["configChangedV7"] = 40] = "configChangedV7";
    MessageType[MessageType["trustUrlV8"] = 41] = "trustUrlV8";
    MessageType[MessageType["dontAskAgainV8"] = 42] = "dontAskAgainV8";
    MessageType[MessageType["configChangedV8"] = 43] = "configChangedV8";
    MessageType[MessageType["popupDataResponseV9"] = 44] = "popupDataResponseV9";
    MessageType[MessageType["dontAskAgainV9"] = 45] = "dontAskAgainV9";
    MessageType[MessageType["configChangedV9"] = 46] = "configChangedV9";
    MessageType[MessageType["stopHelperV10"] = 47] = "stopHelperV10";
    MessageType[MessageType["edgeAckV10"] = 48] = "edgeAckV10";
    MessageType[MessageType["endOfStreamV10"] = 49] = "endOfStreamV10";
    MessageType[MessageType["heartbeatV10"] = 50] = "heartbeatV10";
    MessageType[MessageType["popupDataResponseV11"] = 51] = "popupDataResponseV11";
    MessageType[MessageType["configChangedV11"] = 52] = "configChangedV11";
    MessageType[MessageType["configChangedV12"] = 53] = "configChangedV12";
    MessageType[MessageType["configChangedV13"] = 54] = "configChangedV13";
    MessageType[MessageType["configChangedV14"] = 55] = "configChangedV14";
    MessageType[MessageType["configChangedV15"] = 56] = "configChangedV15";
    MessageType[MessageType["externalAppLinkRequestV16"] = 57] = "externalAppLinkRequestV16";
    MessageType[MessageType["configChangedV17"] = 58] = "configChangedV17";
    MessageType[MessageType["popupDataResponseV18"] = 59] = "popupDataResponseV18";
    MessageType[MessageType["popupDataResponseV19"] = 60] = "popupDataResponseV19";
    MessageType[MessageType["configChangedV19"] = 61] = "configChangedV19";
    MessageType[MessageType["configChangedV20"] = 62] = "configChangedV20";
    MessageType[MessageType["popupDataResponseV21"] = 63] = "popupDataResponseV21";
    MessageType[MessageType["configChangedV21"] = 64] = "configChangedV21";
    MessageType[MessageType["phishingDetectionTrippedV22"] = 65] = "phishingDetectionTrippedV22";
    MessageType[MessageType["phishingDetectionSuppressedV22"] = 66] = "phishingDetectionSuppressedV22";
    MessageType[MessageType["phishingInformationSubmittedV22"] = 67] = "phishingInformationSubmittedV22";
    MessageType[MessageType["frameLoadResponseV22"] = 68] = "frameLoadResponseV22";
    MessageType[MessageType["contentScriptDataV22"] = 69] = "contentScriptDataV22";
    MessageType[MessageType["onFrameDomUpdateV22"] = 70] = "onFrameDomUpdateV22";
    MessageType[MessageType["freezeScreenshotV22"] = 71] = "freezeScreenshotV22";
    MessageType[MessageType["onPhishingOverlayClickV22"] = 72] = "onPhishingOverlayClickV22";
    MessageType[MessageType["onPhishingCategoryChangedV22"] = 73] = "onPhishingCategoryChangedV22";
    MessageType[MessageType["phishingCategoryRequestV22"] = 74] = "phishingCategoryRequestV22";
    MessageType[MessageType["phishingCategoryResponseV22"] = 75] = "phishingCategoryResponseV22";
    MessageType[MessageType["phishingHostStatusChangeV22"] = 76] = "phishingHostStatusChangeV22";
    MessageType[MessageType["preparePhishingReportV22"] = 77] = "preparePhishingReportV22";
    MessageType[MessageType["addPhishingReportActionV22"] = 78] = "addPhishingReportActionV22";
    MessageType[MessageType["sendPhishingReportV22"] = 79] = "sendPhishingReportV22";
    MessageType[MessageType["helperRunningV22"] = 80] = "helperRunningV22";
    MessageType[MessageType["helperExitedV22"] = 81] = "helperExitedV22";
    MessageType[MessageType["optionsDataResponseV22"] = 82] = "optionsDataResponseV22";
    MessageType[MessageType["configChangedV22"] = 83] = "configChangedV22";
    MessageType[MessageType["configChangedV23"] = 84] = "configChangedV23";
    MessageType[MessageType["popupDataResponseV24"] = 85] = "popupDataResponseV24";
    MessageType[MessageType["identityProtectionRunningV24"] = 86] = "identityProtectionRunningV24";
    MessageType[MessageType["configChangedV24"] = 87] = "configChangedV24";
    MessageType[MessageType["popupDataResponseV25"] = 88] = "popupDataResponseV25";
    MessageType[MessageType["minMessageType"] = 0] = "minMessageType";
    MessageType[MessageType["maxMessageType"] = 88] = "maxMessageType";
})(MessageType || (MessageType = {}));
function isMessageType(type) {
    return number_utils_isInRange(type, MessageType.minMessageType, MessageType.maxMessageType);
}
const frequentlySentMessageTypes = new Set([
    MessageType.logMessageV1,
    MessageType.pageEventV1,
    MessageType.heartbeatV1,
    MessageType.extensionReadyV1,
    MessageType.heartbeatV10,
    MessageType.phishingDetectionTrippedV22,
    MessageType.phishingDetectionSuppressedV22,
    MessageType.phishingInformationSubmittedV22,
    MessageType.frameLoadResponseV22,
    MessageType.contentScriptDataV22,
    MessageType.onFrameDomUpdateV22,
    MessageType.freezeScreenshotV22,
    MessageType.onPhishingOverlayClickV22,
    MessageType.onPhishingCategoryChangedV22,
    MessageType.blockedFileRequestV1,
    MessageType.blockedFileResponseV1,
    MessageType.externalAppLinkRequestV16,
    MessageType.externalAppLinkResponseV1,
]);
function message_types_isFrequentlySentMessageType(type) {
    return frequentlySentMessageTypes.has(type);
}

;// CONCATENATED MODULE: ../lib/common/array-utils.ts

function isEmpty(array) {
    return array.length === 0;
}
function first(array) {
    return array[0];
}
function second(array) {
    return array[1];
}
function last(array) {
    return array[array.length - 1];
}
function rest(array) {
    return array.slice(1);
}
function copyArray(array) {
    const identity = (value) => {
        return value;
    };
    return array.map(identity);
}
function array_utils_isArray(value) {
    return Array.isArray(value);
}
function isWellDefinedArray(array) {
    return !array.some(none);
}
function newArray(length, value) {
    const array = new Array();
    for (let index = 0; index < length; index += 1) {
        array.push(value);
    }
    return array;
}
function findIndex(array, value) {
    const notFound = -1;
    const index = array.indexOf(value);
    if (index === notFound) {
        return undefined;
    }
    return index;
}
function findAllIndices(array, predicate) {
    const results = new Array();
    array.forEach((element, index) => {
        if (predicate(element)) {
            results.push(index);
        }
    });
    return results;
}
function compareArrays(a, b, compare = isEqual) {
    if (a.length !== b.length) {
        return false;
    }
    const length = a.length;
    for (let i = 0; i < length; i += 1) {
        if (!compare(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
function has(array, value) {
    return some(findIndex(array, value));
}
function findUnique(array, predicate) {
    const matchingElements = array.filter(predicate);
    if (matchingElements.length !== 1) {
        return undefined;
    }
    return first(matchingElements);
}
function maybeFirst(array) {
    if (none(array)) {
        return undefined;
    }
    return first(array);
}
function deduplicateAndSort(array) {
    return Array.from(new Set(array)).sort();
}

;// CONCATENATED MODULE: ../lib/host/messages.ts





function isSerializedPhishingNavSeqData(value) {
    return isObject(value) &&
        isNumber(value.version) &&
        isNumber(value.builtinRulesPrecedence) &&
        isArray(value.seqs);
}
function isSerializedNewTabPageUrlsV7(value) {
    return isObject(value) &&
        isArray(value.chrome) &&
        isArray(value.firefox) &&
        isArray(value.edge);
}
function isSerializedNewTabPageUrlsV12(value) {
    return isObject(value) &&
        isArray(value.chrome) &&
        isArray(value.firefox) &&
        isArray(value.edge) &&
        isArray(value.edgeChromium);
}
function isSerializedLPSConsumersV13(value) {
    return isArray(value);
}
function isSerializedLPSConsumersV15(value) {
    return isObject(value) &&
        isArray(value.chrome) &&
        isArray(value.firefox) &&
        isArray(value.edgeChromium) &&
        isArray(value.secureBrowser) &&
        isBoolean(value.sbxSecureBrowserMode);
}
;
function isTabMessage(message) {
    return message.tabId !== undefined;
}
function IsIdMessage(message) {
    return message.id !== undefined;
}
class LaunchBrowserRequestV1 {
    constructor(urlSpec, id) {
        this.urlSpec = urlSpec;
        this.id = id;
    }
}
class LaunchBrowserResponseV1 {
    constructor(urlSpec, id, didLaunch) {
        this.urlSpec = urlSpec;
        this.id = id;
        this.didLaunch = didLaunch;
    }
}
class HandshakeV1 {
    constructor(versions) {
        this.versions = versions;
    }
}
class ConfigRequestV1 {
    constructor(phishingSourceSitesVersion, phishingNavigationSequencesVersion, browserInfo) {
        this.phishingSourceSitesVersion = phishingSourceSitesVersion;
        this.phishingNavigationSequencesVersion = phishingNavigationSequencesVersion;
        this.browserInfo = browserInfo;
    }
}
class ExtensibleConfigChangedV1 {
    constructor(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser) {
        this.isEnabled = isEnabled;
        this.blockedPageStrings = blockedPageStrings;
        this.phishingSourceSites = phishingSourceSites;
        this.phishingNavigationSequences = phishingNavigationSequences;
        this.trustedSites = trustedSites;
        this.untrustedSites = untrustedSites;
        this.userTrustedOrigins = userTrustedOrigins;
        this.userUntrustedOrigins = userUntrustedOrigins;
        this.openPhishingLinksInSecureBrowser = openPhishingLinksInSecureBrowser;
    }
}
class ReputationChangedV3 {
    constructor(index, total, reputableSites) {
        this.index = index;
        this.total = total;
        this.reputableSites = reputableSites;
    }
}
class DownloadCompleteV1 {
    constructor(urlSpec, fileSpec) {
        this.urlSpec = urlSpec;
        this.fileSpec = fileSpec;
    }
}
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Error"] = 1] = "Error";
})(LogLevel || (LogLevel = {}));
class LogMessageV1 {
    constructor(level, message) {
        this.level = level;
        this.message = message;
    }
}
class HelperErrorV1 {
    constructor(errorType, errorMessage) {
        this.errorType = errorType;
        this.errorMessage = errorMessage;
    }
}
class DormantStateChangedV1 {
    constructor(isDormant) {
        this.isDormant = isDormant;
    }
}
class ExtensionReadyV1 {
    constructor(tabId) {
        this.tabId = tabId;
    }
}
class ExternalAppLinkResponseV1 {
    constructor(navigateToSpec) {
        this.navigateToSpec = navigateToSpec;
    }
}
class AddUserTrustedOriginV1 {
    constructor(origin) {
        this.origin = origin;
    }
}
class AddUserUntrustedOriginV1 {
    constructor(origin) {
        this.origin = origin;
    }
}
class IsFileURLTrustedRequestV1 {
    constructor(id, fileUrlSpec) {
        this.id = id;
        this.fileUrlSpec = fileUrlSpec;
    }
}
class IsFileURLTrustedResponseV1 {
    constructor(id, fileUrlSpec, isTrusted) {
        this.id = id;
        this.fileUrlSpec = fileUrlSpec;
        this.isTrusted = isTrusted;
    }
}
class BlockedFileRequestV1 {
    constructor(fileUrlSpec) {
        this.fileUrlSpec = fileUrlSpec;
    }
}
class BlockedFileResponseV1 {
    constructor(fileUrlSpec, isTrusted) {
        this.fileUrlSpec = fileUrlSpec;
        this.isTrusted = isTrusted;
    }
}
class PopupDataRequestV1 {
    constructor() { }
}
class ClearRememberedDecisionsV1 {
    constructor() { }
}
class EnabledFeaturesRequestV2 {
    constructor(id, respondImmediately) {
        this.id = id;
        this.respondImmediately = respondImmediately;
    }
}
class EnabledFeaturesResponseV2 {
    constructor(id, linkProtection, fileURLProtection, pdfProtection, downloadProtection) {
        this.id = id;
        this.linkProtection = linkProtection;
        this.fileURLProtection = fileURLProtection;
        this.pdfProtection = pdfProtection;
        this.downloadProtection = downloadProtection;
    }
}
var RememberedOriginTypes;
(function (RememberedOriginTypes) {
    RememberedOriginTypes[RememberedOriginTypes["Trusted"] = 0] = "Trusted";
    RememberedOriginTypes[RememberedOriginTypes["Untrusted"] = 1] = "Untrusted";
})(RememberedOriginTypes || (RememberedOriginTypes = {}));
class ClearRememberedOriginV3 {
    constructor(origin, type) {
        this.origin = origin;
        this.type = type;
    }
}
class ExtensibleConfigChangedV3 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV1)) {
    constructor(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites) {
        super(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser);
        this.prioritiseTrustedSites = prioritiseTrustedSites;
    }
}
class ExtensibleConfigChangedV4 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV3)) {
    constructor(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized) {
        super(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites);
        this.promptForUncategorized = promptForUncategorized;
    }
}
class ExtensibleConfigChangedV5 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV4)) {
    constructor(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct) {
        super(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized);
        this.isEnterpriseProduct = isEnterpriseProduct;
    }
}
class ExtensibleConfigChangedV7 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV5)) {
    constructor(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, newTabPageUrls) {
        super(isEnabled, blockedPageStrings, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct);
        this.newTabPageUrls = newTabPageUrls;
    }
}
class TrustUrlV8 {
    constructor(navigateToUrlSpec, blockedUrlSpec, trustUrl, rememberDecision, contentType) {
        this.navigateToUrlSpec = navigateToUrlSpec;
        this.blockedUrlSpec = blockedUrlSpec;
        this.trustUrl = trustUrl;
        this.rememberDecision = rememberDecision;
        this.contentType = contentType;
    }
}
class ExtensibleConfigChangedV8 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV7)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL) {
        super(isEnabled, undefined, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, newTabPageUrls);
        this.isConsumerProduct = isConsumerProduct;
        this.blockedPageLearnMoreURL = blockedPageLearnMoreURL;
    }
}
class ExtensibleConfigChangedV9 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV8)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL);
        this.dontAskAgain = dontAskAgain;
    }
}
class HeartbeatV10 {
    constructor(id) {
        this.id = id;
    }
}
var SureClickStatus;
(function (SureClickStatus) {
    SureClickStatus[SureClickStatus["Enabled"] = 0] = "Enabled";
    SureClickStatus[SureClickStatus["Disabled"] = 1] = "Disabled";
    SureClickStatus[SureClickStatus["InitRequired"] = 2] = "InitRequired";
    SureClickStatus[SureClickStatus["Unlicensed"] = 3] = "Unlicensed";
    SureClickStatus[SureClickStatus["Unknown"] = 4] = "Unknown";
})(SureClickStatus || (SureClickStatus = {}));
class ExtensibleConfigChangedV11 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV9)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain, secureBrowserRedirectTrustedSites, productStatus) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain);
        this.secureBrowserRedirectTrustedSites = secureBrowserRedirectTrustedSites;
        this.productStatus = productStatus;
    }
}
class ExtensibleConfigChangedV12 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV11)) {
}
class ExtensibleConfigChangedV13 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV12)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain, secureBrowserRedirectTrustedSites, sureClickStatus);
        this.linkProtectionServiceConsumers = linkProtectionServiceConsumers;
    }
}
class ExtensibleConfigChangedV14 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV13)) {
}
class ExtensibleConfigChangedV15 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV14)) {
}
class ExternalAppLinkRequestV16 {
    constructor(linkSpec, externalAppName, vmid) {
        this.linkSpec = linkSpec;
        this.externalAppName = externalAppName;
        this.vmid = vmid;
    }
}
class ExtensibleConfigChangedV17 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV15)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, isEnterpriseProduct, isConsumerProduct, newTabPageUrls, blockedPageLearnMoreURL, dontAskAgain, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers);
        this.closeLaunchedPageTabs = closeLaunchedPageTabs;
    }
}
var ProductTypes;
(function (ProductTypes) {
    ProductTypes[ProductTypes["Unknown"] = 0] = "Unknown";
    ProductTypes[ProductTypes["LegacyEnterprise"] = 1] = "LegacyEnterprise";
    ProductTypes[ProductTypes["LegacyOther"] = 2] = "LegacyOther";
    ProductTypes[ProductTypes["DaaS"] = 3] = "DaaS";
    ProductTypes[ProductTypes["Unbundled"] = 4] = "Unbundled";
    ProductTypes[ProductTypes["Kodiak"] = 5] = "Kodiak";
    ProductTypes[ProductTypes["Foundation"] = 6] = "Foundation";
})(ProductTypes || (ProductTypes = {}));
class ExtensibleConfigChangedV19 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV17)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs, isHPConsumerMachine, productType) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, undefined, undefined, newTabPageUrls, blockedPageLearnMoreURL, undefined, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs);
        this.isHPConsumerMachine = isHPConsumerMachine;
        this.productType = productType;
    }
}
class ExtensibleConfigChangedV20 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV19)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs, isHPConsumerMachine, productType);
        this.intranetSites = intranetSites;
    }
}
class ExtensibleConfigChangedV21 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV20)) {
}
class PhishingDetectionTrippedV22 {
    constructor() { }
}
class PhishingDetectionSuppressedV22 {
    constructor() { }
}
class PhishingInformationSubmittedV22 {
    constructor() { }
}
class FrameLoadResponseV22 {
    constructor(frameId, linkProtectionWouldBlock, enabled, config) {
        this.frameId = frameId;
        this.linkProtectionWouldBlock = linkProtectionWouldBlock;
        this.enabled = enabled;
        this.config = config;
    }
}
class ContentScriptDataV22 {
    constructor(linkProtectionWouldBlock, enabled, config) {
        this.linkProtectionWouldBlock = linkProtectionWouldBlock;
        this.enabled = enabled;
        this.config = config;
    }
}
class OnFrameDomUpdateV22 {
    constructor(hasInterestingInput, hasCategory) {
        this.hasInterestingInput = hasInterestingInput;
        this.hasCategory = hasCategory;
    }
}
class FreezeScreenshotV22 {
    constructor() { }
}
class OnPhishingOverlayClickV22 {
    constructor(action) {
        this.action = action;
    }
}
class OnPhishingCategoryChangedV22 {
    constructor(category) {
        this.category = category;
    }
    ;
}
class PhishingCategoryRequestV22 {
    constructor(id, url) {
        this.id = id;
        this.url = url;
    }
}
class PhishingCategoryResponseV22 {
    constructor(id, category) {
        this.id = id;
        this.category = category;
    }
}
class PhishingHostStatusChangeV22 {
    constructor(hostnames, allowInput) {
        this.hostnames = hostnames;
        this.allowInput = allowInput;
    }
}
class PreparePhishingReportV22 {
    constructor(tabId, timestamp, extensionId, extensionVersion, cloudListVersion, alertType, url, screenshotBase64, tabActivities, annotations) {
        this.tabId = tabId;
        this.timestamp = timestamp;
        this.extensionId = extensionId;
        this.extensionVersion = extensionVersion;
        this.cloudListVersion = cloudListVersion;
        this.alertType = alertType;
        this.url = url;
        this.screenshotBase64 = screenshotBase64;
        this.tabActivities = tabActivities;
        this.annotations = annotations;
    }
}
class AddPhishingReportActionV22 {
    constructor(tabId, action) {
        this.tabId = tabId;
        this.action = action;
    }
}
class SendPhishingReportV22 {
    constructor(tabId) {
        this.tabId = tabId;
    }
}
class OptionsDataResponseV22 {
    constructor(ipShowList, ipUserAllowedHosts) {
        this.ipShowList = ipShowList;
        this.ipUserAllowedHosts = ipUserAllowedHosts;
    }
}
class ExtensibleConfigChangedV22 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV21)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites, identityProtection) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, linkProtectionServiceConsumers, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites);
        this.identityProtection = identityProtection;
    }
}
class ExtensibleConfigChangedV23 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV22)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites, identityProtection) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, undefined, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites, identityProtection);
    }
}
class IdentityProtectionRunningV24 {
    constructor(running) {
        this.running = running;
    }
}
class ExtensibleConfigChangedV24 extends (/* unused pure expression or super */ null && (ExtensibleConfigChangedV23)) {
    constructor(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites, identityProtection, ipIsSureClick) {
        super(isEnabled, phishingSourceSites, phishingNavigationSequences, trustedSites, untrustedSites, userTrustedOrigins, userUntrustedOrigins, openPhishingLinksInSecureBrowser, prioritiseTrustedSites, promptForUncategorized, newTabPageUrls, blockedPageLearnMoreURL, secureBrowserRedirectTrustedSites, sureClickStatus, closeLaunchedPageTabs, isHPConsumerMachine, productType, intranetSites, identityProtection);
        this.ipIsSureClick = ipIsSureClick;
    }
}
class PopupDataResponseV25 {
    constructor(popupMessage, showClearRememberedDecisionsInfo, showSecureBrowserWindowButton, productType, helpLinkURL) {
        this.popupMessage = popupMessage;
        this.showClearRememberedDecisionsInfo = showClearRememberedDecisionsInfo;
        this.showSecureBrowserWindowButton = showSecureBrowserWindowButton;
        this.productType = productType;
        this.helpLinkURL = helpLinkURL;
    }
}
class Message {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
function messages_messageToString(message) {
    return string_utils_toString(message);
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/page-collectors.ts


class BasePageCollector {
    constructor(pageManager, messageSender) {
        this.pageManager = pageManager;
        this.messageSender = messageSender;
    }
}
class OnSubmitCollector extends BasePageCollector {
    constructor() {
        super(...arguments);
        this.forms = [];
        this.onSubmittedCB = () => this.onSubmitted();
    }
    onSubmitted() {
        if (this.pageManager.hasTripped) {
            this.messageSender.sendMessage(MessageType.phishingInformationSubmittedV22, new PhishingInformationSubmittedV22());
        }
    }
    reset() {
        for (const form of this.forms) {
            form.removeEventListener("submit", this.onSubmittedCB);
        }
        this.forms = [];
    }
    setup() {
        this.forms = Array.from(document.querySelectorAll("form"));
        for (const form of this.forms) {
            form.addEventListener("submit", this.onSubmittedCB);
        }
    }
}

;// CONCATENATED MODULE: ../lib/common/dom-utils.ts

function navigateDocument(document, url) {
    document.location.href = URLToString(url);
}
const INPUT_TAG = "INPUT";

;// CONCATENATED MODULE: ../lib/common/id-generator.ts


class IdGenerator {
    constructor() {
        this.nextId = 0;
    }
    generateId() {
        const id = this.nextId;
        this.nextId += 1;
        return id;
    }
}
function hashId(id, seed = 0) {
    return murmurHash(id, seed);
}
function isSameId(a, b) {
    return a === b;
}
function makeIdHashSet() {
    return new HashSet(hashId, isSameId);
}
function makeIdHashMap() {
    return new HashMap(hashId, isSameId);
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/element-disabler.ts


class ElementDisabler {
    constructor() {
        this.originalStateKey = "brOriginalState";
        this.userInputCacheKey = "hpUserInput";
        this.blockedStyle = "background-image: url(" + chrome.runtime.getURL("icons/ip16.png") + ");" +
            "background-position: calc(100% - 2px) 50%;" +
            "background-repeat: no-repeat;" +
            "background-color: rgb(200,200,200);";
        this.originalStyles = new Map();
        this.idGenerator = new IdGenerator();
    }
    disableElement(element) {
        element.dataset.hpBlockedId = this.generateBlockedId();
        if (!element.disabled && !element.dataset.hasOwnProperty(this.userInputCacheKey)) {
            try {
                if (element.value !== "") {
                    if (element.type !== "password") {
                        element.dataset[this.userInputCacheKey] = element.value;
                    }
                    element.value = "";
                }
            }
            catch (_a) {
                delete element.dataset[this.userInputCacheKey];
            }
        }
        element.dataset[this.originalStateKey] = element.disabled ? "true" : "false";
        element.disabled = true;
        const originalStyle = element.style.cssText;
        element.style.cssText = this.blockedStyle;
        this.originalStyles.set(element.dataset.hpBlockedId, originalStyle);
    }
    resetElement(element) {
        var _a;
        if (maybe_none(element.dataset.hpBlockedId)) {
            return;
        }
        const originalStyle = (_a = this.originalStyles.get(element.dataset.hpBlockedId)) !== null && _a !== void 0 ? _a : "";
        element.style.cssText = originalStyle;
        this.originalStyles.delete(element.dataset.hpBlockedId);
        if (element.dataset[this.originalStateKey] === "true") {
            element.disabled = true;
        }
        else {
            element.disabled = false;
        }
        delete element.dataset[this.originalStateKey];
        const cachedInput = element.dataset[this.userInputCacheKey];
        if (maybe_some(cachedInput)) {
            element.value = cachedInput;
            delete element.dataset[this.userInputCacheKey];
        }
        delete element.dataset.hpBlockedId;
    }
    generateBlockedId() {
        return `hp-blocked-${this.idGenerator.generateId()}`;
    }
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/dom-monitor.ts

class DOMMonitor {
    constructor(onInterestingDomMutation) {
        this.onInterestingDomMutation = onInterestingDomMutation;
        this.childObserver = new MutationObserver(() => this.onChildMutation());
        this.attributeObserver = new MutationObserver(mutations => this.onAttributeMutation(mutations));
    }
    resume() {
        this.childObserver.observe(document.body, { childList: true, subtree: true });
        if (document.querySelector(INPUT_TAG)) {
            this.attributeObserver.observe(document.body, { attributes: true, subtree: true });
        }
    }
    suspend() {
        this.childObserver.disconnect();
        this.attributeObserver.disconnect();
    }
    onChildMutation() {
        this.onInterestingDomMutation();
    }
    onAttributeMutation(mutationRecords) {
        for (const record of mutationRecords) {
            if (record.target instanceof Element && record.target.tagName === INPUT_TAG
                && record.type === "attributes" && record.attributeName === "type") {
                this.onInterestingDomMutation();
                return;
            }
        }
    }
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/page-monitors.ts


class BasePageMonitor {
    constructor(pageManager, messageSender) {
        this.pageManager = pageManager;
        this.messageSender = messageSender;
    }
}
class ScreenshotFreezer extends BasePageMonitor {
    constructor() {
        super(...arguments);
        this.stopped = false;
        this.onInputCB = (event) => this.onInput(event);
    }
    start() {
        if (!this.stopped) {
            this.pageManager.interestingInputElements.forEach(e => e.addEventListener("input", this.onInputCB));
        }
    }
    pause() {
        if (!this.stopped) {
            this.pageManager.interestingInputElements.forEach(e => e.removeEventListener("input", this.onInputCB));
        }
    }
    stop() {
        this.pause();
        this.stopped = true;
    }
    onInput(event) {
        this.messageSender.sendMessage(MessageType.freezeScreenshotV22, new FreezeScreenshotV22());
        this.stop();
    }
}

;// CONCATENATED MODULE: ../lib/common/api-listener.ts


function suppressRuntimeErrors(knownErrorMessages) {
    const lastError = checkRuntimeLastError();
    if (none(lastError) || knownErrorMessages.some(m => lastError.startsWith(m))) {
        return;
    }
    logError(lastError);
}
function checkRuntimeLastError() {
    const lastError = chrome.runtime.lastError;
    if (lastError) {
        return lastError.message;
    }
    return undefined;
}
class ApiListenerManager {
    constructor() {
        this.eventData = [];
    }
    addEvent(event, callback, filter, extraInfo) {
        this.eventData.push([event, callback, filter, extraInfo]);
    }
    registerListeners() {
        for (const [event, callback, filter, extraInfo] of this.eventData) {
            if (!event.hasListener(callback)) {
                if (some(filter)) {
                    if (some(extraInfo)) {
                        event.addListener(callback, filter, extraInfo);
                    }
                    else {
                        event.addListener(callback, filter);
                    }
                }
                else {
                    event.addListener(callback);
                }
            }
        }
    }
    unregisterListeners() {
        for (const [event, callback, filter, extraInfo] of this.eventData) {
            if (event.hasListener(callback)) {
                event.removeListener(callback);
            }
        }
    }
}

;// CONCATENATED MODULE: ../lib/common/date-utils.ts
function currentDateTimeString() {
    return new Date().toISOString();
}

;// CONCATENATED MODULE: ../lib/common/storage.ts
var StorageKey;
(function (StorageKey) {
    StorageKey["configMessage"] = "configMessage";
    StorageKey["reputableSites"] = "reputableSites";
    StorageKey["enabledFeatures"] = "enabledFeatures";
    StorageKey["failedReloadAttempts"] = "failedReloadAttempts";
    StorageKey["historySeeder"] = "historySeeder";
    StorageKey["customerList"] = "customerList";
    StorageKey["userEnabledLogging"] = "userEnabledLogging";
})(StorageKey || (StorageKey = {}));

;// CONCATENATED MODULE: ../lib/common/event-dispatcher.ts

class EventDispatcher {
    constructor() {
        this.eventHandlers = new Array();
        this.oneShotEventHandlers = new Array();
    }
    registerEventHandler(eventHandler) {
        this.eventHandlers.push(eventHandler);
    }
    registerOneShotEventHandler(eventHandler) {
        this.oneShotEventHandlers.push(eventHandler);
    }
    dispatchEvent(event) {
        for (const handleEvent of this.eventHandlers) {
            handleEvent(event);
        }
        for (const handleEvent of this.oneShotEventHandlers) {
            handleEvent(event);
        }
        this.oneShotEventHandlers = [];
    }
}
class ConditionDispatcher {
    constructor() {
        this.setCondition = doOnce(() => { this.setConditionImpl(); });
        this.condition = false;
        this.conditionHandlers = new Array();
    }
    registerConditionListener(conditionHandler) {
        if (this.condition) {
            conditionHandler();
        }
        else {
            this.conditionHandlers.push(conditionHandler);
        }
    }
    setConditionImpl() {
        this.condition = true;
        for (const handleCondition of this.conditionHandlers) {
            handleCondition();
        }
        this.conditionHandlers = [];
    }
}

;// CONCATENATED MODULE: ../lib/common/log.ts







class ConsoleLogSink {
    constructor() {
        this.logError = this.log;
    }
    log(message) {
        console.log(message);
    }
}
class BaseLogger {
    constructor() {
        this.enabledChanged = new EventDispatcher();
        this.sinks = [];
        this.addSink(new ConsoleLogSink());
    }
    addSink(sink) {
        this.sinks.push(sink);
    }
    formatMessage(message) {
        return `${currentDateTimeString()}: ${message}`;
    }
    log(message) {
        const formattedMessage = this.formatMessage(message);
        for (const sink of this.sinks) {
            sink.log(formattedMessage);
        }
    }
    logError(error) {
        const message = errorToString(error);
        const formattedMessage = this.formatMessage(message);
        for (const sink of this.sinks) {
            sink.logError(formattedMessage);
        }
    }
    get isEnabled() {
        return true;
    }
    set isEnabled(enabled) { }
}
class FirefoxLogger extends BaseLogger {
    constructor() {
        super();
        this.enabled = false;
        this.messageQueue = [];
        const key = FirefoxLogger.storageKey;
        chrome.storage.local.get(key, result => {
            var _a;
            const enabled = (_a = result[key]) !== null && _a !== void 0 ? _a : false;
            this.onEnabledChanged(enabled);
            chrome.storage.onChanged.addListener((changes, areaName) => {
                var _a;
                const newEnabled = (_a = changes[key]) === null || _a === void 0 ? void 0 : _a.newValue;
                if (maybe_some(newEnabled) && this.enabled !== newEnabled) {
                    this.onEnabledChanged(newEnabled);
                }
            });
        });
    }
    static get storageKey() {
        return StorageKey.userEnabledLogging;
    }
    log(message) {
        const queue = this.messageQueue;
        if (maybe_some(queue)) {
            queue.push(message);
        }
        else if (this.isEnabled) {
            super.log(message);
        }
    }
    logError(error) {
        const queue = this.messageQueue;
        if (maybe_some(queue)) {
            queue.push(error);
        }
        else if (this.isEnabled) {
            super.logError(error);
        }
    }
    get isEnabled() {
        return this.enabled;
    }
    set isEnabled(enabled) {
        if (this.enabled === enabled) {
            return;
        }
        this.storeSetting(enabled);
        this.onEnabledChanged(enabled);
    }
    onEnabledChanged(enabled) {
        this.enabled = enabled;
        const queue = this.messageQueue;
        this.messageQueue = undefined;
        if (maybe_some(queue) && enabled) {
            this.drainQueue(queue);
        }
        this.enabledChanged.dispatchEvent(enabled);
    }
    drainQueue(queue) {
        for (const message of queue) {
            if (message instanceof Error) {
                super.logError(message);
            }
            else {
                super.log(message);
            }
        }
    }
    storeSetting(enabled) {
        const key = FirefoxLogger.storageKey;
        chrome.storage.local.set({ [key]: enabled }, () => {
            const error = checkRuntimeLastError();
            if (maybe_some(error)) {
                log_logError(`Error while storing that the user enabled logging: ${error}`);
            }
        });
    }
}
class DefaultLogger extends BaseLogger {
    constructor() {
        super();
    }
}
function makeLogger() {
    switch (currentBrowser) {
        case browser_Browser.firefox:
            return new FirefoxLogger();
        default:
            return new DefaultLogger();
    }
}
const logger = makeLogger();
function errorToString(error) {
    return string_utils_toString({ name: error.name, message: error.message });
}
function log_log(message) {
    logger.log(message);
}
function log_logError(errorOrMessage) {
    const error = errorOrMessage instanceof Error ? errorOrMessage : new Error(errorOrMessage);
    logger.logError(error);
}

;// CONCATENATED MODULE: ../lib/common/identity-protection-common.ts


var IPPageCategory;
(function (IPPageCategory) {
    IPPageCategory[IPPageCategory["Allowed"] = 0] = "Allowed";
    IPPageCategory[IPPageCategory["Blocked"] = 1] = "Blocked";
    IPPageCategory[IPPageCategory["Unknown"] = 2] = "Unknown";
    IPPageCategory[IPPageCategory["UserAllowed"] = 3] = "UserAllowed";
})(IPPageCategory || (IPPageCategory = {}));
function isGoodCategory(category) {
    return category === IPPageCategory.Allowed || category === IPPageCategory.UserAllowed;
}
var IPOperationMode;
(function (IPOperationMode) {
    IPOperationMode[IPOperationMode["Normal"] = 0] = "Normal";
    IPOperationMode[IPOperationMode["BlockedFullReporting"] = 1] = "BlockedFullReporting";
    IPOperationMode[IPOperationMode["Learning"] = 2] = "Learning";
    IPOperationMode[IPOperationMode["PhishingProtection"] = 3] = "PhishingProtection";
    IPOperationMode[IPOperationMode["BlockedOnly"] = 4] = "BlockedOnly";
    IPOperationMode[IPOperationMode["Reserved5"] = 5] = "Reserved5";
    IPOperationMode[IPOperationMode["Reserved6"] = 6] = "Reserved6";
    IPOperationMode[IPOperationMode["Reserved7"] = 7] = "Reserved7";
    IPOperationMode[IPOperationMode["Reserved8"] = 8] = "Reserved8";
    IPOperationMode[IPOperationMode["Reserved9"] = 9] = "Reserved9";
    IPOperationMode[IPOperationMode["Reserved10"] = 10] = "Reserved10";
})(IPOperationMode || (IPOperationMode = {}));
function validateOperationMode(operationMode) {
    switch (operationMode) {
        case IPOperationMode.Normal:
        case IPOperationMode.BlockedFullReporting:
        case IPOperationMode.PhishingProtection:
        case IPOperationMode.BlockedOnly:
            return operationMode;
        case IPOperationMode.Learning:
            return IPOperationMode.BlockedFullReporting;
        default:
            logError(`Unknown or reserved identity protection operation mode: ${operationMode}`);
            return undefined;
    }
}
function shouldDisableInput(category, operationMode, linkProtectionWouldBlock) {
    if (isGoodCategory(category)) {
        return false;
    }
    if (maybe_none(category)) {
        category = IPPageCategory.Unknown;
    }
    switch (operationMode) {
        case IPOperationMode.Normal:
            return true;
        case IPOperationMode.PhishingProtection:
            return category === IPPageCategory.Blocked || linkProtectionWouldBlock;
        case IPOperationMode.BlockedFullReporting:
        case IPOperationMode.BlockedOnly:
            return category === IPPageCategory.Blocked;
    }
}
function shouldMakePhishingReport(category, operationMode, linkProtectionWouldBlock) {
    if (none(category) || isGoodCategory(category)) {
        return false;
    }
    switch (operationMode) {
        case IPOperationMode.Normal:
        case IPOperationMode.BlockedFullReporting:
            return true;
        case IPOperationMode.PhishingProtection:
            return category === IPPageCategory.Blocked || linkProtectionWouldBlock;
        case IPOperationMode.BlockedOnly:
            return category === IPPageCategory.Blocked;
    }
}
function isInputAllowableOpMode(operationMode) {
    return operationMode === IPOperationMode.Normal || operationMode === IPOperationMode.PhishingProtection;
}
var IPOverlayAction;
(function (IPOverlayAction) {
    IPOverlayAction[IPOverlayAction["OverlayNotShown"] = 0] = "OverlayNotShown";
    IPOverlayAction[IPOverlayAction["BackToSafety"] = 1] = "BackToSafety";
    IPOverlayAction[IPOverlayAction["CloseTab"] = 2] = "CloseTab";
    IPOverlayAction[IPOverlayAction["ViewWithInputDisabled"] = 3] = "ViewWithInputDisabled";
    IPOverlayAction[IPOverlayAction["EnableInput"] = 4] = "EnableInput";
})(IPOverlayAction || (IPOverlayAction = {}));
var IPReportType;
(function (IPReportType) {
    IPReportType[IPReportType["CrendentialExtension"] = 0] = "CrendentialExtension";
    IPReportType[IPReportType["SmartScreen"] = 1] = "SmartScreen";
})(IPReportType || (IPReportType = {}));
var IPReportActions;
(function (IPReportActions) {
    IPReportActions[IPReportActions["Unknown"] = 0] = "Unknown";
    IPReportActions[IPReportActions["InputAllowed"] = 1] = "InputAllowed";
    IPReportActions[IPReportActions["FormSubmitted"] = 2] = "FormSubmitted";
    IPReportActions[IPReportActions["LearningModeBypass"] = 3] = "LearningModeBypass";
    IPReportActions[IPReportActions["BlockedByBlocklist"] = 4] = "BlockedByBlocklist";
})(IPReportActions || (IPReportActions = {}));

;// CONCATENATED MODULE: ./content-scripts/identity-protection/page-detectors.ts


class BasePageDetector {
    constructor(pageManager, config) {
        this.pageManager = pageManager;
        this.config = config;
    }
    reset() { }
    setup() { }
    checkForDetectionTripped() { return false; }
}
class OnPasswordInputDetector extends BasePageDetector {
    constructor() {
        super(...arguments);
        this.onInputCB = (event) => this.onInput(event);
    }
    reset() {
        this.pageManager.passwordElements.forEach(pw => pw.removeEventListener("input", this.onInputCB));
    }
    setup() {
        if (this.shouldInstallPasswordTrigger()) {
            this.pageManager.passwordElements.forEach(pw => pw.addEventListener("input", this.onInputCB));
        }
    }
    checkForDetectionTripped() {
        return false;
    }
    shouldInstallPasswordTrigger() {
        return this.pageManager.passwordElements.length > 0
            && !isGoodCategory(this.pageManager.pageCategory)
            && !this.pageManager.hasTripped
            && this.config.onlyTriggerOnPasswordInput;
    }
    onInput(event) {
        if (!isGoodCategory(this.pageManager.pageCategory)) {
            this.pageManager.signalDetectionTripped("password input");
        }
    }
}
class PasswordPageDetector extends BasePageDetector {
    chckForDetectionTripped() {
        if (this.shouldTrip()) {
            this.pageManager.signalDetectionTripped("password page detector");
            return true;
        }
        return false;
    }
    shouldTrip() {
        return maybe_some(this.pageManager.pageCategory) && !isGoodCategory(this.pageManager.pageCategory)
            && this.pageManager.passwordElements.length > 0
            && !this.config.onlyTriggerOnPasswordInput
            && this.config.onlyOnPageWithPasswordInput;
    }
}
class ZealousDetector extends BasePageDetector {
    chekForDetectionTripped() {
        if (this.shouldTrip()) {
            this.pageManager.signalDetectionTripped("zealous detector");
            return true;
        }
        return false;
    }
    shouldTrip() {
        return maybe_some(this.pageManager.pageCategory) && !isGoodCategory(this.pageManager.pageCategory)
            && this.pageManager.interestingInputElements.length > 0
            && !this.config.onlyTriggerOnPasswordInput
            && !this.config.onlyOnPageWithPasswordInput;
    }
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/phishing-page-manager.ts












class PhishingPageManager {
    constructor(linkProtectionWouldBlock, config, messageSender) {
        this.linkProtectionWouldBlock = linkProtectionWouldBlock;
        this.config = config;
        this.messageSender = messageSender;
        this.PASSWORD_QUERY_STRING = `${INPUT_TAG}[type=password],${INPUT_TAG}[name=password]`;
        this.elementalist = new ElementDisabler();
        this.isEnabled = true;
        this._interestingInputElements = [];
        this._passwordElements = [];
        this.tripped = false;
        this.suppressed = false;
        this.suppressors = [
            new LinkAnalyserSuppressor(this, this.config),
            new PasswordFillerSuppressor(this, this.config)
        ];
        this.detectors = [
            new ZealousDetector(this, this.config),
            new OnPasswordInputDetector(this, this.config),
            new PasswordPageDetector(this, this.config)
        ];
        this.collectors = [
            new OnSubmitCollector(this, this.messageSender)
        ];
        this.monitors = [
            new ScreenshotFreezer(this, this.messageSender)
        ];
        this.domMonitor = new DOMMonitor(() => this.inspectPage());
        this.inspectPage();
    }
    disable(newLinkProtectionWouldBlock) {
        this.linkProtectionWouldBlock = newLinkProtectionWouldBlock;
        if (this.isEnabled) {
            this.domMonitor.suspend();
            this.resetPage();
            this.isEnabled = false;
        }
    }
    enable(newLinkProtectionWouldBlock) {
        if (!this.isEnabled || this.linkProtectionWouldBlock !== newLinkProtectionWouldBlock) {
            this.linkProtectionWouldBlock = newLinkProtectionWouldBlock;
            this.inspectPage();
            this.isEnabled = true;
        }
    }
    get hasTripped() { return this.tripped; }
    get isSuppressed() { return this.suppressed; }
    get interestingInputElements() { return this._interestingInputElements; }
    get passwordElements() { return this._passwordElements; }
    get pageCategory() { return this._pageCategory; }
    updatePageCategoryInfo(pageCategory) {
        this._pageCategory = pageCategory;
        if (this.isEnabled) {
            this.inspectPage();
        }
    }
    signalDetectionTripped(reason) {
        setTimeout(() => {
            if (this.tripped) {
                return;
            }
            this.runSuppressors();
            if (this.suppressed) {
                return;
            }
            log_log(`PhishingPageManager: Detection tripped because of ${reason}`);
            if (maybe_none(this.pageCategory)) {
                log_log(`Warning: Detection tripped before the page was categorised`);
            }
            this.messageSender.sendMessage(MessageType.phishingDetectionTrippedV22, new PhishingDetectionTrippedV22());
            this.handleDetectionTripped();
        }, 10);
    }
    handleDetectionTripped() {
        if (this.tripped) {
            return;
        }
        this.tripped = true;
        this.inspectPage();
    }
    suppressDetection(reason) {
        if (this.suppressed) {
            return;
        }
        log_log(`PhishingPageManager: Detection suppressed because of ${reason}`);
        this.messageSender.sendMessage(MessageType.phishingDetectionSuppressedV22, new PhishingDetectionSuppressedV22());
        this.handleDetectionSuppressed();
    }
    handleDetectionSuppressed() {
        if (this.suppressed) {
            return;
        }
        this.suppressed = true;
        this.domMonitor.suspend();
        this.monitors.forEach(monitor => monitor.stop());
        this.resetPage();
    }
    resetPage() {
        this.interestingInputElements.forEach(e => this.elementalist.resetElement(e));
        this.collectors.forEach(collector => collector.reset());
        this.monitors.forEach(monitor => monitor.pause());
        this.detectors.forEach(detector => detector.reset());
    }
    extractPageFeatures() {
        let isInterestingPage = true;
        this._passwordElements = Array.from(document.querySelectorAll(this.PASSWORD_QUERY_STRING));
        if (this.config.onlyOnPageWithPasswordInput || this.config.onlyTriggerOnPasswordInput) {
            isInterestingPage = this._passwordElements.length > 0;
        }
        if (isInterestingPage) {
            const queryString = [this.PASSWORD_QUERY_STRING].concat(this.config.blockedElementTags).concat(this.config.blockedInputElementTypes.map(t => `${INPUT_TAG}[type=${t}]`)).join(',');
            this._interestingInputElements = Array.from(document.querySelectorAll(queryString));
        }
        else {
            this._interestingInputElements = [];
        }
    }
    runSuppressors() {
        for (const suppressor of this.suppressors) {
            if (suppressor.checkForSuppressionMarkers()) {
                return;
            }
        }
    }
    setupPageTools() {
        this.collectors.forEach(collector => collector.setup());
        this.monitors.forEach(monitor => monitor.start());
        this.detectors.forEach(detector => detector.setup());
    }
    runDetectors() {
        for (const detector of this.detectors) {
            if (detector.checkForDetectionTripped()) {
                return;
            }
        }
    }
    maybeDisableInput() {
        if (shouldDisableInput(this.pageCategory, this.config.operationMode, this.linkProtectionWouldBlock)) {
            this.interestingInputElements.forEach(e => this.elementalist.disableElement(e));
        }
    }
    runInspectionLoop() {
        this.resetPage();
        if (this.suppressed) {
            return;
        }
        this.extractPageFeatures();
        const hasInterestingInput = this.interestingInputElements.length > 0;
        this.messageSender.sendMessage(MessageType.onFrameDomUpdateV22, new OnFrameDomUpdateV22(hasInterestingInput, maybe_some(this.pageCategory)));
        if (hasInterestingInput) {
            if (!this.tripped) {
                this.runSuppressors();
            }
            if (!this.suppressed) {
                this.setupPageTools();
                if (this.tripped) {
                    this.maybeDisableInput();
                }
                else {
                    this.runDetectors();
                }
            }
        }
    }
    inspectPage() {
        this.domMonitor.suspend();
        this.runInspectionLoop();
        this.domMonitor.resume();
    }
}

;// CONCATENATED MODULE: ../lib/common/common-types.ts
const TopLevelFrameId = 0;

;// CONCATENATED MODULE: ../lib/host/host-constants.ts
const hostConstants = {
    hostHelperId: "com.bromium.hosthelper",
    blockedPage: "blocked-page.html",
    externalAppLinkNavigator: "external-app-link-navigator-v1.html",
    externalAppLinkPage: "external-app-link-page-v1.html",
    blockedFilePage: "blocked-file-page.html",
    externalAppLinkPagePortName: "com.bromium.external.app.link.page",
    blockedPagePortName: "com.bromium.blocked.page",
    blockedFilePagePortName: "com.bromium.blocked.file.page",
    popupPortName: "com.bromium.popup",
    optionsPortName: "com.bromium.options",
    identityProtectionPortName: "com.bromium.identity.protection",
};

;// CONCATENATED MODULE: ../lib/common/range.ts

class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    contains(value) {
        return number_utils_isInRange(value, this.min, this.max);
    }
}

;// CONCATENATED MODULE: ../lib/host/protocol-versions.ts




var ProtocolVersion;
(function (ProtocolVersion) {
    ProtocolVersion["v1"] = "tag:bromium.com,2018-02:protocols:google-chrome-extension:initial";
    ProtocolVersion["v2"] = "tag:bromium.com,2018-06:protocols:google-chrome-extension:v2";
    ProtocolVersion["v3"] = "tag:bromium.com,2018-07:protocols:google-chrome-extension:v3";
    ProtocolVersion["v4"] = "tag:bromium.com,2018-08:protocols:google-chrome-extension:v4";
    ProtocolVersion["v5"] = "tag:bromium.com,2018-11:protocols:google-chrome-extension:v5";
    ProtocolVersion["v6"] = "tag:bromium.com,2018-12:protocols:google-chrome-extension:v6";
    ProtocolVersion["v7"] = "tag:bromium.com,2019-01:protocols:google-chrome-extension:v7";
    ProtocolVersion["v8"] = "tag:bromium.com,2019-06:protocols:google-chrome-extension:v8";
    ProtocolVersion["v9"] = "tag:bromium.com,2019-07:protocols:google-chrome-extension:v9";
    ProtocolVersion["v10"] = "tag:bromium.com,2019-09:protocols:google-chrome-extension:v10";
    ProtocolVersion["v11"] = "tag:bromium.com,2019-10:protocols:google-chrome-extension:v11";
    ProtocolVersion["v12"] = "tag:bromium.com,2019-11:protocols:google-chrome-extension:v12";
    ProtocolVersion["v13"] = "tag:bromium.com,2019-12:protocols:google-chrome-extension:v13";
    ProtocolVersion["v14"] = "tag:bromium.com,2020-01:protocols:google-chrome-extension:v14";
    ProtocolVersion["v15"] = "tag:bromium.com,2020-02:protocols:google-chrome-extension:v15";
    ProtocolVersion["v16"] = "tag:bromium.com,2020-02:protocols:google-chrome-extension:v16";
    ProtocolVersion["v17"] = "tag:bromium.com,2020-04:protocols:google-chrome-extension:v17";
    ProtocolVersion["v18"] = "tag:bromium.com,2020-05:protocols:google-chrome-extension:v18";
    ProtocolVersion["v19"] = "tag:bromium.com,2020-05:protocols:google-chrome-extension:v19";
    ProtocolVersion["v20"] = "tag:SBX,2020-10:v20";
    ProtocolVersion["v21"] = "tag:SBX,2020-11:v21";
    ProtocolVersion["v22"] = "tag:SBX+IP,2020-11:v22";
    ProtocolVersion["v23"] = "tag:SBX+IP,2021-03:v23";
    ProtocolVersion["v24"] = "tag:SBX+IP,2021-07:v24";
    ProtocolVersion["v25"] = "tag:SBX+IP,2021-10:v25";
})(ProtocolVersion || (ProtocolVersion = {}));
const supportedProtocolVersions = [
    ProtocolVersion.v25,
    ProtocolVersion.v24,
    ProtocolVersion.v23,
    ProtocolVersion.v22,
    ProtocolVersion.v21,
    ProtocolVersion.v20,
    ProtocolVersion.v19,
    ProtocolVersion.v18,
    ProtocolVersion.v17,
    ProtocolVersion.v16,
    ProtocolVersion.v15,
    ProtocolVersion.v14,
    ProtocolVersion.v13,
    ProtocolVersion.v12,
    ProtocolVersion.v11,
    ProtocolVersion.v10,
    ProtocolVersion.v9,
    ProtocolVersion.v8,
    ProtocolVersion.v7,
    ProtocolVersion.v6,
    ProtocolVersion.v5,
    ProtocolVersion.v4,
    ProtocolVersion.v3,
    ProtocolVersion.v2,
    ProtocolVersion.v1
];
const supportedMessageTypes = (() => {
    const supportedMessageRanges = makeStringHashMap();
    supportedMessageRanges.putMany([
        [ProtocolVersion.v1, new Range(MessageType.handshakeV1, MessageType.heartbeatV1)],
        [ProtocolVersion.v2, new Range(MessageType.handshakeV1, MessageType.enabledFeaturesResponseV2)],
        [ProtocolVersion.v3, new Range(MessageType.handshakeV1, MessageType.reputationChangedV3)],
        [ProtocolVersion.v4, new Range(MessageType.handshakeV1, MessageType.blockedPageDataResponseV4)],
        [ProtocolVersion.v5, new Range(MessageType.handshakeV1, MessageType.popupDataResponseV5)],
        [ProtocolVersion.v6, new Range(MessageType.handshakeV1, MessageType.trustUrlV6)],
        [ProtocolVersion.v7, new Range(MessageType.handshakeV1, MessageType.configChangedV7)],
        [ProtocolVersion.v8, new Range(MessageType.handshakeV1, MessageType.configChangedV8)],
        [ProtocolVersion.v9, new Range(MessageType.handshakeV1, MessageType.configChangedV9)],
        [ProtocolVersion.v10, new Range(MessageType.handshakeV1, MessageType.heartbeatV10)],
        [ProtocolVersion.v11, new Range(MessageType.handshakeV1, MessageType.configChangedV11)],
        [ProtocolVersion.v12, new Range(MessageType.handshakeV1, MessageType.configChangedV12)],
        [ProtocolVersion.v13, new Range(MessageType.handshakeV1, MessageType.configChangedV13)],
        [ProtocolVersion.v14, new Range(MessageType.handshakeV1, MessageType.configChangedV14)],
        [ProtocolVersion.v15, new Range(MessageType.handshakeV1, MessageType.configChangedV15)],
        [ProtocolVersion.v16, new Range(MessageType.handshakeV1, MessageType.externalAppLinkRequestV16)],
        [ProtocolVersion.v17, new Range(MessageType.handshakeV1, MessageType.configChangedV17)],
        [ProtocolVersion.v18, new Range(MessageType.handshakeV1, MessageType.popupDataResponseV18)],
        [ProtocolVersion.v19, new Range(MessageType.handshakeV1, MessageType.configChangedV19)],
        [ProtocolVersion.v20, new Range(MessageType.handshakeV1, MessageType.configChangedV20)],
        [ProtocolVersion.v21, new Range(MessageType.handshakeV1, MessageType.configChangedV21)],
        [ProtocolVersion.v22, new Range(MessageType.handshakeV1, MessageType.configChangedV22)],
        [ProtocolVersion.v23, new Range(MessageType.handshakeV1, MessageType.configChangedV23)],
        [ProtocolVersion.v24, new Range(MessageType.handshakeV1, MessageType.configChangedV24)],
        [ProtocolVersion.v25, new Range(MessageType.handshakeV1, MessageType.popupDataResponseV25)],
    ]);
    return supportedMessageRanges;
})();
function isSupported(rangeMap, value, version) {
    if (maybe_none(version)) {
        return false;
    }
    const range = rangeMap.get(version);
    if (maybe_none(range)) {
        return false;
    }
    return range.contains(value);
}
function isMessageTypeSupported(messageType, protocolVersion) {
    return isSupported(supportedMessageTypes, messageType, protocolVersion);
}
function protocol_versions_shouldLogMessage(protocolVersion) {
    return !isMessageTypeSupported(MessageType.heartbeatV10, protocolVersion);
}
var HelpPageVersion;
(function (HelpPageVersion) {
    HelpPageVersion["v415"] = "v4.1.5";
    HelpPageVersion["v4181"] = "v4.1.8.1";
    HelpPageVersion["v430"] = "v4.3.0";
    HelpPageVersion["v435"] = "v4.3.5";
    HelpPageVersion["maxHelpPageVersion"] = "v4.3.5";
})(HelpPageVersion || (HelpPageVersion = {}));
;
const supportedHelpPageVersions = (() => {
    const supportedHelpPageVersions = makeStringHashMap();
    supportedHelpPageVersions.putMany([
        [ProtocolVersion.v1, HelpPageVersion.v415],
        [ProtocolVersion.v2, HelpPageVersion.v415],
        [ProtocolVersion.v3, HelpPageVersion.v415],
        [ProtocolVersion.v4, HelpPageVersion.v415],
        [ProtocolVersion.v5, HelpPageVersion.v415],
        [ProtocolVersion.v6, HelpPageVersion.v415],
        [ProtocolVersion.v7, HelpPageVersion.v415],
        [ProtocolVersion.v8, HelpPageVersion.v415],
        [ProtocolVersion.v9, HelpPageVersion.v415],
        [ProtocolVersion.v10, HelpPageVersion.v415],
        [ProtocolVersion.v11, HelpPageVersion.v4181],
        [ProtocolVersion.v12, HelpPageVersion.v4181],
        [ProtocolVersion.v13, HelpPageVersion.v4181],
        [ProtocolVersion.v14, HelpPageVersion.v4181],
        [ProtocolVersion.v15, HelpPageVersion.v4181],
        [ProtocolVersion.v16, HelpPageVersion.v4181],
        [ProtocolVersion.v17, HelpPageVersion.v4181],
        [ProtocolVersion.v18, HelpPageVersion.v4181],
        [ProtocolVersion.v19, HelpPageVersion.v4181],
        [ProtocolVersion.v20, HelpPageVersion.v4181],
        [ProtocolVersion.v21, HelpPageVersion.v4181],
        [ProtocolVersion.v22, HelpPageVersion.v430],
        [ProtocolVersion.v23, HelpPageVersion.v430],
        [ProtocolVersion.v24, HelpPageVersion.v435],
        [ProtocolVersion.v25, HelpPageVersion.v435],
    ]);
    return supportedHelpPageVersions;
})();
function getHelpPageVersion(protocolVersion) {
    if (some(protocolVersion)) {
        const supportedVersion = supportedHelpPageVersions.get(protocolVersion);
        if (some(supportedVersion)) {
            return supportedVersion;
        }
    }
    return HelpPageVersion.maxHelpPageVersion;
}

;// CONCATENATED MODULE: ../lib/common/tab-utils.ts




function isValidWindowId(windowId) {
    return some(windowId) && windowId !== chrome.windows.WINDOW_ID_NONE;
}
function isValidTabId(tabId) {
    return tabId !== chrome.tabs.TAB_ID_NONE;
}
function hashTabId(tabId, seed = 0) {
    return murmurHash(tabId, seed);
}
function isSameTabId(a, b) {
    if (!isValidTabId(a) || !isValidTabId(b)) {
        return false;
    }
    return a === b;
}
const TabsAPIChromeNewTabSpec = "chrome://newtab";
const TabsAPIFirefoxNewTabSpecs = (/* unused pure expression or super */ null && (["about:newtab", "about:home"]));
const TabsAPIEdgeChromiumNewTabSpec = "edge://newtab";
function parseTabsAPIBrowserNewTabURLs() {
    const tabsAPIBrowserNewTabSpecs = [
        [Browser.chrome, [TabsAPIChromeNewTabSpec]],
        [Browser.firefox, TabsAPIFirefoxNewTabSpecs],
        [Browser.edgeChromium, [TabsAPIEdgeChromiumNewTabSpec]]
    ];
    const tabsAPIBrowserNewTabURLs = new Map();
    for (const [browser, specs] of tabsAPIBrowserNewTabSpecs) {
        const urls = specs.map(parseUrl).filter(some);
        if (urls.length > 0) {
            tabsAPIBrowserNewTabURLs.set(browser, urls);
        }
    }
    return tabsAPIBrowserNewTabURLs;
}

;// CONCATENATED MODULE: ../lib/common/port-utils.ts




function readPortTabId(port) {
    var _a, _b;
    const tabId = (_b = (_a = port === null || port === void 0 ? void 0 : port.sender) === null || _a === void 0 ? void 0 : _a.tab) === null || _b === void 0 ? void 0 : _b.id;
    if (maybe_none(tabId) || !isValidTabId(tabId)) {
        return undefined;
    }
    return tabId;
}
function readPortPageUrl(port) {
    var _a;
    const urlSpec = (_a = port === null || port === void 0 ? void 0 : port.sender) === null || _a === void 0 ? void 0 : _a.url;
    if (maybe_none(urlSpec)) {
        return;
    }
    return url_utils_parseUrl(urlSpec);
}
function readPortTabUrl(port) {
    var _a, _b;
    const urlSpec = (_b = (_a = port === null || port === void 0 ? void 0 : port.sender) === null || _a === void 0 ? void 0 : _a.tab) === null || _b === void 0 ? void 0 : _b.url;
    if (none(urlSpec)) {
        return undefined;
    }
    return parseUrl(urlSpec);
}
function readPortFrameId(port) {
    var _a;
    return (_a = port === null || port === void 0 ? void 0 : port.sender) === null || _a === void 0 ? void 0 : _a.frameId;
}
function portToString(port) {
    if (port === undefined) {
        return "undefined";
    }
    return string_utils_toString({
        name: port.name,
        tabId: readPortTabId(port),
        frameId: readPortFrameId(port),
        pageUrl: readPortPageUrl(port)
    });
}

;// CONCATENATED MODULE: ../lib/common/connection.ts
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 0] = "Connecting";
    ConnectionState[ConnectionState["Handshaking"] = 1] = "Handshaking";
    ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
    ConnectionState[ConnectionState["Disconnecting"] = 3] = "Disconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(ConnectionState || (ConnectionState = {}));
class ConnectionStateChangedEvent {
    constructor(oldState, newState) {
        this.oldState = oldState;
        this.newState = newState;
    }
}

;// CONCATENATED MODULE: ../lib/common/errors.ts

var ChragError;
(function (ChragError) {
    ChragError[ChragError["notEnabled"] = 0] = "notEnabled";
    ChragError[ChragError["helperPortError"] = 1] = "helperPortError";
    ChragError[ChragError["launchBrowserFailed"] = 2] = "launchBrowserFailed";
    ChragError[ChragError["trustDownloadFailed"] = 3] = "trustDownloadFailed";
    ChragError[ChragError["handshakeError"] = 4] = "handshakeError";
    ChragError[ChragError["unknownError"] = 5] = "unknownError";
    ChragError[ChragError["recoveredFromError"] = 6] = "recoveredFromError";
    ChragError[ChragError["is32bitFirefox"] = 7] = "is32bitFirefox";
    ChragError[ChragError["helperUnresponsive"] = 8] = "helperUnresponsive";
})(ChragError || (ChragError = {}));
var ChragErrorLimits;
(function (ChragErrorLimits) {
    ChragErrorLimits[ChragErrorLimits["min"] = 0] = "min";
    ChragErrorLimits[ChragErrorLimits["max"] = 8] = "max";
})(ChragErrorLimits || (ChragErrorLimits = {}));
function isChragError(type) {
    return isInRange(type, ChragErrorLimits.min, ChragErrorLimits.max);
}
function isError(value) {
    return value instanceof Error;
}

;// CONCATENATED MODULE: ../lib/common/message-encoder.ts
function encodeMessage(type, payload) {
    return { type: type, payload: payload };
}

;// CONCATENATED MODULE: ../lib/common/handshaker.ts
class HandshakenEvent {
    constructor(negotiatedVersion) {
        this.negotiatedVersion = negotiatedVersion;
    }
}

;// CONCATENATED MODULE: ../lib/common/message-decoder.ts


function decodeMessage(encodedMessage) {
    let message = encodedMessage;
    if (message.type === undefined) {
        message = JSON.parse(encodedMessage.toString());
        if (message.type === undefined) {
            return undefined;
        }
    }
    if (!number_utils_isNumber(message.type)) {
        return undefined;
    }
    if (!isMessageType(message.type)) {
        return undefined;
    }
    return message;
}
class MessageDecodedEvent {
    constructor(message) {
        this.message = message;
    }
}

;// CONCATENATED MODULE: ../lib/common/message-sender.ts

class MessageSender {
    constructor(doSendMessage) {
        this.doSendMessage = doSendMessage;
        this.sendMessage = (type, payload) => {
            const message = encodeMessage(type, payload);
            return this.doSendMessage(message);
        };
    }
}

;// CONCATENATED MODULE: ../lib/common/message-port-channel.ts














var Negotiation;
(function (Negotiation) {
    Negotiation[Negotiation["None"] = 0] = "None";
    Negotiation[Negotiation["NegotiateProtocolVersion"] = 1] = "NegotiateProtocolVersion";
})(Negotiation || (Negotiation = {}));
class MessagePortChannel {
    constructor(connectToPort, onConnect, onDisconnect, onPortError, onNegotiationError, messageRouter, negotiation) {
        this.connectToPort = connectToPort;
        this.onConnect = onConnect;
        this.onDisconnect = onDisconnect;
        this.onPortError = onPortError;
        this.onNegotiationError = onNegotiationError;
        this.messageRouter = messageRouter;
        this.negotiation = negotiation;
        this.onHandshaken = new EventDispatcher();
        this.onConnectionStateChanged = new EventDispatcher();
        this.messages = new Array();
        this._connState = ConnectionState.Disconnected;
        this._negotiatedVersion = undefined;
        this.messageSender = new MessageSender((message) => this.sendMessage(message));
    }
    disconnectPort(port) {
        port.disconnect();
        this.handleDisconnect(port);
    }
    connect() {
        if (this.connState !== ConnectionState.Disconnected) {
            throw new Error(`MessagePortChannel.connect called with connState == ${this.connState}`);
        }
        const shouldHandshake = this.negotiation === Negotiation.NegotiateProtocolVersion;
        this.connState = ConnectionState.Connecting;
        this.connectToPort.then((port) => {
            if (this.connState === ConnectionState.Disconnecting) {
                this.disconnectPort(port);
                return;
            }
            this.port = port;
            this.port.onMessage.addListener((encodeMessage, port) => this.onMessage(encodeMessage, port));
            this.port.onDisconnect.addListener((port) => this.handleDisconnect(port));
            if (shouldHandshake) {
                this.connState = ConnectionState.Handshaking;
                const handshake = new HandshakeV1(supportedProtocolVersions);
                const message = encodeMessage(MessageType.handshakeV1, handshake);
                this.postMessage(message);
            }
            else {
                this.sendQueuedMessages();
                this.connState = ConnectionState.Connected;
                this.onConnect(this.port);
            }
        });
        if (shouldHandshake) {
            setTimeout(() => {
                if (this.connState === ConnectionState.Handshaking) {
                    this.onNegotiationError(new Error("Handshake timed out after 60s"));
                }
            }, 60000);
        }
    }
    disconnect() {
        switch (this.connState) {
            case ConnectionState.Disconnected:
                break;
            case ConnectionState.Disconnecting:
                break;
            case ConnectionState.Connecting:
                this.connState = ConnectionState.Disconnecting;
                break;
            case ConnectionState.Handshaking:
                if (maybe_some(this.port)) {
                    this.disconnectPort(this.port);
                }
                break;
            case ConnectionState.Connected:
                if (maybe_some(this.port)) {
                    this.disconnectPort(this.port);
                }
                break;
        }
    }
    postMessage(message) {
        try {
            if (maybe_none(this.port)) {
                throw new Error("MessagePortChannel.postMessage: this.port === undefined");
            }
            if (!message_types_isFrequentlySentMessageType(message.type)) {
                this.log(`MessagePortChannel.postMessage: message: ${messages_messageToString(message)}`);
            }
            this.port.postMessage(message);
        }
        catch (e) {
            if (isError(e)) {
                this.onPortError(e);
            }
            else {
                const error = new Error(`Unknown error caught in postMessage: ${string_utils_toString(e)}`);
                this.onPortError(error);
            }
        }
    }
    sendQueuedMessages() {
        for (const message of this.messages) {
            this.postMessage(message);
        }
        this.messages = [];
    }
    queueMessage(message) {
        this.messages.push(message);
    }
    sendMessage(message) {
        if (this.connState === ConnectionState.Connected) {
            this.postMessage(message);
        }
        else {
            this.queueMessage(message);
        }
    }
    onMessage(encodedMessage, port) {
        if (this.connState === ConnectionState.Handshaking) {
            this.log(`MessagePortChannel.onMessage: message: ${string_utils_toString(encodedMessage)} port: ${portToString(port)}`);
            let message = decodeMessage(encodedMessage);
            if (maybe_none(message)) {
                this.onNegotiationError(new Error(`Invalid message before handshaken: ${string_utils_toString(encodedMessage)}`));
            }
            else if (message.type !== MessageType.handshakeV1) {
                this.onNegotiationError(new Error(`Message before handshaken: ${message.type}`));
            }
            else if (maybe_none(this.port)) {
                this.onPortError(new Error("MessagePortChannel.onMessage: this.port === undefined"));
            }
            else {
                const handshake = message.payload;
                for (const supportedVersion of supportedProtocolVersions) {
                    if (handshake.versions.indexOf(supportedVersion) >= 0) {
                        this._negotiatedVersion = supportedVersion;
                        this.log(`Negotiated protocol version: ${this._negotiatedVersion}`);
                        this.sendQueuedMessages();
                        this.connState = ConnectionState.Connected;
                        this.onHandshaken.dispatchEvent(new HandshakenEvent(this._negotiatedVersion));
                        this.onConnect(this.port);
                        return;
                    }
                }
                this.onNegotiationError(new Error(`No supported version received in handshake: ${handshake.versions}`));
            }
        }
        else if (this.connState == ConnectionState.Connected) {
            this.messageRouter.onMessageReceived(port, encodedMessage);
        }
    }
    handleDisconnect(port) {
        if (this.connState === ConnectionState.Disconnected) {
            return;
        }
        this.connState = ConnectionState.Disconnected;
        this.port = undefined;
        this.onDisconnect(port);
    }
    shouldLogMessage() {
        if (this.negotiation === Negotiation.None) {
            return true;
        }
        return maybe_some(this.negotiatedVersion) && protocol_versions_shouldLogMessage(this.negotiatedVersion);
    }
    log(message) {
        if (this.shouldLogMessage()) {
            log_log(message);
        }
        else {
            console.log(message);
        }
    }
    logError(errorOrMessage) {
        log_logError(errorOrMessage);
    }
    get connState() {
        return this._connState;
    }
    set connState(newState) {
        const oldState = this._connState;
        this._connState = newState;
        this.onConnectionStateChanged.dispatchEvent(new ConnectionStateChangedEvent(oldState, newState));
    }
    get isHandshaken() {
        return this.connState === ConnectionState.Connected;
    }
    get negotiatedVersion() {
        return this._negotiatedVersion;
    }
    get connectionState() {
        return this.connState;
    }
}
class GenericMessagePortChannel extends MessagePortChannel {
    constructor(connectToPort, onConnect, onDisconnect, messageRouter, negotiation) {
        super(connectToPort, onConnect, onDisconnect, (e) => { console.error(e); }, (e) => { console.error(e); }, messageRouter, negotiation);
    }
}

;// CONCATENATED MODULE: ../lib/common/promise-utils.ts
function makePromise(factory) {
    return new Promise((resolve, reject) => {
        resolve(factory());
    });
}
function makePromiseAsync(factory) {
    return new Promise((resolve, reject) => {
        factory(resolve);
    });
}

;// CONCATENATED MODULE: ../lib/common/message-router.ts




function handleInvalidMessage(port, invalidMessage) {
    log_logError(`handleInvalidMessage: invalidMessage: ${string_utils_toString(invalidMessage)}`);
}
function onUnhandledMessage(port, message) {
    log_logError(`onUnhandledMessage: message: ${string_utils_toString(message)}`);
}
class MessageRouter {
    constructor(handleInvalidMessage, onUnhandledMessage) {
        this.handleInvalidMessage = handleInvalidMessage;
        this.onUnhandledMessage = onUnhandledMessage;
        this.messageHandlers = new Map();
    }
    registerMessagePayloadHandler(type, handlePayload) {
        this.registerMessageHandler(type, message => handlePayload(message.payload));
    }
    registerMessageHandler(type, handleMessage) {
        const messageHandlers = this.messageHandlers.get(type);
        if (messageHandlers === undefined) {
            this.messageHandlers.set(type, [handleMessage]);
        }
        else {
            messageHandlers.push(handleMessage);
        }
    }
    registerManyMessageHandler(types, handleMessage) {
        for (const type of types) {
            this.registerMessageHandler(type, handleMessage);
        }
    }
}
class GenericMessageRouter extends MessageRouter {
    constructor() {
        super(handleInvalidMessage, onUnhandledMessage);
        this.onMessageDecoded = new EventDispatcher();
    }
    onMessageReceived(port, encodedMessage) {
        let message = decodeMessage(encodedMessage);
        if (message === undefined) {
            this.handleInvalidMessage(port, encodedMessage);
            return;
        }
        this.onMessageDecoded.dispatchEvent(new MessageDecodedEvent(message));
        const messageHandlers = this.messageHandlers.get(message.type);
        if (messageHandlers === undefined) {
            this.onUnhandledMessage(port, message);
            return;
        }
        for (const handleMessage of messageHandlers) {
            handleMessage(message);
        }
    }
    tryRouteMessage(message) {
        const messageHandlers = this.messageHandlers.get(message.type);
        if (messageHandlers !== undefined) {
            for (const handleMessage of messageHandlers) {
                handleMessage(message);
            }
        }
    }
}

;// CONCATENATED MODULE: ../lib/common/logger.ts





class MessagingLogSink {
    constructor(sendMessage) {
        this.sendMessage = sendMessage;
        this.isSendingLogMessage = false;
    }
    log(message, level = LogLevel.Info) {
        if (this.isSendingLogMessage) {
            return;
        }
        this.isSendingLogMessage = true;
        try {
            this.sendMessage(MessageType.logMessageV1, { level, message });
        }
        catch (e) {
        }
        finally {
            this.isSendingLogMessage = false;
        }
    }
    logError(message) {
        this.log(message, LogLevel.Error);
    }
}
class HelperLogSink extends (/* unused pure expression or super */ null && (MessagingLogSink)) {
    constructor(sender) {
        super((type, payload) => sender.sendMessage(type, payload));
    }
}
class ScriptLogSink extends MessagingLogSink {
    constructor(extensionPortController) {
        super((type, payload) => extensionPortController.sendMessage(type, payload));
    }
}
class MessageLogger {
    constructor(messageDecoder, handshaker) {
        this.protocolVersion = undefined;
        handshaker.onHandshaken.registerEventHandler((event) => {
            this.protocolVersion = event.negotiatedVersion;
        });
        messageDecoder.onMessageDecoded.registerEventHandler((event) => {
            const message = event.message;
            if (!isFrequentlySentMessageType(message.type)) {
                this.log(`MessageLogger.onMessageReceived: message: ${messageToString(message)}`);
            }
        });
    }
    log(message) {
        if (some(this.protocolVersion) && shouldLogMessage(this.protocolVersion)) {
            log(message);
        }
        else {
            console.log(message);
        }
    }
}

;// CONCATENATED MODULE: ../lib/common/extension-port-controller.ts








var extension_port_controller_ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["disconnected"] = 0] = "disconnected";
    ConnectionState[ConnectionState["connecting"] = 1] = "connecting";
    ConnectionState[ConnectionState["connected"] = 2] = "connected";
    ConnectionState[ConnectionState["extensionReady"] = 3] = "extensionReady";
})(extension_port_controller_ConnectionState || (extension_port_controller_ConnectionState = {}));
class ExtensionPortController {
    constructor(portName, onExtensionReady, onExtensionDisconnected) {
        this.portName = portName;
        this.onExtensionReady = onExtensionReady;
        this.onExtensionDisconnected = onExtensionDisconnected;
        this.registerMessagePayloadHandler = (type, handler) => {
            this.messageRouter.registerMessagePayloadHandler(type, handler);
        };
        this.sendMessage = (type, payload) => this.extensionChannel.messageSender.sendMessage(type, payload);
        this.messageRouter = new GenericMessageRouter();
        this.connectionState = extension_port_controller_ConnectionState.disconnected;
        this.registerMessagePayloadHandler(MessageType.extensionReadyV1, (message) => this.handleExtensionReady(message));
        this.extensionChannel = this.createExtensionChannel();
        logger.addSink(new ScriptLogSink(this));
    }
    connect() {
        if (this.connectionState === extension_port_controller_ConnectionState.disconnected) {
            this.connectionState = extension_port_controller_ConnectionState.connecting;
            this.extensionChannel.connect();
        }
    }
    connectToPort() {
        return makePromise(() => {
            return chrome.runtime.connect({
                name: this.portName
            });
        });
    }
    createExtensionChannel() {
        return new GenericMessagePortChannel(this.connectToPort(), (port) => this.handleExtensionConnected(port), (port) => this.handleExtensionDisconnected(port), this.messageRouter, Negotiation.None);
    }
    reconnectToExtension() {
        this.log(`ExtensionPortController.reconnectToExtension: ${string_utils_toString({
            portName: this.portName,
            connectionState: this.connectionState
        })}`);
        this.connectionState = extension_port_controller_ConnectionState.connecting;
        this.extensionChannel = this.createExtensionChannel();
        this.extensionChannel.connect();
    }
    handleExtensionReady(payload) {
        var _a;
        this.log(`ExtensionPortController: extension ready: ${this.portName}`);
        this.connectionState = extension_port_controller_ConnectionState.extensionReady;
        (_a = this.onExtensionReady) === null || _a === void 0 ? void 0 : _a.call(this, payload.tabId);
    }
    handleExtensionConnected(port) {
        this.log(`ExtensionPortController: extension connected: ${this.portName}`);
        this.connectionState = extension_port_controller_ConnectionState.connected;
    }
    handleExtensionDisconnected(port) {
        var _a;
        this.log(`ExtensionPortController: extension disconnected: ${this.portName}`);
        if (this.connectionState !== extension_port_controller_ConnectionState.extensionReady) {
            this.reconnectToExtension();
        }
        else {
            (_a = this.onExtensionDisconnected) === null || _a === void 0 ? void 0 : _a.call(this);
        }
    }
    log(message) {
        if (this.portName === hostConstants.identityProtectionPortName) {
            return;
        }
        log_log(message);
    }
}

;// CONCATENATED MODULE: ./branding/hp_sure_click/assets/logo-hp-lod.svg
/* harmony default export */ const logo_hp_lod = ("<svg viewBox=\"0 0 7 7\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#FFF\" fill-rule=\"nonzero\"><path d=\"M5.457 2.478h-.522l-.718 2h.522z\"/><path d=\"M3.478 6.74h-.087l.674-1.827h.913c.152 0 .348-.13.392-.283l.717-1.978c.109-.326-.065-.587-.413-.587H4.39L3.326 5l-.609 1.652a3.264 3.264 0 0 1-2.5-3.174c0-1.5 1-2.76 2.392-3.13l-.63 1.695-1.044 2.87h.695L2.522 2.5h.521l-.89 2.413h.695l.826-2.26c.109-.327-.065-.588-.413-.588h-.587L3.326.217h.152A3.257 3.257 0 0 1 6.74 3.478 3.257 3.257 0 0 1 3.48 6.74z\"/></g></svg>\r\n");
;// CONCATENATED MODULE: ./branding/hp_sure_click/assets/logo-wolf-lod.svg
/* harmony default export */ const logo_wolf_lod = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 347.58 339.64\"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#d1d3d4;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M183.51,147.49l60.14-35.68-.28-.53L232.78,45l-.12.1c-9.14,34.06-32.46,58.28-59.79,58.28h0V237.25l18.55-8.48h0l-7.85-81C183.5,147.6,183.49,147.49,183.51,147.49Z\"/><path class=\"cls-2\" d=\"M113.1,45.2l-.23-.2-10.59,66.28-.28.53,60.14,35.68s0,.11,0,.3l-7.85,81h0l18.54,8.48V103.38C145.54,103.35,122.26,79.19,113.1,45.2Z\"/><path class=\"cls-1\" d=\"M209.56,141.12l29.87-18.49,31.41,39h0c-12.56.34-34.06,7.24-47.94,21.38-16.22,16.55-24,40.68-24,40.68l-6.69-59.88c.57-.27,7-3.17,10.46-6.82C206.82,152.7,209.41,143.84,209.56,141.12Z\"/><path class=\"cls-2\" d=\"M136.09,141.12l-29.87-18.49-31.41,39h0c12.56.34,34.06,7.24,47.94,21.38,16.23,16.55,23.95,40.68,23.95,40.68l6.69-59.88c-.57-.27-7-3.17-10.45-6.82C138.84,152.7,136.25,143.84,136.09,141.12Z\"/><path class=\"cls-1\" d=\"M172.83,0C100.73,0,42.07,58.65,42.07,130.75S100.73,261.5,172.83,261.5s130.75-58.65,130.75-130.75S244.92,0,172.83,0Zm0,252.61A121.86,121.86,0,1,1,294.68,130.75,122,122,0,0,1,172.83,252.61Z\"/><path class=\"cls-1\" d=\"M19.74,308.23c.71,0,1.07.34,1.07,1V339.1H17.2a1.09,1.09,0,0,1-.78-.27.92.92,0,0,1-.29-.75V325.25H4.68V339.1H1.07c-.71,0-1.07-.34-1.07-1V308.23H3.61a1.15,1.15,0,0,1,.78.26,1,1,0,0,1,.29.76v12.07H16.13V308.23Z\"/><path class=\"cls-1\" d=\"M28.11,339.1c-.71,0-1.07-.34-1.07-1V308.76c1.31-.24,2.78-.44,4.42-.6s3.16-.25,4.58-.25c3.6,0,6.24.78,7.94,2.32s2.53,4.13,2.53,7.75a13.67,13.67,0,0,1-.69,4.68,8,8,0,0,1-1.93,3.12,7.56,7.56,0,0,1-3.06,1.76,13.48,13.48,0,0,1-4,.56,19.22,19.22,0,0,1-2.45-.16,26.8,26.8,0,0,1-2.72-.47V339.1Zm3.57-15.19c.77.15,1.54.27,2.32.38a17.92,17.92,0,0,0,2.31.15,9.38,9.38,0,0,0,2.5-.29,3.65,3.65,0,0,0,1.76-1,4.66,4.66,0,0,0,1-2,14.29,14.29,0,0,0,0-6.46,4.24,4.24,0,0,0-1.13-1.94,4.12,4.12,0,0,0-1.85-.94,11.66,11.66,0,0,0-2.48-.24c-.89,0-1.73,0-2.51.09s-1.44.13-1.94.22Z\"/><path class=\"cls-1\" d=\"M76.62,310.72a1.09,1.09,0,0,1,.78.29,1.43,1.43,0,0,1,.37.78l4.63,21.79q1.53-6.15,2.67-12.57c.76-4.27,1.3-8.54,1.63-12.78h3.48q1,0,.93,1.11c0,.42-.06.83-.11,1.25s-.1.9-.16,1.47c-.23,1.87-.54,3.93-.91,6.17s-.82,4.55-1.32,6.93-1.08,4.75-1.71,7.12-1.29,4.65-2,6.82H81a1.07,1.07,0,0,1-.8-.27,1.69,1.69,0,0,1-.4-.84l-4.59-21-4.84,22.1H66.53a1.33,1.33,0,0,1-.88-.22,2.21,2.21,0,0,1-.47-.76q-1-3.08-2-6.81c-.66-2.5-1.25-5.08-1.79-7.74s-1-5.3-1.4-7.93-.7-5.1-.91-7.41h3.79q.93,0,1,1.11.49,5.88,1.59,11.94T68,333.53l5-22.81Z\"/><path class=\"cls-1\" d=\"M117.13,323.69a33,33,0,0,1-.8,8.06,12.09,12.09,0,0,1-2.27,4.86,7.47,7.47,0,0,1-3.54,2.38,15.34,15.34,0,0,1-4.57.65,15,15,0,0,1-4.54-.65,7.46,7.46,0,0,1-3.52-2.38,12.22,12.22,0,0,1-2.28-4.86,41.05,41.05,0,0,1,0-16.13,12.11,12.11,0,0,1,2.28-4.85,7.48,7.48,0,0,1,3.52-2.39,15,15,0,0,1,4.54-.64,15.34,15.34,0,0,1,4.57.64,7.49,7.49,0,0,1,3.54,2.39,12,12,0,0,1,2.27,4.85A33.07,33.07,0,0,1,117.13,323.69Zm-17.55,0a45.61,45.61,0,0,0,.29,5.72,11,11,0,0,0,1,3.7,4.49,4.49,0,0,0,2,2,8.31,8.31,0,0,0,6.2,0,4.49,4.49,0,0,0,2-2,11.2,11.2,0,0,0,1-3.7,51.37,51.37,0,0,0,0-11.45,11.2,11.2,0,0,0-1-3.7,4.47,4.47,0,0,0-2-2,8.31,8.31,0,0,0-6.2,0,4.47,4.47,0,0,0-2,2,11,11,0,0,0-1,3.7A45.68,45.68,0,0,0,99.58,323.69Z\"/><path class=\"cls-1\" d=\"M123.82,339.1c-.72,0-1.07-.34-1.07-1V308.23h3.61a1.17,1.17,0,0,1,.78.26,1,1,0,0,1,.29.76v25.93h11c.71,0,1.07.34,1.07,1v2.89Z\"/><path class=\"cls-1\" d=\"M160.71,312.06H148.45v9.67h9.81a.9.9,0,0,1,1,1v2.85H148.45v13.5h-3.6c-.72,0-1.07-.34-1.07-1V308.23h15.9a.9.9,0,0,1,1,1Z\"/><path class=\"cls-1\" d=\"M173.36,316.29c0-2.82.8-5,2.41-6.37s4.08-2.14,7.44-2.14A27.75,27.75,0,0,1,187,308a15,15,0,0,1,2.9.6,1.51,1.51,0,0,1,.86.69,2.14,2.14,0,0,1,.16.87v2.05c-1.1-.15-2.23-.28-3.39-.38s-2.34-.16-3.56-.16a12.42,12.42,0,0,0-2.9.29,4.88,4.88,0,0,0-1.85.83,2.94,2.94,0,0,0-1,1.33,5.62,5.62,0,0,0-.28,1.87,5.4,5.4,0,0,0,.31,2,3.13,3.13,0,0,0,1,1.35,7.45,7.45,0,0,0,1.92,1.05c.79.31,1.76.68,2.92,1.09s2.26.89,3.23,1.34a9,9,0,0,1,2.49,1.67,6.67,6.67,0,0,1,1.61,2.45,10.42,10.42,0,0,1,.55,3.68c0,3.2-.86,5.5-2.58,6.88s-4.22,2.07-7.48,2.07a28.07,28.07,0,0,1-4.15-.29,16.14,16.14,0,0,1-3.12-.69,1.59,1.59,0,0,1-.8-.58,1.61,1.61,0,0,1-.22-.89v-2.23q1.56.22,3.45.45a34.26,34.26,0,0,0,4,.22,12.19,12.19,0,0,0,3.1-.33,4.74,4.74,0,0,0,1.91-.94,3,3,0,0,0,1-1.49,6.86,6.86,0,0,0,.27-2,6.15,6.15,0,0,0-.29-2.05,3,3,0,0,0-1-1.36,8.6,8.6,0,0,0-1.89-1.05q-1.18-.5-3-1.11a34.14,34.14,0,0,1-3.32-1.38,9.32,9.32,0,0,1-2.45-1.72,6.78,6.78,0,0,1-1.54-2.41A9.85,9.85,0,0,1,173.36,316.29Z\"/><path class=\"cls-1\" d=\"M213.68,308.23a.9.9,0,0,1,1,1v2.81H202v9.49h10.56a.9.9,0,0,1,1,1v2.85H202v9.85h12.21a1.09,1.09,0,0,1,.78.27,1,1,0,0,1,.29.76v2.8H198.36c-.72,0-1.07-.34-1.07-1V308.23Z\"/><path class=\"cls-1\" d=\"M230.39,307.78a21.34,21.34,0,0,1,3.23.25,10.76,10.76,0,0,1,2.61.64,1.42,1.42,0,0,1,.73.58,1.85,1.85,0,0,1,.2.94v2.09c-.86-.12-1.82-.23-2.87-.33a31.75,31.75,0,0,0-3.28-.16,9.09,9.09,0,0,0-3.38.56,4.64,4.64,0,0,0-2.23,1.89,9.28,9.28,0,0,0-1.2,3.59,36.62,36.62,0,0,0-.36,5.63,33.77,33.77,0,0,0,.45,6.11,9.94,9.94,0,0,0,1.31,3.67,4.49,4.49,0,0,0,2.21,1.81,9.32,9.32,0,0,0,3.16.49,21.75,21.75,0,0,0,3.25-.22,14.34,14.34,0,0,1,2.1-.23,1,1,0,0,1,1.11,1.07v2.18a20.06,20.06,0,0,1-3.1.87,19.86,19.86,0,0,1-4.16.38,12.94,12.94,0,0,1-5-.89,8,8,0,0,1-3.45-2.83,13,13,0,0,1-2-4.94,35.89,35.89,0,0,1-.63-7.24,36.43,36.43,0,0,1,.63-7.31,12.9,12.9,0,0,1,2-4.95,7.82,7.82,0,0,1,3.5-2.78A13.81,13.81,0,0,1,230.39,307.78Z\"/><path class=\"cls-1\" d=\"M262.2,328.19q0,5.88-2.38,8.64T252,339.59a16.07,16.07,0,0,1-4.43-.55,7.46,7.46,0,0,1-3.26-1.88,8.47,8.47,0,0,1-2-3.49,18.52,18.52,0,0,1-.69-5.48v-20h3.61c.71,0,1.07.34,1.07,1v19.43a15.85,15.85,0,0,0,.24,2.89,5.69,5.69,0,0,0,.87,2.21,3.89,3.89,0,0,0,1.71,1.38,7.33,7.33,0,0,0,2.83.47,7,7,0,0,0,2.77-.47,3.92,3.92,0,0,0,1.69-1.36,5.43,5.43,0,0,0,.87-2.18,16.53,16.53,0,0,0,.24-3v-20.4h3.61a1.13,1.13,0,0,1,.78.26,1,1,0,0,1,.29.76Z\"/><path class=\"cls-1\" d=\"M269.33,339.1c-.71,0-1.07-.34-1.07-1V308.76q2-.36,4.41-.6c1.64-.16,3.28-.25,4.95-.25,3.56,0,6.15.78,7.75,2.34s2.41,3.92,2.41,7.07a9,9,0,0,1-1.54,5.43,8.38,8.38,0,0,1-4.08,3,26.47,26.47,0,0,1,2.16,3c.73,1.15,1.41,2.34,2.05,3.56s1.22,2.42,1.74,3.61.93,2.24,1.23,3.16h-3.87a1.4,1.4,0,0,1-.91-.24,1.69,1.69,0,0,1-.47-.74,27.69,27.69,0,0,0-1.1-2.56c-.46-1-1-2-1.51-3s-1.16-2-1.81-3.07a27.3,27.3,0,0,0-2-2.78H272.9V339.1Zm3.57-16h4.9a8.77,8.77,0,0,0,2.16-.25,4,4,0,0,0,1.73-.87,4,4,0,0,0,1.14-1.76,8.62,8.62,0,0,0,.4-2.87,9.79,9.79,0,0,0-.35-2.85,4.22,4.22,0,0,0-1.05-1.78,3.68,3.68,0,0,0-1.76-.92,11.52,11.52,0,0,0-2.5-.24c-1,0-1.91,0-2.71.09s-1.46.13-2,.22Z\"/><path class=\"cls-1\" d=\"M294.59,339.1c-.71,0-1.07-.34-1.07-1V308.23h3.61c.71,0,1.07.34,1.07,1V339.1Z\"/><path class=\"cls-1\" d=\"M310.68,312.15h-7.09c-.71,0-1.07-.34-1.07-1v-2.89h20a1.13,1.13,0,0,1,.78.26,1,1,0,0,1,.29.76v2.9h-8.19v27h-3.61c-.72,0-1.07-.34-1.07-1Z\"/><path class=\"cls-1\" d=\"M335.8,339.1c-.71,0-1.06-.34-1.06-1v-10.7c-1-1.69-1.94-3.31-2.77-4.87s-1.59-3.12-2.27-4.68-1.31-3.13-1.89-4.7-1.11-3.21-1.58-4.9h4c.45,0,.73.09.87.29a3.25,3.25,0,0,1,.38.91c.26.95.59,2,1,3.07s.81,2.25,1.27,3.46,1,2.43,1.53,3.69,1.19,2.52,1.88,3.77q1-1.92,2-4.08t1.74-4.23c.52-1.38,1-2.67,1.36-3.88a26.67,26.67,0,0,0,.8-3h3.47a1,1,0,0,1,.89.42,1.15,1.15,0,0,1,.05,1.05q-.81,2.54-1.65,4.76c-.57,1.49-1.17,2.94-1.83,4.35s-1.36,2.81-2.11,4.21-1.59,2.85-2.48,4.36V339.1Z\"/></g></g></svg>");
;// CONCATENATED MODULE: ./branding/hp_sure_click/assets/icon-warning-alt.svg
/* harmony default export */ const icon_warning_alt = ("<svg aria-label=\"Warning Alt\" fill=\"currentColor\" focusable=\"false\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" class=\"css-1xcgh5c\"><path d=\"M21.0170288,18.513916L12.8718262,4.0298462c-0.3823242-0.6797485-1.3610229-0.6797485-1.7433472,0\r\n\tL2.9833374,18.513916C2.6084595,19.180481,3.09021,20.0040894,3.8549805,20.0040894h16.2903442\r\n\tC20.9100952,20.0040894,21.3917847,19.180481,21.0170288,18.513916z M11.5001221,7.999939c0-0.276123,0.223877-0.5,0.5-0.5\r\n\tc0.2761841,0,0.5,0.223877,0.5,0.5v5.499939c0,0.2762451-0.2238159,0.5-0.5,0.5c-0.276123,0-0.5-0.2237549-0.5-0.5V7.999939z\r\n\t M12.0001221,17.5c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1s1,0.4476929,1,1S12.5524292,17.5,12.0001221,17.5z\"></path></svg>\r\n");
;// CONCATENATED MODULE: ./branding/hp_sure_click/assets/logo-credential-protection-lod.svg
/* harmony default export */ const logo_credential_protection_lod = ("<svg width=\"95\" height=\"106\" viewBox=\"0 0 95 106\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<g>\r\n<path d=\"M5.19995 17.3C2.99995 18.3 1.29995 20.4 0.999953 22.8C-0.200047 31.4 -2.00005 53.5 6.29995 73.6C6.69995 74.7 16.3 99.9 45.6 105.6C46.2 105.7 46.8 105.8 47.4 105.7C49 105.6 52.7 105 56 103.8C82.6 94.6 89.6 69.8 90.3 67C96.3 48.3 94.2 29.1 93.5 22.9C93.2 20.4 91.6 18.2 89.2 17.2L49.6 0.5C48.7 0.2 47.8 0 46.9 0C46 0 45 0.2 44.1 0.6L5.19995 17.3ZM48.1 4.2L87.9 20.9C88.9 21.3 89.6 22.3 89.7 23.3C90.3999 29.4 92.4 47.9 86.6 65.8V66C86.5 66.2 80.2 91.3 54.8 100.1C52.1 101 48.7 101.7 47.3 101.7C47.2 101.7 47.2 101.7 47.1 101.7C46.9 101.7 46.7 101.7 46.5 101.6C19.2 96.2 10.5 73.1 10.2 72.1V72C2.09995 52.9 3.89995 31.6 4.99995 23.3C5.09995 22.2 5.79995 21.4 6.79995 20.9L45.7 4.2C46.4 3.9 47.3 3.9 48.1 4.2Z\" fill=\"#fff\"/>\r\n<path d=\"M78.5 45.0001C78.5 44.9001 78.5 44.8001 78.5 44.7001C78.5 44.6001 78.5 44.6001 78.5 44.5001C78.5 44.1001 78.4 43.7001 78.2 43.4001C78.2 43.3001 78.1 43.3001 78.1 43.2001C78 43.1001 78 43.0001 77.9 43.0001C77.9 42.9001 77.8 42.9001 77.8 42.8001C77.7 42.7001 77.7 42.7001 77.6 42.6001C77.5 42.5001 77.5 42.5001 77.4 42.4001C77.3 42.3001 77.3 42.3001 77.2 42.2001C77.1 42.1001 77 42.1001 76.8 42.0001C76.7 42.0001 76.7 41.9001 76.6 41.9001C76.5 41.8001 76.3 41.8001 76.2 41.8001C76.2 41.8001 76.2 41.8001 76.1 41.8001H76C75.9 41.8001 75.9 41.8001 75.8 41.8001L66.3 40.7001L66.8 38.6001C70.9 37.9001 74.1 34.4001 74.1 30.2001C74.1 25.5001 70.2 21.6001 65.4 21.6001C60.6 21.6001 56.7 25.4001 56.7 30.2001C56.7 33.3001 58.4 36.0001 60.9 37.5001L60.3 40.1001L54.5 39.5001C52.9 39.3001 51.4 40.5001 51.2 42.1001C51 43.7001 52.2 45.2001 53.8 45.4001L65.6 46.7001L44.6 58.3001L32.7 43.4001L39 44.0001C41.2 50.6001 47.4 52.8001 47.6 52.9001C47.9 53.0001 48.3 53.1001 48.6 53.1001C49.8 53.1001 51 52.3001 51.4 51.1001C51.9 49.5001 51.1 47.8001 49.5 47.3001C49.5 47.3001 45.4 45.8001 44.4 41.4001C44.1 40.2001 44 39.1001 44.1 38.2001C45 38.8001 46.3 38.9001 47.3 38.3001C48.7 37.4001 49.2 35.6001 48.3 34.2001L46.2 30.7001C45.5 29.6001 44.2 29.0001 42.9 29.4001C41 29.9001 38.4 33.1001 38.1 37.9001L26.2 36.6001C26.1 36.6001 26.1 36.6001 26 36.6001C25.9 36.6001 25.9 36.6001 25.8 36.6001C25.7 36.6001 25.5 36.6001 25.4 36.6001H25.3C25.1 36.6001 25 36.7001 24.8 36.7001C24.8 36.7001 24.7 36.7001 24.7 36.8001C24.6 36.9001 24.5 36.9001 24.3 37.0001C24.3 37.0001 24.2 37.0001 24.2 37.1001C23.9 37.3001 23.6 37.6001 23.4 37.9001C23.3 38.0001 23.3 38.1001 23.2 38.1001C23.2 38.2001 23.1 38.3001 23.1 38.3001C23 38.5001 22.9 38.7001 22.9 39.0001L15.9 71.9001C15.7 72.7001 15.9 73.5001 16.3 74.2001C16.8 74.9001 17.5 75.3001 18.3 75.5001L66.7 84.0001C66.9 84.0001 67.1 84.0001 67.2 84.0001C68.6 84.0001 69.8 83.0001 70.1 81.7001L78.3 45.3001C78.3 45.2001 78.3 45.2001 78.3 45.1001C78.5 45.2001 78.5 45.1001 78.5 45.0001ZM65.4 27.6001C66.9 27.6001 68.1 28.8001 68.1 30.2001C68.1 31.6001 66.9 32.8001 65.4 32.8001C63.9 32.8001 62.7 31.6001 62.7 30.2001C62.7 28.8001 64 27.6001 65.4 27.6001ZM65.1 77.7001L22.6 70.2001L27.6 46.5001L41.4 64.0001C42 64.7001 42.9 65.1001 43.8 65.1001C44.3 65.1001 44.8 65.0001 45.2 64.7001L71.1 50.5001L65.1 77.7001Z\" fill=\"#fff\"/>\r\n</g>\r\n</svg>\r\n");
;// CONCATENATED MODULE: ../node_modules/preact/dist/preact.module.js
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_u,hooks_module_r,hooks_module_o=0,hooks_module_i=[],hooks_module_c=l.__b,hooks_module_f=l.__r,hooks_module_e=l.diffed,hooks_module_a=l.__c,hooks_module_v=l.unmount;function hooks_module_l(t,r){l.__h&&l.__h(hooks_module_u,t,hooks_module_o||r),hooks_module_o=0;var i=hooks_module_u.__H||(hooks_module_u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function hooks_module_m(n){return hooks_module_o=1,hooks_module_p(hooks_module_w,n)}function hooks_module_p(n,r,o){var i=hooks_module_l(hooks_module_t++,2);return i.t=n,i.__c||(i.__=[o?o(r):hooks_module_w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=hooks_module_u),i.__}function hooks_module_y(r,o){var i=hooks_module_l(hooks_module_t++,3);!l.__s&&hooks_module_k(i.__H,o)&&(i.__=r,i.__H=o,hooks_module_u.__H.__h.push(i))}function hooks_module_d(r,o){var i=hooks_module_l(hooks_module_t++,4);!l.__s&&hooks_module_k(i.__H,o)&&(i.__=r,i.__H=o,hooks_module_u.__h.push(i))}function hooks_module_h(n){return hooks_module_o=5,hooks_module_(function(){return{current:n}},[])}function hooks_module_s(n,t,u){hooks_module_o=6,hooks_module_d(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))}function hooks_module_(n,u){var r=hooks_module_l(hooks_module_t++,7);return hooks_module_k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function hooks_module_A(n,t){return hooks_module_o=8,hooks_module_(function(){return n},t)}function F(n){var r=hooks_module_u.context[n.__c],o=hooks_module_l(hooks_module_t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(hooks_module_u)),r.props.value):n.__}function hooks_module_T(t,u){l.useDebugValue&&l.useDebugValue(u?u(t):t)}function hooks_module_q(n){var r=hooks_module_l(hooks_module_t++,10),o=hooks_module_m();return r.__=n,hooks_module_u.componentDidCatch||(hooks_module_u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function hooks_module_x(){for(var t;t=hooks_module_i.shift();)if(t.__P)try{t.__H.__h.forEach(hooks_module_g),t.__H.__h.forEach(hooks_module_j),t.__H.__h=[]}catch(u){t.__H.__h=[],l.__e(u,t.__v)}}l.__b=function(n){hooks_module_u=null,hooks_module_c&&hooks_module_c(n)},l.__r=function(n){hooks_module_f&&hooks_module_f(n),hooks_module_t=0;var r=(hooks_module_u=n.__c).__H;r&&(r.__h.forEach(hooks_module_g),r.__h.forEach(hooks_module_j),r.__h=[])},l.diffed=function(t){hooks_module_e&&hooks_module_e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==hooks_module_i.push(o)&&hooks_module_r===l.requestAnimationFrame||((hooks_module_r=l.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),hooks_module_b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);hooks_module_b&&(t=requestAnimationFrame(u))})(hooks_module_x)),hooks_module_u=null},l.__c=function(t,u){u.some(function(t){try{t.__h.forEach(hooks_module_g),t.__h=t.__h.filter(function(n){return!n.__||hooks_module_j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],l.__e(r,t.__v)}}),hooks_module_a&&hooks_module_a(t,u)},l.unmount=function(t){hooks_module_v&&hooks_module_v(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{hooks_module_g(n)}catch(n){u=n}}),u&&l.__e(u,r.__v))};var hooks_module_b="function"==typeof requestAnimationFrame;function hooks_module_g(n){var t=hooks_module_u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),hooks_module_u=t}function hooks_module_j(n){var t=hooks_module_u;n.__c=n.__(),hooks_module_u=t}function hooks_module_k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function hooks_module_w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

;// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
function compat_module_C(n,t){for(var e in t)n[e]=t[e];return n}function compat_module_S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function compat_module_g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:compat_module_S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return compat_module_S(this.props,n)||compat_module_S(this.state,t)};var compat_module_w=l.__b;l.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),compat_module_w&&compat_module_w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function compat_module_x(n){function t(t){var e=compat_module_C({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var compat_module_N=function(n,t){return null==n?null:A(A(n).map(t))},compat_module_k={map:compat_module_N,forEach:compat_module_N,count:function(n){return n?A(n).length:0},only:function(n){var t=A(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:A},compat_module_A=l.__e;l.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);compat_module_A(n,t,e,r)};var compat_module_O=l.unmount;function compat_module_L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function compat_module_F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return v(e,u)}return u.displayName="Lazy",u.__f=!0,u}function compat_module_M(){this.u=null,this.o=null}l.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),compat_module_O&&compat_module_O(n)},(compat_module_L.prototype=new _).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},compat_module_L.prototype.componentWillUnmount=function(){this.t=[]},compat_module_L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=compat_module_C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&v(d,null,n.fallback);return u&&(u.__h=null),[v(d,null,t.__e?null:n.children),u]};var compat_module_T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function compat_module_D(n){return this.getChildContext=function(){return n.context},n.children}function compat_module_I(n){var t=this,e=n.i;t.componentWillUnmount=function(){S(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),S(v(compat_module_D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){var e=v(compat_module_I,{__v:n,i:t});return e.containerInfo=t,e}(compat_module_M.prototype=new _).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),compat_module_T(t,n,r)):u()};e?e(o):o()}},compat_module_M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},compat_module_M.prototype.componentDidUpdate=compat_module_M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){compat_module_T(n,e,t)})};var compat_module_P="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,compat_module_j="undefined"!=typeof document,compat_module_z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function compat_module_B(n,t,e){return null==t.__k&&(t.textContent=""),S(n,t),"function"==typeof e&&e(),n?n.__c:null}function compat_module_$(n,t,e){return q(n,t),"function"==typeof e&&e(),n?n.__c:null}_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var compat_module_H=l.event;function Z(){}function Y(){return this.cancelBubble}function compat_module_q(){return this.defaultPrevented}l.event=function(n){return compat_module_H&&(n=compat_module_H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=compat_module_q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=l.vnode;l.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];compat_module_j&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!compat_module_z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&V.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=A(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J))}n.$$typeof=compat_module_P,K&&K(n)};var Q=l.__r;l.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return v.bind(null,n)}function en(n){return!!n&&n.$$typeof===compat_module_P}function rn(n){return en(n)?B.apply(null,arguments):n}function un(n){return!!n.__k&&(S(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=function(n,t){return n(t)},cn=d;/* harmony default export */ const compat_module = ({useState:hooks_module_m,useReducer:hooks_module_p,useEffect:hooks_module_y,useLayoutEffect:hooks_module_d,useRef:hooks_module_h,useImperativeHandle:hooks_module_s,useMemo:hooks_module_,useCallback:hooks_module_A,useContext:F,useDebugValue:hooks_module_T,version:"17.0.2",Children:compat_module_k,render:compat_module_B,hydrate:compat_module_$,unmountComponentAtNode:un,createPortal:W,createElement:v,createContext:D,createFactory:tn,cloneElement:rn,createRef:p,Fragment:d,isValidElement:en,findDOMNode:on,Component:_,PureComponent:E,memo:compat_module_g,forwardRef:compat_module_x,flushSync:fn,unstable_batchedUpdates:ln,StrictMode:d,Suspense:compat_module_L,SuspenseList:compat_module_M,lazy:compat_module_F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});
//# sourceMappingURL=compat.module.js.map

;// CONCATENATED MODULE: ../lib/common/i18n.ts


var I18nMessages;
(function (I18nMessages) {
    I18nMessages["name"] = "extName";
    I18nMessages["blockedLinkPageTitle"] = "blockedLinkPageTitle";
    I18nMessages["blockedLinkPageOpenedSecureExplanation"] = "blockedLinkPageOpenedSecureExplanation";
    I18nMessages["blockedPDFPageTitle"] = "blockedPDFPageTitle";
    I18nMessages["blockedPDFPageOpenedSecureExplanation"] = "blockedPDFPageOpenedSecureExplanation";
    I18nMessages["blockedPageHelpLink"] = "blockedPageHelpLink";
    I18nMessages["blockedPageWarningTooltip"] = "blockedPageWarningTooltip";
    I18nMessages["blockedPageUntrustedTooltip"] = "blockedPageUntrustedTooltip";
    I18nMessages["blockedPageBrowserExplanation"] = "blockedPageSecureBrowserExplanation";
    I18nMessages["launchedLinkPageOpenedSecureExplanation"] = "launchedLinkPageOpenedSecureExplanation";
    I18nMessages["launchedPDFPageOpenedSecureExplanation"] = "launchedPDFPageOpenedSecureExplanation";
    I18nMessages["launchedPageGoBack"] = "launchedPageGoBack";
    I18nMessages["launchedPageCloseTab"] = "launchedPageCloseTab";
    I18nMessages["trustUrlButton"] = "blockedPageContinue";
    I18nMessages["untrustUrlButton"] = "blockedPageSecure";
    I18nMessages["rememberTrustDecisionText"] = "blockedPageRemember";
    I18nMessages["openLinkInSecureBrowser"] = "contextMenuOpenSecure";
    I18nMessages["popupNoError"] = "popupNoError";
    I18nMessages["popupGenericError"] = "popupGenericError";
    I18nMessages["popupMissingHelper"] = "popupMissingHelper";
    I18nMessages["popupSureClickInitRequired"] = "popupSureClickInitRequired";
    I18nMessages["popupDisabled"] = "popupDisabled";
    I18nMessages["popupSureClickUnlicensed"] = "popupSureClickUnlicensed";
    I18nMessages["popupSureClickUnconfigured"] = "popupSureClickUnconfigured";
    I18nMessages["popupSecureBrowserWindowButton"] = "popupSecureBrowserWindowButton";
    I18nMessages["popupClearRememberedDecisionsText"] = "popupClearRememberedDecisionsText";
    I18nMessages["popupClearRememberedDecisionsButton"] = "popupClearRememberedDecisionsButton";
    I18nMessages["helpLinkText"] = "popupHelpLinkText";
    I18nMessages["helpLinkLocale"] = "helpLinkLocale";
    I18nMessages["optionsNoOptions"] = "optionsPageNoOptions";
    I18nMessages["optionsLoggingToggle"] = "optionsPageLoggingToggle";
    I18nMessages["ipOverlayBlocked_Title"] = "overlayBlacklist_Title";
    I18nMessages["ipOverlayBlocked_Description"] = "overlayBlacklist_Description";
    I18nMessages["ipOverlayBlockedFile_Description"] = "overlayBlockedFile_Description";
    I18nMessages["ipOverlayBlockedHttp_Title"] = "overlayHttpBlacklist_Title";
    I18nMessages["ipOverlayBlockedHttp_Description"] = "overlayHttpBlacklist_Description";
    I18nMessages["ipOverlayNormalUnknown_Title"] = "overlayNormalUnknown_Title";
    I18nMessages["ipOverlayNormalUnknown_Description"] = "overlayNormalUnknown_Description";
    I18nMessages["ipOverlayManagedUnknown_Title"] = "overlayManagedUnknown_Title";
    I18nMessages["ipOverlay_BackToSafetyButton"] = "overlay_BackToSafetyButton";
    I18nMessages["ipOverlay_ViewPageLinkButton"] = "overlay_ViewPageLinkButton";
    I18nMessages["ipOverlay_AllowInputButton"] = "overlay_AllowInputButton";
    I18nMessages["ipOverlay_BlameAdmin"] = "overlay_BlameAdmin";
    I18nMessages["ipOptionsAllowedDomainsSectionHeader"] = "optionsAllowedDomainsSectionHeader";
    I18nMessages["ipOptionsAllowedDomainsEmpty"] = "optionsAllowedDomainsEmpty";
})(I18nMessages || (I18nMessages = {}));
const I18nMessagesWithSub = {
    trustUrlButton: {
        key: "blockedPageContinueV2",
        placeholder: "{THIS_BROWSER}"
    },
};
function getI18n(i18nMessage, substitution) {
    let key, placeholder;
    if (isString(i18nMessage)) {
        key = i18nMessage;
    }
    else {
        ({ key, placeholder } = i18nMessage);
    }
    let result = chrome.i18n.getMessage(key);
    if (maybe_some(placeholder) && maybe_some(substitution)) {
        result = result.replace(placeholder, substitution);
    }
    return result;
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/overlays.tsx









function insertSVG(svg) {
    return { __html: svg };
}
function Overlay({ category, sendMessage, isFile, isHttp, treatHttpPagesAsBlocked, allowUserToEnableInput, origin, }) {
    const replaceTab = hooks_module_A(() => {
        log_log("Overlay: Replacing tab");
        sendMessage(IPOverlayAction.BackToSafety);
    }, []);
    const dismissWithInputDisabled = hooks_module_A(() => {
        log_log("Overlay: Dismissing overlay with input disabled");
        sendMessage(IPOverlayAction.ViewWithInputDisabled);
    }, []);
    const dismissWithInputEnabled = hooks_module_A(() => {
        log_log("Overlay: Dismissing overlay with input enabled");
        sendMessage(IPOverlayAction.EnableInput);
    }, []);
    const strTitle = hooks_module_(() => {
        if (category === IPPageCategory.Blocked && isFile) {
            return getI18n(I18nMessages.ipOverlayBlocked_Title);
        }
        if (category === IPPageCategory.Blocked && isHttp && treatHttpPagesAsBlocked) {
            return getI18n(I18nMessages.ipOverlayBlockedHttp_Title);
        }
        if (category === IPPageCategory.Blocked) {
            return getI18n(I18nMessages.ipOverlayBlocked_Title);
        }
        if (!allowUserToEnableInput) {
            return getI18n(I18nMessages.ipOverlayManagedUnknown_Title);
        }
        return getI18n(I18nMessages.ipOverlayNormalUnknown_Title);
    }, [category, isFile, isHttp, treatHttpPagesAsBlocked, allowUserToEnableInput]);
    const strWarning = hooks_module_(() => {
        if (category === IPPageCategory.Blocked && isFile) {
            return getI18n(I18nMessages.ipOverlayBlockedFile_Description);
        }
        if (category === IPPageCategory.Blocked && isHttp && treatHttpPagesAsBlocked) {
            return getI18n(I18nMessages.ipOverlayBlockedHttp_Description);
        }
        if (category === IPPageCategory.Blocked) {
            return getI18n(I18nMessages.ipOverlayBlocked_Description);
        }
        return getI18n(I18nMessages.ipOverlayNormalUnknown_Description);
    }, [category, isFile, isHttp, treatHttpPagesAsBlocked]);
    const shouldBlameAdmin = hooks_module_(() => {
        return !allowUserToEnableInput && (category === IPPageCategory.Unknown || isHttp);
    }, [category, isHttp, allowUserToEnableInput]);
    return v("div", { id: "br-fullpage-overlay", className: `br-fullpage-overlay--${category}` },
        v("div", { className: "br-fullpage-overlay-content" },
            v("div", { className: "br-fullpage-branding" },
                v("div", { className: "logo-hp", dangerouslySetInnerHTML: insertSVG(logo_hp_lod) }),
                v("div", { className: "logo-wolf", dangerouslySetInnerHTML: insertSVG(logo_wolf_lod) })),
            v("div", { className: "br-fullpage-warning-box" },
                v("div", { className: "br-warning-title", "data-testid": "title" },
                    v("div", { className: "logo-cp", dangerouslySetInnerHTML: insertSVG(logo_credential_protection_lod) }),
                    strTitle),
                v("div", { className: "br-warning-description" },
                    v("p", { "data-testid": "origin" },
                        v("strong", null, origin)),
                    v("p", { "data-testid": "warning" }, strWarning)),
                v("div", { className: "br-warning-actions" },
                    v("button", { type: "button", className: "button button--safe", onClick: replaceTab }, getI18n(I18nMessages.ipOverlay_BackToSafetyButton)),
                    v("button", { type: "button", className: "button button--neutral", onClick: dismissWithInputDisabled }, getI18n(I18nMessages.ipOverlay_ViewPageLinkButton)),
                    allowUserToEnableInput &&
                        v("button", { type: "button", className: "button button--ghost button--with-icon", onClick: dismissWithInputEnabled },
                            v("div", { dangerouslySetInnerHTML: insertSVG(icon_warning_alt) }),
                            getI18n(I18nMessages.ipOverlay_AllowInputButton))),
                shouldBlameAdmin && v("p", null, getI18n(I18nMessages.ipOverlay_BlameAdmin)))));
}

// EXTERNAL MODULE: ./css/overlay.css
var overlay = __webpack_require__(326);
;// CONCATENATED MODULE: ./content-scripts/identity-protection/controller.tsx















class IPUpdatingContentScriptData {
    constructor(config, portController) {
        this.config = config;
        this.onChanged = new EventDispatcher();
        portController.registerMessagePayloadHandler(MessageType.contentScriptDataV22, payload => {
            this.config = payload.config;
            this.onChanged.dispatchEvent({ linkProtectionWouldBlock: payload.linkProtectionWouldBlock, enabled: payload.enabled });
        });
    }
    get operationMode() {
        return this.config.operationMode;
    }
    get onlyOnPageWithPasswordInput() {
        return this.config.onlyOnPageWithPasswordInput;
    }
    get onlyTriggerOnPasswordInput() {
        return this.config.onlyTriggerOnPasswordInput;
    }
    get trustPagesWithAutofilledPasswords() {
        return this.config.trustPagesWithAutofilledPasswords;
    }
    get useLinkAnalysisHeuristic() {
        return this.config.useLinkAnalysisHeuristic;
    }
    get treatHttpPagesAsBlocked() {
        return this.config.treatHttpPagesAsBlocked;
    }
    get treatFileUrlsAsBlocked() {
        return this.config.treatFileUrlsAsBlocked;
    }
    get allowUserToEnableInput() {
        return this.config.allowUserToEnableInput;
    }
    get blockedElementTags() {
        return this.config.blockedElementTags;
    }
    get blockedInputElementTypes() {
        return this.config.blockedInputElementTypes;
    }
}
class IPController {
    constructor() {
        this.linkProtectionWouldBlock = false;
        this.portController = new ExtensionPortController(hostConstants.identityProtectionPortName, undefined, () => this.onExtensionDisconnected());
        this.portController.registerMessagePayloadHandler(MessageType.frameLoadResponseV22, message => this.onFrameLoadResponse(message));
        this.portController.registerMessagePayloadHandler(MessageType.phishingDetectionTrippedV22, message => this.onDetectionTripped());
        this.portController.registerMessagePayloadHandler(MessageType.phishingDetectionSuppressedV22, message => this.onDetectionSuppressed());
        this.portController.registerMessagePayloadHandler(MessageType.onPhishingCategoryChangedV22, message => this.onCategoryInfoChanged(message));
        this.portController.registerMessagePayloadHandler(MessageType.onPhishingOverlayClickV22, message => this.onOverlayClick(message));
        this.portController.connect();
    }
    onExtensionDisconnected() {
        var _a;
        (_a = this.pageManager) === null || _a === void 0 ? void 0 : _a.disable(this.linkProtectionWouldBlock);
    }
    onFrameLoadResponse(response) {
        this.config = new IPUpdatingContentScriptData(response.config, this.portController);
        this.config.onChanged.registerEventHandler(event => this.onDataChanged(event));
        this.frameId = response.frameId;
        this.linkProtectionWouldBlock = response.linkProtectionWouldBlock;
        if (response.enabled) {
            this.pageManager = new PhishingPageManager(this.linkProtectionWouldBlock, this.config, this.portController);
        }
    }
    onDataChanged(event) {
        var _a;
        this.linkProtectionWouldBlock = event.linkProtectionWouldBlock;
        if (event.enabled) {
            if (maybe_none(this.pageManager)) {
                this.pageManager = new PhishingPageManager(this.linkProtectionWouldBlock, this.config, this.portController);
            }
            else {
                this.pageManager.enable(this.linkProtectionWouldBlock);
            }
        }
        else {
            (_a = this.pageManager) === null || _a === void 0 ? void 0 : _a.disable(this.linkProtectionWouldBlock);
        }
    }
    onDetectionTripped() {
        if (maybe_none(this.config) || maybe_none(this.pageManager)) {
            log_logError("onDetectionTripped: content script config or page manager is undefined");
            return;
        }
        this.pageManager.handleDetectionTripped();
        let pageCategory = this.pageManager.pageCategory;
        if (shouldDisableInput(pageCategory, this.config.operationMode, this.linkProtectionWouldBlock)) {
            if (this.isTopLevelFrame) {
                if (maybe_none(pageCategory)) {
                    pageCategory = IPPageCategory.Unknown;
                }
                const isFile = window.location.protocol === scheme_Scheme.FILE;
                const isHttp = window.location.protocol === scheme_Scheme.HTTP;
                const allowUserToEnableInput = this.config.allowUserToEnableInput && pageCategory !== IPPageCategory.Blocked;
                const origin = `${window.location.protocol}//${isFile ? window.location.pathname : window.location.hostname}`;
                const shadowHost = document.createElement('com-br-cp');
                const style = document.createElement('style');
                const shadow = shadowHost.attachShadow({ mode: 'closed' });
                style.textContent = overlay/* default */.Z;
                document.body.append(shadowHost);
                shadow.appendChild(style);
                const sendMessage = (action) => {
                    this.portController.sendMessage(MessageType.onPhishingOverlayClickV22, new OnPhishingOverlayClickV22(action));
                    shadowHost.remove();
                };
                S(v(Overlay, { category: pageCategory, sendMessage: sendMessage, isFile: isFile, isHttp: isHttp, treatHttpPagesAsBlocked: this.config.treatHttpPagesAsBlocked, allowUserToEnableInput: allowUserToEnableInput, origin: origin }), shadow);
            }
        }
        else {
            if (this.isTopLevelFrame) {
                this.portController.sendMessage(MessageType.onPhishingOverlayClickV22, new OnPhishingOverlayClickV22(IPOverlayAction.OverlayNotShown));
            }
            this.pageManager.handleDetectionSuppressed();
        }
    }
    onDetectionSuppressed() {
        var _a;
        (_a = this.pageManager) === null || _a === void 0 ? void 0 : _a.handleDetectionSuppressed();
    }
    onCategoryInfoChanged(payload) {
        var _a, _b;
        if ((_a = this.pageManager) === null || _a === void 0 ? void 0 : _a.hasTripped) {
            log_log(`Ignoring category update to ${IPPageCategory[payload.category]} because detection has tripped.`);
            return;
        }
        (_b = this.pageManager) === null || _b === void 0 ? void 0 : _b.updatePageCategoryInfo(payload.category);
    }
    onOverlayClick(payload) {
        var _a;
        switch (payload.action) {
            case IPOverlayAction.EnableInput:
                log_log("Setting page category to UserAllowed because of overlay click");
                (_a = this.pageManager) === null || _a === void 0 ? void 0 : _a.updatePageCategoryInfo(IPPageCategory.UserAllowed);
        }
    }
    get isTopLevelFrame() {
        return this.frameId === TopLevelFrameId;
    }
}

;// CONCATENATED MODULE: ./content-scripts/identity-protection/main.ts

function initChromeRuntime() {
    const runtime = chrome.runtime;
}
initChromeRuntime();
const controller = new IPController();

})();

/******/ })()
;