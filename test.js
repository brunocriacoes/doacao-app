import SuperApp from './super-app.js'

( async function() {
    let test = new SuperApp
    let login = (await test.login( 'digital', '123' )).next
    console.log( 'LOGIN: ' + login )
} )()