// src/components/layout/footer/utils.ts
export const availabilityTimes = {
  workHours: {
    start: 9, // 9 AM
    end: 17, // 5 PM
  },
  timezone: 'WAT',
  availableStatus: 'Open to collaborations',
  busyStatus: 'Currently focused on ongoing projects',
};

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const isAvailable = () => {
  const hour = new Date().getHours();
  return hour >= availabilityTimes.workHours.start && hour < availabilityTimes.workHours.end;
};
