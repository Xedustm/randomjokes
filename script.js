function getRandomJokes() {
    const yoMamaJokes = [
        "Yo mama so fat, when she skips a meal, the stock market drops!",
        "Yo mama so old, her social security number is 1!",
        "Yo mama so ugly, she made a happy meal cry!",
        "Yo mama so dumb, she tried to put M&Ms in alphabetical order!",
        "Yo mama so fat, when she sat on an iPhone, it turned into an iPad!"
    ];
    
    const knockKnockJokes = [
        "Knock knock.\nWho's there?\nOlive.\nOlive who?\nOlive you and I miss you!",
        "Knock knock.\nWho's there?\nTank.\nTank who?\nYou’re welcome!",
        "Knock knock.\nWho's there?\nLettuce.\nLettuce who?\nLettuce in, it's freezing out here!",
        "Knock knock.\nWho's there?\nBoo.\nBoo who?\nDon’t cry, it’s just a joke!",
        "Knock knock.\nWho's there?\nBanana.\nBanana who?\nBanana split, so ice creamed and ran away!"
    ];
    
    const otherJokes = [
        "Why don't skeletons fight each other? They don't have the guts!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Did you know that octopuses have three hearts? Two pump blood to the gills, while one pumps it to the rest of the body. It's wild to think about!!"
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