const express = require("express");
const axios = require("axios");

const app = express();
const port = 8080;
const accessKey = "GBgi4fJ3qY6jRCF5wd9nuw8-BQnfVF6x0Ko0Zan5Xr0";
const secretKey = "6xW6UMAklniFuN32qRX0nKay1VYr9hRi7PSGiPNwvxk";

app.get("/api/image/random", async (req, res) => {
    try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        console.log(response);
        let image = response.data.urls.raw;
        console.log(image);
        res.json(image);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(port, () => {
    console.log("successfully server started");
})