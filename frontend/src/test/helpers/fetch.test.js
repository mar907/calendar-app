import { fetchSinToken } from "../../helpers/fetch"


describe('pruebas en el helper fetch', () => { 
    test('fetch sin token debe de funcionar', async () => { 

        const rest= await fetchSinToken ('auth', {email:'veronica@gmail.com', password: '123456'}, 'POST');

        expect (resp instanceof Response).toBe (true);

        const body= await resp.json();
        expect(body.ok).toBe(true);
     })
 })