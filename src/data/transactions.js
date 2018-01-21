import uuid from 'uuid/v4';

const transactions = [
  // NOTE HARD-CODED

  // accountId: [
    //{ Description:
    // Datetime
    // Amount
    // recipient phoneNumber},
    //{ Description:
    // Datetime
    // Amount
    // recipient phoneNumber},
  //]
  {
    id: '0xd5be4d774f607402418ffbf645de8d4030be084f28fba0fd9f717a59dab0f646',
    description: 'Haircut',
    datetime: '2018-01-19T03:24:00',
    amount: 34,
    recipientPhoneNumber: '07483942794',
  }, {
    id: '0xd5be4d774f607402418ffbf645de8d4030be084f28fba0fd9f717a59dab0f645',
    description: 'Bus ride',
    datetime: '2018-01-20T04:21:20',
    amount: 20,
    recipientPhoneNumber: '07826138109',
  }, {
    id: '0xd5be4d774f607402418ffbf645de8d4030be084f28fba0fd9f717a59dab0f644',
    description: 'Dinner',
    datetime: '2018-01-20T04:21:20',
    amount: 50,
    recipientPhoneNumber: '07826138109',
  }, {
    id: '0xd5be4d774f607402418ffbf645de8d4030be084f28fba0fd9f717a59dab0f643',
    description: 'Market shopping',
    datetime: '2018-01-20T04:21:20',
    amount: 100,
    recipientPhoneNumber: '07826138109',
  }, {
    id: '0xd5be4d774f607402418ffbf645de8d4030be084f28fba0fd9f717a59dab0f642',
    description: 'Account creation',
    datetime: '2018-01-17T04:21:20',
    amount: -5,
    recipientPhoneNumber: '',
  },
];

export default transactions;
