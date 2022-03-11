import { EnergyType } from '../Energy';

export default abstract class Archetype {
  static numberOfIntances = 0;
  readonly special: number;
  readonly cost: number;

  constructor(
    readonly name: string, 
  ) {
    Archetype.numberOfIntances += 1;
    this.special = 0;
    this.cost = 0;
  }

  static createdArchetypeInstances(): number { return this.numberOfIntances; }

  abstract get energyType(): EnergyType;
} 