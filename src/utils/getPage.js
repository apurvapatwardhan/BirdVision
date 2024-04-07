function getPage(page) {
    let mod = 11;
    let resPage = (page % mod) == 0 ? 1 : (page % mod);
    return resPage;
}

export default getPage;