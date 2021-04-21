module.exports = {
    createSuccessResponse: (response, message) => {
        this.createResponse(response, 200, message);
    },

    createErrorResponse: (response, error) => {
        this.createResponse(response, error.responseCode, error.response);
    },

    createResponse: (response, code, message) => {
        return response.status(code).json({
            message
        });
    }
};
