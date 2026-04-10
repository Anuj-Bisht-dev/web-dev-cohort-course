function bootNavigation(mapNavigationLoaded) {
    try {
        console.log(`Navigation loaded: ${mapNavigationLoaded}`);
        if (!mapNavigationLoaded) {
            return new Error("Map was not loaded sucessfully");
        }
        return ("Nav OK");
    } catch (error) {
        console.log(error);
        console.log(`Navigation failed: ${error.message}`);
    } finally {
        console.log("Navigation Process Successfully completed");
    }
}

const status1 = bootNavigation(true);
// const status1 = bootNavigation(false);
console.log(status1);

