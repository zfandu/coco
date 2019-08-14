// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        progressbar:cc.ProgressBar,
        label:cc.Label,
        totalTime:15,
        currentTime:0
    },


    onLoad () {},

    start () {

    },

    update (dt) {
        let ratio =this.currentTime/this.totalTime;
        this.progressbar.progress=ratio;

        let leftTime = this.totalTime-Math.floor(this.currentTime)
        leftTime=leftTime>=10?leftTime:"0"+leftTime;
        this.label.string="00:"+leftTime

        this.currentTime += dt;
        if(this.currentTime>this.totalTime){
            this.currentTime=0;
        }
    },
});
