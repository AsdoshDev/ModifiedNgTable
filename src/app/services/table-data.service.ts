import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableDataService {
  tableInfoFail = { 'needPagination': true,tableType: 'default', 'needFilter': true, tableTitle: "Fails", tableHeader: true, columnWidth: '10', needPrint: true };
  tableInfoBreak = { 'needPagination': true,tableType: 'default', 'needFilter': false, tableTitle: "Breaks", tableHeader: true, columnWidth: '25', needPrint: false };

  tableInfo = {  'needPagination': true,tableType: 'levelDecider', 'needFilter': true, cusip: '1234567', 'needPrint': true, levelDecider: true, 'level': 3, 'index': 0, columnWidth: '15' };
  tableInfo6 = {  'needPagination': true,tableType: 'default', 'needFilter': false, tableHeader: false, columnWidth: '25' };
  tableInfo7 = {  'needPagination': true,tableType: 'default', 'needFilter': false, tableTitle: "Transactions", tableHeader: true, columnWidth: '10', needPrint: true };

  tableInfo8 = { tableType: 'columnTable', tableHeader: false, needFilter: false, needPrint: true, levelDecider: false };

  tableInfo5 = { tableType: 'columnTable', tableTitle: "Account Details", needFilter: false, needPrint: true, levelDecider: false };
  columnHeaderInfoLevel5 = { tableType: 'columnTable', tableTitle: "Account Details", needFilter: false, needPrint: true, levelDecider: false };


  columnHeaders4 = [
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "username", colName: "Ending List", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "username", colName: "Ending List", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "username", colName: "Ending List", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "id", colName: "Firm", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "name", colName: "Check", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "username", colName: "Ending List", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
  ];



  columnHeadersFails = [
    { attrName: "srn", colName: "Stock Record Number", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "tradeRefNo", colName: "Trade Reference Number", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "actType", colName: "Activity Type", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "accNo", colName: "Account Number", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "offAcct", colName: "Offset Account", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "clearLoc", colName: "Clearing Location", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "quantity", colName: "Quantity", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "debit", colName: "Debit/Credit", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "amount", colName: "Amount", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "currState", colName: "Current State", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "postDate", colName: "Posting Date", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "tradeDate", colName: "Trade Date", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "valueDate", colName: "Value Date", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "currencyInd", colName: "Currency Indicator", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "timestamp", colName: "Timestamp", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
  ];


  
  columnHeadersBreaks = [
    { attrName: "acctNo", colName: "Account Number", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "breakDate", colName: "Break Date", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "longs", colName: "Longs", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
    { attrName: "shorts", colName: "Shorts", filterBy: 'string', searchIcon: false, inputType: "text", filterValue: "" },
  ];

  breaksData = 
    [
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
      {
        "acctNo": "1234567",
        "breakDate": "05543765",
        "longs": "11563778",
        "shorts": "Security Short Name",
      },
    ];
  
  failsData = 
    [
      {
        "srn": "1234567",
        "tradeRefNo": "05543765",
        "actType": "11563778",
        "accNo": "Security Short Name",
        "offAcct": "Global Collateral Type",
        "clearLoc": "International Product Type",
        "quantity": "Security Short Name",
        "debit": "Global Collateral Type",
        "amount": "International Product Type",
        "currState": "International Product Type",
        "postDate": "Security Short Name",
        "tradeDate": "Global Collateral Type",
        "valueDate": "International Product Type",
        "currencyInd": "Global Collateral Type",
        "timestamp": "International Product Type",
      },
      {
        "srn": "567567",
        "tradeRefNo": "9877897",
        "actType": "11563778",
        "accNo": "Security Short Name",
        "offAcct": "Global Collateral Type",
        "clearLoc": "International Product Type",
        "quantity": "Security Short Name",
        "debit": "Global Collateral Type",
        "amount": "International Product Type",
        "currState": "International Product Type",
        "postDate": "Security Short Name",
        "tradeDate": "Global Collateral Type",
        "valueDate": "International Product Type",
        "currencyInd": "Global Collateral Type",
        "timestamp": "International Product Type",
      }];


  columnHeaders3 = [

    { attrName: "id", colName: "Account No", filterBy: 'string', searchIcon: 'true', inputType: "text", filterValue: ""},
    { attrName: "name", colName: "Name", filterBy: 'string', inputType: "text", filterValue: "", rightAlign: false },
    { attrName: "username", colName: "Username", filterBy: 'string', inputType: "text", filterValue: "", },
    { attrName: "ob", colName: "Opening Balance", filterBy: 'number', inputType: "text", filterValue: "", openItem: true, rightAlign: true },
    { attrName: "email", colName: "Email", filterBy: 'string', inputType: "text", filterValue: "" },
    { attrName: "phone", colName: "Phone", filterBy: 'number', inputType: "dropdown", dropdownValues: [123, 345, 999, 567], filterValue: "" },
    { attrName: "website", colName: "Website", filterBy: 'string', inputType: "text", filterValue: "" },
    { attrName: "amount", colName: "Amount", filterBy: 'number', inputType: "text", filterValue: "" },
    { attrName: "test2", colName: "Employed", filterBy: 'string', inputType: "text", filterValue: "" },
    { attrName: "test3", colName: "Address", filterBy: 'string', inputType: "text", filterValue: "" },
    { attrName: "test4", colName: "Nationality", filterBy: 'string', inputType: "text", filterValue: "", rightAlign: false },
    { attrName: "test5", colName: "License", filterBy: 'string', inputType: "text", filterValue: "", rightAlign: false },

  ];


  tableInfo2 = { tableType: 'levelDecider', 'needFilter': false, 'needPrint': false, levelDecider: true, 'level': 2, 'index': 0 }
  columnHeaders2 = [
    { attrName: "firm", colName: "Firm" },
  ];

  tableInfo1 = { tableType: 'levelDecider', 'needFilter': false, 'needPrint': true, levelDecider: true, 'level': 1, 'index': 0 }

  columnHeaders1 = [
    { attrName: "cusip", colName: "CUSIP", searchIcon: 'true' },
    { attrName: "isin", colName: "ISIN" },
    { attrName: "sedol", colName: "SEDOL" },
    { attrName: "ssn", colName: "Security Short Name" },
    { attrName: "gct", colName: "Global Collateral Type" },
    { attrName: "ipt", colName: "International Product Type" },
    { attrName: "cr", colName: "Coupon Rate" },
    { attrName: "md", colName: "Maturity Date" },
    { attrName: "ic", colName: "Issue Currency" }
  ];

  columnHeadersAcct = [
    { attrName: "acctno", colName: "Account Number", searchIcon: 'true' },
    { attrName: "asn", colName: "Account Short Name" },
    { attrName: "mnm", colName: "Mnemonic" },
    { attrName: "ai", colName: "Account Indicator" },
    { attrName: "ctg", colName: "Category" },
    { attrName: "fc", colName: "Firm Code" }
  ];


  dataLevelAcct = {
    id: "ACCTDTLS",
    details: [
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }, {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }, {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }, {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }, {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }, {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      },
      {
        "acctno": "1234567",
        "asn": "05543765",
        "mnm": "11563778",
        "ai": "Security Short Name",
        "ctg": "Global Collateral Type",
        "fc": "International Product Type",
      }]
  }

  dataLevel4 = [
    {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10291287",
      "name": "Martin Graham",
      "username": "Bret",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    },
    {
      "id": "10191287",
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "phone": "123",
      "website": "hildegard.org",
      "email": "Sincere@april.biz",
      "amount": "500,000,000",
      "test2": "234234",
      "test3": "234234",
      "test4": "234234",
      "test5": "234234"

    }
  ];

  dataLevel3 =
    {
      id: "CUSIP",
      "1234567": [{
        "company": "CG-MARKETING", "records": [
          {
            "id": "10291287",
            "name": "Martin Graham m1",
            "subRecords": [
              {
                "id": "10291287",
                "name": "Sub row 1",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              },
              {
                "id": "10291287",
                "name": "Sub row 2",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              },
              {
                "id": "10291287",
                "name": "Sub row 3",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              }],
            "username": "Bret",
            "ob": "50000",
            "email": "Sincere@april.biz",
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjfj oew joewf",
            "test3": "Aeifjwef owe fewfj oew joewf",
            "test4": "Aeifjwef owe fjfj oew joewf",
            "test5": "Aeifjwef owe j oew joewf",
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
            "name": "Chelsey Dietrich m2",
            "username": "Kamren",
            "ob": "1234567",
            "amount": "700,000,000",
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
            "name": "Leanne Graham m3",
            "username": "Bret",
            "subRecords": [
              {
                "id": "10291287",
                "name": "Sub row 4",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              },
              {
                "id": "10291287",
                "name": "Sub row 5",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              },
              {
                "id": "10291287",
                "name": "Sub row 6",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "phone": "123",
                "website": "hildegard.org",
              }],
            "email": "Sincere@april.biz",
            "ob": "12355",
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
      },


      {
        "company": "CG-DEVELOPMENT", "records": [
          {
            "id": "10291287",
            "name": "Brendon McCullum d1",
            "username": "Bret",
            "ob": "90000",
            "email": "Sincere@april.biz",
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test3": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test4": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test5": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
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
            "name": "Martin Graham d2",
            "username": "Bret",
            "ob": "98753",
            "email": "Sincere@april.biz",
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test3": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test4": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test5": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
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
            "name": "Chelsey Dietrich d3",
            "username": "Kamren",
            "ob": "56722",
            "amount": "700,000,000",
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
            "name": "Mrs. Dennis Schulist d4",
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
            "name": "Leanne Graham d5",
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
      "23456789": [{
        "company": "CG-RESEARCH", "records": [
          {
            "id": "10291287",
            "name": "Martin Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test3": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test4": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test5": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
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
            "amount": "700,000,000",
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
            "ob": "123123123",
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
      },


      {
        "company": "CG-PRODUCTION", "records": [
          {
            "id": "10291287",
            "name": "Brendon McCullum",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test3": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test4": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test5": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
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
            "amount": "500,000,000",
            "test2": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test3": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test4": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
            "test5": "Aeifjwef owe fjoewfj ewo fjoewfj oew fjoewfj oewfj oew joewf",
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
            "amount": "700,000,000",
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


  dataLevel1 = {
    id: "CUSIP",
    details: [
      {
        "cusip": "1234567",
        "isin": "05543765",
        "sedol": "11563778",
        "ssn": "Security Short Name",
        "gct": "Global Collateral Type",
        "ipt": "International Product Type",
        "cr": "Coupon Rate",
        "md": "Maturity Date",
        "ic": "Issue Currency"
      }, {
        "cusip": "23456789",
        "isin": "05543765",
        "sedol": "11563778",
        "ssn": "Security Short Name",
        "gct": "Global Collateral Type",
        "ipt": "International Product Type",
        "cr": "Coupon Rate",
        "md": "Maturity Date",
        "ic": "Issue Currency"
      }]
  }





  account = {
    "id": "10291287",
    "Security Short Name": "Shanna@melissa.tv",
    "Coupon Rate": "493-170-9623 x156",
    "Instrument Type": "kale.biz",
    "Maturity Date": "18-Feb-2018",
    "Closing Price": "12,000,000",
    "Ticker Symbol": "Hoeger Mall",
    "Current Balance": "Apt. 692",
    "Total Breaks": "53919-4257",
    "Total Fails": "Multi-tiered zero tolerance productivity",
    "Long Break Quantity": "600,000,000",
    "Long Fail Quantity": "600,000,000",
    "Short break Quantity": "600,000,000",
    "Short fail Quantity": "600,000,000",
  };

  rooturl: string = "https://jsonplaceholder.typicode.com/users";

  config: any;

  constructor(private http: HttpClient) { }

  getLevel5Columns() {
    return this.account;
  }
  

  getLevel4Columns() {
    return this.columnHeaders4;
  }


  getFailsColumnHeaders() {
    return this.columnHeadersFails;
  }

  getFailsData(){
    return this.failsData;
  }


  getBreaksColumnHeaders() {
    return this.columnHeadersBreaks;
  }

  getBreaksData(){
    return this.breaksData;
  }

  getLevel3Columns() {
    return this.columnHeaders3;
  }
  getLevel1Columns() {
    return this.columnHeaders1;
  }
  getLevel2Columns() {
    return this.columnHeaders2;
  }
  getLevel3() {
    return this.dataLevel3;
  }
  getLevel1() {
    return this.dataLevel1;
  }



  getLevel4() {
    return this.dataLevel4;
  }

  getTableInfo6() {
    return this.tableInfo6;
  }
  getTableInfo() {
    return this.tableInfo;
  }
  getTableInfo5() {
    return this.tableInfo5;
  }


  getTableInfo1() {
    return this.tableInfo1;
  }
  getTableInfo2() {
    return this.tableInfo2;
  }

  getTableInfo7() {
    return this.tableInfo7;
  }

  getTableInfo8() {
    return this.tableInfo8;
  }

  
  getTableInfoFail() {
    return this.tableInfoFail;
  }

  getTableInfoBreak() {
    return this.tableInfoBreak;
  }

  
  


  getCusipId() {
    return "23456789";
  }
  getAcctData() {
    return this.dataLevelAcct;
  }

  getAcctColumns() {
    return this.columnHeadersAcct;
  }




  getAccount() {
    return this.account;
  }

}
