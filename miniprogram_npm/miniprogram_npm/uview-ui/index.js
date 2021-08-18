module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1629271229771, function(require, module, exports) {
// 引入全局mixin
var __TEMP__ = require('./libs/mixin/mixin.js');var mixin = __REQUIRE_DEFAULT__(__TEMP__);
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
var __TEMP__ = require('./libs/request');var http = __REQUIRE_DEFAULT__(__TEMP__);

function wranning(str) {
	// 开发环境进行信息输出,主要是一些报错信息
	// 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
	// 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
	if (process.env.NODE_ENV === 'development') {
		console.warn(str)
	}
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数
var __TEMP__ = require('./libs/function/queryParams.js');var queryParams = __REQUIRE_DEFAULT__(__TEMP__);
// 路由封装
var __TEMP__ = require('./libs/function/route.js');var route = __REQUIRE_DEFAULT__(__TEMP__);
// 时间格式化
var __TEMP__ = require('./libs/function/timeFormat.js');var timeFormat = __REQUIRE_DEFAULT__(__TEMP__);
// 时间戳格式化,返回多久之前
var __TEMP__ = require('./libs/function/timeFrom.js');var timeFrom = __REQUIRE_DEFAULT__(__TEMP__);
// 颜色渐变相关,colorGradient-颜色渐变,hexToRgb-十六进制颜色转rgb颜色,rgbToHex-rgb转十六进制
var __TEMP__ = require('./libs/function/colorGradient.js');var colorGradient = __REQUIRE_DEFAULT__(__TEMP__);
// 生成全局唯一guid字符串
var __TEMP__ = require('./libs/function/guid.js');var guid = __REQUIRE_DEFAULT__(__TEMP__);
// 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
var __TEMP__ = require('./libs/function/color.js');var color = __REQUIRE_DEFAULT__(__TEMP__);
// 根据type获取图标名称
var __TEMP__ = require('./libs/function/type2icon.js');var type2icon = __REQUIRE_DEFAULT__(__TEMP__);
// 打乱数组的顺序
var __TEMP__ = require('./libs/function/randomArray.js');var randomArray = __REQUIRE_DEFAULT__(__TEMP__);
// 对象和数组的深度克隆
var __TEMP__ = require('./libs/function/deepClone.js');var deepClone = __REQUIRE_DEFAULT__(__TEMP__);
// 对象深度拷贝
var __TEMP__ = require('./libs/function/deepMerge.js');var deepMerge = __REQUIRE_DEFAULT__(__TEMP__);
// 添加单位
var __TEMP__ = require('./libs/function/addUnit.js');var addUnit = __REQUIRE_DEFAULT__(__TEMP__);

// 规则检验
var __TEMP__ = require('./libs/function/test.js');var test = __REQUIRE_DEFAULT__(__TEMP__);
// 随机数
var __TEMP__ = require('./libs/function/random.js');var random = __REQUIRE_DEFAULT__(__TEMP__);
// 去除空格
var __TEMP__ = require('./libs/function/trim.js');var trim = __REQUIRE_DEFAULT__(__TEMP__);
// toast提示，对uni.showToast的封装
var __TEMP__ = require('./libs/function/toast.js');var toast = __REQUIRE_DEFAULT__(__TEMP__);
// 获取父组件参数
var __TEMP__ = require('./libs/function/getParent.js');var getParent = __REQUIRE_DEFAULT__(__TEMP__);
// 获取整个父组件
var __TEMP__ = require('./libs/function/$parent.js');var $parent = __REQUIRE_DEFAULT__(__TEMP__);
// 获取sys()和os()工具方法
// 获取设备信息，挂载到$u的sys()(system的缩写)属性中，
// 同时把安卓和ios平台的名称"ios"和"android"挂到$u.os()中，方便取用
var __TEMP__ = require('./libs/function/sys.js');var sys = __TEMP__['sys'];var os = __TEMP__['os'];
// 防抖方法
var __TEMP__ = require('./libs/function/debounce.js');var debounce = __REQUIRE_DEFAULT__(__TEMP__);
// 节流方法
var __TEMP__ = require('./libs/function/throttle.js');var throttle = __REQUIRE_DEFAULT__(__TEMP__);


// 配置信息
var __TEMP__ = require('./libs/config/config.js');var config = __REQUIRE_DEFAULT__(__TEMP__);
// 各个需要fixed的地方的z-index配置文件
var __TEMP__ = require('./libs/config/zIndex.js');var zIndex = __REQUIRE_DEFAULT__(__TEMP__);

const $u = {
	queryParams: queryParams,
	route: route,
	timeFormat: timeFormat,
	date: timeFormat, // 另名date
	timeFrom,
	colorGradient: colorGradient.colorGradient,
	colorToRgba: colorGradient.colorToRgba,
	guid,
	color,
	sys,
	os,
	type2icon,
	randomArray,
	wranning,
	get: http.get,
	post: http.post,
	put: http.put,
	'delete': http.delete,
	hexToRgb: colorGradient.hexToRgb,
	rgbToHex: colorGradient.rgbToHex,
	test,
	random,
	deepClone,
	deepMerge,
	getParent,
	$parent,
	addUnit,
	trim,
	type: ['primary', 'success', 'error', 'warning', 'info'],
	http,
	toast,
	config, // uView配置信息相关，比如版本号
	zIndex,
	debounce,
	throttle,
}

// $u挂载到uni对象上
uni.$u = $u

const install = Vue => {
	Vue.mixin(mixin) 
	if (Vue.prototype.openShare) {
		Vue.mixin(mpShare);
	}
	// Vue.mixin(vuexStore);
	// 时间格式化，同时两个名称，date和timeFormat
	Vue.filter('timeFormat', (timestamp, format) => {
		return timeFormat(timestamp, format)
	})
	Vue.filter('date', (timestamp, format) => {
		return timeFormat(timestamp, format)
	})
	// 将多久以前的方法，注入到全局过滤器
	Vue.filter('timeFrom', (timestamp, format) => {
		return timeFrom(timestamp, format)
	})
	Vue.prototype.$u = $u
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
	install
};
}, function(modId) {var map = {"./libs/mixin/mixin.js":1629271229772,"./libs/request":1629271229773,"./libs/function/queryParams.js":1629271229777,"./libs/function/route.js":1629271229778,"./libs/function/timeFormat.js":1629271229779,"./libs/function/timeFrom.js":1629271229780,"./libs/function/colorGradient.js":1629271229781,"./libs/function/guid.js":1629271229782,"./libs/function/color.js":1629271229783,"./libs/function/type2icon.js":1629271229784,"./libs/function/randomArray.js":1629271229785,"./libs/function/deepClone.js":1629271229775,"./libs/function/deepMerge.js":1629271229774,"./libs/function/addUnit.js":1629271229786,"./libs/function/test.js":1629271229776,"./libs/function/random.js":1629271229787,"./libs/function/trim.js":1629271229788,"./libs/function/toast.js":1629271229789,"./libs/function/getParent.js":1629271229790,"./libs/function/$parent.js":1629271229791,"./libs/function/sys.js":1629271229792,"./libs/function/debounce.js":1629271229793,"./libs/function/throttle.js":1629271229794,"./libs/config/config.js":1629271229795,"./libs/config/zIndex.js":1629271229796}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229772, function(require, module, exports) {
module.exports = {
	data() {
		return {}
	},
	onLoad() {
		// getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
		this.$u.getRect = this.$uGetRect
	},
	methods: {
		// 查询节点信息
		// 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
		// 解决办法为在组件根部再套一个没有任何作用的view元素
		$uGetRect(selector, all) {
			return new Promise(resolve => {
				uni.createSelectorQuery().
				in(this)[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect)
						}
						if (!all && rect) {
							resolve(rect)
						}
					})
					.exec()
			})
		},
		getParentData(parentName = '') {
			// 避免在created中去定义parent变量
			if(!this.parent) this.parent = false;
			// 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
			// 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
			// 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
			this.parent = this.$u.$parent.call(this, parentName);
			if(this.parent) {
				// 历遍parentData中的属性，将parent中的同名属性赋值给parentData
				Object.keys(this.parentData).map(key => {
					this.parentData[key] = this.parent[key];
				});
			}
		},
		// 阻止事件冒泡
		preventEvent(e) {
			e && e.stopPropagation && e.stopPropagation()
		}
	},
	onReachBottom() {
		uni.$emit('uOnReachBottom')
	},
	beforeDestroy() {
		// 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
		// 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
		if(this.parent && uni.$u.test.array(this.parent.children)) {
			// 组件销毁时，移除父组件中的children数组中对应的实例
			const childrenList = this.parent.children
			childrenList.map((child, index) => {
				// 如果相等，则移除
				if(child === this) {
					childrenList.splice(index, 1)
				}
			})
		}
	}
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229773, function(require, module, exports) {
var __TEMP__ = require('../function/deepMerge');var deepMerge = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../function/test');var validate = __REQUIRE_DEFAULT__(__TEMP__);
class Request {
	// 设置全局默认配置
	setConfig(customConfig) {
		// 深度合并对象，否则会造成对象深层属性丢失
		this.config = deepMerge(this.config, customConfig);
	}

	// 主要请求部分
	request(options = {}) {
		// 检查请求拦截
		if (this.interceptor.request && typeof this.interceptor.request === 'function') {
			let tmpConfig = {};
			let interceptorRequest = this.interceptor.request(options);
			if (interceptorRequest === false) {
				// 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
				return new Promise(()=>{});
			}
			this.options = interceptorRequest;
		}
		options.dataType = options.dataType || this.config.dataType;
		options.responseType = options.responseType || this.config.responseType;
		options.url = options.url || '';
		options.params = options.params || {};
		options.header = Object.assign({}, this.config.header, options.header);
		options.method = options.method || this.config.method;

		return new Promise((resolve, reject) => {
			options.complete = (response) => {
				// 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
				uni.hideLoading();
				// 清除定时器，如果请求回来了，就无需loading
				clearTimeout(this.config.timer);
				this.config.timer = null;
				// 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
				if(this.config.originalData) {
					// 判断是否存在拦截器
					if (this.interceptor.response && typeof this.interceptor.response === 'function') {
						let resInterceptors = this.interceptor.response(response);
						// 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
						if (resInterceptors !== false) {
							resolve(resInterceptors);
						} else {
							// 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
							reject(response);
						}
					} else {
						// 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
						resolve(response);
					}
				} else {
					if (response.statusCode == 200) {
						if (this.interceptor.response && typeof this.interceptor.response === 'function') {
							let resInterceptors = this.interceptor.response(response.data);
							if (resInterceptors !== false) {
								resolve(resInterceptors);
							} else {
								reject(response.data);
							}
						} else {
							// 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
							resolve(response.data);
						}
					} else {
						// 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
						// if(response.errMsg) {
						// 	uni.showModal({
						// 		title: response.errMsg
						// 	});
						// }
						reject(response)
					}
				}
			}

			// 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
			options.url = validate.url(options.url) ? options.url : (this.config.baseUrl + (options.url.indexOf('/') == 0 ?
				options.url : '/' + options.url));
			
			// 是否显示loading
			// 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
			// 而没有清除前者的定时器，导致前者超时，一直显示loading
			if(this.config.showLoading && !this.config.timer) {
				this.config.timer = setTimeout(() => {
					uni.showLoading({
						title: this.config.loadingText,
						mask: this.config.loadingMask
					})
					this.config.timer = null;
				}, this.config.loadingTime);
			}
			uni.request(options);
		})
		// .catch(res => {
		// 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
		// 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
		// 	return new Promise(()=>{});
		// })
	}

	constructor() {
		this.config = {
			baseUrl: '', // 请求的根域名
			// 默认的请求头
			header: {},
			method: 'POST',
			// 设置为json，返回后uni.request会对数据进行一次JSON.parse
			dataType: 'json',
			// 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
			responseType: 'text',
			showLoading: true, // 是否显示请求中的loading
			loadingText: '请求中...',
			loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
			timer: null, // 定时器
			originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
			loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		}
	
		// 拦截器
		this.interceptor = {
			// 请求前的拦截
			request: null,
			// 请求后的拦截
			response: null
		}

		// get请求
		this.get = (url, data = {}, header = {}) => {
			return this.request({
				method: 'GET',
				url,
				header,
				data
			})
		}

		// post请求
		this.post = (url, data = {}, header = {}) => {
			return this.request({
				url,
				method: 'POST',
				header,
				data
			})
		}
		
		// put请求，不支持支付宝小程序(HX2.6.15)
		this.put = (url, data = {}, header = {}) => {
			return this.request({
				url,
				method: 'PUT',
				header,
				data
			})
		}
		
		// delete请求，不支持支付宝和头条小程序(HX2.6.15)
		this.delete = (url, data = {}, header = {}) => {
			return this.request({
				url,
				method: 'DELETE',
				header,
				data
			})
		}
	}
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = new Request;

}, function(modId) { var map = {"../function/deepMerge":1629271229774,"../function/test":1629271229776}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229774, function(require, module, exports) {
var __TEMP__ = require('./deepClone');var deepClone = __REQUIRE_DEFAULT__(__TEMP__);

// JS对象深度合并
function deepMerge(target = {}, source = {}) {
	target = deepClone(target);
	if (typeof target !== 'object' || typeof source !== 'object') return false;
	for (var prop in source) {
		if (!source.hasOwnProperty(prop)) continue;
		if (prop in target) {
			if (typeof target[prop] !== 'object') {
				target[prop] = source[prop];
			} else {
				if (typeof source[prop] !== 'object') {
					target[prop] = source[prop];
				} else {
					if (target[prop].concat && source[prop].concat) {
						target[prop] = target[prop].concat(source[prop]);
					} else {
						target[prop] = deepMerge(target[prop], source[prop]);
					}
				}
			}
		} else {
			target[prop] = source[prop];
		}
	}
	return target;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = deepMerge;
}, function(modId) { var map = {"./deepClone":1629271229775}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229775, function(require, module, exports) {
// 判断arr是否为一个数组，返回一个bool值
function isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone (obj) {
	// 对常见的“非”值，直接返回原来值
	if([null, undefined, NaN, false].includes(obj)) return obj;
    if(typeof obj !== "object" && typeof obj !== 'function') {
		//原始类型直接返回
        return obj;
    }
    var o = isArray(obj) ? [] : {};
    for(let i in obj) {
        if(obj.hasOwnProperty(i)){
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = deepClone;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229776, function(require, module, exports) {
/**
 * 验证电子邮箱格式
 */
function email(value) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
	return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
function url(value) {
	return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 */
function date(value) {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
	return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
function number(value) {
	return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
function digits(value) {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
function idCard(value) {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value)
}

/**
 * 是否车牌号
 */
function carNo(value) {
	// 新能源车牌
	const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
	// 旧车牌
	const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
	if (value.length === 7) {
		return creg.test(value);
	} else if (value.length === 8) {
		return xreg.test(value);
	} else {
		return false;
	}
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
	let reg = /^[\u4e00-\u9fa5]+$/gi;
	return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
	return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
function landline(value) {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
	return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}


/**
 * 是否数组
 */
function array(value) {
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/**
 * 是否对象
 */
function object(value) {
	return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value, len = 6) {
	return new RegExp(`^\\d{${len}}$`).test(value);
}


if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
	email,
	mobile,
	url,
	date,
	dateISO,
	number,
	digits,
	idCard,
	carNo,
	amount,
	chinese,
	letter,
	enOrNum,
	contains,
	range,
	rangeLength,
	empty,
	isEmpty: empty,
	jsonString,
	landline,
	object,
	array,
	code
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229777, function(require, module, exports) {
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
	let prefix = isPrefix ? '?' : ''
	let _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
	for (let key in data) {
		let value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue;
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(key + '[' + i + ']=' + value[i])
					}
					break;
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
					break;
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach(_value => {
						_result.push(key + '=' + _value)
					})
					break;
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = "";
					value.forEach(_value => {
						commaStr += (commaStr ? "," : "") + _value;
					})
					_result.push(key + '=' + commaStr)
					break;
				default:
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
			}
		} else {
			_result.push(key + '=' + value)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = queryParams;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229778, function(require, module, exports) {
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */

class Router {
	constructor() {
		// 原始属性定义
		this.config = {
			type: 'navigateTo',
			url: '',
			delta: 1, // navigateBack页面后退时,回退的层数
			params: {}, // 传递的参数
			animationType: 'pop-in', // 窗口动画,只在APP有效
			animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
			intercept: false, // 是否需要拦截
		}
		// 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
		// 这里在构造函数中进行this绑定
		this.route = this.route.bind(this)
	}

	// 判断url前面是否有"/"，如果没有则加上，否则无法跳转
	addRootPath(url) {
		return url[0] === '/' ? url : `/${url}`
	}

	// 整合路由参数
	mixinParam(url, params) {
		url = url && this.addRootPath(url)
		
		// 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
		// 如果有url中有get参数，转换后无需带上"?"
		let query = ''
		if (/.*\/.*\?.*=.*/.test(url)) {
			// object对象转为get类型的参数
			query = uni.$u.queryParams(params, false);
			// 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
			return url += "&" + query
		} else {
			// 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
			query = uni.$u.queryParams(params);
			return url += query
		}
	}

	// 对外的方法名称
	async route(options = {}, params = {}) {
		// 合并用户的配置和内部的默认配置
		let mergeConfig = {}

		if (typeof options === 'string') {
			// 如果options为字符串，则为route(url, params)的形式
			mergeConfig.url = this.mixinParam(options, params)
			mergeConfig.type = 'navigateTo'
		} else {
			mergeConfig = uni.$u.deepClone(options, this.config)
			// 否则正常使用mergeConfig中的url和params进行拼接
			mergeConfig.url = this.mixinParam(options.url, options.params)
		}
		
		if(params.intercept) {
			this.config.intercept = params.intercept
		}
		// params参数也带给拦截器
		mergeConfig.params = params
		// 合并内外部参数
		mergeConfig = uni.$u.deepMerge(this.config, mergeConfig)
		// 判断用户是否定义了拦截器
		if (typeof uni.$u.routeIntercept === 'function') {
			// 定一个promise，根据用户执行resolve(true)或者resolve(false)来决定是否进行路由跳转
			const isNext = await new Promise((resolve, reject) => {
				uni.$u.routeIntercept(mergeConfig, resolve)
			})
			// 如果isNext为true，则执行路由跳转
			isNext && this.openPage(mergeConfig)
		} else {
			this.openPage(mergeConfig)
		}
	}

	// 执行路由跳转
	openPage(config) {
		// 解构参数
		const {
			url,
			type,
			delta,
			animationType,
			animationDuration
		} = config
		if (config.type == 'navigateTo' || config.type == 'to') {
			uni.navigateTo({
				url,
				animationType,
				animationDuration
			});
		}
		if (config.type == 'redirectTo' || config.type == 'redirect') {
			uni.redirectTo({
				url
			});
		}
		if (config.type == 'switchTab' || config.type == 'tab') {
			uni.switchTab({
				url
			});
		}
		if (config.type == 'reLaunch' || config.type == 'launch') {
			uni.reLaunch({
				url
			});
		}
		if (config.type == 'navigateBack' || config.type == 'back') {
			uni.navigateBack({
				delta
			});
		}
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = (new Router()).route;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229779, function(require, module, exports) {
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
	// 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
	String.prototype.padStart = function(maxLength, fillString = ' ') {
		if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
			'fillString must be String')
		let str = this
		// 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
		if (str.length >= maxLength) return String(str)

		let fillLength = maxLength - str.length,
			times = Math.ceil(fillLength / fillString.length)
		while (times >>= 1) {
			fillString += fillString
			if (times === 1) {
				fillString += fillString
			}
		}
		return fillString.slice(0, fillLength) + str;
	}
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat(dateTime = null, fmt = 'yyyy-mm-dd') {
	// 如果为null,则格式化当前时间
	if (!dateTime) dateTime = Number(new Date());
	// 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
	if (dateTime.toString().length == 10) dateTime *= 1000;
	let date = new Date(dateTime);
	let ret;
	let opt = {
		"y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"h+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"s+": date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = timeFormat;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229780, function(require, module, exports) {
var __TEMP__ = require('../../libs/function/timeFormat.js');var timeFormat = __REQUIRE_DEFAULT__(__TEMP__);

/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom(dateTime = null, format = 'yyyy-mm-dd') {
	// 如果为null,则格式化当前时间
	if (!dateTime) dateTime = Number(new Date());
	// 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
	if (dateTime.toString().length == 10) dateTime *= 1000;
	let timestamp = + new Date(Number(dateTime));

	let timer = (Number(new Date()) - timestamp) / 1000;
	// 如果小于5分钟,则返回"刚刚",其他以此类推
	let tips = '';
	switch (true) {
		case timer < 300:
			tips = '刚刚';
			break;
		case timer >= 300 && timer < 3600:
			tips = parseInt(timer / 60) + '分钟前';
			break;
		case timer >= 3600 && timer < 86400:
			tips = parseInt(timer / 3600) + '小时前';
			break;
		case timer >= 86400 && timer < 2592000:
			tips = parseInt(timer / 86400) + '天前';
			break;
		default:
			// 如果format为false，则无论什么时间戳，都显示xx之前
			if(format === false) {
				if(timer >= 2592000 && timer < 365 * 86400) {
					tips = parseInt(timer / (86400 * 30)) + '个月前';
				} else {
					tips = parseInt(timer / (86400 * 365)) + '年前';
				}
			} else {
				tips = timeFormat(timestamp, format);
			}
	}
	return tips;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = timeFrom;

}, function(modId) { var map = {"../../libs/function/timeFormat.js":1629271229779}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229781, function(require, module, exports) {
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient(startColor = 'rgb(0, 0, 0)', endColor = 'rgb(255, 255, 255)', step = 10) {
	let startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
	let startR = startRGB[0];
	let startG = startRGB[1];
	let startB = startRGB[2];

	let endRGB = hexToRgb(endColor, false);
	let endR = endRGB[0];
	let endG = endRGB[1];
	let endB = endRGB[2];

	let sR = (endR - startR) / step; //总差值
	let sG = (endG - startG) / step;
	let sB = (endB - startB) / step;
	let colorArr = [];
	for (let i = 0; i < step; i++) {
		//计算每一步的hex值 
		let hex = rgbToHex('rgb(' + Math.round((sR * i + startR)) + ',' + Math.round((sG * i + startG)) + ',' + Math.round((sB *
			i + startB)) + ')');
		colorArr.push(hex);
	}
	return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor, str = true) {
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	sColor = sColor.toLowerCase();
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			let sColorNew = "#";
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值
		let sColorChange = [];
		for (let i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
		}
		if(!str) {
			return sColorChange;
		} else {
			return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
		}
	} else if (/^(rgb|RGB)/.test(sColor)) {
		let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
		return arr.map(val => Number(val));
	} else {
		return sColor;
	}
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
	let _this = rgb;
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	if (/^(rgb|RGB)/.test(_this)) {
		let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
		let strHex = "#";
		for (let i = 0; i < aColor.length; i++) {
			let hex = Number(aColor[i]).toString(16);
			hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
			if (hex === "0") {
				hex += hex;
			}
			strHex += hex;
		}
		if (strHex.length !== 7) {
			strHex = _this;
		}
		return strHex;
	} else if (reg.test(_this)) {
		let aNum = _this.replace(/#/, "").split("");
		if (aNum.length === 6) {
			return _this;
		} else if (aNum.length === 3) {
			let numHex = "#";
			for (let i = 0; i < aNum.length; i += 1) {
				numHex += (aNum[i] + aNum[i]);
			}
			return numHex;
		}
	} else {
		return _this;
	}
}


/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color, alpha = 0.3) {
	color = rgbToHex(color)
	// 十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
	/* 16进制颜色转为RGB格式 */
	let sColor = color.toLowerCase()
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			var sColorNew = '#'
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
			}
			sColor = sColorNew
		}
		// 处理六位的颜色值
		var sColorChange = []
		for (let i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
		}
		// return sColorChange.join(',')
		return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
	} 
	else {
		return sColor
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
	colorGradient,
	hexToRgb,
	rgbToHex,
	colorToRgba
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229782, function(require, module, exports) {
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid(len = 32, firstU = true, radix = null) {
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	let uuid = [];
	radix = radix || chars.length;

	if (len) {
		// 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
		for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {
		let r;
		// rfc4122标准要求返回的uuid中,某些位为固定的字符
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';

		for (let i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	// 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
	if (firstU) {
		uuid.shift();
		return 'u' + uuid.join('');
	} else {
		return uuid.join('');
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = guid;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229783, function(require, module, exports) {
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
let color = {
	primary: "#2979ff",
	primaryDark: "#2b85e4",
	primaryDisabled: "#a0cfff",
	primaryLight: "#ecf5ff",
	bgColor: "#f3f4f6",
	
	info: "#909399",
	infoDark: "#82848a",
	infoDisabled: "#c8c9cc",
	infoLight: "#f4f4f5",
	
	warning: "#ff9900",
	warningDark: "#f29100",
	warningDisabled: "#fcbd71",
	warningLight: "#fdf6ec",
	
	error: "#fa3534",
	errorDark: "#dd6161",
	errorDisabled: "#fab6b6",
	errorLight: "#fef0f0",
	
	success: "#19be6b",
	successDark: "#18b566",
	successDisabled: "#71d5a1",
	successLight: "#dbf1e1",
	
	mainColor: "#303133",
	contentColor: "#606266",
	tipsColor: "#909399",
	lightColor: "#c0c4cc",
	borderColor: "#e4e7ed"
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = color;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229784, function(require, module, exports) {
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon(type = 'success', fill = false) {
	// 如果非预置值,默认为success
	if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
	let iconName = '';
	// 目前(2019-12-12),info和primary使用同一个图标
	switch (type) {
		case 'primary':
			iconName = 'info-circle';
			break;
		case 'info':
			iconName = 'info-circle';
			break;
		case 'error':
			iconName = 'close-circle';
			break;
		case 'warning':
			iconName = 'error-circle';
			break;
		case 'success':
			iconName = 'checkmark-circle';
			break;
		default:
			iconName = 'checkmark-circle';
	}
	// 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
	if (fill) iconName += '-fill';
	return iconName;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = type2icon;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229785, function(require, module, exports) {
// 打乱数组
function randomArray(array = []) {
	// 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
	return array.sort(() => Math.random() - 0.5);
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = randomArray;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229786, function(require, module, exports) {
var __TEMP__ = require('./test.js');var validation = __REQUIRE_DEFAULT__(__TEMP__);

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function addUnit(value = 'auto', unit = 'rpx') {
    value = String(value);
	// 用uView内置验证规则中的number判断是否为数值
    return validation.number(value) ? `${value}${unit}` : value;
};exports.default = addUnit
}, function(modId) { var map = {"./test.js":1629271229776}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229787, function(require, module, exports) {
function random(min, max) {
	if (min >= 0 && max > 0 && max >= min) {
		let gab = max - min + 1;
		return Math.floor(Math.random() * gab + min);
	} else {
		return 0;
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = random;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229788, function(require, module, exports) {
function trim(str, pos = 'both') {
	if (pos == 'both') {
		return str.replace(/^\s+|\s+$/g, "");
	} else if (pos == "left") {
		return str.replace(/^\s*/, '');
	} else if (pos == 'right') {
		return str.replace(/(\s*$)/g, "");
	} else if (pos == 'all') {
		return str.replace(/\s+/g, "");
	} else {
		return str;
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = trim;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229789, function(require, module, exports) {
function toast(title, duration = 1500) {
	uni.showToast({
		title: title,
		icon: 'none',
		duration: duration
	})
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = toast;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229790, function(require, module, exports) {
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function getParent(name, keys) {
	let parent = this.$parent;
	// 通过while历遍，这里主要是为了H5需要多层解析的问题
	while (parent) {
		// 父组件
		if (parent.$options.name !== name) {
			// 如果组件的name不相等，继续上一级寻找
			parent = parent.$parent;
		} else {
			let data = {};
			// 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
			if(Array.isArray(keys)) {
				keys.map(val => {
					data[val] = parent[val] ? parent[val] : '';
				})
			} else {
				// 历遍传过来的对象参数
				for(let i in keys) {
					// 如果子组件有此值则用，无此值则用父组件的值
					// 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
					if(Array.isArray(keys[i])) {
						if(keys[i].length) {
							data[i] = keys[i];
						} else {
							data[i] = parent[i];
						}
					} else if(keys[i].constructor === Object) {
						// 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
						if(Object.keys(keys[i]).length) {
							data[i] = keys[i];
						} else {
							data[i] = parent[i];
						}
					} else {
						// 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
						data[i] = (keys[i] || keys[i] === false) ? keys[i] : parent[i];
					}
				}
			}
			return data;
		}
	}

	return {};
};exports.default = getParent
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229791, function(require, module, exports) {
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function $parent(name = undefined) {
	let parent = this.$parent;
	// 通过while历遍，这里主要是为了H5需要多层解析的问题
	while (parent) {
		// 父组件
		if (parent.$options && parent.$options.name !== name) {
			// 如果组件的name不相等，继续上一级寻找
			parent = parent.$parent;
		} else {
			return parent;
		}
	}
	return false;
};exports.default = $parent
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229792, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function os() {
	return uni.getSystemInfoSync().platform;
};exports.os = os;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function sys() {
	return uni.getSystemInfoSync();
};exports.sys = sys



}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229793, function(require, module, exports) {
let timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
	// 清除定时器
	if (timeout !== null) clearTimeout(timeout);
	// 立即执行，此类情况一般用不到
	if (immediate) {
		var callNow = !timeout;
		timeout = setTimeout(function() {
			timeout = null;
		}, wait);
		if (callNow) typeof func === 'function' && func();
	} else {
		// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
		timeout = setTimeout(function() {
			typeof func === 'function' && func();
		}, wait);
	}
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = debounce;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229794, function(require, module, exports) {
let timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
	if (immediate) {
		if (!flag) {
			flag = true;
			// 如果是立即执行，则在wait毫秒内开始时执行
			typeof func === 'function' && func();
			timer = setTimeout(() => {
				flag = false;
			}, wait);
		}
	} else {
		if (!flag) {
			flag = true
			// 如果是非立即执行，则在wait毫秒内的结束处执行
			timer = setTimeout(() => {
				flag = false
				typeof func === 'function' && func();
			}, wait);
		}
		
	}
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = throttle;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229795, function(require, module, exports) {
// 此版本发布于2020-12-17
let version = '1.8.3';

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
	v: version,
	version: version,
	// 主题名称
	type: [
		'primary',
		'success',
		'info',
		'error',
		'warning'
	]
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1629271229796, function(require, module, exports) {
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
	toast: 10090,
	noNetwork: 10080,
	// popup包含popup，actionsheet，keyboard，picker的值
	popup: 10075,
	mask: 10070,
	navbar: 980,
	topTips: 975,
	sticky: 970,
	indexListSticky: 965,
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1629271229771);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map