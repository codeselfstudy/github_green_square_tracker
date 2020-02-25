const axios = require("axios");

function createUrl(uname) {
    return `https://api.github.com/users/${uname}/events`;
}

function fetchActivity(username) {
    const url = createUrl(username);
    return axios.get(url);
}

function activityCleaner(activity) {
    // These are activities that relate to creating things.
    // If we only want to track pushes, then edit this array.
    const trackedEvents = [
        "CreateEvent",
        "PushEvent",
        "PullRequestEvent",
        "IssuesEvent",
        "IssuecommentEvent",
    ];
    console.log(activity.length)
    return (
        activity
            // filter out unwanted events
            .filter(a => trackedEvents.includes(a.type))
            // chop off the time and just leave the date
            .map(a =>
                Object.assign(a, { created_at: a.created_at.split("T")[0] })
            )
            // group by the date and only save the important info
            .reduce((acc, val) => {
                const currentItemDate = val.created_at;
                if (acc[currentItemDate]) {
                    acc[currentItemDate]++;
                } else {
                    acc[currentItemDate] = 1;
                }
                return acc;
            }, {})
    );
}

// testing it
fetchActivity("j127").then(({ data }) => {
    // console.log(data);
    const transformed = activityCleaner(data);
    console.log(transformed);
});
