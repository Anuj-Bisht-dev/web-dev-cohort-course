// Reachability
// objects are retain in memory until they are reachable.

let temp = {
    email: "ansh@gmail.com",
    timmer: 5, // min
}

// after 5 min
temp = null;

// there's no way to access it, no ref to it.
// garbage collection will junk that data and free the memory.
