function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}

colabClicker = setInterval(ConnectButton, 60000);

// by assigning setInterval return to variable you can easily stop clicker anytime
// clearInterval(colabClicker)