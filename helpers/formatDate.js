const test = new Date

const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate
}

module.exports = formatDate()