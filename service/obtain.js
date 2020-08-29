import request from "../service/network";

// 发起网络请求，请求轮播图数据和本周流行数据
export function postObtainData(
    studentName,
    studentNumber,
    major,
    cardNumber,
    raceName,
    raceScope,
    rank,
    adviser,
    teamSituation,
    obtainTime,
    grade
) {
    return request({
        url: "obtain",
        data: {
            studentName,
            studentNumber,
            major,
            cardNumber,
            raceName,
            raceScope,
            rank,
            adviser,
            teamSituation,
            obtainTime,
            grade,
        },
        method: "post",
    });
}