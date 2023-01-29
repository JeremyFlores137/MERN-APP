import CustomAPIerror from './custom-api.js'
import {StatusCodes} from 'http-status-codes'

class UnAuthenticatedError extends CustomAPIerror{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
export default UnAuthenticatedError