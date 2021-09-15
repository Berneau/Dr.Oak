const getWeakness = async (req, res) => {
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

  if (resolved.length === 0) throw new Error('No types found!');

  res.prepared(resolved.join(','));
}


module.exports = (req, res) => {
  const {
    body: {
      session: {
        id 
      },
      scene
    }
  } = req;

  const responseObj = {
    session: {
      id,
      params: {}
    },
    scene: {
      ...scene,
      next: {
        name: 'actions.scene.END_CONVERSATION'
      }
    }
  }
  
  res.prepared = (message) => res.json({
    ...responseObj,
    prompt: {
      override: false,
      firstSimple: {
        speech: message,
        text: message
      }
    }
  });

  Promise.resolve()
      .then(() => getWeakness(req, res))
      .catch(err => res.prepared(err.message));
}






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
