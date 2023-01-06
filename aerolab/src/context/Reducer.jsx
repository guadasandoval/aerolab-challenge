const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_USER = 'GET_USER'
const REDEEM_NOW = 'REDEEM_NOW'

export default function Reducer(state, action) {
 const {payload, type} = action

 switch (type){
    case GET_PRODUCTS:
        return {
            ...state,
            products: payload
        }
     case GET_USER:
        return {
        ...state,
        user: payload
        }

    case REDEEM_NOW:
        return {
        ...state,
        user:{_id:state.user._id, name: state.user.name, points: state.user.points - payload, createDate: state.user.createDate, redeemHistory
            : state.user.redeemHistory},
       }
}
}
