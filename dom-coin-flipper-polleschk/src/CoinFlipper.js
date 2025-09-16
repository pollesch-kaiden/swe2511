// Class: SWE2511 - Coin Flipper DOM
// Name: Kaiden Pollesch
// Class Section: 111

window.onload = () => {
    const histogramContainer = document.getElementById('histogram');


    function flipCoins(numCoins, numFlips) {
        let results = new Array(numCoins + 1).fill(0)

        for (let i = 0; i < numFlips; i++) {
            let heads = 0
            for (let j = 0; j < numCoins; j++) {
                if (Math.random() < 0.5) {
                    heads++;
                }
            }
            results[heads]++;
        }
        return results;
    }

    function createHistogram(results) {
        histogramContainer.innerHTML = "";

        const maxCount = Math.max(...results);

        results.forEach((count, heads) => {
            const row = document.createElement("div");
            row.className = "histogram-row";

            const label = document.createElement("span");
            label.className = "histogram-label";
            label.textContent = `${heads}`;

            const progress = document.createElement("progress");
            progress.className = "histogram-progress";
            progress.value = count;
            progress.max = maxCount;

            const countLabel = document.createElement("span");
            countLabel.className = "histogram-count";
            countLabel.textContent = `${count}`;

            row.appendChild(label);
            row.appendChild(countLabel);
            row.appendChild(progress);

            histogramContainer.appendChild(row);
        })
    }


    function validateInput() {
        let isValid = true;

        document.getElementById("numCoinsError").textContent = "";
        document.getElementById("numFlipsError").textContent = "";

        const numCoins = document.getElementById("numCoins").value;
        const numFlips = document.getElementById("numFlips").value;

        if (!numCoins) {
            document.getElementById("numCoinsError").textContent = `Input value '${numCoins}' is not valid. No input given`;
            isValid = false;
            histogramContainer.innerHTML = "";
        } else if (isNaN(numCoins) || numCoins % 1 !== 0) {
            document.getElementById("numCoinsError").textContent = `Input value '${numCoins}' is not valid. Must be an integer`;
            isValid = false;
            histogramContainer.innerHTML = "";
        } else if (numCoins < 1 || numCoins > 10) {
            document.getElementById("numCoinsError").textContent = `Input value '${numCoins}' is not valid. Must be between 1 - 10.`;
            isValid = false;
            histogramContainer.innerHTML = "";
        }

        if (!numFlips) {
            document.getElementById("numFlipsError").textContent = `Input value '${numFlips}' is not valid. No input given`;
            isValid = false;
            histogramContainer.innerHTML = "";
        } else if (isNaN(numFlips) || numFlips % 1 !== 0) {
            document.getElementById("numFlipsError").textContent = `Input value '${numFlips}' is not valid. Must be an integer`;
            isValid = false;
            histogramContainer.innerHTML = "";
        } else if (numFlips < 1 || numFlips > 1000000) {
            document.getElementById("numFlipsError").textContent = `Input value '${numFlips}' is not valid. Must be between 1 - 1,000,000.`;
            isValid = false;
            histogramContainer.innerHTML = "";
        }
        return isValid;
    }

    function handleCoinFlip() {
        const numCoins = parseInt(document.getElementById("numCoins").value);
        const numFlips = parseInt(document.getElementById("numFlips").value);

        const inputsAreValid = validateInput();

        if (inputsAreValid) {
            const startTime = performance.now();

            const results = flipCoins(numCoins, numFlips);

            const endTime = performance.now();
            const elapsedTime = endTime - startTime;

            createHistogram(results);

            const timeDisplay = document.getElementById('time')
            timeDisplay.textContent = `Elapsed Time: ${elapsedTime.toFixed(3)}ms`;
        } else {
            document.getElementById('histogram').innerHTML = "";
            document.getElementById('time').textContent = "";
        }
    }

    document.querySelector("button").addEventListener("click", handleCoinFlip);
}
