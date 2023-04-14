export default function(data: any) {
    const array = [];
    for(let key in data) {
        array.push(data[key][0]);
    }
    return array;
}