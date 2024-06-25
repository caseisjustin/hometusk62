const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    statusCode = err.statusCode || statusCode;

    res.status(statusCode);
    res.json({
        status: 'error',
        statusCode: statusCode,
        message: err.message,
        stack: err.stack,
    });
};

export default errorHandler;
