
// const initialState=[{decision:"",cal:0}];
const initialState=[];

const calLog=(state=initialState,action)=>{
    switch(action.type){
        case "EAT":
            return [...state,{decision:action.decision,cal:action.cal}];
        case "BURN":
            return [...state,{decision:action.decision,cal:(action.cal)-0}];
        default:
            return state;
    }
}
export default calLog;