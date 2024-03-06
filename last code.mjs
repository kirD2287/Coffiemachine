import {
    CoffieMachine,
    ThompsonMachine,
    GrundigMachine,
    PhillipsMachine,
    ReceptCoffie,
    RecepteAmericano,
    RecepteEspresso,
    RecepteDoubleEspresso
} from './coffiemachine class code.mjs'


const firstMachine = new ThompsonMachine()
const secondMachine = new GrundigMachine()
const thirdMachine = new PhillipsMachine()

firstMachine.selectElementMenu()