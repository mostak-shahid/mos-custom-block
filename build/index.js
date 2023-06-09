/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  // 
  InspectorControls,
  ColorPalette,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  BlockControls,
  AligmentToolbar
} = wp.editor;
const {
  PanelBody,
  IconButton,
  Button,
  RangeControl
} = wp.components;
const ALLOWED_BLOCKS = ['core/button'];
registerBlockType('mos/custom-cta', {
  // built-in attributes
  title: 'Call to Action',
  description: 'Block to generate a custom Call to Action',
  icon: 'format-image',
  category: 'layout',
  // custom attributes

  attributes: {
    content: {
      type: 'string'
    },
    ctaBackgroundImage: {
      type: 'string',
      default: null
    },
    ctaOverlayColor: {
      type: 'string',
      default: '#ffffff'
    },
    ctaOverlayOpacity: {
      type: 'number',
      default: '0.3'
    },
    ctaTitle: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    ctaTitleColor: {
      type: 'string',
      default: '#000000'
    },
    ctaBody: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    ctaAlignment: {
      type: 'string',
      default: 'none'
    }
  },
  // built-in functions

  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      ctaBackgroundImage,
      ctaOverlayColor,
      ctaOverlayOpacity,
      ctaTitle,
      ctaTitleColor,
      ctaBody,
      ctaAlignment
    } = attributes;
    // custom functions
    function updateAuthor(event) {
      console.log(event.target.value);
      setAttributes({
        content: event.target.value
      });
    }
    ;
    // const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );

    function onSelectImage(newBackgroundImage) {
      setAttributes({
        ctaBackgroundImage: newBackgroundImage.sizes.full.url
      });
    }
    ;
    function onChangeTitle(newTitle) {
      setAttributes({
        ctaTitle: newTitle
      });
    }
    ;
    function onChangeBody(newBody) {
      setAttributes({
        ctaBody: newBody
      });
    }
    ;
    function onTitleColorChange(newTitleColor) {
      setAttributes({
        ctaTitleColor: newTitleColor
      });
    }
    ;
    // return <input type="text" value={attributes.content} onChange={x => setAttributes({content: x.target.value})} />;
    // return <input type="text" value={attributes.content} onChange={updateAuthor} />;
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Font Color Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strone", null, "Select a Title Color: ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: ctaTitleColor,
      onChange: onTitleColorChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Background Image Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strone", null, "Select a Background Image: ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload
    // onSelect={ ( media ) =>
    //     console.log( 'selected ' + media.length )
    // }
    , {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: ctaBackgroundImage,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
        onClick: open,
        icon: "upload",
        className: "editor-media-placeholder__button is-button is-default is-large"
      }, "Open Media Library")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strone", null, "Overlay Color: ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: ctaOverlayColor,
      onChange: newOverlayColor => setAttributes({
        ctaOverlayColor: newOverlayColor
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      title: 'Overlay Opacity',
      value: ctaOverlayOpacity,
      onChange: newOverlayOpacity => setAttributes({
        ctaOverlayOpacity: newOverlayOpacity
      }),
      min: "0",
      max: "1",
      step: "0.01"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-container",
      style: {
        backgroundImage: `url(${ctaBackgroundImage})`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        backgroundColor: ctaOverlayColor,
        opacity: ctaOverlayOpacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-text-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Your CTA Title",
      value: ctaTitle,
      onChange: onChangeTitle,
      style: {
        color: ctaTitleColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your CTA Description",
      value: ctaBody,
      onChange: onChangeBody
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    })))];
  },
  save: ({
    attributes
  }) => {
    const {
      ctaBackgroundImage,
      ctaOverlayColor,
      ctaOverlayOpacity,
      ctaTitle,
      ctaTitleColor,
      ctaBody,
      ctaAlignment
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-container",
      style: {
        backgroundImage: `url(${ctaBackgroundImage})`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        backgroundColor: ctaOverlayColor,
        opacity: ctaOverlayOpacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-text-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      style: {
        color: ctaTitleColor
      }
    }, ctaTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: ctaBody
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map