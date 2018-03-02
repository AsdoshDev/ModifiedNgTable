export class Utils {
    generateArray(obj) {
        return Object.keys(obj).map((key) => {return {key: key, value: obj[key]}});
    }
}