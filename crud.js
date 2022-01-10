const repo = require("./repository")

module.exports = new function () {
    this.get = id => repo.get(id)
    this.getAll = () => repo.getAll()
    this.create = data => repo.create(data)
    this.update = data => repo.update(data)
    this.delete = id => repo.delete(id)
}