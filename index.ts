import * as micro from 'micro'
// import Server from './server'
const PORT = process.env.PORT || 5000

const server = micro(sync (req, res) => {
    return {
        message: 'Hello World'
    }
})

server.listen(PORT)

