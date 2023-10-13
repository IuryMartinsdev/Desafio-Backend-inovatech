function bhaskara() {
    const delta = b**2 - 4*a*c
    const x1 = (-b + Math.sqrt(delta))/(2*a)
    const x2 = (-b - Math.sqrt(delta))/(2*a)
    console.log(`Delta = ${delta} x1 = ${x1.toFixed(2)} x2 = ${x2.toFixed(2)}`)
}

a = 2
b = 4
c = -12
bhaskara(a, b, c)
  