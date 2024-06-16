enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getActivity(day: Days): string {
    switch (day) {
        case Days.Monday:
            return "Focus on major projects and meetings.";
        case Days.Tuesday:
            return "Continue working on projects and attend team meetings.";
        case Days.Wednesday:
            return "Review progress and adjust plans.";
        case Days.Thursday:
            return "Complete tasks and start wrapping up the week's work.";
        case Days.Friday:
            return "Finish work early and plan for the weekend.";
        case Days.Saturday:
            return "Go camping and enjoy outdoor activities.";
        case Days.Sunday:
            return "Relax and recharge for the upcoming week.";
        default:
            return "Invalid day.";
    }
}

console.log(getActivity(Days.Monday));