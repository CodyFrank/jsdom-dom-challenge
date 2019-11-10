document.addEventListener("DOMContentLoaded", function() {

  const counter = document.getElementById('counter')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const heart = document.getElementById('heart')
  const pause = document.getElementById('pause')
  const form = document.querySelector('form')
  const commentBox = document.getElementById('comment-input')
  let timer = setInterval(function(){ addTime() }, 1000)
  let running = true
  let likedNumbers = []

  pause.addEventListener('click', function(){
    if(running === true){
      running = false
      clearInterval(timer)
      pause.innerText = "resume"
    }else{
      running = true
      timer = setInterval(function(){ addTime() }, 1000)
      pause.innerText = "pause"
    }
  })

  function addTime(){
      counter.innerText = parseInt(counter.innerText) + 1
  }

  function removeTime(){
      counter.innerText = parseInt(counter.innerText) - 1
  }

  function getOccurrence(arr, value) {
    let count = 0
    arr.forEach((v) => (v === value && count++))
    return count
}

  function like(number){
      const ul = document.querySelector('ul.likes')
      const newLike = document.createElement('li')
      if (!likedNumbers.includes(number)){
        let i = 1
        newLike.innerText = `${number} has been liked ${1} times`
        ul.appendChild(newLike)
      }else{
          let i = getOccurrence(likedNumbers, number)
          document.querySelector('.likes li:last-child').innerText = `${number} has been liked ${i} times`
      }
      likedNumbers.push(number)
  }

  plus.addEventListener('click', function(){
    if(running === true){
      addTime()
    }
  })

  minus.addEventListener('click', function(){
    if(running === true){
      removeTime()
    }
  })

  heart.addEventListener('click', function(){
    if(running === true){
      like(counter.innerText)
    }
  })

  form.addEventListener('submit', function(e){
    e.preventDefault()
    if(running === true){
      let commentsDiv = document.querySelector('div.comments')
      let comment = document.createElement('p')
      comment.innerText = `${commentBox.value}`
      commentsDiv.appendChild(comment)
      commentBox.value = ""
    }
  })
})

