'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();

let f;

const p = function () {

    f = 23;
    console.log(f);
    return function () {
        f = 24;
        console.log(f);

        return function () {
            f = 25;
            console.log(f);
        }
    }
};

const q = p();
const r = q();
const s = r();
q();
r();