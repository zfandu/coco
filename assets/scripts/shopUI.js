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
        anim:cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:
    out(){
        this.anim.play('shop_out1')
    },
    in(){
        this.anim.play('shop_in')
        this.node.active=true
    },
    onLoad () {
        this.node.active=false
        this.anim.play('show_out1')
    },

    outFinish(){
        this.node.active=false
    },

    start () {

    },

    // update (dt) {},
});
