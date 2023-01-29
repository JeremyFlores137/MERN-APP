import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
//security packages
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

//cookie package
import cookieParser from 'cookie-parser'


import 'express-async-errors'
dotenv.config()
const app = express()
const port = process.env.port || 5000
//db authenticate user
import connectDB from './db/connect.js'

//route
import authRouter from './routes/authRoute.js'
import jobsRoutes from './routes/jobsRoutes.js'

//Middleware

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

//setting route on server
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'./client/build'))) // by default the dirname is not available 

app.use(express.json())

//cookie middleware
app.use(cookieParser())

//middles for securing our server
app.use(helmet()) //secure headers
app.use(xss()) //sanitize the input
app.use(mongoSanitize()) //prevent mongoDB operator injection

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRoutes)

//any get route get that index.html after we have tried these two below // react application is now our public asset
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL) 
        app.listen(port, ()=>{
        console.log(`Server is listening on port ${port}`)
    })
    } catch (error) {
        console.log(error);
    }
}
start()