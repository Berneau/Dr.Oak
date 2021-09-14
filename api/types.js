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


  console.log(types);

  res.json();
}
