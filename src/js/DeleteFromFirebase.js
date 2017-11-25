export default class DeleteFromFirebase {

    constructor() {

        this.init();
    }

    init() {

        this.getElementOnClick();
    }

    // Getters //

    get inputText() {
        return document.querySelector('#input-text');
    }

    /**
     *
     * @returns {Function}
     */
    get databaseRef() {
        return firebase.database().ref();
    }

    /**
     *
     * @returns {Element}
     */
    get deleteAllButton() {
        return document.querySelector('#deleteAll');
    }

    /**
     *
     * @returns {NodeList}
     */
    get deleteBtns() {
        return document.querySelectorAll('.remove-firebase-object');
    }

    // Methods //

    getElementOnClick() {

        // Appended paragraphs deletion
        this.deleteBtns.forEach(deleteBtn => {

            deleteBtn.addEventListener('click', ev => {

                const btnParentToDelete = ev.currentTarget.parentElement;

                this.deleteFromDOM(this.returnDeleteElementKey(btnParentToDelete));

                this.inputText.value = '';

            });

        });


        this.deleteAllButton.addEventListener('click', ev => {

            this.databaseRef.child('names').remove();

        });

    }

    returnDeleteElementKey(el) {
        return el.dataset.key;
    }

    deleteFromDOM(key) {
        this.databaseRef.child('names').child(key).remove();
    }

}