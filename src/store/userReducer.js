export const ADD_USER_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_USER_ACTION = 'UPDATE_USER_ACTION';

let id = 1

const initialState = [
    {
        id: 1,
        Name: 'Joe',
        Email: 'supermarket@supermarket.com',
        Password : 'supermarket',
        admin: true,
        Cart: [],
        Likes: []
    }
]

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_ACTION: 
            return [...state, {id: ++id, admin: false, cart: [], likes: [], ...action.payload }]
        case UPDATE_USER_ACTION:
            return state.map(elem => {
                if (elem.id === action.payload.id) {
                    return {...elem, ...action.payload}
                } else {
                    return elem
                }
            })
        default:
          return state
    }
}