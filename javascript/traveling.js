const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const [N, ...temp] = input.split('\n')

//空行を捨てます。
temp.pop()

const plans = temp.map((line) => {
  const args = line.split(' ').map((v) => parseInt(v, 10))
  return {
    t: args[0],
    x: args[1],
    y: args[2],
  }
})

const start = { t: 0, x: 0, y: 0 }

//実現不可能な予定が無いかチェックします。
for (const [index, plan] of plans.entries()) {
  const prev = index == 0 ? start : plans[index - 1]
  const time = plan.t - prev.t
  const distance = Math.abs(plan.x - prev.x) + Math.abs(plan.y - prev.y)

  //近すぎる場合の余る時間です。2の倍数なら寄り道で潰せます。
  const def = time - distance

  if (distance > time || def & 1) {
    //目的地が遠すぎるか、寄り道で時間を潰せない場合です。
    console.log('No')
    return
  }
}

console.log('Yes')
