const express = require('express');
const cors = require('cors')
const axios = require('axios').default;
const Data = require("./Data");
const Status = require("./Status");

const app = express();

const data_s = [
    new Data(
        'InteliCards API',
        'api.myintelicard.com',
        'https://api.myintelicard.com/api/digicard/2',
        '{"id":2,"firstName":"Amit","salutation":"CA","lastName":"Shah","company":"Amit Shah & Co.","theme":"image","img":"cool","logo":"https://i.imgur.com/zxHiGgS.png","email":"ca.amitshah@icai.org","address":"138/2, E Ward, Assembly Road, Kolhapur, Maharashtra","phone":"+919422620771","whatsApp":"919422620771","map":"https://goo.gl/maps/51Nmmv3SsgaQaBTX7","post":"Partner","vcf":"https://www.visionmoneymantra.com/vcf/Amit Shah.vcf","website":null,"social_Media":{"facebook":"https://www.facebook.com/caasco.in/","insta":"https://www.instagram.com/explore/locations/1664915320427706/ca-amit-shah-co/","twitter":"https://twitter.com/caasco_in"},"about":{"nature":"Chartered Accountants","custom":true,"specialities":[{"text":"Value Added Services"},{"text":"Strong Team"},{"text":"Timely Consultation"},{"text":"Multiple services under one roof"}],"description":[{"text":"Amit Shah & Co. started in 2004 with an objective to provide wide range to conusltation services under one roof over wide geographical area."},{"text":"We are having offices located at Kolhapur, Pune and Mumbai. And a young, energtic team of 4 partners and 20+ staff. Wide range of services of Direct and Indirect Tax Consultation, Audits and other compliance services are provided to all types of clients from small proprietoriship businesses to large corporates."},{"text":"Our objective is to provide Value Added Services to our clients."}]},"gallery":{"slider":[{"text":"https://img.etimg.com/photo/msid-68221005/investment.jpg"},{"text":"https://i.ytimg.com/vi/LQsp2ZKjCxA/maxresdefault.jpg"},{"text":"https://www.onlineassignmentshelp.com/blog/wp-content/uploads/2017/02/Accounting-for-Business.jpg"},{"text":"https://www.loanbaba.com/blog/wp-content/uploads/2017/11/e-kyc-process.png"}],"photos":[{"img":"https://img.etimg.com/photo/msid-68221005/investment.jpg"},{"img":"https://i.ytimg.com/vi/LQsp2ZKjCxA/maxresdefault.jpg"},{"img":"https://www.onlineassignmentshelp.com/blog/wp-content/uploads/2017/02/Accounting-for-Business.jpg"},{"img":"https://www.loanbaba.com/blog/wp-content/uploads/2017/11/e-kyc-process.png"}]},"products":{"type":"serv","items":[{"text":"Income Tax Consultation, Return Filing, Tax Audits","img":"https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/02/full/1583089967-438.png&width=1200"},{"text":"GST Consultation, Audits, Reconciltation Services","img":"https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/gst_18_505_251219063430.jpg?size=1200:675"},{"text":"Salary ITR Filing","img":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/itr.jpeg?ttvfRO2APtofU4i9aVGYnsWA00SuV3r5&size=770:433"},{"text":"Project Report","img":"https://images.template.net/9180/business-project-report.jpg"},{"text":"Partnership Deed Drafting, ROF Registration","img":"https://www.indiafilings.com/learn/wp-content/uploads/2020/07/Sample-Partnership-Agreement.jpg"},{"text":"Company Incorporation","img":"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/04053201/incorporation-400x400.jpg"},{"text":"Other services like PAN, TDS Return Filing, MSME Registration, Labour Law Consultation","img":"https://i.imgur.com/dtemJDX.jpg"}]},"payment":{"paytmMerchantId":"+huM1AUuk+vG1GuWAKLn68VlUpekvkR3pr/TJV6rd1qDoW7Cu4Gs2Sh6xtC9B2Z+BNsGR/rqTJAoJT8gn3ymh+dxJcNtMi48l5Gt1vowVAXHJgD9EX0vCh+9nRL8xV6F39m9eZRQyq9vGFCFyMCPIwUBh6DN5amHLLqwkatz5VM=","upiId":"lovedarsh5185@oksbi"},"bank":{"bankName":"SBI","ifsc":"SBIN00007249","acName":"Amit Shah","acNum":"249556249","pan":"AN979466D94","gstin":"46597665"}}',
        1000
    )
]

app.use(cors());

for(let i = 0; data_s<i; i++) {
    axios.get(data_s[i].hitUrl)
        .then(function (response) {
            const {data, status} = response;
            const expect = data == data_s[i].expectedRes;

            data_s[i].addStatus(status, expect)

            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    data_s[i].addStatus()
}

app.get('/', (req, res) => {
    res.json(data_s)
})

app.listen(process.env.PORT)
