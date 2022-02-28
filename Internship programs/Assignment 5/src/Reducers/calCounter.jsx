const calCounter=(state=0,action)=>{
    switch(action.type){
        case "ADD":
            return state+action.cal;
        case "SUB":
            return state-action.cal;
        default:
            return state;
    }
}
export default calCounter;