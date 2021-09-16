const { getResponseObj, getWeaknesses } = require('../helpers');

const handleResponse = async (req, res) => {
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
  if (resolved.length > 2) throw new Error('Only 2 types are allowed!');

  const weaknesses = getWeaknesses(resolved);

  const weaknessText = weaknesses.join(', ').replace(/,\s([^,]+)$/, ' or $1')

  res.prepared(`Use ${weaknessText} attacks against ${resolved.join(' and ')}.`);
}


module.exports = (req, res) => {
  const {
    body: {
      session,
      scene
    }
  } = req;

  res.prepared = (message) => res.json(getResponseObj(session.id, scene, message));

  Promise.resolve()
      .then(() => handleResponse(req, res))
      .catch(err => res.prepared(err.message));
}
