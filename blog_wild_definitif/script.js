/* click sur le livre 2 avec ouverture prompt */
const livre2 = document.querySelector("#livre2")

livre2.addEventListener("mouseover", function () {
  this.style.backgroundColor = "pink"
  })

  livre2.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white"
    })

livre2.addEventListener("click", function () {
  const messageAlert = alert("Livre interdit au moins de 18 ans") })

livre2.addEventListener("click", function verifAge() {
  let age = prompt("Si vous désirez le lire, merci d'indiquer votre âge ?");
  /*typeoff pour vérifier que la saisie est un nombre */
  if (age >= 18 && age < 100) {
    document.location.href = "article-106.html"
  } else if (age > 100) {
    alert("Vous êtes la personne la plus agée au monde")
  } else {
    alert("Vous êtes trop jeune pour lire ce livre")
  }
})
