import {validateEntity, validateContext} from './utils/helperqueryable';
export class Queryable{
    constructor(entity,context){
        validateEntity(entity);
        validateContext(context);
        this._entity = entity;
        this._context = context;
        this._ast = {};

    }
    select(projection){
        this._ast["select"] = projection.toString();
        return this;
    }
    where(predictate){
        this._ast["where"] = {params,expresion}
        return this;
    }
    order(expresion){
        this._ast["order"] ={expresion,value}
        return this;
    }
    provider(){
        //TODO
    }
}
