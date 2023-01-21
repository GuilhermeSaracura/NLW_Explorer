const form = document.querySelector("#forms-habits")
const nlwSetup = new NLWSetup(form)
const but = document.querySelector("header button")

but.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice("0,-5")
  let dayExist = nlwSetup.dayExists(today)
  if (dayExist) {
    alert("dia já incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
