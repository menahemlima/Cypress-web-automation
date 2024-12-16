const report = require("multiple-cucumber-html-reporter");
const testData = require('./jsonlogs/log.json');

function calculateTotalDuration(testData) {
  let totalDuration = 0;

  testData.forEach((feature) => {
    feature.elements.forEach((scenario) => {
      scenario.steps.forEach((step) => {
        if (step.result && step.result.duration) {
          totalDuration += step.result.duration;
        }
      });
    });
  });

  return totalDuration;
}

function formatNanosecondsToHHMMSS(nanoseconds) {
  const totalSeconds = nanoseconds / 1e9;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}h:${formattedMinutes}m:${formattedSeconds}s`;
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${day}/${month}/${year}`;
}

const today = new Date();
const newDate = formatDate(today);

const milissegundos = calculateTotalDuration(testData)
const result = formatNanosecondsToHHMMSS(milissegundos)

report.generate({
 
  jsonDir: "jsonlogs",
  reportPath: "./reports/cucumber-htmlreport",
  displayDuration: true,
  metadata: {
    browser: {
      name: "Chrome",
      version: "104",
    },
    device: "Cloud",
    platform: {
      name: "Linux",
      version: "10",
    },
  },
  customData: {
  title: "Run info",
  data: [
    { label: "Test Project", value: "DOT Relatório - Testes regressivos" },
    { label: "Execution Date", value: newDate },
    { label: "Total Execution Time", value: result },
  ],
},
});