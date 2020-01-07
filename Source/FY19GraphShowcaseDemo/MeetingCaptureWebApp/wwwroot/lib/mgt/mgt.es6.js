var mgt=function(e){"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(e,t,n){var r=function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _toArray(e){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _decorate(e,t,n,r){var o=function _getDecoratorsApi(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(n){t.forEach(function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var i="static"===o?e:n;this.defineClassElement(i,t)}},this)},this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!_hasDecorators(e))return n.push(e);var t=this.decorateElement(e,o);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:n,finishers:r};var i=this.decorateConstructor(n,t);return r.push.apply(r,i.finishers),i.finishers=r,i},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],o=e.decorators,i=o.length-1;i>=0;i--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[i])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);n.push.apply(n,d)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return _toArray(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=_toPropertyKey(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:n,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),n=_optionalCallableProperty(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:n,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=_optionalCallableProperty(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(r)for(var i=0;i<r.length;i++)o=r[i](o);var s=t(function initialize(e){o.initializeInstanceElements(e,a.elements)},n),a=o.decorateClass(function _coalesceClassElements(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},r=0;r<e.length;r++){var o,i=e[r];if("method"===i.kind&&(o=t.find(n)))if(_isDataDescriptor(i.descriptor)||_isDataDescriptor(o.descriptor)){if(_hasDecorators(i)||_hasDecorators(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(_hasDecorators(i)){if(_hasDecorators(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}_coalesceGetterSetter(i,o)}else t.push(i)}return t}(s.d.map(_createElementDescriptor)),e);return o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}function _createElementDescriptor(e){var t,n=_toPropertyKey(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function _coalesceGetterSetter(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _hasDecorators(e){return e.decorators&&e.decorators.length}function _isDataDescriptor(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _optionalCallableProperty(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}const t=new WeakMap,n=e=>(...n)=>{const r=e(...n);return t.set(r,!0),r},r=e=>"function"==typeof e&&t.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,c=new RegExp(`${l}|${d}`),p="$lit$";class Template{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,s=-1,a=0;const{strings:d,values:{length:h}}=e;for(;a<h;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)u(t[e].name,p)&&r++;for(;r-- >0;){const t=d[a],n=m.exec(t)[2],r=n.toLowerCase()+p,o=e.getAttribute(r);e.removeAttribute(r);const i=o.split(c);this.parts.push({type:"attribute",index:s,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const r=e.parentNode,o=t.split(c),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=g();else{const e=m.exec(i);null!==e&&u(e[2],p)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[i]?(r.insertBefore(g(),e),n.push(e)):e.data=o[i],a+=i}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&s!==i||(s++,t.insertBefore(g(),e)),i=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const u=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},h=e=>-1!==e.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class TemplateInstance{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,l=r.nextNode();for(;s<n.length;)if(i=n[s],h(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}const f=` ${l} `;class TemplateResult{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=m.exec(e);t+=null===i?e+(n?f:d):e.substr(0,i.index)+i[1]+i[2]+p+i[3]+l}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const y=e=>null===e||!("object"==typeof e||"function"==typeof e),v=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class AttributeCommitter{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(y(e)||!v(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class AttributePart{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===s||y(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=s,e(this)}this.value!==s&&this.committer.commit()}}class NodePart{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}const e=this.__pendingValue;e!==s&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof TemplateResult?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):v(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof TemplateInstance&&this.value.template===t)this.value.update(e.values);else{const n=new TemplateInstance(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new NodePart(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=s}}class PropertyCommitter extends AttributeCommitter{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class PropertyPart extends AttributePart{}let k=!1;try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class EventPart{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=w(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=s}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const w=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const T=new class DefaultTemplateProcessor{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new PropertyCommitter(e,t.slice(1),n).parts:"@"===o?[new EventPart(e,t.slice(1),r.eventContext)]:"?"===o?[new BooleanAttributePart(e,t.slice(1),n)]:new AttributeCommitter(e,t,n).parts}handleTextExpression(e){return new NodePart(e)}};function templateFactory(e){let t=C.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},C.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return void 0===(n=t.keyString.get(r))&&(n=new Template(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const C=new Map,b=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const _=(e,...t)=>new TemplateResult(e,t,"html",T),S=133;function removeNodesFromTemplate(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,S,null,!1);let i=I(r),s=r[i],a=-1,l=0;const d=[];let c=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,s=r[i=I(r,i)]}d.forEach(e=>e.parentNode.removeChild(e))}const P=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,S,null,!1);for(;n.nextNode();)t++;return t},I=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(h(t))return n}return-1};const A=(e,t)=>`${e}--${t}`;let E=!0;void 0===window.ShadyCSS?E=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const x=e=>t=>{const n=A(t.type,e);let r=C.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},C.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(l);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Template(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o},D=["html","svg"],R=new Set,O=(e,t,n)=>{R.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{D.forEach(t=>{const n=C.get(A(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),removeNodesFromTemplate(e,n)})})})(e);const a=r.content;n?function insertNodeIntoTemplate(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,S,null,!1);let s=I(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=P(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=I(o,s);return}s=I(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),removeNodesFromTemplate(n,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},M=(e,t)=>t!==e&&(t==t||e==e),U={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:M},N=Promise.resolve(!0),H=1,F=4,q=8,$=16,j=32,B="finalized";class UpdatingElement extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=N,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=U){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(B)||e.finalize(),this[B]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=M){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||L,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||L.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|j,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=U){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|q,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~q}}_attributeToProperty(e,t){if(this._updateState&q)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||U;this._updateState=this._updateState|$,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~$}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r._classProperties.get(e)||U;r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&$||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|F;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&j}get _hasRequestedUpdate(){return this._updateState&F}get hasUpdated(){return this._updateState&H}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&H||(this._updateState=this._updateState|H,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~F}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}UpdatingElement[B]=!0;const V=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),z=(e,t,n)=>{t.constructor.createProperty(n,e)};function property(e){return(t,n)=>void 0!==n?z(e,t,n):G(e,t)}const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class CSSResult{constructor(e,t){if(t!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof CSSResult)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new CSSResult(n,Z)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Q=e=>e.flat?e.flat(1/0):function arrayFlat(e,t=[]){for(let n=0,r=e.length;n<r;n++){const r=e[n];Array.isArray(r)?arrayFlat(r,t):t.push(r)}return t}(e);class LitElement extends UpdatingElement{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){Q(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof TemplateResult&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}LitElement.finalized=!0,LitElement.render=((e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=b.has(t),s=E&&11===t.nodeType&&!!t.host,a=s&&!R.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=b.get(t);void 0===r&&(i(t,t.firstChild),b.set(t,r=new NodePart(Object.assign({templateFactory:templateFactory},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:x(r)},n)),a){const e=b.get(l);b.delete(l);const n=e.value instanceof TemplateInstance?e.value.template:void 0;O(r,l,n),i(t,t.firstChild),t.appendChild(l),b.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)});class EventDispatcher{constructor(){_defineProperty(this,"eventHandlers",[])}fire(e){for(const t of this.eventHandlers)t(e)}add(e){this.eventHandlers.push(e)}remove(e){for(let t=0;t<this.eventHandlers.length;t++)this.eventHandlers[t]===e&&(this.eventHandlers.splice(t,1),t--)}}class Providers{static get globalProvider(){return this._globalProvider}static set globalProvider(t){t!==this._globalProvider&&(this._globalProvider&&this._globalProvider.removeStateChangedHandler(this.handleProviderStateChanged),t&&t.onStateChanged(this.handleProviderStateChanged),this._globalProvider=t,this._eventDispatcher.fire(e.ProvidersChangedState.ProviderChanged))}static onProviderUpdated(e){this._eventDispatcher.add(e)}static removeProviderUpdatedListener(e){this._eventDispatcher.remove(e)}static handleProviderStateChanged(){Providers._eventDispatcher.fire(e.ProvidersChangedState.ProviderStateChanged)}}var X,J,Y;_defineProperty(Providers,"_eventDispatcher",new EventDispatcher),_defineProperty(Providers,"_globalProvider",void 0),(X=e.ProvidersChangedState||(e.ProvidersChangedState={}))[X.ProviderChanged=0]="ProviderChanged",X[X.ProviderStateChanged=1]="ProviderStateChanged";class IProvider{get state(){return this._state}constructor(){_defineProperty(this,"graph",void 0),_defineProperty(this,"_state",void 0),_defineProperty(this,"_loginChangedDispatcher",new EventDispatcher),this._state=e.ProviderState.Loading}setState(e){e!==this._state&&(this._state=e,this._loginChangedDispatcher.fire({}))}onStateChanged(e){this._loginChangedDispatcher.add(e)}removeStateChangedHandler(e){this._loginChangedDispatcher.remove(e)}getAccessTokenForScopes(...e){return this.getAccessToken({scopes:e})}}(J=e.LoginType||(e.LoginType={}))[J.Popup=0]="Popup",J[J.Redirect=1]="Redirect",(Y=e.ProviderState||(e.ProviderState={}))[Y.Loading=0]="Loading",Y[Y.SignedOut=1]="SignedOut",Y[Y.SignedIn=2]="SignedIn";const ee=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

:host .header,
mgt-agenda .header {
  margin: var(--agenda-header-margin, 40px 10px 14px 10px);
  font-family: var(--default-font-family);
  font-size: var(--agenda-header-font-size, 24px);
  color: var(--agenda-header-color, #333333); }

:host .agenda > .group:first-child > .header,
mgt-agenda .agenda > .group:first-child > .header {
  margin-top: 0; }

:host .agenda-list,
mgt-agenda .agenda-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: var(--default-font-family);
  font-style: normal;
  font-weight: normal; }

:host .event,
mgt-agenda .event {
  background: var(--event-background, #ffffff);
  border: var(--event-border, solid 2px rgba(0, 0, 0, 0));
  box-shadow: var(--event-box-shadow, 0px 2px 8px rgba(0, 0, 0, 0.092));
  margin: var(--event-margin, 0px 10px 14px 10px);
  padding: var(--event-padding, 0px);
  display: flex; }

:host .narrow .event,
mgt-agenda .narrow .event {
  flex-direction: column; }

:host .event-time-container,
mgt-agenda .event-time-container {
  display: flex;
  flex-direction: column;
  margin: 18px 38px 18px 18px;
  width: 120px; }

:host .narrow .event-time-container,
mgt-agenda .narrow .event-time-container {
  margin: 14px 18px 8px 18px; }

:host .event-time,
mgt-agenda .event-time {
  font-size: var(--event-time-font-size, 12px);
  color: var(--event-time-color, #000000);
  font-weight: 600; }

:host .event-duration,
mgt-agenda .event-duration {
  color: rgba(16, 16, 16, 0.3); }

:host .event-details-container,
mgt-agenda .event-details-container {
  margin: 14px 18px 14px 0px; }

:host .narrow .event-details-container,
mgt-agenda .narrow .event-details-container {
  margin: 0px 18px 14px 18px; }

:host .event-subject,
mgt-agenda .event-subject {
  margin: 0px 18px 0px 0px;
  font-size: var(--event-subject-font-size, 19px);
  color: var(--event-subject-color, #333333); }

:host .event-location-container,
mgt-agenda .event-location-container {
  display: flex;
  margin: 8px 18px 0px 0px; }

:host .event-location,
mgt-agenda .event-location {
  font-size: var(--event-location-font-size, 12px);
  color: var(--event-location-color, #000000);
  margin: 0px 0px 0px 4px; }

:host .event-attendees,
mgt-agenda .event-attendees {
  --list-margin: 8px 0 0 0;
  --avatar-size-s: 20px; }

:host .event-other-container,
mgt-agenda .event-other-container {
  margin: 2px 16px 4px 16px;
  margin-left: auto; }

:host .loading-element,
mgt-agenda .loading-element {
  background: #f2f2f2;
  border-radius: 1px; }

:host .event-time-loading,
mgt-agenda .event-time-loading {
  width: 100px;
  height: 10px; }

:host .event-subject-loading,
mgt-agenda .event-subject-loading {
  width: 263px;
  height: 16px; }

:host .event-location-icon-loading,
mgt-agenda .event-location-icon-loading {
  width: 14px;
  height: 14px; }

:host .event-location-loading,
mgt-agenda .event-location-loading {
  width: 90px;
  height: 10px;
  margin: 2px 0px 0px 4px; }

:host .event-attendee-loading,
mgt-agenda .event-attendee-loading {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 0 2px 0 0; }

`],te=document.createElement("style");te.type="text/css",te.appendChild(document.createTextNode("\n@font-face {\n    font-family: 'FabricMDL2Icons';\n    src: url('https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons-2.68.woff2') format('woff2'),\n    url(https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons-2.68.woff) format(\"woff\"),\n    url(https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons-2.68.ttf) format(\"truetype\");;\n}\n")),document.head.appendChild(te);var ne=function(e,t){return(ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function __extends(e,t){function __(){this.constructor=e}ne(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var re,oe=function(){return(oe=Object.assign||function __assign(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(o,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})}!function(e){e.GET="GET",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(re||(re={}));class BatchRequestContent{constructor(e){if(this.requests=new Map,void 0!==e){const t=BatchRequestContent.requestLimit;if(e.length>t){const e=new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${t}`);throw e.name="Limit Exceeded Error",e}for(const t of e)this.addRequest(t)}}static validateDependencies(e){if(0===e.size){const e=new Error("Empty requests map, Please provide at least one request.");throw e.name="Empty Requests Error",e}return(e=>{const t=e.entries();let n=t.next();for(;!n.done;){const e=n.value[1];if(void 0!==e.dependsOn&&e.dependsOn.length>0)return!1;n=t.next()}return!0})(e)||(e=>{const t=e.entries();let n=t.next();const r=n.value[1];if(void 0!==r.dependsOn&&r.dependsOn.length>0)return!1;let o=n;for(n=t.next();!n.done;){const e=n.value[1];if(void 0===e.dependsOn||1!==e.dependsOn.length||e.dependsOn[0]!==o.value[1].id)return!1;o=n,n=t.next()}return!0})(e)||(e=>{const t=e.entries();let n=t.next();const r=n.value[1];let o;if(void 0===r.dependsOn||0===r.dependsOn.length)o=r.id;else{if(1!==r.dependsOn.length)return!1;{const t=r.dependsOn[0];if(t===r.id||!e.has(t))return!1;o=t}}for(n=t.next();!n.done;){const e=n.value[1];if((void 0===e.dependsOn||0===e.dependsOn.length)&&o!==e.id)return!1;if(void 0!==e.dependsOn&&0!==e.dependsOn.length){if(1===e.dependsOn.length&&(e.id===o||e.dependsOn[0]!==o))return!1;if(e.dependsOn.length>1)return!1}n=t.next()}return!0})(e)}static getRequestData(e){return __awaiter(this,void 0,void 0,function*(){const t={url:""},n=new RegExp("^https?://");t.url=n.test(e.url)?"/"+e.url.split(/.*?\/\/.*?\//)[1]:e.url,t.method=e.method;const r={};return e.headers.forEach((e,t)=>{r[t]=e}),Object.keys(r).length&&(t.headers=r),e.method!==re.PATCH&&e.method!==re.POST&&e.method!==re.PUT||(t.body=yield BatchRequestContent.getRequestBody(e)),t})}static getRequestBody(e){return __awaiter(this,void 0,void 0,function*(){let t,n=!1;try{const r=e.clone();t=yield r.json(),n=!0}catch(e){}if(!n)try{if("undefined"!=typeof Blob){const n=yield e.blob(),r=new FileReader;t=yield new Promise(e=>{r.addEventListener("load",()=>{const t=r.result,n=new RegExp("^s*data:(.+?/.+?(;.+?=.+?)*)?(;base64)?,(.*)s*$").exec(t);e(n[4])},!1),r.readAsDataURL(n)})}else if("undefined"!=typeof Buffer){t=(yield e.buffer()).toString("base64")}n=!0}catch(e){}return t})}addRequest(e){const t=BatchRequestContent.requestLimit;if(""===e.id){const e=new Error("Id for a request is empty, Please provide an unique id");throw e.name="Empty Id For Request",e}if(this.requests.size===t){const e=new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${t}`);throw e.name="Limit Exceeded Error",e}if(this.requests.has(e.id)){const t=new Error(`Adding request with duplicate id ${e.id}, Make the id of the requests unique`);throw t.name="Duplicate RequestId Error",t}return this.requests.set(e.id,e),e.id}removeRequest(e){const t=this.requests.delete(e),n=this.requests.entries();let r=n.next();for(;!r.done;){const t=r.value[1].dependsOn;if(void 0!==t){const n=t.indexOf(e);-1!==n&&t.splice(n,1),0===t.length&&delete r.value[1].dependsOn}r=n.next()}return t}getContent(){return __awaiter(this,void 0,void 0,function*(){const e=[],t={requests:e},n=this.requests.entries();let r=n.next();if(r.done){const e=new Error("No requests added yet, Please add at least one request.");throw e.name="Empty Payload",e}if(!BatchRequestContent.validateDependencies(this.requests)){const e=new Error("Invalid dependency found, Dependency should be:\n1. Parallel - no individual request states a dependency in the dependsOn property.\n2. Serial - all individual requests depend on the previous individual request.\n3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.");throw e.name="Invalid Dependency",e}for(;!r.done;){const t=r.value[1],o=yield BatchRequestContent.getRequestData(t.request);if(void 0!==o.body&&(void 0===o.headers||void 0===o.headers["content-type"])){const e=new Error(`Content-type header is not mentioned for request #${t.id}, For request having body, Content-type header should be mentioned`);throw e.name="Invalid Content-type header",e}o.id=t.id,void 0!==t.dependsOn&&t.dependsOn.length>0&&(o.dependsOn=t.dependsOn),e.push(o),r=n.next()}return t.requests=e,t})}addDependency(e,t){if(!this.requests.has(e)){const t=new Error(`Dependent ${e} does not exists, Please check the id`);throw t.name="Invalid Dependent",t}if(void 0!==t&&!this.requests.has(t)){const e=new Error(`Dependency ${t} does not exists, Please check the id`);throw e.name="Invalid Dependency",e}if(void 0!==t){const n=this.requests.get(e);if(void 0===n.dependsOn&&(n.dependsOn=[]),-1!==n.dependsOn.indexOf(t)){const n=new Error(`Dependency ${t} is already added for the request ${e}`);throw n.name="Duplicate Dependency",n}n.dependsOn.push(t)}else{const n=this.requests.entries();let r,o=n.next();for(;!o.done&&o.value[1].id!==e;)r=o,o=n.next();if(void 0===r){const e=new Error(`Can't add dependency ${t}, There is only a dependent request in the batch`);throw e.name="Invalid Dependency Addition",e}{const t=r.value[0];if(void 0===o.value[1].dependsOn&&(o.value[1].dependsOn=[]),-1!==o.value[1].dependsOn.indexOf(t)){const n=new Error(`Dependency ${t} is already added for the request ${e}`);throw n.name="Duplicate Dependency",n}o.value[1].dependsOn.push(t)}}}removeDependency(e,t){const n=this.requests.get(e);if(void 0===n||void 0===n.dependsOn||0===n.dependsOn.length)return!1;if(void 0!==t){const e=n.dependsOn.indexOf(t);return-1!==e&&(n.dependsOn.splice(e,1),!0)}return delete n.dependsOn,!0}}BatchRequestContent.requestLimit=20;class MiddlewareControl{constructor(e=[]){this.middlewareOptions=new Map;for(const t of e){const e=t.constructor;this.middlewareOptions.set(e,t)}}getMiddlewareOptions(e){return this.middlewareOptions.get(e)}setMiddlewareOptions(e,t){this.middlewareOptions.set(e,t)}}const ie=()=>{let e="";for(let t=0;t<32;t++)8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=Math.floor(16*Math.random()).toString(16);return e},se=(e,t,n)=>{let r=null;if("undefined"!=typeof Request&&e instanceof Request)r=e.headers.get(n);else if(void 0!==t&&void 0!==t.headers)if("undefined"!=typeof Headers&&t.headers instanceof Headers)r=t.headers.get(n);else if(t.headers instanceof Array){const e=t.headers;for(let t=0,o=e.length;t<o;t++)if(e[t][0]===n){r=e[t][1];break}}else void 0!==t.headers[n]&&(r=t.headers[n]);return r},ae=(e,t,n,r)=>{if("undefined"!=typeof Request&&e instanceof Request)e.headers.set(n,r);else if(void 0!==t)if(void 0===t.headers)t.headers=new Headers({[n]:r});else if("undefined"!=typeof Headers&&t.headers instanceof Headers)t.headers.set(n,r);else if(t.headers instanceof Array){let e=0;const o=t.headers.length;for(;e<o;e++){const o=t.headers[e];if(o[0]===n){o[1]=r;break}}e===o&&t.headers.push([n,r])}else Object.assign(t.headers,{[n]:r})},le=(e,t,n,r)=>{"undefined"!=typeof Request&&e instanceof Request?e.headers.append(n,r):void 0!==t&&(void 0===t.headers?t.headers=new Headers({[n]:r}):"undefined"!=typeof Headers&&t.headers instanceof Headers?t.headers.append(n,r):t.headers instanceof Array?t.headers.push([n,r]):void 0===t.headers?t.headers={[n]:r}:void 0===t.headers[n]?t.headers[n]=r:t.headers[n]+=`, ${r}`)},de=(e,t)=>__awaiter(void 0,void 0,void 0,function*(){const n=t.headers.get("Content-Type")?yield t.blob():yield Promise.resolve(void 0),{method:r,headers:o,referrer:i,referrerPolicy:s,mode:a,credentials:l,cache:d,redirect:c,integrity:p,keepalive:u,signal:h}=t;return new Request(e,{method:r,headers:o,body:n,referrer:i,referrerPolicy:s,mode:a,credentials:l,cache:d,redirect:c,integrity:p,keepalive:u,signal:h})});class AuthenticationHandlerOptions{constructor(e,t){this.authenticationProvider=e,this.authenticationProviderOptions=t}}var ce;!function(e){e[e.NONE=0]="NONE",e[e.REDIRECT_HANDLER_ENABLED=1]="REDIRECT_HANDLER_ENABLED",e[e.RETRY_HANDLER_ENABLED=2]="RETRY_HANDLER_ENABLED",e[e.AUTHENTICATION_HANDLER_ENABLED=4]="AUTHENTICATION_HANDLER_ENABLED"}(ce||(ce={}));class TelemetryHandlerOptions{constructor(){this.featureUsage=ce.NONE}static updateFeatureUsageFlag(e,t){let n;e.middlewareControl instanceof MiddlewareControl?n=e.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions):e.middlewareControl=new MiddlewareControl,void 0===n&&(n=new TelemetryHandlerOptions,e.middlewareControl.setMiddlewareOptions(TelemetryHandlerOptions,n)),n.setFeatureUsage(t)}setFeatureUsage(e){this.featureUsage=this.featureUsage|e}getFeatureUsage(){return this.featureUsage.toString(16)}}class AuthenticationHandler{constructor(e){this.authenticationProvider=e}execute(e){return __awaiter(this,void 0,void 0,function*(){try{let t,n,r;e.middlewareControl instanceof MiddlewareControl&&(t=e.middlewareControl.getMiddlewareOptions(AuthenticationHandlerOptions)),void 0!==t&&(n=t.authenticationProvider,r=t.authenticationProviderOptions),void 0===n&&(n=this.authenticationProvider);const o=`Bearer ${yield n.getAccessToken(r)}`;return le(e.request,e.options,AuthenticationHandler.AUTHORIZATION_HEADER,o),TelemetryHandlerOptions.updateFeatureUsageFlag(e,ce.AUTHENTICATION_HANDLER_ENABLED),yield this.nextMiddleware.execute(e)}catch(e){throw e}})}setNext(e){this.nextMiddleware=e}}AuthenticationHandler.AUTHORIZATION_HEADER="Authorization";class HTTPMessageHandler{execute(e){return __awaiter(this,void 0,void 0,function*(){try{return void(e.response=yield fetch(e.request,e.options))}catch(e){throw e}})}}class RetryHandlerOptions{constructor(e=RetryHandlerOptions.DEFAULT_DELAY,t=RetryHandlerOptions.DEFAULT_MAX_RETRIES,n=RetryHandlerOptions.DEFAULT_SHOULD_RETRY){if(e>RetryHandlerOptions.MAX_DELAY&&t>RetryHandlerOptions.MAX_MAX_RETRIES){const e=new Error(`Delay and MaxRetries should not be more than ${RetryHandlerOptions.MAX_DELAY} and ${RetryHandlerOptions.MAX_MAX_RETRIES}`);throw e.name="MaxLimitExceeded",e}if(e>RetryHandlerOptions.MAX_DELAY){const e=new Error(`Delay should not be more than ${RetryHandlerOptions.MAX_DELAY}`);throw e.name="MaxLimitExceeded",e}if(t>RetryHandlerOptions.MAX_MAX_RETRIES){const e=new Error(`MaxRetries should not be more than ${RetryHandlerOptions.MAX_MAX_RETRIES}`);throw e.name="MaxLimitExceeded",e}if(e<0&&t<0){const e=new Error("Delay and MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}if(e<0){const e=new Error("Delay should not be negative");throw e.name="MinExpectationNotMet",e}if(t<0){const e=new Error("MaxRetries should not be negative");throw e.name="MinExpectationNotMet",e}this.delay=Math.min(e,RetryHandlerOptions.MAX_DELAY),this.maxRetries=Math.min(t,RetryHandlerOptions.MAX_MAX_RETRIES),this.shouldRetry=n}getMaxDelay(){return RetryHandlerOptions.MAX_DELAY}}RetryHandlerOptions.DEFAULT_DELAY=3,RetryHandlerOptions.DEFAULT_MAX_RETRIES=3,RetryHandlerOptions.MAX_DELAY=180,RetryHandlerOptions.MAX_MAX_RETRIES=10,RetryHandlerOptions.DEFAULT_SHOULD_RETRY=(()=>!0);class RetryHandler{constructor(e=new RetryHandlerOptions){this.options=e}isRetry(e){return-1!==RetryHandler.RETRY_STATUS_CODES.indexOf(e.status)}isBuffered(e,t){const n="string"==typeof e?t.method:e.method;if(n===re.PUT||n===re.PATCH||n===re.POST){if("application/octet-stream"===se(e,t,"Content-Type"))return!1}return!0}getDelay(e,t,n){const r=()=>Number(Math.random().toFixed(3)),o=void 0!==e.headers?e.headers.get(RetryHandler.RETRY_AFTER_HEADER):null;let i;return i=null!==o?Number.isNaN(Number(o))?Math.round((new Date(o).getTime()-Date.now())/1e3):Number(o):t>=2?this.getExponentialBackOffTime(t)+n+r():n+r(),Math.min(i,this.options.getMaxDelay()+r())}getExponentialBackOffTime(e){return Math.round(.5*(Math.pow(2,e)-1))}sleep(e){return __awaiter(this,void 0,void 0,function*(){const t=1e3*e;return new Promise(e=>setTimeout(e,t))})}getOptions(e){let t;return e.middlewareControl instanceof MiddlewareControl&&(t=e.middlewareControl.getMiddlewareOptions(this.options.constructor)),void 0===t&&(t=Object.assign(new RetryHandlerOptions,this.options)),t}executeWithRetry(e,t,n){return __awaiter(this,void 0,void 0,function*(){try{if(yield this.nextMiddleware.execute(e),t<n.maxRetries&&this.isRetry(e.response)&&this.isBuffered(e.request,e.options)&&n.shouldRetry(n.delay,t,e.request,e.options,e.response)){++t,ae(e.request,e.options,RetryHandler.RETRY_ATTEMPT_HEADER,t.toString());const r=this.getDelay(e.response,t,n.delay);return yield this.sleep(r),yield this.executeWithRetry(e,t,n)}return}catch(e){throw e}})}execute(e){return __awaiter(this,void 0,void 0,function*(){try{const t=0,n=this.getOptions(e);return TelemetryHandlerOptions.updateFeatureUsageFlag(e,ce.RETRY_HANDLER_ENABLED),yield this.executeWithRetry(e,t,n)}catch(e){throw e}})}setNext(e){this.nextMiddleware=e}}RetryHandler.RETRY_STATUS_CODES=[429,503,504],RetryHandler.RETRY_ATTEMPT_HEADER="Retry-Attempt",RetryHandler.RETRY_AFTER_HEADER="Retry-After";class RedirectHandlerOptions{constructor(e=RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS,t=RedirectHandlerOptions.DEFAULT_SHOULD_RETRY){if(e>RedirectHandlerOptions.MAX_MAX_REDIRECTS){const e=new Error(`MaxRedirects should not be more than ${RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);throw e.name="MaxLimitExceeded",e}if(e<0){const e=new Error("MaxRedirects should not be negative");throw e.name="MinExpectationNotMet",e}this.maxRedirects=e,this.shouldRedirect=t}}RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS=5,RedirectHandlerOptions.MAX_MAX_REDIRECTS=20,RedirectHandlerOptions.DEFAULT_SHOULD_RETRY=(()=>!0);class RedirectHandler{constructor(e=new RedirectHandlerOptions){this.options=e}isRedirect(e){return-1!==RedirectHandler.REDIRECT_STATUS_CODES.indexOf(e.status)}hasLocationHeader(e){return e.headers.has(RedirectHandler.LOCATION_HEADER)}getLocationHeader(e){return e.headers.get(RedirectHandler.LOCATION_HEADER)}isRelativeURL(e){return-1===e.indexOf("://")}shouldDropAuthorizationHeader(e,t){const n=/^[A-Za-z].+?:\/\/.+?(?=\/|$)/,r=n.exec(e);let o,i;null!==r&&(o=r[0]);const s=n.exec(t);return null!==s&&(i=s[0]),void 0!==o&&void 0!==i&&o!==i}updateRequestUrl(e,t){return __awaiter(this,void 0,void 0,function*(){t.request="string"==typeof t.request?e:yield de(e,t.request)})}getOptions(e){let t;return e.middlewareControl instanceof MiddlewareControl&&(t=e.middlewareControl.getMiddlewareOptions(RedirectHandlerOptions)),void 0===t&&(t=Object.assign(new RedirectHandlerOptions,this.options)),t}executeWithRedirect(e,t,n){return __awaiter(this,void 0,void 0,function*(){try{yield this.nextMiddleware.execute(e);const r=e.response;if(!(t<n.maxRedirects&&this.isRedirect(r)&&this.hasLocationHeader(r)&&n.shouldRedirect(r)))return;if(++t,r.status===RedirectHandler.STATUS_CODE_SEE_OTHER)e.options.method=re.GET,delete e.options.body;else{const t=this.getLocationHeader(r);!this.isRelativeURL(t)&&this.shouldDropAuthorizationHeader(r.url,t)&&ae(e.request,e.options,RedirectHandler.AUTHORIZATION_HEADER,void 0),yield this.updateRequestUrl(t,e)}yield this.executeWithRedirect(e,t,n)}catch(e){throw e}})}execute(e){return __awaiter(this,void 0,void 0,function*(){try{const t=0,n=this.getOptions(e);return e.options.redirect=RedirectHandler.MANUAL_REDIRECT,TelemetryHandlerOptions.updateFeatureUsageFlag(e,ce.REDIRECT_HANDLER_ENABLED),yield this.executeWithRedirect(e,t,n)}catch(e){throw e}})}setNext(e){this.nextMiddleware=e}}RedirectHandler.REDIRECT_STATUS_CODES=[301,302,303,307,308],RedirectHandler.STATUS_CODE_SEE_OTHER=303,RedirectHandler.LOCATION_HEADER="Location",RedirectHandler.AUTHORIZATION_HEADER="Authorization",RedirectHandler.MANUAL_REDIRECT="manual";const pe="2.0.0";class TelemetryHandler{execute(e){return __awaiter(this,void 0,void 0,function*(){try{let t=se(e.request,e.options,TelemetryHandler.CLIENT_REQUEST_ID_HEADER);null===t&&(t=ie(),ae(e.request,e.options,TelemetryHandler.CLIENT_REQUEST_ID_HEADER,t));let n,r=`${TelemetryHandler.PRODUCT_NAME}/${pe}`;if(e.middlewareControl instanceof MiddlewareControl&&(n=e.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions)),void 0!==n){const e=n.getFeatureUsage();r+=` (${TelemetryHandler.FEATURE_USAGE_STRING}=${e})`}return le(e.request,e.options,TelemetryHandler.SDK_VERSION_HEADER,r),yield this.nextMiddleware.execute(e)}catch(e){throw e}})}setNext(e){this.nextMiddleware=e}}TelemetryHandler.CLIENT_REQUEST_ID_HEADER="client-request-id",TelemetryHandler.SDK_VERSION_HEADER="SdkVersion",TelemetryHandler.PRODUCT_NAME="graph-js",TelemetryHandler.FEATURE_USAGE_STRING="featureUsage";const ue="v1.0",he="https://graph.microsoft.com/";class CustomAuthenticationProvider{constructor(e){this.provider=e}getAccessToken(){return __awaiter(this,void 0,void 0,function*(){return new Promise((e,t)=>{this.provider((n,r)=>{r?e(r):t(n)})})})}}class GraphError{constructor(e=-1){this.statusCode=e,this.code=null,this.message=null,this.requestId=null,this.date=new Date,this.body=null}}class GraphErrorHandler{static constructError(e,t){const n=new GraphError(t);return void 0!==e.name&&(n.code=e.name),n.body=e.toString(),n.message=e.message,n.date=new Date,n}static constructErrorFromResponse(e,t){e=e.error;const n=new GraphError(t);n.code=e.code,n.message=e.message,void 0!==e.innerError&&(n.requestId=e.innerError["request-id"],n.date=new Date(e.innerError.date));try{n.body=JSON.stringify(e)}catch(e){}return n}static getError(e=null,t=-1,n){return __awaiter(this,void 0,void 0,function*(){let r;if(r=e&&e.error?GraphErrorHandler.constructErrorFromResponse(e,t):"undefined"!=typeof Error&&e instanceof Error?GraphErrorHandler.constructError(e,t):new GraphError(t),"function"!=typeof n)return r;n(r,null)})}}const ge=["$select","$expand","$orderby","$filter","$top","$skip","$skipToken","$count"],me=e=>{const t=e=>e.replace(/\/+$/,""),n=e=>e.replace(/^\/+/,"");return Array.prototype.slice.call(e).reduce((e,r)=>[t(e),n(r)].join("/"))},fe=e=>{const t=e.constructor.name;if("Buffer"===t||"Blob"===t||"File"===t||"FormData"===t||"string"==typeof e)return e;if("ArrayBuffer"===t)e=Buffer.from(e);else if("Int8Array"===t||"Int16Array"===t||"Int32Array"===t||"Uint8Array"===t||"Uint16Array"===t||"Uint32Array"===t||"Uint8ClampedArray"===t||"Float32Array"===t||"Float64Array"===t||"DataView"===t)e=Buffer.from(e.buffer);else try{e=JSON.stringify(e)}catch(e){throw new Error("Unable to stringify the content")}return e};var ye,ve,ke,we;!function(e){e.ARRAYBUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.RAW="raw",e.STREAM="stream",e.TEXT="text"}(ye||(ye={})),function(e){e.TEXT_HTML="text/html",e.TEXT_XML="text/xml",e.APPLICATION_XML="application/xml",e.APPLICATION_XHTML="application/xhtml+xml"}(ve||(ve={})),function(e){e.TEXT_PLAIN="text/plain",e.APPLICATION_JSON="application/json"}(ke||(ke={})),function(e){e.DOCUMENT="^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$",e.IMAGE="^image\\/.+"}(we||(we={}));class GraphResponseHandler{static parseDocumentResponse(e,t){try{return"undefined"!=typeof DOMParser?new Promise((n,r)=>{e.text().then(e=>{try{const o=(new DOMParser).parseFromString(e,t);n(o)}catch(e){r(e)}})}):Promise.resolve(e.body)}catch(e){throw e}}static convertResponse(e,t){return __awaiter(this,void 0,void 0,function*(){if(204===e.status)return Promise.resolve();let n;try{switch(t){case ye.ARRAYBUFFER:n=yield e.arrayBuffer();break;case ye.BLOB:n=yield e.blob();break;case ye.DOCUMENT:n=yield GraphResponseHandler.parseDocumentResponse(e,ve.TEXT_XML);break;case ye.JSON:n=yield e.json();break;case ye.STREAM:n=yield Promise.resolve(e.body);break;case ye.TEXT:n=yield e.text();break;default:const r=e.headers.get("Content-type");if(null!==r){const t=r.split(";")[0];n=new RegExp(we.DOCUMENT).test(t)?yield GraphResponseHandler.parseDocumentResponse(e,t):new RegExp(we.IMAGE).test(t)?e.blob():t===ke.TEXT_PLAIN?yield e.text():t===ke.APPLICATION_JSON?yield e.json():Promise.resolve(e.body)}else n=Promise.resolve(e.body)}}catch(e){throw e}return n})}static getResponse(e,t,n){return __awaiter(this,void 0,void 0,function*(){try{if(t===ye.RAW)return Promise.resolve(e);{const r=yield GraphResponseHandler.convertResponse(e,t);if(!e.ok)throw r;if("function"!=typeof n)return r;n(null,r)}}catch(e){throw e}})}}class GraphRequest{constructor(e,t,n){this.parsePath=(e=>{if(-1!==e.indexOf("https://")){const t=(e=e.replace("https://","")).indexOf("/");-1!==t&&(this.urlComponents.host="https://"+e.substring(0,t),e=e.substring(t+1,e.length));const n=e.indexOf("/");-1!==n&&(this.urlComponents.version=e.substring(0,n),e=e.substring(n+1,e.length))}"/"===e.charAt(0)&&(e=e.substr(1));const t=e.indexOf("?");if(-1===t)this.urlComponents.path=e;else{this.urlComponents.path=e.substr(0,t);const n=e.substring(t+1,e.length).split("&");for(const e of n){const t=e.split("="),n=t[0],r=t[1];-1!==ge.indexOf(n)?this.urlComponents.oDataQueryParams[n]=r:this.urlComponents.otherURLQueryParams[n]=r}}}),this.httpClient=e,this.config=t,this.urlComponents={host:this.config.baseUrl,version:this.config.defaultVersion,oDataQueryParams:{},otherURLQueryParams:{}},this._headers={},this._options={},this._middlewareOptions=[],this.parsePath(n)}addCsvQueryParameter(e,t,n){this.urlComponents.oDataQueryParams[e]=this.urlComponents.oDataQueryParams[e]?this.urlComponents.oDataQueryParams[e]+",":"";let r=[];n.length>1&&"string"==typeof t?r=Array.prototype.slice.call(n):"string"==typeof t?r.push(t):r=r.concat(t),this.urlComponents.oDataQueryParams[e]+=r.join(",")}buildFullUrl(){const e=me([this.urlComponents.host,this.urlComponents.version,this.urlComponents.path])+this.createQueryString();return this.config.debugLogging&&console.log(e),e}createQueryString(){const e=this.urlComponents,t=[];if(0!==Object.keys(e.oDataQueryParams).length)for(const n in e.oDataQueryParams)e.oDataQueryParams.hasOwnProperty(n)&&t.push(n+"="+e.oDataQueryParams[n]);if(0!==Object.keys(e.otherURLQueryParams).length)for(const n in e.otherURLQueryParams)e.otherURLQueryParams.hasOwnProperty(n)&&t.push(n+"="+e.otherURLQueryParams[n]);return t.length>0?"?"+t.join("&"):""}updateRequestOptions(e){const t=Object.assign({},e.headers);if(void 0!==this.config.fetchOptions){const t=Object.assign({},this.config.fetchOptions);Object.assign(e,t),void 0!==typeof this.config.fetchOptions.headers&&(e.headers=Object.assign({},this.config.fetchOptions.headers))}Object.assign(e,this._options),void 0!==e.headers&&Object.assign(t,e.headers),Object.assign(t,this._headers),e.headers=t}send(e,t,n){return __awaiter(this,void 0,void 0,function*(){let r;const o=new MiddlewareControl(this._middlewareOptions);this.updateRequestOptions(t);try{return r=(yield this.httpClient.sendRequest({request:e,options:t,middlewareControl:o})).response,yield GraphResponseHandler.getResponse(r,this._responseType,n)}catch(e){let t;throw void 0!==r&&(t=r.status),yield GraphErrorHandler.getError(e,t,n)}})}header(e,t){return this._headers[e]=t,this}headers(e){for(const t in e)e.hasOwnProperty(t)&&(this._headers[t]=e[t]);return this}option(e,t){return this._options[e]=t,this}options(e){for(const t in e)e.hasOwnProperty(t)&&(this._options[t]=e[t]);return this}middlewareOptions(e){return this._middlewareOptions=e,this}version(e){return this.urlComponents.version=e,this}responseType(e){return this._responseType=e,this}select(e){return this.addCsvQueryParameter("$select",e,arguments),this}expand(e){return this.addCsvQueryParameter("$expand",e,arguments),this}orderby(e){return this.addCsvQueryParameter("$orderby",e,arguments),this}filter(e){return this.urlComponents.oDataQueryParams.$filter=e,this}search(e){return this.urlComponents.oDataQueryParams.$search=e,this}top(e){return this.urlComponents.oDataQueryParams.$top=e,this}skip(e){return this.urlComponents.oDataQueryParams.$skip=e,this}skipToken(e){return this.urlComponents.oDataQueryParams.$skipToken=e,this}count(e){return this.urlComponents.oDataQueryParams.$count=e.toString(),this}query(e){const t=this.urlComponents.otherURLQueryParams;if("string"==typeof e){const n=e.split("="),r=n[0],o=n[1];t[r]=o}else for(const n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return this}get(e){return __awaiter(this,void 0,void 0,function*(){const t=this.buildFullUrl(),n={method:re.GET};try{return yield this.send(t,n,e)}catch(e){throw e}})}post(e,t){return __awaiter(this,void 0,void 0,function*(){const n=this.buildFullUrl(),r={method:re.POST,body:fe(e),headers:"undefined"!=typeof FormData&&e instanceof FormData?{}:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}})}create(e,t){return __awaiter(this,void 0,void 0,function*(){try{return yield this.post(e,t)}catch(e){throw e}})}put(e,t){return __awaiter(this,void 0,void 0,function*(){const n=this.buildFullUrl(),r={method:re.PUT,body:fe(e),headers:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}})}patch(e,t){return __awaiter(this,void 0,void 0,function*(){const n=this.buildFullUrl(),r={method:re.PATCH,body:fe(e),headers:{"Content-Type":"application/json"}};try{return yield this.send(n,r,t)}catch(e){throw e}})}update(e,t){return __awaiter(this,void 0,void 0,function*(){try{return yield this.patch(e,t)}catch(e){throw e}})}delete(e){return __awaiter(this,void 0,void 0,function*(){const t=this.buildFullUrl(),n={method:re.DELETE};try{return yield this.send(t,n,e)}catch(e){throw e}})}del(e){return __awaiter(this,void 0,void 0,function*(){try{return yield this.delete(e)}catch(e){throw e}})}getStream(e){return __awaiter(this,void 0,void 0,function*(){const t=this.buildFullUrl(),n={method:re.GET};this.responseType(ye.STREAM);try{return yield this.send(t,n,e)}catch(e){throw e}})}putStream(e,t){return __awaiter(this,void 0,void 0,function*(){const n=this.buildFullUrl(),r={method:re.PUT,headers:{"Content-Type":"application/octet-stream"},body:e};try{return yield this.send(n,r,t)}catch(e){throw e}})}}class HTTPClient{constructor(e){this.middleware=e}sendRequest(e){return __awaiter(this,void 0,void 0,function*(){try{if("string"==typeof e.request&&void 0===e.options){const e=new Error;throw e.name="InvalidRequestOptions",e.message="Unable to execute the middleware, Please provide valid options for a request",e}return yield this.middleware.execute(e),e}catch(e){throw e}})}}const Te=()=>new Function("try {return this === global;}catch(e){return false;}")();class HTTPClientFactory{static createWithAuthenticationProvider(e){const t=new AuthenticationHandler(e),n=new RetryHandler(new RetryHandlerOptions),r=new TelemetryHandler,o=new HTTPMessageHandler;if(t.setNext(n),Te()){const e=new RedirectHandler(new RedirectHandlerOptions);n.setNext(e),e.setNext(r)}else n.setNext(r);return r.setNext(o),HTTPClientFactory.createWithMiddleware(t)}static createWithMiddleware(e){return new HTTPClient(e)}}const Ce=()=>{if("undefined"==typeof Promise&&"undefined"==typeof fetch){const e=new Error("Library cannot function without Promise and fetch. So, please provide polyfill for them.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof Promise){const e=new Error("Library cannot function without Promise. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}if("undefined"==typeof fetch){const e=new Error("Library cannot function without fetch. So, please provide polyfill for it.");throw e.name="PolyFillNotAvailable",e}return!0};class Client{constructor(e){this.config={baseUrl:he,debugLogging:!1,defaultVersion:ue};try{Ce()}catch(e){throw e}for(const t in e)e.hasOwnProperty(t)&&(this.config[t]=e[t]);let t;if(void 0!==e.authProvider&&void 0!==e.middleware){const e=new Error;throw e.name="AmbiguityInInitialization",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both",e}if(void 0!==e.authProvider)t=HTTPClientFactory.createWithAuthenticationProvider(e.authProvider);else{if(void 0===e.middleware){const e=new Error;throw e.name="InvalidMiddlewareChain",e.message="Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain",e}t=new HTTPClient(e.middleware)}this.httpClient=t}static init(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]="authProvider"===n?new CustomAuthenticationProvider(e[n]):e[n]);return Client.initWithMiddleware(t)}static initWithMiddleware(e){try{return new Client(e)}catch(e){throw e}}api(e){return new GraphRequest(this.httpClient,this.config,e)}}function getEmailFromGraphEntity(e){const t=e,n=e,r=e;return n.mail?n.mail:t.scoredEmailAddresses&&t.scoredEmailAddresses.length?t.scoredEmailAddresses[0].address:r.emailAddresses&&r.emailAddresses.length?r.emailAddresses[0].address:null}function prepScopes(...e){return[new AuthenticationHandlerOptions(void 0,{scopes:e})]}function getMonthString(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Month"}}function equals(e,t){return function equalsInternal(e,t,n){const r=Object.prototype.toString.call(e);const o=Object.prototype.toString.call(t);if(r===o&&"[object Object]"===r&&!n.has(e)){n.add(e);for(const r in e)if(!equalsInternal(e[r],t[r],n))return!1;for(const n in t)if(!e.hasOwnProperty(n))return!1;return!0}if(r===o&&"[object Array]"===r&&!n.has(e)){if(n.add(e),e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!equalsInternal(e[r],t[r],n))return!1;return!0}return e===t}(e,t,new Set)}const be=new WeakMap,_e=n(e=>t=>{if(!(t instanceof AttributePart)||t instanceof PropertyPart||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=t,{element:r}=n;be.has(t)||(r.className=n.strings.join(" "));const{classList:o}=r,i=be.get(t);for(const t in i)t in e||o.remove(t);for(const t in e){const n=e[t];if(!i||n!==i[t]){o[n?"add":"remove"](t)}}be.set(t,e)}),Se=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
.root {
  position: relative; }

.root .flyout {
  display: none;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.1s; }

.root .flyout.visible {
  display: inline-block;
  opacity: 1; }
  .root .flyout.visible.openLeft {
    right: 0; }

`];let Pe;_decorate([V("mgt-flyout")],function(e,t){class MgtFlyout extends t{constructor(...t){super(...t),e(this)}}return{F:MgtFlyout,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return Se}},{kind:"field",decorators:[property({attribute:"isOpen",type:Boolean})],key:"isOpen",value:()=>!1},{kind:"field",key:"renderedOnce",value:()=>!1},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this.addEventListener("updated",e=>{this.updateFlyout()})}},{kind:"method",key:"updated",value:function updated(e){_get(_getPrototypeOf(MgtFlyout.prototype),"updated",this).call(this,e),this.updateFlyout()}},{kind:"method",key:"render",value:function render(){return _`
      <div class="root">
        <div class="anchor">
          <slot></slot>
        </div>
        ${this.renderFlyout()}
      </div>
    `}},{kind:"method",key:"renderFlyout",value:function renderFlyout(){if(!this.isOpen&&!this.renderedOnce)return;this.renderedOnce=!0;const e={flyout:!0,visible:this.isOpen};return _`
      <div class=${_e(e)}>
        <slot name="flyout"></slot>
      </div>
    `}},{kind:"method",key:"updateFlyout",value:function updateFlyout(){const e=this.renderRoot.querySelector(".anchor"),t=this.renderRoot.querySelector(".flyout");if(t&&e){let n,r,o;if(this.isOpen){const i=t.getBoundingClientRect(),s=e.getBoundingClientRect(),a=s.bottom,l=s.left,d=l+i.width,c=a+i.height,p=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight;if(i.width>p)n=-l;else if(s.width>=i.width)n=0;else{const e=i.width/2-s.width/2;n=l-e<0?-l:d-e>p?-(d-p):-e}i.height>u||u<c&&s.top<i.height?o=-a+s.height:u<c&&(r=s.height)}t.style.left=void 0!==n?`${n}px`:"",t.style.bottom=void 0!==r?`${r}px`:"",t.style.top=void 0!==o?`${o}px`:""}}}]}},LitElement);class MgtBaseComponent extends LitElement{static get useShadowRoot(){return this._useShadowRoot}static set useShadowRoot(e){this._useShadowRoot=e}constructor(){super(),this.isShadowRootDisabled()&&(this._needsShimAdoptedStyleSheets=!0)}isShadowRootDisabled(){return!MgtBaseComponent._useShadowRoot||!this.constructor._useShadowRoot}fireCustomEvent(e,t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});return this.dispatchEvent(n)}createRenderRoot(){return this.isShadowRootDisabled()?this:super.createRenderRoot()}updated(e){super.updated(e);const t=new CustomEvent("updated",{bubbles:!0,cancelable:!0});this.dispatchEvent(t)}}_defineProperty(MgtBaseComponent,"_useShadowRoot",!0);class TemplateHelper{static renderTemplate(e,t,n){if(e.$parentTemplateContext&&(t=_objectSpread2({},t,{$parent:e.$parentTemplateContext})),e.content&&e.content.childNodes.length){const r=e.content.cloneNode(!0);return this.renderNode(r,t,n)}if(e.childNodes.length){const r=document.createElement("div");for(let t=0;t<e.childNodes.length;t++)r.appendChild(e.childNodes[t].cloneNode(!0));return this.renderNode(r,t,n)}}static getValueFromObject(e,t){if("this"===(t=t.trim()))return e;const n=t.split(".");let r=e;for(let e=0;e<n.length;e++){if(!(r=r[n[e]]))return null}return r}static replaceExpression(e,t,n){return e.replace(this._converterExpression,e=>n?this.evalInContext(e.substring(3,e.length-3).trim(),_objectSpread2({},n,{},t)):"").replace(this._expression,e=>{const n=e.substring(2,e.length-2),r=this.getValueFromObject(t,n);return r?"object"==typeof r?JSON.stringify(r):r.toString():""})}static renderNode(e,t,n){if("#text"===e.nodeName)return e.textContent=this.replaceExpression(e.textContent,t,n),e;if("TEMPLATE"===e.nodeName)return e.$parentTemplateContext=t,e;let r=e;if(r.attributes)for(let e=0;e<r.attributes.length;e++){const o=r.attributes[e];r.setAttribute(o.name,this.replaceExpression(o.value,t,n))}const o=[],i=[];let s=!1;for(let r=0;r<e.childNodes.length;r++){const a=e.childNodes[r],l=a;let d=!1;if(l.dataset){let e=!1;if(l.dataset.if){const n=l.dataset.if;this.evalBoolInContext(n,t)?(l.removeAttribute("data-if"),s=!0,d=!0):(i.push(l),e=!0)}else void 0!==l.dataset.else&&(s?(i.push(l),e=!0):l.removeAttribute("data-else"));l.dataset.for&&!e?o.push(l):e||this.renderNode(a,t,n)}else this.renderNode(a,t,n);d||"#text"===a.nodeName||(s=!1)}for(const e of i)r.removeChild(e);for(let e=0;e<o.length;e++){const i=o[e],s=i.dataset.for.split(" ");if(s.length>1){const e=s[0],o=s[s.length-1],a=this.getValueFromObject(t,o);if(Array.isArray(a)){i.removeAttribute("data-for");for(let o=0;o<a.length;o++){const s=_objectSpread2({$index:o},t);s[e]=a[o];const l=i.cloneNode(!0);this.renderNode(l,s,n),r.insertBefore(l,i)}r.removeChild(i)}}}return e}static evalBoolInContext(e,t){return new Function("with(this) { return !!("+e+")}").call(t)}static evalInContext(e,t){const n=new Function("with(this) { return "+e+";}");let r;try{r=n.call(t)}catch(e){}return r}}_defineProperty(TemplateHelper,"_expression",/{{\s*([$\w]+)(\.[$\w]+)*\s*}}/g),_defineProperty(TemplateHelper,"_converterExpression",/{{{\s*[$\w\.()]+\s*}}}/g);class MgtTemplatedComponent extends MgtBaseComponent{constructor(){super(),_defineProperty(this,"templateConverters",{}),_defineProperty(this,"templates",{}),_defineProperty(this,"_renderedSlots",!1),_defineProperty(this,"_renderedTemplates",{}),_defineProperty(this,"_slotNamesAddedDuringRender",[]),this.templateConverters.lower=(e=>e.toLowerCase()),this.templateConverters.upper=(e=>e.toUpperCase())}update(e){this.templates=this.getTemplates(),this._slotNamesAddedDuringRender=[],super.update(e)}updated(e){super.updated(e),this.removeUnusedSlottedElements()}renderTemplate(e,t,n){if(!this.templates[e])return null;n=n||e,this._slotNamesAddedDuringRender.push(n),this._renderedSlots=!0;const r=_`
      <slot name=${n}></slot>
    `;if(this._renderedTemplates.hasOwnProperty(n)){const{context:e,slot:o}=this._renderedTemplates[n];if(equals(e,t))return r;this.removeChild(o)}const o=TemplateHelper.renderTemplate(this.templates[e],t,this.templateConverters),i=document.createElement("div");return i.slot=n,i.dataset.generated="template",o&&i.appendChild(o),this.appendChild(i),this._renderedTemplates[n]={context:t,slot:i},this.fireCustomEvent("templateRendered",{templateType:e,context:t,element:i}),r}getTemplates(){const e={};for(let t=0;t<this.children.length;t++){const n=this.children[t];if("TEMPLATE"===n.nodeName){const t=n;t.dataset.type?e[t.dataset.type]=t:e.default=t}}return e}removeUnusedSlottedElements(){if(this._renderedSlots){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.dataset&&t.dataset.generated&&!this._slotNamesAddedDuringRender.includes(t.slot)&&(this.removeChild(t),delete this._renderedTemplates[t.slot],e--)}this._renderedSlots=!1}}}!function(e){e[e.none=0]="none",e[e.hover=1]="hover",e[e.click=2]="click"}(Pe||(Pe={}));const Ie=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

:host {
  display: inherit; }

:host .root {
  display: inline-block;
  color: var(--color, #201f1e);
  position: relative;
  vertical-align: top; }

:host svg,
mgt-person svg {
  width: var(--avatar-size-s, 24px);
  height: var(--avatar-size-s, 24px); }

:host img,
mgt-person img {
  border: var(--avatar-border);
  border-radius: 50%; }

:host .person-root,
mgt-person .person-root {
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--default-font-family, "Segoe UI"); }

:host .Details,
mgt-person .Details {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 12px; }
  :host .Details.small,
  mgt-person .Details.small {
    margin-left: 6px; }

:host .user-avatar,
mgt-person .user-avatar {
  width: var(--avatar-size, 48px);
  height: var(--avatar-size, 48px);
  display: flex;
  justify-content: center;
  align-items: center; }
  :host .user-avatar.initials,
  mgt-person .user-avatar.initials {
    color: var(--initials-color, white);
    background-color: var(--initials-background-color, #b4009e);
    border-radius: 50%;
    font-weight: 400;
    font-size: 60%; }
  :host .user-avatar.small,
  mgt-person .user-avatar.small {
    width: var(--avatar-size-s, 24px);
    height: var(--avatar-size-s, 24px); }
  :host .user-avatar.row-span-2,
  mgt-person .user-avatar.row-span-2 {
    width: var(--avatar-size, 48px);
    height: var(--avatar-size, 48px); }
  :host .user-avatar img,
  mgt-person .user-avatar img {
    height: 100%; }

:host .avatar-icon,
mgt-person .avatar-icon {
  flex: 1 1 auto;
  line-height: 1;
  margin: 0;
  font-size: var(--avatar-size, 48px); }
  :host .avatar-icon.small,
  mgt-person .avatar-icon.small {
    font-size: var(--avatar-size-s, 24px); }
  :host .avatar-icon.row-span-2,
  mgt-person .avatar-icon.row-span-2 {
    grid-row: 1 / 3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2; }
  :host .avatar-icon.row-span-3,
  mgt-person .avatar-icon.row-span-3 {
    grid-row: 1 / 4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 3; }

:host .user-name,
mgt-person .user-name {
  font-size: var(--font-size, 14px);
  font-weight: var(--font-weight, 600);
  white-space: nowrap;
  grid-column: 2;
  -ms-grid-column: 2; }

:host .user-email,
mgt-person .user-email {
  color: var(--email-color, #323130);
  font-size: var(--email-font-size, 12px);
  white-space: nowrap;
  grid-column: 2;
  -ms-grid-column: 2;
  grid-row: 2;
  -ms-grid-row: 2; }

.flyout {
  padding: 8px; }

`];let Ae=_decorate([V("mgt-person")],function(t,n){class MgtPerson extends n{constructor(...e){super(...e),t(this)}}return{F:MgtPerson,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return Ie}},{kind:"field",decorators:[property({attribute:"person-query"})],key:"personQuery",value:void 0},{kind:"field",decorators:[property({attribute:"user-id"})],key:"userId",value:void 0},{kind:"field",decorators:[property({attribute:"show-name",type:Boolean})],key:"showName",value:void 0},{kind:"field",decorators:[property({attribute:"show-email",type:Boolean})],key:"showEmail",value:void 0},{kind:"field",decorators:[property({attribute:"person-details",type:Object})],key:"personDetails",value:void 0},{kind:"field",decorators:[property({attribute:"person-image",reflect:!0,type:String})],key:"personImage",value:void 0},{kind:"field",decorators:[property({attribute:"person-card",converter:(e,t)=>(e=e.toLowerCase(),void 0===Pe[e]?Pe.none:Pe[e])})],key:"personCardInteraction",value:()=>Pe.none},{kind:"field",decorators:[property({attribute:!1})],key:"isPersonCardVisible",value:()=>!1},{kind:"field",decorators:[property({attribute:!1})],key:"personCardShouldRender",value:()=>!1},{kind:"field",key:"_mouseLeaveTimeout",value:void 0},{kind:"field",key:"_mouseEnterTimeout",value:void 0},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,n){_get(_getPrototypeOf(MgtPerson.prototype),"attributeChangedCallback",this).call(this,e,t,n),"person-query"!==e&&"user-id"!==e||t===n||(this.personDetails=null,this.loadData())}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){Providers.onProviderUpdated(()=>this.loadData()),this.loadData()}},{kind:"method",key:"render",value:function render(){const e=this.getImage(),t=this.renderTemplate("default",{person:this.personDetails,personImage:e})||_`
        <div class="person-root">
          ${this.renderImage(e)} ${this.renderDetails()}
        </div>
      `;return _`
      <div
        class="root"
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @click=${this.handleMouseClick}
      >
        ${this.renderFlyout(t)}
      </div>
    `}},{kind:"method",key:"updated",value:function updated(e){_get(_getPrototypeOf(MgtPerson.prototype),"updated",this).call(this,e);const t=this.renderRoot.querySelector(".initials-text");if(t&&t.parentNode&&t.parentNode.getBoundingClientRect){const e=t.parentNode.getBoundingClientRect().height;t.style.fontSize=`${.5*e}px`}}},{kind:"method",key:"loadData",value:async function loadData(){const t=Providers.globalProvider;if(t&&t.state!==e.ProviderState.Loading)if(t.state!==e.ProviderState.SignedOut){if(this.personDetails)this.personImage&&"@"===this.personImage&&!this.personDetails.personImage&&this.loadImage();else if(this.userId||this.personQuery&&"me"===this.personQuery){const e=t.graph.createBatch();this.userId?(e.get("user",`/users/${this.userId}`,["user.readbasic.all"]),e.get("photo",`users/${this.userId}/photo/$value`,["user.readbasic.all"])):(e.get("user","me",["user.read"]),e.get("photo","me/photo/$value",["user.read"]));const n=await e.execute();this.personDetails=n.user,this.personImage=n.photo,this.personDetails.personImage=n.photo}else if(!this.personDetails&&this.personQuery){const e=await t.graph.findPerson(this.personQuery);if(e&&e.length>0){const t=e[0];this.personDetails=t,this.loadImage()}}}else this.personDetails=null}},{kind:"method",key:"loadImage",value:async function loadImage(){const e=Providers.globalProvider,t=this.personDetails;let n;if(t.userPrincipalName){const r=t.userPrincipalName;n=await e.graph.getUserPhoto(r)}else{const r=getEmailFromGraphEntity(t);if(r){const t=await e.graph.findUserByEmail(r);if(t&&t.length)if(t[0].personType&&"OrganizationUser"===t[0].personType.subclass)n=await e.graph.getUserPhoto(t[0].scoredEmailAddresses[0].address);else{const r=t[0].id;n=await e.graph.getContactPhoto(r)}}}n&&(this.personImage=n,this.personDetails.personImage=n),this.requestUpdate()}},{kind:"method",key:"handleMouseClick",value:function handleMouseClick(){this.personCardInteraction!==Pe.click||this.isPersonCardVisible?this.hidePersonCard():this.showPersonCard()}},{kind:"method",key:"handleMouseEnter",value:function handleMouseEnter(e){clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this.personCardInteraction===Pe.hover&&(this._mouseEnterTimeout=setTimeout(this.showPersonCard.bind(this),500))}},{kind:"method",key:"handleMouseLeave",value:function handleMouseLeave(e){clearTimeout(this._mouseEnterTimeout),clearTimeout(this._mouseLeaveTimeout),this._mouseLeaveTimeout=setTimeout(this.hidePersonCard.bind(this),500)}},{kind:"method",key:"showPersonCard",value:function showPersonCard(){this.personCardShouldRender||(this.personCardShouldRender=!0),this.isPersonCardVisible=!0}},{kind:"method",key:"hidePersonCard",value:function hidePersonCard(){this.isPersonCardVisible=!1;const e=this.querySelector("mgt-person-card")||this.renderRoot.querySelector("mgt-person-card");e&&(e.isExpanded=!1)}},{kind:"method",key:"getImage",value:function getImage(){return this.personImage&&"@"!==this.personImage?this.personImage:this.personDetails&&this.personDetails.personImage?this.personDetails.personImage:null}},{kind:"method",key:"renderFlyout",value:function renderFlyout(e){if(this.personCardInteraction===Pe.none)return e;const t=this.getImage(),n=this.personCardShouldRender?_`
          <div slot="flyout" class="flyout">
            ${this.renderTemplate("person-card",{person:this.personDetails,personImage:t})||_`
                <mgt-person-card .personDetails=${this.personDetails} .personImage=${t}> </mgt-person-card>
              `}
          </div>
        `:null;return _`
      <mgt-flyout .isOpen=${this.isPersonCardVisible}>
        ${e} ${n}
      </mgt-flyout>
    `}},{kind:"method",key:"renderDetails",value:function renderDetails(){if(this.showEmail||this.showName){const e=this.showEmail&&this.showName;return _`
        <span class="${_e({Details:!0,small:!e})}">
          ${this.renderNameAndEmail()}
        </span>
      `}return null}},{kind:"method",key:"renderImage",value:function renderImage(e){if(this.personDetails){const t=this.personCardInteraction===Pe.none?this.personDetails.displayName:"",n=this.showEmail&&this.showName,r={initials:!e,"row-span-2":n,small:!n,"user-avatar":!0};let o;if(e)o=_`
          <img alt=${t} src=${e} />
        `;else{const e=this.getInitials();o=_`
          <span class="initials-text" aria-label="${e}">
            ${e}
          </span>
        `}return _`
        <div class=${_e(r)} title=${t} aria-label=${t}>
          ${o}
        </div>
      `}return this.renderEmptyImage()}},{kind:"method",key:"renderEmptyImage",value:function renderEmptyImage(){const e=this.showEmail&&this.showName;return _`
      <i class=${_e({"avatar-icon":!0,"ms-Icon":!0,"ms-Icon--Contact":!0,"row-span-2":e,small:!e})}></i>
    `}},{kind:"method",key:"renderNameAndEmail",value:function renderNameAndEmail(){if(!this.personDetails||!this.showEmail&&!this.showName)return;const e=this.showName?_`
          <div class="user-name" aria-label="${this.personDetails.displayName}">${this.personDetails.displayName}</div>
        `:null;let t;if(this.showEmail){const e=getEmailFromGraphEntity(this.personDetails);t=_`
        <div class="user-email" aria-label="${e}">${e}</div>
      `}return _`
      ${e} ${t}
    `}},{kind:"method",key:"getInitials",value:function getInitials(){if(!this.personDetails)return"";let e="";if(this.personDetails.givenName&&(e+=this.personDetails.givenName[0].toUpperCase()),this.personDetails.surname&&(e+=this.personDetails.surname[0].toUpperCase()),!e&&this.personDetails.displayName){const t=this.personDetails.displayName.split(" ");for(let n=0;n<2&&n<t.length;n++)t[n][0].match(/[a-z]/i)&&(e+=t[n][0].toUpperCase())}return e}}]}},MgtTemplatedComponent),Ee=_decorate([V("mgt-agenda")],function(t,n){class MgtAgenda extends n{constructor(){super(),t(this),this.onResize=this.onResize.bind(this)}}return{F:MgtAgenda,d:[{kind:"get",static:!0,key:"styles",value:function styles$1(){return ee}},{kind:"field",decorators:[property({attribute:"events"})],key:"events",value:void 0},{kind:"field",decorators:[property({attribute:"group-by-day",reflect:!0,type:Boolean})],key:"groupByDay",value:()=>!1},{kind:"field",decorators:[property({attribute:"date",reflect:!0,type:String})],key:"date",value:void 0},{kind:"field",decorators:[property({attribute:"days",reflect:!0,type:Number})],key:"days",value:()=>3},{kind:"field",decorators:[property({attribute:"event-query",type:String})],key:"eventQuery",value:void 0},{kind:"field",decorators:[property({attribute:"show-max",type:Number})],key:"showMax",value:void 0},{kind:"field",decorators:[property({attribute:"group-id",type:String})],key:"groupId",value:void 0},{kind:"field",key:"_firstUpdated",value:()=>!1},{kind:"field",decorators:[property({attribute:!1})],key:"_isNarrow",value:void 0},{kind:"field",decorators:[property({attribute:!1})],key:"_loading",value:()=>!0},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._firstUpdated=!0,Providers.onProviderUpdated(()=>this.loadData()),this.loadData()}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){this._isNarrow=this.offsetWidth<600,_get(_getPrototypeOf(MgtAgenda.prototype),"connectedCallback",this).call(this),window.addEventListener("resize",this.onResize)}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){window.removeEventListener("resize",this.onResize),_get(_getPrototypeOf(MgtAgenda.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,n){t===n||"date"!==e&&"days"!==e&&"group-id"!==e||(this.events=null,this.loadData()),_get(_getPrototypeOf(MgtAgenda.prototype),"attributeChangedCallback",this).call(this,e,t,n)}},{kind:"method",key:"render",value:function render(){return this._isNarrow=this.offsetWidth<600,_`
      <div class="agenda ${this._isNarrow?"narrow":""}">
        ${this.renderAgenda()}
      </div>
    `}},{kind:"method",key:"onResize",value:function onResize(){this._isNarrow=this.offsetWidth<600}},{kind:"method",key:"loadData",value:async function loadData(){if(this.events)return;if(!this._firstUpdated)return;const t=Providers.globalProvider;if(t&&t.state===e.ProviderState.SignedIn){if(this._loading=!0,this.eventQuery)try{const e=this.eventQuery.split("|");let n,r;e.length>1?(r=e[0].trim(),n=e[1].trim()):r=this.eventQuery;let o=await t.graph.client.api(r);n&&(o=o.middlewareOptions(prepScopes(n)));const i=await o.get();i&&i.value&&(this.events=i.value)}catch(e){}else{const e=this.date?new Date(this.date):new Date;e.setHours(0,0,0,0);const n=new Date(e.getTime());n.setDate(e.getDate()+this.days);try{this.events=await t.graph.getEvents(e,n,this.groupId)}catch(e){}}this._loading=!1}else t&&t.state===e.ProviderState.Loading?this._loading=!0:this._loading=!1}},{kind:"method",key:"renderAgenda",value:function renderAgenda(){if(this._loading)return this.renderTemplate("loading",null)||this.renderLoading();if(this.events){const e=this.showMax&&this.showMax>0?this.events.slice(0,this.showMax):this.events,t=this.renderTemplate("default",{events:e});if(t)return t;if(this.groupByDay){const t={};for(let n=0;n<e.length;n++){const r=this.getDateHeaderFromDateTimeString(e[n].start.dateTime);t[r]=t[r]||[],t[r].push(e[n])}return _`
          <div class="agenda grouped ${this._isNarrow?"narrow":""}">
            ${Object.keys(t).map(e=>_`
                  <div class="group">
                    ${this.renderTemplate("header",{header:e},"header-"+e)||_`
                        <div class="header" aria-label="${e}">${e}</div>
                      `}
                    ${this.renderListOfEvents(t[e])}
                  </div>
                `)}
          </div>
        `}return this.renderListOfEvents(e)}return this.renderTemplate("no-data",null)||_``}},{kind:"method",key:"renderListOfEvents",value:function renderListOfEvents(e){return _`
      <ul class="agenda-list">
        ${e.map(e=>_`
              <li @click=${()=>this.eventClicked(e)}>
                ${this.renderTemplate("event",{event:e},e.id)||this.renderEvent(e)}
              </li>
            `)}
      </ul>
    `}},{kind:"method",key:"renderLoading",value:function renderLoading(){return _`
      <div class="event">
        <div class="event-time-container">
          <div class="event-time-loading loading-element"></div>
        </div>
        <div class="event-details-container">
          <div class="event-subject-loading loading-element"></div>
          <div class="event-location-container">
            <div class="event-location-icon-loading loading-element"></div>
            <div class="event-location-loading loading-element"></div>
          </div>
          <div class="event-location-container">
            <div class="event-attendee-loading loading-element"></div>
            <div class="event-attendee-loading loading-element"></div>
            <div class="event-attendee-loading loading-element"></div>
          </div>
        </div>
      </div>
    `}},{kind:"method",key:"renderEvent",value:function renderEvent(e){return _`
      <div class="event">
        <div class="event-time-container">
          <div class="event-time" aria-label="${this.getEventTimeString(e)}">${this.getEventTimeString(e)}</div>
        </div>
        <div class="event-details-container">
          <div class="event-subject">${e.subject}</div>
          ${this.renderLocation(e)} ${this.renderAttendies(e)}
        </div>
        ${this.templates["event-other"]?_`
              <div class="event-other-container">
                ${this.renderTemplate("event-other",{event:e},e.id+"-other")}
              </div>
            `:""}
      </div>
    `}},{kind:"method",key:"renderLocation",value:function renderLocation(e){return e.location.displayName?_`
      <div class="event-location-container">
        <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.99989 6.49989C4.15159 6.49989 3.46143 5.81458 3.46143 4.97224C3.46143 4.12965 4.15159 3.44434 4.99989 3.44434C5.84845 3.44434 6.53835 4.12965 6.53835 4.97224C6.53835 5.81458 5.84845 6.49989 4.99989 6.49989Z"
            stroke="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.1897 7.57436L5.00029 12L1.80577 7.56765C0.5971 6.01895 0.770299 3.47507 2.17681 2.12383C2.93098 1.39918 3.93367 1 5.00029 1C6.06692 1 7.06961 1.39918 7.82401 2.12383C9.23075 3.47507 9.40372 6.01895 8.1897 7.57436Z"
            stroke="black"
          />
        </svg>
        <div class="event-location" aria-label="${e.location.displayName}">${e.location.displayName}</div>
      </div>
    `:null}},{kind:"method",key:"renderAttendies",value:function renderAttendies(e){return e.attendees.length?_`
      <mgt-people
        class="event-attendees"
        .people=${e.attendees.map(e=>({displayName:e.emailAddress.name,emailAddresses:[e.emailAddress]}))}
      ></mgt-people>
    `:null}},{kind:"method",key:"eventClicked",value:function eventClicked(e){this.fireCustomEvent("eventClick",{event:e})}},{kind:"method",key:"getEventTimeString",value:function getEventTimeString(e){if(e.isAllDay)return"ALL DAY";return`${this.prettyPrintTimeFromDateTime(new Date(e.start.dateTime))} - ${this.prettyPrintTimeFromDateTime(new Date(e.end.dateTime))}`}},{kind:"method",key:"prettyPrintTimeFromDateTime",value:function prettyPrintTimeFromDateTime(e){e.setMinutes(e.getMinutes()-e.getTimezoneOffset());let t=e.getHours();const n=e.getMinutes(),r=t>=12?"PM":"AM";return`${t=(t%=12)||12}:${n<10?"0"+n:n} ${r}`}},{kind:"method",key:"getDateHeaderFromDateTimeString",value:function getDateHeaderFromDateTimeString(e){const t=new Date(e);t.setMinutes(t.getMinutes()-t.getTimezoneOffset());const n=t.getDay(),r=t.getMonth(),o=t.getDate(),i=t.getFullYear();return`${function getDayOfWeekString(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"Day"}}(n)}, ${getMonthString(r)} ${o}, ${i}`}},{kind:"method",key:"getEventDuration",value:function getEventDuration(e){let t=new Date(e.start.dateTime);const n=new Date(e.end.dateTime),r=new Date;let o="";r>t&&(t=r);const i=n.getTime()-t.getTime(),s=Math.round(i/6e4);if(s>1440||e.isAllDay)o=Math.ceil(s/1440)+"d";else if(s>60){o=Math.round(s/60)+"h";const e=s%60;e&&(o+=e+"m")}else o=s+"m";return o}}]}},MgtTemplatedComponent),xe=_decorate([V("mgt-get")],function(t,n){class MgtGet extends n{constructor(...e){super(...e),t(this)}}return{F:MgtGet,d:[{kind:"field",decorators:[property({attribute:"resource",type:String})],key:"resource",value:void 0},{kind:"field",decorators:[property({attribute:"scopes",converter:(e,t)=>e?e.toLowerCase().split(","):null})],key:"scopes",value:()=>[]},{kind:"field",decorators:[property({attribute:"version",type:String})],key:"version",value:()=>"v1.0"},{kind:"field",decorators:[property({attribute:"max-pages",type:Number})],key:"maxPages",value:()=>3},{kind:"field",decorators:[property({attribute:!1})],key:"response",value:void 0},{kind:"field",decorators:[property({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[property({attribute:!1})],key:"loading",value:()=>!1},{kind:"field",key:"_firstUpdated",value:()=>!1},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,n){_get(_getPrototypeOf(MgtGet.prototype),"attributeChangedCallback",this).call(this,e,t,n),this._firstUpdated&&this.loadData()}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){Providers.onProviderUpdated(()=>this.loadData()),this.loadData(),this._firstUpdated=!0}},{kind:"method",key:"render",value:function render(){return this.loading?this.renderTemplate("loading",null):this.error?this.renderTemplate("error",this.error):this.response?this.renderTemplate("default",this.response):void 0}},{kind:"method",key:"loadData",value:async function loadData(){const t=Providers.globalProvider;if(t&&t.state===e.ProviderState.SignedIn){if(this.response=null,this.error=null,this.resource){this.loading=!0;let e=null;try{let n=t.graph.client.api(this.resource).version(this.version);if(this.scopes&&this.scopes.length&&(n=n.middlewareOptions(prepScopes(...this.scopes))),(e=await n.get())&&e.value&&e.value.length&&e["@odata.nextLink"]){let n=1,r=e;for(;(n<this.maxPages||this.maxPages<=0)&&r&&r["@odata.nextLink"];){n++;const o=r["@odata.nextLink"].split(this.version)[1];(r=await t.graph.client.api(o).version(this.version).get())&&r.value&&r.value.length&&(r.value=e.value.concat(r.value),e=r)}}}catch(e){this.error=e}e&&(this.response=e,this.error=null)}this.loading=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error})}}}]}},MgtTemplatedComponent);const De=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

:host,
mgt-login {
  --font-size: 14px;
  --font-weight: 600;
  --width: '100%';
  --height: '100%';
  --margin: 0;
  --padding: 12px 20px;
  --color: #201f1e;
  --background-color: transparent;
  --background-color--hover: #edebe9;
  --popup-content-background-color: white;
  --popup-command-font-size: 12px;
  --popup-command-margin: 16px 0 0;
  --popup-padding: 24px 48px 16px 24px; }

:host .root,
mgt-login .root {
  position: relative;
  display: inline-block; }

:host .login-button,
mgt-login .login-button {
  display: flex;
  align-items: center;
  font-family: var(--default-font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: var(--width);
  height: var(--height);
  margin: var(--margin);
  padding: var(--padding);
  color: var(--color);
  background-color: var(--background-color);
  border: none;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s; }
  :host .login-button:hover,
  mgt-login .login-button:hover {
    color: var(--theme-primary-color);
    background-color: var(--background-color--hover); }
  :host .login-button:focus,
  mgt-login .login-button:focus {
    outline: 0; }
  :host .login-button:disabled,
  mgt-login .login-button:disabled {
    opacity: 0.4;
    pointer-events: none; }

:host .login-icon + span,
mgt-login .login-icon + span {
  margin-left: 6px; }

:host .popup,
mgt-login .popup {
  display: none;
  position: absolute;
  animation-duration: 300ms;
  font-family: var(--default-font-family);
  background: var(--popup-content-background-color);
  box-shadow: 0 12px 40px 2px rgba(0, 0, 0, 0.08);
  min-width: 240px;
  z-index: 1; }
  :host .popup.show-menu,
  mgt-login .popup.show-menu {
    display: inline-block;
    animation-name: fade-in; }
  :host .popup.open-left,
  mgt-login .popup.open-left {
    right: 0; }

:host .popup-content,
mgt-login .popup-content {
  display: flex;
  flex-direction: column;
  padding: var(--popup-padding); }

:host .popup-commands ul,
mgt-login .popup-commands ul {
  list-style-type: none;
  margin: var(--popup-command-margin);
  padding: 0; }

:host .popup-command,
mgt-login .popup-command {
  font-family: var(--default-font-family);
  font-size: var(--popup-command-font-size);
  font-weight: var(--font-weight);
  color: var(--theme-primary-color);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s; }
  :host .popup-command:hover,
  mgt-login .popup-command:hover {
    color: var(--theme-dark-color); }

@keyframes fade-in {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

`];let Re=_decorate([V("mgt-login")],function(t,n){return{F:class MgtLogin extends n{constructor(){super(),t(this),Providers.onProviderUpdated(()=>this.loadState()),this.loadState()}},d:[{kind:"get",static:!0,key:"styles",value:function styles(){return De}},{kind:"field",decorators:[property({attribute:"user-details",type:Object})],key:"userDetails",value:void 0},{kind:"field",key:"_loginButtonRect",value:void 0},{kind:"field",key:"_popupRect",value:void 0},{kind:"field",key:"_openLeft",value:()=>!1},{kind:"field",key:"_image",value:void 0},{kind:"field",decorators:[property({attribute:!1})],key:"_showMenu",value:()=>!1},{kind:"field",decorators:[property({attribute:!1})],key:"_loading",value:()=>!0},{kind:"method",key:"login",value:async function login(){if(this.userDetails)return;const t=Providers.globalProvider;t&&t.login&&(await t.login(),t.state===e.ProviderState.SignedIn?this.fireCustomEvent("loginCompleted"):this.fireCustomEvent("loginFailed"),await this.loadState())}},{kind:"method",key:"logout",value:async function logout(){if(!this.fireCustomEvent("logoutInitiated"))return;const e=Providers.globalProvider;e&&e.logout&&(await e.logout(),this.fireCustomEvent("logoutCompleted")),this.userDetails=null,this._showMenu=!1}},{kind:"method",key:"updated",value:function updated(e){if(!1===e.get("_showMenu")){const e=this.renderRoot.querySelector(".popup");if(e&&e.animate){this._popupRect=e.getBoundingClientRect();const t=this._loginButtonRect.left-this._popupRect.left,n=this._loginButtonRect.top-this._popupRect.top,r=this._loginButtonRect.width/this._popupRect.width,o=this._loginButtonRect.height/this._popupRect.height;e.animate([{backgroundColor:"#eaeaea",transform:`\n              translate(${t}px, ${n}px)\n              scale(${r}, ${o})\n              `,transformOrigin:"top left"},{backgroundColor:"white",transform:"none",transformOrigin:"top left"}],{duration:100,easing:"ease-in-out",fill:"both"})}}}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){window.addEventListener("click",e=>{const t=this.renderRoot.querySelector(".popup");t&&(this._popupRect=t.getBoundingClientRect(),this._showMenu=!1)})}},{kind:"method",key:"render",value:function render(){const e=this.userDetails?this.renderLoggedIn():this.renderLogIn();return _`
      <div class="root">
        <button ?disabled="${this._loading}" class="login-button" @click=${this.onClick} role="button">
          ${e}
        </button>
        ${this.renderMenu()}
      </div>
    `}},{kind:"method",key:"renderLogIn",value:function renderLogIn(){return _`
      <i class="login-icon ms-Icon ms-Icon--Contact"></i>
      <span aria-label="Sign In">
        Sign In
      </span>
    `}},{kind:"method",key:"renderLoggedIn",value:function renderLoggedIn(){return this.userDetails?_`
        <mgt-person .personDetails=${this.userDetails} .personImage=${this._image} show-name />
      `:this.renderLogIn()}},{kind:"method",key:"renderMenu",value:function renderMenu(){if(!this.userDetails)return;const e=_`
      <mgt-person .personDetails=${this.userDetails} .personImage=${this._image} show-name show-email />
    `;return _`
      <div class="popup ${this._openLeft?"open-left":""} ${this._showMenu?"show-menu":""}">
        <div class="popup-content">
          <div>
            ${e}
          </div>
          <div class="popup-commands">
            <ul>
              <li>
                <button class="popup-command" @click=${this.logout} aria-label="Sign Out">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `}},{kind:"method",key:"loadState",value:async function loadState(){const t=Providers.globalProvider;if(t)if(this._loading=!0,t.state===e.ProviderState.SignedIn){const e=t.graph.createBatch();e.get("me","me",["user.read"]),e.get("photo","me/photo/$value",["user.read"]);const n=await e.execute();this._image=n.photo,this.userDetails=n.me}else{if(t.state!==e.ProviderState.SignedOut)return void(this._showMenu=!1);this.userDetails=null}this._loading=!1}},{kind:"method",key:"onClick",value:function onClick(e){if(e.stopPropagation(),this.userDetails){const e=this.renderRoot.querySelector(".login-button");if(e){this._loginButtonRect=e.getBoundingClientRect();const t=this._loginButtonRect.left,n=(window.innerWidth||document.documentElement.clientWidth)-this._loginButtonRect.right;this._openLeft=n<t,this._showMenu=!this._showMenu}}else this.fireCustomEvent("loginInitiated")&&this.login()}}]}},MgtBaseComponent);const Oe=(e,t)=>{const n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,o=n.insertBefore(g(),r);n.insertBefore(g(),r);const i=new NodePart(e.options);return i.insertAfterNode(o),i},Le=(e,t)=>(e.setValue(t),e.commit(),e),Me=(e,t,n)=>{const r=e.startNode.parentNode,o=n?n.startNode:e.endNode,i=t.endNode.nextSibling;i!==o&&((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(r,t.startNode,i,o)},Ue=e=>{i(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Ne=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},He=new WeakMap,Fe=new WeakMap,qe=n((e,t,n)=>{let r;return void 0===n?n=t:void 0!==t&&(r=t),t=>{if(!(t instanceof NodePart))throw new Error("repeat can only be used in text bindings");const o=He.get(t)||[],i=Fe.get(t)||[],s=[],a=[],l=[];let d,c,p=0;for(const t of e)l[p]=r?r(t,p):p,a[p]=n(t,p),p++;let u=0,h=o.length-1,g=0,m=a.length-1;for(;u<=h&&g<=m;)if(null===o[u])u++;else if(null===o[h])h--;else if(i[u]===l[g])s[g]=Le(o[u],a[g]),u++,g++;else if(i[h]===l[m])s[m]=Le(o[h],a[m]),h--,m--;else if(i[u]===l[m])s[m]=Le(o[u],a[m]),Me(t,o[u],s[m+1]),u++,m--;else if(i[h]===l[g])s[g]=Le(o[h],a[g]),Me(t,o[h],o[u]),h--,g++;else if(void 0===d&&(d=Ne(l,g,m),c=Ne(i,u,h)),d.has(i[u]))if(d.has(i[h])){const e=c.get(l[g]),n=void 0!==e?o[e]:null;if(null===n){const e=Oe(t,o[u]);Le(e,a[g]),s[g]=e}else s[g]=Le(n,a[g]),Me(t,n,o[u]),o[e]=null;g++}else Ue(o[h]),h--;else Ue(o[u]),u++;for(;g<=m;){const e=Oe(t,s[m+1]);Le(e,a[g]),s[g++]=e}for(;u<=h;){const e=o[u++];null!==e&&Ue(e)}He.set(t,s),Fe.set(t,l)}}),$e=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

:host {
  border-radius: 2px; }

:host .root,
mgt-people-picker .root {
  display: block; }

:host .people-picker,
mgt-people-picker .people-picker {
  position: relative;
  margin: 7px 0 0 0;
  background-color: white;
  padding-bottom: 8px; }

:host .people-list,
mgt-people-picker .people-list {
  position: absolute;
  margin: 7px 0px 0px 0px;
  padding: 0;
  box-shadow: 0px 1.3289px 2.65781px rgba(180, 180, 180, 0.182), 0px 1.3289px 2.65781px rgba(68, 68, 68, 0.3);
  border-radius: 2px;
  background-color: var(--people-list-background-color, white);
  z-index: 1;
  /* Sit on top */
  width: 100%;
  text-align: left;
  list-style-type: none;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal; }
  :host .people-list li,
  mgt-people-picker .people-list li {
    cursor: pointer; }

:host .people-list-separator,
mgt-people-picker .people-list-separator {
  margin: var(--separator-margin, 0px 0px 0px 0px);
  height: 2px;
  background: var(--accent-color, #0078d4);
  margin-top: 5px;
  text-align: center; }

:host .people-selected-input,
mgt-people-picker .people-selected-input {
  position: relative;
  border: none;
  line-height: normal;
  outline: none;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px; }

:host .people-selected-list,
mgt-people-picker .people-selected-list {
  display: flex;
  flex-wrap: wrap;
  vertical-align: middle;
  margin: 0 0 0 0;
  list-style-type: none;
  padding-left: 10px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal; }

.CloseIcon,
mgt-people-picker .CloseIcon {
  line-height: normal;
  font-family: 'FabricMDL2Icons';
  padding-right: 8px;
  padding-left: 4px;
  margin-top: 0px;
  cursor: pointer; }

:host .SearchIcon,
mgt-people-picker .SearchIcon {
  font-family: 'FabricMDL2Icons';
  color: var(--accent-color, #0078d4); }

:host .people-person,
mgt-people-picker .people-person {
  display: flex;
  margin: 4px 5px 0px 0;
  align-items: center;
  background-color: rgba(196, 196, 196, 0.24);
  border-radius: 15px;
  height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis; }

:host .list-person,
mgt-people-picker .list-person {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px; }
  :host .list-person:hover,
  mgt-people-picker .list-person:hover {
    background-color: #f1f1f1dd; }

:host .people-person-list-fill,
mgt-people-picker .people-person-list-fill {
  background-color: #f1f1f1; }

:host .people-person-text,
mgt-people-picker .people-person-text {
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  padding: 0; }

:host .input-search,
mgt-people-picker .input-search {
  margin: 7px 2px 0px 3px; }

:host .input-search-start,
mgt-people-picker .input-search-start {
  margin: 7px 0px 0px 0px;
  line-height: normal;
  margin-inline-start: 0px;
  margin-inline-end: 0px; }

:host .people-picker-input,
mgt-people-picker .people-picker-input {
  display: flex;
  order: 2;
  background-color: white;
  margin: var(--avatar-margin, 0 4px 0 0);
  font-size: 14px;
  line-height: 19px;
  cursor: text; }

:host .duplicate-person,
mgt-people-picker .duplicate-person {
  text-decoration: none;
  border-bottom: 1px solid red; }

:host .remove-person-button,
mgt-people-picker .remove-person-button {
  background: #767676;
  transform: matrix(-0.71, -0.71, 0.71, -0.71, 0, 0); }

:host .remove-person-button-secondary,
mgt-people-picker .remove-person-button-secondary {
  background: #767676;
  transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0); }

:host .person-display-name,
mgt-people-picker .person-display-name {
  max-width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 8px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000000; }

mgt-person {
  --avatar-size-s: 32px;
  margin-left: 12px;
  cursor: default; }

.selected-person {
  --avatar-size-s: 24px;
  margin-left: 0px; }

:host .search-error-text,
:host .loading-text,
mgt-people-picker .search-error-text,
mgt-people-picker .loading-text {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #232222; }

:host .SearchErrorIcon,
mgt-people-picker .SearchErrorIcon {
  display: inline-block;
  font-family: 'FabricMDL2Icons';
  color: #cf0000; }

:host .message-parent,
mgt-people-picker .message-parent {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle; }

:host .highlight-search-text,
mgt-people-picker .highlight-search-text {
  font-weight: bold; }

:host .people-person-job-title,
mgt-people-picker .people-person-job-title {
  flex: 100%;
  order: 3;
  font-weight: normal;
  font-size: 12px;
  text-transform: uppercase; }

:host .people-person-text-area,
mgt-people-picker .people-person-text-area {
  margin-left: 13px;
  flex: 1 1 0;
  max-height: 40px; }

`];let je=_decorate([V("mgt-people-picker")],function(t,n){class MgtPeoplePicker extends n{constructor(){super(),t(this)}}return{F:MgtPeoplePicker,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return $e}},{kind:"field",decorators:[property({attribute:"people",type:Object})],key:"people",value:()=>null},{kind:"field",decorators:[property({attribute:"show-max",type:Number})],key:"showMax",value:()=>6},{kind:"field",decorators:[property({attribute:"group-id",type:String})],key:"groupId",value:void 0},{kind:"field",decorators:[property({attribute:"selected-people",type:Array})],key:"selectedPeople",value:()=>[]},{kind:"field",decorators:[property()],key:"_userInput",value:()=>""},{kind:"field",decorators:[property()],key:"showLoading",value:()=>!1},{kind:"field",decorators:[property()],key:"isLoading",value:()=>!1},{kind:"field",key:"arrowSelectionCount",value:()=>0},{kind:"field",key:"groupPeople",value:void 0},{kind:"field",key:"debouncedSearch",value:void 0},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,n){_get(_getPrototypeOf(MgtPeoplePicker.prototype),"attributeChangedCallback",this).call(this,e,t,n),"group-id"===e&&t!==n&&this.findGroup()}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this.groupId&&(Providers.onProviderUpdated(()=>this.findGroup()),this.findGroup())}},{kind:"method",key:"render",value:function render(){return this.renderTemplate("default",{people:this.people})||_`
        <div class="people-picker" @blur=${this.lostFocus}>
          <div class="people-picker-input" @click=${this.gainedFocus}>
            ${this.renderSelectedPeople()}
          </div>
          <div class="people-list-separator"></div>
          ${this.renderPeopleList()}
        </div>
      `}},{kind:"method",key:"focus",value:function focus(e){const t=this.renderRoot.querySelector(".people-selected-input");t&&t.focus(e)}},{kind:"method",key:"selectUsersById",value:async function selectUsersById(t){const n=Providers.globalProvider,r=Providers.globalProvider.graph;if(n&&n.state===e.ProviderState.SignedIn)for(const e in t)try{const n=await r.getUser(t[e]);this.addPerson(n)}catch(e){}}},{kind:"method",key:"onUserKeyUp",value:function onUserKeyUp(e){if(40===e.keyCode||38===e.keyCode)return;const t=e.target;return"Escape"===e.code?(t.value="",this._userInput="",void(this.people=[])):"Backspace"===e.code&&0===this._userInput.length&&this.selectedPeople.length>0?(t.value="",this._userInput="",this.selectedPeople=this.selectedPeople.splice(0,this.selectedPeople.length-1),void this.fireCustomEvent("selectionChanged",this.selectedPeople)):void this.handleUserSearch(t)}},{kind:"method",key:"findGroup",value:async function findGroup(){const t=Providers.globalProvider;if(t&&t.state===e.ProviderState.SignedIn){const e=Providers.globalProvider.graph;this.groupPeople=await e.getPeopleFromGroup(this.groupId)}}},{kind:"method",key:"handleUserSearch",value:function handleUserSearch(e){this.debouncedSearch||(this.debouncedSearch=function debounce(e,t){let n;return function(){clearTimeout(n),n=setTimeout(()=>e.apply(this,arguments),t)}}(()=>{this._userInput!==e.value&&(this._userInput=e.value,this.loadPersonSearch(this._userInput),this.arrowSelectionCount=0)},200)),this.debouncedSearch()}},{kind:"method",key:"onUserKeyDown",value:function onUserKeyDown(e){40!==e.keyCode&&38!==e.keyCode||(this.handleArrowSelection(e),this._userInput.length>0&&e.preventDefault()),"Tab"!==e.code&&"Enter"!==e.code||(this.people.length&&e.preventDefault(),this.addPerson(this.people[this.arrowSelectionCount]),e.target.value="")}},{kind:"method",key:"handleArrowSelection",value:function handleArrowSelection(e){if(this.people.length){38===e.keyCode&&(this.arrowSelectionCount>0?this.arrowSelectionCount--:this.arrowSelectionCount=0),40===e.keyCode&&(this.arrowSelectionCount+1!==this.people.length&&this.arrowSelectionCount+1<this.showMax?this.arrowSelectionCount++:this.arrowSelectionCount=0);const t=this.renderRoot.querySelector(".people-list");for(let e=0;e<t.children.length;e++)t.children[e].setAttribute("class","list-person people-person-list");t.children[this.arrowSelectionCount].setAttribute("class","list-person people-person-list-fill")}}},{kind:"method",key:"addPerson",value:function addPerson(e){if(e){this._userInput="",0===this.selectedPeople.filter(t=>t.id===e.id).length&&(this.selectedPeople.push(e),this.fireCustomEvent("selectionChanged",this.selectedPeople),this.people=[])}this.gainedFocus()}},{kind:"method",key:"loadPersonSearch",value:async function loadPersonSearch(t){if(t.length){t=t.toLowerCase();const n=Providers.globalProvider;let r;if(n&&n.state===e.ProviderState.SignedIn){this.isLoading=!0,setTimeout(()=>{this.showLoading=this.isLoading},400);const e=Providers.globalProvider.graph;(r=this.groupId?this.groupPeople:await e.findPerson(t))&&(r=r.filter(e=>-1!==e.displayName.toLowerCase().indexOf(t))),this.people=this.filterPeople(r),this.isLoading=!1,this.showLoading=!1}}else this.people=[]}},{kind:"method",key:"filterPeople",value:function filterPeople(e){if(e){const t=this.selectedPeople.map(e=>e.id);return e.filter(e=>-1===t.indexOf(e.id))}}},{kind:"method",key:"removePerson",value:function removePerson(e){const t=this.selectedPeople.filter(t=>t.id!==e.id);this.selectedPeople=t,this.fireCustomEvent("selectionChanged",this.selectedPeople)}},{kind:"method",key:"renderErrorMessage",value:function renderErrorMessage(){return _`
      <div class="message-parent">
        <div label="search-error-text" aria-label="We didn't find any matches." class="search-error-text">
          We didn't find any matches.
        </div>
      </div>
    `}},{kind:"method",key:"renderLoadingMessage",value:function renderLoadingMessage(){return _`
      <div class="message-parent">
        <div label="search-error-text" aria-label="loading" class="loading-text">
          ......
        </div>
      </div>
    `}},{kind:"method",key:"renderSelectedPeople",value:function renderSelectedPeople(){let e,t="input-search-start";return this.selectedPeople.length>0?(t="input-search",e=_`
        ${this.selectedPeople.slice(0,this.selectedPeople.length).map(e=>_`
              <div class="people-person">
                ${this.renderTemplate("selected-person",{person:e},`selected-${e.id}`)||this.renderSelectedPerson(e)}
                <div class="CloseIcon" @click="${()=>this.removePerson(e)}">\uE711</div>
              </div>
            `)}
      `):e=null,_`
      <div class="people-selected-list">
        ${e}
        <div class="${t}">
          <input
            id="people-picker-input"
            class="people-selected-input"
            type="text"
            placeholder="Start typing a name"
            label="people-picker-input"
            aria-label="people-picker-input"
            role="input"
            .value="${this._userInput}"
            @keydown="${this.onUserKeyDown}"
            @keyup="${this.onUserKeyUp}"
          />
        </div>
      </div>
    `}},{kind:"method",key:"gainedFocus",value:function gainedFocus(){const e=this.renderRoot.querySelector(".people-list"),t=this.renderRoot.querySelector(".people-selected-input");t.focus(),t.select(),e&&e.setAttribute("style","display:block")}},{kind:"method",key:"lostFocus",value:function lostFocus(){const e=this.renderRoot.querySelector(".people-list");e&&e.setAttribute("style","display:none")}},{kind:"method",key:"renderHighlightText",value:function renderHighlightText(e){const t=e,n=t.displayName.toLowerCase().indexOf(this._userInput.toLowerCase());return-1!==n&&(0===n?(t.first="",t.highlight=t.displayName.slice(0,this._userInput.length),t.last=t.displayName.slice(this._userInput.length,t.displayName.length)):n===t.displayName.length?(t.first=t.displayName.slice(0,n),t.highlight=t.displayName.slice(n,t.displayName.length),t.last=""):(t.first=t.displayName.slice(0,n),t.highlight=t.displayName.slice(n,n+this._userInput.length),t.last=t.displayName.slice(n+this._userInput.length,t.displayName.length))),_`
      <div>
        <span class="people-person-text">${t.first}</span
        ><span class="people-person-text highlight-search-text">${t.highlight}</span
        ><span class="people-person-text">${t.last}</span>
      </div>
    `}},{kind:"method",key:"renderPeopleList",value:function renderPeopleList(){let e;if(this.showLoading)e=this.renderTemplate("loading",null,"loading")||this.renderLoadingMessage();else if(this.people){const t=this.people.slice(0,this.showMax);!this.isLoading&&0===t.length&&this._userInput.length>0?e=this.renderTemplate("error",null,"error")||this.renderErrorMessage():(t[0]&&(t[0].isSelected="fill"),e=this.renderPeople(t))}return _`
      <div class="people-list">
        ${e}
      </div>
    `}},{kind:"method",key:"renderPeople",value:function renderPeople(e){return _`
      ${qe(e,e=>e.id,e=>_`
          <li
            class="list-person ${"fill"===e.isSelected?"people-person-list-fill":"people-person-list"}"
            @click="${()=>this.addPerson(e)}"
          >
            ${this.renderTemplate("person",{person:e},e.id)||this.renderPerson(e)}
          </li>
        `)}
    `}},{kind:"method",key:"renderPerson",value:function renderPerson(e){return _`
      <mgt-person .personDetails=${e} .personImage=${"@"}></mgt-person>
      <div class="people-person-text-area" id="${e.displayName}">
        ${this.renderHighlightText(e)}
        <span class="people-person-job-title">${e.jobTitle}</span>
      </div>
    `}},{kind:"method",key:"renderSelectedPerson",value:function renderSelectedPerson(e){return _`
      <mgt-person
        class="selected-person"
        .personDetails=${e}
        .personImage=${"@"}
        show-name
        person-card="click"
      ></mgt-person>
    `}}]}},MgtTemplatedComponent);const Be=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

:host .people-list,
mgt-people .people-list {
  list-style-type: none;
  margin: var(--list-margin, 8px 4px 8px 8px);
  padding: 0;
  font-family: var(--default-font-family, "Segoe UI");
  font-style: normal;
  font-weight: normal;
  display: flex;
  align-items: center; }

:host .people-person,
mgt-people .people-person {
  margin: var(--avatar-margin, 0 4px 0 0);
  display: flex; }

:host .overflow span,
mgt-people .overflow span {
  vertical-align: middle; }

`];let Ve,Ge=_decorate([V("mgt-people")],function(t,n){return{F:class MgtPeople extends n{constructor(...e){super(...e),t(this)}},d:[{kind:"get",static:!0,key:"styles",value:function styles(){return Be}},{kind:"field",decorators:[property({attribute:"people",type:Object})],key:"people",value:()=>null},{kind:"field",decorators:[property({attribute:"show-max",type:Number})],key:"showMax",value:()=>3},{kind:"field",decorators:[property({attribute:"group-id",type:String})],key:"groupId",value:void 0},{kind:"field",decorators:[property({attribute:"user-ids",converter:(e,t)=>e.split(",")})],key:"userIds",value:void 0},{kind:"field",decorators:[property({attribute:"person-card",converter:(e,t)=>(e=e.toLowerCase(),void 0===Pe[e]?Pe.hover:Pe[e])})],key:"personCardInteraction",value:()=>Pe.hover},{kind:"field",key:"_firstUpdated",value:()=>!1},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._firstUpdated=!0,Providers.onProviderUpdated(()=>this.loadPeople()),this.loadPeople()}},{kind:"method",key:"render",value:function render(){return this.people?this.people.length?this.renderTemplate("default",{people:this.people})||_`
            <ul class="people-list">
              ${this.people.slice(0,this.showMax).map(e=>_`
                    <li class="people-person">
                      ${this.renderTemplate("person",{person:e},e.displayName)||this.renderPerson(e)}
                    </li>
                  `)}
              ${this.people.length>this.showMax?this.renderTemplate("overflow",{extra:this.people.length-this.showMax,max:this.showMax,people:this.people})||_`
                    <li class="overflow"><span>+${this.people.length-this.showMax}<span></li>
                  `:null}
            </ul>
          `:this.renderTemplate("no-people",null)||_``:this.renderTemplate("no-data",null)||_``}},{kind:"method",key:"loadPeople",value:async function loadPeople(){if(this._firstUpdated&&!this.people){const t=Providers.globalProvider;if(t&&t.state===e.ProviderState.SignedIn){const e=Providers.globalProvider.graph;this.groupId?this.people=await e.getPeopleFromGroup(this.groupId):this.userIds?this.people=await Promise.all(this.userIds.map(async t=>await e.getUser(t))):this.people=await e.getPeople()}}}},{kind:"method",key:"renderPerson",value:function renderPerson(e){return _`
      <mgt-person
        .personDetails=${e}
        .personImage=${"@"}
        .personCardInteraction=${this.personCardInteraction}
      ></mgt-person>
    `}}]}},MgtTemplatedComponent);function getSvg(e,t){switch(e){case Ve.Phone:return _`
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.7034 14.5117L18.7138 14.5161L18.7243 14.5202C18.9341 14.6021 19.115 14.7202 19.2727 14.8779L21.7446 17.3486C21.9023 17.5062 22.0205 17.6869 22.1023 17.8965L22.1064 17.907L22.1109 17.9175C22.1978 18.1219 22.2414 18.3353 22.2414 18.564C22.2414 18.7927 22.1977 19.0122 22.1083 19.2279L22.1082 19.2278L22.1047 19.2367C22.0237 19.439 21.9055 19.6186 21.7446 19.7794L21.5873 19.9366C21.1876 20.3361 20.8232 20.6893 20.4938 20.9965C20.1952 21.2751 19.8884 21.5061 19.5739 21.6927C19.2738 21.8634 18.9328 21.999 18.5464 22.0956C18.1736 22.1887 17.703 22.2414 17.1236 22.2414C16.2669 22.2414 15.3768 22.1079 14.4508 21.8345C13.5137 21.5577 12.5751 21.1731 11.635 20.6782C10.6999 20.182 9.77555 19.5905 8.86223 18.9024C7.95477 18.2129 7.09416 17.4617 6.28031 16.6485C5.47314 15.827 4.72822 14.9625 4.04528 14.0548C3.36417 13.1422 2.77981 12.2186 2.2907 11.2841C1.80227 10.3435 1.42465 9.41241 1.15509 8.49067C0.888472 7.57901 0.758621 6.70744 0.758621 5.87354C0.758621 5.2942 0.807601 4.82667 0.894029 4.45987C0.990209 4.08378 1.12524 3.74754 1.2962 3.4474C1.48349 3.13198 1.71123 2.8291 1.98168 2.53898C2.28907 2.2098 2.6423 1.84565 3.04191 1.44622L3.22169 1.26654C3.38571 1.1026 3.57043 0.978071 3.77975 0.889152C3.98223 0.803141 4.19935 0.758621 4.4382 0.758621C4.66717 0.758621 4.88079 0.802229 5.08542 0.889152L5.08541 0.889179L5.09158 0.891738C5.30795 0.981409 5.49379 1.10569 5.65472 1.26654L8.12663 3.73724C8.28435 3.89489 8.4025 4.07557 8.48434 4.28518L8.48846 4.29572L8.49288 4.30613C8.5798 4.51055 8.6234 4.72393 8.6234 4.95264C8.6234 5.19331 8.58291 5.38399 8.51772 5.53744C8.4302 5.73489 8.32445 5.9107 8.20135 6.0673C8.0676 6.23744 7.91909 6.39189 7.75539 6.53127L7.75 6.53587L7.74469 6.54056C7.53965 6.72185 7.34847 6.90089 7.17157 7.0777C6.97623 7.27294 6.80449 7.47975 6.66073 7.69906C6.46768 7.98486 6.36497 8.31044 6.36497 8.65869C6.36497 9.14561 6.54689 9.58161 6.89067 9.92523L13.0817 16.1132C13.4255 16.4568 13.8615 16.6385 14.3483 16.6385C14.6963 16.6385 15.0216 16.5361 15.3073 16.3434C15.527 16.1997 15.734 16.0279 15.9296 15.8325C16.1065 15.6556 16.2856 15.4646 16.467 15.2596L16.4717 15.2543L16.4763 15.2489C16.6157 15.0853 16.7702 14.9369 16.9405 14.8032C17.0972 14.6801 17.2731 14.5744 17.4707 14.4869C17.6244 14.4217 17.8153 14.3812 18.0562 14.3812C18.2851 14.3812 18.4988 14.4248 18.7034 14.5117Z"
            stroke="#3078CD"
            stroke-width="1.51724"
          />
        </svg>
      `;case Ve.Email:return _`
        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.2759 0.275862V15.4483H0V0.275862H24.2759ZM1.69504 1.7931L12.1379 7.02047L22.5808 1.7931H1.69504ZM22.7586 13.931V3.40517L12.1379 8.70366L1.51724 3.40517V13.931H22.7586Z"
            fill="#3078CD"
          />
        </svg>
      `;case Ve.Chat:return _`
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
          <path d="M15.173 6.20106H4.83114V4.69376H15.173V6.20106Z" fill="#3078CD" />
          <path d="M4.83114 11.1766H11.3545V9.66933H4.83114V11.1766Z" fill="#3078CD" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.100098 2.39808C0.100098 1.18556 1.06777 0.199951 2.2857 0.199951H18.5145C19.7324 0.199951 20.7001 1.18556 20.7001 2.39808V20.2133C20.7001 20.9187 20.1975 21.4177 19.7305 21.6375C19.2562 21.8608 18.5192 21.9305 17.9793 21.3859L17.9397 21.346L15.1804 17.5802L15.162 17.5491C14.9874 17.2557 14.8758 17.2036 14.7939 17.176C14.6395 17.1241 14.4252 17.1152 13.9162 17.115C10.113 17.2743 5.24741 17.2819 2.42987 16.6132L2.36553 16.5979L2.30484 16.5717C1.77324 16.3418 1.21866 16.0979 0.815136 15.7451C0.347187 15.336 0.100098 14.8053 0.100098 14.1144V2.39808ZM2.2857 1.70725C1.91258 1.70725 1.6074 2.00562 1.6074 2.39808V14.1144C1.6074 14.3865 1.67852 14.4978 1.80722 14.6103C1.99344 14.7731 2.29809 14.9252 2.84155 15.1615C5.44205 15.761 10.0684 15.7681 13.8688 15.6084L13.8846 15.6077L13.968 15.6077C14.3859 15.6073 14.8562 15.6068 15.2743 15.7473C15.7779 15.9167 16.1388 16.2546 16.4378 16.746L19.0364 20.2925C19.0505 20.2891 19.0681 20.2833 19.0885 20.2738C19.1369 20.251 19.1718 20.2199 19.1892 20.1969L19.1928 20.192V2.39808C19.1928 2.00562 18.8876 1.70725 18.5145 1.70725H2.2857Z"
            fill="#3078CD"
          />
        </svg>
      `;case Ve.SmallPhone:return _`
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M13.848 10.6702L13.8548 10.6731L13.8618 10.6758C14.0247 10.7393 14.1654 10.8313 14.288 10.9537L16.115 12.7799C16.2376 12.9024 16.3295 13.0431 16.3931 13.2058L16.3958 13.2127L16.3987 13.2196C16.4662 13.3783 16.5 13.5441 16.5 13.7212C16.5 13.8983 16.4661 14.0685 16.397 14.2352L16.3969 14.2352L16.3946 14.241C16.3316 14.3983 16.2396 14.5379 16.115 14.6625L15.9988 14.7787L16.3522 15.1323L15.9988 14.7787C15.7029 15.0744 15.4331 15.3359 15.189 15.5636C14.9652 15.7724 14.7348 15.9459 14.4982 16.0862C14.271 16.2156 14.0136 16.3178 13.7229 16.3904C13.4413 16.4608 13.0882 16.5 12.6566 16.5C12.017 16.5 11.3533 16.4003 10.6638 16.1967C9.96713 15.991 9.26981 15.7052 8.57174 15.3378C7.87734 14.9693 7.19129 14.5303 6.51368 14.0197C5.84063 13.5084 5.20237 12.9512 4.59881 12.3481C4.00029 11.739 3.44789 11.0979 2.94143 10.4248C2.43615 9.74777 2.00243 9.06232 1.63929 8.36852C1.2766 7.67005 0.995933 6.97818 0.795483 6.29276C0.596975 5.61399 0.5 4.96403 0.5 4.34131C0.5 3.90971 0.536484 3.55902 0.601835 3.28194C0.674224 2.99869 0.776112 2.74472 0.905573 2.51755C1.0464 2.28029 1.21749 2.0528 1.42033 1.83521C1.64811 1.59128 1.90969 1.32162 2.20545 1.026L2.33832 0.893191C2.46501 0.766564 2.60804 0.670106 2.76999 0.601313C2.92742 0.534437 3.09601 0.5 3.28041 0.5C3.4577 0.5 3.62368 0.533835 3.78253 0.601313L3.78252 0.601331L3.78659 0.603017C3.95378 0.672306 4.09785 0.768603 4.2225 0.89319L6.04956 2.71936C6.1721 2.84184 6.26406 2.9825 6.3276 3.14523L6.33031 3.15217L6.33322 3.15903C6.40071 3.31773 6.43454 3.48354 6.43454 3.66064C6.43454 3.84568 6.40334 3.99501 6.3514 4.11708C6.28472 4.26761 6.20393 4.40206 6.1096 4.52205C6.00826 4.65097 5.89569 4.76805 5.77161 4.87369L5.77155 4.87363L5.76455 4.87982C5.61383 5.01309 5.47343 5.14457 5.34365 5.27429C5.20174 5.41613 5.07747 5.56589 4.97373 5.72421C4.83747 5.92576 4.76527 6.15476 4.76527 6.3999C4.76527 6.7436 4.89326 7.05044 5.13603 7.29309L9.71199 11.8668C9.95476 12.1095 10.2616 12.2373 10.6053 12.2373C10.8504 12.2373 11.0793 12.1652 11.2809 12.029C11.4393 11.9254 11.5892 11.8012 11.7311 11.6593C11.8609 11.5296 11.9924 11.3893 12.1258 11.2386L12.1258 11.2387L12.1319 11.2316C12.2376 11.1075 12.3547 10.995 12.4837 10.8937C12.6038 10.7994 12.7383 10.7186 12.889 10.652C13.0112 10.6 13.1607 10.5688 13.3459 10.5688C13.5232 10.5688 13.6891 10.6027 13.848 10.6702Z"
            stroke=${t}
          />
        </svg>
      `;case Ve.SmallEmail:return _`
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 0.1875V10.8125H0V0.1875H17ZM1.18701 1.25L8.5 4.91064L15.813 1.25H1.18701ZM15.9375 9.75V2.37891L8.5 6.08936L1.0625 2.37891V9.75H15.9375Z"
            fill=${t}
          />
        </svg>
      `;case Ve.SmallChat:return _`
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M12.3072 4.72225H4.27469V3.53616H12.3072V4.72225Z" fill="#666666" />
          <path d="M4.27469 8.63751H9.34136V7.45142H4.27469V8.63751Z" fill="#666666" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.600098 1.7297C0.600098 0.775576 1.35168 0 2.29765 0H14.9025C15.8485 0 16.6001 0.775576 16.6001 1.7297V15.7485C16.6001 16.3035 16.2097 16.6961 15.847 16.8691C15.4786 17.0448 14.9062 17.0997 14.4868 16.6712L14.4561 16.6398L12.313 13.6764L12.2986 13.652C12.1631 13.4211 12.0763 13.3801 12.0127 13.3584C11.8928 13.3176 11.7264 13.3106 11.331 13.3104C8.37707 13.4358 4.59801 13.4417 2.40963 12.9155L2.35966 12.9035L2.31252 12.8828C1.89963 12.702 1.46889 12.51 1.15547 12.2324C0.792012 11.9105 0.600098 11.4929 0.600098 10.9492V1.7297ZM2.29765 1.18609C2.00785 1.18609 1.77082 1.42087 1.77082 1.7297V10.9492C1.77082 11.1633 1.82606 11.2509 1.92602 11.3395C2.07065 11.4676 2.30728 11.5872 2.72938 11.7732C4.74919 12.245 8.34249 12.2506 11.2942 12.1249L11.3065 12.1243L11.3713 12.1243C11.6959 12.124 12.0612 12.1236 12.3859 12.2342C12.777 12.3675 13.0574 12.6333 13.2896 13.02L15.3079 15.8108C15.3189 15.8081 15.3326 15.8035 15.3484 15.796C15.3859 15.7781 15.4131 15.7536 15.4266 15.7355L15.4294 15.7317V1.7297C15.4294 1.42087 15.1923 1.18609 14.9025 1.18609H2.29765Z"
            fill=${t}
          />
        </svg>
      `;case Ve.SmallLocation:return _`
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
          <path
            d="M9.18115 1.73047L8.92657 2.16084L8.93112 2.16346L9.18115 1.73047ZM10.252 2.56055L9.89534 2.91112L9.90143 2.91711L10.252 2.56055ZM11.082 3.63135L10.649 3.8814L10.6517 3.88592L11.082 3.63135ZM11.6714 7.4082L11.1886 7.27793L11.1872 7.28326L11.6714 7.4082ZM11.2812 8.4375L10.834 8.21389L11.2812 8.4375ZM6.5 18L6.05279 18.2236L6.5 19.118L6.94721 18.2236L6.5 18ZM1.71875 8.4375L2.16596 8.21389L1.71875 8.4375ZM1.32031 7.4082L0.83561 7.5313L0.83811 7.54042L1.32031 7.4082ZM1.90967 3.63135L1.4793 3.37676L1.47668 3.38131L1.90967 3.63135ZM2.73975 2.56055L2.38619 2.20699L2.73975 2.56055ZM3.81885 1.73047L4.0689 2.16348L4.07342 2.16081L3.81885 1.73047ZM7.32178 8.27148L7.12599 7.81139L7.12241 7.81295L7.32178 8.27148ZM8.45898 7.14258L8.91753 7.34195L8.91906 7.33836L8.45898 7.14258ZM8.45898 5.49072L7.99889 5.68651L8.00045 5.69009L8.45898 5.49072ZM7.32178 4.35352L7.12241 4.81206L7.126 4.81359L7.32178 4.35352ZM5.66992 4.35352L5.47414 3.89342L5.47056 3.89498L5.66992 4.35352ZM4.54102 5.49072L4.99956 5.69009L5.00109 5.6865L4.54102 5.49072ZM4.54102 7.14258L4.08092 7.33836L4.08248 7.34194L4.54102 7.14258ZM5.66992 8.27148L5.47055 8.73003L5.47414 8.73156L5.66992 8.27148ZM6.5 1.5C6.94286 1.5 7.36772 1.55779 7.7761 1.67234L8.04617 0.709497C7.54699 0.569484 7.0311 0.5 6.5 0.5V1.5ZM7.7761 1.67234C8.18934 1.78825 8.57233 1.95125 8.92658 2.16081L9.43572 1.30013C9.00416 1.04484 8.54048 0.848145 8.04617 0.709497L7.7761 1.67234ZM8.93112 2.16346C9.28459 2.36758 9.60576 2.61644 9.89539 2.91107L10.6085 2.21003C10.2562 1.85166 9.86352 1.54713 9.43119 1.29748L8.93112 2.16346ZM9.90143 2.91711C10.1961 3.20674 10.4449 3.52791 10.649 3.88138L11.515 3.38131C11.2654 2.94898 10.9608 2.55628 10.6025 2.20398L9.90143 2.91711ZM10.6517 3.88592C10.8612 4.24017 11.0243 4.62316 11.1402 5.0364L12.103 4.76633C11.9644 4.27202 11.7677 3.80834 11.5124 3.37678L10.6517 3.88592ZM11.1402 5.0364C11.2547 5.44478 11.3125 5.86964 11.3125 6.3125H12.3125C12.3125 5.7814 12.243 5.26551 12.103 4.76633L11.1402 5.0364ZM11.3125 6.3125C11.3125 6.65287 11.2706 6.97415 11.1887 7.27794L12.1541 7.53846C12.2603 7.14499 12.3125 6.7358 12.3125 6.3125H11.3125ZM11.1872 7.28326C11.1082 7.58959 10.9911 7.89972 10.834 8.21389L11.7285 8.66111C11.9145 8.28908 12.0575 7.91301 12.1555 7.53314L11.1872 7.28326ZM10.834 8.21389L6.05279 17.7764L6.94721 18.2236L11.7285 8.66111L10.834 8.21389ZM6.94721 17.7764L2.16596 8.21389L1.27154 8.66111L6.05279 18.2236L6.94721 17.7764ZM2.16596 8.21389C2.00791 7.89778 1.8873 7.58521 1.80251 7.27599L0.83811 7.54042C0.941476 7.9174 1.08649 8.29102 1.27154 8.66111L2.16596 8.21389ZM1.80493 7.28513C1.72721 6.97912 1.6875 6.65538 1.6875 6.3125H0.6875C0.6875 6.7333 0.736331 7.14003 0.835697 7.53128L1.80493 7.28513ZM1.6875 6.3125C1.6875 5.86964 1.74529 5.44478 1.85984 5.0364L0.896997 4.76633C0.756984 5.26551 0.6875 5.7814 0.6875 6.3125H1.6875ZM1.85984 5.0364C1.97628 4.62127 2.13745 4.23675 2.34266 3.88138L1.47668 3.38131C1.22811 3.81175 1.03512 4.27391 0.896997 4.76633L1.85984 5.0364ZM2.34001 3.88592C2.55121 3.52889 2.80215 3.20525 3.0933 2.9141L2.38619 2.20699C2.03541 2.55777 1.73297 2.948 1.47933 3.37678L2.34001 3.88592ZM3.0933 2.9141C3.38946 2.61794 3.71448 2.36812 4.06888 2.16346L3.56881 1.29748C3.13741 1.5466 2.74303 1.85016 2.38619 2.20699L3.0933 2.9141ZM4.07342 2.16081C4.42767 1.95125 4.81066 1.78825 5.2239 1.67234L4.95383 0.709497C4.45952 0.848145 3.99583 1.04484 3.56428 1.30013L4.07342 2.16081ZM5.2239 1.67234C5.63228 1.55779 6.05714 1.5 6.5 1.5V0.5C5.9689 0.5 5.45301 0.569484 4.95383 0.709497L5.2239 1.67234ZM6.5 8.9375C6.85794 8.9375 7.20015 8.86958 7.52114 8.73002L7.12241 7.81295C6.93429 7.89474 6.72865 7.9375 6.5 7.9375V8.9375ZM7.51756 8.73156C7.83465 8.59663 8.11557 8.40892 8.356 8.16849L7.64889 7.46139C7.50194 7.60834 7.32908 7.72499 7.126 7.81141L7.51756 8.73156ZM8.356 8.16849C8.59464 7.92985 8.78217 7.65324 8.91752 7.34194L8.00045 6.94321C7.91444 7.14103 7.79761 7.31266 7.64889 7.46139L8.356 8.16849ZM8.91906 7.33836C9.05708 7.01402 9.125 6.67049 9.125 6.3125H8.125C8.125 6.5411 8.08225 6.75095 7.99891 6.9468L8.91906 7.33836ZM9.125 6.3125C9.125 5.95456 9.05708 5.61235 8.91752 5.29136L8.00045 5.69009C8.08224 5.87821 8.125 6.08385 8.125 6.3125H9.125ZM8.91906 5.29495C8.78413 4.97784 8.59642 4.69693 8.356 4.45651L7.64889 5.16361C7.79584 5.31056 7.91249 5.48342 7.99891 5.6865L8.91906 5.29495ZM8.356 4.45651C8.11557 4.21608 7.83465 4.02837 7.51756 3.89344L7.126 4.81359C7.32908 4.90001 7.50194 5.01666 7.64889 5.16361L8.356 4.45651ZM7.52114 3.89498C7.20015 3.75542 6.85794 3.6875 6.5 3.6875V4.6875C6.72865 4.6875 6.93429 4.73026 7.12241 4.81205L7.52114 3.89498ZM6.5 3.6875C6.14201 3.6875 5.79848 3.75542 5.47414 3.89344L5.8657 4.81359C6.06155 4.73025 6.2714 4.6875 6.5 4.6875V3.6875ZM5.47056 3.89498C5.15926 4.03033 4.88265 4.21786 4.64401 4.45651L5.35111 5.16361C5.49984 5.01489 5.67147 4.89806 5.86929 4.81205L5.47056 3.89498ZM4.64401 4.45651C4.40358 4.69693 4.21587 4.97784 4.08094 5.29495L5.00109 5.6865C5.08751 5.48342 5.20416 5.31056 5.35111 5.16361L4.64401 4.45651ZM4.08248 5.29136C3.94292 5.61235 3.875 5.95456 3.875 6.3125H4.875C4.875 6.08385 4.91776 5.87821 4.99955 5.69009L4.08248 5.29136ZM3.875 6.3125C3.875 6.67049 3.94292 7.01402 4.08094 7.33836L5.00109 6.9468C4.91775 6.75095 4.875 6.5411 4.875 6.3125H3.875ZM4.08248 7.34194C4.21783 7.65324 4.40536 7.92985 4.64401 8.16849L5.35111 7.46139C5.20239 7.31266 5.08556 7.14103 4.99955 6.94321L4.08248 7.34194ZM4.64401 8.16849C4.88265 8.40714 5.15926 8.59467 5.47056 8.73002L5.86929 7.81295C5.67147 7.72694 5.49984 7.61011 5.35111 7.46139L4.64401 8.16849ZM5.47414 8.73156C5.79848 8.86958 6.14201 8.9375 6.5 8.9375V7.9375C6.2714 7.9375 6.06155 7.89475 5.8657 7.81141L5.47414 8.73156Z"
            fill=${t}
          />
        </svg>
      `}}!function(e){e[e.Phone=0]="Phone",e[e.Email=1]="Email",e[e.Chat=2]="Chat",e[e.SmallPhone=3]="SmallPhone",e[e.SmallEmail=4]="SmallEmail",e[e.SmallChat=5]="SmallChat",e[e.SmallLocation=6]="SmallLocation"}(Ve||(Ve={}));const ze=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
:host .root {
  position: relative;
  width: 340px;
  background: #ffffff;
  box-shadow: 0px 0px 4.55172px rgba(0, 0, 0, 0.16);
  font-family: var(--default-font-family); }
  :host .root .default-view {
    display: flex;
    padding: 18px 14px; }
    :host .root .default-view mgt-person.person-image {
      --avatar-size-s: 75px; }
    :host .root .default-view .details {
      margin-left: 14px;
      line-height: 1.15; }
      :host .root .default-view .details .display-name {
        font-size: 27.3103px;
        color: #333333; }
      :host .root .default-view .details .job-title {
        font-size: 18.2069px;
        color: #767676;
        font-weight: 600; }
      :host .root .default-view .details .department {
        font-size: 15.1724px;
        color: #767676; }
      :host .root .default-view .details .base-icons {
        margin-top: 14px;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        max-width: 120px; }
        :host .root .default-view .details .base-icons .icon {
          margin: 0 22px 0 0;
          cursor: pointer; }
        :host .root .default-view .details .base-icons .icon:hover {
          opacity: 0.6; }
  :host .root .additional-details-container .additional-details-button {
    height: 28px;
    background: rgba(196, 196, 196, 0.1);
    text-align: center;
    position: relative; }
    :host .root .additional-details-container .additional-details-button .additional-details-svg {
      width: 50%;
      bottom: 0;
      top: 100%; }
  :host .root .additional-details-container .additional-details-button:hover {
    background-color: rgba(0, 0, 0, 0.068); }
  :host .root .additional-details-container .additional-details-info {
    margin: 0 0 0 20px;
    padding-bottom: 18px; }
    :host .root .additional-details-container .additional-details-info .contact-text {
      margin: 0 0 24px 0;
      font-weight: 600;
      font-size: 14px;
      color: #000000; }
    :host .root .additional-details-container .additional-details-info .additional-details-row {
      display: flex; }
      :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item {
        line-height: normal;
        font-style: normal;
        font-weight: normal;
        font-size: 15px; }
        :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .icons {
          text-align: left; }
          :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .icons .details-icon {
            margin: 0 0 10px 0;
            display: flex;
            flex-direction: row;
            align-items: center; }
        :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .data {
          display: block;
          margin: 0 0 0px 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 280px; }
        :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .normal-subtitle {
          padding-top: 2px; }
        :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .link-subtitle {
          color: #3078cd;
          cursor: pointer; }
        :host .root .additional-details-container .additional-details-info .additional-details-row .additional-details-item .link-subtitle:hover {
          opacity: 0.6; }
    :host .root .additional-details-container .additional-details-info .section-divider {
      width: 96%;
      height: 1px;
      background: #eaeaea; }

`];let We=_decorate([V("mgt-person-card")],function(t,n){class MgtPersonCard extends n{constructor(...e){super(...e),t(this)}}return{F:MgtPersonCard,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return ze}},{kind:"field",decorators:[property({attribute:"person-details",type:Object})],key:"personDetails",value:void 0},{kind:"field",decorators:[property({attribute:"person-image",type:String})],key:"personImage",value:void 0},{kind:"field",decorators:[property({attribute:"is-expanded",type:Boolean})],key:"isExpanded",value:()=>!1},{kind:"field",decorators:[property({attribute:"inherit-details",type:Boolean})],key:"inheritDetails",value:()=>!1},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,n){_get(_getPrototypeOf(MgtPersonCard.prototype),"attributeChangedCallback",this).call(this,e,t,n),"is-expanded"===e&&t!==n&&(this.isExpanded=!1)}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){Providers.onProviderUpdated(()=>this.loadData()),this.loadData()}},{kind:"method",key:"render",value:function render(){if(this.personDetails){const e=this.personDetails;let t,n;e.department&&(t=_`
          <div class="department">${e.department}</div>
        `),e.jobTitle&&(n=_`
          <div class="job-title">${e.jobTitle}</div>
        `);const r=this.getImage();return _`
        <div class="root" @click=${this.handleClose}>
          <div class="default-view">
            ${this.renderTemplate("default",{person:this.personDetails,personImage:r})||_`
                <mgt-person
                  class="person-image"
                  .personDetails=${this.personDetails}
                  .personImage=${r}
                ></mgt-person>
                <div class="details">
                  <div class="display-name">${e.displayName}</div>
                  ${n} ${t}
                  <div class="base-icons">
                    ${this.renderIcons()}
                  </div>
                </div>
              `}
          </div>
          <div class="additional-details-container">
            ${this.renderAdditionalDetails()}
          </div>
        </div>
      `}}},{kind:"method",key:"renderIcons",value:function renderIcons(){if(!0===this.isExpanded)return _``;{const e=this.personDetails;let t,n,r;return e.mailNickname&&(t=_`
          <div class="icon" @click=${this._chatUser}>
            ${getSvg(Ve.Chat,"#666666")}
          </div>
        `),getEmailFromGraphEntity(e)&&(n=_`
          <div class="icon" @click=${this._emailUser}>
            ${getSvg(Ve.Email,"#666666")}
          </div>
        `),e.businessPhones&&e.businessPhones.length>0&&(r=_`
          <div class="icon" @click=${this._callUser}>
            ${getSvg(Ve.Phone,"#666666")}
          </div>
        `),_`
        ${t} ${n} ${r}
      `}}},{kind:"method",key:"renderAdditionalDetails",value:function renderAdditionalDetails(){if(!0===this.isExpanded){const e=this.personDetails;let t,n,r,o;e.businessPhones&&e.businessPhones.length>0&&(t=_`
          <div class="details-icon" @click=${this._callUser}>
            ${getSvg(Ve.SmallPhone,"#666666")}
            <span class="link-subtitle data">${e.businessPhones[0]}</span>
          </div>
        `),getEmailFromGraphEntity(e)&&(n=_`
          <div class="details-icon" @click=${this._emailUser}>
            ${getSvg(Ve.SmallEmail,"#666666")}
            <span class="link-subtitle data">${getEmailFromGraphEntity(e)}</span>
          </div>
        `),e.mailNickname&&(o=_`
          <div class="details-icon" @click=${this._chatUser}>
            ${getSvg(Ve.SmallChat,"#666666")}
            <span class="link-subtitle data">${e.mailNickname}</span>
          </div>
        `),e.officeLocation&&(r=_`
          <div class="details-icon">
            ${getSvg(Ve.SmallLocation,"#666666")}<span class="normal-subtitle data">${e.officeLocation}</span>
          </div>
        `);const i=this.templates&&this.templates["additional-details"];return _`
        <div class="additional-details-info">
          <div class="contact-text">Contact</div>
          <div class="additional-details-row">
            <div class="additional-details-item">
              <div class="icons">
                ${o} ${n} ${t} ${r}
              </div>
              ${i?_`
                    <div class="section-divider"></div>
                    <div class="custom-section">
                      ${this.renderTemplate("additional-details",{person:this.personDetails,personImage:this.getImage()})}
                    </div>
                  `:null}
            </div>
          </div>
        </div>
      `}return _`
        <div class="additional-details-button" @click=${this._showAdditionalDetails}>
          <svg
            class="additional-details-svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 7L8.24324 13.7568L1.24324 6.75676" stroke="#3078CD" />
          </svg>
        </div>
      `}},{kind:"method",key:"_showAdditionalDetails",value:function _showAdditionalDetails(e){e.stopPropagation();const t=this.renderRoot.querySelector(".root");t&&t.animate&&t.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0}},{kind:"method",key:"_callUser",value:function _callUser(e){const t=this.personDetails;let n;t.businessPhones&&t.businessPhones.length>0&&(n=t.businessPhones[0]),e.stopPropagation(),window.open("tel:"+n,"_blank")}},{kind:"method",key:"_emailUser",value:function _emailUser(e){const t=this.personDetails;let n;getEmailFromGraphEntity(t)&&(n=getEmailFromGraphEntity(t)),e.stopPropagation(),window.open("mailto:"+n,"_blank")}},{kind:"method",key:"_chatUser",value:function _chatUser(e){const t=this.personDetails;let n;t.mailNickname&&(n=t.mailNickname),e.stopPropagation(),window.open("sip:"+n,"_blank")}},{kind:"method",key:"loadData",value:async function loadData(){if(this.inheritDetails){let e=this.parentElement;for(;e&&"MGT-PERSON"!==e.tagName;)e=e.parentElement;e&&e.personDetails&&(this.personDetails=e.personDetails,this.personImage=e.personImage)}if(this.personDetails)return;const t=Providers.globalProvider;t&&(t.state,e.ProviderState.SignedIn)}},{kind:"method",key:"handleClose",value:function handleClose(e){e.stopPropagation()}},{kind:"method",key:"getImage",value:function getImage(){return this.personImage&&"@"!==this.personImage?this.personImage:this.personDetails&&this.personDetails.personImage?this.personDetails.personImage:null}}]}},MgtTemplatedComponent);const Ze=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
mgt-tasks,
:host {
  font-family: var(--default-font-family, "Segoe UI");
  display: flex;
  flex-direction: column; }

mgt-tasks .TaskIcon,
:host .TaskIcon {
  font-family: 'FabricMDL2Icons';
  text-align: center;
  justify-self: center;
  align-content: center;
  align-self: center;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; }

mgt-tasks .Header,
:host .Header {
  padding: var(--tasks-header-padding, 0px 10px 0 10px);
  margin: var(--tasks-header-margin, 0 0 10px 0); }

mgt-tasks .TaskIcon.Divider,
:host .TaskIcon.Divider {
  vertical-align: initial;
  margin: 0 12px;
  font-size: 16px; }

mgt-tasks .Header .PlannerTitle,
:host .Header .PlannerTitle {
  padding: var(--tasks-title-padding, 0px 0px 0px 0px);
  display: flex;
  align-items: center;
  align-content: center; }

mgt-tasks select,
:host select {
  font-family: var(--default-font-family, "Segoe UI");
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer; }

mgt-tasks select::-ms-expand,
:host select::-ms-expand {
  display: none; }

mgt-tasks .PlannerTitle select,
:host .PlannerTitle select,
mgt-tasks .Header .PlannerTitle .PlanTitle,
:host .Header .PlannerTitle .PlanTitle {
  font-family: var(--default-font-family, "Segoe UI");
  font-size: var(--tasks-plan-title-font-size, 1.1em);
  padding: var(--tasks-plan-title-padding, 5px); }

mgt-tasks .Header .AddBar,
:host .Header .AddBar {
  display: flex; }

mgt-tasks .Header .AddBar .AddBarItem,
:host .Header .AddBar .AddBarItem {
  flex: 1 1 auto; }

mgt-tasks .Header .NewTaskDue,
:host .Header .NewTaskDue {
  display: flex; }

mgt-tasks .Header .NewTaskDue input,
:host .Header .NewTaskDue input {
  flex: 1 1 auto; }

mgt-tasks .Header .TitleCont,
:host .Header .TitleCont {
  flex: 1 1 auto;
  height: var(--tasks-new-button-height, 34px); }

mgt-tasks .Header .NewTaskButton,
:host .Header .NewTaskButton {
  flex: 0 0 auto;
  display: inline-block;
  width: var(--task-new-button-width, 90px);
  height: var(--tasks-new-button-height, 32px);
  max-width: 90px;
  min-width: 90px;
  line-height: 200%;
  text-align: center;
  align-content: center;
  align-self: center;
  vertical-align: middle;
  justify-self: flex-end;
  background: var(--tasks-new-button-background, #0078d4);
  border: var(--tasks-new-button-border, solid 1px rgba(0, 0, 0, 0));
  color: var(--tasks-new-button-color, #ffffff);
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer; }

mgt-tasks .Header .NewTaskButton:hover,
:host .Header .NewTaskButton:hover {
  background: var(--tasks-new-button-hover-background, #0091ff); }

mgt-tasks .Header .NewTaskButton:active,
:host .Header .NewTaskButton:active {
  background: var(--tasks-new-button-active-background, #00508d); }

mgt-tasks .Task,
:host .Task {
  margin: var(--task-margin, 0 10px 10px 10px);
  padding: var(--task-padding, 0 0 0 0);
  box-shadow: var(--task-box-shadow, 0px 2px 8px rgba(0, 0, 0, 0.092));
  background: var(--task-background, #ffffff);
  position: relative; }
  mgt-tasks .Task .TaskContent,
  :host .Task .TaskContent {
    display: flex;
    flex-direction: row; }
    mgt-tasks .Task .TaskContent .TaskDetailsContainer,
    :host .Task .TaskContent .TaskDetailsContainer {
      color: var(--task-detail-color, #767676);
      margin: 20px 0 18px 0;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto; }
      mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskTitle,
      :host .Task .TaskContent .TaskDetailsContainer .TaskTitle {
        flex: 1 0 auto;
        color: #333333;
        max-width: 370px;
        width: 100%;
        font-size: 20px;
        font-weight: 300; }
      mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails,
      :host .Task .TaskContent .TaskDetailsContainer .TaskDetails {
        display: flex;
        margin: 10px 0 0 0;
        font-size: 12px;
        font-weight: 400;
        align-items: center;
        flex-wrap: wrap; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails svg,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails svg {
          vertical-align: middle;
          margin-right: 4px; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails span,
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails select,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails span,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails select {
          vertical-align: middle; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails .TaskDetail,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails .TaskDetail {
          margin: 0 20px 0 0; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails .TaskIcon,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails .TaskIcon {
          color: #333333;
          margin: var(--task-detail-icon-margin 0 8px 0 0); }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails mgt-people,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails mgt-people {
          color: var(--task-detail-color, black);
          font-size: 16px; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails mgt-person,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails mgt-person {
          display: inline-block; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails .Picker,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails .Picker {
          background-color: white;
          box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
          -webkit-background-clip: padding-box;
          -moz-background-clip: padding-box;
          background-clip: padding-box;
          width: 350px;
          color: var(--task-detail-color, black);
          margin: 8px; }
          mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails .Picker mgt-people-picker,
          :host .Task .TaskContent .TaskDetailsContainer .TaskDetails .Picker mgt-people-picker {
            --separator-margin: 0px 10px 0px 10px; }
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails input,
        mgt-tasks .Task .TaskContent .TaskDetailsContainer .TaskDetails select,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails input,
        :host .Task .TaskContent .TaskDetailsContainer .TaskDetails select {
          color: var(--task-detail-color, #767676);
          font-size: 0.9em; }
  mgt-tasks .Task .TaskHeader,
  :host .Task .TaskHeader {
    display: flex;
    justify-content: center;
    color: var(--task-header-color, #333333);
    margin: var(--task-header-margin, 0 0 0 10px); }
  mgt-tasks .Task.ReadOnly .TaskCheckContainer,
  :host .Task.ReadOnly .TaskCheckContainer {
    cursor: default; }
  mgt-tasks .Task.Complete,
  :host .Task.Complete {
    background: var(--task-complete-background, #f6f6f6);
    border-color: var(--task-complete-border, #e2e2e2); }
    mgt-tasks .Task.Complete .TaskHeader,
    :host .Task.Complete .TaskHeader {
      color: var(--task-complete-header-color, #959595); }
    mgt-tasks .Task.Complete .TaskDetails,
    :host .Task.Complete .TaskDetails {
      color: var(--task-complete-detail-color #b0b0b0); }
      mgt-tasks .Task.Complete .TaskDetails .TaskIcon,
      :host .Task.Complete .TaskDetails .TaskIcon {
        color: var(--task-compete-detail-icon-color, #959595); }
  mgt-tasks .Task.NewTask,
  :host .Task.NewTask {
    margin: var(--task-new-margin, var(--task-margin, 0 10px 10px 10px));
    display: flex;
    flex-direction: row; }
    mgt-tasks .Task.NewTask .SelfAssign,
    :host .Task.NewTask .SelfAssign {
      display: none; }
    mgt-tasks .Task.NewTask .AssignTo,
    :host .Task.NewTask .AssignTo {
      border: 0;
      background: none; }
    mgt-tasks .Task.NewTask .FakeCheckBox,
    :host .Task.NewTask .FakeCheckBox {
      width: 15px;
      height: 15px;
      cursor: pointer;
      margin: 0 5px 0 5px; }
      mgt-tasks .Task.NewTask .FakeCheckBox::after,
      :host .Task.NewTask .FakeCheckBox::after {
        font-family: 'FabricMDL2Icons';
        content: '\uE739'; }
      mgt-tasks .Task.NewTask .FakeCheckBox ~ :checked,
      :host .Task.NewTask .FakeCheckBox ~ :checked {
        font-family: 'FabricMDL2Icons';
        content: '\uE73A'; }
    mgt-tasks .Task.NewTask .TaskContent,
    :host .Task.NewTask .TaskContent {
      flex: 1 1 auto;
      align-content: center;
      vertical-align: middle;
      margin: 0 0 0 12px; }
      mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer,
      :host .Task.NewTask .TaskContent .TaskDetailsContainer {
        margin: 0; }
        mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle,
        :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle {
          max-width: none; }
          mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle input,
          :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle input {
            flex: 1 0 auto;
            font-family: var(--default-font-family, "Segoe UI");
            margin: var(--task-new-input-margin, 16px 0 0 0);
            padding: var(--task-new-input-padding, 7px);
            font-size: var(--task-new-input-font-size, 1em);
            border: var(--task-new-border, none);
            width: 100%; }
          mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle input:active,
          :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskTitle input:active {
            border: var(--task-new-input-active-border, none); }
        mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer hr,
        :host .Task.NewTask .TaskContent .TaskDetailsContainer hr {
          border: var(--task-new-line-border, solid 1px #d8d8d8);
          margin: 0; }
        mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails,
        :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails {
          flex: 1 0 auto;
          margin: 14px 0 14px 4px; }
          mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails .TaskPeople label,
          :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails .TaskPeople label {
            display: flex;
            align-content: center;
            align-items: center; }
          mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails select,
          mgt-tasks .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails input,
          :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails select,
          :host .Task.NewTask .TaskContent .TaskDetailsContainer .TaskDetails input {
            font-family: var(--default-font-family, "Segoe UI");
            border: var(--task-new-select-border, none);
            padding: 0 10px; }
    mgt-tasks .Task.NewTask .TaskAddButtonContainer,
    :host .Task.NewTask .TaskAddButtonContainer {
      flex: 0 0 auto;
      display: flex;
      align-content: center;
      align-items: center; }
      mgt-tasks .Task.NewTask .TaskAddButtonContainer .TaskAdd,
      mgt-tasks .Task.NewTask .TaskAddButtonContainer .TaskCancel,
      :host .Task.NewTask .TaskAddButtonContainer .TaskAdd,
      :host .Task.NewTask .TaskAddButtonContainer .TaskCancel {
        height: 100%;
        max-width: 50px;
        min-width: 50px;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        color: white; }
      mgt-tasks .Task.NewTask .TaskAddButtonContainer .TaskAdd,
      :host .Task.NewTask .TaskAddButtonContainer .TaskAdd {
        background: var(--task-new-add-button-background, #0078d4); }
      mgt-tasks .Task.NewTask .TaskAddButtonContainer .TaskCancel,
      :host .Task.NewTask .TaskAddButtonContainer .TaskCancel {
        font-family: var(--default-font-family, "Segoe UI");
        color: var(--task-new-cancel-button-color, gray);
        margin: 0px 20px 0px 32px; }
      mgt-tasks .Task.NewTask .TaskAddButtonContainer.Disabled .TaskAdd,
      :host .Task.NewTask .TaskAddButtonContainer.Disabled .TaskAdd {
        background: var(--task-new-add-button-disabled-background, #eaeaea);
        cursor: default; }
  mgt-tasks .Task .TaskCheckContainer,
  :host .Task .TaskCheckContainer {
    font-family: 'FabricMDL2Icons';
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 50%;
    flex: 0 0 auto;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    margin: 20px 10px 20px 20px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; }
    mgt-tasks .Task .TaskCheckContainer.Complete .TaskCheck,
    :host .Task .TaskCheckContainer.Complete .TaskCheck {
      background: #00b294;
      border-color: #00b294;
      display: flex;
      align-items: center;
      align-content: center;
      justify-items: center;
      justify-content: center; }
  mgt-tasks .Task .TaskCheck,
  :host .Task .TaskCheck {
    font-family: 'FabricMDL2Icons';
    display: inline-block;
    width: 22px;
    height: 22px;
    text-align: center;
    border-radius: 50%;
    border: solid 1px #666666;
    flex: 0 0 auto;
    color: white;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; }
    mgt-tasks .Task .TaskCheck.Loading,
    :host .Task .TaskCheck.Loading {
      color: black;
      animation: rotateIcon 2s infinite linear; }
  mgt-tasks .Task.LoadingTask .TaskCheckContainer,
  :host .Task.LoadingTask .TaskCheckContainer {
    cursor: default; }
  mgt-tasks .Task.LoadingTask .TaskCheck,
  :host .Task.LoadingTask .TaskCheck {
    background: #f2f2f2;
    border-color: #f2f2f2;
    cursor: default; }
  mgt-tasks .Task.LoadingTask .TaskHeader,
  :host .Task.LoadingTask .TaskHeader {
    justify-content: flex-start;
    justify-items: flex-start; }
  mgt-tasks .Task.LoadingTask .TaskDetailIcon,
  :host .Task.LoadingTask .TaskDetailIcon {
    width: 16px;
    height: 16px;
    margin: 5px;
    background: #f2f2f2; }
  mgt-tasks .Task.LoadingTask .TaskTitle,
  :host .Task.LoadingTask .TaskTitle {
    background: #f2f2f2;
    height: 20px; }
  mgt-tasks .Task.LoadingTask .TaskDetail,
  :host .Task.LoadingTask .TaskDetail {
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center; }
  mgt-tasks .Task.LoadingTask .TaskDetailName,
  :host .Task.LoadingTask .TaskDetailName {
    width: 81px;
    height: 10px;
    background: #f2f2f2; }
  mgt-tasks .Task .TaskOptions,
  :host .Task .TaskOptions {
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    position: absolute;
    top: 0;
    right: 0; }

mgt-tasks .LoadingHeader,
:host .LoadingHeader {
  max-width: 90px;
  width: 100%;
  height: 20px;
  background: #f2f2f2; }

@keyframes rotateIcon {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(360deg); } }

`];class TaskSourceBase{constructor(e){this.graph=e}}class PlannerTaskSource extends TaskSourceBase{async getTaskGroups(){return(await this.graph.planner_getAllMyPlans()).map(e=>({id:e.id,title:e.title}))}async getTaskGroupsForGroup(e){return(await this.graph.getPlansForGroup(e)).map(e=>({id:e.id,title:e.title}))}async getTaskGroup(e){const t=await this.graph.planner_getSinglePlan(e);return{id:t.id,title:t.title,_raw:t}}async getTaskFoldersForTaskGroup(e){return(await this.graph.planner_getBucketsForPlan(e)).map(e=>({_raw:e,id:e.id,name:e.name,parentId:e.planId}))}async getTasksForTaskFolder(e){return(await this.graph.planner_getTasksForBucket(e)).map(e=>({_raw:e,assignments:e.assignments,completed:100===e.percentComplete,dueDate:e.dueDateTime&&new Date(e.dueDateTime),eTag:e["@odata.etag"],id:e.id,immediateParentId:e.bucketId,name:e.title,topParentId:e.planId}))}async setTaskComplete(e,t){return await this.graph.planner_setTaskComplete(e,t)}async setTaskIncomplete(e,t){return await this.graph.planner_setTaskIncomplete(e,t)}async addTask(e){return await this.graph.planner_addTask({assignments:e.assignments,bucketId:e.immediateParentId,dueDateTime:e.dueDate&&e.dueDate.toISOString(),planId:e.topParentId,title:e.name})}async assignPeopleToTask(e,t,n){return await this.graph.planner_assignPeopleToTask(e,t,n)}async removeTask(e,t){return await this.graph.planner_removeTask(e,t)}isAssignedToMe(e,t){return Object.keys(e.assignments).includes(t)}}class TodoTaskSource extends TaskSourceBase{async getTaskGroups(){return(await this.graph.todo_getAllMyGroups()).map(e=>({_raw:e,id:e.id,secondaryId:e.groupKey,title:e.name}))}async getTaskGroup(e){const t=await this.graph.todo_getSingleGroup(e);return{id:t.id,secondaryId:t.groupKey,title:t.name,_raw:t}}async getTaskFoldersForTaskGroup(e){return(await this.graph.todo_getFoldersForGroup(e)).map(t=>({_raw:t,id:t.id,name:t.name,parentId:e}))}async getTasksForTaskFolder(e,t){return(await this.graph.todo_getAllTasksForFolder(e)).map(n=>({_raw:n,assignments:{},completed:!!n.completedDateTime,dueDate:n.dueDateTime&&new Date(n.dueDateTime.dateTime+"Z"),eTag:n["@odata.etag"],id:n.id,immediateParentId:e,name:n.subject,topParentId:t}))}async setTaskComplete(e,t){return await this.graph.todo_setTaskComplete(e,t)}async assignPeopleToTask(e,t,n){return await this.graph.planner_assignPeopleToTask(e,t,n)}async setTaskIncomplete(e,t){return await this.graph.todo_setTaskIncomplete(e,t)}async addTask(e){const t={parentFolderId:e.immediateParentId,subject:e.name};return e.dueDate&&(t.dueDateTime={dateTime:e.dueDate.toISOString(),timeZone:"UTC"}),await this.graph.todo_addTask(t)}async removeTask(e,t){return await this.graph.todo_removeTask(e,t)}isAssignedToMe(e,t){return!0}async getTaskGroupsForGroup(e){}}const Ke=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host,
mgt-arrow-options {
  position: relative;
  font-family: 'Segoe UI';
  margin: 0 0 12px 0; }

:host .ArrowIcon,
mgt-arrow-options .ArrowIcon {
  font-family: 'FabricMDL2Icons';
  margin: 0 0 0 20px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; }

:host .Header,
mgt-arrow-options .Header {
  cursor: pointer; }

:host .Header:hover,
mgt-arrow-options .Header:hover {
  color: var(--theme-primary-color);
  background-color: var(--background-color--hover); }

:host .Menu,
mgt-arrow-options .Menu {
  position: absolute;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 40px 5px;
  background: #ffffff;
  z-index: 1;
  display: none;
  color: black;
  white-space: nowrap; }

:host .Menu.Open,
mgt-arrow-options .Menu.Open {
  display: block; }

:host .MenuOption,
mgt-arrow-options .MenuOption {
  padding: 20px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  display: flex;
  align-items: center;
  justify-content: stretch;
  justify-items: stretch; }

:host .MenuOption:first,
mgt-arrow-options .MenuOption:first {
  padding: 12px 20px 20px 20px; }

:host .MenuOption:hover,
mgt-arrow-options .MenuOption:hover {
  background: #c0c0c0; }

:host .MenuOption:active,
mgt-arrow-options .MenuOption:active {
  background: #d8d8d8; }

:host .MenuOptionCheck,
mgt-arrow-options .MenuOptionCheck {
  font-family: 'FabricMDL2Icons';
  color: rgba(0, 0, 0, 0);
  margin-right: 10px; }

:host .MenuOptionCheck.CurrentValue,
mgt-arrow-options .MenuOptionCheck.CurrentValue {
  color: #0078d4; }

`];_decorate([V("mgt-arrow-options")],function(e,t){class MgtArrowOptions extends t{constructor(){super(),e(this),this._clickHandler=(e=>this.open=!1)}}return{F:MgtArrowOptions,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return Ke}},{kind:"field",decorators:[property({type:Boolean})],key:"open",value:()=>!1},{kind:"field",decorators:[property({type:String})],key:"value",value:()=>""},{kind:"field",decorators:[property({type:Object})],key:"options",value:()=>({})},{kind:"field",key:"_clickHandler",value:void 0},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(MgtArrowOptions.prototype),"connectedCallback",this).call(this),window.addEventListener("click",this._clickHandler)}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){window.removeEventListener("click",this._clickHandler),_get(_getPrototypeOf(MgtArrowOptions.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"onHeaderClick",value:function onHeaderClick(e){Object.keys(this.options).length>1&&(e.preventDefault(),e.stopPropagation(),this.open=!this.open)}},{kind:"method",key:"render",value:function render(){return _`
      <span class="Header" @click=${e=>this.onHeaderClick(e)}>
        <span class="CurrentValue">${this.value}</span>
      </span>
      <div class=${_e({Menu:!0,Open:this.open,Closed:!this.open})}>
        ${this.getMenuOptions()}
      </div>
    `}},{kind:"method",key:"getMenuOptions",value:function getMenuOptions(){const e=Object.keys(this.options),t=this.options;return e.map(e=>_`
        <div
          class="MenuOption"
          @click="${n=>{this.open=!1,t[e](n)}}"
        >
          <span class=${_e({MenuOptionCheck:!0,CurrentValue:this.value===e})}>
            \uE73E
          </span>
          <span class="MenuOptionName">${e}</span>
        </div>
      `)}}]}},MgtBaseComponent);const Qe=[K`
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
:host([hidden]) {
  display: none; }

:host {
  display: block;
  --default-font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --theme-primary-color: #0078d7;
  --theme-dark-color: #005a9e; }

.ms-Icon {
  display: inline-block;
  font-family: "FabricMDL2Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 4px 0; }

.ms-Icon--ChevronDown::before {
  content: "\\\E70D"; }

.ms-Icon--ChevronUp::before {
  content: "\\\E70E"; }

.ms-Icon--Contact::before {
  content: "\\\E77B"; }

.ms-Icon--AddFriend::before {
  content: "\\\E8FA"; }

.ms-Icon--OutlookLogoInverse::before {
  content: "\\\EB6D"; }

/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
:host,
mgt-dot-options {
  font-family: 'Segoe UI'; }

:host .DotIcon,
mgt-dot-options .DotIcon {
  display: inline-block;
  font-family: 'FabricMDL2Icons';
  min-width: 40px;
  min-height: 30px;
  text-align: center;
  line-height: 30px; }

:host .Menu,
mgt-dot-options .Menu {
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 40px 5px;
  background: #ffffff;
  z-index: 1;
  display: none;
  color: black;
  white-space: nowrap;
  transform: translateX(-50px); }

:host .DotMenu.Open .Menu,
mgt-dot-options .DotMenu.Open .Menu {
  display: block; }

:host .DotMenu .DotItem,
mgt-dot-options .DotMenu .DotItem {
  direction: ltr;
  text-align: left;
  padding: 10px 10px 8px 10px; }

:host .DotMenu .DotItem:hover,
mgt-dot-options .DotMenu .DotItem:hover {
  background: #c0c0c0; }

:host .DotMenu .DotItem:active,
mgt-dot-options .DotMenu .DotItem:active {
  background: #d8d8d8; }

:host .DotMenu .DotItemName,
mgt-dot-options .DotMenu .DotItemName {
  direction: rtl; }

`];_decorate([V("mgt-dot-options")],function(e,t){class MgtDotOptions extends t{constructor(){super(),e(this),this._clickHandler=(e=>this.open=!1)}}return{F:MgtDotOptions,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return Qe}},{kind:"field",decorators:[property({type:Boolean})],key:"open",value:()=>!1},{kind:"field",decorators:[property({type:Object})],key:"options",value:()=>null},{kind:"field",key:"_clickHandler",value:()=>null},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(MgtDotOptions.prototype),"connectedCallback",this).call(this),window.addEventListener("click",this._clickHandler)}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){window.removeEventListener("click",this._clickHandler),_get(_getPrototypeOf(MgtDotOptions.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"render",value:function render(){return _`
      <div class=${_e({DotMenu:!0,Open:this.open})} @click=${e=>this.onDotClick(e)}>
        <span class="DotIcon">\uE712</span>
        <div class="Menu">
          ${Object.keys(this.options).map(e=>this.getMenuOption(e,this.options[e]))}
        </div>
      </div>
    `}},{kind:"method",key:"getMenuOption",value:function getMenuOption(e,t){return _`
      <div
        class="DotItem"
        @click="${e=>{e.preventDefault(),e.stopPropagation(),t(e),this.open=!1}}"
      >
        <span class="DotItemName">
          ${e}
        </span>
      </div>
    `}},{kind:"method",key:"onDotClick",value:function onDotClick(e){e.preventDefault(),e.stopPropagation(),this.open=!this.open}}]}},MgtBaseComponent);var Xe;(Xe=e.TasksSource||(e.TasksSource={}))[Xe.planner=0]="planner",Xe[Xe.todo=1]="todo";const Je={BASE_SELF_ASSIGNED:"All Tasks",BUCKETS_SELF_ASSIGNED:"All Tasks",BUCKET_NOT_FOUND:"Folder not found",PLANS_SELF_ASSIGNED:"All groups",PLAN_NOT_FOUND:"Group not found"},Ye={BASE_SELF_ASSIGNED:"Assigned to Me",BUCKETS_SELF_ASSIGNED:"All Tasks",BUCKET_NOT_FOUND:"Bucket not found",PLANS_SELF_ASSIGNED:"All Plans",PLAN_NOT_FOUND:"Plan not found"},et={"@odata.type":"microsoft.graph.plannerAssignment",orderHint:"string !"};let tt=_decorate([V("mgt-tasks")],function(t,n){class MgtTasks extends n{constructor(){super(),t(this),this.providerUpdateCallback=(()=>this.loadTasks()),this.handleWindowClick=(()=>this.hidePeoplePicker())}}return{F:MgtTasks,d:[{kind:"get",key:"res",value:function res(){switch(this.dataSource){case e.TasksSource.todo:return Je;case e.TasksSource.planner:default:return Ye}}},{kind:"get",static:!0,key:"styles",value:function styles(){return Ze}},{kind:"get",key:"isNewTaskVisible",value:function isNewTaskVisible(){return this._isNewTaskVisible}},{kind:"set",key:"isNewTaskVisible",value:function isNewTaskVisible(e){this._isNewTaskVisible=e,e||(this._newTaskDueDate=null,this._newTaskName="",this._newTaskGroupId="")}},{kind:"field",decorators:[property({attribute:"read-only",type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[property({attribute:"data-source",converter:(t,n)=>(t=t.toLowerCase(),e.TasksSource[t]||e.TasksSource.planner)})],key:"dataSource",value:()=>e.TasksSource.planner},{kind:"field",decorators:[property({attribute:"target-id",type:String})],key:"targetId",value:()=>null},{kind:"field",decorators:[property({attribute:"target-bucket-id",type:String})],key:"targetBucketId",value:()=>null},{kind:"field",decorators:[property({attribute:"initial-id",type:String})],key:"initialId",value:()=>null},{kind:"field",decorators:[property({attribute:"initial-bucket-id",type:String})],key:"initialBucketId",value:()=>null},{kind:"field",decorators:[property({attribute:"hide-header",type:Boolean})],key:"hideHeader",value:()=>!1},{kind:"field",decorators:[property({attribute:"group-id",type:String})],key:"groupId",value:()=>null},{kind:"field",key:"taskFilter",value:void 0},{kind:"field",decorators:[property()],key:"_isNewTaskVisible",value:()=>!1},{kind:"field",decorators:[property()],key:"_newTaskBeingAdded",value:()=>!1},{kind:"field",decorators:[property()],key:"_newTaskName",value:()=>""},{kind:"field",decorators:[property()],key:"_newTaskDueDate",value:()=>null},{kind:"field",decorators:[property()],key:"_newTaskGroupId",value:()=>""},{kind:"field",decorators:[property()],key:"_newTaskFolderId",value:()=>""},{kind:"field",decorators:[property()],key:"_groups",value:()=>[]},{kind:"field",decorators:[property()],key:"_folders",value:()=>[]},{kind:"field",decorators:[property()],key:"_tasks",value:()=>[]},{kind:"field",decorators:[property()],key:"_hiddenTasks",value:()=>[]},{kind:"field",decorators:[property()],key:"_loadingTasks",value:()=>[]},{kind:"field",decorators:[property()],key:"_inTaskLoad",value:()=>!1},{kind:"field",decorators:[property()],key:"_hasDoneInitialLoad",value:()=>!1},{kind:"field",decorators:[property()],key:"_todoDefaultSet",value:()=>!1},{kind:"field",decorators:[property()],key:"_currentGroup",value:void 0},{kind:"field",decorators:[property()],key:"_currentFolder",value:void 0},{kind:"field",decorators:[property()],key:"_currentTask",value:void 0},{kind:"field",decorators:[property()],key:"isPeoplePickerVisible",value:()=>!1},{kind:"field",key:"_me",value:()=>null},{kind:"field",key:"providerUpdateCallback",value:void 0},{kind:"field",key:"handleWindowClick",value:void 0},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(MgtTasks.prototype),"connectedCallback",this).call(this),Providers.onProviderUpdated(this.providerUpdateCallback),window.addEventListener("click",this.handleWindowClick)}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){Providers.removeProviderUpdatedListener(this.providerUpdateCallback),window.removeEventListener("click",this.handleWindowClick),_get(_getPrototypeOf(MgtTasks.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"attributeChangedCallback",value:function attributeChangedCallback(t,n,r){_get(_getPrototypeOf(MgtTasks.prototype),"attributeChangedCallback",this).call(this,t,n,r),"data-source"===t&&(this.dataSource===e.TasksSource.planner?(this._currentGroup=this.initialId,this._currentFolder=this.initialBucketId):this.dataSource===e.TasksSource.todo&&(this._currentGroup=null,this._currentFolder=this.initialId),this._newTaskFolderId="",this._newTaskGroupId="",this._newTaskDueDate=null,this._newTaskName="",this._newTaskBeingAdded=!1,this._tasks=[],this._folders=[],this._groups=[],this._hasDoneInitialLoad=!1,this._inTaskLoad=!1,this._todoDefaultSet=!1,this.loadTasks())}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this.initialId&&!this._currentGroup&&(this.dataSource===e.TasksSource.planner?this._currentGroup=this.initialId:this.dataSource===e.TasksSource.todo&&(this._currentFolder=this.initialId)),this.dataSource===e.TasksSource.planner&&this.initialBucketId&&!this._currentFolder&&(this._currentFolder=this.initialBucketId),this.loadTasks()}},{kind:"method",key:"render",value:function render(){let e=this._tasks.filter(e=>this.isTaskInSelectedGroupFilter(e)).filter(e=>this.isTaskInSelectedFolderFilter(e)).filter(e=>!this._hiddenTasks.includes(e.id));this.taskFilter&&(e=e.filter(e=>this.taskFilter(e._raw)));const t=this._inTaskLoad&&!this._hasDoneInitialLoad?this.renderLoadingTask():null;let n;return this.hideHeader||(n=_`
        <div class="Header">
          <span class="PlannerTitle">
            ${this.renderPlanOptions()}
          </span>
        </div>
      `),_`
      ${n}
      <div class="Tasks">
        ${this._isNewTaskVisible?this.renderNewTask():null} ${t}
        ${qe(e,e=>e.id,e=>this.renderTask(e))}
      </div>
    `}},{kind:"method",key:"loadTasks",value:async function loadTasks(){const t=this.getTaskSource();if(!t)return;const n=Providers.globalProvider;if(!n||n.state!==e.ProviderState.SignedIn)return;let r;this._inTaskLoad=!0,this._me||(r=n.graph.getMe()),this.groupId&&this.dataSource===e.TasksSource.planner?await this._loadTasksForGroup(t):this.targetId?this.dataSource===e.TasksSource.todo?await this._loadTargetTodoTasks(t):await this._loadTargetPlannerTasks(t):await this._loadAllTasks(t),r&&(this._me=await r),this._inTaskLoad=!1,this._hasDoneInitialLoad=!0}},{kind:"method",key:"_loadTargetTodoTasks",value:async function _loadTargetTodoTasks(e){const t=await e.getTaskGroups(),n=(await Promise.all(t.map(t=>e.getTaskFoldersForTaskGroup(t.id)))).reduce((e,t)=>[...e,...t],[]),r=(await Promise.all(n.map(t=>e.getTasksForTaskFolder(t.id,t.parentId)))).reduce((e,t)=>[...e,...t],[]);this._tasks=r,this._folders=n,this._groups=t,this._currentGroup=null}},{kind:"method",key:"_loadTargetPlannerTasks",value:async function _loadTargetPlannerTasks(e){const t=await e.getTaskGroup(this.targetId);let n=await e.getTaskFoldersForTaskGroup(t.id);this.targetBucketId&&(n=n.filter(e=>e.id===this.targetBucketId));const r=(await Promise.all(n.map(t=>e.getTasksForTaskFolder(t.id,t.parentId)))).reduce((e,t)=>[...e,...t],[]);this._tasks=r,this._folders=n,this._groups=[t]}},{kind:"method",key:"_loadAllTasks",value:async function _loadAllTasks(t){const n=await t.getTaskGroups(),r=(await Promise.all(n.map(e=>t.getTaskFoldersForTaskGroup(e.id)))).reduce((e,t)=>[...e,...t],[]);if(!this.initialId&&this.dataSource===e.TasksSource.todo&&!this._todoDefaultSet){this._todoDefaultSet=!0;const e=r.find(e=>e._raw.isDefaultFolder);e&&(this._currentFolder=e.id)}const o=(await Promise.all(r.map(e=>t.getTasksForTaskFolder(e.id,e.parentId)))).reduce((e,t)=>[...e,...t],[]);this._tasks=o,this._folders=r,this._groups=n}},{kind:"method",key:"_loadTasksForGroup",value:async function _loadTasksForGroup(e){const t=await e.getTaskGroupsForGroup(this.groupId),n=(await Promise.all(t.map(t=>e.getTaskFoldersForTaskGroup(t.id)))).reduce((e,t)=>[...e,...t],[]),r=(await Promise.all(n.map(t=>e.getTasksForTaskFolder(t.id,t.parentId)))).reduce((e,t)=>[...e,...t],[]);this._tasks=r,this._folders=n,this._groups=t}},{kind:"method",key:"addTask",value:async function addTask(e,t,n,r,o={}){const i=this.getTaskSource();if(!i)return;const s={assignments:o,dueDate:t,immediateParentId:r,name:e,topParentId:n};this._newTaskBeingAdded=!0,await i.addTask(s),await this.loadTasks(),this._newTaskBeingAdded=!1,this.isNewTaskVisible=!1}},{kind:"method",key:"completeTask",value:async function completeTask(e){const t=this.getTaskSource();t&&(this._loadingTasks=[...this._loadingTasks,e.id],await t.setTaskComplete(e.id,e.eTag),await this.loadTasks(),this._loadingTasks=this._loadingTasks.filter(t=>t!==e.id))}},{kind:"method",key:"uncompleteTask",value:async function uncompleteTask(e){const t=this.getTaskSource();t&&(this._loadingTasks=[...this._loadingTasks,e.id],await t.setTaskIncomplete(e.id,e.eTag),await this.loadTasks(),this._loadingTasks=this._loadingTasks.filter(t=>t!==e.id))}},{kind:"method",key:"removeTask",value:async function removeTask(e){const t=this.getTaskSource();t&&(this._hiddenTasks=[...this._hiddenTasks,e.id],await t.removeTask(e.id,e.eTag),await this.loadTasks(),this._hiddenTasks=this._hiddenTasks.filter(t=>t!==e.id))}},{kind:"method",key:"assignPeople",value:async function assignPeople(e,t){const n=this.getTaskSource();if(!n)return;let r=[];e&&e.assignments&&(r=Object.keys(e.assignments).sort());const o=t.map(e=>e.id);if(o.length===r.length&&o.sort().every((e,t)=>e===r[t]))return;const i={};if(0===t.length)for(let e=0;e<r.length;e++)i[r[e]]=null;if(t){for(let e=0;e<r.length;e++)for(let n=0;n<t.length;n++){if(r[e]!==t[n].id){i[r[e]]=null;break}i[r[e]]=et}for(let e=0;e<t.length;e++)i[t[e].id]=et}e&&(this._loadingTasks=[...this._loadingTasks,e.id],await n.assignPeopleToTask(e.id,i,e.eTag),await this.loadTasks(),this._loadingTasks=this._loadingTasks.filter(t=>t!==e.id))}},{kind:"method",key:"onAddTaskClick",value:function onAddTaskClick(e){const t=this.getPeoplePicker(null),n={};if(t)for(const e of t.selectedPeople)t.selectedPeople.length&&(n[e.id]=et);!this._newTaskBeingAdded&&this._newTaskName&&(this._currentGroup||this._newTaskGroupId)&&this.addTask(this._newTaskName,this._newTaskDueDate,this._currentGroup?this._currentGroup:this._newTaskGroupId,this._currentFolder?this._currentFolder:this._newTaskFolderId,n)}},{kind:"method",key:"renderPlanOptions",value:function renderPlanOptions(){const t=Providers.globalProvider;if(!t||t.state!==e.ProviderState.SignedIn)return null;if(this._inTaskLoad&&!this._hasDoneInitialLoad)return _`
        <span class="LoadingHeader"></span>
      `;const n=this.readOnly||this._isNewTaskVisible?null:_`
            <span
              class="AddBarItem NewTaskButton"
              @click="${()=>{this.isNewTaskVisible=!this.isNewTaskVisible}}"
            >
              <span class="TaskIcon">\uE710</span>
              <span>Add</span>
            </span>
          `;if(this.dataSource===e.TasksSource.planner){const e=this._groups.find(e=>e.id===this._currentGroup)||{title:this.res.BASE_SELF_ASSIGNED},t={[this.res.BASE_SELF_ASSIGNED]:e=>{this._currentGroup=null,this._currentFolder=null}};for(const e of this._groups)t[e.title]=(t=>{this._currentGroup=e.id,this._currentFolder=null});const r=_`
        <mgt-arrow-options .options="${t}" .value="${e.title}"></mgt-arrow-options>
      `,o=this._currentGroup?_`
            <span class="TaskIcon Divider">/</span>
          `:null,i=this._folders.find(e=>e.id===this._currentFolder)||{name:this.res.BUCKETS_SELF_ASSIGNED},s={[this.res.BUCKETS_SELF_ASSIGNED]:e=>{this._currentFolder=null}};for(const e of this._folders.filter(e=>e.parentId===this._currentGroup))s[e.name]=(t=>{this._currentFolder=e.id});const a=this.targetBucketId?_`
            <span class="PlanTitle">
              ${this._folders[0]&&this._folders[0].name}
            </span>
          `:_`
            <mgt-arrow-options .options="${s}" .value="${i.name}"></mgt-arrow-options>
          `;return _`
        <span class="TitleCont">
          ${r} ${o} ${this._currentGroup?a:null}
        </span>
        ${n}
      `}{const e=this._folders.find(e=>e.id===this.targetId)||{name:this.res.BUCKETS_SELF_ASSIGNED},t=this._folders.find(e=>e.id===this._currentFolder)||{name:this.res.BUCKETS_SELF_ASSIGNED},r={};for(const e of this._folders)r[e.name]=(()=>{this._currentFolder=e.id});r[this.res.BUCKETS_SELF_ASSIGNED]=(e=>{this._currentFolder=null});const o=this.targetId?_`
            <span class="PlanTitle">
              ${e.name}
            </span>
          `:_`
            <mgt-arrow-options .value="${t.name}" .options="${r}"></mgt-arrow-options>
          `;return _`
        <span class="TitleCont">
          ${o}
        </span>
        ${n}
      `}}},{kind:"method",key:"renderNewTask",value:function renderNewTask(){const t=_`
      <input
        type="text"
        placeholder="Task..."
        .value="${this._newTaskName}"
        label="new-taskName-input"
        aria-label="new-taskName-input"
        role="input"
        @input="${e=>{this._newTaskName=e.target.value}}"
      />
    `,n=this._groups;n.length>0&&!this._newTaskGroupId&&(this._newTaskGroupId=n[0].id);const r=this.dataSource===e.TasksSource.todo?null:this._currentGroup?_`
            <span class="TaskDetail TaskAssignee">
              ${this.renderPlannerIcon()}
              <span>${this.getPlanTitle(this._currentGroup)}</span>
            </span>
          `:_`
            <span class="TaskDetail TaskAssignee">
              ${this.renderPlannerIcon()}
              <select
                .value="${this._newTaskGroupId}"
                @change="${e=>{this._newTaskGroupId=e.target.value}}"
              >
                ${this._groups.map(e=>_`
                    <option value="${e.id}">${e.title}</option>
                  `)}
              </select>
            </span>
          `,o=this._folders.filter(e=>this._currentGroup&&e.parentId===this._currentGroup||!this._currentGroup&&e.parentId===this._newTaskGroupId);o.length>0&&!this._newTaskFolderId&&(this._newTaskFolderId=o[0].id);const i=this._currentFolder?_`
          <span class="TaskDetail TaskBucket">
            ${this.renderBucketIcon()}
            <span>${this.getFolderName(this._currentFolder)}</span>
          </span>
        `:_`
          <span class="TaskDetail TaskBucket">
            ${this.renderBucketIcon()}
            <select
              .value="${this._newTaskFolderId}"
              @change="${e=>{this._newTaskFolderId=e.target.value}}"
            >
              ${o.map(e=>_`
                  <option value="${e.id}">${e.name}</option>
                `)}
            </select>
          </span>
        `,s=_`
      <span class="TaskDetail TaskDue">
        ${this.renderCalendarIcon()}
        <input
          type="date"
          label="new-taskDate-input"
          aria-label="new-taskDate-input"
          role="input"
          .value="${this.dateToInputValue(this._newTaskDueDate)}"
          @change="${e=>{const t=e.target.value;this._newTaskDueDate=t?new Date(t+"T17:00"):null}}"
        />
      </span>
    `,a=this.dataSource===e.TasksSource.todo?null:this.renderAssignedPeople(null),l=this._newTaskBeingAdded?_`
          <div class="TaskAddButtonContainer"></div>
        `:_`
          <div class="TaskAddButtonContainer ${""===this._newTaskName?"Disabled":""}">
            <div class="TaskIcon TaskCancel" @click="${()=>this.isNewTaskVisible=!1}">
              <span>Cancel</span>
            </div>
            <div class="TaskIcon TaskAdd" @click="${this.onAddTaskClick}">
              <span>\uE710</span>
            </div>
          </div>
        `;return _`
      <div class="Task NewTask Incomplete">
        <div class="TaskContent">
          <div class="TaskDetailsContainer">
            <div class="TaskTitle">
              ${t}
            </div>
            <hr />
            <div class="TaskDetails">
              ${r} ${i} ${a} ${s}
            </div>
          </div>
        </div>
        ${l}
      </div>
    `}},{kind:"method",key:"showPeoplePicker",value:function showPeoplePicker(e){if(this.isPeoplePickerVisible){if(e===this._currentTask)return void this.hidePeoplePicker()}this._currentTask=e,this.isPeoplePickerVisible=!0;const t=this.getPeoplePicker(e),n=this.getMgtPeople(e);t&&n&&(t.selectedPeople=n.people,setTimeout(()=>{t.focus()},50))}},{kind:"method",key:"hidePeoplePicker",value:function hidePeoplePicker(){const e=this.getPeoplePicker(this._currentTask),t=this.getMgtPeople(this._currentTask);e&&(t.people=e.selectedPeople,this.assignPeople(this._currentTask,e.selectedPeople)),this.isPeoplePickerVisible=!1,this._currentTask=null}},{kind:"method",key:"getPeoplePicker",value:function getPeoplePicker(e){const t=e?e.id:"newTask";return this.renderRoot.querySelector(`.picker-${t}`)}},{kind:"method",key:"getMgtPeople",value:function getMgtPeople(e){const t=e?e.id:"newTask";return this.renderRoot.querySelector(`.people-${t}`)}},{kind:"method",key:"renderTask",value:function renderTask(t){const{name:n="Task",completed:r=!1,dueDate:o}=t,i=this._loadingTasks.includes(t.id),s=i?_`
          \uF16A
        `:r?_`
          \uE73E
        `:null,a=_`
      <span class=${_e({Complete:!i&&r,Loading:i,TaskCheck:!0,TaskIcon:!0})}>${s}</span>
    `,l=this._currentGroup?null:this.getPlanTitle(t.topParentId),d=this._currentFolder?null:this.getFolderName(t.immediateParentId),c={task:_objectSpread2({},t._raw,{groupTitle:l,folderTitle:d})},p=this.renderTemplate("task",c,t.id);if(p)return p;let u=this.renderTemplate("task-details",c,`task-details-${t.id}`);if(!u){const r=this.dataSource===e.TasksSource.todo||this._currentGroup?null:_`
              <span class="TaskDetail TaskAssignee">
                ${this.renderPlannerIcon()}
                <span>${this.getPlanTitle(t.topParentId)}</span>
              </span>
            `,i=this._currentFolder?null:_`
            <span class="TaskDetail TaskBucket">
              ${this.renderBucketIcon()}
              <span>${this.getFolderName(t.immediateParentId)}</span>
            </span>
          `,s=o?_`
            <span class="TaskDetail TaskDue">
              ${this.renderCalendarIcon()}
              <span>${function getShortDateString(e){const t=e.getMonth(),n=e.getDate();return`${getMonthString(t)} ${n}`}(o)}</span>
            </span>
          `:null,a=this.dataSource!==e.TasksSource.todo?this.renderAssignedPeople(t):null;u=_`
        <div class="TaskTitle">
          ${n}
        </div>
        <div class="TaskDetails">
          ${r} ${i} ${a} ${s}
        </div>
      `}const h=this.readOnly?null:_`
          <div class="TaskOptions">
            <mgt-dot-options
              .options="${{"Delete Task":()=>this.removeTask(t)}}"
            ></mgt-dot-options>
          </div>
        `;return _`
      <div
        class=${_e({Complete:r,Incomplete:!r,ReadOnly:this.readOnly,Task:!0})}
      >
        <div
          class="TaskContent"
          @click=${()=>{this.handleTaskClick(t)}}
        >
          <span
            class=${_e({Complete:r,Incomplete:!r,TaskCheckContainer:!0})}
            @click="${e=>{this.readOnly||(t.completed?this.uncompleteTask(t):this.completeTask(t),e.stopPropagation(),e.preventDefault())}}"
          >
            ${a}
          </span>
          <div class="TaskDetailsContainer">
            ${u}
          </div>
        </div>
        ${h}
      </div>
    `}},{kind:"method",key:"renderAssignedPeople",value:function renderAssignedPeople(e){let t=null;const n=e?Object.keys(e.assignments).map(e=>e):[],r=_`
      <template data-type="no-people">
        <i class="login-icon ms-Icon ms-Icon--Contact"></i>
      </template>
    `,o=e?e.id:"newTask";return t=_`
      <mgt-people
        class="people-${o}"
        .userIds="${n}"
        .personCardInteraction=${this.isPeoplePickerVisible?Pe.none:Pe.hover}
        >${r}
      </mgt-people>
    `,_`
      <mgt-flyout
        class="TaskDetail TaskPeople"
        @click=${t=>{this.showPeoplePicker(e),t.stopPropagation()}}
        .isOpen=${this.isPeoplePickerVisible&&e===this._currentTask}
      >
        ${t}
        <div slot="flyout" class=${_e({Picker:!0})}>
          <mgt-people-picker
            class="picker-${o}"
            @click=${e=>e.stopPropagation()}
          ></mgt-people-picker>
        </div>
      </mgt-flyout>
    `}},{kind:"method",key:"handleTaskClick",value:function handleTaskClick(e){e&&!this.isPeoplePickerVisible&&this.fireCustomEvent("taskClick",{task:e._raw})}},{kind:"method",key:"renderLoadingTask",value:function renderLoadingTask(){return _`
      <div class="Task LoadingTask">
        <div class="TaskContent">
          <div class="TaskCheckContainer">
            <div class="TaskCheck"></div>
          </div>
          <div class="TaskDetailsContainer">
            <div class="TaskTitle"></div>
            <div class="TaskDetails">
              <span class="TaskDetail">
                <div class="TaskDetailIcon"></div>
                <div class="TaskDetailName"></div>
              </span>
              <span class="TaskDetail">
                <div class="TaskDetailIcon"></div>
                <div class="TaskDetailName"></div>
              </span>
              <span class="TaskDetail">
                <div class="TaskDetailIcon"></div>
                <div class="TaskDetailName"></div>
              </span>
              <span class="TaskDetail">
                <div class="TaskDetailIcon"></div>
                <div class="TaskDetailName"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    `}},{kind:"method",key:"renderPlannerIcon",value:function renderPlannerIcon(){return _`
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.223 1.156C6.98 1.26 6.769 1.404 6.586 1.586C6.403 1.768 6.261 1.98 6.157 2.223C6.052 2.465 6 2.724 6 3H2V17H14V3H10C10 2.724 9.948 2.465 9.844 2.223C9.74 1.98 9.596 1.768 9.414 1.586C9.231 1.404 9.02 1.26 8.777 1.156C8.535 1.053 8.276 1 8 1C7.723 1 7.465 1.053 7.223 1.156ZM5 4H7V3C7 2.86 7.026 2.729 7.078 2.609C7.13 2.49 7.202 2.385 7.293 2.293C7.384 2.202 7.49 2.131 7.609 2.079C7.73 2.026 7.859 2 8 2C8.14 2 8.271 2.026 8.39 2.079C8.511 2.131 8.616 2.202 8.707 2.293C8.798 2.385 8.87 2.49 8.922 2.609C8.974 2.729 9 2.86 9 3V4H11V5H5V4ZM12 6V4H13V16H3V4H4V6H12Z"
          fill="#3C3C3C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.35156 12.3517L5.49956 14.2037L4.14856 12.8517L4.85156 12.1487L5.49956 12.7967L6.64856 11.6487L7.35156 12.3517Z"
          fill="#3C3C3C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.35156 8.35168L5.49956 10.2037L4.14856 8.85168L4.85156 8.14868L5.49956 8.79668L6.64856 7.64868L7.35156 8.35168Z"
          fill="#3C3C3C"
        />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14H12.001V13H8V14Z" fill="#3C3C3C" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10H12.001V9H8V10Z" fill="#3C3C3C" />
      </svg>
    `}},{kind:"method",key:"renderBucketIcon",value:function renderBucketIcon(){return _`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 2H2V4H3H5H6H10H11H13H14V2ZM10 5H6V6H10V5ZM5 5H3V14H13V5H11V6C11 6.55228 10.5523 7 10 7H6C5.44772 7 5 6.55228 5 6V5ZM1 5H2V14V15H3H13H14V14V5H15V4V2V1H14H2H1V2V4V5Z"
          fill="#3C3C3C"
        />
      </svg>
    `}},{kind:"method",key:"renderCalendarIcon",value:function renderCalendarIcon(){return _`
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 7H11V8H12V7ZM9 13H8V14H9V13ZM6 7H5V8H6V7ZM9 7H8V8H9V7ZM12 9H11V10H12V9ZM15 9H14V10H15V9ZM6 9H5V10H6V9ZM9 9H8V10H9V9ZM12 11H11V12H12V11ZM15 11H14V12H15V11ZM6 11H5V12H6V11ZM9 11H8V12H9V11ZM12 13H11V14H12V13ZM15 13H14V14H15V13ZM2 2V16H18V2H15V1H14V2H6V1H5V2H2ZM17 3V5H3V3H5V4H6V3H14V4H15V3H17ZM3 15V6H17V15H3Z"
          fill="#3C3C3C"
        />
      </svg>
    `}},{kind:"method",key:"getTaskSource",value:function getTaskSource(){const t=Providers.globalProvider;return t&&t.state===e.ProviderState.SignedIn?this.dataSource===e.TasksSource.planner?new PlannerTaskSource(t.graph):this.dataSource===e.TasksSource.todo?new TodoTaskSource(t.graph):null:null}},{kind:"method",key:"getPlanTitle",value:function getPlanTitle(e){return e?e===this.res.PLANS_SELF_ASSIGNED?this.res.PLANS_SELF_ASSIGNED:(this._groups.find(t=>t.id===e)||{title:this.res.PLAN_NOT_FOUND}).title:this.res.BASE_SELF_ASSIGNED}},{kind:"method",key:"getFolderName",value:function getFolderName(e){return e?(this._folders.find(t=>t.id===e)||{name:this.res.BUCKET_NOT_FOUND}).name:this.res.BUCKETS_SELF_ASSIGNED}},{kind:"method",key:"isTaskInSelectedGroupFilter",value:function isTaskInSelectedGroupFilter(e){return e.topParentId===this._currentGroup||!this._currentGroup&&this.getTaskSource().isAssignedToMe(e,this._me.id)}},{kind:"method",key:"isTaskInSelectedFolderFilter",value:function isTaskInSelectedFolderFilter(e){return e.immediateParentId===this._currentFolder||!this._currentFolder}},{kind:"method",key:"dateToInputValue",value:function dateToInputValue(e){return e?new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]:null}}]}},MgtTemplatedComponent);class BatchRequest{constructor(e,t){_defineProperty(this,"resource",void 0),_defineProperty(this,"method",void 0),"/"!==e.charAt(0)&&(e="/"+e),this.resource=e,this.method=t}}class Batch{constructor(e){_defineProperty(this,"requests",new Map),_defineProperty(this,"scopes",[]),_defineProperty(this,"client",void 0),this.client=e}get(e,t,n){const r=new BatchRequest(t,"GET");this.requests.set(e,r),n&&(this.scopes=this.scopes.concat(n))}async execute(){const e={};if(!this.requests.size)return e;const t=new BatchRequestContent;for(const e of this.requests)t.addRequest({id:e[0],request:new Request(Batch.baseUrl+e[1].resource,{method:e[1].method})});let n=this.client.api("$batch").version("beta");this.scopes.length&&(n=n.middlewareOptions(prepScopes(...this.scopes)));const r=await n.post(await t.getContent());for(const t of r.responses)200!==t.status?t[t.id]=null:t.headers["Content-Type"].includes("image/jpeg")?e[t.id]="data:image/jpeg;base64,"+t.body:e[t.id]=t.body;return e}}_defineProperty(Batch,"baseUrl","https://graph.microsoft.com");const nt="1.1.0-preview.2";class SdkVersionMiddleware{constructor(){_defineProperty(this,"nextMiddleware",void 0)}async execute(e){try{let t=`mgt/${nt}`;return t+=", "+se(e.request,e.options,"SdkVersion"),ae(e.request,e.options,"SdkVersion",t),await this.nextMiddleware.execute(e)}catch(e){throw e}}setNext(e){this.nextMiddleware=e}}class Graph{constructor(e){if(_defineProperty(this,"client",void 0),e){const t=new AuthenticationHandler(e),n=new RetryHandler(new RetryHandlerOptions),r=new TelemetryHandler,o=new SdkVersionMiddleware,i=new HTTPMessageHandler;t.setNext(n),n.setNext(r),r.setNext(o),o.setNext(i),this.client=Client.initWithMiddleware({middleware:t})}}createBatch(){return new Batch(this.client)}async getMe(){return this.client.api("me").middlewareOptions(prepScopes("user.read")).get()}async getUser(e){return this.client.api(`/users/${e}`).middlewareOptions(prepScopes("user.readbasic.all")).get()}async findPerson(e){const t=await this.client.api("/me/people").search('"'+e+'"').middlewareOptions(prepScopes("people.read")).get();return t?t.value:null}async findContactByEmail(e){const t=await this.client.api("/me/contacts").filter(`emailAddresses/any(a:a/address eq '${e}')`).middlewareOptions(prepScopes("contacts.read")).get();return t?t.value:null}async findUserByEmail(e){return Promise.all([this.findPerson(e),this.findContactByEmail(e)]).then(([e,t])=>(e||[]).concat(t||[]))}async myPhoto(){return this.getPhotoForResource("me",["user.read"])}async getUserPhoto(e){return this.getPhotoForResource(`users/${e}`,["user.readbasic.all"])}async getContactPhoto(e){return this.getPhotoForResource(`me/contacts/${e}`,["contacts.read"])}async getEvents(e,t,n){let r;r=n?`groups/${n}/calendar`:"me",r+=`/calendarview?${`startdatetime=${e.toISOString()}`}&${`enddatetime=${t.toISOString()}`}`;const o=await this.client.api(r).middlewareOptions(prepScopes("calendars.read")).orderby("start/dateTime").get();return o?o.value:null}async getPeople(){const e=await this.client.api("/me/people").middlewareOptions(prepScopes("people.read")).filter("personType/class eq 'Person'").get();return e?e.value:null}async getPeopleFromGroup(e){const t=`/groups/${e}/members`,n=await this.client.api(t).middlewareOptions(prepScopes("people.read")).get();return n?n.value:null}async getPlansForGroup(e){const t=`/groups/${e}/planner/plans`,n=await this.client.api(t).header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.Read.All")).get();return n?n.value:null}async planner_getAllMyPlans(){const e=await this.client.api("/me/planner/plans").header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.Read.All")).get();return e&&e.value}async planner_getSinglePlan(e){return await this.client.api(`/planner/plans/${e}`).header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.Read.All")).get()}async planner_getBucketsForPlan(e){const t=await this.client.api(`/planner/plans/${e}/buckets`).header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.Read.All")).get();return t&&t.value}async planner_getTasksForBucket(e){const t=await this.client.api(`/planner/buckets/${e}/tasks`).header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.Read.All")).get();return t&&t.value}async planner_setTaskDetails(e,t,n){return await this.client.api(`/planner/tasks/${e}`).header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.ReadWrite.All")).header("If-Match",n).patch(JSON.stringify(t))}async planner_setTaskComplete(e,t){return this.planner_setTaskDetails(e,{percentComplete:100},t)}async planner_setTaskIncomplete(e,t){return this.planner_setTaskDetails(e,{percentComplete:0},t)}async planner_assignPeopleToTask(e,t,n){return this.planner_setTaskDetails(e,{assignments:t},n)}async planner_addTask(e){return this.client.api("/planner/tasks").header("Cache-Control","no-store").middlewareOptions(prepScopes("Group.ReadWrite.All")).post(e)}async planner_removeTask(e,t){return this.client.api(`/planner/tasks/${e}`).header("Cache-Control","no-store").header("If-Match",t).middlewareOptions(prepScopes("Group.ReadWrite.All")).delete()}async todo_getAllMyGroups(){const e=await this.client.api("/me/outlook/taskGroups").header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.Read")).get();return e&&e.value}async todo_getSingleGroup(e){return await this.client.api(`/me/outlook/taskGroups/${e}`).header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.Read")).get()}async todo_getFoldersForGroup(e){const t=await this.client.api(`/me/outlook/taskGroups/${e}/taskFolders`).header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.Read")).get();return t&&t.value}async todo_getAllTasksForFolder(e){const t=await this.client.api(`/me/outlook/taskFolders/${e}/tasks`).header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.Read")).get();return t&&t.value}async todo_setTaskDetails(e,t,n){return await this.client.api(`/me/outlook/tasks/${e}`).header("Cache-Control","no-store").version("beta").header("If-Match",n).middlewareOptions(prepScopes("Tasks.ReadWrite")).patch(t)}async todo_setTaskComplete(e,t){return await this.todo_setTaskDetails(e,{isReminderOn:!1,status:"completed"},t)}async todo_setTaskIncomplete(e,t){return await this.todo_setTaskDetails(e,{isReminderOn:!0,status:"notStarted"},t)}async todo_addTask(e){const{parentFolderId:t=null}=e;return t?await this.client.api(`/me/outlook/taskFolders/${t}/tasks`).header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.ReadWrite")).post(e):await this.client.api("/me/outlook/tasks").header("Cache-Control","no-store").version("beta").middlewareOptions(prepScopes("Tasks.ReadWrite")).post(e)}async todo_removeTask(e,t){return await this.client.api(`/me/outlook/tasks/${e}`).header("Cache-Control","no-store").version("beta").header("If-Match",t).middlewareOptions(prepScopes("Tasks.ReadWrite")).delete()}blobToBase64(e){return new Promise((t,n)=>{const r=new FileReader;r.onerror=n,r.onload=(e=>{t(r.result)}),r.readAsDataURL(e)})}async getPhotoForResource(e,t){try{const n=await this.client.api(`${e}/photo/$value`).version("beta").responseType(ye.BLOB).middlewareOptions(prepScopes(...t)).get();return await this.blobToBase64(n)}catch(e){return null}}}var rt=function(){function CryptoUtils(){}return CryptoUtils.createNewGuid=function(){var e=window.crypto;if(e&&e.getRandomValues){var t=new Uint8Array(16);return e.getRandomValues(t),t[6]|=64,t[6]&=79,t[8]|=128,t[8]&=191,CryptoUtils.decimalToHex(t[0])+CryptoUtils.decimalToHex(t[1])+CryptoUtils.decimalToHex(t[2])+CryptoUtils.decimalToHex(t[3])+"-"+CryptoUtils.decimalToHex(t[4])+CryptoUtils.decimalToHex(t[5])+"-"+CryptoUtils.decimalToHex(t[6])+CryptoUtils.decimalToHex(t[7])+"-"+CryptoUtils.decimalToHex(t[8])+CryptoUtils.decimalToHex(t[9])+"-"+CryptoUtils.decimalToHex(t[10])+CryptoUtils.decimalToHex(t[11])+CryptoUtils.decimalToHex(t[12])+CryptoUtils.decimalToHex(t[13])+CryptoUtils.decimalToHex(t[14])+CryptoUtils.decimalToHex(t[15])}for(var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",r="0123456789abcdef",o=0,i="",s=0;s<36;s++)"-"!==n[s]&&"4"!==n[s]&&(o=16*Math.random()|0),"x"===n[s]?i+=r[o]:"y"===n[s]?(o&=3,i+=r[o|=8]):i+=n[s];return i},CryptoUtils.decimalToHex=function(e){for(var t=e.toString(16);t.length<2;)t="0"+t;return t},CryptoUtils.base64Encode=function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function toSolidBytes(e,t){return String.fromCharCode(Number("0x"+t))}))},CryptoUtils.base64Decode=function(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))},CryptoUtils.deserialize=function(e){var t,n=/\+/g,r=/([^&=]+)=([^&]*)/g,o=function(e){return decodeURIComponent(e.replace(n," "))},i={};for(t=r.exec(e);t;)i[o(t[1])]=o(t[2]),t=r.exec(e);return i},CryptoUtils}(),ot=function(){function Constants(){}return Object.defineProperty(Constants,"errorDescription",{get:function(){return"error_description"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"error",{get:function(){return"error"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"scope",{get:function(){return"scope"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"clientInfo",{get:function(){return"client_info"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"clientId",{get:function(){return"clientId"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"idToken",{get:function(){return"id_token"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"adalIdToken",{get:function(){return"adal.idtoken"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"accessToken",{get:function(){return"access_token"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"expiresIn",{get:function(){return"expires_in"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"sessionState",{get:function(){return"session_state"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"claims",{get:function(){return"claims"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"msalClientInfo",{get:function(){return"msal.client.info"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"msalError",{get:function(){return"msal.error"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"msalErrorDescription",{get:function(){return"msal.error.description"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"msalSessionState",{get:function(){return"msal.session.state"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"tokenKeys",{get:function(){return"msal.token.keys"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"accessTokenKey",{get:function(){return"msal.access.token.key"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"expirationKey",{get:function(){return"msal.expiration.key"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"stateLogin",{get:function(){return"msal.state.login"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"stateAcquireToken",{get:function(){return"msal.state.acquireToken"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"stateRenew",{get:function(){return"msal.state.renew"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"nonceIdToken",{get:function(){return"msal.nonce.idtoken"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"userName",{get:function(){return"msal.username"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"idTokenKey",{get:function(){return"msal.idtoken"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"loginRequest",{get:function(){return"msal.login.request"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"loginError",{get:function(){return"msal.login.error"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"renewStatus",{get:function(){return"msal.token.renew.status"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"urlHash",{get:function(){return"msal.urlHash"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"angularLoginRequest",{get:function(){return"msal.angular.login.request"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"msal",{get:function(){return"msal"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"no_account",{get:function(){return"NO_ACCOUNT"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"consumersUtid",{get:function(){return"9188040d-6c67-4c5b-b112-36a304b66dad"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"upn",{get:function(){return"upn"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"prompt_select_account",{get:function(){return"&prompt=select_account"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"prompt_none",{get:function(){return"&prompt=none"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"prompt",{get:function(){return"prompt"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"response_mode_fragment",{get:function(){return"&response_mode=fragment"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"resourceDelimiter",{get:function(){return"|"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"tokenRenewStatusCancelled",{get:function(){return"Canceled"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"tokenRenewStatusCompleted",{get:function(){return"Completed"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"tokenRenewStatusInProgress",{get:function(){return"In Progress"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"popUpWidth",{get:function(){return this._popUpWidth},set:function(e){this._popUpWidth=e},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"popUpHeight",{get:function(){return this._popUpHeight},set:function(e){this._popUpHeight=e},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"login",{get:function(){return"LOGIN"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"renewToken",{get:function(){return"RENEW_TOKEN"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"unknown",{get:function(){return"UNKNOWN"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"homeAccountIdentifier",{get:function(){return"homeAccountIdentifier"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"common",{get:function(){return"common"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"openidScope",{get:function(){return"openid"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"profileScope",{get:function(){return"profile"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"cacheLocationLocal",{get:function(){return"localStorage"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"cacheLocationSession",{get:function(){return"sessionStorage"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"interactionTypeRedirect",{get:function(){return"redirectInteraction"},enumerable:!0,configurable:!0}),Object.defineProperty(Constants,"interactionTypePopup",{get:function(){return"popupInteraction"},enumerable:!0,configurable:!0}),Constants._popUpWidth=483,Constants._popUpHeight=600,Constants}(),it="msal.authority",st="msal.acquireTokenAccount",at={"login.windows.net":"login.windows.net","login.chinacloudapi.cn":"login.chinacloudapi.cn","login.cloudgovapi.us":"login.cloudgovapi.us","login.microsoftonline.com":"login.microsoftonline.com","login.microsoftonline.de":"login.microsoftonline.de","login.microsoftonline.us":"login.microsoftonline.us"},lt="sid",dt="login_hint",ct="id_token",pt="domain_hint",ut="organizations",ht="consumers",gt="homeAccountIdentifier",mt="login_req",ft="domain_req",yt=[lt,dt],vt={LOGIN:"login",SELECT_ACCOUNT:"select_account",CONSENT:"consent",NONE:"none"};var kt=function(){function ScopeSet(){}return ScopeSet.isIntersectingScopes=function(e,t){e=this.convertToLowerCase(e);for(var n=0;n<t.length;n++)if(e.indexOf(t[n].toLowerCase())>-1)return!0;return!1},ScopeSet.containsScope=function(e,t){return e=this.convertToLowerCase(e),t.every(function(t){return e.indexOf(t.toString().toLowerCase())>=0})},ScopeSet.convertToLowerCase=function(e){return e.map(function(e){return e.toLowerCase()})},ScopeSet.removeElement=function(e,t){return e.filter(function(e){return e!==t})},ScopeSet.parseScope=function(e){var t="";if(e)for(var n=0;n<e.length;++n)t+=n!==e.length-1?e[n]+" ":e[n];return t},ScopeSet}(),wt=function(){function StringUtils(){}return StringUtils.isEmpty=function(e){return void 0===e||!e||0===e.length},StringUtils}(),Tt=function(){function UrlUtils(){}return UrlUtils.createNavigateUrl=function(e){var t=this.createNavigationUrlString(e),n=e.authorityInstance.AuthorizationEndpoint;return n.indexOf("?")<0?n+="?":n+="&",""+n+t.join("&")},UrlUtils.createNavigationUrlString=function(e){var t=e.scopes;-1===t.indexOf(e.clientId)&&t.push(e.clientId);var n=[];return n.push("response_type="+e.responseType),this.translateclientIdUsedInScope(t,e.clientId),n.push("scope="+encodeURIComponent(kt.parseScope(t))),n.push("client_id="+encodeURIComponent(e.clientId)),n.push("redirect_uri="+encodeURIComponent(e.redirectUri)),n.push("state="+encodeURIComponent(e.state)),n.push("nonce="+encodeURIComponent(e.nonce)),n.push("client_info=1"),n.push("x-client-SKU="+e.xClientSku),n.push("x-client-Ver="+e.xClientVer),e.promptValue&&n.push("prompt="+encodeURIComponent(e.promptValue)),e.claimsValue&&n.push("claims="+encodeURIComponent(e.claimsValue)),e.queryParameters&&n.push(e.queryParameters),e.extraQueryParameters&&n.push(e.extraQueryParameters),n.push("client-request-id="+encodeURIComponent(e.correlationId)),n},UrlUtils.translateclientIdUsedInScope=function(e,t){var n=e.indexOf(t);n>=0&&(e.splice(n,1),-1===e.indexOf("openid")&&e.push("openid"),-1===e.indexOf("profile")&&e.push("profile"))},UrlUtils.getDefaultRedirectUri=function(){return window.location.href.split("?")[0].split("#")[0]},UrlUtils.replaceTenantPath=function(e,t){e=e.toLowerCase();var n=this.GetUrlComponents(e),r=n.PathSegments;return!t||0===r.length||r[0]!==ot.common&&r[0]!==ut||(r[0]=t),this.constructAuthorityUriFromObject(n,r)},UrlUtils.constructAuthorityUriFromObject=function(e,t){return this.CanonicalizeUri(e.Protocol+"//"+e.HostNameAndPort+"/"+t.join("/"))},UrlUtils.GetUrlComponents=function(e){if(!e)throw"Url required";var t=RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),n=e.match(t);if(!n||n.length<6)throw"Valid url required";var r={Protocol:n[1],HostNameAndPort:n[4],AbsolutePath:n[5]},o=r.AbsolutePath.split("/");return o=o.filter(function(e){return e&&e.length>0}),r.PathSegments=o,r},UrlUtils.CanonicalizeUri=function(e){return e&&(e=e.toLowerCase()),e&&!UrlUtils.endsWith(e,"/")&&(e+="/"),e},UrlUtils.endsWith=function(e,t){return!(!e||!t)&&-1!==e.indexOf(t,e.length-t.length)},UrlUtils.urlRemoveQueryStringParameter=function(e,t){if(wt.isEmpty(e))return e;var n=new RegExp("(\\&"+t+"=)[^&]+");return e=e.replace(n,""),n=new RegExp("("+t+"=)[^&]+&"),e=e.replace(n,""),n=new RegExp("("+t+"=)[^&]+"),e=e.replace(n,"")},UrlUtils.getHashFromUrl=function(e){var t=e.indexOf("#"),n=e.indexOf("#/");return n>-1?e.substring(n+2):t>-1?e.substring(t+1):e},UrlUtils}(),Ct=function(){return function AccessTokenKey(e,t,n,r,o){this.authority=Tt.CanonicalizeUri(e),this.clientId=t,this.scopes=n,this.homeAccountIdentifier=rt.base64Encode(r)+"."+rt.base64Encode(o)}}(),bt=function(){return function AccessTokenValue(e,t,n,r){this.accessToken=e,this.idToken=t,this.expiresIn=n,this.homeAccountIdentifier=r}}(),_t={code:"unexpected_error",desc:"Unexpected error in authentication."},St=function(e){function AuthError(t,n){var r=e.call(this,n)||this;return Object.setPrototypeOf(r,AuthError.prototype),r.errorCode=t,r.errorMessage=n,r.name="AuthError",r}return __extends(AuthError,e),AuthError.createUnexpectedError=function(e){return new AuthError(_t.code,_t.desc+": "+e)},AuthError}(Error),Pt={code:"multiple_matching_tokens",desc:"The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements like authority."},It={code:"multiple_authorities",desc:"Multiple authorities found in the cache. Pass authority in the API overload."},At={code:"endpoints_resolution_error",desc:"Error: could not resolve endpoints. Please check network and try again."},Et={code:"popup_window_error",desc:"Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."},xt={code:"token_renewal_error",desc:"Token renewal operation failed due to timeout."},Dt={code:"invalid_id_token",desc:"Invalid ID token format."},Rt={code:"invalid_state_error",desc:"Invalid state."},Ot={code:"nonce_mismatch_error",desc:"Nonce is not matching, Nonce received: "},Lt={code:"login_progress_error",desc:"Login_In_Progress: Error during login call - login is already in progress."},Mt={code:"acquiretoken_progress_error",desc:"AcquireToken_In_Progress: Error during login call - login is already in progress."},Ut={code:"user_cancelled",desc:"User cancelled the flow."},Nt={code:"callback_error",desc:"Error occurred in token received callback function."},Ht={code:"user_login_error",desc:"User login is required."},Ft={code:"user_non_existent",desc:"User object does not exist. Please call a login API."},qt={code:"client_info_decoding_error",desc:"The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."},$t={code:"client_info_not_populated_error",desc:"The service did not populate client_info in the response, Please verify with the service team"},jt={code:"null_or_empty_id_token",desc:"The idToken is null or empty. Please review the trace to determine the root cause."},Bt={code:"id_token_parsing_error",desc:"ID token cannot be parsed. Please review stack trace to determine root cause."},Vt={code:"token_encoding_error",desc:"The token to be decoded is not encoded correctly."},Gt={code:"invalid_interaction_type",desc:"The interaction type passed to the handler was incorrect or unknown"},zt=function(e){function ClientAuthError(t,n){var r=e.call(this,t,n)||this;return r.name="ClientAuthError",Object.setPrototypeOf(r,ClientAuthError.prototype),r}return __extends(ClientAuthError,e),ClientAuthError.createEndpointResolutionError=function(e){var t=At.desc;return e&&!wt.isEmpty(e)&&(t+=" Details: "+e),new ClientAuthError(At.code,t)},ClientAuthError.createMultipleMatchingTokensInCacheError=function(e){return new ClientAuthError(Pt.code,"Cache error for scope "+e+": "+Pt.desc+".")},ClientAuthError.createMultipleAuthoritiesInCacheError=function(e){return new ClientAuthError(It.code,"Cache error for scope "+e+": "+It.desc+".")},ClientAuthError.createPopupWindowError=function(e){var t=Et.desc;return e&&!wt.isEmpty(e)&&(t+=" Details: "+e),new ClientAuthError(Et.code,t)},ClientAuthError.createTokenRenewalTimeoutError=function(){return new ClientAuthError(xt.code,xt.desc)},ClientAuthError.createInvalidIdTokenError=function(e){return new ClientAuthError(Dt.code,Dt.desc+" Given token: "+e)},ClientAuthError.createInvalidStateError=function(e,t){return new ClientAuthError(Rt.code,Rt.desc+" "+e+", state expected : "+t+".")},ClientAuthError.createNonceMismatchError=function(e,t){return new ClientAuthError(Ot.code,Ot.desc+" "+e+", nonce expected : "+t+".")},ClientAuthError.createLoginInProgressError=function(){return new ClientAuthError(Lt.code,Lt.desc)},ClientAuthError.createAcquireTokenInProgressError=function(){return new ClientAuthError(Mt.code,Mt.desc)},ClientAuthError.createUserCancelledError=function(){return new ClientAuthError(Ut.code,Ut.desc)},ClientAuthError.createErrorInCallbackFunction=function(e){return new ClientAuthError(Nt.code,Nt.desc+" "+e+".")},ClientAuthError.createUserLoginRequiredError=function(){return new ClientAuthError(Ht.code,Ht.desc)},ClientAuthError.createUserDoesNotExistError=function(){return new ClientAuthError(Ft.code,Ft.desc)},ClientAuthError.createClientInfoDecodingError=function(e){return new ClientAuthError(qt.code,qt.desc+" Failed with error: "+e)},ClientAuthError.createClientInfoNotPopulatedError=function(e){return new ClientAuthError($t.code,$t.desc+" Failed with error: "+e)},ClientAuthError.createIdTokenNullOrEmptyError=function(e){return new ClientAuthError(jt.code,jt.desc+" Raw ID Token Value: "+e)},ClientAuthError.createIdTokenParsingError=function(e){return new ClientAuthError(Bt.code,Bt.desc+" Failed with error: "+e)},ClientAuthError.createTokenEncodingError=function(e){return new ClientAuthError(Vt.code,Vt.desc+" Attempted to decode: "+e)},ClientAuthError.createInvalidInteractionTypeError=function(){return new ClientAuthError(Gt.code,Gt.desc)},ClientAuthError}(St),Wt={configurationNotSet:{code:"no_config_set",desc:"Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."},invalidCacheLocation:{code:"invalid_cache_location",desc:"The cache location provided is not valid."},noStorageSupported:{code:"browser_storage_not_supported",desc:"localStorage and sessionStorage are not supported."},noRedirectCallbacksSet:{code:"no_redirect_callbacks",desc:"No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."},invalidCallbackObject:{code:"invalid_callback_object",desc:"The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."},scopesRequired:{code:"scopes_required",desc:"Scopes are required to obtain an access token."},emptyScopes:{code:"empty_input_scopes_error",desc:"Scopes cannot be passed as empty array."},nonArrayScopes:{code:"nonarray_input_scopes_error",desc:"Scopes cannot be passed as non-array."},clientScope:{code:"clientid_input_scopes_error",desc:"Client ID can only be provided as a single scope."},invalidPrompt:{code:"invalid_prompt_value",desc:"Supported prompt values are 'login', 'select_account', 'consent' and 'none'"},invalidAuthorityType:{code:"invalid_authority_type",desc:"The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."},authorityUriInsecure:{code:"authority_uri_insecure",desc:"Authority URIs must use https."},authorityUriInvalidPath:{code:"authority_uri_invalid_path",desc:"Given authority URI is invalid."},unsupportedAuthorityValidation:{code:"unsupported_authority_validation",desc:"The authority validation is not supported for this authority type."},b2cAuthorityUriInvalidPath:{code:"b2c_authority_uri_invalid_path",desc:"The given URI for the B2C authority is invalid."},claimsRequestParsingError:{code:"claims_request_parsing_error",desc:"Could not parse the given claims request object."},emptyRequestError:{code:"empty_request_error",desc:"Request object is required."},telemetryConfigError:{code:"telemetry_config_error",desc:"Telemetry config is not configured with required values"}},Zt=function(e){function ClientConfigurationError(t,n){var r=e.call(this,t,n)||this;return r.name="ClientConfigurationError",Object.setPrototypeOf(r,ClientConfigurationError.prototype),r}return __extends(ClientConfigurationError,e),ClientConfigurationError.createNoSetConfigurationError=function(){return new ClientConfigurationError(Wt.configurationNotSet.code,""+Wt.configurationNotSet.desc)},ClientConfigurationError.createInvalidCacheLocationConfigError=function(e){return new ClientConfigurationError(Wt.invalidCacheLocation.code,Wt.invalidCacheLocation.desc+" Provided value: "+e+". Possible values are: "+ot.cacheLocationLocal+", "+ot.cacheLocationSession+".")},ClientConfigurationError.createNoStorageSupportedError=function(){return new ClientConfigurationError(Wt.noStorageSupported.code,Wt.noStorageSupported.desc)},ClientConfigurationError.createRedirectCallbacksNotSetError=function(){return new ClientConfigurationError(Wt.noRedirectCallbacksSet.code,Wt.noRedirectCallbacksSet.desc)},ClientConfigurationError.createInvalidCallbackObjectError=function(e){return new ClientConfigurationError(Wt.invalidCallbackObject.code,Wt.invalidCallbackObject.desc+" Given value for callback function: "+e)},ClientConfigurationError.createEmptyScopesArrayError=function(e){return new ClientConfigurationError(Wt.emptyScopes.code,Wt.emptyScopes.desc+" Given value: "+e+".")},ClientConfigurationError.createScopesNonArrayError=function(e){return new ClientConfigurationError(Wt.nonArrayScopes.code,Wt.nonArrayScopes.desc+" Given value: "+e+".")},ClientConfigurationError.createClientIdSingleScopeError=function(e){return new ClientConfigurationError(Wt.clientScope.code,Wt.clientScope.desc+" Given value: "+e+".")},ClientConfigurationError.createScopesRequiredError=function(e){return new ClientConfigurationError(Wt.scopesRequired.code,Wt.scopesRequired.desc+" Given value: "+e)},ClientConfigurationError.createInvalidPromptError=function(e){return new ClientConfigurationError(Wt.invalidPrompt.code,Wt.invalidPrompt.desc+" Given value: "+e)},ClientConfigurationError.createClaimsRequestParsingError=function(e){return new ClientConfigurationError(Wt.claimsRequestParsingError.code,Wt.claimsRequestParsingError.desc+" Given value: "+e)},ClientConfigurationError.createEmptyRequestError=function(){var e=Wt.emptyRequestError;return new ClientConfigurationError(e.code,e.desc)},ClientConfigurationError.createTelemetryConfigError=function(e){var t=Wt.telemetryConfigError,n=t.code,r=t.desc,o={applicationName:"string",applicationVersion:"string",telemetryEmitter:"function"};return new ClientConfigurationError(n,r+" mising values: "+Object.keys(o).reduce(function(t,n){return e[n]?t:t.concat([n+" ("+o[n]+")"])},[]).join(","))},ClientConfigurationError}(zt);var Kt,Qt=function(){function ServerRequestParameters(e,t,n,r,o,i){this.authorityInstance=e,this.clientId=t,this.scopes=n?n.slice():[t],this.nonce=rt.createNewGuid(),this.state=i&&!wt.isEmpty(i)?rt.createNewGuid()+"|"+i:rt.createNewGuid(),this.correlationId=rt.createNewGuid(),this.xClientSku="MSAL.JS",this.xClientVer="1.1.3",this.responseType=r,this.redirectUri=o}return Object.defineProperty(ServerRequestParameters.prototype,"authority",{get:function(){return this.authorityInstance?this.authorityInstance.CanonicalAuthority:null},enumerable:!0,configurable:!0}),ServerRequestParameters.prototype.populateQueryParams=function(e,t,n){var r,o={};t&&(t.prompt&&(this.validatePromptParameter(t.prompt),this.promptValue=t.prompt),t.claimsRequest&&(!function validateClaimsRequest(e){if(e.claimsRequest)try{JSON.parse(e.claimsRequest)}catch(e){throw Zt.createClaimsRequestParsingError(e)}}(t),this.claimsValue=t.claimsRequest),ServerRequestParameters.isSSOParam(t)&&(o=this.constructUnifiedCacheQueryParameter(t,null))),n&&(o=this.constructUnifiedCacheQueryParameter(null,n)),o=this.addHintParameters(e,o),t&&(r=this.sanitizeEQParams(t)),this.queryParameters=ServerRequestParameters.generateQueryParametersString(o),this.extraQueryParameters=ServerRequestParameters.generateQueryParametersString(r)},ServerRequestParameters.prototype.validatePromptParameter=function(e){if(!([vt.LOGIN,vt.SELECT_ACCOUNT,vt.CONSENT,vt.NONE].indexOf(e)>=0))throw Zt.createInvalidPromptError(e)},ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter=function(e,t){var n,r,o={};if(e)if(e.account){var i=e.account;i.sid?(n=lt,r=i.sid):i.userName&&(n=dt,r=i.userName)}else e.sid?(n=lt,r=e.sid):e.loginHint&&(n=dt,r=e.loginHint);else t&&(t.hasOwnProperty(ot.upn)?(n=ct,r=t.upn):(n=ut,r=null));return o=this.addSSOParameter(n,r),e&&e.account&&e.account.homeAccountIdentifier&&(o=this.addSSOParameter(gt,e.account.homeAccountIdentifier,o)),o},ServerRequestParameters.prototype.addHintParameters=function(e,t){if(e&&!t[lt]){if(!t[dt]&&e.sid&&this.promptValue===vt.NONE)t=this.addSSOParameter(lt,e.sid,t);else!t[dt]&&e.userName&&!wt.isEmpty(e.userName)&&(t=this.addSSOParameter(dt,e.userName,t));!t[ft]&&!t[mt]&&(t=this.addSSOParameter(gt,e.homeAccountIdentifier,t))}return t},ServerRequestParameters.prototype.addSSOParameter=function(e,t,n){if(n||(n={}),!t)return n;switch(e){case lt:n[lt]=t;break;case ct:n[dt]=t,n[pt]=ut;break;case dt:n[dt]=t;break;case ut:n[pt]=ut;break;case ht:n[pt]=ht;break;case gt:var r=t.split("."),o=rt.base64Decode(r[0]),i=rt.base64Decode(r[1]);n[mt]=o,n[ft]=i,i===ot.consumersUtid?n[pt]=ht:n[pt]=ut;break;case mt:n[mt]=t;break;case ft:n[ft]=t}return n},ServerRequestParameters.prototype.sanitizeEQParams=function(e){var t=e.extraQueryParameters;return t?(e.claimsRequest&&delete t[ot.claims],yt.forEach(function(e){t[e]&&delete t[e]}),t):null},ServerRequestParameters.generateQueryParametersString=function(e){var t=null;return e&&Object.keys(e).forEach(function(n){null==t?t=n+"="+encodeURIComponent(e[n]):t+="&"+n+"="+encodeURIComponent(e[n])}),t},ServerRequestParameters.isSSOParam=function(e){return e&&(e.account||e.sid||e.loginHint)},ServerRequestParameters}(),Xt=function(){function ClientInfo(e){if(!e||wt.isEmpty(e))return this.uid="",void(this.utid="");try{var t=rt.base64Decode(e),n=JSON.parse(t);n&&(n.hasOwnProperty("uid")&&(this.uid=n.uid),n.hasOwnProperty("utid")&&(this.utid=n.utid))}catch(e){throw zt.createClientInfoDecodingError(e)}}return Object.defineProperty(ClientInfo.prototype,"uid",{get:function(){return this._uid?this._uid:""},set:function(e){this._uid=e},enumerable:!0,configurable:!0}),Object.defineProperty(ClientInfo.prototype,"utid",{get:function(){return this._utid?this._utid:""},set:function(e){this._utid=e},enumerable:!0,configurable:!0}),ClientInfo}(),Jt=function(){function TokenUtils(){}return TokenUtils.decodeJwt=function(e){if(wt.isEmpty(e))return null;var t=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);return!t||t.length<4?null:{header:t[1],JWSPayload:t[2],JWSSig:t[3]}},TokenUtils.extractIdToken=function(e){var t=this.decodeJwt(e);if(!t)return null;try{var n=t.JWSPayload,r=rt.base64Decode(n);return r?JSON.parse(r):null}catch(e){}return null},TokenUtils}(),Yt=function(){return function IdToken(e){if(wt.isEmpty(e))throw zt.createIdTokenNullOrEmptyError(e);try{this.rawIdToken=e,this.claims=Jt.extractIdToken(e),this.claims&&(this.claims.hasOwnProperty("iss")&&(this.issuer=this.claims.iss),this.claims.hasOwnProperty("oid")&&(this.objectId=this.claims.oid),this.claims.hasOwnProperty("sub")&&(this.subject=this.claims.sub),this.claims.hasOwnProperty("tid")&&(this.tenantId=this.claims.tid),this.claims.hasOwnProperty("ver")&&(this.version=this.claims.ver),this.claims.hasOwnProperty("preferred_username")&&(this.preferredName=this.claims.preferred_username),this.claims.hasOwnProperty("name")&&(this.name=this.claims.name),this.claims.hasOwnProperty("nonce")&&(this.nonce=this.claims.nonce),this.claims.hasOwnProperty("exp")&&(this.expiration=this.claims.exp),this.claims.hasOwnProperty("home_oid")&&(this.homeObjectId=this.claims.home_oid),this.claims.hasOwnProperty("sid")&&(this.sid=this.claims.sid))}catch(e){throw zt.createIdTokenParsingError(e)}}}(),en=function(){return function AccessTokenCacheItem(e,t){this.key=e,this.value=t}}(),tn=function(){function Storage(e){if(Storage.instance)return Storage.instance;if(this.cacheLocation=e,this.localStorageSupported=void 0!==window[this.cacheLocation]&&null!=window[this.cacheLocation],this.sessionStorageSupported=void 0!==window[e]&&null!=window[e],Storage.instance=this,!this.localStorageSupported&&!this.sessionStorageSupported)throw Zt.createNoStorageSupportedError();return Storage.instance}return Storage.prototype.setItem=function(e,t,n){window[this.cacheLocation]&&window[this.cacheLocation].setItem(e,t),n&&this.setItemCookie(e,t)},Storage.prototype.getItem=function(e,t){return t&&this.getItemCookie(e)?this.getItemCookie(e):window[this.cacheLocation]?window[this.cacheLocation].getItem(e):null},Storage.prototype.removeItem=function(e){if(window[this.cacheLocation])return window[this.cacheLocation].removeItem(e)},Storage.prototype.clear=function(){if(window[this.cacheLocation])return window[this.cacheLocation].clear()},Storage.prototype.getAllAccessTokens=function(e,t){var n,r=[],o=window[this.cacheLocation];if(o){var i=void 0;for(i in o)if(o.hasOwnProperty(i)&&i.match(e)&&i.match(t)){var s=this.getItem(i);s&&(n=new en(JSON.parse(i),JSON.parse(s)),r.push(n))}}return r},Storage.prototype.removeAcquireTokenEntries=function(e){var t=window[this.cacheLocation];if(t){var n=void 0;for(n in t)if(t.hasOwnProperty(n)&&!(-1===n.indexOf(it)&&1===n.indexOf(st)||e&&-1===n.indexOf(e))){var r=n.split(ot.resourceDelimiter),o=void 0;r.length>1&&(o=r[1]),o&&!this.tokenRenewalInProgress(o)&&(this.removeItem(n),this.removeItem(ot.renewStatus+o),this.removeItem(ot.stateLogin),this.removeItem(ot.stateAcquireToken),this.setItemCookie(n,"",-1))}}this.clearCookie()},Storage.prototype.tokenRenewalInProgress=function(e){var t=window[this.cacheLocation][ot.renewStatus+e];return!(!t||t!==ot.tokenRenewStatusInProgress)},Storage.prototype.resetCacheItems=function(){var e=window[this.cacheLocation];if(e){var t=void 0;for(t in e)e.hasOwnProperty(t)&&-1!==t.indexOf(ot.msal)&&this.removeItem(t);this.removeAcquireTokenEntries()}},Storage.prototype.setItemCookie=function(e,t,n){var r=e+"="+t+";";n&&(r+="expires="+this.getCookieExpirationTime(n)+";");document.cookie=r},Storage.prototype.getItemCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},Storage.prototype.getCookieExpirationTime=function(e){var t=new Date;return new Date(t.getTime()+24*e*60*60*1e3).toUTCString()},Storage.prototype.clearCookie=function(){this.setItemCookie(ot.nonceIdToken,"",-1),this.setItemCookie(ot.stateLogin,"",-1),this.setItemCookie(ot.loginRequest,"",-1),this.setItemCookie(ot.stateAcquireToken,"",-1)},Storage.generateAcquireTokenAccountKey=function(e,t){return st+ot.resourceDelimiter+""+e+ot.resourceDelimiter+t},Storage.generateAuthorityKey=function(e){return it+ot.resourceDelimiter+""+e},Storage}(),nn=function(){function Account(e,t,n,r,o,i,s){this.accountIdentifier=e,this.homeAccountIdentifier=t,this.userName=n,this.name=r,this.idToken=o,this.idTokenClaims=o,this.sid=i,this.environment=s}return Account.createAccount=function(e,t){var n,r=e.objectId||e.subject,o=t?t.uid:"",i=t?t.utid:"";return wt.isEmpty(o)||wt.isEmpty(i)||(n=rt.base64Encode(o)+"."+rt.base64Encode(i)),new Account(r,n,e.preferredName,e.name,e.claims,e.sid,e.issuer)},Account.compareAccounts=function(e,t){return!(!e||!t)&&!(!e.homeAccountIdentifier||!t.homeAccountIdentifier||e.homeAccountIdentifier!==t.homeAccountIdentifier)},Account}(),rn=function(){function TimeUtils(){}return TimeUtils.parseExpiresIn=function(e){return e||(e="3599"),parseInt(e,10)},TimeUtils.now=function(){return Math.round((new Date).getTime()/1e3)},TimeUtils}(),on=function(){function ResponseUtils(){}return ResponseUtils.setResponseIdToken=function(e,t){if(!e)return null;if(!t)return e;var n=Number(t.expiration);return n&&!e.expiresOn&&(e.expiresOn=new Date(1e3*n)),oe({},e,{idToken:t,idTokenClaims:t.claims,uniqueId:t.objectId||t.subject,tenantId:t.tenantId})},ResponseUtils}(),sn=function(){function XhrClient(){}return XhrClient.prototype.sendRequestAsync=function(e,t,n){var r=this;return new Promise(function(n,o){var i=new XMLHttpRequest;if(i.open(t,e,!0),i.onload=function(e){(i.status<200||i.status>=300)&&o(r.handleError(i.responseText));try{var t=JSON.parse(i.responseText)}catch(e){o(r.handleError(i.responseText))}n(t)},i.onerror=function(e){o(i.status)},"GET"!==t)throw"not implemented";i.send()})},XhrClient.prototype.handleError=function(e){var t;try{if((t=JSON.parse(e)).error)return t.error;throw e}catch(t){return e}},XhrClient}();!function(e){e[e.Aad=0]="Aad",e[e.Adfs=1]="Adfs",e[e.B2C=2]="B2C"}(Kt||(Kt={}));var an,ln=function(e){function AadAuthority(t,n){return e.call(this,t,n)||this}return __extends(AadAuthority,e),Object.defineProperty(AadAuthority.prototype,"AadInstanceDiscoveryEndpointUrl",{get:function(){return AadAuthority.AadInstanceDiscoveryEndpoint+"?api-version=1.0&authorization_endpoint="+this.CanonicalAuthority+"oauth2/v2.0/authorize"},enumerable:!0,configurable:!0}),Object.defineProperty(AadAuthority.prototype,"AuthorityType",{get:function(){return Kt.Aad},enumerable:!0,configurable:!0}),AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync=function(){var e=this,t=new Promise(function(t,n){return t(e.DefaultOpenIdConfigurationEndpoint)});if(!this.IsValidationEnabled)return t;var n=this.CanonicalAuthorityUrlComponents.HostNameAndPort;return this.IsInTrustedHostList(n)?t:(new sn).sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl,"GET",!0).then(function(e){return e.tenant_discovery_endpoint})},AadAuthority.prototype.IsInTrustedHostList=function(e){return at[e.toLowerCase()]},AadAuthority.AadInstanceDiscoveryEndpoint="https://login.microsoftonline.com/common/discovery/instance",AadAuthority}(function(){function Authority(e,t){this.IsValidationEnabled=t,this.CanonicalAuthority=e,this.validateAsUri()}return Object.defineProperty(Authority.prototype,"Tenant",{get:function(){return this.CanonicalAuthorityUrlComponents.PathSegments[0]},enumerable:!0,configurable:!0}),Object.defineProperty(Authority.prototype,"AuthorizationEndpoint",{get:function(){return this.validateResolved(),this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}",this.Tenant)},enumerable:!0,configurable:!0}),Object.defineProperty(Authority.prototype,"EndSessionEndpoint",{get:function(){return this.validateResolved(),this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}",this.Tenant)},enumerable:!0,configurable:!0}),Object.defineProperty(Authority.prototype,"SelfSignedJwtAudience",{get:function(){return this.validateResolved(),this.tenantDiscoveryResponse.Issuer.replace("{tenant}",this.Tenant)},enumerable:!0,configurable:!0}),Authority.prototype.validateResolved=function(){if(!this.tenantDiscoveryResponse)throw"Please call ResolveEndpointsAsync first"},Object.defineProperty(Authority.prototype,"CanonicalAuthority",{get:function(){return this.canonicalAuthority},set:function(e){this.canonicalAuthority=Tt.CanonicalizeUri(e),this.canonicalAuthorityUrlComponents=null},enumerable:!0,configurable:!0}),Object.defineProperty(Authority.prototype,"CanonicalAuthorityUrlComponents",{get:function(){return this.canonicalAuthorityUrlComponents||(this.canonicalAuthorityUrlComponents=Tt.GetUrlComponents(this.CanonicalAuthority)),this.canonicalAuthorityUrlComponents},enumerable:!0,configurable:!0}),Object.defineProperty(Authority.prototype,"DefaultOpenIdConfigurationEndpoint",{get:function(){return this.CanonicalAuthority+"v2.0/.well-known/openid-configuration"},enumerable:!0,configurable:!0}),Authority.prototype.validateAsUri=function(){var e;try{e=this.CanonicalAuthorityUrlComponents}catch(e){throw Wt.invalidAuthorityType}if(!e.Protocol||"https:"!==e.Protocol.toLowerCase())throw Wt.authorityUriInsecure;if(!e.PathSegments||e.PathSegments.length<1)throw Wt.authorityUriInvalidPath},Authority.prototype.DiscoverEndpoints=function(e){return(new sn).sendRequestAsync(e,"GET",!0).then(function(e){return{AuthorizationEndpoint:e.authorization_endpoint,EndSessionEndpoint:e.end_session_endpoint,Issuer:e.issuer}})},Authority.prototype.resolveEndpointsAsync=function(){var e=this,t="";return this.GetOpenIdConfigurationEndpointAsync().then(function(n){return t=n,e.DiscoverEndpoints(t)}).then(function(t){return e.tenantDiscoveryResponse=t,e})},Authority}()),dn=function(e){function B2cAuthority(t,n){var r=e.call(this,t,n)||this,o=Tt.GetUrlComponents(t),i=o.PathSegments;if(i.length<3)throw Wt.b2cAuthorityUriInvalidPath;return r.CanonicalAuthority="https://"+o.HostNameAndPort+"/"+i[0]+"/"+i[1]+"/"+i[2]+"/",r}return __extends(B2cAuthority,e),Object.defineProperty(B2cAuthority.prototype,"AuthorityType",{get:function(){return Kt.B2C},enumerable:!0,configurable:!0}),B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync=function(){var e=this,t=new Promise(function(t,n){return t(e.DefaultOpenIdConfigurationEndpoint)});return this.IsValidationEnabled?this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)?t:new Promise(function(e,t){return t(Wt.unsupportedAuthorityValidation)}):t},B2cAuthority.B2C_PREFIX="tfp",B2cAuthority}(ln),cn=function(){function AuthorityFactory(){}return AuthorityFactory.DetectAuthorityFromUrl=function(e){switch(e=Tt.CanonicalizeUri(e),Tt.GetUrlComponents(e).PathSegments[0]){case"tfp":return Kt.B2C;case"adfs":return Kt.Adfs;default:return Kt.Aad}},AuthorityFactory.CreateInstance=function(e,t){if(wt.isEmpty(e))return null;switch(AuthorityFactory.DetectAuthorityFromUrl(e)){case Kt.B2C:return new dn(e,t);case Kt.Aad:return new ln(e,t);default:throw Wt.invalidAuthorityType}},AuthorityFactory}();!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(an||(an={}));var pn=function(){function Logger(e,t){void 0===t&&(t={}),this.level=an.Info;var n=t.correlationId,r=void 0===n?"":n,o=t.level,i=void 0===o?an.Info:o,s=t.piiLoggingEnabled,a=void 0!==s&&s;this.localCallback=e,this.correlationId=r,this.level=i,this.piiLoggingEnabled=a}return Logger.prototype.logMessage=function(e,t,n){if(!(e>this.level||!this.piiLoggingEnabled&&n)){var r,o=(new Date).toUTCString();r=wt.isEmpty(this.correlationId)?o+":1.1.3-"+an[e]+" "+t:o+":"+this.correlationId+"-1.1.3-"+an[e]+" "+t,this.executeCallback(e,r,n)}},Logger.prototype.executeCallback=function(e,t,n){this.localCallback&&this.localCallback(e,t,n)},Logger.prototype.error=function(e){this.logMessage(an.Error,e,!1)},Logger.prototype.errorPii=function(e){this.logMessage(an.Error,e,!0)},Logger.prototype.warning=function(e){this.logMessage(an.Warning,e,!1)},Logger.prototype.warningPii=function(e){this.logMessage(an.Warning,e,!0)},Logger.prototype.info=function(e){this.logMessage(an.Info,e,!1)},Logger.prototype.infoPii=function(e){this.logMessage(an.Info,e,!0)},Logger.prototype.verbose=function(e){this.logMessage(an.Verbose,e,!1)},Logger.prototype.verbosePii=function(e){this.logMessage(an.Verbose,e,!0)},Logger.prototype.isPiiLoggingEnabled=function(){return this.piiLoggingEnabled},Logger}(),un={clientId:"",authority:null,validateAuthority:!0,redirectUri:function(){return Tt.getDefaultRedirectUri()},postLogoutRedirectUri:function(){return Tt.getDefaultRedirectUri()},navigateToLoginRequestUrl:!0},hn={cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},gn={logger:new pn(null),loadFrameTimeout:6e3,tokenRenewalOffsetSeconds:300,navigateFrameWait:500},mn={isAngular:!1,unprotectedResources:new Array,protectedResourceMap:new Map};var fn={code:"server_unavailable",desc:"Server is temporarily unavailable."},yn={code:"unknown_server_error"},vn=function(e){function ServerError(t,n){var r=e.call(this,t,n)||this;return r.name="ServerError",Object.setPrototypeOf(r,ServerError.prototype),r}return __extends(ServerError,e),ServerError.createServerUnavailableError=function(){return new ServerError(fn.code,fn.desc)},ServerError.createUnknownServerError=function(e){return new ServerError(yn.code,e)},ServerError}(St),kn={code:"interaction_required"},wn={code:"consent_required"},Tn={code:"login_required"},Cn=function(e){function InteractionRequiredAuthError(t,n){var r=e.call(this,t,n)||this;return r.name="InteractionRequiredAuthError",Object.setPrototypeOf(r,InteractionRequiredAuthError.prototype),r}return __extends(InteractionRequiredAuthError,e),InteractionRequiredAuthError.isInteractionRequiredError=function(e){var t=[kn.code,wn.code,Tn.code];return e&&t.indexOf(e)>-1},InteractionRequiredAuthError.createLoginRequiredAuthError=function(e){return new InteractionRequiredAuthError(Tn.code,e)},InteractionRequiredAuthError.createInteractionRequiredAuthError=function(e){return new InteractionRequiredAuthError(kn.code,e)},InteractionRequiredAuthError.createConsentRequiredAuthError=function(e){return new InteractionRequiredAuthError(wn.code,e)},InteractionRequiredAuthError}(vn);function buildResponseStateOnly(e){return{uniqueId:"",tenantId:"",tokenType:"",idToken:null,idTokenClaims:null,accessToken:"",scopes:null,expiresOn:null,account:null,accountState:e}}var bn="event_name",_n="start_time",Sn="elapsed_time",Pn={MsalCorrelationIdConstStrKey:"Microsoft.MSAL.correlation_id",ApiTelemIdConstStrKey:"msal.api_telem_id",ApiIdConstStrKey:"msal.api_id",BrokerAppConstStrKey:"Microsoft_MSAL_broker_app",CacheEventCountConstStrKey:"Microsoft_MSAL_cache_event_count",HttpEventCountTelemetryBatchKey:"Microsoft_MSAL_http_event_count",IdpConstStrKey:"Microsoft_MSAL_idp",IsSilentTelemetryBatchKey:"",IsSuccessfulConstStrKey:"Microsoft_MSAL_is_successful",ResponseTimeConstStrKey:"Microsoft_MSAL_response_time",TenantIdConstStrKey:"Microsoft_MSAL_tenant_id",UiEventCountTelemetryBatchKey:"Microsoft_MSAL_ui_event_count"},In=function(e){return"msal."+(e||"")},An=function(e){function DefaultEvent(t,n,r,o){var i=e.call(this,In("default_event"),n)||this;return i.event[In("client_id")]=r,i.event[In("sdk_plaform")]=t.sdk,i.event[In("sdk_version")]=t.sdkVersion,i.event[In("application_name")]=t.applicationName,i.event[In("application_version")]=t.applicationVersion,i.event[""+Pn.UiEventCountTelemetryBatchKey]=i.getEventCount(In("ui_event"),o),i.event[""+Pn.HttpEventCountTelemetryBatchKey]=i.getEventCount(In("http_event"),o),i.event[""+Pn.CacheEventCountConstStrKey]=i.getEventCount(In("cache_event"),o),i}return __extends(DefaultEvent,e),DefaultEvent.prototype.getEventCount=function(e,t){return t[e]?t[e]:0},DefaultEvent}(function(){function TelemetryEvent(e,t){var n;this.startTimestamp=Date.now(),this.eventId=rt.createNewGuid(),this.event=((n={})[In(bn)]=e,n[In(_n)]=this.startTimestamp,n[In(Sn)]=-1,n[""+Pn.MsalCorrelationIdConstStrKey]=t,n)}return TelemetryEvent.prototype.setElapsedTime=function(e){this.event[In(Sn)]=e},TelemetryEvent.prototype.stop=function(){this.setElapsedTime(+Date.now()-+this.startTimestamp)},Object.defineProperty(TelemetryEvent.prototype,"telemetryCorrelationId",{get:function(){return this.event[""+Pn.MsalCorrelationIdConstStrKey]},set:function(e){this.event[""+Pn.MsalCorrelationIdConstStrKey]=e},enumerable:!0,configurable:!0}),Object.defineProperty(TelemetryEvent.prototype,"eventName",{get:function(){return this.event[In(bn)]},enumerable:!0,configurable:!0}),TelemetryEvent.prototype.get=function(){return oe({},this.event,{eventId:this.eventId})},TelemetryEvent}()),En=function(e){return e.telemetryCorrelationId+"-"+e.eventId+"-"+e.eventName},xn=function(){function TelemetryManager(e,t){this.completedEvents={},this.inProgressEvents={},this.eventCountByCorrelationId={},this.onlySendFailureTelemetry=!1,this.telemetryPlatform=e.platform,this.clientId=e.clientId,this.onlySendFailureTelemetry=e.onlySendFailureTelemetry,this.telemetryEmitter=t}return TelemetryManager.prototype.startEvent=function(e){if(this.telemetryEmitter){var t=En(e);this.inProgressEvents[t]=e}},TelemetryManager.prototype.stopEvent=function(e){var t=En(e);if(this.telemetryEmitter&&this.inProgressEvents[t]){e.stop(),this.incrementEventCount(e);var n=this.completedEvents[e.telemetryCorrelationId];this.completedEvents[e.telemetryCorrelationId]=(n||[]).concat([e]),delete this.inProgressEvents[t]}},TelemetryManager.prototype.flush=function(e){var t=this;if(this.telemetryEmitter&&this.completedEvents[e]){var n=this.getOrphanedEvents(e);n.forEach(function(e){return t.incrementEventCount(e)});var r=this.completedEvents[e].concat(n);delete this.completedEvents[e];var o=this.eventCountByCorrelationId[e];if(delete this.eventCountByCorrelationId[e],r&&r.length){var i=new An(this.telemetryPlatform,e,this.clientId,o),s=r.concat([i]);this.telemetryEmitter(s.map(function(e){return e.get()}))}}},TelemetryManager.prototype.incrementEventCount=function(e){var t,n=e.eventName,r=this.eventCountByCorrelationId[e.telemetryCorrelationId];r?r[n]=r[n]?r[n]+1:1:this.eventCountByCorrelationId[e.telemetryCorrelationId]=((t={})[n]=1,t)},TelemetryManager.prototype.getOrphanedEvents=function(e){var t=this;return Object.keys(this.inProgressEvents).reduce(function(n,r){if(-1!==r.indexOf(e)){var o=t.inProgressEvents[r];return delete t.inProgressEvents[r],n.concat([o])}return n},[])},TelemetryManager}(),Dn="https://login.microsoftonline.com/common",Rn="id_token",On="token",Ln="id_token token",Mn=function(e,t,n){var r=n.value;return n.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.isInIframe()?new Promise(function(){}):r.apply(this,e)},n},Un=function(){function UserAgentApplication(e){this.authResponseCallback=null,this.tokenReceivedCallback=null,this.errorReceivedCallback=null,this.config=function buildConfiguration(e){var t=e.auth,n=e.cache,r=void 0===n?{}:n,o=e.system,i=void 0===o?{}:o,s=e.framework,a=void 0===s?{}:s;return{auth:oe({},un,t),cache:oe({},hn,r),system:oe({},gn,i),framework:oe({},mn,a)}}(e),this.redirectCallbacksSet=!1,this.logger=this.config.system.logger,this.clientId=this.config.auth.clientId,this.inCookie=this.config.cache.storeAuthStateInCookie,this.telemetryManager=this.getTelemetryManagerFromConfig(this.config.system.telemetry,this.clientId),this.authority=this.config.auth.authority||Dn,this.loginInProgress=!1,this.acquireTokenInProgress=!1;try{this.cacheStorage=new tn(this.config.cache.cacheLocation)}catch(e){throw Zt.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation)}window.openedWindows=[],window.activeRenewals={},window.renewStates=[],window.callbackMappedToRenewStates={},window.promiseMappedToRenewStates={},window.msal=this;var t=window.location.hash,n=this.urlContainsHash(t);this.config.framework.isAngular||n&&this.handleAuthenticationResponse(t)}return Object.defineProperty(UserAgentApplication.prototype,"authority",{get:function(){return this.authorityInstance.CanonicalAuthority},set:function(e){this.authorityInstance=cn.CreateInstance(e,this.config.auth.validateAuthority)},enumerable:!0,configurable:!0}),UserAgentApplication.prototype.getAuthorityInstance=function(){return this.authorityInstance},UserAgentApplication.prototype.handleRedirectCallback=function(e,t){if(!e)throw this.redirectCallbacksSet=!1,Zt.createInvalidCallbackObjectError(e);if(t?(this.tokenReceivedCallback=e,this.errorReceivedCallback=t,this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).")):this.authResponseCallback=e,this.redirectCallbacksSet=!0,!this.config.framework.isAngular){var n=this.cacheStorage.getItem(ot.urlHash);n&&this.processCallBack(n,null)}},UserAgentApplication.prototype.authResponseHandler=function(e,t,n){if(e===ot.interactionTypeRedirect)this.errorReceivedCallback?this.tokenReceivedCallback(t):this.authResponseCallback&&this.authResponseCallback(null,t);else{if(e!==ot.interactionTypePopup)throw zt.createInvalidInteractionTypeError();n(t)}},UserAgentApplication.prototype.authErrorHandler=function(e,t,n,r){if(e===ot.interactionTypeRedirect)this.errorReceivedCallback?this.errorReceivedCallback(t,n.accountState):this.authResponseCallback(t,n);else{if(e!==ot.interactionTypePopup)throw zt.createInvalidInteractionTypeError();r(t)}},UserAgentApplication.prototype.loginRedirect=function(e){if(!this.redirectCallbacksSet)throw Zt.createRedirectCallbacksNotSetError();this.acquireTokenInteractive(ot.interactionTypeRedirect,!0,e)},UserAgentApplication.prototype.acquireTokenRedirect=function(e){if(!e)throw Zt.createEmptyRequestError();if(!this.redirectCallbacksSet)throw Zt.createRedirectCallbacksNotSetError();this.acquireTokenInteractive(ot.interactionTypeRedirect,!1,e)},UserAgentApplication.prototype.loginPopup=function(e){var t=this;return new Promise(function(n,r){t.acquireTokenInteractive(ot.interactionTypePopup,!0,e,n,r)})},UserAgentApplication.prototype.acquireTokenPopup=function(e){var t=this;if(!e)throw Zt.createEmptyRequestError();return new Promise(function(n,r){t.acquireTokenInteractive(ot.interactionTypePopup,!1,e,n,r)})},UserAgentApplication.prototype.acquireTokenInteractive=function(e,t,n,r,o){var i=this;if(this.loginInProgress||this.acquireTokenInProgress){var s=this.loginInProgress?zt.createLoginInProgressError():zt.createAcquireTokenInProgressError(),a=buildResponseStateOnly(this.getAccountState(n&&n.state));this.authErrorHandler(e,s,a,o)}else{var l=t?this.appendScopes(n):n.scopes;this.validateInputScope(l,!t);var d=n&&n.account&&!t?n.account:this.getAccount();if(d||Qt.isSSOParam(n))this.acquireTokenHelper(d,e,t,n,l,r,o);else{if(!t)throw this.logger.info("User login is required"),zt.createUserLoginRequiredError();if(this.extractADALIdToken()&&!l){this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");var c=this.buildIDTokenRequest(n);this.silentLogin=!0,this.acquireTokenSilent(c).then(function(t){i.silentLogin=!1,i.logger.info("Unified cache call is successful"),i.authResponseHandler(e,t,r)},function(s){i.silentLogin=!1,i.logger.error("Error occurred during unified cache ATS: "+s),i.acquireTokenHelper(null,e,t,n,l,r,o)})}else this.acquireTokenHelper(null,e,t,n,l,r,o)}}},UserAgentApplication.prototype.acquireTokenHelper=function(e,t,n,r,o,i,s){var a=this;n?this.loginInProgress=!0:this.acquireTokenInProgress=!0;var l,d,c=o?o.join(" ").toLowerCase():this.clientId.toLowerCase(),p=!n&&r&&r.authority?cn.CreateInstance(r.authority,this.config.auth.validateAuthority):this.authorityInstance;(t!==ot.interactionTypePopup||(d=this.openWindow("about:blank","_blank",1,this,i,s)))&&p.resolveEndpointsAsync().then(function(){var u,h=n?Rn:a.getTokenType(e,o,!1);n&&((u=a.cacheStorage.getItem(ot.angularLoginRequest))&&""!==u?a.cacheStorage.setItem(ot.angularLoginRequest,""):u=window.location.href),l=new Qt(p,a.clientId,o,h,a.getRedirectUri(),r&&r.state),a.updateCacheEntries(l,e,u),l.populateQueryParams(e,r);var g=Tt.createNavigateUrl(l)+ot.response_mode_fragment;if(t===ot.interactionTypeRedirect)n||a.cacheStorage.setItem(ot.stateAcquireToken,l.state,a.inCookie);else{if(t!==ot.interactionTypePopup)throw zt.createInvalidInteractionTypeError();window.renewStates.push(l.state),window.requestType=n?ot.login:ot.renewToken,a.registerCallback(l.state,c,i,s)}a.navigateWindow(g,d)}).catch(function(e){a.logger.warning("could not resolve endpoints"),a.authErrorHandler(t,zt.createEndpointResolutionError(e.toString),buildResponseStateOnly(r.state),s),d&&d.close()})},UserAgentApplication.prototype.acquireTokenSilent=function(e){var t=this;if(!e)throw Zt.createEmptyRequestError();return new Promise(function(n,r){t.validateInputScope(e.scopes,!0);var o=e.scopes.join(" ").toLowerCase(),i=e.account||t.getAccount(),s=t.cacheStorage.getItem(ot.adalIdToken);if(!i&&!e.sid&&!e.loginHint&&wt.isEmpty(s))return t.logger.info("User login is required"),r(zt.createUserLoginRequiredError());var a=t.getTokenType(i,e.scopes,!0),l=new Qt(cn.CreateInstance(e.authority,t.config.auth.validateAuthority),t.clientId,e.scopes,a,t.getRedirectUri(),e&&e.state);if(Qt.isSSOParam(e)||i)l.populateQueryParams(i,e);else if(!i&&!wt.isEmpty(s)){var d=Jt.extractIdToken(s);t.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken "),l.populateQueryParams(i,null,d)}var c,p,u=e.claimsRequest||l.claimsValue;if(!u&&!e.forceRefresh)try{p=t.getCachedToken(l,i)}catch(e){c=e}if(p)return t.logger.info("Token is already in cache for scope:"+o),n(p),null;if(c)return t.logger.infoPii(c.errorCode+":"+c.errorMessage),r(c),null;var h=void 0;return h=u?"Skipped cache lookup since claims were given.":e.forceRefresh?"Skipped cache lookup since request.forceRefresh option was set to true":"Token is not in cache for scope:"+o,t.logger.verbose(h),l.authorityInstance||(l.authorityInstance=e.authority?cn.CreateInstance(e.authority,t.config.auth.validateAuthority):t.authorityInstance),l.authorityInstance.resolveEndpointsAsync().then(function(){window.activeRenewals[o]?(t.logger.verbose("Renew token for scope: "+o+" is in progress. Registering callback"),t.registerCallback(window.activeRenewals[o],o,n,r)):e.scopes&&e.scopes.indexOf(t.clientId)>-1&&1===e.scopes.length?(t.logger.verbose("renewing idToken"),t.silentLogin=!0,t.renewIdToken(e.scopes,n,r,i,l)):(t.logger.verbose("renewing accesstoken"),t.renewToken(e.scopes,n,r,i,l))}).catch(function(e){return t.logger.warning("could not resolve endpoints"),r(zt.createEndpointResolutionError(e.toString())),null})})},UserAgentApplication.prototype.openWindow=function(e,t,n,r,o,i){var s,a=this;try{s=this.openPopup(e,t,ot.popUpWidth,ot.popUpHeight)}catch(e){return r.loginInProgress=!1,r.acquireTokenInProgress=!1,this.logger.info(Et.code+":"+Et.desc),this.cacheStorage.setItem(ot.msalError,Et.code),this.cacheStorage.setItem(ot.msalErrorDescription,Et.desc),i&&i(zt.createPopupWindowError()),null}window.openedWindows.push(s);var l=window.setInterval(function(){if(s&&s.closed&&(r.loginInProgress||r.acquireTokenInProgress)){if(i&&i(zt.createUserCancelledError()),window.clearInterval(l),a.config.framework.isAngular)return void a.broadcast("msal:popUpClosed",Ut.code+ot.resourceDelimiter+Ut.desc);r.loginInProgress=!1,r.acquireTokenInProgress=!1}try{var e=s.location;if(-1!==e.href.indexOf(a.getRedirectUri())&&(window.clearInterval(l),r.loginInProgress=!1,r.acquireTokenInProgress=!1,a.logger.info("Closing popup window"),a.config.framework.isAngular)){a.broadcast("msal:popUpHashChanged",e.hash);for(var t=0;t<window.openedWindows.length;t++)window.openedWindows[t].close()}}catch(e){}},n);return s},UserAgentApplication.prototype.openPopup=function(e,t,n,r){try{var o=window.screenLeft?window.screenLeft:window.screenX,i=window.screenTop?window.screenTop:window.screenY,s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,l=s/2-n/2+o,d=a/2-r/2+i,c=window.open(e,t,"width="+n+", height="+r+", top="+d+", left="+l);if(!c)throw zt.createPopupWindowError();return c.focus&&c.focus(),c}catch(e){throw this.logger.error("error opening popup "+e.message),this.loginInProgress=!1,this.acquireTokenInProgress=!1,zt.createPopupWindowError(e.toString())}},UserAgentApplication.prototype.isInIframe=function(){return window.parent!==window},UserAgentApplication.prototype.parentIsMsal=function(){return window.parent!==window&&window.parent.msal},UserAgentApplication.prototype.loadIframeTimeout=function(e,t,n){var r=this,o=window.activeRenewals[n];this.logger.verbose("Set loading state to pending for: "+n+":"+o),this.cacheStorage.setItem(ot.renewStatus+o,ot.tokenRenewStatusInProgress),this.loadFrame(e,t),setTimeout(function(){r.cacheStorage.getItem(ot.renewStatus+o)===ot.tokenRenewStatusInProgress&&(r.logger.verbose("Loading frame has timed out after: "+r.config.system.loadFrameTimeout/1e3+" seconds for scope "+n+":"+o),o&&window.callbackMappedToRenewStates[o]&&window.callbackMappedToRenewStates[o](null,zt.createTokenRenewalTimeoutError()),r.cacheStorage.setItem(ot.renewStatus+o,ot.tokenRenewStatusCancelled))},this.config.system.loadFrameTimeout)},UserAgentApplication.prototype.loadFrame=function(e,t){var n=this;this.logger.info("LoadFrame: "+t);var r=t;setTimeout(function(){var o=n.addHiddenIFrame(r);""!==o.src&&"about:blank"!==o.src||(o.src=e,n.logger.infoPii("Frame Name : "+t+" Navigated to: "+e))},this.config.system.navigateFrameWait)},UserAgentApplication.prototype.addHiddenIFrame=function(e){if(void 0===e)return null;this.logger.info("Add msal frame to document:"+e);var t=document.getElementById(e);if(!t){if(document.createElement&&document.documentElement&&-1===window.navigator.userAgent.indexOf("MSIE 5.0")){var n=document.createElement("iframe");n.setAttribute("id",e),n.style.visibility="hidden",n.style.position="absolute",n.style.width=n.style.height="0",n.style.border="0",t=document.getElementsByTagName("body")[0].appendChild(n)}else document.body&&document.body.insertAdjacentHTML&&document.body.insertAdjacentHTML("beforeend","<iframe name='"+e+"' id='"+e+"' style='display:none'></iframe>");window.frames&&window.frames[e]&&(t=window.frames[e])}return t},UserAgentApplication.prototype.navigateWindow=function(e,t){if(!e||wt.isEmpty(e))throw this.logger.info("Navigate url is empty"),St.createUnexpectedError("Navigate url is empty");var n=t||window,r=t?"Navigated Popup window to:"+e:"Navigate to:"+e;this.logger.infoPii(r),n.location.replace(e)},UserAgentApplication.prototype.registerCallback=function(e,t,n,r){var o=this;window.activeRenewals[t]=e,window.promiseMappedToRenewStates[e]||(window.promiseMappedToRenewStates[e]=[]),window.promiseMappedToRenewStates[e].push({resolve:n,reject:r}),window.callbackMappedToRenewStates[e]||(window.callbackMappedToRenewStates[e]=function(n,r){window.activeRenewals[t]=null;for(var i=0;i<window.promiseMappedToRenewStates[e].length;++i)try{if(r)window.promiseMappedToRenewStates[e][i].reject(r);else{if(!n)throw St.createUnexpectedError("Error and response are both null");window.promiseMappedToRenewStates[e][i].resolve(n)}}catch(e){o.logger.warning(e)}window.promiseMappedToRenewStates[e]=null,window.callbackMappedToRenewStates[e]=null})},UserAgentApplication.prototype.logout=function(){var e=this;this.clearCache(),this.account=null;var t="";this.getPostLogoutRedirectUri()&&(t="post_logout_redirect_uri="+encodeURIComponent(this.getPostLogoutRedirectUri())),this.authorityInstance.resolveEndpointsAsync().then(function(n){var r=n.EndSessionEndpoint?n.EndSessionEndpoint+"?"+t:e.authority+"oauth2/v2.0/logout?"+t;e.navigateWindow(r)})},UserAgentApplication.prototype.clearCache=function(){window.renewStates=[];for(var e=this.cacheStorage.getAllAccessTokens(ot.clientId,ot.homeAccountIdentifier),t=0;t<e.length;t++)this.cacheStorage.removeItem(JSON.stringify(e[t].key));this.cacheStorage.resetCacheItems(),this.cacheStorage.clearCookie()},UserAgentApplication.prototype.clearCacheForScope=function(e){for(var t=this.cacheStorage.getAllAccessTokens(ot.clientId,ot.homeAccountIdentifier),n=0;n<t.length;n++){var r=t[n];r.value.accessToken===e&&this.cacheStorage.removeItem(JSON.stringify(r.key))}},UserAgentApplication.prototype.isCallback=function(e){return this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0."),this.urlContainsHash(e)},UserAgentApplication.prototype.urlContainsHash=function(e){var t=this.deserializeHash(e);return t.hasOwnProperty(ot.errorDescription)||t.hasOwnProperty(ot.error)||t.hasOwnProperty(ot.accessToken)||t.hasOwnProperty(ot.idToken)},UserAgentApplication.prototype.processCallBack=function(e,t,n){var r,o;this.logger.info("Processing the callback from redirect response"),t||(t=this.getResponseState(e));try{r=this.saveTokenFromHash(e,t)}catch(e){o=e}this.cacheStorage.removeItem(ot.urlHash);try{this.cacheStorage.clearCookie();var i=this.getAccountState(t.state);if(r){if(t.requestType===ot.renewToken||r.accessToken?(window.parent!==window?this.logger.verbose("Window is in iframe, acquiring token silently"):this.logger.verbose("acquiring token interactive in progress"),r.tokenType=ot.accessToken):t.requestType===ot.login&&(r.tokenType=ot.idToken),!n)return void this.authResponseHandler(ot.interactionTypeRedirect,r)}else if(!n)return void this.authErrorHandler(ot.interactionTypeRedirect,o,buildResponseStateOnly(i));n(r,o)}catch(e){throw this.logger.error("Error occurred in token received callback function: "+e),zt.createErrorInCallbackFunction(e.toString())}},UserAgentApplication.prototype.handleAuthenticationResponse=function(e){null==e&&(e=window.location.hash);var t=null,n=!1,r=!1;try{r=window.opener&&window.opener.msal&&window.opener.msal!==window.msal}catch(e){r=!1}r?(t=window.opener.msal,n=!0):window.parent&&window.parent.msal&&(t=window.parent.msal);var o=t.getResponseState(e),i=null;if(t.logger.info("Returned from redirect url"),this.parentIsMsal())i=window.parent.callbackMappedToRenewStates[o.state];else if(r)i=window.opener.callbackMappedToRenewStates[o.state];else{if(i=null,t.config.auth.navigateToLoginRequestUrl)return t.cacheStorage.setItem(ot.urlHash,e),void(window.parent!==window||n||(window.location.href=t.cacheStorage.getItem(ot.loginRequest,t.inCookie)));if(window.location.hash="",!this.redirectCallbacksSet)return void t.cacheStorage.setItem(ot.urlHash,e)}if(t.processCallBack(e,o,i),r)for(var s=0;s<window.opener.openedWindows.length;s++)window.opener.openedWindows[s].close()},UserAgentApplication.prototype.deserializeHash=function(e){var t=Tt.getHashFromUrl(e);return rt.deserialize(t)},UserAgentApplication.prototype.getResponseState=function(e){var t,n=this.deserializeHash(e);if(!n)throw St.createUnexpectedError("Hash was not parsed correctly.");if(!n.hasOwnProperty("state"))throw St.createUnexpectedError("Hash does not contain state.");if((t={requestType:ot.unknown,state:n.state,stateMatch:!1}).state===this.cacheStorage.getItem(ot.stateLogin,this.inCookie)||t.state===this.silentAuthenticationState)return t.requestType=ot.login,t.stateMatch=!0,t;if(t.state===this.cacheStorage.getItem(ot.stateAcquireToken,this.inCookie))return t.requestType=ot.renewToken,t.stateMatch=!0,t;if(!t.stateMatch){t.requestType=window.requestType;for(var r=window.renewStates,o=0;o<r.length;o++)if(r[o]===t.state){t.stateMatch=!0;break}}return t},UserAgentApplication.prototype.getCachedToken=function(e,t){var n=null,r=e.scopes,o=this.cacheStorage.getAllAccessTokens(this.clientId,t?t.homeAccountIdentifier:null);if(0===o.length)return null;var i=[];if(e.authority){for(s=0;s<o.length;s++){l=(a=o[s]).key.scopes.split(" ");kt.containsScope(l,r)&&Tt.CanonicalizeUri(a.key.authority)===e.authority&&i.push(a)}if(0===i.length)return null;if(1!==i.length)throw zt.createMultipleMatchingTokensInCacheError(r.toString());n=i[0]}else{for(var s=0;s<o.length;s++){var a,l=(a=o[s]).key.scopes.split(" ");kt.containsScope(l,r)&&i.push(a)}if(1===i.length)n=i[0],e.authorityInstance=cn.CreateInstance(n.key.authority,this.config.auth.validateAuthority);else{if(i.length>1)throw zt.createMultipleMatchingTokensInCacheError(r.toString());var d=this.getUniqueAuthority(o,"authority");if(d.length>1)throw zt.createMultipleAuthoritiesInCacheError(r.toString());e.authorityInstance=cn.CreateInstance(d[0],this.config.auth.validateAuthority)}}if(null!=n){var c=Number(n.value.expiresIn),p=this.config.system.tokenRenewalOffsetSeconds||300;if(c&&c>rn.now()+p){var u=new Yt(n.value.idToken);if(!t&&!(t=this.getAccount()))throw St.createUnexpectedError("Account should not be null here.");var h=this.getAccountState(e.state),g={uniqueId:"",tenantId:"",tokenType:n.value.idToken===n.value.accessToken?ot.idToken:ot.accessToken,idToken:u,idTokenClaims:u.claims,accessToken:n.value.accessToken,scopes:n.key.scopes.split(" "),expiresOn:new Date(1e3*c),account:t,accountState:h};return on.setResponseIdToken(g,u),g}return this.cacheStorage.removeItem(JSON.stringify(i[0].key)),null}return null},UserAgentApplication.prototype.getUniqueAuthority=function(e,t){var n=[],r=[];return e.forEach(function(e){e.key.hasOwnProperty(t)&&-1===r.indexOf(e.key[t])&&(r.push(e.key[t]),n.push(e.key[t]))}),n},UserAgentApplication.prototype.extractADALIdToken=function(){var e=this.cacheStorage.getItem(ot.adalIdToken);return wt.isEmpty(e)?null:Jt.extractIdToken(e)},UserAgentApplication.prototype.renewToken=function(e,t,n,r,o){var i=e.join(" ").toLowerCase();this.logger.verbose("renewToken is called for scope:"+i);var s=this.addHiddenIFrame("msalRenewFrame"+i);this.updateCacheEntries(o,r),this.logger.verbose("Renew token Expected state: "+o.state);var a=Tt.urlRemoveQueryStringParameter(Tt.createNavigateUrl(o),ot.prompt)+ot.prompt_none;window.renewStates.push(o.state),window.requestType=ot.renewToken,this.registerCallback(o.state,i,t,n),this.logger.infoPii("Navigate to:"+a),s.src="about:blank",this.loadIframeTimeout(a,"msalRenewFrame"+i,i)},UserAgentApplication.prototype.renewIdToken=function(e,t,n,r,o){this.logger.info("renewidToken is called");var i=this.addHiddenIFrame("msalIdTokenFrame");this.updateCacheEntries(o,r),this.logger.verbose("Renew Idtoken Expected state: "+o.state);var s=Tt.urlRemoveQueryStringParameter(Tt.createNavigateUrl(o),ot.prompt)+ot.prompt_none;this.silentLogin?(window.requestType=ot.login,this.silentAuthenticationState=o.state):(window.requestType=ot.renewToken,window.renewStates.push(o.state)),this.registerCallback(o.state,this.clientId,t,n),this.logger.infoPii("Navigate to:"+s),i.src="about:blank",this.loadIframeTimeout(s,"msalIdTokenFrame",this.clientId)},UserAgentApplication.prototype.saveAccessToken=function(e,t,n,r,o){var i,s,a=oe({},e),l=new Xt(r);if(n.hasOwnProperty("scope")){for(var d=(i=n.scope).split(" "),c=this.cacheStorage.getAllAccessTokens(this.clientId,t),p=0;p<c.length;p++){var u=c[p];if(u.key.homeAccountIdentifier===e.account.homeAccountIdentifier){var h=u.key.scopes.split(" ");kt.isIntersectingScopes(h,d)&&this.cacheStorage.removeItem(JSON.stringify(u.key))}}var g=rn.parseExpiresIn(n[ot.expiresIn]);s=rn.now()+g;var m=new Ct(t,this.clientId,i,l.uid,l.utid),f=new bt(n[ot.accessToken],o.rawIdToken,s.toString(),r);this.cacheStorage.setItem(JSON.stringify(m),JSON.stringify(f)),a.accessToken=n[ot.accessToken],a.scopes=d}else{i=this.clientId;m=new Ct(t,this.clientId,i,l.uid,l.utid);s=Number(o.expiration);f=new bt(n[ot.idToken],n[ot.idToken],s.toString(),r);this.cacheStorage.setItem(JSON.stringify(m),JSON.stringify(f)),a.scopes=[i],a.accessToken=n[ot.idToken]}return s?a.expiresOn=new Date(1e3*s):this.logger.error("Could not parse expiresIn parameter"),a},UserAgentApplication.prototype.saveTokenFromHash=function(e,t){this.logger.info("State status:"+t.stateMatch+"; Request type:"+t.requestType),this.cacheStorage.setItem(ot.msalError,""),this.cacheStorage.setItem(ot.msalErrorDescription,"");var n,r={uniqueId:"",tenantId:"",tokenType:"",idToken:null,idTokenClaims:null,accessToken:null,scopes:[],expiresOn:null,account:null,accountState:""},o=this.deserializeHash(e),i="",s="",a=null;if(o.hasOwnProperty(ot.errorDescription)||o.hasOwnProperty(ot.error)){if(this.logger.infoPii("Error :"+o[ot.error]+"; Error description:"+o[ot.errorDescription]),this.cacheStorage.setItem(ot.msalError,o[ot.error]),this.cacheStorage.setItem(ot.msalErrorDescription,o[ot.errorDescription]),t.requestType===ot.login&&(this.loginInProgress=!1,this.cacheStorage.setItem(ot.loginError,o[ot.errorDescription]+":"+o[ot.error]),i=tn.generateAuthorityKey(t.state)),t.requestType===ot.renewToken){this.acquireTokenInProgress=!1,i=tn.generateAuthorityKey(t.state);var l=this.getAccount(),d=void 0;d=l&&!wt.isEmpty(l.homeAccountIdentifier)?l.homeAccountIdentifier:ot.no_account,s=tn.generateAcquireTokenAccountKey(d,t.state)}var c=o[ot.error],p=o[ot.errorDescription];n=Cn.isInteractionRequiredError(c)||Cn.isInteractionRequiredError(p)?new Cn(o[ot.error],o[ot.errorDescription]):new vn(o[ot.error],o[ot.errorDescription])}else if(t.stateMatch){this.logger.info("State is right"),o.hasOwnProperty(ot.sessionState)&&this.cacheStorage.setItem(ot.msalSessionState,o[ot.sessionState]),r.accountState=this.getAccountState(t.state);var u="";if(o.hasOwnProperty(ot.accessToken)){this.logger.info("Fragment has access token"),this.acquireTokenInProgress=!1,o.hasOwnProperty(ot.idToken)?(a=new Yt(o[ot.idToken]),r.idToken=a,r.idTokenClaims=a.claims):(a=new Yt(this.cacheStorage.getItem(ot.idTokenKey)),r=on.setResponseIdToken(r,a));var h=tn.generateAuthorityKey(t.state),g=this.cacheStorage.getItem(h,this.inCookie);if(wt.isEmpty(g)||(g=Tt.replaceTenantPath(g,r.tenantId)),!o.hasOwnProperty(ot.clientInfo))throw this.logger.warning("ClientInfo not received in the response from AAD"),zt.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");u=o[ot.clientInfo],r.account=nn.createAccount(a,new Xt(u));var m=void 0;m=r.account&&!wt.isEmpty(r.account.homeAccountIdentifier)?r.account.homeAccountIdentifier:ot.no_account,s=tn.generateAcquireTokenAccountKey(m,t.state);var f=tn.generateAcquireTokenAccountKey(ot.no_account,t.state),y=this.cacheStorage.getItem(s),v=void 0;wt.isEmpty(y)?wt.isEmpty(this.cacheStorage.getItem(f))||(r=this.saveAccessToken(r,g,o,u,a)):(v=JSON.parse(y),r.account&&v&&nn.compareAccounts(r.account,v)?(r=this.saveAccessToken(r,g,o,u,a),this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request")):this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request"))}if(o.hasOwnProperty(ot.idToken)){this.logger.info("Fragment has id token"),this.loginInProgress=!1,a=new Yt(o[ot.idToken]),r=on.setResponseIdToken(r,a),o.hasOwnProperty(ot.clientInfo)?u=o[ot.clientInfo]:this.logger.warning("ClientInfo not received in the response from AAD"),i=tn.generateAuthorityKey(t.state);g=this.cacheStorage.getItem(i,this.inCookie);wt.isEmpty(g)||(g=Tt.replaceTenantPath(g,a.tenantId)),this.account=nn.createAccount(a,new Xt(u)),r.account=this.account,a&&a.nonce?a.nonce!==this.cacheStorage.getItem(ot.nonceIdToken,this.inCookie)?(this.account=null,this.cacheStorage.setItem(ot.loginError,"Nonce Mismatch. Expected Nonce: "+this.cacheStorage.getItem(ot.nonceIdToken,this.inCookie)+",Actual Nonce: "+a.nonce),this.logger.error("Nonce Mismatch.Expected Nonce: "+this.cacheStorage.getItem(ot.nonceIdToken,this.inCookie)+",Actual Nonce: "+a.nonce),n=zt.createNonceMismatchError(this.cacheStorage.getItem(ot.nonceIdToken,this.inCookie),a.nonce)):(this.cacheStorage.setItem(ot.idTokenKey,o[ot.idToken]),this.cacheStorage.setItem(ot.msalClientInfo,u),this.saveAccessToken(r,g,o,u,a)):(i=t.state,s=t.state,this.logger.error("Invalid id_token received in the response"),n=zt.createInvalidIdTokenError(a),this.cacheStorage.setItem(ot.msalError,n.errorCode),this.cacheStorage.setItem(ot.msalErrorDescription,n.errorMessage))}}else{i=t.state,s=t.state;var k=this.cacheStorage.getItem(ot.stateLogin,this.inCookie);this.logger.error("State Mismatch.Expected State: "+k+",Actual State: "+t.state),n=zt.createInvalidStateError(t.state,k),this.cacheStorage.setItem(ot.msalError,n.errorCode),this.cacheStorage.setItem(ot.msalErrorDescription,n.errorMessage)}if(this.cacheStorage.setItem(ot.renewStatus+t.state,ot.tokenRenewStatusCompleted),this.cacheStorage.removeAcquireTokenEntries(t.state),this.inCookie&&(this.cacheStorage.setItemCookie(i,"",-1),this.cacheStorage.clearCookie()),n)throw n;if(!r)throw St.createUnexpectedError("Response is null");return r},UserAgentApplication.prototype.getAccount=function(){if(this.account)return this.account;var e=this.cacheStorage.getItem(ot.idTokenKey),t=this.cacheStorage.getItem(ot.msalClientInfo);if(!wt.isEmpty(e)&&!wt.isEmpty(t)){var n=new Yt(e),r=new Xt(t);return this.account=nn.createAccount(n,r),this.account}return null},UserAgentApplication.prototype.getAccountState=function(e){if(e){var t=e.indexOf("|");if(t>-1&&t+1<e.length)return e.substring(t+1)}return e},UserAgentApplication.prototype.getAllAccounts=function(){for(var e=[],t=this.cacheStorage.getAllAccessTokens(ot.clientId,ot.homeAccountIdentifier),n=0;n<t.length;n++){var r=new Yt(t[n].value.idToken),o=new Xt(t[n].value.homeAccountIdentifier),i=nn.createAccount(r,o);e.push(i)}return this.getUniqueAccounts(e)},UserAgentApplication.prototype.getUniqueAccounts=function(e){if(!e||e.length<=1)return e;for(var t=[],n=[],r=0;r<e.length;++r)e[r].homeAccountIdentifier&&-1===t.indexOf(e[r].homeAccountIdentifier)&&(t.push(e[r].homeAccountIdentifier),n.push(e[r]));return n},UserAgentApplication.prototype.validateInputScope=function(e,t){if(e){if(!Array.isArray(e))throw Zt.createScopesNonArrayError(e);if(e.length<1)throw Zt.createEmptyScopesArrayError(e.toString());if(e.indexOf(this.clientId)>-1&&e.length>1)throw Zt.createClientIdSingleScopeError(e.toString())}else if(t)throw Zt.createScopesRequiredError(e)},UserAgentApplication.prototype.getScopeFromState=function(e){if(e){var t=e.indexOf("|");if(t>-1&&t+1<e.length)return e.substring(t+1)}return""},UserAgentApplication.prototype.appendScopes=function(e){var t;return e&&e.scopes&&(t=e.extraScopesToConsent?e.scopes.concat(e.extraScopesToConsent):e.scopes),t},UserAgentApplication.prototype.broadcast=function(e,t){var n=new CustomEvent(e,{detail:t});window.dispatchEvent(n)},UserAgentApplication.prototype.getCachedTokenInternal=function(e,t,n){var r=t||this.getAccount();if(!r)return null;var o=this.authorityInstance?this.authorityInstance:cn.CreateInstance(this.authority,this.config.auth.validateAuthority),i=this.getTokenType(r,e,!0),s=new Qt(o,this.clientId,e,i,this.getRedirectUri(),n);return this.getCachedToken(s,t)},UserAgentApplication.prototype.getScopesForEndpoint=function(e){if(this.config.framework.unprotectedResources.length>0)for(var t=0;t<this.config.framework.unprotectedResources.length;t++)if(e.indexOf(this.config.framework.unprotectedResources[t])>-1)return null;if(this.config.framework.protectedResourceMap.size>0)for(var n=0,r=Array.from(this.config.framework.protectedResourceMap.keys());n<r.length;n++){var o=r[n];if(e.indexOf(o)>-1)return this.config.framework.protectedResourceMap.get(o)}return e.indexOf("http://")>-1||e.indexOf("https://")>-1?this.getHostFromUri(e)===this.getHostFromUri(this.getRedirectUri())?new Array(this.clientId):null:new Array(this.clientId)},UserAgentApplication.prototype.getLoginInProgress=function(){return!!this.cacheStorage.getItem(ot.urlHash)||this.loginInProgress},UserAgentApplication.prototype.setloginInProgress=function(e){this.loginInProgress=e},UserAgentApplication.prototype.getAcquireTokenInProgress=function(){return this.acquireTokenInProgress},UserAgentApplication.prototype.setAcquireTokenInProgress=function(e){this.acquireTokenInProgress=e},UserAgentApplication.prototype.getLogger=function(){return this.config.system.logger},UserAgentApplication.prototype.getRedirectUri=function(){return"function"==typeof this.config.auth.redirectUri?this.config.auth.redirectUri():this.config.auth.redirectUri},UserAgentApplication.prototype.getPostLogoutRedirectUri=function(){return"function"==typeof this.config.auth.postLogoutRedirectUri?this.config.auth.postLogoutRedirectUri():this.config.auth.postLogoutRedirectUri},UserAgentApplication.prototype.getCurrentConfiguration=function(){if(!this.config)throw Zt.createNoSetConfigurationError();return this.config},UserAgentApplication.prototype.getHostFromUri=function(e){var t=String(e).replace(/^(https?:)\/\//,"");return t=t.split("/")[0]},UserAgentApplication.prototype.getTokenType=function(e,t,n){return n?nn.compareAccounts(e,this.getAccount())?t.indexOf(this.config.auth.clientId)>-1?Rn:On:t.indexOf(this.config.auth.clientId)>-1?Rn:Ln:nn.compareAccounts(e,this.getAccount())?t.indexOf(this.clientId)>-1?Rn:On:Ln},UserAgentApplication.prototype.setAccountCache=function(e,t){var n=e?this.getAccountId(e):ot.no_account,r=tn.generateAcquireTokenAccountKey(n,t);this.cacheStorage.setItem(r,JSON.stringify(e))},UserAgentApplication.prototype.setAuthorityCache=function(e,t){var n=tn.generateAuthorityKey(e);this.cacheStorage.setItem(n,Tt.CanonicalizeUri(t),this.inCookie)},UserAgentApplication.prototype.updateCacheEntries=function(e,t,n){n?(this.cacheStorage.setItem(ot.loginRequest,n,this.inCookie),this.cacheStorage.setItem(ot.loginError,""),this.cacheStorage.setItem(ot.stateLogin,e.state,this.inCookie),this.cacheStorage.setItem(ot.msalError,""),this.cacheStorage.setItem(ot.msalErrorDescription,"")):this.setAccountCache(t,e.state),this.setAuthorityCache(e.state,e.authority),this.cacheStorage.setItem(ot.nonceIdToken,e.nonce,this.inCookie)},UserAgentApplication.prototype.getAccountId=function(e){return wt.isEmpty(e.homeAccountIdentifier)?ot.no_account:e.homeAccountIdentifier},UserAgentApplication.prototype.buildIDTokenRequest=function(e){return{scopes:[this.clientId],authority:this.authority,account:this.getAccount(),extraQueryParameters:e.extraQueryParameters}},UserAgentApplication.prototype.getTelemetryManagerFromConfig=function(e,t){if(!e)return null;var n=e.applicationName,r=e.applicationVersion,o=e.telemetryEmitter;if(!n||!r||!o)throw Zt.createTelemetryConfigError(e);return new xn({platform:{sdk:"msal.js",sdkVersion:"1.1.3",applicationName:n,applicationVersion:r},clientId:t},o)},function __decorate(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Mn],UserAgentApplication.prototype,"acquireTokenSilent",null),UserAgentApplication}();class MsalProvider extends IProvider{constructor(e){super(),_defineProperty(this,"scopes",void 0),_defineProperty(this,"_userAgentApplication",void 0),_defineProperty(this,"clientId",void 0),_defineProperty(this,"_loginType",void 0),_defineProperty(this,"_loginHint",void 0),_defineProperty(this,"sessionStorageRequestedScopesKey","mgt-requested-scopes"),_defineProperty(this,"sessionStorageDeniedScopesKey","mgt-denied-scopes"),this.initProvider(e)}async trySilentSignIn(){try{if(this._userAgentApplication.isCallback(window.location.hash))return;this._userAgentApplication.getAccount()&&await this.getAccessToken(null)?this.setState(e.ProviderState.SignedIn):this.setState(e.ProviderState.SignedOut)}catch(t){this.setState(e.ProviderState.SignedOut)}}async login(t){const n=t||{loginHint:this._loginHint,prompt:"select_account",scopes:this.scopes};if(this._loginType===e.LoginType.Popup){const t=await this._userAgentApplication.loginPopup(n);this.setState(t.account?e.ProviderState.SignedIn:e.ProviderState.SignedOut)}else this._userAgentApplication.loginRedirect(n)}async logout(){this._userAgentApplication.logout(),this.setState(e.ProviderState.SignedOut)}async getAccessToken(t){const n=t&&t.scopes||this.scopes,r={loginHint:this._loginHint,scopes:n};try{return(await this._userAgentApplication.acquireTokenSilent(r)).accessToken}catch(t){if(!this.requiresInteraction(t))throw this.setState(e.ProviderState.SignedOut),t;if(this._loginType===e.LoginType.Redirect){if(this.areScopesDenied(n))throw t;this.setRequestedScopes(n),this._userAgentApplication.acquireTokenRedirect(r)}else try{return(await this._userAgentApplication.acquireTokenPopup(r)).accessToken}catch(e){throw e}}throw null}updateScopes(e){this.scopes=e}requiresInteraction(e){return!(!e||!e.errorCode)&&(-1!==e.errorCode.indexOf("consent_required")||-1!==e.errorCode.indexOf("interaction_required")||-1!==e.errorCode.indexOf("login_required"))}setRequestedScopes(e){e&&sessionStorage.setItem(this.sessionStorageRequestedScopesKey,JSON.stringify(e))}getRequestedScopes(){const e=sessionStorage.getItem(this.sessionStorageRequestedScopesKey);return e?JSON.parse(e):null}clearRequestedScopes(){sessionStorage.removeItem(this.sessionStorageRequestedScopesKey)}addDeniedScopes(e){if(e){let t=this.getDeniedScopes()||[],n=(t=t.concat(e)).indexOf("openid");-1!==n&&t.splice(n,1),-1!==(n=t.indexOf("profile"))&&t.splice(n,1),sessionStorage.setItem(this.sessionStorageDeniedScopesKey,JSON.stringify(t))}}getDeniedScopes(){const e=sessionStorage.getItem(this.sessionStorageDeniedScopesKey);return e?JSON.parse(e):null}areScopesDenied(e){if(e){const t=this.getDeniedScopes();if(t&&t.filter(t=>-1!==e.indexOf(t)).length>0)return!0}return!1}initProvider(t){this.scopes=void 0!==t.scopes?t.scopes:["user.read"],this._loginType=void 0!==t.loginType?t.loginType:e.LoginType.Redirect,this._loginHint=t.loginHint;const n=(e=>{this.tokenReceivedCallback(e)}).bind(this),r=((e,t)=>{this.errorReceivedCallback(e,status)}).bind(this);if(!t.clientId)throw new Error("clientId must be provided");{const e=t.options||{auth:{clientId:t.clientId}};e.auth.clientId=t.clientId,e.cache=e.cache||{},e.cache.cacheLocation=e.cache.cacheLocation||"localStorage",e.cache.storeAuthStateInCookie=e.cache.storeAuthStateInCookie||!0,t.authority&&(e.auth.authority=t.authority),this.clientId=t.clientId,this._userAgentApplication=new Un(e),this._userAgentApplication.handleRedirectCallback(n,r)}this.graph=new Graph(this),this.trySilentSignIn()}tokenReceivedCallback(t){"id_token"===t.tokenType&&this.setState(e.ProviderState.SignedIn),this.clearRequestedScopes()}errorReceivedCallback(e,t){const n=this.getRequestedScopes();n&&this.addDeniedScopes(n),this.clearRequestedScopes()}}let Nn=_decorate(null,function(e,t){class MgtBaseProvider extends t{constructor(...t){super(...t),e(this)}}return{F:MgtBaseProvider,d:[{kind:"get",key:"provider",value:function provider(){return this._provider}},{kind:"set",key:"provider",value:function provider(e){this._provider&&this.provider.removeStateChangedHandler(()=>this.stateChangedHandler),this._provider=e,this._provider&&this.provider.onStateChanged(()=>this.stateChangedHandler)}},{kind:"get",key:"isAvailable",value:function isAvailable(){return!0}},{kind:"field",decorators:[property({attribute:"depends-on",converter:e=>document.querySelector(e),type:String})],key:"dependsOn",value:void 0},{kind:"field",key:"_provider",value:void 0},{kind:"method",key:"firstUpdated",value:function firstUpdated(e){_get(_getPrototypeOf(MgtBaseProvider.prototype),"firstUpdated",this).call(this,e);let t=!1;if(this.dependsOn){let e=this.dependsOn;for(;e;){if(e.isAvailable){t=!0;break}e=e.dependsOn}}!t&&this.isAvailable&&this.initializeProvider()}},{kind:"method",key:"initializeProvider",value:function initializeProvider(){}},{kind:"method",key:"stateChangedHandler",value:function stateChangedHandler(){this.fireCustomEvent("onStateChanged",this.provider.state)}}]}},MgtBaseComponent),Hn=_decorate([V("mgt-msal-provider")],function(t,n){return{F:class MgtMsalProvider extends n{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[property({attribute:"client-id",type:String})],key:"clientId",value:()=>""},{kind:"field",decorators:[property({attribute:"login-type",type:String})],key:"loginType",value:void 0},{kind:"field",decorators:[property()],key:"authority",value:void 0},{kind:"field",decorators:[property({attribute:"scopes",type:String})],key:"scopes",value:void 0},{kind:"get",key:"isAvailable",value:function isAvailable(){return!0}},{kind:"method",key:"initializeProvider",value:function initializeProvider(){if(this.clientId){const t={clientId:this.clientId};if(this.loginType&&this.loginType.length>1){let n=this.loginType.toLowerCase();n=n[0].toUpperCase()+n.slice(1);const r=e.LoginType[n];t.loginType=r}if(this.authority&&(t.authority=this.authority),this.scopes){const e=this.scopes.split(",");e&&e.length>0&&(t.scopes=e)}this.provider=new MsalProvider(t),Providers.globalProvider=this.provider}}}]}},Nn);class TeamsProvider extends MsalProvider{static get isAvailable(){return!(window.parent!==window.self||!window.nativeInterface)||("embedded-page-container"===window.name||"extension-tab-frame"===window.name)}static async handleAuth(){const t=TeamsProvider.microsoftTeamsLib||microsoftTeams;if(!t)return void console.error("Make sure you have referenced the Microsoft Teams sdk before using the TeamsProvider");t.initialize(),window.opener&&(window.opener.msal=null);const n=new URL(window.location.href),r=sessionStorage.getItem(this._sessionStorageParametersKey);let o;if((o=r?JSON.parse(r):{}).clientId||(o.clientId=n.searchParams.get("clientId"),o.scopes=n.searchParams.get("scopes"),o.loginHint=n.searchParams.get("loginHint"),sessionStorage.setItem(this._sessionStorageParametersKey,JSON.stringify(o))),!o.clientId)return void t.authentication.notifyFailure("no clientId provided");const i=o.scopes?o.scopes.split(","):null,s=new MsalProvider({clientId:o.clientId,options:{auth:{clientId:o.clientId,redirectUri:n.protocol+"//"+n.host+n.pathname},system:{loadFrameTimeout:1e4}},scopes:i});if(Un.prototype.urlContainsHash(window.location.hash))return;const a=async()=>{if(s.state===e.ProviderState.SignedOut)s.login({loginHint:o.loginHint,scopes:i||s.scopes});else if(s.state===e.ProviderState.SignedIn)try{const e=await s.getAccessTokenForScopes(...s.scopes);sessionStorage.removeItem(this._sessionStorageParametersKey),t.authentication.notifySuccess(e)}catch(e){sessionStorage.removeItem(this._sessionStorageParametersKey),t.authentication.notifyFailure(e)}};s.onStateChanged(a),a()}constructor(t){super({clientId:t.clientId,loginType:e.LoginType.Redirect,options:t.msalOptions,scopes:t.scopes}),_defineProperty(this,"scopes",void 0),_defineProperty(this,"teamsContext",void 0),_defineProperty(this,"_authPopupUrl",void 0);const n=TeamsProvider.microsoftTeamsLib||microsoftTeams;this._authPopupUrl=t.authPopupUrl,n.initialize()}async login(){this.setState(e.ProviderState.Loading);const t=TeamsProvider.microsoftTeamsLib||microsoftTeams;return new Promise((n,r)=>{t.getContext(o=>{this.teamsContext=o;const i=new URL(this._authPopupUrl,new URL(window.location.href));i.searchParams.append("clientId",this.clientId),o.loginHint&&i.searchParams.append("loginHint",o.loginHint),this.scopes&&i.searchParams.append("scopes",this.scopes.join(",")),t.authentication.authenticate({failureCallback:t=>{this.setState(e.ProviderState.SignedOut),r()},successCallback:t=>{this.setState(e.ProviderState.SignedIn),n()},url:i.href})})})}async getAccessToken(e){if(!this.teamsContext){const e=TeamsProvider.microsoftTeamsLib||microsoftTeams;this.teamsContext=await e.getContext()}const t={scopes:e&&e.scopes||this.scopes};this.teamsContext&&this.teamsContext.loginHint&&(t.loginHint=this.teamsContext.loginHint);const n=window.parent;document.referrer.startsWith("https://teams.microsoft.com/")&&(window.parent=window);try{const e=await this._userAgentApplication.acquireTokenSilent(t);return window.parent=n,e.accessToken}catch(e){if(window.parent=n,this.requiresInteraction(e))return null;throw e}}}_defineProperty(TeamsProvider,"microsoftTeamsLib",void 0),_defineProperty(TeamsProvider,"_sessionStorageParametersKey","msg-teamsprovider-auth-parameters");let Fn=_decorate([V("mgt-teams-provider")],function(e,t){return{F:class MgtTeamsProvider extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({attribute:"client-id",type:String})],key:"clientId",value:()=>""},{kind:"field",decorators:[property({attribute:"auth-popup-url",type:String})],key:"authPopupUrl",value:()=>""},{kind:"field",decorators:[property({attribute:"scopes",type:String})],key:"scopes",value:void 0},{kind:"get",key:"isAvailable",value:function isAvailable(){return TeamsProvider.isAvailable}},{kind:"method",key:"initializeProvider",value:function initializeProvider(){if(this.clientId&&this.authPopupUrl){const e={authPopupUrl:this.authPopupUrl,clientId:this.clientId};if(this.scopes){const t=this.scopes.split(",");t&&t.length>0&&(e.scopes=t)}this.provider=new TeamsProvider(e),Providers.globalProvider=this.provider}}}]}},Nn);class WamProvider extends IProvider{static get isAvailable(){return!!window.Windows}get isLoggedIn(){return!!this.accessToken}constructor(e,t){super(),_defineProperty(this,"graphResource","https://graph.microsoft.com"),_defineProperty(this,"clientId",void 0),_defineProperty(this,"authority",void 0),_defineProperty(this,"accessToken",void 0),this.clientId=e,this.authority=t||"https://login.microsoftonline.com/common",this.graph=new Graph(this),this.printRedirectUriToConsole()}async login(){if(WamProvider.isAvailable){const t=window.Windows.Security.Authentication.Web.Core,n=await t.WebAuthenticationCoreManager.findAccountProviderAsync("https://login.microsoft.com",this.authority);if(!n)return;const r=new t.WebTokenRequest(n,"",this.clientId);r.properties.insert("resource",this.graphResource);const o=await t.WebAuthenticationCoreManager.requestTokenAsync(r);switch(o.responseStatus){case t.WebTokenRequestStatus.success:o.responseData[0].webAccount;this.accessToken=o.responseData[0].token,this.setState(this.accessToken?e.ProviderState.SignedIn:e.ProviderState.SignedOut);break;case t.WebTokenRequestStatus.userCancel:case t.WebTokenRequestStatus.accountSwitch:case t.WebTokenRequestStatus.userInteractionRequired:case t.WebTokenRequestStatus.accountProviderNotAvailable:case t.WebTokenRequestStatus.providerError:}}}printRedirectUriToConsole(){if(WamProvider.isAvailable){window.Windows.Security.Authentication.Web.WebAuthenticationBroker.getCurrentApplicationCallbackUri().host.toUpperCase()}}getAccessToken(e){if(this.isLoggedIn)return Promise.resolve(this.accessToken);throw new Error("Not logged in")}}let qn=_decorate([V("mgt-wam-provider")],function(e,t){return{F:class MgtWamProvider extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({attribute:"client-id"})],key:"clientId",value:void 0},{kind:"field",decorators:[property({attribute:"authority"})],key:"authority",value:void 0},{kind:"method",key:"firstUpdated",value:function firstUpdated(e){this.validateAuthProps()}},{kind:"method",key:"validateAuthProps",value:function validateAuthProps(){void 0!==this.clientId&&(Providers.globalProvider=new WamProvider(this.clientId,this.authority))}}]}},LitElement);class CustomHeaderMiddleware{constructor(e){_defineProperty(this,"nextMiddleware",void 0),_defineProperty(this,"_getCustomHeaders",void 0),this._getCustomHeaders=e}async execute(e){if(this._getCustomHeaders){const t=await this._getCustomHeaders();for(const n in t)t.hasOwnProperty(n)&&ae(e.request,e.options,n,t[n])}return await this.nextMiddleware.execute(e)}setNext(e){this.nextMiddleware=e}}class ProxyGraph extends Graph{constructor(e,t){super(null);const n=new RetryHandler(new RetryHandlerOptions),r=new TelemetryHandler,o=new SdkVersionMiddleware,i=new CustomHeaderMiddleware(t),s=new HTTPMessageHandler;n.setNext(r),r.setNext(o),o.setNext(i),i.setNext(s),this.client=Client.initWithMiddleware({baseUrl:e,middleware:n})}}class ProxyProvider extends IProvider{constructor(t,n=null){super(),_defineProperty(this,"graph",void 0),this.graph=new ProxyGraph(t,n),this.graph.getMe().then(t=>{null!=t?this.setState(e.ProviderState.SignedIn):this.setState(e.ProviderState.SignedOut)},t=>{this.setState(e.ProviderState.SignedOut)})}getAccessToken(){return null}}let $n=_decorate([V("mgt-proxy-provider")],function(e,t){return{F:class MgtProxyProvider extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({attribute:"graph-proxy-url"})],key:"graphProxyUrl",value:void 0},{kind:"get",key:"isAvailable",value:function isAvailable(){return!0}},{kind:"method",key:"initializeProvider",value:function initializeProvider(){void 0!==this.graphProxyUrl&&(this.provider=new ProxyProvider(this.graphProxyUrl),Providers.globalProvider=this.provider)}}]}},Nn);class MockProvider extends IProvider{constructor(t=!1){super(),_defineProperty(this,"provider",void 0),_defineProperty(this,"graph",new MockGraph(this)),t?this.setState(e.ProviderState.SignedIn):this.setState(e.ProviderState.SignedOut)}async login(){this.setState(e.ProviderState.Loading),await new Promise(e=>setTimeout(e,3e3)),this.setState(e.ProviderState.SignedIn)}async logout(){this.setState(e.ProviderState.Loading),await new Promise(e=>setTimeout(e,3e3)),this.setState(e.ProviderState.SignedOut)}getAccessToken(){return Promise.resolve("{token:https://graph.microsoft.com/}")}}class MockGraph extends Graph{constructor(e){super(null),_defineProperty(this,"baseUrl","https://proxy.apisandbox.msdn.microsoft.com/svc?url="),_defineProperty(this,"rootGraphUrl","https://graph.microsoft.com/"),this.client=Client.initWithMiddleware({authProvider:e,baseUrl:this.baseUrl+escape(this.rootGraphUrl)})}async getEvents(e,t){const n=`/me/calendarview?${`startdatetime=${e.toISOString()}`}&${`enddatetime=${t.toISOString()}`}`,r=await this.client.api(escape(n)).get();return r?r.value:null}}let jn=_decorate([V("mgt-mock-provider")],function(e,t){return{F:class MgtMockProvider extends t{constructor(){super(),e(this),Providers.globalProvider=new MockProvider(!0)}},d:[]}},LitElement);return e.IProvider=IProvider,e.MgtAgenda=Ee,e.MgtBaseComponent=MgtBaseComponent,e.MgtGet=xe,e.MgtLogin=Re,e.MgtMockProvider=jn,e.MgtMsalProvider=Hn,e.MgtPeople=Ge,e.MgtPeoplePicker=je,e.MgtPerson=Ae,e.MgtPersonCard=We,e.MgtProxyProvider=$n,e.MgtTasks=tt,e.MgtTeamsProvider=Fn,e.MgtWamProvider=qn,e.MsalProvider=MsalProvider,e.Providers=Providers,e.ProxyProvider=ProxyProvider,e.SharePointProvider=class SharePointProvider extends IProvider{get provider(){return this._provider}get isLoggedIn(){return!!this._idToken}constructor(e){super(),_defineProperty(this,"scopes",void 0),_defineProperty(this,"authority",void 0),_defineProperty(this,"_idToken",void 0),_defineProperty(this,"_provider",void 0),e.aadTokenProviderFactory.getTokenProvider().then(e=>{this._provider=e,this.graph=new Graph(this),this.internalLogin()})}async getAccessToken(){let e;try{e=await this.provider.getToken("https://graph.microsoft.com")}catch(e){throw e}return e}updateScopes(e){this.scopes=e}async internalLogin(){this._idToken=await this.getAccessToken(),this.setState(this._idToken?e.ProviderState.SignedIn:e.ProviderState.SignedOut)}},e.SimpleProvider=class SimpleProvider extends IProvider{constructor(e,t,n){super(),_defineProperty(this,"_getAccessTokenHandler",void 0),_defineProperty(this,"_loginHandler",void 0),_defineProperty(this,"_logoutHandler",void 0),this._getAccessTokenHandler=e,this._loginHandler=t,this._logoutHandler=n,this.graph=new Graph(this)}getAccessToken(e){return this._getAccessTokenHandler(e.scopes)}login(){return this._loginHandler()}logout(){return this._logoutHandler()}},e.TeamsProvider=TeamsProvider,e.prepScopes=prepScopes,e}({});
