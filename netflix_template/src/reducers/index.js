let initState = { data: {} };

const movie = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, data: action.payload };
        case 'REMOVE':
            let newMyList = state.data.mylist.filter((item) => {
                if(item.id !== action.payload) {
                  return item;
                }
            });
            return { ...state, data: { ...state.data, mylist: newMyList } };
        case 'ADD':
            let target = state.data.recommendations.filter((item) => {
                if(item.id === action.payload) {
                    return item;
                }
            });
            let newRecom = state.data.recommendations.filter((item) => {
                if(item.id !== action.payload) {
                    return item;
                }
            });
            let newList = [ ...state.data.mylist, target[0]];
            return { ...state, data: { ...state.data, mylist: newList, recommendations: newRecom } };
        default:
            return state;
    }
}

export default movie;