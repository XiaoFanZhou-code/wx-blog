import request from "../service/network";

// 发起网络请求，请求轮播图数据和本周流行数据
export function postAcademicData(
    resultName,
    paperName,
    patentName,
    major,
    grade,
    applicant,
    adviser,
    patentNumber,
    paperNumber,
    applicationTime,
    postedTime,
    firstAuthor,
    correspondingAuthor,
) {
    return request({
        url: "scholarism",
        data: {
            resultName, // 成果名称
            paperName, // 论文名称
            patentName, // 专利名称
            major, // 专业简称
            grade, // 年级
            applicant, // 申请人
            adviser, // 指导老师
            patentNumber, // 专利编号
            paperNumber, // 论文编号
            applicationTime, // 申请时间
            postedTime, ////发表时间
            firstAuthor, // 第一作者
            correspondingAuthor, // 通讯作者
        },
        method: "post",
    });
}