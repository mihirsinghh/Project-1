const subscribedMessage = () => {
    const nameInput = document.getElementById("name-input"); //obtain reference to specific <input> element
    const emailInput = document.getElementById("email-input"); //obtain reference to specific <input> element
    const subscribeButton = document.getElementById("subscribe-button"); //obtain reference to specific <button>

    subscribeButton.addEventListener("click", (event) => {
        if (emailInput.value != "") {
            subscribeButton.textContent = "Subscribed!";
            nameInput.value = "";
            emailInput.value = "";
        }
    })
};


document.addEventListener("DOMContentLoaded", (event) => {
    subscribedMessage();
});
