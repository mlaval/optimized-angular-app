/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./subscribe", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Subscribe_0(log) {
        return import0.ɵvid(0, [
            (log()(), import0.ɵted(null, ['\n    '])),
            (log()(), import0.ɵeld(0, null, null, 16, 'div', [], null, null, null, null, null)),
            (log()(), import0.ɵted(null, ['\n      '])),
            (log()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (log()(), import0.ɵted(null, ['Subscribe'])),
            (log()(), import0.ɵted(null, ['\n      Please enter your email address:'])),
            (log()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
            (log()(), import0.ɵted(null, ['\n      '])),
            (log()(), import0.ɵeld(0, null, null, 5, 'input', [], [
                [
                    1,
                    'ng-untouched'
                ],
                [
                    1,
                    'ng-touched'
                ],
                [
                    1,
                    'ng-pristine'
                ],
                [
                    1,
                    'ng-dirty'
                ],
                [
                    1,
                    'ng-valid'
                ],
                [
                    1,
                    'ng-invalid'
                ],
                [
                    1,
                    'ng-pending'
                ]
            ], [
                [
                    null,
                    'ngModelChange'
                ],
                [
                    null,
                    'input'
                ],
                [
                    null,
                    'blur'
                ],
                [
                    null,
                    'compositionstart'
                ],
                [
                    null,
                    'compositionend'
                ]
            ], function (view, eventName, $event) {
                var allowDefault = true;
                var comp = view.component;
                if (('input' === eventName)) {
                    var pd_0 = (import0.ɵnov(view, 9).onChange($event.target.value) !== false);
                    allowDefault = (pd_0 && allowDefault);
                }
                if (('blur' === eventName)) {
                    var pd_1 = (import0.ɵnov(view, 9).onTouched() !== false);
                    allowDefault = (pd_1 && allowDefault);
                }
                if (('compositionstart' === eventName)) {
                    var pd_2 = (import0.ɵnov(view, 11).compositionStart() !== false);
                    allowDefault = (pd_2 && allowDefault);
                }
                if (('compositionend' === eventName)) {
                    var pd_3 = (import0.ɵnov(view, 11).compositionEnd() !== false);
                    allowDefault = (pd_3 && allowDefault);
                }
                if (('ngModelChange' === eventName)) {
                    var pd_4 = ((comp.address = $event) !== false);
                    allowDefault = (pd_4 && allowDefault);
                }
                return allowDefault;
            }, null, null)),
            (log()(), import0.ɵdid(8192, null, 0, import2.DefaultValueAccessor, [
                import0.Renderer,
                import0.ElementRef
            ], null, null)),
            (log()(), import0.ɵprd(512, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
            }, [import2.DefaultValueAccessor])),
            (log()(), import0.ɵdid(335872, null, 0, import2.NgModel, [
                [
                    8,
                    null
                ],
                [
                    8,
                    null
                ],
                [
                    8,
                    null
                ],
                [
                    2,
                    import2.NG_VALUE_ACCESSOR
                ]
            ], { model: [
                    0,
                    'model'
                ]
            }, { update: 'ngModelChange' })),
            (log()(), import0.ɵprd(1024, null, import2.NgControl, null, [import2.NgModel])),
            (log()(), import0.ɵdid(8192, null, 0, import2.NgControlStatus, [import2.NgControl], null, null)),
            (log()(), import0.ɵted(null, ['\n      '])),
            (log()(), import0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)),
            (log()(), import0.ɵted(null, [
                'Value entered: ',
                ''
            ])),
            (log()(), import0.ɵted(null, ['\n    '])),
            (log()(), import0.ɵted(null, ['\n  ']))
        ], function (check, view) {
            var comp = view.component;
            check(view, 9, 0);
            var currVal_7 = comp.address;
            check(view, 11, 0, currVal_7);
            check(view, 13, 0);
        }, function (check, view) {
            var comp = view.component;
            check(view, 1, 0);
            check(view, 3, 0);
            check(view, 6, 0);
            var currVal_0 = import0.ɵnov(view, 13).ngClassUntouched;
            var currVal_1 = import0.ɵnov(view, 13).ngClassTouched;
            var currVal_2 = import0.ɵnov(view, 13).ngClassPristine;
            var currVal_3 = import0.ɵnov(view, 13).ngClassDirty;
            var currVal_4 = import0.ɵnov(view, 13).ngClassValid;
            var currVal_5 = import0.ɵnov(view, 13).ngClassInvalid;
            var currVal_6 = import0.ɵnov(view, 13).ngClassPending;
            check(view, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
            check(view, 15, 0);
            var currVal_8 = comp.address;
            check(view, 16, 0, currVal_8);
        });
    }
    exports_1("View_Subscribe_0", View_Subscribe_0);
    function View_Subscribe_Host_0(log) {
        return import0.ɵvid(0, [
            (log()(), import0.ɵeld(0, null, null, 1, 'subscribe', [], null, null, null, View_Subscribe_0, RenderType_Subscribe)),
            (log()(), import0.ɵdid(24576, null, 0, import1.Subscribe, [], null, null))
        ], function (check, view) {
            check(view, 1, 0);
        }, function (check, view) {
            check(view, 0, 0);
        });
    }
    var import0, import1, import2, styles_Subscribe, RenderType_Subscribe, SubscribeNgFactory;
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
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_Subscribe = [];
            exports_1("RenderType_Subscribe", RenderType_Subscribe = import0.ɵcrt({
                encapsulation: 2,
                styles: styles_Subscribe,
                data: {}
            }));
            exports_1("SubscribeNgFactory", SubscribeNgFactory = import0.ɵccf('subscribe', import1.Subscribe, View_Subscribe_Host_0));
            //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWxhdmFsL2Rldi9naXRodWIvcGxheWdyb3VuZC9vcHRpbWl6ZS1hbmd1bGFyLWFwcC9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS50cyIsIm5nOi8vL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmUudHMuU3Vic2NyaWJlLmh0bWwiLCJuZzovLy9Vc2Vycy9tbGF2YWwvZGV2L2dpdGh1Yi9wbGF5Z3JvdW5kL29wdGltaXplLWFuZ3VsYXItYXBwL2FwcC9zdWJzY3JpYmUvc3Vic2NyaWJlLnRzLlN1YnNjcmliZV9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOltudWxsLCJcbiAgICA8ZGl2PlxuICAgICAgPGgyPlN1YnNjcmliZTwvaDI+XG4gICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzOjxicj5cbiAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImFkZHJlc3NcIj5cbiAgICAgIDxwcmU+VmFsdWUgZW50ZXJlZDoge3thZGRyZXNzfX08L3ByZT5cbiAgICA8L2Rpdj5cbiAgIiwiPHN1YnNjcmliZT48L3N1YnNjcmliZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0k7SUFBSztJQUNIO0lBQUk7SUFBYztJQUNjO0lBQUk7SUFDcEM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFPO1FBQUE7UUFBQTtNQUFBO01BQVA7SUFBQTtJQUFBOzs7SUFBQTtLQUFBO0lBQUE7TUFBQTtJQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7SUFBNkI7SUFDN0I7SUFBSztNQUFBO01BQUE7SUFBQTtJQUFBO0lBQWdDO0lBQ2pDOzs7O0lBRko7SUFBTztJQUFQLGdCQUFPLFNBQVA7SUFBQTs7O0lBSEY7SUFDRTtJQUNnQztJQUNoQztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLGVBQUEscUVBQUE7SUFDQTtJQUFLO0lBQUE7Ozs7O0lDTFg7SUFBQTs7O0lBQUE7O0lBQUE7OzsifQ==
        }
    };
});
//# sourceMappingURL=subscribe.ngfactory.js.map