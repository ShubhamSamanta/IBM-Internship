//BURN
export const EAT =(Deci,Cal)=>{
    return{
        type: 'EAT',
        decision:Deci,
        cal: Cal
    };
}
//BURN
export const BURN =(Deci,Cal)=>{
    return{
        type: 'BURN',
        decision:Deci,
        cal: Cal*-1
    };
}
//ADD
export const ADD =(Cal)=>{
    return{
        type: 'ADD',
        cal: Cal
    };
}
//SUB
export const SUB =(Cal)=>{
    return{
        type: 'SUB',
        cal: Cal
    };
}