export default class GetDataFromFirebaseOnStart {
    /**
     *
     * @param dataFillElement {HTMLElement}
     * @param dataGetter {String}
     */
    constructor(dataFillElement, dataGetterName) {

        this._dataFillElement = dataFillElement;
        this._dataGetterName = dataGetterName;

        this.init();
    }

    init() {
        this.getFirebaseData();
    }

    // Getters //

    /**
     *
     * @returns {String}
     */
    get dataGetterName() {
        return this._dataGetterName;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    get dataFillElement() {
        return this._dataFillElement;
    }

    /**
     *
     * @returns {Function}
     */
    get firebaseRef() {
        return firebase.database().ref();
    }

    // Methods //

    getFirebaseData() {

        return new Promise((resolve, reject) => {
            this.firebaseRef.child(this.dataGetterName).on('value', data => {

                console.log('firebase:', data.val());

                if (data) {

                    this.getFirebaseNamesToDOM(data.val());
                    resolve();

                }
                else {
                    reject();
                }

            });
        });

    }

    getFirebaseNamesToDOM(namesObj) {

        const names = [];

        for (const key in namesObj) {
            names.push(namesObj[key]);
        }

        this.dataFillElement.innerHTML = names.map(name => `<p>${name} <button class="remove-firebase-object">x</button></p>`).join('');

    }
}