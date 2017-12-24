import index from './indexController'; //引入 indexController 文件导出的方法
const controllerInit = {
    //配置初始化函数
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', index.index());
            _.get('/index/update', index.update());
            _.get('/index/star', index.star());
            _.get('/index/praise', index.praise());
            _.get('/index/adv', index.advertisement());
        }))
    }
}
//导出初始化方法，使其全局可用
export default controllerInit;