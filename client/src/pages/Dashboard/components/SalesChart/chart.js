// Palette
import palette from '../../../../theme/palette';

// Chart data
export const data = {
  labels: ['8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec'],
  datasets: [
    {
      label: 'This week',
      backgroundColor: palette.primary.main,
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'Last week',
      backgroundColor: palette.common.neutral,
      data: [11, 20, 12, 29, 30, 25, 13]
    }
  ]
};

// Chart options
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.common.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
