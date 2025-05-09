export const metricsData = [
  {
    title: "Deployment Frequency",
    description: "Frequency of successful deployments to production per week",
    beforeValue: "2",
    afterValue: "12",
    unit: "per week",
    improvementPercentage: 500,
    improvementPrefix: "+",
    icon: "time"
  },
  {
    title: "Deployment Time",
    description: "Average time required to deploy to production",
    beforeValue: "45",
    afterValue: "8",
    unit: "minutes",
    improvementPercentage: 82,
    improvementPrefix: "-",
    icon: "time"
  },
  {
    title: "Mean Time to Recovery",
    description: "Average time to recover from failures in production",
    beforeValue: "120",
    afterValue: "25",
    unit: "minutes",
    improvementPercentage: 79,
    improvementPrefix: "-",
    icon: "trending"
  },
  {
    title: "Change Failure Rate",
    description: "Percentage of deployments causing failures in production",
    beforeValue: "15",
    afterValue: "3.5",
    unit: "percentage",
    improvementPercentage: 77,
    improvementPrefix: "-",
    icon: "trending"
  },
  {
    title: "Infrastructure Cost",
    description: "Monthly cloud infrastructure spending",
    beforeValue: "$15.2K",
    afterValue: "$9.8K",
    unit: "per month",
    improvementPercentage: 35,
    improvementPrefix: "-",
    icon: "cpu"
  },
  {
    title: "Availability",
    description: "Overall system uptime percentage",
    beforeValue: "99.5",
    afterValue: "99.98",
    unit: "percentage",
    improvementPercentage: 0.48,
    improvementPrefix: "+",
    icon: "server"
  }
];