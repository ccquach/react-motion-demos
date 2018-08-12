// Source: http://jsfiddle.net/ThiefMaster/LPh33/4/

export function distributeFields(arr) {
  const radius = 10;
  const step = (2 * Math.PI) / arr.length;
  const container = 30;
  const icon = 4;
  let angle = 0;

  return arr.map(item => {
    let x = Math.round(container / 2 + radius * Math.cos(angle) - icon / 2);
    let y = Math.round(container / 2 + radius * Math.sin(angle) - icon / 2);
    angle += step;
    return {
      ...item,
      style: { x, y }
    };
  });
}
