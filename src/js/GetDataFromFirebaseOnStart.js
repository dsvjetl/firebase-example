import DeleteFromFirebase from './DeleteFromFirebase';

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

    get deleteFromFirebase() {
        return new DeleteFromFirebase();
    }

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

                if (data) {

                    this.getFirebaseNamesToDOM(data.val());
                    const deleteFromFirebase = this.deleteFromFirebase;

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
            names.push({value: namesObj[key], key});
        }

        this.dataFillElement.innerHTML = names.map(name => `<p data-key="${name.key}">${name.value} <button class="remove-firebase-object">x</button></p>`).join('');

    }
}