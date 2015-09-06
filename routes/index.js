var express = require('express');
var router = express.Router();

var dummyData = [
  {
    "_id": "55ec815043ec0d3b22f3edba",
    "company": "COMVOY",
    "latitude": "-48.728108",
    "longitude": "29.946081"
  },
  {
    "_id": "55ec815008b27db97e02f4ef",
    "company": "MANUFACT",
    "latitude": "61.730255",
    "longitude": "-12.057748"
  },
  {
    "_id": "55ec8150dfa231f86b8c6d43",
    "company": "BUZZNESS",
    "latitude": "39.33772",
    "longitude": "140.495932"
  },
  {
    "_id": "55ec815011977717820dd24c",
    "company": "CANOPOLY",
    "latitude": "-78.841995",
    "longitude": "-165.125656"
  },
  {
    "_id": "55ec8150ffa4ba0d4cc0e552",
    "company": "EARTHMARK",
    "latitude": "13.336679",
    "longitude": "-141.487508"
  },
  {
    "_id": "55ec8150ac6372236233219a",
    "company": "PETICULAR",
    "latitude": "66.947394",
    "longitude": "-152.337336"
  },
  {
    "_id": "55ec815054e23415bee68568",
    "company": "ZILLAR",
    "latitude": "0.511135",
    "longitude": "141.685639"
  },
  {
    "_id": "55ec8150eb61bca9e7e7462e",
    "company": "ZENTHALL",
    "latitude": "-67.631557",
    "longitude": "77.659788"
  },
  {
    "_id": "55ec8150b6fba93859798095",
    "company": "ZOLAREX",
    "latitude": "89.002809",
    "longitude": "-148.877209"
  },
  {
    "_id": "55ec81506a03dbfa40b90cf2",
    "company": "OCTOCORE",
    "latitude": "-71.441394",
    "longitude": "27.460074"
  },
  {
    "_id": "55ec8150ad5c7db9de472a96",
    "company": "GEEKOLOGY",
    "latitude": "4.451297",
    "longitude": "171.948724"
  },
  {
    "_id": "55ec81509c50c3772ee345f7",
    "company": "REPETWIRE",
    "latitude": "-50.182016",
    "longitude": "167.038613"
  },
  {
    "_id": "55ec81508c6f5968ea21d5a0",
    "company": "HELIXO",
    "latitude": "-60.555037",
    "longitude": "-67.753899"
  },
  {
    "_id": "55ec81509c7e5f6598eb5b5f",
    "company": "NIMON",
    "latitude": "25.91235",
    "longitude": "104.013566"
  },
  {
    "_id": "55ec815050fd562a844383f1",
    "company": "EXERTA",
    "latitude": "40.825374",
    "longitude": "-138.513945"
  },
  {
    "_id": "55ec815080d5bbfbc117b7be",
    "company": "INSURESYS",
    "latitude": "-46.422189",
    "longitude": "131.301552"
  },
  {
    "_id": "55ec8150b1be985fe6d25d7b",
    "company": "EARGO",
    "latitude": "-25.57698",
    "longitude": "-153.499707"
  },
  {
    "_id": "55ec81500e7c6ac93fc906d7",
    "company": "ESSENSIA",
    "latitude": "88.845957",
    "longitude": "-23.088997"
  },
  {
    "_id": "55ec815049302e5d58ef6544",
    "company": "FLYBOYZ",
    "latitude": "-69.001643",
    "longitude": "99.114939"
  },
  {
    "_id": "55ec8150517693382fb39ec3",
    "company": "CORIANDER",
    "latitude": "23.278246",
    "longitude": "-115.489782"
  },
  {
    "_id": "55ec81500cf10ba95f14b234",
    "company": "AUSTEX",
    "latitude": "66.745177",
    "longitude": "-32.070249"
  },
  {
    "_id": "55ec815039126df22fa960b4",
    "company": "PROVIDCO",
    "latitude": "20.939472",
    "longitude": "78.03595"
  },
  {
    "_id": "55ec8150671a91e1452eac3d",
    "company": "LUNCHPAD",
    "latitude": "-74.468008",
    "longitude": "131.063486"
  },
  {
    "_id": "55ec8150e2ca9f2ee60f5964",
    "company": "APPLIDECK",
    "latitude": "74.491545",
    "longitude": "-66.716744"
  },
  {
    "_id": "55ec81507d67c59b2872e7eb",
    "company": "CODAX",
    "latitude": "8.205875",
    "longitude": "145.828914"
  },
  {
    "_id": "55ec8150b8ba2c44f298b355",
    "company": "GEEKUS",
    "latitude": "-22.597908",
    "longitude": "-56.742651"
  },
  {
    "_id": "55ec81500454d52f86620296",
    "company": "ZANILLA",
    "latitude": "75.169235",
    "longitude": "52.165832"
  },
  {
    "_id": "55ec81506a84963c9291e93a",
    "company": "REMOTION",
    "latitude": "-45.329655",
    "longitude": "178.164594"
  },
  {
    "_id": "55ec8150596ec7af07f40800",
    "company": "MAGNAFONE",
    "latitude": "-67.938692",
    "longitude": "-41.892971"
  },
  {
    "_id": "55ec8150f24b52216bb5fd6f",
    "company": "KYAGORO",
    "latitude": "36.919805",
    "longitude": "32.040672"
  },
  {
    "_id": "55ec81509c146652a6d1ee12",
    "company": "COMVERGES",
    "latitude": "-58.087459",
    "longitude": "105.305326"
  },
  {
    "_id": "55ec8150349ae2dbe171cd61",
    "company": "APEXIA",
    "latitude": "0.056838",
    "longitude": "88.367053"
  },
  {
    "_id": "55ec81509d2729e24f27f519",
    "company": "AFFLUEX",
    "latitude": "-60.885061",
    "longitude": "19.074978"
  },
  {
    "_id": "55ec815090b6db773de8036b",
    "company": "SUREMAX",
    "latitude": "28.608461",
    "longitude": "107.645072"
  },
  {
    "_id": "55ec815083859c9cee8baa0f",
    "company": "BILLMED",
    "latitude": "70.530804",
    "longitude": "-171.10584"
  },
  {
    "_id": "55ec8150b0ef726c3edb7006",
    "company": "DEEPENDS",
    "latitude": "-82.776933",
    "longitude": "104.650134"
  },
  {
    "_id": "55ec8150cb57269f2bd2170c",
    "company": "PLEXIA",
    "latitude": "28.179816",
    "longitude": "71.874533"
  },
  {
    "_id": "55ec8150837a5a3ba0ca6236",
    "company": "XINWARE",
    "latitude": "61.931523",
    "longitude": "76.859107"
  },
  {
    "_id": "55ec815066171d3bc75f806a",
    "company": "COMTEXT",
    "latitude": "42.026648",
    "longitude": "43.868355"
  },
  {
    "_id": "55ec815033e930a2e8a8dcfa",
    "company": "ANDRYX",
    "latitude": "-5.171146",
    "longitude": "98.377829"
  },
  {
    "_id": "55ec8150971973ffc0152dc5",
    "company": "BLEEKO",
    "latitude": "12.755578",
    "longitude": "-165.552067"
  },
  {
    "_id": "55ec815052972738eb1cb779",
    "company": "ADORNICA",
    "latitude": "-82.567818",
    "longitude": "-17.480999"
  },
  {
    "_id": "55ec8150b16dfa7fb097fbc2",
    "company": "GENESYNK",
    "latitude": "63.73514",
    "longitude": "-54.214167"
  },
  {
    "_id": "55ec8150645704319956dc07",
    "company": "ISOTERNIA",
    "latitude": "-15.581863",
    "longitude": "-137.242725"
  },
  {
    "_id": "55ec81503465a7760484b08f",
    "company": "ACLIMA",
    "latitude": "-20.577562",
    "longitude": "60.37231"
  },
  {
    "_id": "55ec81503b2a61f43e415564",
    "company": "ZENTIA",
    "latitude": "65.847177",
    "longitude": "-69.965405"
  },
  {
    "_id": "55ec81502f80ed4c85f26667",
    "company": "CALLFLEX",
    "latitude": "26.081997",
    "longitude": "75.980406"
  },
  {
    "_id": "55ec8150afb54847846b5053",
    "company": "ZEPITOPE",
    "latitude": "44.545167",
    "longitude": "-9.599596"
  },
  {
    "_id": "55ec8150874782d036d11444",
    "company": "COFINE",
    "latitude": "-61.538946",
    "longitude": "-115.531893"
  },
  {
    "_id": "55ec815005ac7f7ca4431a42",
    "company": "RODEMCO",
    "latitude": "21.096915",
    "longitude": "-106.684741"
  },
  {
    "_id": "55ec81509577b8b65b13ff46",
    "company": "IMANT",
    "latitude": "79.826537",
    "longitude": "-140.009123"
  },
  {
    "_id": "55ec8150a4a3ba8273a4543d",
    "company": "COLAIRE",
    "latitude": "-58.937876",
    "longitude": "-67.971416"
  },
  {
    "_id": "55ec8150a16d80348d6ad3ac",
    "company": "ROOFORIA",
    "latitude": "-39.174548",
    "longitude": "95.771838"
  },
  {
    "_id": "55ec8150733527d415131e8f",
    "company": "DIGIGEN",
    "latitude": "-75.297578",
    "longitude": "-88.267803"
  },
  {
    "_id": "55ec8150892a9c1718d803a2",
    "company": "GYNKO",
    "latitude": "53.140654",
    "longitude": "-22.60552"
  },
  {
    "_id": "55ec81509d95364bd610c3f6",
    "company": "NSPIRE",
    "latitude": "-63.096167",
    "longitude": "23.442136"
  },
  {
    "_id": "55ec8150cc7491622de5e455",
    "company": "UNISURE",
    "latitude": "76.477828",
    "longitude": "-106.349353"
  },
  {
    "_id": "55ec81507d9db4ee5971d69a",
    "company": "KINDALOO",
    "latitude": "49.94015",
    "longitude": "-171.739123"
  },
  {
    "_id": "55ec8150a0058ecfa3670ba8",
    "company": "RAMEON",
    "latitude": "-67.239759",
    "longitude": "150.68076"
  },
  {
    "_id": "55ec8150c486a034f0fe3b43",
    "company": "KOOGLE",
    "latitude": "39.199207",
    "longitude": "113.695375"
  },
  {
    "_id": "55ec81502146293523592bf9",
    "company": "DANCERITY",
    "latitude": "-86.564995",
    "longitude": "-5.728543"
  },
  {
    "_id": "55ec81505692e5678cb17ae6",
    "company": "LYRICHORD",
    "latitude": "-87.900009",
    "longitude": "2.494925"
  },
  {
    "_id": "55ec8150c21c484a8050fa72",
    "company": "AVENETRO",
    "latitude": "58.396217",
    "longitude": "-95.623797"
  },
  {
    "_id": "55ec81500dd137bc8d41d33d",
    "company": "FRANSCENE",
    "latitude": "-78.916957",
    "longitude": "-40.806374"
  },
  {
    "_id": "55ec81503c0db7926061607b",
    "company": "POLARIA",
    "latitude": "76.364431",
    "longitude": "-136.872325"
  },
  {
    "_id": "55ec8150b1faa2abc66d4277",
    "company": "CRUSTATIA",
    "latitude": "83.177675",
    "longitude": "-9.590894"
  },
  {
    "_id": "55ec81504b753a7c4dac59e4",
    "company": "COMVEY",
    "latitude": "0.553236",
    "longitude": "-152.358102"
  },
  {
    "_id": "55ec81503270c90de3f6fe3d",
    "company": "PROTODYNE",
    "latitude": "79.144267",
    "longitude": "-123.09692"
  },
  {
    "_id": "55ec815081617f22f6848d0d",
    "company": "ELECTONIC",
    "latitude": "61.999975",
    "longitude": "9.324789"
  },
  {
    "_id": "55ec81504c2a64fb62767f1d",
    "company": "QUAILCOM",
    "latitude": "28.84732",
    "longitude": "11.509541"
  },
  {
    "_id": "55ec8150e274ca2dac6eb89d",
    "company": "ENTROFLEX",
    "latitude": "-41.346481",
    "longitude": "-45.751442"
  },
  {
    "_id": "55ec8150f6b315564456df08",
    "company": "ORBALIX",
    "latitude": "42.187902",
    "longitude": "89.715771"
  },
  {
    "_id": "55ec815066924e53e5304a39",
    "company": "SENMAO",
    "latitude": "-68.282866",
    "longitude": "177.241763"
  },
  {
    "_id": "55ec81509eca49e72436c194",
    "company": "STEELTAB",
    "latitude": "-73.958222",
    "longitude": "-6.152375"
  },
  {
    "_id": "55ec815095f34799b53c2f22",
    "company": "ZYTREK",
    "latitude": "52.93759",
    "longitude": "-174.531351"
  },
  {
    "_id": "55ec8150143c0c2798d4dc9c",
    "company": "EARTHWAX",
    "latitude": "88.080951",
    "longitude": "-99.448"
  },
  {
    "_id": "55ec8150fb1fe012b3d9df09",
    "company": "COMCUR",
    "latitude": "-25.264702",
    "longitude": "86.866675"
  },
  {
    "_id": "55ec81508cdd5caf9d45b688",
    "company": "EARTHPURE",
    "latitude": "41.08932",
    "longitude": "153.721324"
  },
  {
    "_id": "55ec81500511b9dd94f10efd",
    "company": "MICROLUXE",
    "latitude": "-71.931366",
    "longitude": "103.0871"
  },
  {
    "_id": "55ec8150d92bc2d2628f24f1",
    "company": "XLEEN",
    "latitude": "-56.359837",
    "longitude": "-175.813552"
  },
  {
    "_id": "55ec8150bd554c1fee91fd18",
    "company": "OVERFORK",
    "latitude": "21.26798",
    "longitude": "134.52295"
  },
  {
    "_id": "55ec8150628d582952035b3f",
    "company": "INVENTURE",
    "latitude": "43.203496",
    "longitude": "115.52459"
  },
  {
    "_id": "55ec815073e21af7639b7cf7",
    "company": "QUORDATE",
    "latitude": "54.400644",
    "longitude": "-61.348696"
  },
  {
    "_id": "55ec81505e55d6ee64016a55",
    "company": "NORALI",
    "latitude": "15.424641",
    "longitude": "66.714281"
  },
  {
    "_id": "55ec8150428760eb025634a6",
    "company": "ENERSAVE",
    "latitude": "5.672267",
    "longitude": "36.125598"
  },
  {
    "_id": "55ec8150a2f7317a6ab13e8a",
    "company": "ACRODANCE",
    "latitude": "38.509763",
    "longitude": "85.201224"
  },
  {
    "_id": "55ec815006a5cdca8a446584",
    "company": "ASIMILINE",
    "latitude": "-80.349032",
    "longitude": "-91.216201"
  },
  {
    "_id": "55ec8150c24b0ebd0d60e50b",
    "company": "PHOTOBIN",
    "latitude": "-8.006824",
    "longitude": "-26.569885"
  },
  {
    "_id": "55ec81509c8acb3b38d5fbb0",
    "company": "LIQUIDOC",
    "latitude": "82.367401",
    "longitude": "-160.491048"
  },
  {
    "_id": "55ec815073a05f31199ce834",
    "company": "JASPER",
    "latitude": "15.937904",
    "longitude": "-61.358078"
  },
  {
    "_id": "55ec8150c6cf08b7215eaf61",
    "company": "FIBEROX",
    "latitude": "74.444875",
    "longitude": "-66.335494"
  },
  {
    "_id": "55ec8150ba167c63b1fa929a",
    "company": "RUBADUB",
    "latitude": "5.978605",
    "longitude": "18.954204"
  },
  {
    "_id": "55ec815000d4956f24874d2a",
    "company": "SUPREMIA",
    "latitude": "-81.448786",
    "longitude": "36.822982"
  },
  {
    "_id": "55ec8150f0ab4f693086e759",
    "company": "COMCUBINE",
    "latitude": "17.754513",
    "longitude": "-157.014287"
  },
  {
    "_id": "55ec8150a2ca98dae6ee9ae5",
    "company": "MAGNEMO",
    "latitude": "40.35419",
    "longitude": "63.109097"
  },
  {
    "_id": "55ec81505c04ccf8b887440f",
    "company": "DIGIFAD",
    "latitude": "-71.29965",
    "longitude": "85.633789"
  },
  {
    "_id": "55ec815009bae6d93105068c",
    "company": "EPLOSION",
    "latitude": "-39.695531",
    "longitude": "127.642136"
  },
  {
    "_id": "55ec81500411d7a4b8ded1d9",
    "company": "TWIIST",
    "latitude": "-26.78414",
    "longitude": "-163.700309"
  },
  {
    "_id": "55ec815063c8f0cf3d216954",
    "company": "MARTGO",
    "latitude": "66.640098",
    "longitude": "138.911208"
  },
  {
    "_id": "55ec815071776dca991e062a",
    "company": "EMTRAC",
    "latitude": "-77.713394",
    "longitude": "-93.209869"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello world!' });
});

router.get('/channels', function(req, res) {
  console.log(req.query.l);
  var lat  = req.query.l.split(",")[0];
  var long = req.query.l.split(",")[1];
  var result = [];
  console.log("lat: " + lat + " & long: " + long);


  for (i = 0; i < dummyData.length; i++) {
    console.log(dummyData[i].latitude);
    console.log(typeof dummyData[i].latitude);
    if (dummyData[i].latitude === lat && dummyData[i].longitude === long) {
      result.push(dummyData[i]);
    }
  }
  res.json({
    "latitude": lat,
    "longitude": long,
    "result": result
  });

});

module.exports = router;
