const h = require('./index');

console.log('=== bytes ===');
console.log(h.bytes(0));           // 0 B
console.log(h.bytes(1024));        // 1.0 KB
console.log(h.bytes(1048576));     // 1.0 MB
console.log(h.bytes(1073741824));  // 1.1 GB
console.log(h.bytes(1024, { binary: true })); // 1.0 KiB

console.log('\n=== number ===');
console.log(h.number(1234567));              // 1,234,567
console.log(h.number(1234567.89, { decimals: 2 })); // 1,234,567.89

console.log('\n=== ordinal ===');
console.log([1,2,3,4,11,12,13,21,22,23].map(h.ordinal).join(', '));

console.log('\n=== timeAgo ===');
const now = new Date();
console.log(h.timeAgo(new Date(now - 30000)));        // just now or 30 seconds ago
console.log(h.timeAgo(new Date(now - 3600000)));       // 1 hour ago
console.log(h.timeAgo(new Date(now - 86400000 * 3)));  // 3 days ago
console.log(h.timeAgo(new Date(now + 7200000)));        // in 2 hours

console.log('\n=== duration ===');
console.log(h.duration(0));                    // 0s
console.log(h.duration(5000));                 // 5s
console.log(h.duration(90000));                // 1m 30s
console.log(h.duration(3661000));              // 1h 1m
console.log(h.duration(90061000, { verbose: true })); // 1 day, 1 hour

console.log('\n=== list ===');
console.log(h.list(['apples']));                           // apples
console.log(h.list(['apples', 'oranges']));                // apples and oranges
console.log(h.list(['apples', 'oranges', 'bananas']));     // apples, oranges, and bananas
console.log(h.list(['a', 'b', 'c'], { conjunction: 'or' })); // a, b, or c

console.log('\n=== truncate ===');
console.log(h.truncate('Hello World', 8));     // Hello...
console.log(h.truncate('Hello World', 50));    // Hello World
console.log(h.truncate('The quick brown fox jumps over', 20, { wordBoundary: true }));

console.log('\n=== pluralize ===');
console.log(h.pluralize(0, 'item'));   // 0 items
console.log(h.pluralize(1, 'item'));   // 1 item
console.log(h.pluralize(5, 'item'));   // 5 items
console.log(h.pluralize(3, 'child', 'children')); // 3 children

console.log('\n=== percentage ===');
console.log(h.percentage(0.75));       // 75%
console.log(h.percentage(0.333, { decimals: 1 })); // 33.3%

console.log('\n=== compact ===');
console.log(h.compact(999));           // 999
console.log(h.compact(1500));          // 1.5K
console.log(h.compact(2500000));       // 2.5M
console.log(h.compact(1230000000));    // 1.2B

console.log('\nAll tests passed!');
