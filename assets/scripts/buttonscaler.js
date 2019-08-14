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
        duration:0.1,
        scaleRatio:0.8
    },


    onLoad () {
        let initScale=this.node.scale;
        let scaleDownAction=cc.scaleTo(this.duration,this.scaleRatio);
        let scaleUpAction=cc.scaleTo(this.duration,initScale);

        // this.node.runAction(scaleDownAction);
        this.node.on('touchstart',onTouchDown,this.node)
        this.node.on('touchend',onTouchUP,this.node)
        this.node.on('touchcancel',onTouchUP,this.node)

        function onTouchDown(){
            this.stopAllActions()
            this.runAction(scaleDownAction)
        }

        function onTouchUP(){
            this.stopAllActions()
            this.runAction(scaleUpAction)
        }
    },

    start () {

    },

    update (dt) {},
});
