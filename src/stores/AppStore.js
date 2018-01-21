import { extendObservable, action } from 'mobx';
import { monstersData } from '../data/monsters';
import { battlePhases } from '../constants/battleConstants';
import _ from 'lodash';

function AppStore() {
  extendObservable(this, {
    battlePhase: battlePhases.MONSTER_SELECT,
    selectedMonsterName: null,
    allMonsters: monstersData,
    get allMonstersHash() {
      return _.keyBy(this.allMonsters, 'monsterName');
    },

    get currentMonsterData() {
      return this.allMonstersHash[this.selectedMonsterName];
    },
    selectMonster: action((monster) => {
      this.selectedMonsterName = monster
    }),
    changeBattlePhase: action((phase) => {
      this.battlePhase = phase;
    })
  })
}

export { AppStore };
