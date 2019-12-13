// alert("HI")

function sayHi(name){
  alert("Hi "+name)
}

// sayHi("Kat")

var firstname = "Ben"
// sayHi(firstname)

function sayHiForm(event){
  event.preventDefault()

  var name = document.getElementById("firstname").value
  alert("Hi "+name)

  var ele = document.getElementById("title")
  ele.innerText = "Hi "+name
  ele.style.background = "purple"

}