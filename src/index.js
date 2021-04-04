export default class Watermark {
    constructor(props) {
        this.params = {
            id:  props && props.id || '',
            clarity: 1,
            text: props && props.text || '区草',
            color: '#999',
            fontSize: '15px',
            size:100,
            density: 300,
            lock:props && props.lock || false
        }
        this.init();
    }

    init() {
        // let id = this.params.id;
        if (!this.params.id) {
            this.params.id = this.randomString(18)
        }
        // console.log(this.params.id)
        // // 删除已有画布
        // let oldCanvas = document.getElementById(this.params.id);
        // if (oldCanvas) {
        //     oldCanvas.parentNode.removeChild(oldCanvas);
        // }

        // 创建画布
        let body = document.getElementsByTagName("body");
        let width = window.screen.width;
        let height = window.screen.height;
        let canvas = document.createElement('canvas');
        body[0].appendChild(canvas);


        // 设置画布id
        canvas.setAttribute('id', this.params.id);
        canvas.width = width * this.params.clarity;
        canvas.height = height * this.params.clarity;
        canvas.style.cssText = 'position:fixed;width:100%;height:100%;left:0;top:0;z-index:-1;';
        /**
         * 填充画布
         * 计算 x 轴和 y 轴可展示水印个数，要做冗余计算，防止出现边界水印缺失
         * 画布逆时针旋转 15 度
         * 遍历 x,y 依次绘制水印
         */
            // let canvas = document.getElementById(this.params.id);
        let cxt = canvas.getContext('2d');
        let redundance = 10;
        let xCount = window.screen.width * this.params.clarity / this.params.size + redundance;
        let yCount = window.screen.height * this.params.clarity / this.params.size + redundance;

        cxt.rotate(-15 * Math.PI / 180);

        for (let i = 0; i < xCount; i++) {
            for (let j = 0; j < yCount; j++) {
                cxt.fillStyle = this.params.color;
                cxt.font =  `${this.params.fontSize} Arial` ;
                cxt.fillText(this.params.text, this.params.density * (i - redundance / 2), j * this.params.size);
            }
        }

        // this.lockFun();

    }
    lockFun(){
        /**
         * 可自行添加防篡改安全锁
         */
        let self = this;
        if(this.params.density){
            let canvasDom = document.getElementById(self.params.id);
            //console.log(canvasDom)

            window.setInterval(function(){
                let canvasDom = document.getElementById(self.params.id);
                if (!canvasDom
                    || canvasDom.style.cssText !== 'position: fixed; width: 100%; height: 100%; left: 0px; top: 0px; z-index: -1;'
                    || canvasDom.width !== (window.screen.width * self.params.clarity)
                    || canvasDom.height !==  (window.screen.height * self.params.clarity))
                {

                    self.init();
                }
            }, 500);
        }
    }
    randomString(e){
        e = e || 32;
        var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
            a = t.length,
            n = "";
        for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
        return n
    }
}