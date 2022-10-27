export const getCurentTime = () => {
    var date = new Date();
    return date.toJSON();
};

export const formatTime = (str) => {
    const indexT = str.indexOf('T');

    if (indexT > 0) {
        return str.slice(0, indexT);
    }
    return str;
};
