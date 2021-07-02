export function topicChecked(topic, subscribedTopics) {
    if (typeof subscribedTopics !== 'undefined' && subscribedTopics && subscribedTopics.length && (subscribedTopics || []).indexOf(topic._id) > -1) {
        return true;
    }
    return !topic.defaultUnchecked || (topic.matchPathChecked && topic.matchPathChecked && (location.pathname && (new RegExp(topic.matchPathChecked)).test(location.pathname)));
}