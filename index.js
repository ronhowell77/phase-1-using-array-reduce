const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumlator, item) => {
    let total = 0
    const batteries = () => {
        let totalBatteries = 0
        totalBatteries = item
        return total += totalBatteries
    }
        return accumlator += total
}
let totalBatteries = batteryBatches.reduce(reducer, 31)