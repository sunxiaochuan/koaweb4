import css from '../css/index.css';
class PraiseButton {
    constructor() {

    }
    clickAction() {
        axios.get('/index/update')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

//实战四修改的地方
//首先定义一个 Thumb 继承自上面的   PraiseButton
class Thumb extends PraiseButton{
    //将 PraiseButton 构造函数内的 constructor 使用 super 方法全部都继承过来
    constructor(){
        super();
    }
}
//跟上面一样定义一个 Star 继承自  PraiseButton
class Star extends PraiseButton{
    //将 PraiseButton 构造函数内的 constructor 使用 super 方法全部都继承过来
    constructor(){
        super();
    }
}


//因为这里导出的时候有 Star 和 Thunb 所以要把这个注释掉
// export default PraiseButton;

//导出两个定义好的子类
export  {Thumb,Star};

// let  f = new Thumb(0,$('#thumb'));
// f.clickAction();