class Timing {
  constructor(callback){
    this.startTime = 0
    this.times = []
    this.function = callback
  }

  runFunction = (inputLength, input) => {
    let start = performance.now()
    this.function(input)
    let end = performance.now()
    this.setTime(inputLength, start, end)
  }

  setTime = (iteration,start,end) => {
    this.times.push({input: iteration, time: (end - start) })
  }

  iterateFunction = (step, endPoint) => {
    for(let i = 0; i <= endPoint; i += step){
      var input = [...Array(i).keys()]
      input = this.shuffle(input)
      this.runFunction(i, input)
    }
  }

  shuffle = (array) => {
    if(this.function === sort){
      console.log("in the shuffle")
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }}
    return array
  }
}

const reverse = (input) => {
  input.reverse()
}

const sort = (input) => {
  input.sort()
}

const last = (input) => {
  input[input.length - 1]
}


const loop = (input) => {
  for(let i = 0; i < input; i++){
    console.log(i)
  }
}

const shuffle = (array) => {
  if(this.function === sort){
    console.log("in the shuffle")
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
  }}
}
