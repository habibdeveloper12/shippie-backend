import proxy from "http-proxy-middleware";

module.exports = function(app) {
    app.use (
        proxy("/oauth/token",{
            target:"https://apis-sandbox.fedex.com",
            changeOrigin: true
        })
    );

    app.use (
        proxy("/track/v1/trackingnumbers",{
            target:"https://developer.fedex.com/api/en-eg/catalog/track/v1",
            changeOrigin: true
        })
    );
    
};