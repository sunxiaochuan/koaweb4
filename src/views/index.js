module.exports = function(templateParams) {
    //vendor 是 css 的文件名称
    var _cssList = ['vendor'];
    var webAssestsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
    
    var scriptsshowStr = ``;
    //拼写 index.html 代码
    var _html = "{% extends './layout.html' %}" +
        "{% block title %}My Page{% endblock %}" +
        "{% block styles %}" +
        webAssestsHelp.styles +
        "{% endblock %}" +
        "{% block content %}{%  include '../widget/index.html' %}{% endblock %}" +
        "{% block script %}" +
        //在这里进行判断 localStorage 要有 key 值 和 value 值
        //逻辑是：判断 localStorage 如果有的话就将里面的 value 拿出来然后放到 head 标签里面  这里直接就放在这个被 script 包裹的位置就可以了；如果是没有的话就去发请求，请求完之后把他放到 localStorage 里面
        //这里引用的 script 字符串还是通过 webAssetsHelp.js 文件传过来的
        //在下面定义了一立即执行函数
        "<script>"+
        "(function(){"+
        //定义一个哨兵变量供下方判断使用
        "var flag = false;"+
        "var scriptsshow = ["+ webAssestsHelp.scriptsshow +"];"+
        "for(let i = 0;i < scriptsshow.length;i++){"+
            //取值 这个值其实是 script 引用的资源的具体路径名称 下面作为 localStorage 的 key 来使用
            "let a = scriptsshow[i];"+
            //判断 localStorage 里面是否有上面的值
            //localStorage  的用法  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            "if(localStorage.getItem(a)){"+
                //如果有值的话直接将资源拼接成 script 标签追加加到 head 标签 后面，增加 id 值是为了后面的 remove 避免被资源重复加载
                       "$('<scr'+'ipt>'+localStorage.getItem(a)+'</scr'+'ipt>').attr({type:'text/javascript',id:i}).appendTo($('head').remove('#'+i));" +
            "}"+

            //第一次实现 存储至 localStorage 功能使用的 else
            // "else{"+
            //         //jQuery.getScript() 函数详解    http://www.365mini.com/page/jquery_getscript.htm
            //         //jQuery.getScript()函数用于通过HTTP GET形式的加载JavaScript文件并运行它。
            //         // 该函数用于动态加载JS文件，并在全局作用域下执行文件中的JS代码。
            //         // 该函数可以加载跨域的JS文件。请注意，该函数是通过异步方式加载数据的。
            //         // 该函数属于全局jQuery对象。
            //     "$.getScript({url:a,success:function(data){localStorage.setItem(a,data)}});"+
            // "}" +

            //第二次实现 lazyload 并行加载功能使用的 else
            "else{"+
                        //先将 localStorage 直接全部清除掉
                        "localStorage.clear();"+
                        //将哨兵变量设为 true 因为下面的 lazyload 需要加载资源
                        "flag = true;"+
                        //再用循环的方式给 localStorage 中增加键值对
                        "for (let q = 0;q < scriptsshow.length;q++) {"+
                            "let b = scriptsshow[q];"+
                            //通过 axios 以 Promise 的形式请求资源
                            //Axios 中文说明：   https://www.kancloud.cn/yunye/axios/234845
                            "axios.get(b)"+
                            ".then(function(data){"+
                                "localStorage.setItem(b,data.data);"+
                            "})"+
                        "}"+
                        //JS break 语句解释：http://www.w3school.com.cn/js/js_break.asp
                        //break 语句用于跳出循环
                        //这里的跳出循环实际上值得是最外面的第一个 for 循环，因为所有的资源都已经配置到 localStorage 中了无需再循环了
                        //break 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）：这里执行的就是下面的 lazyload 加载的代码
                        "break;"+
                        
            "}" +
            //用哨兵变量进行判断是否需要 lazyload 加载资源
            "if(flag){"+
                        //之后再使用 lazyload 往页面并行加载资源
                        //lazyload 资源网址：http://www.bootcdn.cn/lazyload/                    
                        //lazyload 使用方法网址：http://www.bootcdn.cn/lazyload/readme/#usage
                        "LazyLoad.js(scriptsshow,function(){});"+
            "}"+

         "}" +   
    "})();"+
        "</script>"+

        // webAssestsHelp.scripts+
        "{% endblock %}";
    return _html;
}