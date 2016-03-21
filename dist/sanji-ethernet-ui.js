!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("sanji-core-ui")):"function"==typeof define&&define.amd?define(["angular","sanji-core-ui"],t):"object"==typeof exports?exports.sjEthernet=t(require("angular"),require("sanji-core-ui")):e.sjEthernet=t(e.angular,e["sanji-core-ui"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=r(i),o=n(2),s=r(o),c=n(18),l=r(c),u=n(13),f=r(u),d=n(7),E=r(d),p=n(8),h=r(p),m=n(6),v=r(m),_=a["default"].module("sanji.ethernet",[s["default"],l["default"],f["default"]]);_.config(E["default"]),_.service("ethernetService",h["default"]),_.directive("sanjiEthernetWindow",v["default"].directiveFactory),t["default"]=_=_.name,e.exports=t["default"]},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports={get:{url:"/network/ethernets",type:"collection",titlePrefix:"eth"},put:{url:"/network/ethernets/:id",type:"model"},fields:[{key:"enableDhcp",type:"radio",templateOptions:{required:!0,options:[{label:"ETHERNET_FORM_LABEL_DHCP",value:1},{label:"ETHERNET_FORM_LABEL_STATIC",value:0}]}},{key:"ip",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_IP",required:!0},hideExpression:"!!model.enableDhcp"},{key:"netmask",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_NETMASK",required:!0,pattern:"^(254|252|248|240|224|192|128)\\.0\\.0\\.0|255\\.(254|252|248|240|224|192|128|0)\\.0\\.0|255\\.255\\.(254|252|248|240|224|192|128|0)\\.0|255\\.255\\.255\\.(254|252|248|240|224|192|128|0)",patternValidationMessage:"ETHERNET_NETMASK_ERROR_MSG"},hideExpression:"!!model.enableDhcp"},{key:"gateway",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_GATEWAY",required:!0},hideExpression:"!!model.enableDhcp"},{key:"dns[0]",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_DNS1",required:!0},hideExpression:"!!model.enableDhcp"},{key:"dns[1]",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_DNS2",required:!0},hideExpression:"!!model.enableDhcp"}]}},function(e,t){e.exports={ETHERNET_WINDOW_NAME:"Ethernet",ETHERNET_WINDOW_INFO:"Information",ETHERNET_WINDOW_SETTING:"Settings",ETHERNET_FORM_LABEL_DHCP:"DHCP",ETHERNET_FORM_LABEL_STATIC:"Static IP",ETHERNET_FORM_LABEL_IP:"IP",ETHERNET_FORM_LABEL_NETMASK:"Netmask",ETHERNET_FORM_LABEL_GATEWAY:"Gateway",ETHERNET_FORM_LABEL_DNS1:"DNS 1",ETHERNET_FORM_LABEL_DNS2:"DNS 2",ETHERNET_FORM_SAVE:"Save",ETHERNET_INFO_TYPE:"Type",ETHERNET_INFO_IP:"IP",ETHERNET_INFO_NETMASK:"Netmask",ETHERNET_INFO_GATEWAY:"Gateway",ETHERNET_INFO_DNS:"DNS",ETHERNET_NETMASK_ERROR_MSG:"Invalid netmask format"}},function(e,t){e.exports={ETHERNET_WINDOW_NAME:"乙太網路",ETHERNET_WINDOW_INFO:"資訊",ETHERNET_WINDOW_SETTING:"設定",ETHERNET_FORM_LABEL_DHCP:"DHCP",ETHERNET_FORM_LABEL_STATIC:"固定 IP",ETHERNET_FORM_LABEL_IP:"IP",ETHERNET_FORM_LABEL_NETMASK:"網路遮罩",ETHERNET_FORM_LABEL_GATEWAY:"閘道器",ETHERNET_FORM_LABEL_DNS1:"DNS 1",ETHERNET_FORM_LABEL_DNS2:"DNS 2",ETHERNET_FORM_SAVE:"儲存",ETHERNET_INFO_TYPE:"類型",ETHERNET_INFO_IP:"網路位址",ETHERNET_INFO_NETMASK:"網路遮罩",ETHERNET_INFO_GATEWAY:"閘道器",ETHERNET_INFO_DNS:"網域伺服器",ETHERNET_NETMASK_ERROR_MSG:"網路遮罩格式錯誤"}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new WeakMap,a=[],o=function(){function e(t){n(this,e),e.directiveFactory.$inject.forEach(function(n,r){e[n]=t[r],i.set(e[n],t[r])}),this.restrict="E",this.template='<sanji-window window-id="sanji-ethernet-ui"\n                      window-name="{{\'ETHERNET_WINDOW_NAME\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-info"\n                        link-name="{{\'ETHERNET_WINDOW_INFO\' | translate}}"\n                        icon="info">\n                        <sanji-ethernet-info-container></sanji-ethernet-info-container>\n                      </sanji-window-state>\n                      <sanji-window-state\n                        state-name="sanji-form"\n                        link-name="{{\'ETHERNET_WINDOW_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-ethernet-form-container></sanji-ethernet-form-container>\n                      </sanji-window-state>\n                    </sanji-window>'}return r(e,null,[{key:"directiveFactory",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return e.instance=new e(n),e.instance}}]),e}();o.directiveFactory.$inject=a,t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$translateProvider",function(e){"ngInject";e.translations("en",n(4)),e.translations("zh-tw",n(5))}],e.exports=t["default"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=["$q","rest","exception","_","pathToRegexp"],o=n(3),s=function(){function e(){for(var t=this,n=arguments.length,i=Array(n),a=0;n>a;a++)i[a]=arguments[a];switch(r(this,e),e.$inject.forEach(function(e,n){return t[e]=i[n]}),o.get.type){case"collection":this.data=[];break;case"model":this.data={};break;default:this.data=[]}}return i(e,[{key:"_transform",value:function(e){switch(o.get.type){case"collection":return this._.map(e,function(e,t){return{title:(o.get.titlePrefix||"tab")+t,content:e,formOptions:{},fields:o.fields}});case"model":return{content:e,formOptions:{},fields:o.fields};default:return this._.map(e,function(e,t){return{title:(o.get.titlePrefix||"tab")+t,content:e,formOptions:{},fields:o.fields}})}}},{key:"get",value:function(){var e=this,t=this.pathToRegexp.compile(o.get.url);return this.rest.get(t(),void 0).then(function(t){e.data=e._transform(t.data)})["catch"](function(t){return e.exception.catcher("[EthernetService] Get data error.")(t),e.$q.reject()})}},{key:"update",value:function(e){var t=this,n=this.pathToRegexp.compile(o.put.url),r=void 0!==e.content.id?n({id:e.content.id}):n();return this.rest.put(r,e.content,e.formOptions.files,void 0)["catch"](function(e){return t.exception.catcher("[EthernetService] Update data error.")(e),t.$q.reject()})}}]),e}();s.$inject=a,t["default"]=s,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=["$scope","sanjiWindowService","ethernetService"],a="sanji-ethernet-ui",o=function(){function e(){for(var t=this,r=arguments.length,i=Array(r),o=0;r>o;o++)i[o]=arguments[o];n(this,e),e.$inject.forEach(function(e,n){return t[e]=i[n]}),this.sanjiWindowMgr=this.sanjiWindowService.get(a),this.data=this.ethernetService.data,this.activate(),this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return r(e,[{key:"activate",value:function(){var e=this;this.sanjiWindowMgr.promise=this.ethernetService.get().then(function(){e.data=e.ethernetService.data})}},{key:"onRefresh",value:function(e,t){t.id===a&&this.activate()}},{key:"onSave",value:function(e){this.sanjiWindowMgr.promise=this.ethernetService.update(e)}}]),e}();o.$inject=i,t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new WeakMap,a=[],o=function(){function e(t){n(this,e),e.directiveFactory.$inject.forEach(function(n,r){e[n]=t[r],i.set(e[n],t[r])}),this.restrict="EA",this.controller="EthernetFormContainerController",this.controllerAs="vm",this.scope={},this.bindToController=!0,this.template='<sanji-ethernet-form data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet-form>'}return r(e,null,[{key:"directiveFactory",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return e.instance=new e(n),e.instance}}]),e}();o.directiveFactory.$inject=a,t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=[],a=function(){function e(){for(var t=this,r=arguments.length,i=Array(r),a=0;r>a;a++)i[a]=arguments[a];n(this,e),e.$inject.forEach(function(e,n){return t[e]=i[n]})}return r(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();a.$inject=i,t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new WeakMap,a=[],o=function(){function e(t){n(this,e),e.directiveFactory.$inject.forEach(function(n,r){e[n]=t[r],i.set(e[n],t[r])}),this.templateUrl="sanji-ethernet-form.tpl.html",this.restrict="EA",this.controller="EthernetFormController",this.controllerAs="vm",this.scope={},this.bindToController={tabs:"=data",submitCallback:"&onSubmit"}}return r(e,null,[{key:"directiveFactory",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return e.instance=new e(n),e.instance}}]),e}();o.directiveFactory.$inject=a,t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=r(i),o=n(2),s=r(o);n(19);var c=n(9),l=r(c),u=n(11),f=r(u),d=n(10),E=r(d),p=n(12),h=r(p),m=a["default"].module("sanji.ethernet.form",[s["default"]]);m.controller("EthernetFormContainerController",l["default"]),m.controller("EthernetFormController",f["default"]),m.directive("sanjiEthernetFormContainer",E["default"].directiveFactory),m.directive("sanjiEthernetForm",h["default"].directiveFactory),t["default"]=m=m.name,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=["$scope","sanjiWindowService","ethernetService"],a="sanji-ethernet-ui",o=function(){function e(){for(var t=this,r=arguments.length,i=Array(r),o=0;r>o;o++)i[o]=arguments[o];n(this,e),e.$inject.forEach(function(e,n){return t[e]=i[n]}),this.sanjiWindowMgr=this.sanjiWindowService.get(a),this.data=this.ethernetService.data,this.activate(),this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return r(e,[{key:"activate",value:function(){var e=this;this.sanjiWindowMgr.promise=this.ethernetService.get().then(function(){e.data=e.ethernetService.data})}},{key:"onRefresh",value:function(e,t){t.id===a&&this.activate()}},{key:"onSave",value:function(e){this.sanjiWindowMgr.promise=this.ethernetService.update(e)}}]),e}();o.$inject=i,t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new WeakMap,a=[],o=function(){function e(t){n(this,e),e.directiveFactory.$inject.forEach(function(n,r){e[n]=t[r],i.set(e[n],t[r])}),this.restrict="EA",this.controller="EthernetInfoContainerController",this.controllerAs="vm",this.scope={},this.bindToController=!0,this.template='<sanji-ethernet-info data="vm.data"></sanji-ethernet-info>'}return r(e,null,[{key:"directiveFactory",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return e.instance=new e(n),e.instance}}]),e}();o.directiveFactory.$inject=a,t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=[],a=function(){function e(){for(var t=this,r=arguments.length,i=Array(r),a=0;r>a;a++)i[a]=arguments[a];n(this,e),e.$inject.forEach(function(e,n){return t[e]=i[n]})}return r(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();a.$inject=i,t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new WeakMap,a=[],o=function(){function e(t){n(this,e),e.directiveFactory.$inject.forEach(function(n,r){e[n]=t[r],i.set(e[n],t[r])}),this.templateUrl="sanji-ethernet-info.tpl.html",this.restrict="EA",this.controller="EthernetInfoController",this.controllerAs="vm",this.scope={},this.bindToController={tabs:"=data"}}return r(e,null,[{key:"directiveFactory",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return e.instance=new e(n),e.instance}}]),e}();o.directiveFactory.$inject=a,t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=r(i),o=n(2),s=r(o);n(20);var c=n(14),l=r(c),u=n(16),f=r(u),d=n(15),E=r(d),p=n(17),h=r(p),m=a["default"].module("sanji.ethernet.info",[s["default"]]);m.controller("EthernetInfoContainerController",l["default"]),m.controller("EthernetInfoController",f["default"]),m.directive("sanjiEthernetInfoContainer",E["default"].directiveFactory),m.directive("sanjiEthernetInfo",h["default"].directiveFactory),t["default"]=m=m.name,e.exports=t["default"]},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(i){n=r.module("ng",[])}var a='<md-tabs md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index" label="{{::tab.title}}">\n      <form ng-submit="vm.save(tab)" role="form" layout="column" layout-padding novalidate>\n        <formly-form model="tab.content"\n        options="tab.formOptions" fields="tab.fields" form="tab.form">\n          <div layout layout-align="end center">\n            <md-button type="submit" class="md-raised md-primary"\n            aria-label="sumit"\n            ng-disabled="tab.form.$invalid">\n              <sapn translate="ETHERNET_FORM_SAVE"></span>\n            </md-button>\n          </div>\n        </formly-form>\n      </form>\n    </md-tab>\n  </md-tabs>';n.run(["$templateCache",function(e){e.put("sanji-ethernet-form.tpl.html",a)}]),e.exports=a},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(i){n=r.module("ng",[])}var a='<md-tabs md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index" label="{{::tab.title}}">\n      <md-list>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_TYPE"></p>\n          <span ng-bind="tab.content.wan ? \'WAN\' : \'LAN\'"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_IP"></p>\n          <span ng-bind="tab.content.ip"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_NETMASK"></p>\n          <span ng-bind="tab.content.netmask"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_GATEWAY"></p>\n          <span ng-bind="tab.content.gateway || \'\'"></span>\n        </md-list-item>\n        <md-list-item ng-repeat="dns in tab.content.dns track by $index">\n          <p class="md-body-2">{{\'ETHERNET_INFO_DNS\' | translate}} {{$index + 1}}</p>\n          <span ng-bind="dns || \'\'"></span>\n        </md-list-item>\n      </md-list>\n    </md-tab>\n  </md-tabs>';n.run(["$templateCache",function(e){e.put("sanji-ethernet-info.tpl.html",a)}]),e.exports=a}])});
//# sourceMappingURL=sanji-ethernet-ui.js.map