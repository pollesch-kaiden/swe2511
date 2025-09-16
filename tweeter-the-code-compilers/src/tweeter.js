// Class: SWE2511 - Tweeter
// Name: Matthew Schulz & Kaiden Pollesch
// Class Section: 111

let index = 0;

const onButtonClick = () => {
    // Gets input from the input field
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    // Validates the input from the user
    let validInput = false;
    let errorMessage = '';
    if(inputValue != null && inputValue !== "") {
        if (String(inputValue).length < 26) {
            validInput = true;
            const tableBodyElements = document.getElementById('tableBody').children;
            for (let i = 0; i < tableBodyElements.length; i++) {
                if(inputValue === tableBodyElements.item(i).children.item(0).innerText) {
                    validInput = false;
                    errorMessage = "Message Previously Recorded";
                }
            }
        } else {
            errorMessage = "Message Over 25 Characters";
        }
    } else {
        errorMessage = "No Message Inputted";
    }

    const errorElement = document.getElementById('errormessage');

    // Add to Local Storage
    const localStorage = window.localStorage;
    if(localStorage && validInput) {
        // Hide Error Message
        errorElement.hidden = true;

        // Add index element to local storage
        index++;
        localStorage.setItem('index', index);

        // Create Object from Value
        const tempObject = {
            textValue: inputValue,
            likes: 0,
            dislikes: 0
        }

        addTableEntry(tempObject, index);

        // Serialize
        const tempObjectString = JSON.stringify(tempObject);

        // Add to Local Storage
        localStorage.setItem(index, tempObjectString);
    } else if(!validInput) {
        errorElement.innerText = "Error: " + errorMessage;
        errorElement.hidden = false;
    }

}

const addLikeOrDislike = (index, likesOrDislikes) => {
    const localStorage = window.localStorage;
    const tempObject = JSON.parse(localStorage.getItem(index));
    const tableEntry = document.getElementById('tableBody').children.item(index - 1);
    if (likesOrDislikes === 'dislikes') {
        tempObject.dislikes++;
        tableEntry.children.item(4).innerText = tempObject.dislikes;
    } else if (likesOrDislikes === 'likes') {
        tempObject.likes++;
        tableEntry.children.item(2).innerText = tempObject.likes;

    }
    const tempObjectString = JSON.stringify(tempObject);
    localStorage.setItem(index, tempObjectString);
}

const addTableEntry = (object, localIndex) => {
    const tableBody = document.getElementById('tableBody');
    const entry = document.createElement('tr');
    const entryMessage = document.createElement('td');
    entryMessage.innerText = object.textValue;
    entry.appendChild(entryMessage);
    const entryLikeButt = document.createElement('td');
    entryLikeButt.className = 'container';
    const likeButt = document.createElement('button')
    likeButt.className = 'likeButtons'
    likeButt.innerText = "Like!"
    likeButt.onclick = () => {
        addLikeOrDislike(localIndex, 'likes');
    }
    entryLikeButt.appendChild(likeButt);
    entry.appendChild(entryLikeButt);
    const entryLike = document.createElement('td');
    entryLike.innerText = object.likes;
    entry.appendChild(entryLike);
    const entryDisButt = document.createElement('td');
    entryDisButt.className = 'container';
    const disButt = document.createElement('button')
    disButt.className = 'disButtons'
    disButt.innerText = 'Dislike';
    disButt.onclick = () => {
        addLikeOrDislike(localIndex, 'dislikes');
    }
    entryDisButt.appendChild(disButt);
    entry.appendChild(entryDisButt);
    const entryDislikes = document.createElement('td');
    entryDislikes.innerText = object.dislikes;
    entry.appendChild(entryDislikes);
    tableBody.appendChild(entry);
}

window.onload = () => {
    // Sets the submit button on action event
    const submitButton = document.getElementById("submitButton");
    submitButton.onclick = onButtonClick;

    // Restoring saved data from Local Storage
    const localStorage = window.localStorage;
    if(localStorage) {
        // Get and set Index Element
        if(localStorage.getItem('index')) {
            index = localStorage.getItem('index');
        } else {
            localStorage.setItem('index', 0);
        }

        for (let i = 1; i <= index; i++) {
            const tempObject = JSON.parse(localStorage.getItem(i));
            addTableEntry(tempObject, i);
        }
    }

};
