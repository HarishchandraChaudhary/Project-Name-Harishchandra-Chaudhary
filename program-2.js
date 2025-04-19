function generateOddSeries(count) {
    let series = [];
    for (let i = 0; i < count; i++) {
      series.push(2 * i + 1);
    }
    console.log(series.join(', '));
    alert(series.join(', '));
  }
  const input = parseInt(prompt("Enter a number:"), 10);
  generateOddSeries(input);
  