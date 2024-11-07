//your JS code here. If required.
// Get form elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Add event listener to the submit button
submitButton.addEventListener("click", addBook);

function addBook() {
  // Get input values
  const title = titleInput.value;
  const author = authorInput.value;
  const isbn = isbnInput.value;

  // Validate input fields
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new row for the book
  const row = document.createElement("tr");

  // Insert title, author, and ISBN data into cells
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append the row to the table body
  bookList.appendChild(row);

  // Clear input fields
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";

  // Add event listener to the delete button in the new row
  row.querySelector(".delete").addEventListener("click", function() {
    row.remove();
  });
}
