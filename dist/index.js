function generateError(message, code) {
    throw { message: message, errorcode: code };
}
generateError('A aplicação travou', 400);

