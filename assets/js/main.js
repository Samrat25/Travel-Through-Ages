const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

function handleFormSubmit(event) {
    event.preventDefault();  // Prevent default form submission behavior

    // You can add your form processing logic here (e.g., sending data to a server)

    alert("Thank you for your message! We will get back to you soon.");

    // Redirect back to the homepage (index page)
    window.location.href = 'index.html';  // Make sure 'index.html' is the correct path to your homepage
}