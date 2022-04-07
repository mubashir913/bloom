export const setCurrentOccasion = (occasion) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT_OCCASION",
            payload: {
                currentOccasion: occasion
            }
        })
    }
}

export const setCurrentColor = (color) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT_COLOR",
            payload: {
                currentColor: color
            }
        })
    }
}

export const setShowOverlay = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SHOW_OVERLAY",
            payload: {
                showOverlay: show
            }
        })
    }
}

export const setShowModal = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SHOW_MODAL",
            payload: {
                showModal: show
            }
        })
    }
}

export const setModal = (modal) => {
    return (dispatch) => {
        dispatch({
            type: "SET_MODAL",
            payload: modal
        })
    }
}

export const updateCurrentDropdownValues = (obj) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CURRENT_DROPDOWN_VALUES",
            payload: obj
        })
    }
}