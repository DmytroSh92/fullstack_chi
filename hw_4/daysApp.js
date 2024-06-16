"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
function getActivity(day) {
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
