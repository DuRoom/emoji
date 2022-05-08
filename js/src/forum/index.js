import app from 'duroom/forum/app';

import addComposerAutocomplete from './addComposerAutocomplete';
import renderEmoji from './renderEmoji';

app.initializers.add('duroom-emoji', () => {
  // After typing ':' in the composer, show a dropdown suggesting a bunch of
  // emoji that the user could use.
  addComposerAutocomplete();

  // render emoji as image in Posts content and title.
  renderEmoji();
});
