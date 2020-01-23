import {
    addNewApiNode,
    getApiNodes,
    getApiNodeById,
    updateApiNode,
    deleteApiNode,
} from '../controllers/apiController'
/* eslint-disable no-unused-vars */
const routes = app => {
    app.route('/apiNodes')
        // list of api nodes
        .get((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, getApiNodes)
        // create new api Nodes
        .post((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, addNewApiNode)
    app.route('/apiNode/:apiNodeID')
        // get api Node by ID
        .get((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, getApiNodeById)
        // modify api Node
        .put((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, updateApiNode)
        // delete api Node
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, deleteApiNode)
}

export default routes
