
const extractStats = (stats) => {
    const result = [];
    stats.forEach((stat) => {
        result.push({
            name: stat.stat.name,
            baseState: stat.base_stat,
        });
    });
    return result;
};


const getBestMoves = (data) => {
    const topMoves = data.slice(0, 3);
    const result = [];
    topMoves.forEach((move) => {
        result.push(move.move.name);
    });
    return result;
};


export const extractData = (data) => {
    return {
        image: data?.sprites?.front_default,
        id: data?.id,
        name: data?.name,
        type: data?.types[0].type.name.toUpperCase(),
        stats: extractStats(data?.stats),
        moves: getBestMoves(data?.moves),
    };
}