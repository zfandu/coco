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
        heroImgs:{
            default:[],
            type:cc.SpriteFrame
        },
        hero:cc.Sprite
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
     let heroIndex=this.getRandomInt(this.heroImgs.length)
     let image =this.heroImgs[heroIndex]
        this.hero.spriteFrame=image
    },

    getRandomInt(max){
        let ratio= Math.random();
        return Math.floor(max*ratio)
    },
    
    start () {

    },

    // update (dt) {},
});
