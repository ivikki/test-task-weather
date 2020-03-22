export const TYPE = (prefix => ({
  PREFIX: new RegExp(prefix, "i"),
  // simple action
  META: `${prefix}META`,
  CLEAR: `${prefix}CLEAR`,
  // complex actions
  INITIALIZE: `${prefix}INITIALIZE`,
  UPDATE_DATA: `${prefix}UPDATE_DATA`
}))("@app/");
