import {
    CoffieMachine,
    ThompsonMachine,
    GrundigMachine,
    PhillipsMachine,
    ReceptCoffie,
    RecepteAmericano,
    RecepteEspresso,
    RecepteDoubleEspresso
} from './coffie machine class.mjs'


const firstMachine = new ThompsonMachine()
const secondMachine = new GrundigMachine()
const thirdMachine = new PhillipsMachine()


firstMachine.makeEspresso()