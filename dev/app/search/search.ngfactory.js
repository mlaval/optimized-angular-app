/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
System.register(["@angular/core", "./search", "@angular/common", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Search_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(),
                i0.ɵted(null, ['', '']))], null, function (_ck, _v) {
            var currVal_0 = _v.context.$implicit;
            _ck(_v, 1, 0, currVal_0);
        });
    }
    function View_Search_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 12, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n      '])), (_l()(),
                i0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Search'])), (_l()(), i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵeld(0, [['foo', 1]], null, 0, 'input', [['placeholder', 'Search on Wikipedia'], ['type',
                    'text']], null, null, null, null, null)),
            (_l()(), i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.search(i0.ɵnov(_v, 6).value) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['Search'])),
            (_l()(), i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Search_1)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0,
                    'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n    '])),
            (_l()(), i0.ɵted(null, ['\n  ']))], function (_ck, _v) {
            var _co = _v.component;
            var currVal_0 = _co.pages;
            _ck(_v, 12, 0, currVal_0);
        }, null);
    }
    exports_1("View_Search_0", View_Search_0);
    function View_Search_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'search', [], null, null, null, View_Search_0, RenderType_Search)),
            i0.ɵdid(49152, null, 0, i1.Search, [i3.Http], null, null)], null, null);
    }
    exports_1("View_Search_Host_0", View_Search_Host_0);
    var i0, i1, i2, i3, styles_Search, RenderType_Search, SearchNgFactory;
    return {
        setters: [
            function (i0_1) {
                i0 = i0_1;
            },
            function (i1_1) {
                i1 = i1_1;
            },
            function (i2_1) {
                i2 = i2_1;
            },
            function (i3_1) {
                i3 = i3_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
             */
            /* tslint:disable */
            styles_Search = [];
            exports_1("RenderType_Search", RenderType_Search = i0.ɵcrt({ encapsulation: 2, styles: styles_Search,
                data: {} }));
            exports_1("SearchNgFactory", SearchNgFactory = i0.ɵccf('search', i1.Search, View_Search_Host_0, {}, {}, []));
            //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWxhdmFsL2Rldi9naXRodWIvcGxheWdyb3VuZC9vcHRpbWl6ZS1hbmd1bGFyLWFwcC9hcHAvc2VhcmNoL3NlYXJjaC50cyIsIm5nOi8vL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL3NlYXJjaC9zZWFyY2gudHMuU2VhcmNoLmh0bWwiLCJuZzovLy9Vc2Vycy9tbGF2YWwvZGV2L2dpdGh1Yi9wbGF5Z3JvdW5kL29wdGltaXplLWFuZ3VsYXItYXBwL2FwcC9zZWFyY2gvc2VhcmNoLnRzLlNlYXJjaF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxkaXY+XG4gICAgICA8aDI+U2VhcmNoPC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIFdpa2lwZWRpYVwiICNmb28+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJzZWFyY2goZm9vLnZhbHVlKVwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlc1wiPnt7cGFnZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gICIsIjxzZWFyY2g+PC9zZWFyY2g+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNLTTtNQUFBLHdFQUFnQzthQUFBO0lBQUE7SUFBQTs7OztvQkFMdEMsMkNBQ0k7TUFBQTtNQUFBLDhCQUFLLDZDQUNIO2FBQUE7VUFBQSw0Q0FBSTtNQUFBLGFBQVcsNkNBQ2Y7TUFBQTtVQUFBO01BQTBELDZDQUMxRDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQVE7Y0FBQTtjQUFBO1lBQUE7WUFBUjtVQUFBLGdDQUFvQztNQUFlLDZDQUNuRDtVQUFBLHFEQUFBO1VBQUE7Y0FBQSwyQkFBOEM7TUFDMUM7O0lBREM7SUFBTCxZQUFLLFNBQUw7Ozs7b0JDTE47TUFBQTthQUFBOzs7OyJ9
        }
    };
});
//# sourceMappingURL=search.ngfactory.js.map