const types = require('./api/types');

const req = {
  body: {
    handler: { name: 'Vercel' },
    intent: {
      name: 'Weakness',
      params: { types: { resolved: ['Ground'] } },
      query: 'what is strong against fire?'
    },
    scene: {
      name: 'actions.scene.START_CONVERSATION',
      slotFillingStatus: 'UNSPECIFIED',
      slots: {}
    },
    session: {
      id: 'ABwppHHzAKCeutHqDPGW6UTMWFswuvEr94WbOC-eI5ME3AH7uVYArhKyY6gEf__FqylQepiEW0_FgkOn',
      params: {},
      typeOverrides: [],
      languageCode: ''
    },
    user: {
      locale: 'en-US',
      params: {},
      accountLinkingStatus: 'ACCOUNT_LINKING_STATUS_UNSPECIFIED',
      verificationStatus: 'VERIFIED',
      packageEntitlements: [],
      gaiamint: '',
      permissions: [],
      lastSeenTime: '2021-09-14T11:55:07Z'
    },
    home: { params: {} },
    device: {
      capabilities: [ 'SPEECH', 'RICH_RESPONSE', 'LONG_FORM_AUDIO' ],
      timeZone: { id: 'Europe/Vienna', version: '' }
    }
  }
}

const res = {
  json: (text) => console.log(text)
}


types(req, res);



// {
//   handler: { name: 'Vercel' },
//   intent: {
//     name: 'Weakness',
//     params: { types: [Object] },
//     query: 'what is strong against fire?'
//   },
//   scene: {
//     name: 'actions.scene.START_CONVERSATION',
//     slotFillingStatus: 'UNSPECIFIED',
//     slots: {}
//   },
//   session: {
//     id: 'ABwppHHzAKCeutHqDPGW6UTMWFswuvEr94WbOC-eI5ME3AH7uVYArhKyY6gEf__FqylQepiEW0_FgkOn',
//     params: {},
//     typeOverrides: [],
//     languageCode: ''
//   },
//   user: {
//     locale: 'en-US',
//     params: {},
//     accountLinkingStatus: 'ACCOUNT_LINKING_STATUS_UNSPECIFIED',
//     verificationStatus: 'VERIFIED',
//     packageEntitlements: [],
//     gaiamint: '',
//     permissions: [],
//     lastSeenTime: '2021-09-14T11:55:07Z'
//   },
//   home: { params: {} },
//   device: {
//     capabilities: [ 'SPEECH', 'RICH_RESPONSE', 'LONG_FORM_AUDIO' ],
//     timeZone: { id: 'Europe/Vienna', version: '' }
//   }
// }
