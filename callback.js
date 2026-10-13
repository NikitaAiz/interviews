// 1 - Take the timer function that supports callback function and add to it an option to work as a Promise

const timer = (time, callback) => {
    setTimeout(callback, time)
}

timer(2000, () => console.log('Done')) // Works
timer(2000).then(() => console.log('Done')) // Should work