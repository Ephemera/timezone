test('.tz()', function() {
  expect(7); 

  var now = new Date();
  var min = now.getMinutes();
  var copiedNow = new Date(now.getTime());

  copiedNow.setHours(now.getHours() - 8);
  copiedNow.setMinutes(min);
  equal(now.tz('PST')[0].split('T')[1], copiedNow.toISOString().split('T')[1], 'PST');

  copiedNow.setHours(now.getHours() - 4);
  copiedNow.setMinutes(min - 30);
  equal(now.tz('VET')[0].split('T')[1], copiedNow.toISOString().split('T')[1], 'VET');

  copiedNow.setHours(now.getHours() + 5);
  copiedNow.setMinutes(min + 30);
  equal(now.tz('asia/calcUtta')[0].split('T')[1], copiedNow.toISOString().split('T')[1], 'Asia/Calcutta');

  equal(now.tz('AST').length, 2);
  copiedNow.setHours(now.getHours() + 3);
  copiedNow.setMinutes(min);
  equal(now.tz('AST')[0].split('T')[1].split('(')[0], copiedNow.toISOString().split('T')[1], 'AST');
  copiedNow.setHours(now.getHours() - 4);
  copiedNow.setMinutes(min);
  equal(now.tz('AST')[1].split('T')[1].split('(')[0], copiedNow.toISOString().split('T')[1], 'AST');


  copiedNow.setHours(now.getHours());
  copiedNow.setMinutes(min);
  equal(now.tz('UTC')[0].split('T')[1], copiedNow.toISOString().split('T')[1], 'UTC');
});
