import { normalizedData } from './notifications';

export function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  for (const key in normalizedData.entities.notifications) {
    if (normalizedData.entities.notifications[key].author === userId) {
      userNotifications.push(normalizedData.entities.notifications[key]);
    }
  }
  return userNotifications;
}

