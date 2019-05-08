const sibiTitleGenerator = (title, n) => {
    if (!n) return title;
    return "驳《" + "驳<".repeat(n - 1) + title + ">".repeat(n - 1) + "》";
}

module.exports = sibiTitleGenerator;
