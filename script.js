function getRandomJokes() {
    const yoMamaJokes = [
        "Yo mama so fat, when she skips a meal, the stock market drops!",
        "Yo mama so old, her social security number is 1!",
        "Yo mama so ugly, she made a happy meal cry!",
        "Yo mama so dumb, she tried to put M&Ms in alphabetical order!",
        "Yo mama so short, you can see her feet on her driver’s license!"
    ];
    
    const knockKnockJokes = [
        "Knock knock.\nWho's there?\nOlive.\nOlive who?\nOlive you and I miss you!",
        "Knock knock.\nWho's there?\nTank.\nTank who?\nYou’re welcome!",
        "Knock knock.\nWho's there?\nLettuce.\nLettuce who?\nLettuce in, it's freezing out here!",
        "Knock knock.\nWho's there?\nBoo.\nBoo who?\nDon’t cry, it’s just a joke!",
        "Knock knock.\nWho's there?\nCow says.\nCow says who?\nNo silly, cow says moo!"
    ];
    
    const otherJokes = [
        "Why don't skeletons fight each other? They don't have the guts!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Why don’t eggs tell jokes? Because they might crack up!"
    ];
    
    const jokeCategories = [yoMamaJokes, knockKnockJokes, otherJokes];
    let selectedJokes = new Set();
    
    while (selectedJokes.size < Math.floor(Math.random() * 2) + 4) { // Ensures 4 or 5 jokes
        let category = jokeCategories[Math.floor(Math.random() * jokeCategories.length)];
        let joke = category[Math.floor(Math.random() * category.length)];
        selectedJokes.add(joke);
    }
    
    return [...selectedJokes].join('\n\n');
}

console.log(getRandomJokes());