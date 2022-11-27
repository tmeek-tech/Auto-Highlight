console.log('starting script sentence highlighter')

//get a list of each text node in the body
var textNodes = [];
var nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null, false);
while (nodeIterator.nextNode()) {
    textNodes.push(nodeIterator.referenceNode);
}

//create a new node for each sentence in the text nodes
for (var i = 0; i < textNodes.length; i++) {
    var parent = textNodes[i].parentNode
    var sentences = splitBySentences(textNodes[i].nodeValue);
    var newNode = document.createElement("span");
    for (var j = 0; j < sentences.length; j++) {

        //create a node for each sentence
        var sentenceNode = document.createElement("span");
        sentenceNode.innerHTML = sentences[j]

        //change the color of the sentence
        sentenceNode.style.color = getRandomColor()

        //append the sentence to the new node
        newNode.appendChild(sentenceNode)
    }

    //add the new node to the document
    parent.insertBefore(newNode, textNodes[i]);

    //remove the original text node
    parent.removeChild(textNodes[i]);
}


//Take a string and return an array of sentences
function splitBySentences(text) {
    var sentences = [];
    var sentenceRegex = /[\s*]*([^\.\?\!]+)([\.\?\!]+|$)/g;
    var match;
    while (match = sentenceRegex.exec(text)) {
        sentences.push(match[1] + match[2]);
    }
    return sentences;
}

//Get a random color
var index
function getRandomColor() {
    colors = ['#FF0000', '#00FF00', '#0000FF']
    // return colors[Math.floor(Math.random() * colors.length)];
    if (index === undefined) {
        index = 0
    }
    index = (index + 1) % colors.length
    return colors[index]
}

//Get a color by feeding a sentence into a machine learning model
function getColor(text, onColor, offColor) {}

console.log('done')