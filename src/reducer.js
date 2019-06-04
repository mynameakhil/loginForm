import {
    reactLocalStorage
} from 'reactjs-localstorage';
const intialState = {
    username: "",
    password: "",
    login: ""


};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "NEW_USER":
            return ({ ...state, username: action.data });
            console.log(state.username);
        case "NEW_PSWD":
            return ({ ...state, password: action.data });
        case "NEW_LOGIN":
            // state.login.push(state.username,state.password)
            const loclData = reactLocalStorage.getObject('users');
            loclData.map((item) => {
                if ((item.username === state.username) && (item.password === state.password)) {
                    console.log("s")
                    return ({...state,login:"login_sucess"})
                }
                else {
                
                    return ({ ...state,login: "user_not_found"})
                }
            });
        
            // console.log(loclData)
    
        // return {login: state.login}
        default:
            return state;
        
   }
        
    //    return( {...state, data:action.data })
        

        
 }
export default reducer;