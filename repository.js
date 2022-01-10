const { readFileSync, stat, writeFileSync, writeFile } = require('fs')

module.exports = new function () {
    const fileName = "./data.json";
    let inc = 0
    let data = {}
    this.create = dt => {
        dt.Id = inc++;
        data[dt.Id] = dt;
        writeFile(fileName, JSON.stringify(data), err => {if (err) console.error(err);});
        return dt
    }
    this.getAll = () => {
        return Object.values(data);
    }
    this.get = id => data[id];
    this.update = dt => {
        data[dt.Id] = dt;
        writeFile(fileName, JSON.stringify(data), err => {if (err) console.error(err);});
        return dt;
    }
    this.delete = id => {
        delete data[id];
        writeFile(fileName, JSON.stringify(data), err => {if (err) console.error(err);});
    }

    stat(fileName, (err, stats) => {
        if (err && err.code === "ENOENT") {    // Ошибка, когда нет такого файла
            writeFileSync(fileName, "{}");
        }
    data = JSON.parse(readFileSync(fileName, {encoding:"UTF-8"}));
    })
}
