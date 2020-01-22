/* eslint-disable no-unused-vars */
const routes = app => {
    app.route('/contact')
        .get(
            (req, res, next) => {
                // middleware
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type ${req.method}`)
                next()
            },
            (req, res, next) => {
                res.send('GET request succesfull!')
            }
        )
        .post(
            (req, res, next) => {
                // middleware
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type ${req.method}`)
                next()
            },
            (req, res, next) => {
                res.send('POST request succesfull!')
            }
        )
    app.route('/contact/:contactID')
        .put(
            (req, res, next) => {
                // middleware
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type ${req.method}`)
                next()
            },
            (req, res, next) => {
                res.send('PUT request succesfull!')
            }
        )
        .delete(
            (req, res, next) => {
                // middleware
                console.log(`Request from ${req.originalUrl}`)
                console.log(`Request type ${req.method}`)
                next()
            },
            (req, res, next) => {
                res.send('DELETE request succesfull!')
            }
        )
}

export default routes
