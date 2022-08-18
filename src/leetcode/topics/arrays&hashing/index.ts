export function compareArr(arr1: any[], arr2: any[]) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; arr1.length; i++) {
        if (Array.isArray(arr1[i]) ? !compareArr(arr1[i], arr2[i]) : arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
