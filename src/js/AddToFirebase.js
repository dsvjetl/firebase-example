export default class AddToFirebase {

    /**
     *
     * @param clickElement {HTML element}
     * @param text {String}
     */
    constructor(clickElement, inputTag) {
        this._clickElement = clickElement;
        this._inputTag = inputTag;

        // Call init method
        this.init();
    }

    init() {
        this.onElementClicked();
    }

    // Getters //

    /**
     *
     * @returns {HTMLElement}
     */
    get inputTag() {
        return this._inputTag;
    }

    /**
     *
     * @returns {String / Boolean / Number}
     */
    get text() {
        return this.inputTag.value ? this.inputTag.value : false;
    }

    /***
     *
     * @returns {HTMLElement}
     */
    get clickElement() {
        return this._clickElement;
    }

    /**
     *
     * @returns {Function}
     */
    get firebaseRef() {

        return firebase.database().ref();

    }

    // Methods //

    onElementClicked() {

        this.clickElement.addEventListener('click', () => {

            this.addValuesToDB();

            this.inputTag.value = '';

        });

    }

    addValuesToDB() {

        this.text ? this.firebaseRef.child('names').push().set(this.text) : console.error(Error('input text not proper'));

    }

}