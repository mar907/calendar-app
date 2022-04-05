import { types } from "../../components/types/types"


describe('pruebas en types', () => { 
    test('los types deben de ser iguales', () => { 
    expect(types).toEqual({
   
        uiOpenModal: '[ui] open modal',
        uiCloseModal: '[ui] Close modal',
     
        eventSetActive: '[event] Set active',
        eventAddNew: '[event] Add new',
        eventLogout: '[event] Logout event', 
      
        eventStartAddNew: '[event] Start add new',
        eventClearActiveEvent: '[event] Clear active event',
        eventUpdated: '[event] Event updated',
        eventDeleted: '[event] Event deleted',
        eventLoaded: '[event] Events loaded',
     
        authCheckingFinish: '[auth] Finish Checking login state',
        authStartLogin: '[auth] Start Login',
        authLogin: '[auth] Login',
        authStartRegister: '[auth] Start Register',
        authStartTokenRenew: '[auth] Start token renew',
        authLogout: '[auth] Logout'
     })
 })
})