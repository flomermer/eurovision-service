const _ =  require('lodash');

const AllPointsTo       = require('../../db/schemas/all_points_to');
const AllPointsFrom     = require('../../db/schemas/all_points_from');
const PointsToByYear    = require('../../db/schemas/points_to_by_year');
const PointsFromByYear  = require('../../db/schemas/points_from_by_year');

const allPointsTo =  async (country) => {
  let result = await AllPointsTo.find({country}).then((cb) => {
    let votes = cb[0].votes;
    votes = _.orderBy(votes, ['points'], ['desc']);
    let pts=12;
    for(let i=0; i<votes.length; i++){
      votes[i].points = pts;
      if(pts>0) pts--;
    }
    return votes;
  })
  return result;
}
const allPointsFrom =  async (country) => {
  let result = await AllPointsFrom.find({country}).then((cb) => {
    let votes = cb[0].votes;
    votes = _.orderBy(votes, ['points'], ['desc']);
    let pts=12;
    for(let i=0; i<votes.length; i++){
      votes[i].points = pts;
      if(pts>0) pts--;
    }
    return votes;
  })
  return result;
}

const pointsToByYear =  async (country,year) => {
  let result = await PointsToByYear.find({country, year}).then((cb) => {
    return cb[0].voted;
  })
  return result;
}

const pointsFromByYear =  async (country,year) => {
  let result = await PointsFromByYear.find({country, year}).then((cb) => {
    return cb[0].voted;
  })
  return result;
}

module.exports = {
  allPointsTo,
  allPointsFrom,
  pointsToByYear,
  pointsFromByYear
}
