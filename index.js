const sibiTitleGenerator = (title, n, withSymbol) => {
    if (!withSymbol) {
        withSymbol = true
    }
    let newTitle = title;
    n = Math.floor(n);
    if (n <= 0) {
        return withSymbol ? `《${newTitle}》` : newTitle
    }
    return sibiTitleGenerator(`驳《${newTitle}》`, --n, withSymbol)
}
module.exports = sibiTitleGenerator;
