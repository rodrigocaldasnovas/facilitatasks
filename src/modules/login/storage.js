export const setLocalToken = token => localStorage.setItem('appFacilitaToken', token)
export const getLocalToken = () => localStorage.getItem('appFacilitaToken')
export const deleteLocalToken = () => localStorage.removeItem('appFacilitaToken')
