document.addEventListener("DOMContentLoaded", () => {
  const bouttButton = document.createElement("button");
  const orgButton = document.createElement("button");
  const almaMaterButton = document.createElement("button");
  const visionButton = document.createElement("button");
  const missionButton = document.createElement("button");

  const bouttSection = document.querySelector(".section-content-boutt");
  const orgSection = document.querySelector(".section-content-org");
  const almaMaterSection = document.querySelector(".section-content-almamatter");
  const visionSection = document.querySelector(".section-content-vision");
  const missionSection = document.querySelector(".section-content-mission");

  const sections = [bouttSection, orgSection, almaMaterSection, visionSection, missionSection];
  const buttons = [bouttButton, orgButton, almaMaterButton, visionButton, missionButton];

  function hideAllSections() {
    sections.forEach((section) => {
      section.style.display = "none";
    });

    buttons.forEach((button) => {
      button.style.backgroundColor = "#fbc02d"; // Default dark yellow button background
      button.style.color = "#4e4e4e"; // Darker text for better contrast
      button.style.border = "2px solid #4e4e4e"; // Dark border for a cohesive theme
    });
  }

  function styleButton(button) {
    button.style.backgroundColor = "#fbc02d"; // Dark yellow background
    button.style.color = "#4e4e4e"; // Dark text color for contrast
    button.style.border = "2px solid #4e4e4e"; // Dark border
    button.style.padding = "10px 20px";
    button.style.margin = "10px";
    button.style.borderRadius = "5px"; // Rounded corners
    button.style.fontSize = "16px"; // Modern button size
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s, color 0.3s, border 0.3s";
  }

  function createButton(button, label, section) {
    button.textContent = label;
    styleButton(button);
    button.addEventListener("click", () => {
      hideAllSections();
      section.style.display = "block";
      button.style.backgroundColor = "#c87c00"; // Darker yellow for active button
      button.style.color = "white"; // White text for the active button
      button.style.border = "2px solid #c87c00"; // Dark yellow border
    });
    document.body.insertBefore(button, document.querySelector("section"));
  }

  // Initialize buttons
  createButton(bouttButton, "View About School History", bouttSection);
  createButton(orgButton, "View Organizational Chart", orgSection);
  createButton(almaMaterButton, "View Bukidnon Alma Mater", almaMaterSection);
  createButton(visionButton, "View DepEd Vision", visionSection);
  createButton(missionButton, "View DepEd Mission", missionSection);

  // Default state: hide all sections
  hideAllSections();
});