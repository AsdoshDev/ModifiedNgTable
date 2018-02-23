import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableDataService{

  columnHeaderInfoLevel5 =  {tableType:'columnTable',tableTitle:"Account Details",'needFilter' : false,'needPrint' : true, levelDecider : false};
  columnHeaderInfoLevel4 =  {tableType:'default','tableTitle':"My Table Title",'needFilter' : true,'needPrint' : true, levelDecider : false,'columnHeaders' : [
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "username", colName: "Ending List" , filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "username", colName: "Ending List" , filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "username", colName: "Ending List" , filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
    { attrName: "username", colName: "Ending List" , filterBy: 'string', searchIcon: false, inputType: "text",filterValue:"" }, 
  
  ]};
 
  columnHeaderInfoLevel3 = {tableType:'levelDecider','needFilter' : true,cusip:'1234567','needPrint' : true, levelDecider : true,'level' : 3, 'index':0,'columnHeaders' : [
    { attrName: "id", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text",filterValue:"" },
    { attrName: "name", colName: "Name", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "username", colName: "Username", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "email", colName: "Email", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "phone", colName: "Phone", filterBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567],filterValue:""},
    { attrName: "website", colName: "Website", filterBy: 'string', inputType: "text",filterValue:"" },
    { attrName: "amount", colName: "Amount", filterBy: 'number', inputType: "text",filterValue:"" },
    {attrName:"test2",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test3",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test4",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
    {attrName:"test5",colName:"Website",filterBy:'string', inputType: "text",filterValue:"" },
  ]};

  columnHeaderInfoLevel2 =  {tableType:'levelDecider','needFilter' : false,'needPrint' : false, levelDecider : true,'level' : 2, 'index':0,'columnHeaders' : [
    { attrName: "firm", colName: "Firm" },
  ]};

  columnHeaderInfoLevel1 =  { tableType:'levelDecider','needFilter' : false,'needPrint' : true, levelDecider : true,'level' : 1, 'index':0,'columnHeaders' : [
    { attrName: "cusip", colName: "CUSIP",searchIcon: 'true',accordion: 'true'},
    { attrName: "isin", colName: "ISIN"},
    { attrName: "sedol", colName: "SEDOL"},
    { attrName: "ssn", colName: "Security Short Name"},
    { attrName: "gct", colName: "Global Collateral Type"},
    { attrName: "ipt", colName: "International Product Type"},
    { attrName: "cr", colName: "Coupon Rate" },
    { attrName: "md", colName: "Maturity Date"},
    { attrName: "ic", colName: "Issue Currency"},
]};

dataLevel4 =  [
    {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      
    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      
    }
  ];

dataLevel3 = 
 {
   id : "CUSIP",
   "1234567" : [{"company":"CG-MARKETING", "records" : [
    {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "amount"  : "500,000,000",
      "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "123",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
   
   
 
    
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "amount"  : "700,000,000",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
   
    {
      "id": "10293871",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }]
  } ,
  
  
  {"company":"CG-DEVELOPMENT", "records" : [
    {
      "id": "10291287",
      "name": "Brendon McCullum",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "amount"  : "500,000,000",
      "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "123",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }, {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "amount"  : "500,000,000",
      "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "123",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
   
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "amount"  : "700,000,000",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": "10291280",
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
 
    {
      "id": "10293871",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }]
 },],
 "23456789" : [{"company":"CG-RESEARCH", "records" : [
  {
    "id": "10291287",
    "name": "Martin Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "amount"  : "500,000,000",
    "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "123",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
 
 

  
  {
    "id": "10191287",
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "amount"  : "700,000,000",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
 
  {
    "id": "10293871",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }]
} ,


{"company":"CG-PRODUCTION", "records" : [
  {
    "id": "10291287",
    "name": "Brendon McCullum",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "amount"  : "500,000,000",
    "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "123",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }, {
    "id": "10291287",
    "name": "Martin Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "amount"  : "500,000,000",
    "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "123",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
 
  {
    "id": "10191287",
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "amount"  : "700,000,000",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": "10291280",
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },

  {
    "id": "10293871",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }]
},]


}

//  data1 = 
//  {
//    id : "CUSIP",
//    "companies" : [{"company":"CG-MARKETING", "shares" : [
//     {
//       "id": "02/01/2018",
//       "name": "Martin Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "amount"  : "500,000,000",
//       "test2"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
//       "test3"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
//       "test4"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
//       "test5"  : "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "123",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": "10291287",
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "amount"  : "600,000,000",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "345",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": "10291287",
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "amount"  : "300,000,000",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "567",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": "10291287",
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "amount"  : "800,000,000",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "999",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": "10191287",
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "amount"  : "700,000,000",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": "10291280",
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     }]
// } ,


// {"bnbp":"ewrewr"}]
// } 


dataLevel1 ={ id : "CUSIP",
details :[
 {"cusip": "1234567",
"isin" :   "05543765",
  "sedol" :  "11563778",
  "ssn" :  "Security Short Name",
  "gct" : "Global Collateral Type",
  "ipt" :  "International Product Type",
  "cr" : "Coupon Rate",
  "md" : "Maturity Date",
  "ic" :  "Issue Currency"}, {"cusip": "23456789",
  "isin" :   "05543765",
    "sedol" :  "11563778",
    "ssn" :  "Security Short Name",
    "gct" : "Global Collateral Type",
    "ipt" :  "International Product Type",
    "cr" : "Coupon Rate",
    "md" : "Maturity Date",
    "ic" :  "Issue Currency"}]}

account = {
 "id": "10291287",
 "name": "Ervin Howell",
 "username": "Antonette",
 "amount"  : "600,000,000",
 "email": "Shanna@melissa.tv",
 "phone": "493-170-9623 x156",
 "website": "kale.biz",
 "street": "Hoeger Mall",
 "suite": "Apt. 692",
 "city": "South Elvis",
 "zipcode": "53919-4257",
 "catchPhrase": "Multi-tiered zero tolerance productivity",
 "bs": "transition cutting-edge web services",
 "blockchain" : "propels java"
};

  rooturl:string = "https://jsonplaceholder.typicode.com/users";

  config:any;

  constructor(private http:HttpClient){}

  getLevel5Columns(){
    return this.columnHeaderInfoLevel5;
  }
  

  getLevel4Columns(){
    return this.columnHeaderInfoLevel4;
  }
  
  getLevel3Columns(){
    return this.columnHeaderInfoLevel3;
  }
  getLevel1Columns(){
    return this.columnHeaderInfoLevel1;
  }
  getLevel2Columns(){
    return this.columnHeaderInfoLevel2;
  }
  getLevel3(){
    return this.dataLevel3;
  } 
  getLevel1(){
    return this.dataLevel1;
  } 

  getLevel4(){
    return this.dataLevel4;
  } 

  getCusipId(){
    return "23456789";
  }
  

  getAccount(){
    return this.account;
  } 

} 
 