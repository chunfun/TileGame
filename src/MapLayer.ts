/**
 * 地图类
 */
class MapLayer extends egret.DisplayObjectContainer{

    constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage():void{

    }

    public destroy():void{

    }
}