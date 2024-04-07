

const getLimitAndSkip = function(page) {
    let mod = 11;
    let resPage = (page % mod) == 0 ? 1 : (page % mod);
    return {
        limit : 10, 
        skip: (resPage - 1) * 10
    }
}

export default getLimitAndSkip;