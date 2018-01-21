import { observable, computed } from 'mobx';
import { monstersData } from '../data/monsters';
import { battlePhases } from '../constants/battleConstants';
import _ from 'lodash';

class AppStore {
  @observable battlePhase = battlePhases.MONSTER_SELECT
  @observable selectedMonsterName = null;
  @observable allMonsters = monstersData;

  @computed get allMonstersHash() {
    return _.keyBy(this.allMonsters, 'monsterName');
  }

  @computed get currentMonsterData() {
    return this.allMonstersHash[this.selectedMonsterName];
  }

  selectMonster(monster) {
    this.selectedMonsterName = monster;
  }

  changeBattlePhase(phase) {
    this.battlePhase = phase;
  }
}

export { AppStore };
