// Fetching data using Callbacks
function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.quotable.io/random');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                callback(null, data);
            } else {
                callback('Error fetching data', null);
            }
        }
    };
    xhr.send();
}

// Display quote on the page
function displayQuote(quote) {
    document.getElementById('quote').textContent = `"${quote.content}" - ${quote.author}`;
}

// Fetching data using Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.quotable.io/random');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            } else {
                reject('Error fetching data');
            }
        };
        xhr.send();
    });
}

// Fetching data using Async/Await
async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}

document.getElementById('fetchBtn').addEventListener('click', async function() {
    try {
        // Fetching data using Callbacks
        fetchDataWithCallback(function(error, data) {
            if (error) {
                console.error(error);
            } else {
                displayQuote(data);
            }
        });

        // Fetching data using Promises
        fetchDataWithPromise()
            .then(data => displayQuote(data))
            .catch(error => console.error(error));

        // Fetching data using Async/Await
        const data = await fetchDataWithAsyncAwait();
        displayQuote(data);
    } catch (error) {
        console.error(error);
    }
});
