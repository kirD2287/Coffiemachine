class CoffieMachine {
    constructor(brand, waterСapacity, beanCapacity) {
        this.brand = brand 
        this.waterСapacity = waterСapacity,
        this.beanCapacity = beanCapacity,
        this.waterAmount =  this.waterСapacity
        this.beanAmount = this.beanCapacity
        
    }

    upvote () {
        this.waterAmount = this.waterСapacity
        console.log('Заливаем воду...')
        setTimeout(() => console.log('Бак для воды полный'), 20000)
        return                                                           // ЗАПОЛНИ БАК С ВОДОЙ
    }
    upvote1 () {
        this.beanAmount =  this.beanCapacity
        console.log('Заспыаем зерна...')
        setTimeout(() => console.log('Зёрна зысыпаны'), 10000)            // ЗАПОЛНИ БАК С КОФЕ
    }
   downvote () {
    this.waterAmount = 0
    console.log('Заполните бак')
   }
   downvote1 () {
    this.beanAmount =  this.beanCapacity
    console.log('Зёрен нет, попытайтесь не нервничать')
    
}
    showCurrWatAndCoffAmount () {
       console.log(`${this.waterAmount}  ${this.beanAmount}`) // ПОКАЗЫВАТЬ ТЕКУЩИЙ ОБЪЕМ ВОДЫ И КОФЕ

}  
    makeAmericano() {
    const recepteAmericano = new RecepteAmericano() // ПРИГОТОВЬ АМЕРИКАНО
    if (recepteAmericano.beans > this.beanAmount && recepteAmericano.water > this.waterAmount) {
        console.log('Недостаточно ингредиентов')
        return
    }
    console.log('Делается...')
    setTimeout(() => console.log('Готово'), 7000)
    return
}
    makeEspresso() {
    const recepteEspresso = new RecepteEspresso() // ПРИГОТОВЬ ЭСПРЕССО
    if (recepteEspresso.beans > this.beanAmount && recepteEspresso.water > this.waterAmount) {
        console.log('Недостаточно ингредиентов')
        return
    }
    console.log('Делается...')
    setTimeout(() => console.log('Готово'), 10000)
    return
}
    makeDoubleEspresso() {
    const recepteDoubleEspresso = new RecepteDoubleEspresso() // ПРИГОТОВЬ ДВОЙНОЙ ЭСПРЕССО
    if (recepteDoubleEspresso.beans > this.beanAmount && recepteDoubleEspresso.water > this.waterAmount) {
        console.log('Недостаточно ингредиентов')
        return
    }
    console.log('Делается...')
    setTimeout(() => console.log('Готово'), 5000)
    return
}
    getInformation () {                                                 // ВЫВОД ИНФОРМАЦИИ
    return {brand: this.brand,
        waterСapacity: this.waterСapacity,
        beanCapacity: this.beanCapacity,
        
    } 
}
    offMachine () {                                                    //  Выключи кофемашину
        console.log('Выключение')
        setTimeout(() => console.log('Выключено'), 1000)
        return
    }
}

  class ThompsonMachine extends CoffieMachine {
    constructor(){
         super('Thompson', 1200, 150)
    }
}

class GrundigMachine extends CoffieMachine {
    constructor(){
         super('Grundig', 1500, 160)
    }
}

class PhillipsMachine extends CoffieMachine {
    constructor(){
         super('Phillips', 1800, 275)
    }
}

class ReceptCoffie {
    constructor(beans, water) {
        this.beans = beans
        this.water = water
    }
   
}

 class RecepteAmericano extends ReceptCoffie {
    constructor(){
         super(30, 200)
    
    }
}

 class RecepteEspresso extends ReceptCoffie {
    constructor(){
         super(50, 300)
    
    } 
}

 class RecepteDoubleEspresso  extends ReceptCoffie {
    constructor(){
         super(70, 400)
         
    }
}

    export {
        CoffieMachine,
        ThompsonMachine,
        GrundigMachine,
        PhillipsMachine,
        ReceptCoffie,
        RecepteAmericano,
        RecepteEspresso,
        RecepteDoubleEspresso
    }