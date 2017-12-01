module.exports = {
    strip_tags(text) {
        return text.replace(/(<([^>]+)>)/ig, "");
    }
};
