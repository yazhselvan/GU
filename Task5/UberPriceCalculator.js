class UberPricingCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1; 
    }
  
    calculatePrice(distance, duration) {
      const totalFare = this.baseFare +
        (distance * this.costPerKilometer) +
        (duration * this.costPerMinute);
  
      return totalFare * this.surgeMultiplier;
    }
  }
  
  
  const uberCalculator = new UberPricingCalculator(5, 1.5, 0.2, 1.2); 
  const distanceInKm = 10;
  const durationInMinutes = 15;
  const estimatedPrice = uberCalculator.calculatePrice(distanceInKm, durationInMinutes);
  
  console.log(`Estimated Uber price: $${estimatedPrice.toFixed(2)}`);
  