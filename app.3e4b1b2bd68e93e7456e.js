webpackJsonp([0,2],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=document.getElementsByClassName("demonstration")[0];l["default"].render(s["default"].createElement(c["default"],null),e)}r(1),r(5),r(7),r(9),r(11),r(14);var o=r(16),s=n(o),i=r(168),l=n(i),u=r(169),c=n(u);a()},1:function(e,t){},5:1,7:1,9:1,11:1,14:1,168:function(e,t,r){"use strict";e.exports=r(18)},169:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=r(16),u=n(l),c=r(170),p=n(c),f=r(171),b=n(f),d=r(172),m=n(d),h=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(p["default"],{className:"right",project:b["default"].user+"/"+b["default"].name}),u["default"].createElement("p",null,"Just demonstrating the awesomeness of this boilerplate here."),u["default"].createElement(m["default"],null))}}]),t}(u["default"].Component);t["default"]=h},170:function(e,t,r){!function(t,n){e.exports=n(r(16))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1);e.exports=o.createClass({displayName:"exports",render:function(){var e=this.props,t=e.text,r=e.style,s=e.className,i=n(e,["text","style","className"]);return s=s||"",s+=" github-fork-ribbon-wrapper",t=this.props.text||"Fork me on GitHub",o.createElement("div",{className:s},o.createElement("div",{className:"github-fork-ribbon",style:r},o.createElement("a",a({href:"https://github.com/"+this.props.project},i),t)))}})},function(t,r){t.exports=e}])})},171:function(e,t){e.exports={name:"react-component-boilerplate",description:"Boilerplate for React.js components",author:"Juho Vepsalainen",user:"survivejs",version:"2.3.1",scripts:{start:"webpack-dev-server",test:"karma start","test:tdd":"karma start --auto-watch --no-single-run","test:lint":"eslint . --ext .js --ext .jsx","gh-pages":"webpack","gh-pages:deploy":"gh-pages -d gh-pages","gh-pages:stats":"webpack --profile --json > stats.json",dist:"webpack","dist:min":"webpack","dist:modules":"babel ./src --out-dir ./dist-modules",preversion:'npm run test && npm run test:lint && npm run dist && npm run dist:min && git commit --allow-empty -am "Update dist"',prepublish:"npm run dist:modules",postpublish:"npm run gh-pages && npm run gh-pages:deploy",postinstall:"node lib/post_install.js"},main:"dist-modules",dependencies:{react:"^0.14.6","react-dom":"^0.14.6"},devDependencies:{"babel-cli":"^6.4.0","babel-core":"^6.4.0","babel-eslint":"^5.0.0-beta6","babel-loader":"^6.2.1","babel-preset-es2015":"^6.3.13","babel-preset-react":"^6.3.13","babel-preset-react-hmre":"^1.0.1","babel-register":"^6.4.3",chai:"^3.4.1","clean-webpack-plugin":"^0.1.6","css-loader":"^0.23.1",eslint:"^1.10.3","eslint-loader":"^1.2.0","eslint-plugin-react":"^3.15.0","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.8.5","gh-pages":"^0.8.0","git-prepush-hook":"^1.0.1","highlight.js":"^9.1.0","html-webpack-plugin":"^1.7.0","isparta-instrumenter-loader":"^1.0.0","json-loader":"^0.5.4",karma:"^0.13.19","karma-chai":"^0.1.0","karma-coverage":"^0.5.3","karma-mocha":"^0.2.1","karma-phantomjs-launcher":"^0.2.3","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.23","karma-webpack":"^1.7.0","markdown-to-react-components":"bebraw/markdown-to-react-components#highlight",mocha:"^2.3.4",phantomjs:"^1.9.19","phantomjs-polyfill":"0.0.1",purecss:"^0.6.0","react-addons-test-utils":"^0.14.6","react-ghfork":"^0.3.2","style-loader":"^0.13.0","sync-exec":"^0.6.2","system-bell-webpack-plugin":"^1.0.0","url-loader":"^0.5.7",webpack:"^1.12.11","webpack-dev-server":"^1.14.1","webpack-merge":"^0.7.3"},repository:{type:"git",url:"https://github.com/survivejs/react-component-boilerplate.git"},homepage:"https://survivejs.github.io/react-component-boilerplate/",bugs:{url:"https://github.com/survivejs/react-component-boilerplate/issues"},keywords:["react","reactjs","boilerplate"],license:"MIT","pre-push":["test","test:lint"]}},172:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=r(16),u=n(l),c=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{onClick:this.easterEgg},"click me")}},{key:"easterEgg",value:function(){alert("easter egg")}}]),t}(u["default"].Component);t["default"]=c}});