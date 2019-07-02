export default {
    data: {
        countArray: []
    },

    // Methods that you need, for e.g fetching data from server etc.

    fetchCountArray() {
        // fetch logic
        return this.data.countArray;
    },

    updateCount(index, count) {
        this.data.countArray[index] = count;
    }

}