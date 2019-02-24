const _                 =   require('lodash');
const SongsStatistic    =   require('../../db/schemas/songs_statistic');
const WinnerByYear   =   require('../../db/schemas/winner_by_year');

const getSongsStatistics =  async () => {
  let result = await SongsStatistic.findOne({}).select('-_id').then((cb) => {
    let stats = cb._doc;
    let total = {};
    Object.keys(stats).map((key) => {
      total[key] = 0;
      Object.keys(stats[key]).map((iKey) => total[key] += stats[key][iKey]); //here total[key] is updated
      Object.keys(stats[key]).map((iKey) => stats[key][iKey] = _.round(stats[key][iKey]/total[key]*100, 2));
    })
    return stats;
  })
  return result;
}

const getWinnerByYear = async(year) => {
  let result = await WinnerByYear.findOne({}).then((allWinners) => {
    return allWinners._doc[year];
  })
  return result;
}

module.exports = {
  getSongsStatistics,
  getWinnerByYear
}
