// pages/academic/academic.js
import { postAcademicData } from "../../service/academic";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        dialogShow: false,
        // 表单数据
        formData: { resultName: "", grade: "" },
        // 竞赛范围
        accounts: ["论文", "专利"],
        accountIndex: "",
        // 年级
        accounts2: ["大一", "大二", "大三", "大四"],
        accountIndex2: "",
        // 确认提交
        dialogShow: false,
        buttons: [{ text: "取消" }, { text: "确定" }],
        // 表单验证规则
        rules: [{
                name: "patentName",
                rules: {
                    required: false,
                },
            },
            {
                name: "paperName",
                rules: {
                    required: false,
                },
            },
            {
                name: "applicant",
                rules: {
                    required: true,
                    message: "请输入您的名字",
                    trigger: "validate",
                },
            },
            {
                name: "major",
                rules: {
                    required: true,
                    message: "请输入您的专业",
                    trigger: "validate",
                },
            },
            {
                name: "firstAuthor",
                rules: {
                    required: true,
                    message: "请输入第一作者名字",
                    trigger: "validate",
                },
            },
            {
                name: "correspondingAuthor",
                rules: {
                    required: true,
                    message: "请输入通讯作者名字",
                    trigger: "validate",
                },
            },
            {
                name: "adviser",
                rules: {
                    required: true,
                    message: "请输入指导老师的名字",
                    trigger: "validate",
                },
            },
            {
                name: "patentNumber",
                rules: {
                    // required: true,
                    message: "请输入专利号",
                    trigger: "validate",
                },
            },
            {
                name: "paperNumber",
                rules: {
                    // required: true,
                    message: "请输入论文号",
                    trigger: "validate",
                },
            },
            {
                name: "postedTime",
                rules: {
                    required: false,
                },
            },
            {
                name: "applicationTime",
                rules: {
                    required: false,
                },
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},
    /**
     * --------------------------------事件监听函数-----------------------
     */

    onLoad: function(options) {},
    // 监听输入框事件
    formInputChange(e) {
        const { field } = e.currentTarget.dataset;
        this.setData({
            [`formData.${field}`]: e.detail.value,
        });
        console.log(this.data.formData);
    },
    // 成果名称监听事件
    bindAccountChange: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        const resultName = "formData.resultName";
        this.setData({
            accountIndex: e.detail.value,
            [resultName]: this.data.accounts[e.detail.value],
        });
    },
    // 年级监听事件
    bindAccountChange2: function(e) {
        // console.log("picker account 发生选择改变，携带值为", e.detail.value);
        const grade = "formData.grade";
        this.setData({
            accountIndex2: e.detail.value,
            [grade]: this.data.accounts2[e.detail.value],
        });
    },
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
                postAcademicData(
                    this.data.formData.resultName,
                    this.data.formData.paperName,
                    this.data.formData.patentName,
                    this.data.formData.major,
                    this.data.formData.grade,
                    this.data.formData.applicant,
                    this.data.formData.adviser,
                    this.data.formData.patentNumber,
                    this.data.formData.paperNumber,
                    this.data.formData.applicationTime,
                    this.data.formData.postedTime,
                    this.data.formData.firstAuthor,
                    this.data.formData.correspondingAuthor
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