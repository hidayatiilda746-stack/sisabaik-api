export function tanganiError(error, req, res, next){
    console.error(error);

    if(res.headersSent) return next(error);

    const status = Number.isInteger(error.status);
    res.status(status).json({
        success: false,
        error: {
            code: error.code || "INTERNAL_SERVER_ERROR",
            message: status === 500 ? "Terjadi kesalahan pada server." : error.message
        }
    });
}