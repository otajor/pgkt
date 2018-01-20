import uuid from 'uuid/v4';

const transactions = {
  // accountId: [
    //{ Description:
    // Datetime
    // Amount
    // recipient phonenumber},
    //{ Description:
    // Datetime
    // Amount
    // recipient phonenumber},
  //]
  '07479869730': [
    {
      id: uuid(),
      description: 'Invoice to Tesco 43782',
      datetime: '2018-01-19T03:24:00',
      amount: 34.67,
      recipientPhoneNumber: '07483942794',
    },
    {
      id: uuid(),
      description: 'Payment ref. 43342',
      datetime: '2018-01-19T04:21:20',
      amount: 56.47,
      recipientPhoneNumber: '07826138109',
    },
  ],
  '074837492432': [
    {
      id: uuid(),
      description: 'Amazon Uk retail',
      datetime: '2018-01-19T13:54:00',
      amount: 5.99,
      recipientPhoneNumber: '07382193718',
    },
    {
      id: uuid(),
      description: 'Starbucks store 43799',
      datetime: '2018-01-19T14:45:30',
      amount: 99.01,
      recipientPhoneNumber: '07498327427',
    },
  ]
};

export default transactions;
