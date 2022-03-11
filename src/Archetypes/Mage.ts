import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static numberOfInstances = 0;
  readonly energy: EnergyType;
  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}