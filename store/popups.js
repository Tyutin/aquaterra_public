export const state = () => ({
    callbackPopupIsOpen: false
})

export const mutations = {
    openCallbackPopup(state) {
        state.callbackPopupIsOpen = true
    },
    closeCallbackPopup(state) {
        state.callbackPopupIsOpen = false
    },
    closeAllPopup(state) {
        state.callbackPopupIsOpen = false
    }
}