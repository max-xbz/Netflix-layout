import axios from 'axios';
export const fetchSuccess = (data) => {
    return {
        type: 'FETCH_SUCCESS',
        payload: data
    };
}
export const removeOne = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    };
}

export const addOne = (id) => {
    return {
        type: 'ADD',
        payload: id
    };
}

export const fetchData = () => {
    return (dispatch, getState) => {
        axios.get('./data.json')
            .then(res => {
                dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
}