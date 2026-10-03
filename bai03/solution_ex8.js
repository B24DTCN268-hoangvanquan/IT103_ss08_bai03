const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

const indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

const indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

let availableCount = 0;
let maxPowerKw = -1;
let bestPortId = '';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
        if (portPowersKw[i] > maxPowerKw) {
            maxPowerKw = portPowersKw[i];
            bestPortId = portIds[i];
        }
    }
}

console.log('=== BÁO CÁO TRẠM SẠC VINFAST ===');
console.log('Danh sách trạng thái các trụ sạc:');
for (let i = 0; i < portIds.length; i++) {
    console.log(`- Trụ ${portIds[i]}: ${portStatuses[i]} (${portPowersKw[i]} kW)`);
}

console.log('--------------------------------');
console.log(`Tổng số trụ đang sẵn sàng (AVAILABLE): ${availableCount}`);
if (bestPortId !== '') {
    console.log(`Trụ sẵn sàng có công suất lớn nhất: Trụ ${bestPortId} (${maxPowerKw} kW)`);
} else {
    console.log('Hiện không có trụ nào ở trạng thái AVAILABLE.');
}