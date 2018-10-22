export const asArray = (friends) => (
    Object.keys(friends).map(key => friends[key])
);
