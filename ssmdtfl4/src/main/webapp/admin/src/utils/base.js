const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmdtfl4/",
            name: "ssmdtfl4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmdtfl4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "外卖点餐小程序"
        } 
    }
}
export default base
