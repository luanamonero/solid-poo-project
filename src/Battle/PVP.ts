import Character from '../Character';
import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Character | Fighter,
  ) {
    super(_player1);
  }
}