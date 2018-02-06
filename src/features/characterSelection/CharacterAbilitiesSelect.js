import React from 'react';
import { observer } from 'mobx-react';
import { CharacterStatsForm } from './CharacterStatsForm';
const CharacterAbilitiesSelect = observer(({ appStore }) => {
    return (
      <div>
        <div>Select Abilities</div>
      </div>
    )
});

export { CharacterAbilitiesSelect };
