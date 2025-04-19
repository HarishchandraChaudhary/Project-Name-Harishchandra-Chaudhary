function generateOddSeries(a) {
    let series = [];
    
    let limit = (a % 2 === 0) ? a - 1 : a;
    
    for (let i = 1; i <= limit; i += 2) {
      series.push(i);
    }
    
    console.log(series.join(', '));
    alert(series.join(', '));
  }
  
  const input = parseInt(prompt("Enter a number:"), 10);
  
  generateOddSeries(input);
  