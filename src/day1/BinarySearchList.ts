export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    let index = Math.floor(lo + (hi - lo)/2)
    let value = haystack[index]
    if (value == needle) return true
    if (value > needle) {
      hi = index
    } else {
      lo = index + 1
    }
  } while (lo < hi);

  return false;
}


// [ lo(0) 1, 3, 5, 7, 8, 9, 12, 56, 104, 106, hi(10) 107 ] // 11 items
// lo = 0
// hi = 10
// needle 107

// -
// index = floor(0 + (10 - 0)/2) = 5
// value = 9
// 9 == 107 -> false
// 9 > 107 -> false
// lo = 6
// hi = 10
// [ 1, 3, 5, 7, 8, 9, lo(6) 12, 56, 104, 106, hi(10) 107 ]
// -
// index = floor(6 + (10 - 6)/2) = 8
// value = 104
// 104 == 107 -> false
// 104 > 107 -> false
// lo = 9
// hi = 10
// [ 1, 3, 5, 7, 8, 9, 12, 56, 104, lo(9) 106, hi(10) 107 ]
// -
// index = floor(9 + (10 - 9)/2) = floor(9.5) = 9
// value = 106
// 106 == 107 -> false
// 106 > 107 -> false
// lo = 10
// [ 1, 3, 5, 7, 8, 9, 12, 56, 104, 106, lo(10) hi(10) 107 ]
// -
// index = floor(7 + (9 - 7)/2) = floor(7 + 1) = floor(8) = 8
// value = 104
// 104 == 104 -> true
