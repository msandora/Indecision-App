import database from '../firebase/firebase'

// ADD_OPTION
export const addOption = (option) => ({
    type: 'ADD_OPTION',
    option
});

export const startAddOption = (optionData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', // default values
            note = '', 
            amount = 0, 
            createdAt = 0
        } = optionData;
        const option = { description, note, amount, createdAt };
        
        return database.ref(`users/${uid}/options`).push(option).then((ref) => {
            dispatch(addOption({
                id: ref.key,
                ...option
            }))
        });
    };
};

// REMOVE_OPTION
export const removeOption = ({ id } = {}) => ({
    type: 'REMOVE_OPTION',
    id
});

export const startRemoveOption = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/options/${id}`).remove().then(() => {
            dispatch(removeOption({ id }));
        });
    };
};



// SET_OPTIONS
export const setOptions = (options) => ({
    type: 'SET_OPTIONS',
    options
});
  
export const startsetOptions = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/options`).once('value').then((snapshot) => { 
        const options = []; // start with empty array
        snapshot.forEach((childSnapshot) => { // parse data
            options.push({ // push all options on array
            id: childSnapshot.key,
            ...childSnapshot.val() // spread out all the values
            });
        });

        dispatch(setOptions(options));
        });
    };
};