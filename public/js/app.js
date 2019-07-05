const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = '';
messageTwo.textContent = '';

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     fetch("/weather?address=" + search.value).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error;
//                 messageTwo.textContent = '';
//             } else {
//                 messageOne.textContent = data.location;
//                 messageTwo.textContent = data.forecast;
//             }
//         })
//     })
// })

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location = "/weather?address=" + search.value;
})