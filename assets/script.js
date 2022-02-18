const allStatistic = Array.from(document.querySelectorAll('h3'));
allStatistic.forEach((statistic) => {
    const totalValue = +statistic.innerText.split('K')[0];
    let n = 0;

    if (totalValue <= 25) {
        const addValueLow = setInterval(() => {
            n += .1;
            statistic.innerText = `${(n * 10).toFixed(0)}`
            if (n >= totalValue) {
                clearInterval(addValueLow);
                statistic.innerText = `${totalValue}K`
            }
        }, 100);
    }
    else {
        const addValueFast = setInterval(() => {
            statistic.innerText = `${n += 13}K`
            if (n >= totalValue) {
                clearInterval(addValueFast);
                statistic.innerText = `${totalValue}K`
            }
        }, 50);
    }
})