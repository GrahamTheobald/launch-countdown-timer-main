const TIMES = {
  seconds: [1000, 'minutes'],
  minutes: [1000 * 60, 'hours'],
  hours: [1000 * 60 * 60, 'days'],
  days: [1000 * 60 * 60 * 24, 'one'],
  one: [Infinity]
}

const date = new Date(2023, 0, 18)
const formatter = new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2})

const elements = document.querySelectorAll("[data-time]")

function updateElements() {
  const miliSeconds = date - new Date()
  elements.forEach(el => {
    const div = el.querySelector("p")
    const timeFrame = el.dataset.time
    const time = TIMES[timeFrame]
    const mod = TIMES[time[1]][0]
    const next = formatter.format(Math.floor(miliSeconds  % mod / time[0]))
    if (next != div.innerText) {
      el.classList.add('animate')
      setTimeout(() => {
        div.innerText = next
      }, 500)
    }
    else {
      el.classList.remove('animate')
    }
  })
}

updateElements()

setInterval(() => updateElements(), 1000)