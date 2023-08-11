import async, {log} from 'async'

async.parallel([
    (cb) => {setTimeout(() => { console.log('A'); cb(null, "A is done"); }, 1000) },
    (cb) => {setTimeout(() => { console.log('B'); cb(null, "B is done"); }, 3000) },
    (cb) => {setTimeout(() => {
        console.log('C');
        cb(null, "C is done");
    }, 2000) },
], (err, res) => {
    console.log(res);
});