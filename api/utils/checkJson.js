module.exports = text => {
    try {
        return ({ json: JSON.parse(text), isValid: true });
    } catch (error) {
        return ({ json: null, isValid: false });
    }
}