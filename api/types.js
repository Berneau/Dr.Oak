module.exports = async (req, res) => {
  const {
    body: {
      intent: {
        params: {
          types
        }
      } 
    } 
  } = req;

  const { resolved = [] } = types;

  if (resolved.length === 0) return; // TODO: handle error

  console.log(types);

  res.json({
    fulfillmentMessages: [
    {
      platform: 'ACTIONS_ON_GOOGLE',
      simpleResponses: {
        simpleResponses: [
          {
            textToSpeech: 'This is a test!'
          }
        ]
      }
    },
    {
      text: {
        text: ['This is a test!']
      }
    }
  ]});
}

// return {
// fulfillmentMessages: [
//   {
//     platform: 'ACTIONS_ON_GOOGLE',
//     simpleResponses: {
//       simpleResponses: [
//         {
//           textToSpeech: text
//         }
//       ]
//     }
//   },
//   {
//     text: {
//       text: [text]
//     }
//   }
// ]
// };


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
