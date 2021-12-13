(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8771:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));var o=r=i(i({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};u(n(7294));var a=u(n(4860));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,n){"use strict";var r=n(2553),o=n(2012),i=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=n(7294))&&c.__esModule?c:{default:c},f=n(7161),p=n(1083);var h=[],m=[],y=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!y&&"function"===typeof n.webpack&&!n.suspense){var i=n.webpack();m.push((function(e){var t,n=s(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=n.suspense?function(e,t){return d.default.createElement(n.lazy,u(u({},e),{},{ref:t}))}:function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=f.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return!n.suspense&&o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}(b,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){_(h).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return y=!0,t()};_(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var j=v;t.default=j},4918:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return j}});var r=n(5152),o=n(5697),i=n.n(o),a=n(9008),u=(n(7294),n(5893)),s=n(4155);function l(e){var t=e.data;return(0,u.jsxs)(a.default,{children:[(0,u.jsx)("title",{children:t.title}),(0,u.jsx)("meta",{name:"title",content:t.title}),(0,u.jsx)("meta",{name:"author",content:"Hanzla Tauqeer"}),(0,u.jsx)("meta",{name:"description",content:t.description}),(0,u.jsx)("meta",{name:"keywords",content:t.keywords.join(", ")}),(0,u.jsx)("link",{rel:"canonical",href:t.url}),(0,u.jsx)("meta",{property:"og:type",content:"website"}),(0,u.jsx)("meta",{property:"og:url",content:t.url}),(0,u.jsx)("meta",{property:"og:title",content:t.title}),(0,u.jsx)("meta",{property:"og:description",content:t.description}),(0,u.jsx)("meta",{property:"og:image",content:t.image}),(0,u.jsx)("meta",{property:"og:site_name",content:t.title}),(0,u.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,u.jsx)("meta",{property:"twitter:url",content:t.url}),(0,u.jsx)("meta",{property:"twitter:title",content:t.title}),(0,u.jsx)("meta",{property:"twitter:description",content:t.description}),(0,u.jsx)("meta",{property:"twitter:image",content:t.image}),(0,u.jsx)("meta",{name:"robots",content:"Index"}),(0,u.jsx)("link",{rel:"manifest",href:s.env.NEXT_PUBLIC_BASE_PATH+"/manifest.json"}),(0,u.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:s.env.NEXT_PUBLIC_BASE_PATH+"/favicon.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:s.env.NEXT_PUBLIC_BASE_PATH+"/favicon.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:s.env.NEXT_PUBLIC_BASE_PATH+"/favicon.png"}),(0,u.jsx)("script",{async:!0,src:"https://code.iconify.design/1/1.0.4/iconify.min.js"})]})}l.prototype={data:i().shape({title:i().string.isRequired,description:i().string,image:i().string,url:i().string,keywords:i().arrayOf(i().string)}).isRequired};var c=l,d=n(4155),f=(0,r.default)((function(){return Promise.all([n.e(351),n.e(317),n.e(590)]).then(n.bind(n,1590))}),{loadableGenerated:{webpack:function(){return[1590]},modules:["index.js -> ../components/Navigation"]}}),p=(0,r.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(185)]).then(n.bind(n,3185))}),{loadableGenerated:{webpack:function(){return[3185]},modules:["index.js -> ../containers/Greetings"]}}),h=(0,r.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(317),n.e(546),n.e(688)]).then(n.bind(n,5688))}),{loadableGenerated:{webpack:function(){return[5688]},modules:["index.js -> ../containers/Skills"]}}),m=((0,r.default)((function(){return Promise.all([n.e(296),n.e(351),n.e(338)]).then(n.bind(n,7338))}),{loadableGenerated:{webpack:function(){return[7338]},modules:["index.js -> ../containers/Proficiency"]}}),(0,r.default)((function(){return Promise.all([n.e(351),n.e(51)]).then(n.bind(n,4051))}),{loadableGenerated:{webpack:function(){return[4051]},modules:["index.js -> ../containers/Education"]}})),y=(0,r.default)((function(){return Promise.all([n.e(351),n.e(675),n.e(39),n.e(974)]).then(n.bind(n,3974))}),{loadableGenerated:{webpack:function(){return[3974]},modules:["index.js -> ../containers/Experience"]}}),b=(0,r.default)((function(){return Promise.all([n.e(351),n.e(829)]).then(n.bind(n,4829))}),{loadableGenerated:{webpack:function(){return[4829]},modules:["index.js -> ../containers/Projects"]}}),g=(0,r.default)((function(){return Promise.all([n.e(351),n.e(30)]).then(n.bind(n,3030))}),{loadableGenerated:{webpack:function(){return[3030]},modules:["index.js -> ../containers/Feedbacks"]}}),v=(0,r.default)((function(){return Promise.all([n.e(351),n.e(675),n.e(551)]).then(n.bind(n,9551))}),{loadableGenerated:{webpack:function(){return[9551]},modules:["index.js -> ../components/GithubProfileCard"]}}),_=!0;function j(e){var t=e.githubProfileData;return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.default,{children:(0,u.jsx)("link",{rel:"shortcute icon",href:d.env.NEXT_PUBLIC_BASE_PATH+"/favicon.png"})}),(0,u.jsx)(c,{data:{title:"Yatharth Vyas",description:"Writing code to help people.",image:"https://lh3.googleusercontent.com/ogw/ADea4I7sm8tDWGQ_S5qcD6LLLqIQpj13nLmvc2tDyXeb4A=s192-c-mo",url:"https://yatharthvyas.github.io/",keywords:["Yatharth Vyas","Yatharth","@YatharthVyas","YatharthVyas","Portfolio","Yatharth Vyas Portfolio ","web developer","full stack","full stack web developer","mobile app developer","android developer","flask","nodejs ","expressjs","reactjs ","contextapi","redux","reactnative","google summer of code","gsoc"]}}),(0,u.jsx)(f,{}),(0,u.jsx)(p,{}),(0,u.jsx)(h,{}),(0,u.jsx)(m,{}),(0,u.jsx)(y,{}),(0,u.jsx)(g,{}),(0,u.jsx)(b,{}),(0,u.jsx)(v,{prof:t})]})}j.prototype={githubProfileData:i().object.isRequired}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4918)}])},5152:function(e,t,n){e.exports=n(8771)},9008:function(e,t,n){e.exports=n(639)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,s=[],l=!1,c=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):c=-1,s.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=s.length;t;){for(u=s,s=[];++c<t;)u&&u[c].run();c=-1,t=s.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);