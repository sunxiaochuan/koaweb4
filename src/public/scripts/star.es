//引入 index.es 文件中导出的构造方法
import {Star} from "./index.es";
//new 出来一个对象
const f = new Star();
//在这里注册的是 x-star 的标签
xtag.register('x-star', {
    //标签内容
    content: '<div class="star" id="star">'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
        '<div></div>'+
    '</div>'+
    '<span class="hide" id="animation">+1</span>',
    //方法
    methods: {
        praise: function() {
            let _this = this;
            //请求接口
            f.clickAction();
            //执行动画
            let animation = _this.querySelector('#animation');
            animation.className = 'hide num';
            setTimeout(function() {
                animation.className = 'hide';
            }, 800)
        }
    },
    //事件
    events: {
        //写点击事件的稀释
        click: function(e) {
            let _this = this;
            if (e.target.id = "star") {
                let t = '';
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(() => {
                    _this.praise();
                }, 500)
            }
        }
    }
});