import * as notifications from '../notifications.json';
import { schema, normalize } from 'normalizr';

// Define the schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the data
export const normalizedData = normalize(notifications.default, [notification]);

