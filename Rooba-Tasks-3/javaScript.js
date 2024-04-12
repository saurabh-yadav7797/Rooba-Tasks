let items = []; 

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const newItem = itemInput.value.trim(); 

    if (newItem !== "") {
        items.push(newItem); 
        displayItems(); 
        itemInput.value = ""; 
    }
}

function displayItems() {
    const itemList = document.getElementById("itemList");

    // Clear existing list
    itemList.innerHTML = "";

    // Loop through items array and create list items
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("data-index", index); // Set custom attribute to store index
        itemList.appendChild(li);
    });

    // Add event listener to each list item to remove on click
    itemList.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", removeItem);
    });
}

function removeItem(event) {
    const clickedIndex = event.target.getAttribute("data-index");
    items.splice(clickedIndex, 1); // Remove item from array
    displayItems(); // Update the displayed list
}

// Initial display of items when the page loads
displayItems();
