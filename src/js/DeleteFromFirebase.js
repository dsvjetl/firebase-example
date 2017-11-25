export default class DeleteFromFirebase {

    constructor() {

        this.init();
    }

    init() {

    }

    // Getters //

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

    // this method was sent to GetDataFromrirebaseOnStart module class
    getElementOnClick() {

        this.deleteBtns.forEach(deleteBtn => {

            deleteBtn.addEventListener('click', ev => {

                const btnParentToDelete = ev.currentTarget.parentElement;

                this.deleteElFromFirebase(this.returnDeleteElementKey(btnParentToDelete));

            });

        });


        this.deleteAllButton.addEventListener('click', ev => {

            this.databaseRef.child('names').remove();

        });


    }

    returnDeleteElementKey(el) {
        return el.dataset.key;
    }

    deleteElFromFirebase(key) {
        this.databaseRef.child('names').child(key).remove();
    }

}