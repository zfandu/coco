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

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.duration=0.3
        this.outOfWorld=cc.v2(2000,0)
        this.node.position=this.outOfWorld

        this.node.on('fade-in',this.startFadeIn,this)
        this.node.on('fade-out',this.startFadeOut,this)

        let cbFadeIn=cc.callFunc(this.onFadeInFinish(),this)
        let cbFadeOut=cc.callFunc(this.onFadeOutFinish(),this)

        this.actionFadeIn=cc.sequence(
            cc.spawn(
                cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)
            ),cbFadeIn
        )

        this.actionFadeOut=cc.sequence(
            cc.spawn(
                cc.fadeTo(this.duration,0),cc.scaleTo(this.duration,1.3)
            ),cbFadeOut
        )
    },

    startFadeIn(){
        cc.log("show")
        this.node.position=cc.v2(0,0)
        this.node.setScale(2)
        this.node.opacity=0;
        this.node.runAction(this.actionFadeIn);
    },

    startFadeOut(){
        this.node.runAction(this.actionFadeOut);
        this.node.active=false;
    },

    onFadeInFinish(){

    },

    onFadeOutFinish(){

    },

    start () {

    },

    // update (dt) {},
});
