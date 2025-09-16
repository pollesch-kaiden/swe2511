// Class: SWE2511 - Coin Flipper
// Name: Kaiden Pollesch
// Class Section: 111

/**
 * run - Coin flipper entry point
 *       NOTE: Feel free to change this to use a JavaScript class if desired
 */
class CoinFlipper {
    constructor(coins, flips) {
        this.coins = coins;
        this.flips = flips;
        this.frequency = new Array(coins + 1).fill(0);
    }

    run() {
        console.clear()

        if (!this.validateInput(this.coins, 1, 10) || !this.validateInput(this.flips, 1, 1000000)) {
            console.error('Invalid input Please enter the correct number of coins [1-10] and flips [1-1,000,000].');
        }
        const startTime = performance.now();
        this.flipCoins();
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        this.printHistogram();

        console.log(`Coin Flipper Time: ${elapsedTime} ms`);
    }

    validateInput(value, min, max) {
        try {
            return Number.isInteger(value) && value >= min && value <= max;
        } catch (e) {
            console.error(e);
        }
    }

    flipCoins() {
        for (let rep = 0; rep < this.flips; rep++) {
            const heads = this.flipCoinsOneTime();
            this.frequency[heads]++;
        }
    }

    flipCoinsOneTime() {
        let heads = 0;
        for (let i = 0; i < this.coins; i++) {
            heads += Math.random() < 0.5 ? 1 : 0;
        }
        return heads;
    }

    printHistogram() {
        console.log(`Number of times each head count occurred in ${this.flips} flips of ${this.coins} coins: `);
        for (let heads = 0; heads < this.frequency.length; heads++) {
            const fractionOfReps = this.frequency[heads] / this.flips;
            const numOfAsterisks = Math.round(fractionOfReps * 100);
            const stars = "*".repeat(numOfAsterisks);
            console.log(` ${heads} ${this.frequency[heads]} ${stars}`);
        }
    }
}

const coins = parseInt(prompt("Enter the number of coins to be flipped (1-10)"))
const flips = parseInt(prompt("Enter the number of flips (1-1000000)"))
const coinFlipper = new CoinFlipper(coins, flips);

// Run the coin flipper code when the browser finishes loading the js file
coinFlipper.run();