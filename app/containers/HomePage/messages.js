/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Github App!',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Enter Github username @',
  },
  repositories: {
    id: `${scope}.repositories`,
    defaultMessage: 'List of Repositories',
  },
  organizations: {
    id: `${scope}.organizations`,
    defaultMessage: 'List of Organizations',
  },
});
