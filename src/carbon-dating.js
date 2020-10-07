const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693/HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity > MODERN_ACTIVITY) return false;
  if (sampleActivity <= 0) return false;
  if (!sampleActivity.match(/^\d+(\.\d+(\.?\d+)?)?$/g)) return false;
res=Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k;
ans=Math.ceil(res);
return ans;
}
