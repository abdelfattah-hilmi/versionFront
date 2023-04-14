function pushIn(this:any, item: any) {
    let itreate = 0;
    while(itreate < this.length) {
        if (new Date(this[itreate]["date-of-execution"]) < new Date(item["date-of-execution"])) {
            this.splice(itreate, 0, item);
            return;
        }
        itreate++;
    }
    this.push(item);
}

export default function(data: any) {
    const obj: any = {};
    Array.prototype.pushIn = pushIn;
    data.forEach((item: any) => {
        const IP = item.ip;
        if (!obj[`${IP}`]) {
            obj[`${IP}`] = [];
        }
        obj[`${IP}`].pushIn(item); 
    });
    return obj;
}