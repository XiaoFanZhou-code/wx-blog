// pages/obtain/obtain.js
import { postObtainData } from "../../service/obtain";
// 引入表单验证规则插件
import WxValidate from "../../utils/WxValidate";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 表单数据
        formData: { raceName: "", raceScope: "", rank: "" },
        // 年级
        accounts5: ["大一", "大二", "大三", "大四"],
        accountIndex5: "",
        // 竞赛名称
        accounts: [
            "中国“互联网+”大学生创新创业大赛",
            "天津市大学生校园微视频大赛",
            "中国大学生计算机设计大赛",
            "天津市大学生原创动漫大赛",
            "全国三维数字化创新设计大赛",
            "全国大学生电子设计竞赛",
            "华北五省（市、自治区）及港澳台大学生机器人大赛天津赛区竞赛",
            "“合泰杯”天津市大学生单片机应用设计竞赛",
            "“启诚杯”天津市大学生人工智能电脑鼠竞赛",
            "全国大学生“用友新道杯”沙盘模拟经营大赛",
            "全国大学生外贸从业能力大赛",
            "“中金所杯”全国大学生金融及衍生品知识竞赛",
            "中美青年创客大赛",
            "第四届天津市大学生化学竞赛",
            "天津市大学生生命科学基本实验技能竞赛",
            "全国大学生机械创新设计大赛天津赛区竞赛",
            "全国大学生物流设计大赛",
            "华北五省（市、自治区）大学生计算机应用大赛天津区竞赛",
            "全国大学生广告艺术大赛分赛区竞赛",
            "天津市大学生工业与艺术设计竞赛",
            "“新人杯”全国大学生室内设计竞赛",
            "中国高等院校设计艺术大赛",
            "中华全国日语演讲比赛",
            "天津市普通高校大学生数学竞赛",
            "天津市大学生外语学科竞赛",
            "21世纪杯全国英语演讲比赛",
            "天津市大学生思想政治公开课大赛",
            "中国大学生龙舟锦标赛",
            "世界大学生龙舟锦标赛",
            "全国大学生数学建模竞赛",
        ],
        ountIndex: "",
        // 竞赛范围
        accounts2: ["国家级", "天津市", "全国分赛区"],
        accountIndex2: "",
        // 获奖等级
        accounts3: ["特等奖", "一等奖", "二等奖", "三等奖", "金奖", "银奖", "铜奖"],
        accountIndex3: "",
        // 获奖等级
        // accounts4: ["个人", "团体"],
        // accountIndex4: "",
        // 确认提交
        dialogShow: false,
        buttons: [{ text: "取消" }, { text: "确定" }],
        // 表单验证规则
        rules: [{
                name: "studentName",
                rules: {
                    required: true,
                    message: "请输入您的名字",
                },
            },
            {
                name: "studentNumber",
                rules: {
                    required: true,
                    message: "请输入您的学号",
                },
            },
            {
                name: "major",
                rules: {
                    required: true,
                    message: "请选择年级",
                },
            },
            {
                name: "cardNumber",
                rules: {
                    required: true,
                    message: "请输入卡号",
                },
            },
            {
                name: "obtainTime",
                rules: {
                    required: true,
                    message: "请输入您的名字",
                },
            },
            {
                name: "adviser",
                rules: {
                    required: true,
                    message: "请输入指导老师名字",
                },
            },
            {
                name: "teamSituation",
                rules: {
                    required: true,
                    message: "请输入团队名称",
                },
            },
        ],
    },

    /**
     * --------------------------------事件监听函数-----------------------
     */
    // 监听输入框事件
    formInputChange(e) {
        const { field } = e.currentTarget.dataset;
        this.setData({
            [`formData.${field}`]: e.detail.value,
        });
    },
    // 年级监听事件
    bindAccountChange5: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        const grade = "formData.grade";
        this.setData({
            accountIndex5: e.detail.value,
            [grade]: this.data.accounts5[e.detail.value],
        });
    },
    // 竞赛名称监听事件
    onLoad: function(options) {},
    bindAccountChange: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        console.log(
            "picker发送选择发生改变，携带值为：",
            this.data.accounts[e.detail.value]
        );
        const raceName = "formData.raceName";
        this.setData({
            accountIndex: e.detail.value,
            [raceName]: this.data.accounts[e.detail.value],
        });
    },
    // 竞赛范围监听事件
    bindAccountChange2: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        console.log(
            "picker发送选择发生改变，携带值为：",
            this.data.accounts2[e.detail.value]
        );
        const raceScope = "formData.raceScope";
        this.setData({
            accountIndex2: e.detail.value,
            [raceScope]: this.data.accounts2[e.detail.value],
        });
    },
    // 获奖等级监听事件
    bindAccountChange3: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        const rank = "formData.rank";
        this.setData({
            accountIndex3: e.detail.value,
            [rank]: this.data.accounts3[e.detail.value],
        });
    },
    // 个人/团体监听事件
    // bindAccountChange4: function(e) {
    //     // console.log("picker account 发生选择改变，携带值为", e.detail.value);
    //     const teamSituation = "formData.teamSituation";
    //     this.setData({
    //         accountIndex4: e.detail.value,
    //         [teamSituation]: this.data.accounts4[e.detail.value],
    //     });
    //     console.log(this.data.formData);
    // },
    // 确认提交按钮
    openConfirm: function() {
        this.setData({
            dialogShow: true,
        });
    },
    tapDialogButton(e) {
        this.setData({
            dialogShow: false,
        });
        if (e.detail.index === 0) {
            // console.log(this.data.formData.resultName);
            return;
        }
        this.selectComponent("#form").validate((valid, errors) => {
            console.log("valid", valid, errors);
            if (!valid) {
                const firstError = Object.keys(errors);
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message,
                    });
                    wx.showToast({
                        title: "信息未填完!",
                        image: "../../assets/icon/error.png",
                        duration: 3000,
                        mask: true,
                    });
                }
            } else {
                postObtainData(
                    this.data.formData.studentName,
                    this.data.formData.studentNumber,
                    this.data.formData.major,
                    this.data.formData.cardNumber,
                    this.data.formData.raceName,
                    this.data.formData.raceScope,
                    this.data.formData.rank,
                    this.data.formData.adviser,
                    this.data.formData.teamSituation,
                    this.data.formData.obtainTime,
                    this.data.formData.grade
                ).then((res) => {
                    if (res.data.code !== 201) {
                        wx.showToast({
                            title: "提交失败！",
                            image: "../../assets/icon/error.png",
                            duration: 4000,
                            mask: true,
                        });
                    } else {
                        wx.showToast({
                            title: "提交成功！",
                            image: "../../assets/icon/success.png",
                            duration: 4000,
                            mask: true,
                        });
                    }
                    console.log(res);
                });
            }
        });
    },
});