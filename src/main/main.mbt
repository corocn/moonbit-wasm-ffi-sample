fn js_math_random() -> Double = "Math" "random"

pub fn moonbit_random() -> Int {
  let x = js_math_random() * 100.0
  x.to_int()
}
