const _ = require('lodash');
const BFF = require('../../db/schemas/bff');
const Wiki = require('../../db/schemas/wiki');

const getBFF = async () => {
  let result = await BFF.find({}, '-_id').then((bff) => {
    return bff;
  })
  return result;
}

const getHistoryWinner = async () => {
  let result = await Wiki.find({}, '-_id').then((wiki) => {
    let winners = wiki[0]['_doc'];
    winners = Object.keys(winners).map(key => {
      return {country: _.trim(key).toLowerCase(), wins: Number(winners[key]['wins'])}
    });
    let sortedWinners = _.orderBy(winners, ['wins'], ['desc']);
    return sortedWinners[0]; //history greatest winner
  })
  return result;
}


module.exports = {
  getBFF,
  getHistoryWinner
}
