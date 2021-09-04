import staticData from "../../Lists/List.json";
import appConfig from "../../configs/app-config.json";

const initialState = {
    staticData,
    appConfig,
    currentPage: ""
}
const mainState = (state = initialState, actions) => {
    switch(actions.type){
        case "changePageTitle":
            return {
                ...state,
                currentPage: actions.title
            }
        default :
        return state;
    }
}

export default mainState;