
function generateError( message: string, code: number) : never{
        throw{message:message, errorcode:code}
}

generateError('A aplicação travou', 500)