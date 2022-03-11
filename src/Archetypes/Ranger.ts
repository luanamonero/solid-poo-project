import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static numberOfInstances = 0;
  readonly energy: EnergyType;
  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}