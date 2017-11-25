// Initialize Firebase //

export const FirebaseInit = class {
    constructor() {

        this.init();
    }

    init() {
        var config = {
            apiKey: "AIzaSyDvSr5rAYcBrBxYflhmn1MLK-iA4u4MpBU",
            authDomain: "test-74e9f.firebaseapp.com",
            databaseURL: "https://test-74e9f.firebaseio.com/",
            projectId: "test-74e9f",
            storageBucket: "",
            messagingSenderId: "735813369236"
        };
        firebase.initializeApp(config);
    }
}