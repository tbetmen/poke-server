const extractName = name => {
    const nameArr = name.split("-")
    if (nameArr.length > 1) {
        return nameArr
    } else {
        nameArr.push("-1")
        return nameArr
    }
}

module.exports = extractName