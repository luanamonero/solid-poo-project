import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.racesInstances += 1;
  }

  static createdRacesInstances(): number { return this.racesInstances; }
}