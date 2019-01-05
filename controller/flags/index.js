const Flag = require('../../db/schemas/flag');
const PointsFromByYear  = require('../../db/schemas/points_from_by_year');
const AllPointsFrom     = require('../../db/schemas/all_points_from');

const getAllFlags = async () => {
  let result = await Flag.find({}, '-_id').then((flags) => {
    return flags;
  })
  return result;
}

const getParticipatedByYear = async (year) => {
  let result;
  if(year>(new Date).getFullYear())
    result = await AllPointsFrom.find({}, 'country -_id').then((allCountries) => {
                return allCountries;
              });
  else
    result = await PointsFromByYear.find({year, "voted.0": { "$exists": true }}, 'country -_id').then((participatedCountries) => {
                return participatedCountries;
              });
  return result;
}

module.exports = {
  getAllFlags,
  getParticipatedByYear
}
