import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { battlePhases } from '../../constants/battleConstants';
import { CharacterAbilitiesSelect } from './CharacterAbilitiesSelect';
const checkInputIsInteger = (value) => {
  return parseInt(value) || value === '';
}

const CharacterStatsForm = observer(class CharacterStatsForm extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       hp: '',
       energy: '',
       wisdom: '',
       agility: '',
       formErrors: {}
     }
    }

    handleHPChange = (hp) => {
      console.log(hp);
      this.setState({ hp });
    }

    handleEnergyChange = (energy) => {
      if(checkInputIsInteger(energy)) {
        this.setState({ energy });
      }
    }
    handleWisdomChange = (wisdom) => {
      console.log(wisdom);
      this.setState({ wisdom });
    }
    validateEntries(formSubmissions) {
      const { hp, energy, wisdom, agility } = formSubmissions;
      return !isNaN(parseInt(hp)) && !isNaN(parseInt(energy)) && !isNaN(parseInt(wisdom));
    }
    render() {
      const { appStore } = this.props;
      return (
        <div>
          <Form onSubmit={(test, t, s) => {
            const { hp, energy, wisdom, agility } = this.state;
            const validatedEntries = this.validateEntries({ hp, energy, wisdom, agility});
            console.log('validatedEntries', validatedEntries);
            appStore.changeBattlePhase(battlePhases.BATTLE_MODE)
          }}>
            <Form.Field>
              <label>Current HP</label>
              <input
                placeholder='HP'
                value={this.state.hp}
                onChange={(event) => {this.handleHPChange(event.target.value)}}
                type='number'
              />
            </Form.Field>
            <Form.Field>
              <label>Current Energy</label>
              <input
                placeholder='Current Energy'
                value={this.state.energy}
                onChange={(event) => {
                  this.handleEnergyChange(event.target.value)
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Wisdom</label>
              <input
                placeholder='Wisdom'
                value={this.state.wisdom}
                onChange={(event) => {
                  this.handleWisdomChange(event.target.value)
                }}
              />
            </Form.Field>
            <CharacterAbilitiesSelect />
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      )
    }
});

export { CharacterStatsForm };
