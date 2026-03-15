export function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export function generateCard(songs) {
    const shuffledB = shuffle(songs.B);
    const shuffledI = shuffle(songs.I);
    const shuffledN = shuffle(songs.N);
    const shuffledG = shuffle(songs.G);
    const shuffledO = shuffle(songs.O);

    const B = shuffledB.slice(0, 5);
    const I = shuffledI.slice(0, 5);
    const N = [
        shuffledN[0],
        shuffledN[1],
        "FREE",
        shuffledN[2],
        shuffledN[3],
    ];
    const G = shuffledG.slice(0, 5);
    const O = shuffledO.slice(0, 5);

    const bingoCard = {
        B: B,
        I: I,
        N: N,
        G: G,
        O: O
    }

    return bingoCard
}

export function generateCards(songs, count) {
    const cards = []
    const seen = new Set()

    while (cards.length < count) {
        const card = generateCard(songs, cards.length)
        const signature = JSON.stringify(card)

        if(!seen.has(signature)) {
            seen.add(signature)
            cards.push(card)
        }
    };

    return cards;
}

export function buildGrid(card) {
    return [
        [card.B[0], card.I[0], card.N[0], card.G[0], card.O[0]],
        [card.B[1], card.I[1], card.N[1], card.G[1], card.O[1]],
        [card.B[2], card.I[2], "FREE", card.G[2], card.O[2]],
        [card.B[3], card.I[3], card.N[3], card.G[3], card.O[3]],
        [card.B[4], card.I[4], card.N[4], card.G[4], card.O[4]],
    ]
}