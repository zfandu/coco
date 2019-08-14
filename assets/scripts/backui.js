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
        scrollView:cc.ScrollView,
        heroPrefab:cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         for(let index=0;index<20;index++){
            this.scrollView.content.addChild(this.generateHero())
         }
     },

    generateHero(){
        return cc.instantiate(this.heroPrefab)
    },

    show(){
        this.node.active=true;
        this.node.emit("fade-in")
    },
    hide(){
        this.node.emit("fade-out")
    },
    
    start () {

    },

    // update (dt) {},
});
