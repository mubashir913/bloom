const initialState = {
    showOverlay: false,
    showModal: false,
    occasions: ["wedding", "birthday", "new year", "party", "christmas", "easter", "eid"],
    colors: ["red", "yellow", "pink", "white", "violet", "blue"],
    currentDropdownValues: {
        occasion: null,
        color: null
    },
    modal: {
        type: null
    }
};

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_CURRENT_DROPDOWN_VALUES":
            return {...state, currentDropdownValues: action.payload};
        case "SET_SHOW_OVERLAY":
            return {...state, showOverlay: action.payload.showOverlay};
        case "SET_SHOW_MODAL":
            return {...state, showModal: action.payload.showModal};
        case "SET_MODAL":
            return {...state, modal: action.payload};
        default:
            return state;
    }
}