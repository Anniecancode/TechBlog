const showdate = date => {
    const today = new Intl.DateTimeFormat("en-au").format(date);
    return today;
};

module.exports = { showdate };