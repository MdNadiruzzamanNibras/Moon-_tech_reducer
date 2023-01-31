import { ActionType } from "./ActionType"

export const instialstate ={
    loading: false,
    product:[],
    error: false
}
export const ProducReducer = (state, action)=>{

    switch (action.type) {
        case ActionType.FETCHING_START:
            return{
                ...state,
                loading: true,
                error:false
            };
        case ActionType.FETCHING_SUCCESS:
            return{
                ...state,
                loading: false,
                product: action.payload,
                error:false
            };
        case ActionType.FETCHING_ERROR:
            return{
                ...state,
                loading: false,
               
                error:true
            };
            
           
    
        default:
            return state
    }
}