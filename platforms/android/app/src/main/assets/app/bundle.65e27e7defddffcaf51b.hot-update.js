"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./app/components/Home.vue?vue&type=script&lang=js&":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data() {
        return {
            notes: [],
            newNote: "",
        };
    },
    methods: {
        addNote() {
            if (this.newNote.trim()) {
                this.notes.push(this.newNote);
                this.newNote = "";
            }
        },
    },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./app/components/Home.vue?vue&type=template&id=1858554c&scoped=true&":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", {
        attrs: { title: "Notes App", orientation: "horizontal" },
      }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "scrollView", staticStyle: { marginTop: "5rem" } },
            [
              _c("TextField", {
                staticClass: "addNoteTextField",
                attrs: { hint: "Enter Note...", returnKeyType: "save" },
                on: { returnPress: _vm.addNote },
                model: {
                  value: _vm.newNote,
                  callback: function ($event) {
                    _vm.newNote = $event.object["text"]
                  },
                  expression: "newNote",
                },
              }),
              _c("Button", {
                staticClass: "addNoteBtn",
                attrs: { text: "Add Note" },
                on: { tap: _vm.addNote },
              }),
              _c(
                "StackLayout",
                _vm._l(_vm.notes, function (note, index) {
                  return _vm.notes.length > 0
                    ? _c("Label", {
                        key: index,
                        staticClass: "note",
                        attrs: { text: note, row: index, column: index },
                      })
                    : _c("Label", {
                        staticClass: "noNote",
                        attrs: { text: "No Notes" },
                      })
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjY1ZTI3ZTdkZWZkZGZmY2FmNTFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUM0Qjs7QUFFNUIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeERGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQStDO0FBQ2hFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQ0FBMEMscUJBQXFCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkUsc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0Msc0JBQXNCLGtCQUFrQjtBQUN4QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUNBQXVDO0FBQ3hFLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRCx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rlc0FwcC9hcHAvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly9ub3Rlc0FwcC8uL2FwcC9jb21wb25lbnRzL0hvbWUudnVlPzFkNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTm90ZXMgQXBwXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz5cblxuICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cInNjcm9sbFZpZXdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVyZW1cIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdOb3RlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhZGROb3RlVGV4dEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgaGludD1cIkVudGVyIE5vdGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImFkZE5vdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImFkZE5vdGVCdG5cIiB0ZXh0PVwiQWRkIE5vdGVcIiBAdGFwPVwiYWRkTm90ZVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm5vdGVzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIobm90ZSwgaW5kZXgpIGluIG5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIm5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyb3c9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y29sdW1uPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1lbHNlIGNsYXNzPVwibm9Ob3RlXCIgdGV4dD1cIk5vIE5vdGVzXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1xuICAgIExhYmVsLFxuICAgIFNjcm9sbFZpZXcsXG4gICAgVGV4dEZpZWxkLFxuICAgIFN0YWNrTGF5b3V0LFxuICAgIEJ1dHRvbixcbn0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdGVzOiBbXSxcbiAgICAgICAgICAgIG5ld05vdGU6IFwiXCIsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZE5vdGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXdOb3RlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMucHVzaCh0aGlzLm5ld05vdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Tm90ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZVwiO1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuc2Nyb2xsVmlldyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4vLyBDdXN0b20gc3R5bGVzXG4uYWRkTm90ZVRleHRGaWVsZCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubm90ZSB7XG4gICAgbWFyZ2luOiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjYWFhO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ub05vdGUge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4uYWRkTm90ZUJ0biB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZUFjdGlvbkJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCJOb3RlcyBBcHBcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGxWaWV3XCIsIHN0YXRpY1N0eWxlOiB7IG1hcmdpblRvcDogXCI1cmVtXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkTm90ZVRleHRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiRW50ZXIgTm90ZS4uLlwiLCByZXR1cm5LZXlUeXBlOiBcInNhdmVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHJldHVyblByZXNzOiBfdm0uYWRkTm90ZSB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld05vdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubmV3Tm90ZSA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdOb3RlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZGROb3RlQnRuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGQgTm90ZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYWRkTm90ZSB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubm90ZXMsIGZ1bmN0aW9uIChub3RlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5ub3Rlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbm90ZSwgcm93OiBpbmRleCwgY29sdW1uOiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJub05vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTm8gTm90ZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9