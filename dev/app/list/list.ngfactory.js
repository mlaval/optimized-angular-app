/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./list", "../../node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.ngfactory", "@ng-bootstrap/ng-bootstrap/pagination/pagination", "@ng-bootstrap/ng-bootstrap/pagination/pagination-config"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_List_0() {
        return import0.ɵvid(0, [
            import0.ɵted(null, ['\n    ']),
            import0.ɵeld(0, null, null, 10, 'div', [], null, null, null, null, null),
            import0.ɵted(null, ['\n      ']),
            import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null),
            import0.ɵted(null, ['Paginated list']),
            import0.ɵted(null, ['\n      ']),
            import0.ɵeld(0, null, null, 1, 'ngb-pagination', [], null, [[
                    null,
                    'pageChange'
                ]
            ], function (view, eventName, $event) {
                var allowDefault = true;
                var comp = view.component;
                if (('pageChange' === eventName)) {
                    var pd_0 = ((comp.page = $event) !== false);
                    allowDefault = (pd_0 && allowDefault);
                }
                return allowDefault;
            }, import2.View_NgbPagination_0, import2.RenderType_NgbPagination),
            import0.ɵdid(286720, null, 0, import3.NgbPagination, [import4.NgbPaginationConfig], {
                collectionSize: [
                    0,
                    'collectionSize'
                ],
                page: [
                    1,
                    'page'
                ]
            }, { pageChange: 'pageChange' }),
            import0.ɵted(null, ['\n      ']),
            import0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null),
            import0.ɵted(null, [
                'Current page: ',
                ''
            ]),
            import0.ɵted(null, ['\n    ']),
            import0.ɵted(null, ['\n  '])
        ], function (check, view) {
            var comp = view.component;
            var currVal_0 = 70;
            var currVal_1 = comp.page;
            check(view, 7, 0, currVal_0, currVal_1);
        }, function (check, view) {
            var comp = view.component;
            var currVal_0 = comp.page;
            check(view, 10, 0, currVal_0);
        });
    }
    exports_1("View_List_0", View_List_0);
    function View_List_Host_0() {
        return import0.ɵvid(0, [
            import0.ɵeld(0, null, null, 1, 'list', [], null, null, null, View_List_0, RenderType_List),
            import0.ɵdid(24576, null, 0, import1.List, [], null, null)
        ], null, null);
    }
    var import0, import1, import2, import3, import4, styles_List, RenderType_List, RenderType_List_Host, ListNgFactory;
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
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_List = [];
            exports_1("RenderType_List", RenderType_List = import0.ɵcrt({
                encapsulation: 2,
                styles: styles_List,
                data: {}
            }));
            RenderType_List_Host = import0.ɵcrt({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            exports_1("ListNgFactory", ListNgFactory = import0.ɵccf('list', import1.List, View_List_Host_0));
        }
    };
});
//# sourceMappingURL=list.ngfactory.js.map