var consoleFinishTrigger = "Sending client info"

function log() {
  var args = Array.prototype.slice.call(arguments, 0)
  var el = document.getElementById('console-log')
  console.log(el.scrollHeight)
  if (args.length) {
    for (i = 0; i < args.length; i++) {
      el.innerHTML = el.innerHTML + `<div>${args[i]}</div>`
    }
  } else throw new Error("The message can't be empty for log!!!")

  var container = document.getElementById('console-container')
  container.scrollTop = container.scrollHeight
}

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language )
{
  log(
    `[Details]: Server Name: ${servername}`,
    `[Details]: Map Name: ${mapname}`,
    `[Details]: Gamemode: ${gamemode}`,
    `[Details]: Max Players: ${maxplayers}`,
  )
  document.getElementById('server-name').innerHTML = servername
}

function SetFilesTotal(total)
{
  log(`[Misc]: Set file total to ${total}`)
}

function DownloadingFile(filename)
{
  log(`[Download]: ${filename}`)
}

function SetStatusChanged(status)
{
  log(`[Status]: ${status}`)

  if (status.includes(consoleFinishTrigger)) {
    document.getElementById('console-container').style.backgroundColor = "rgba(1,206,243, 0.5)";
  }
}

function SetFilesNeeded(needed)
{
  log(`[Misc]: Set files needed to ${needed}`)
}

var totalNumOfImages = 5
var showImage = 1

// create the images

window.addEventListener("DOMContentLoaded", e => {
  for (i = 1; i <= totalNumOfImages; i++) {
    var newDiv = document.createElement("div")
    newDiv.classList.add('bg-image', i === totalNumOfImages ? null : 'hidden')
    newDiv.id = "bg-image" + i
    newDiv.style.backgroundImage = `url('images/${i}.jpg')`;

    document.body.insertBefore(newDiv, document.body.firstElementChild)
  }

  window.setInterval(() => {
    var activeBg = document.getElementById(`bg-image${showImage}`)
    var oldBg = Array.prototype.filter.call(document.getElementsByClassName('bg-image'), e => {
      return !e.className.includes('hidden')
    })[0]

    activeBg.classList.remove('hidden')
    if (oldBg) oldBg.classList.add('hidden')

    showImage++
  }, 18000)
})