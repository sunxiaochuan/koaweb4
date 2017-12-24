webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

//new 出来一个对象
var f = new _index.Thumb();
//在这里注册的是 x-praise 的标签
//引入 index.es 文件中导出的构造方法
xtag.register('x-praise', {
    //标签内容 将 index.html 中注释的代码拿到这里做拼接
    content: '<div id="thumb">' + '<div class="a">' + '<div class="b"></div>' + '<div class="c"></div>' + '</div>' + '</div>' + '<span class="hide" id="animation">+1</span>',
    //方法
    methods: {
        praise: function praise() {
            var _this = this;
            //请求接口
            f.clickAction();
            //执行动画
            var animation = _this.querySelector('#animation');
            animation.className = 'hide num';
            setTimeout(function () {
                animation.className = 'hide';
            }, 800);
        }
    },
    //事件
    events: {
        //写点击事件的稀释
        click: function click(e) {
            var _this = this;
            if (e.target.id = "thumb") {
                var t = '';
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

//new 出来一个对象
var f = new _index.Star();
//在这里注册的是 x-star 的标签
//引入 index.es 文件中导出的构造方法
xtag.register('x-star', {
    //标签内容
    content: '<div class="star" id="star">' + '<div></div>' + '<div></div>' + '<div></div>' + '<div></div>' + '<div></div>' + '</div>' + '<span class="hide" id="animation">+1</span>',
    //方法
    methods: {
        praise: function praise() {
            var _this = this;
            //请求接口
            f.clickAction();
            //执行动画
            var animation = _this.querySelector('#animation');
            animation.className = 'hide num';
            setTimeout(function () {
                animation.className = 'hide';
            }, 800);
        }
    },
    //事件
    events: {
        //写点击事件的稀释
        click: function click(e) {
            var _this = this;
            if (e.target.id = "star") {
                var t = '';
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ })
],[4]);