export default function createError(msg, status, res){
    res.statusMessage = msg;
    res.status(status).send(msg);
};