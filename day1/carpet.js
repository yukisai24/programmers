function solution(brown, yellow) {
    var answer = [];
    let x
    let y
    // x*y=brown+yellow
    // 2x+2y-4=brown
    // (x-2)(y-2)=yellow
    // x= brown+4-2y/2
    x= 1+brown/4+1/4*(brown**2-8*brown-16*yellow+16)**1/2
    y= 1+brown/4-1/4*(brown**2-8*brown-16*yellow+16)**1/2
    return [x,y];
}
