import CustomAPIerror from './custom-api.js'
import {StatusCodes} from 'http-status-codes'

class BadRequestError extends CustomAPIerror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
export default BadRequestError