export const generatePastelColor = (seed: string) => {
  // Use the seed string to generate a consistent hash
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate HSL values for pastel colors
  const hue = hash % 360;
  const saturation = 70; // Keeping saturation moderate
  const lightness = 60; // Keeping lightness moderate for visibility

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
