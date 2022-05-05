import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBY9vkLVUbDhlj9IXQ6gxu7632Gnqhtouo",
    authDomain: "hot-burger-dnipro.firebaseapp.com",
    databaseURL: "https://hot-burger-dnipro-default-rtdb.europe-west1.firebasedatabase.app",
});
const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;