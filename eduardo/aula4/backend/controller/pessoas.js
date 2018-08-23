const index = ({db}, req, res) => { res.send(db) }
const create = ({db}, req, res) => {
    const obj = req.body
    console.log(obj)

    db.push(obj);

    res.send({ 
        obj,
        sucesso: 'true'
    })

 }
const show = ({db}, req, res) => { 
    const { id }  = req.params
    res.send(db[id])
 }

const update = ({db}, req, res) => { 

    const obj = req.body
    const { id } = req.params

    db1 = db.map(e =>{
        if(e.name == id) {
            return {
                e,
                name:obj.name
            }
        }
        return e
    })
    res.send({success: true})

 }

const destroy = ({db}, req, res) => { 
    const { id } = req.params
    const result = db.filter((e) => {
        return e.name != id
    })

    res.send( {
        rows: result.length == db.length ? 0 : db.length - result.length
    })

    db = result
 }

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}