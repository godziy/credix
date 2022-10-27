function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    if(input == "money credited but not received")
    return "your money will be refunded if stuck";
    else if(input == "app is stuck" || input == "app not working")
    return "try refresh or log in back";
    else if(input == "details incorrect")
    return "try contacting customer service";
    else if(input == "i want to delete my account")
    return "please go to the bottom right option on your home screen and give relevant details and click on close account button "
    else if(input == "i want to sort my passbook")
    return "option is on the bottom of homescreen next to interest"
    else if(input == "ok" || input == "thank you")
    return "thank you! do you have any more queries?"
    else if(input == "no")
    return "I am always there if you need any assistance"
    else 
    return "try contacting customer service";
}