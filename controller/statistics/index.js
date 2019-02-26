const _ = require('lodash');
const BFF = require('../../db/schemas/bff');
const Wiki = require('../../db/schemas/wiki');

const getBFF = async () => {
  let result = await BFF.find({}, '-_id').then((bff) => {
    return bff;
  })
  return result;
}

const mode = (myArray) =>
  myArray.reduce(
    (a,b,i,arr)=>
     (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
    null)

const getHistoryWinner = async () => {
  let result = await Wiki.find({}, '-_id').then((wiki) => {
    let winners = wiki[0]['_doc'];
    winners = Object.keys(winners).map(key => {
      return {country: _.trim(key).toLowerCase(), wins: Number(winners[key]['wins'])}
    });
    let sortedWinners = _.orderBy(winners, ['wins'], ['desc']);
    let historyWinner = sortedWinners[0]; //{country: ____, wins: ____} -> greatest eurovision winner

    let stats = wiki[2]['_doc'];
    let allHosts = [];
    Object.keys(stats).map((key,val) => {
      allHosts.push(_.trim(stats[key].host_city).toLowerCase());
    });

    let bestHostCity = mode(allHosts);
    let bestHostCityCounter = 0;
    _.map(allHosts, (host) => {
      if(host===bestHostCity) bestHostCityCounter++;
    })
    let historyHost = {city: bestHostCity, times: bestHostCityCounter}

    return {historyWinner, historyHost}; //history greatest winner
  })
  return result;
}

module.exports = {
  getBFF,
  getHistoryWinner
}
