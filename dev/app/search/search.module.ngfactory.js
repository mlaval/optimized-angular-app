/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./search.module", "@angular/common", "@angular/http", "@angular/router", "./search.ngfactory", "./search"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var import0, import1, import2, import3, import4, import5, import6, SearchModuleInjector, SearchModuleNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            SearchModuleInjector = (function (_super) {
                __extends(SearchModuleInjector, _super);
                function SearchModuleInjector(parent) {
                    return _super.call(this, parent, [import5.SearchNgFactory], []) || this;
                }
                Object.defineProperty(SearchModuleInjector.prototype, "_NgLocalization_5", {
                    get: function () {
                        if ((this.__NgLocalization_5 == null)) {
                            (this.__NgLocalization_5 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                        }
                        return this.__NgLocalization_5;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_BrowserXhr_6", {
                    get: function () {
                        if ((this.__BrowserXhr_6 == null)) {
                            (this.__BrowserXhr_6 = new import3.BrowserXhr());
                        }
                        return this.__BrowserXhr_6;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_ResponseOptions_7", {
                    get: function () {
                        if ((this.__ResponseOptions_7 == null)) {
                            (this.__ResponseOptions_7 = new import3.BaseResponseOptions());
                        }
                        return this.__ResponseOptions_7;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_XSRFStrategy_8", {
                    get: function () {
                        if ((this.__XSRFStrategy_8 == null)) {
                            (this.__XSRFStrategy_8 = import3.ɵb());
                        }
                        return this.__XSRFStrategy_8;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_XHRBackend_9", {
                    get: function () {
                        if ((this.__XHRBackend_9 == null)) {
                            (this.__XHRBackend_9 = new import3.XHRBackend(this._BrowserXhr_6, this._ResponseOptions_7, this._XSRFStrategy_8));
                        }
                        return this.__XHRBackend_9;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_RequestOptions_10", {
                    get: function () {
                        if ((this.__RequestOptions_10 == null)) {
                            (this.__RequestOptions_10 = new import3.BaseRequestOptions());
                        }
                        return this.__RequestOptions_10;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_Http_11", {
                    get: function () {
                        if ((this.__Http_11 == null)) {
                            (this.__Http_11 = import3.ɵc(this._XHRBackend_9, this._RequestOptions_10));
                        }
                        return this.__Http_11;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_\u0275g_12", {
                    get: function () {
                        if ((this.__ɵg_12 == null)) {
                            (this.__ɵg_12 = new import3.ɵg());
                        }
                        return this.__ɵg_12;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_JSONPBackend_13", {
                    get: function () {
                        if ((this.__JSONPBackend_13 == null)) {
                            (this.__JSONPBackend_13 = new import3.ɵa(this._ɵg_12, this._ResponseOptions_7));
                        }
                        return this.__JSONPBackend_13;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchModuleInjector.prototype, "_Jsonp_14", {
                    get: function () {
                        if ((this.__Jsonp_14 == null)) {
                            (this.__Jsonp_14 = import3.ɵd(this._JSONPBackend_13, this._RequestOptions_10));
                        }
                        return this.__Jsonp_14;
                    },
                    enumerable: true,
                    configurable: true
                });
                SearchModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._HttpModule_1 = new import3.HttpModule();
                    this._JsonpModule_2 = new import3.JsonpModule();
                    this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ɵa, null), this.parent.get(import4.Router, null));
                    this._SearchModule_4 = new import1.SearchModule();
                    this._ROUTES_15 = [[{
                                path: '',
                                component: import6.Search
                            }
                        ]];
                    return this._SearchModule_4;
                };
                SearchModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import3.HttpModule)) {
                        return this._HttpModule_1;
                    }
                    if ((token === import3.JsonpModule)) {
                        return this._JsonpModule_2;
                    }
                    if ((token === import4.RouterModule)) {
                        return this._RouterModule_3;
                    }
                    if ((token === import1.SearchModule)) {
                        return this._SearchModule_4;
                    }
                    if ((token === import2.NgLocalization)) {
                        return this._NgLocalization_5;
                    }
                    if ((token === import3.BrowserXhr)) {
                        return this._BrowserXhr_6;
                    }
                    if ((token === import3.ResponseOptions)) {
                        return this._ResponseOptions_7;
                    }
                    if ((token === import3.XSRFStrategy)) {
                        return this._XSRFStrategy_8;
                    }
                    if ((token === import3.XHRBackend)) {
                        return this._XHRBackend_9;
                    }
                    if ((token === import3.RequestOptions)) {
                        return this._RequestOptions_10;
                    }
                    if ((token === import3.Http)) {
                        return this._Http_11;
                    }
                    if ((token === import3.ɵg)) {
                        return this._ɵg_12;
                    }
                    if ((token === import3.JSONPBackend)) {
                        return this._JSONPBackend_13;
                    }
                    if ((token === import3.Jsonp)) {
                        return this._Jsonp_14;
                    }
                    if ((token === import4.ROUTES)) {
                        return this._ROUTES_15;
                    }
                    return notFoundResult;
                };
                SearchModuleInjector.prototype.destroyInternal = function () {
                };
                return SearchModuleInjector;
            }(import0.ɵNgModuleInjector));
            exports_1("SearchModuleNgFactory", SearchModuleNgFactory = new import0.NgModuleFactory(SearchModuleInjector, import1.SearchModule));
            //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
        }
    };
});
//# sourceMappingURL=search.module.ngfactory.js.map