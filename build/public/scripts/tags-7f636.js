webpackJsonp([0],[,,,,function(i,t,a){a(5),i.exports=a(6)},function(i,t,a){"use strict";var e=a(0),s=new e.Thumb;xtag.register("x-praise",{content:'<div id="thumb"><div class="a"><div class="b"></div><div class="c"></div></div></div><span class="hide" id="animation">+1</span>',methods:{praise:function(){var i=this;s.clickAction();var t=i.querySelector("#animation");t.className="hide num",setTimeout(function(){t.className="hide"},800)}},events:{click:function(i){var t=this;if(i.target.id="thumb"){var a="";a&&clearTimeout(a),a=setTimeout(function(){t.praise()},500)}}}})},function(i,t,a){"use strict";var e=a(0),s=new e.Star;xtag.register("x-star",{content:'<div class="star" id="star"><div></div><div></div><div></div><div></div><div></div></div><span class="hide" id="animation">+1</span>',methods:{praise:function(){var i=this;s.clickAction();var t=i.querySelector("#animation");t.className="hide num",setTimeout(function(){t.className="hide"},800)}},events:{click:function(i){var t=this;if(i.target.id="star"){var a="";a&&clearTimeout(a),a=setTimeout(function(){t.praise()},500)}}}})}],[4]);