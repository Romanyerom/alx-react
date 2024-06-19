// schema/notifications.js

import * as notificationsData from '../notifications.json';

/**
 * Get all notifications by user ID
 * @param {string} userId - The user ID
 * @returns {Array} List of notification objects for the specified user
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author === userId);
}

