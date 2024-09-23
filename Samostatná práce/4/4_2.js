// Define initial settings for volume and brightness
let settings = {
  volume: 70,
  brightness: 50
};

// Adjust the brightness to the specified level and return new settings
function adjustBrightness(currentSettings, level) {
  const newSettings = { ...currentSettings, brightness: level };
  console.log("Brightness set to: " + newSettings.brightness);
  return newSettings;
}

// Change brightness to 80 as requested by the user or system
settings = adjustBrightness(settings, 80);