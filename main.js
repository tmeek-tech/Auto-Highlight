console.log("Starting main.js")
// const mySrc = document.createElement("script");
// mySrc.setAttribute("src", "https://unpkg.com/ml5@latest/dist/ml5.min.js")
// document.head.appendChild(mySrc);

// mySrc.onload = function () {
//     console.log('ml5 loaded')
//     console.log('ml5 version:', ml5.version)
// }

loadScript('https://assets.lsdsoftware.com/read-aloud/page-scripts/messaging.js').then(function() {
    console.log('script loaded')
    console.log('ml5 version:', ml5.version)
})

function loadScript(url) {
    console.log('loading script')
    return ajaxGet(url).then(eval);
}

function ajaxGet(url) {
    return new Promise(function (fulfill, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log('break')
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) fulfill(xhr.responseText);
                else reject(new Error(xhr.responseText == '' ? 'no response' : xhr.responceText));
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    })
}