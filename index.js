const sibiTitleGenerator = (title, n) => {
    let newTitle = `《${title}》`;
    n = Math.floor(n);
    if (n <= 0) {
        return newTitle
    }
    return sibiTitleGenerator(`驳${newTitle}`, --n)
}

module.exports = sibiTitleGenerator;