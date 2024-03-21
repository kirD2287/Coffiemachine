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

const Thompson = new ThompsonMachine()
const Grundig = new GrundigMachine()
const Phillips = new PhillipsMachine()

Thompson.makeAmericano()
