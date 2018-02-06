import React from 'react';
import { observer } from 'mobx-react';
import { CharacterStatsForm } from './CharacterStatsForm';
import { CharacterAbilitiesSelect } from './CharacterAbilitiesSelect';
const CharacterSelectionContainer = observer(({ appStore }) => {
    return (
      <div>
        <CharacterStatsForm appStore={appStore} />
      </div>
    )
});

export { CharacterSelectionContainer };
