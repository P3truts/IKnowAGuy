// import { Buffer } from 'buffer';

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

export const convertToBase64 = (file) => {
    return new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            res(fileReader.result);
        };

        fileReader.onerror = (error) => {
            rej(error);
        };
    });
};

// export const decodeBase64 = (base64) => {
//     let result = Buffer.from(base64, 'base64').toString();
//     console.log(result);
//     return result;
// };
