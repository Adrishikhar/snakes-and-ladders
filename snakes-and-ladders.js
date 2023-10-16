const start = () => {

    // game constants
    const snakes = {
        // First Element --> Mouth
        // Second Element --> Tail
        28:10,
        37:3,
        48:16,
        75:32,
        88:61,
        //The real dangerous one 👇 (Always caught hold of me)
        99:19
    }
    const ladders = {
        // First Element --> Bottom
        // Second Element --> Top
        4:56,
        12:50,
        14:55,
        22:58,
        41:79,
        54:89,
    }
    const playerName = 'Astik Astik Astik'
    // You always repeat the name of the sage Astik thrice in the North-east when dealing with serpents
    // https://en.wikipedia.org/wiki/Astika_(sage)

    // game variables
    let gameOver = false
    let position = 0
    let movesTaken = 0


    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 7);
    }

    function rollToBegin (number) {
        const validNumbers = [0, 6];
        if (validNumbers.includes(number)) {
            position = 1
            console.log(`${number}! You can start!`);
        } else {
            console.log(`${number} 😥... You cannot start yet!`);
        }
    }

    function snakeSlideLadderClimb() {

        const climbedLadder = Object.keys(ladders).includes(position.toString())
        const bittenBySnake = Object.keys(snakes).includes(position.toString())

        if (climbedLadder) {
            console.log(`Climbed 🪜 at ${position} to ${ladders[position]}`)
            position = ladders[position]
        }
        else if (bittenBySnake) {
            console.log(`Slid down 🐍 from ${position} to ${snakes[position]}`)
            position = snakes[position]
        }
        else {
            console.log(`${position}`)
        }
    }

    function updatePosition(numberRolled) {

        // updates the position
        if (position + numberRolled > 100) {
            console.log(`Stuck near the end at ${position}...`)
        }
        else {
            position += numberRolled
        }

        //checks if player has won
        if (position === 100) {
            gameOver = true
            console.log(`Reached the 100 mark! You have won!`)
            console.log(`\nCongratulations ${playerName}! \nTotal moves taken : ${movesTaken}`)
            return
        }

        //implements ladders and snakes
        snakeSlideLadderClimb()
    }

    function rollDie() {
        let numberRolled = generateRandomNumber()

        if (position > 0) {
            updatePosition(numberRolled)

        } else {
            rollToBegin(numberRolled)
        }
    }

    while (!gameOver) {
        movesTaken++
        rollDie()
    }
}

start()