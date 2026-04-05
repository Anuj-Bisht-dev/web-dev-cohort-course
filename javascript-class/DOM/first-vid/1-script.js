// tiffen (closure in eventListnear)

const butRefrenceObj = {
    listner: [],
    addEventListnear(cb) {
        this.listner.push(cb);
    },
    onBrowserClick: function () {
        for (const fn of this.listner) {
            fn();
        }
    }

}

butRefrenceObj.addEventListnear(function () {

});

