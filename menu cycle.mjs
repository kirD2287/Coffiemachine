function selectElementMenu (numMenu) {
  if (numMenu <= 0 || numMenu == null || numMenu == undefined) {
    setInterval(() => console.log('Выберите пункт меню'), 1000)
  } else if (numMenu == 1) {
    return this.showCurrWatAndCoffAmount()
  } else if (numMenu == 2) {
    return this.makeAmericano()
  } else if (numMenu == 3) {
    return this.makeEspresso()
  } else if (numMenu == 4) {
    return this.makeDoubleEspresso()
  } else if (numMenu == 5) {
    return this.upvote()
  } else if (numMenu == 6) {
    return this.upvote1()
  } else if (numMenu == 7) {
    return this.getInformation()
  } else if (numMenu == 8) {
    return this.offMachine()
  }
}
