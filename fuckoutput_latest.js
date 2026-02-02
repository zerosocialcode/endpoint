
// ==UserScript==
// @name         fuck nimbus code
// @namespace    http://tampermonkey.net/
// @version      29-01-2026 USER Loader
// @description  Advanced IVAC automation system
// @author       System Administrator
// @match        https://*.ivacbd.com/*
// @run-at       document-end
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      payment.ivacbd.com
// @connect      api.capmonster.cloud
// @connect      challenges.cloudflare.com
// @connect      api.apitruecaptcha.org
// @connect      api.2captcha.com
// @connect      sms-user.vercel.app
// @connect      worldtimeapi.org
// @connect      timeapi.io
// @connect      web-production-49435.up.railway.app
// @noframes
// ==/UserScript==

(function () {
  const _var1 = window.fetch;
  window.fetch = function (_var2, _var3 = {}) {
    const _var4 = typeof _var2 === "string" ? _var2 : _var2 instanceof Request ? _var2.url : _var2.toString();
    const _var5 = _var4.includes("api.capmonster.cloud") || _var4.includes("2captcha.com") || _var4.includes("api.apitruecaptcha.org") || _var4.includes("sms-user.vercel.app") || _var4.includes("worldtimeapi.org") || _var4.includes("timeapi.io");
    if (_var5) {
      return new Promise((_var6, _var7) => {
        const _var8 = [];
        if (_var3.headers) {
          if (_var3.headers instanceof Headers) {
            _var3.headers.forEach((_var9, _var10) => {
              _var8.push({
                name: _var10,
                value: _var9
              });
            });
          } else if (typeof _var3.headers === "object") {
            for (const _var11 in _var3.headers) {
              if (_var3.headers.hasOwnProperty(_var11)) {
                _var8.push({
                  name: _var11,
                  value: _var3.headers[_var11]
                });
              }
            }
          }
        }
        if (_var3.body && typeof _var3.body === "string" && !_var8.find(_var12 => _var12.name.toLowerCase() === "content-type")) {
          _var8.push({
            name: "Content-Type",
            value: "application/json"
          });
        }
        const _var13 = {
          method: _var3.method || "GET",
          url: _var4,
          headers: _var8.length > 0 ? _var8 : undefined,
          data: _var3.body || undefined,
          onload: function (_var14) {
            const _var15 = new Headers();
            if (_var14.responseHeaders) {
              if (typeof _var14.responseHeaders === "string") {
                const _var16 = _var14.responseHeaders.split("\r\n");
                _var16.forEach(_var17 => {
                  const _var18 = _var17.indexOf(":");
                  if (_var18 > 0) {
                    const _var19 = _var17.substring(0, _var18).trim();
                    const _var20 = _var17.substring(_var18 + 1).trim();
                    _var15.append(_var19, _var20);
                  }
                });
              } else if (Array.isArray(_var14.responseHeaders)) {
                _var14.responseHeaders.forEach(_var21 => {
                  if (_var21 && _var21.name && _var21.value) {
                    _var15.append(_var21.name, _var21.value);
                  }
                });
              } else if (typeof _var14.responseHeaders === "object") {
                for (const _var22 in _var14.responseHeaders) {
                  if (_var14.responseHeaders.hasOwnProperty(_var22)) {
                    _var15.append(_var22, _var14.responseHeaders[_var22]);
                  }
                }
              }
            }
            const _var23 = {
              ok: _var14.status >= 200 && _var14.status < 300,
              status: _var14.status,
              statusText: _var14.statusText || "",
              headers: _var15,
              url: _var4,
              json: function () {
                try {
                  return Promise.resolve(JSON.parse(_var14.responseText));
                } catch (_var24) {
                  return Promise.reject(new Error("Invalid JSON"));
                }
              },
              text: function () {
                return Promise.resolve(_var14.responseText || "");
              },
              blob: function () {
                return Promise.resolve(new Blob([_var14.responseText]));
              },
              arrayBuffer: function () {
                const _var25 = new TextEncoder();
                return Promise.resolve(_var25.encode(_var14.responseText).buffer);
              },
              clone: function () {
                return this;
              }
            };
            _var6(_var23);
          },
          onerror: function (_var26) {
            _var7(new TypeError("Failed to fetch"));
          },
          ontimeout: function () {
            _var7(new TypeError("Request timeout"));
          }
        };
        GM_xmlhttpRequest(_var13);
      });
    }
    return _var1.apply(this, arguments);
  };
})();
(function () {
  'use strict';
function LS(key, def) {
  const v = localStorage.getItem(key);
  if (v === null || v === "") {
    localStorage.setItem(key, def);
    return def;
  }
  return v;
}


const _var28 = LS("_var28", "50de9bb1de6038f8c24ac9cad81ec103");
const _var29 = LS("_var29", "8b4c3386745e9f30aa62b24459233da2");
const _var30 = LS("_var30", "ivac_twocaptcha_api_key");
const _var31 = LS("_var31", "7v9vkACXhMOeeUyv4lrl");
const _var32 = LS("_var32", "Nazmul");
const _var33 = LS("_var33", "ivac_truecaptcha_api_key");
const _var34 = LS("_var34", "ivac_truecaptcha_userid");
const _var35 = LS("_var35", "ivac_image_captcha_enabled_paynow");

  const _var27 = 1;
  
  

 



  const _var36 = "0x4AAAAAABpNUpzYeppBoYpe";
  const _var37 = "https://payment.ivacbd.com";
  const _var38 = "ivac_retry_delay_seconds";
  const _var39 = "ivac_auto_retry_enabled";
  const _var40 = "ivac_auto_process_enabled";
  const _var41 = "ivac_login_retry_delay_seconds";
  const _var42 = "ivac_login_auto_retry_enabled";
  const _var43 = "ivac_login_auto_process_enabled";
  const _var44 = "ivac_submit_retry_delay_seconds";
  const _var45 = "ivac_submit_auto_retry_enabled";
  const _var46 = "ivac_submit_auto_process_enabled";
  const _var47 = "ivac_send_otp_hit_delay";
  const _var48 = "ivac_payment_vfy_hit_delay";
  const _var49 = "ivac_get_slot_hit_delay";
  const _var50 = "ivac_auto_vfy_hit_delay";
  const _var51 = "ivac_pay_now_hit_delay";
  const _var52 = "ivac_application_hit_delay";
  const _var53 = "ivac_overview_hit_delay";
  const _var54 = 20;
  const _var55 = 3;
  const _var56 = 10;
  const _var57 = 15;
  const _var58 = 10;
  const _var59 = 3;
  const _var60 = 50;
  const _var61 = 3;
  const _var62 = false;
  const _var63 = false;
  const _var64 = 30;
  const _var65 = "cloud_token";
  const _var66 = "cloud_token_ts";
  const _var67 = "ivac_application_turnstile_token";
  const _var68 = "ivac___device_id___token";
  const _var69 = "ivac___device_id___token_ts";
  const _var70 = 120000;
  const _var71 = "ivac_application_turnstile_token_ts";
  const _var72 = 150000;
  const _var73 = 150000;
  const _var74 = 15;
  const _var75 = _var74;
  const _var76 = _var74;
  const _var77 = 5;
  const _var78 = "ivac_capmonster_api_key";
  let _var79 = null;
  const _var80 = {
    default: {
      turnstile: _var36
    },
    steps: {},
    getSiteKey: function (_var81, _var82 = "turnstile") {
      if (this.steps[_var81] && this.steps[_var81][_var82]) {
        return this.steps[_var81][_var82];
      }
      return this.getDefaultKey(_var81, _var82);
    },
    setSiteKey: function (_var83, _var84, _var85) {
      if (!this.steps[_var83]) {
        this.steps[_var83] = {};
      }
      this.steps[_var83][_var84] = _var85;
      this.saveToStorage();
    },
    resetToDefault: function (_var86, _var87) {
      if (this.steps[_var86] && this.steps[_var86][_var87]) {
        delete this.steps[_var86][_var87];
        this.saveToStorage();
      }
    },
    getDefaultKey: function (_var88, _var89 = "turnstile") {
      if ((_var88 === "mobile-verify" || _var88 === "login" || _var88 === "login-otp") && _var89 === "turnstile") {
        return "0x4AAAAAABpNUpzYeppBoYpe";
      }
      if ((_var88 === "payment/application-info-submit" || _var88 === "payment/personal-info-submit" || _var88 === "payment/overview-submit" || _var88 === "payment/pay-otp-sent" || _var88 === "payment/pay-otp-verify" || _var88 === "payment/pay-slot-time") && _var89 === "turnstile") {
        return "0x4AAAAAABvQ3Mi6RktCuZ7P";
      }
      if (_var88 === "payment/pay-now" && _var89 === "turnstile") {
        return "0x4AAAAAABvQ3Mi6RktCuZ7P";
      }
      return this.default.turnstile || _var36;
    },
    resetAllToDefault: function () {
      this.steps = {};
      this.saveToStorage();
    },
    saveToStorage: function () {
      try {
        GM_setValue("site_key_config", JSON.stringify({
          steps: this.steps
        }));
      } catch (_var90) {}
    },
    loadFromStorage: function () {
      try {
        const _var91 = GM_getValue("site_key_config", null);
        if (_var91) {
          const _var92 = JSON.parse(_var91);
          if (_var92.steps) {
            this.steps = _var92.steps;
          }
        }
      } catch (_var93) {}
    },
    forceReload: function () {
      this.loadFromStorage();
    },
    getDefaultSteps: function () {
      return {
        "mobile-verify": {
          turnstile: "0x4AAAAAABpNUpzYeppBoYpe"
        },
        login: {
          turnstile: "0x4AAAAAABpNUpzYeppBoYpe"
        },
        "login-otp": {
          turnstile: "0x4AAAAAABpNUpzYeppBoYpe"
        },
        "payment/application-info-submit": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/personal-info-submit": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/overview-submit": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/pay-otp-sent": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/pay-otp-verify": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/pay-slot-time": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        },
        "payment/pay-now": {
          turnstile: "0x4AAAAAABvQ3Mi6RktCuZ7P"
        }
      };
    },
    initializeDefaults: function () {
      const _var94 = GM_getValue("site_key_config", null);
      if (!_var94) {
        this.steps = this.getDefaultSteps();
        this.saveToStorage();
      } else {
        this.loadFromStorage();
      }
    },
    exportToJSON: function () {
      const _var95 = this.getDefaultSteps();
      Object.keys(_var95).forEach(_var96 => {
        _var95[_var96] = {
          turnstile: this.getSiteKey(_var96, "turnstile")
        };
      });
      return {
        steps: _var95,
        default: this.default
      };
    },
    importFromJSON: function (_var97) {
      if (_var97.steps) {
        this.steps = _var97.steps;
      }
      if (_var97.default) {
        this.default = _var97.default;
      }
      this.saveToStorage();
    },
    resetAll: function () {
      this.steps = {};
      this.saveToStorage();
    }
  };
  _var80.initializeDefaults();
  const _var98 = {
    baseUrl: "https://payment.ivacbd.com",
    apiVersion: "v2",
    endpoints: {
      "mobile-verify": {
        path: "/api/v2/mobile-verify",
        method: "POST",
        description: "Mobile verification endpoint",
        requiresAuth: false,
        requiresCaptcha: true,
        payload: {
          mobile_no: "",
          captcha_token: ""
        },
        requiredFields: ["mobile_no"],
        optionalFields: ["captcha_token"],
        fieldMappings: {
          mobile_no: "dynamicData.personalInfo.phone"
        }
      },
      login: {
        path: "/api/v2/login",
        method: "POST",
        description: "Login with password",
        requiresAuth: false,
        requiresCaptcha: true,
        payload: {
          mobile_no: "",
          password: "",
          captcha_token: ""
        },
        requiredFields: ["mobile_no", "password"],
        optionalFields: ["captcha_token"],
        fieldMappings: {
          mobile_no: "dynamicData.personalInfo.phone",
          password: "dynamicData.personalInfo.password"
        }
      },
      "login-otp": {
        path: "/api/v2/login-otp",
        method: "POST",
        description: "Login with OTP",
        requiresAuth: false,
        requiresCaptcha: true,
        payload: {
          mobile_no: "",
          password: "",
          otp: "",
          captcha_token: ""
        },
        requiredFields: ["mobile_no", "password", "otp"],
        optionalFields: ["captcha_token"],
        fieldMappings: {
          mobile_no: "dynamicData.personalInfo.phone",
          password: "dynamicData.personalInfo.password",
          otp: "document.getElementById(\"ivac-login-otp\")?.value?.trim()"
        }
      },
      "application-info-submit": {
        path: "/api/v2/payment/application-r5s7h3-submit-hyju6t",
        method: "POST",
        description: "Submit application information",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          highcom: "",
          webfile_id: "",
          webfile_id_repeat: "",
          ivac_id: "",
          visa_type: "",
          family_count: "",
          asweoi_erilfs: "",
          y6e7uk_token_t6d8n3: ""
        },
        requiredFields: ["highcom", "webfile_id", "webfile_id_repeat", "ivac_id", "visa_type", "family_count", "visit_purpose"],
        optionalFields: ["y6e7uk_token_t6d8n3"],
        fieldMappings: {
          highcom: "dynamicData.applicationInfo.highcom",
          webfile_id: "dynamicData.applicationInfo.webFileId",
          webfile_id_repeat: "dynamicData.applicationInfo.webFileId",
          ivac_id: "dynamicData.applicationInfo.ivacId",
          visa_type: "dynamicData.applicationInfo.visaTypeId",
          family_count: "dynamicData.applicationInfo.familyCount",
          asweoi_erilfs: "dynamicData.applicationInfo.visitPurpose",
          y6e7uk_token_t6d8n3: "dynamicData.captchaToken"
        }
      },
      "personal-info-submit": {
        path: "/api/v2/payment/personal-info-submit",
        method: "POST",
        description: "Submit personal information",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          full_name: "",
          email_name: "",
          phone: "",
          webfile_id: "",
          family: {},
          captcha_token: ""
        },
        requiredFields: ["full_name", "webfile_id"],
        optionalFields: ["email_name", "phone", "family", "captcha_token"],
        fieldMappings: {
          full_name: "dynamicData.personalInfo.fullName",
          email_name: "dynamicData.personalInfo.email",
          phone: "dynamicData.personalInfo.phone",
          webfile_id: "dynamicData.personalInfo.webFileId",
          family: "buildFamilyObject()"
        }
      },
      "overview-submit": {
        path: "/api/v2/payment/overview-submit",
        method: "POST",
        description: "Submit overview information",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          captcha_token: ""
        },
        requiredFields: [],
        optionalFields: ["captcha_token"]
      },
      "pay-otp-sent": {
        path: "/api/v2/payment/pay-otp-sent",
        method: "POST",
        description: "Send payment OTP",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          resend: 0,
          captcha_token: ""
        },
        requiredFields: [],
        optionalFields: ["resend", "captcha_token"],
        fieldMappings: {
          resend: "resend ? 1 : 0"
        }
      },
      "pay-otp-verify": {
        path: "/api/v2/payment/pay-otp-verify",
        method: "POST",
        description: "Verify payment OTP",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          otp: "",
          captcha_token: ""
        },
        requiredFields: ["otp"],
        optionalFields: ["captcha_token"],
        fieldMappings: {
          otp: "document.getElementById(\"ivac-pay-otp-input\")?.value"
        }
      },
      "pay-slot-time": {
        path: "/api/v2/payment/pay-slot-time",
        method: "POST",
        description: "Get slot times",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          appointment_date: "",
          captcha_token: ""
        },
        requiredFields: ["appointment_date"],
        optionalFields: ["captcha_token"],
        fieldMappings: {
          appointment_date: "document.getElementById(\"ivac-date-input\")?.value"
        }
      },
      "pay-now": {
        path: "/api/v2/payment/h7j3wt-now-y0k3d6",
        method: "POST",
        description: "Process payment",
        requiresAuth: true,
        requiresCaptcha: true,
        payload: {
          appointment_date: "",
          appointment_time: "",
          selected_payment: {},
          k5t0g8_token_y4v9f6: ""
        },
        requiredFields: ["appointment_date", "appointment_time", "selected_payment"],
        optionalFields: ["k5t0g8_token_y4v9f6"],
        fieldMappings: {
          appointment_date: "selectedDate",
          appointment_time: "selectedTime",
          selected_payment: "_var99()",
          k5t0g8_token_y4v9f6: "dynamicData.captchaToken"
        }
      },
      checkout: {
        path: "/api/v2/payment/checkout",
        method: "GET",
        description: "Checkout endpoint",
        requiresAuth: true,
        requiresCaptcha: false,
        payload: {},
        requiredFields: [],
        optionalFields: []
      },
      "captcha-generate": {
        path: "/api/v2/payment/captcha-generate",
        method: "GET",
        description: "Generate captcha",
        requiresAuth: true,
        requiresCaptcha: false,
        payload: {},
        requiredFields: [],
        optionalFields: []
      },
      "captcha-verify": {
        path: "/api/v2/payment/captcha-verify",
        method: "POST",
        description: "Verify captcha",
        requiresAuth: true,
        requiresCaptcha: false,
        payload: {
          captcha_input: "",
          captcha_id: ""
        },
        requiredFields: ["captcha_input", "captcha_id"],
        optionalFields: [],
        fieldMappings: {
          captcha_input: "document.getElementById(\"ivac-captcha-input\")?.value",
          captcha_id: "captchaId"
        }
      },
      "image-captcha-generate": {
        path: "/api/v2/captcha/generate-pay",
        method: "GET",
        description: "Generate PayNow image captcha",
        requiresAuth: true,
        requiresCaptcha: false,
        payload: {},
        requiredFields: [],
        optionalFields: []
      },
      "image-captcha-verify": {
        path: "/api/v2/captcha/verify-pay",
        method: "POST",
        description: "Verify PayNow image captcha",
        requiresAuth: true,
        requiresCaptcha: false,
        payload: {
          captcha_id: "",
          captcha_input: ""
        },
        requiredFields: ["captcha_id", "captcha_input"],
        optionalFields: [],
        fieldMappings: {
          captcha_id: "currentImageCaptchaId",
          captcha_input: "document.getElementById(\"image-captcha-input-paynow\")?.value"
        }
      }
    },
    getEndpoint: function (_var100) {
      return this.endpoints[_var100];
    },
    getEndpointUrl: function (_var101) {
      const _var102 = this.getEndpoint(_var101);
      if (_var102) {
        return "" + this.baseUrl + _var102.path;
      }
      return null;
    },
    saveToStorage: function () {
      try {
        GM_setValue("ivac_endpoint_config", JSON.stringify({
          baseUrl: this.baseUrl,
          apiVersion: this.apiVersion,
          endpoints: this.endpoints
        }));
      } catch (_var103) {}
    },
    loadFromStorage: function () {
      try {
        const _var104 = GM_getValue("ivac_endpoint_config", null);
        if (_var104) {
          const _var105 = JSON.parse(_var104);
          if (_var105.baseUrl) {
            this.baseUrl = _var105.baseUrl;
          }
          if (_var105.apiVersion) {
            this.apiVersion = _var105.apiVersion;
          }
          if (_var105.endpoints) {
            this.endpoints = {
              ...this.endpoints,
              ..._var105.endpoints
            };
          }
        }
      } catch (_var106) {}
    },
    initializeDefaults: function () {
      this.loadFromStorage();
    }
  };
  _var98.initializeDefaults();
  let _var107 = Date.now();
  let _var108 = performance.now();
  async function _var109() {
    try {
      const _var110 = await fetch("https://worldtimeapi.org/api/timezone/Asia/Dhaka");
      const _var111 = await _var110.json();
      _var107 = new Date(_var111.datetime).getTime();
      _var108 = performance.now();
    } catch {
      try {
        const _var112 = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Dhaka");
        const _var113 = await _var112.json();
        _var107 = new Date(_var113.dateTime).getTime();
        _var108 = performance.now();
      } catch {}
    }
  }
  function _var114() {
    const _var115 = _var107 + (performance.now() - _var108);
    return new Date(_var115);
  }
  function _var116(_var117 = null) {
    const _var118 = _var117 || _var114();
    return {
      hour: _var118.getHours(),
      minute: _var118.getMinutes(),
      second: _var118.getSeconds(),
      millisecond: _var118.getMilliseconds(),
      date: _var118.getDate(),
      month: _var118.getMonth() + 1,
      year: _var118.getFullYear()
    };
  }
  _var109();
  // TOLOOK
  setInterval(_var109, 900000);
  function _var119() {
    const _var120 = document.getElementById("ivac-time");
    const _var121 = document.getElementById("ivac-date");
    if (!_var120 && !_var121) {
      return;
    }
    const _var122 = _var114();
    const _var123 = _var124 => String(_var124).padStart(2, "0");
    if (_var120) {
      let _var125 = _var122.getHours();
      const _var126 = _var125 >= 12 ? "PM" : "AM";
      _var125 = _var125 % 12;
      _var125 = _var125 ? _var125 : 12;
      _var120.textContent = _var123(_var125) + ":" + _var123(_var122.getMinutes()) + ":" + _var123(_var122.getSeconds()) + " " + _var126;
    }
    if (_var121) {
      _var121.textContent = _var123(_var122.getDate()) + "/" + _var123(_var122.getMonth() + 1) + "/" + _var122.getFullYear();
    }
  }
  // TOLOOK
  setInterval(_var119, 1000);
  function _var127() {
    if (_var128.personalInfo.familyMembers && _var128.personalInfo.familyMembers.length > 0) {
      const _var129 = {};
      _var128.personalInfo.familyMembers.forEach((_var130, _var131) => {
        if (_var130.name && _var130.webFileNo) {
          _var129[_var131 + 1] = {
            name: _var130.name,
            webfile_no: _var130.webFileNo,
            again_webfile_no: _var130.againWebFileNo || _var130.webFileNo
          };
        }
      });
      return _var129;
    }
    return {};
  }
  function _var99() {
    const _var132 = _var133 => {
      const _var134 = _var135.paymentMethods.find(_var136 => _var136.value === _var133);
      return _var134 || _var135.paymentMethods[0];
    };
    const _var137 = _var128.paymentMethod || "okwallet";
    const _var138 = _var132(_var137);
    const _var139 = {
      name: _var138.name,
      slug: _var138.slug,
      link: _var138.link
    };
    return _var139;
  }
  function _var140(_var141, _var142) {
    const _var143 = _var98.getEndpoint(_var141);
    if (!_var143) {
      return _var142;
    }
    const _var144 = Object.keys(_var143.payload).find(_var145 => _var145.includes(_var142));
    if (_var144) {
      return _var144;
    }
    const _var146 = Object.keys(_var143.payload).find(_var147 => _var147.includes("token"));
    return _var146 || _var142;
  }
  function _var148(_var149, _var150 = {}) {
    const _var151 = _var98.getEndpoint(_var149);
    if (!_var151) {
      throw new Error("Endpoint '" + _var149 + "' not found");
    }
    const _var152 = {
      ..._var151.payload
    };
    Object.assign(_var152, _var150);
    if (_var151.fieldMappings) {
      Object.entries(_var151.fieldMappings).forEach(([_var153, _var154]) => {
        try {
          let _var155;
          if (_var154.startsWith("dynamicData.")) {
            const _var156 = _var154.replace("dynamicData.", "");
            _var155 = _var156.split(".").reduce((_var157, _var158) => _var157?.[_var158], _var128);
          } else if (_var154.startsWith("document.getElementById")) {
            const _var159 = _var154.match(/getElementById\("([^"]+)"\)/)?.[1];
            if (_var159) {
              const _var160 = document.getElementById(_var159);
              _var155 = _var160?.value || "";
            } else {
              try {
                _var155 = eval(_var154);
              } catch (_var161) {
                _var155 = "";
              }
            }
          } else if (_var154.includes("()")) {
            const _var162 = _var154.replace("()", "");
            if (typeof window[_var162] === "function") {
              _var155 = window[_var162]();
            } else if (typeof eval(_var162) === "function") {
              _var155 = eval(_var162)();
            }
          } else if (_var154.includes("?")) {
            if (_var154.includes("resend ? 1 : 0")) {
              _var155 = _var150.resend ? 1 : 0;
            }
          } else if (_var154 === "captcha_token" || _var154.includes("captcha_token") && !_var154.startsWith("dynamicData.") || _var154 === "y6e7uk_token_t6d8n3" && !_var154.startsWith("dynamicData.") || _var154 === "k5t0g8_token_y4v9f6" && !_var154.startsWith("dynamicData.")) {
            if (_var128?.captchaToken) {
              _var155 = _var128.captchaToken;
            } else if (window.turnstileToken) {
              _var155 = window.turnstileToken;
            } else if (_var152.captcha_token !== undefined && _var152.captcha_token !== "") {
              _var155 = _var152.captcha_token;
            } else if (_var152.y6e7uk_token_t6d8n3 !== undefined && _var152.y6e7uk_token_t6d8n3 !== "") {
              _var155 = _var152.y6e7uk_token_t6d8n3;
            } else if (_var152.k5t0g8_token_y4v9f6 !== undefined && _var152.k5t0g8_token_y4v9f6 !== "") {
              _var155 = _var152.k5t0g8_token_y4v9f6;
            } else {
              const _var163 = Object.keys(_var152).find(_var164 => _var164.includes("captcha_token") || _var164.includes("y6e7uk_token_t6d8n3") || _var164.includes("k5t0g8_token_y4v9f6"));
              if (_var163 && _var152[_var163] && _var152[_var163] !== "") {
                _var155 = _var152[_var163];
              } else {
                _var155 = null;
              }
            }
          } else if (_var154 === "mobile_no" || _var154 === "phone" || _var154.includes("mobile") || _var154.includes("phone")) {
            if (_var152.mobile_no !== undefined) {
              _var155 = _var152.mobile_no;
            } else if (_var152.phone !== undefined) {
              _var155 = _var152.phone;
            } else if (_var128?.personalInfo?.phone) {
              _var155 = _var128.personalInfo.phone;
            } else {
              const _var165 = Object.keys(_var152).find(_var166 => _var166.includes("mobile") || _var166.includes("phone"));
              if (_var165 && _var152[_var165]) {
                _var155 = _var152[_var165];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "password" || _var154.includes("password")) {
            if (_var152.password !== undefined) {
              _var155 = _var152.password;
            } else if (_var128?.personalInfo?.password) {
              _var155 = _var128.personalInfo.password;
            } else {
              const _var167 = Object.keys(_var152).find(_var168 => _var168.includes("password"));
              if (_var167 && _var152[_var167]) {
                _var155 = _var152[_var167];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "full_name" || _var154.includes("full_name") || _var154.includes("name")) {
            if (_var152.full_name !== undefined) {
              _var155 = _var152.full_name;
            } else if (_var128?.personalInfo?.fullName) {
              _var155 = _var128.personalInfo.fullName;
            } else {
              const _var169 = Object.keys(_var152).find(_var170 => _var170.includes("name"));
              if (_var169 && _var152[_var169]) {
                _var155 = _var152[_var169];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "email_name" || _var154.includes("email")) {
            if (_var152.email_name !== undefined) {
              _var155 = _var152.email_name;
            } else if (_var128?.personalInfo?.email) {
              _var155 = _var128.personalInfo.email;
            } else {
              const _var171 = Object.keys(_var152).find(_var172 => _var172.includes("email"));
              if (_var171 && _var152[_var171]) {
                _var155 = _var152[_var171];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "webfile_id" || _var154.includes("webfile")) {
            if (_var152.webfile_id !== undefined) {
              _var155 = _var152.webfile_id;
            } else if (_var128?.personalInfo?.webFileId) {
              _var155 = _var128.personalInfo.webFileId;
            } else if (_var128?.applicationInfo?.webFileId) {
              _var155 = _var128.applicationInfo.webFileId;
            } else {
              const _var173 = Object.keys(_var152).find(_var174 => _var174.includes("webfile"));
              if (_var173 && _var152[_var173]) {
                _var155 = _var152[_var173];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "ivac_id" || _var154.includes("ivac")) {
            if (_var152.ivac_id !== undefined) {
              _var155 = _var152.ivac_id;
            } else if (_var128?.applicationInfo?.ivacId) {
              _var155 = _var128.applicationInfo.ivacId;
            } else {
              const _var175 = Object.keys(_var152).find(_var176 => _var176.includes("ivac"));
              if (_var175 && _var152[_var175]) {
                _var155 = _var152[_var175];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "visa_type" || _var154.includes("visa")) {
            if (_var152.visa_type !== undefined) {
              _var155 = _var152.visa_type;
            } else if (_var128?.applicationInfo?.visaTypeId) {
              _var155 = _var128.applicationInfo.visaTypeId;
            } else {
              const _var177 = Object.keys(_var152).find(_var178 => _var178.includes("visa"));
              if (_var177 && _var152[_var177]) {
                _var155 = _var152[_var177];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "family_count" || _var154.includes("family")) {
            if (_var152.family_count !== undefined) {
              _var155 = _var152.family_count;
            } else if (_var128?.applicationInfo?.familyCount) {
              _var155 = _var128.applicationInfo.familyCount;
            } else {
              const _var179 = Object.keys(_var152).find(_var180 => _var180.includes("family"));
              if (_var179 && _var152[_var179]) {
                _var155 = _var152[_var179];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "visit_purpose" || _var154.includes("purpose")) {
            if (_var152.visit_purpose !== undefined) {
              _var155 = _var152.visit_purpose;
            } else if (_var128?.applicationInfo?.visitPurpose) {
              _var155 = _var128.applicationInfo.visitPurpose;
            } else {
              const _var181 = Object.keys(_var152).find(_var182 => _var182.includes("purpose"));
              if (_var181 && _var152[_var181]) {
                _var155 = _var152[_var181];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "selected_payment" || _var154.includes("payment")) {
            if (_var152.selected_payment !== undefined) {
              _var155 = _var152.selected_payment;
            } else if (_var128?.paymentMethod) {
              _var155 = _var128.paymentMethod;
            } else {
              const _var183 = Object.keys(_var152).find(_var184 => _var184.includes("payment"));
              if (_var183 && _var152[_var183]) {
                _var155 = _var152[_var183];
              } else {
                _var155 = "";
              }
            }
          } else if (_var154 === "resend" || _var154.includes("resend")) {
            if (_var152.resend !== undefined) {
              _var155 = _var152.resend;
            } else {
              const _var185 = Object.keys(_var152).find(_var186 => _var186.includes("resend"));
              if (_var185 && _var152[_var185] !== undefined) {
                _var155 = _var152[_var185];
              } else {
                _var155 = 0;
              }
            }
          } else if (_var152[_var154] !== undefined) {
            _var155 = _var152[_var154];
          } else {
            _var155 = eval(_var154);
          }
          if (_var155 !== undefined && _var155 !== null) {
            _var152[_var153] = _var155;
          }
        } catch (_var187) {}
      });
    }
    if (_var128.captchaToken) {
      _var128.captchaToken = null;
    }
    if (_var149 === "application-info-submit" && (!_var152.visa_type || _var152.visa_type === "")) {
      _var152.visa_type = _var128?.applicationInfo?.visaTypeId || "13";
    }
    return _var152;
  }
  function _var188(_var189, _var190) {
    const _var191 = _var98.getEndpoint(_var189);
    if (!_var191) {
      return false;
    }
    const _var192 = _var191.requiredFields.filter(_var193 => {
      const _var194 = _var190[_var193];
      return _var194 === undefined || _var194 === null || _var194 === "";
    });
    if (_var192.length > 0) {
      return false;
    }
    return true;
  }
  function _var195() {
    const _var196 = GM_getValue(_var78, null);
    return window.CAPTCHA_API_KEY || _var196 || _var28;
  }
  let _var197 = null;
  function _var198(_var199) {
    try {
      _var200 = _var199;
      localStorage.setItem("access_token", _var199);
      localStorage.setItem("access_token_ts", String(Math.floor(Date.now() / 1000)));
      _var201();
    } catch (_var202) {}
  }
  function _var201() {
    try {
      if (_var197) {
        clearTimeout(_var197);
        _var197 = null;
      }
      const _var203 = localStorage.getItem("access_token_ts");
      if (!_var203) {
        return;
      }
      const _var204 = Date.now() - parseInt(_var203) * 1000;
      const _var205 = _var64 * 60 * 1000;
      const _var206 = _var205 - _var204;
      if (_var206 > 0) {
        _var197 = // TOLOOK
        setTimeout(() => {
          _var207();
        }, _var206);
      } else {
        _var207();
      }
    } catch (_var208) {}
  }
  function _var209() {
    const _var210 = localStorage.getItem("access_token");
    _var200 = _var210 || "";
    return _var210 || "";
  }
  function _var211(_var212 = null) {
    try {
      const _var213 = _var212 || _var209();
      if (!_var213) {
        return false;
      }
      const _var214 = localStorage.getItem("access_token_ts");
      if (_var214) {
        const _var215 = Date.now() - parseInt(_var214) * 1000;
        const _var216 = _var64 * 60 * 1000;
        if (_var215 > _var216) {
          return false;
        }
        const _var217 = 300000;
        if (_var215 > _var216 - _var217) {
          const _var218 = Math.ceil((_var216 - _var215) / 60000);
        }
      }
      return true;
    } catch (_var219) {
      return false;
    }
  }
  function _var220() {
    try {
      localStorage.removeItem(_var65);
      localStorage.removeItem(_var66);
    } catch (_var221) {}
  }
  function _var222(_var223) {
    if (!_var223) {
      _var220();
      return;
    }
    try {
      localStorage.setItem(_var65, _var223);
      localStorage.setItem(_var66, String(Date.now()));
    } catch (_var224) {}
  }
  function _var225() {
    try {
      const _var226 = (localStorage.getItem(_var65) || "").trim();
      if (!_var226) {
        _var220();
        return null;
      }
      const _var227 = Number(localStorage.getItem(_var66) || "0");
      if (!_var227) {
        _var220();
        return null;
      }
      const _var228 = Date.now() - _var227;
      if (_var228 > _var72) {
        _var220();
        return null;
      }
      return _var226;
    } catch (_var229) {
      _var220();
      return null;
    }
  }
  function _var207() {
    try {
      if (_var197) {
        clearTimeout(_var197);
        _var197 = null;
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("access_token_ts");
      localStorage.removeItem("activeStep");
      localStorage.removeItem("authStep");
      localStorage.removeItem("auth_email");
      localStorage.removeItem("auth_name");
      localStorage.removeItem("auth_phone");
      localStorage.removeItem("auth_photo");
      localStorage.removeItem("user_phone");
      localStorage.removeItem("user_pwd");
      localStorage.removeItem("user_email");
      localStorage.removeItem("applicant");
      localStorage.removeItem("personal_info");
      _var220();
      localStorage.removeItem("app_cloud_token");
      localStorage.removeItem("pay_cloud_token");
      if (typeof GM_deleteValue !== "undefined") {
        try {
          GM_deleteValue("loginResponseData");
          GM_deleteValue("userInfo");
          GM_deleteValue("initialData");
        } catch (_var230) {}
      }
      _var200 = "";
      if (typeof _var231 === "function") {
        _var231();
      }
      localStorage.removeItem("login_expire_at");
    } catch (_var232) {}
  }
  function _var233(_var234, _var235) {
    if (_var234 > 2000) {
      _var236(_var235, 0);
    } else {
      _var236(_var235, _var237() * 1000);
    }
  }
  function _var238(_var239, _var240 = null) {
    try {
      if (_var239 && typeof _var239 === "string") {
        _var198(_var239);
      }
      if (_var240 && typeof _var240 === "object") {
        let _var241 = null;
        _var241 = _var242(_var240);
        if (!_var241 && _var240.data) {
          _var241 = _var242(_var240.data);
        }
        if (!_var241 && _var240.data?.data) {
          _var241 = _var242(_var240.data.data);
        }
        if (_var241) {
          _var243("[setAccessTokenAndPersist] ✓ Photo extracted (length: " + _var241.length + ")");
          if (_var240.data?.data) {
            _var244(_var240.data, _var241);
          } else if (_var240.data) {
            _var244(_var240.data, _var241);
          } else {
            _var244(_var240, _var241);
          }
        } else {
          _var243("[setAccessTokenAndPersist] ⚠ Photo extraction returned null - loginData structure: " + JSON.stringify({
            hasData: !!_var240.data,
            hasDataData: !!_var240.data?.data,
            hasParts: !!_var240._parts,
            hasDataParts: !!_var240.data?._parts,
            profileImageRef: _var240.data?.data?.profile_image || _var240.data?.profile_image || _var240.profile_image || "none"
          }).substring(0, 200));
        }
        if (typeof GM_setValue !== "undefined") {
          try {
            GM_setValue("loginResponseData", JSON.stringify(_var240));
          } catch (_var245) {}
        }
        try {
          localStorage.setItem("loginResponseData", JSON.stringify(_var240));
        } catch (_var246) {}
        if (_var240.data) {
          if (typeof GM_setValue !== "undefined") {
            try {
              GM_setValue("userInfo", JSON.stringify(_var240.data));
            } catch (_var247) {}
          }
          try {
            localStorage.setItem("userInfo", JSON.stringify(_var240.data));
          } catch (_var248) {}
          if (_var240.data.initialData) {
            if (typeof GM_setValue !== "undefined") {
              try {
                GM_setValue("initialData", JSON.stringify(_var240.data.initialData));
              } catch (_var249) {}
            }
            try {
              localStorage.setItem("initialData", JSON.stringify(_var240.data.initialData));
            } catch (_var250) {}
          }
        }
        localStorage.setItem("authStep", "100");
        if (typeof GM_setValue !== "undefined") {
          try {
            GM_setValue("authStep", "100");
          } catch (_var251) {}
        }
        localStorage.setItem("language", "en");
        if (typeof GM_setValue !== "undefined") {
          try {
            GM_setValue("language", "en");
          } catch (_var252) {}
        }
        _var253(_var240);
      } else if (_var239) {
        localStorage.setItem("authStep", "100");
        localStorage.setItem("language", "en");
      }
      if (typeof window !== "undefined" && window.dispatchEvent) {
        window.dispatchEvent(new Event("tokenUpdate"));
      }
      return true;
    } catch (_var254) {
      return false;
    }
  }
  function _var255() {
    try {
      _var256();
      _var257();
      const _var258 = _var209();
      if (_var258 && _var211(_var258)) {
        _var201();
      } else {
        _var207();
      }
    } catch (_var259) {
      _var207();
    }
  }
  function _var256() {
    try {
      const _var260 = localStorage.getItem("access_token");
      if (_var260) {
        _var200 = _var260;
      }
    } catch (_var261) {}
  }
  function _var262() {
    try {
      if (typeof GM_getValue !== "undefined") {
        try {
          const _var263 = GM_getValue("loginResponseData", "");
          if (_var263) {
            const _var264 = JSON.parse(_var263);
            return _var264;
          }
        } catch (_var265) {}
      }
      return null;
    } catch (_var266) {
      return null;
    }
  }
  function _var267() {
    try {
      const _var268 = localStorage.getItem("persist:root");
      if (!_var268) {
        return null;
      }
      const _var269 = JSON.parse(_var268);
      const _var270 = {};
      if (_var269.authUser) {
        try {
          _var270.authUser = JSON.parse(_var269.authUser);
        } catch (_var271) {
          _var270.authUser = _var269.authUser;
        }
      }
      if (_var269.authenticationStep) {
        try {
          _var270.authenticationStep = JSON.parse(_var269.authenticationStep);
        } catch (_var272) {
          _var270.authenticationStep = _var269.authenticationStep;
        }
      }
      if (_var269.applicationStep) {
        try {
          _var270.applicationStep = JSON.parse(_var269.applicationStep);
        } catch (_var273) {
          _var270.applicationStep = _var269.applicationStep;
        }
      }
      if (_var269.application) {
        try {
          _var270.application = JSON.parse(_var269.application);
        } catch (_var274) {
          _var270.application = _var269.application;
        }
      }
      if (_var269.personalInfo) {
        try {
          _var270.personalInfo = JSON.parse(_var269.personalInfo);
        } catch (_var275) {
          _var270.personalInfo = _var269.personalInfo;
        }
      }
      return _var270;
    } catch (_var276) {
      return null;
    }
  }
  function _var277(_var278 = {}) {
    try {
      let _var279 = {};
      const _var280 = localStorage.getItem("persist:root");
      if (_var280) {
        try {
          _var279 = JSON.parse(_var280);
        } catch (_var281) {
          _var279 = {};
        }
      }
      const _var282 = (_var283, _var284) => {
        if (_var284 === undefined || _var284 === null) {
          return;
        }
        _var279[_var283] = typeof _var284 === "string" ? _var284 : JSON.stringify(_var284);
      };
      _var282("authUser", _var278.authUser);
      _var282("authenticationStep", _var278.authenticationStep);
      _var282("applicationStep", _var278.applicationStep);
      _var282("application", _var278.application);
      _var282("personalInfo", _var278.personalInfo);
      if (!_var279._persist) {
        _var279._persist = JSON.stringify({
          version: -1,
          rehydrated: true
        });
      }
      localStorage.setItem("persist:root", JSON.stringify(_var279));
    } catch (_var285) {}
  }
  function _var253(_var286) {
    try {
      const _var287 = _var286?.data?.data || _var286?.data || _var286 || {};
      const _var288 = _var267();
      const _var289 = _var287 && (_var287.mobile_no || _var287.email || _var287.name || _var287.profile_image);
      if (!_var289 && _var288?.authUser?.user) {
        _var277({
          authUser: {
            ..._var288.authUser,
            is_authenticated: true
          },
          authenticationStep: {
            step: 100
          },
          applicationStep: _var288?.applicationStep || {
            step: 1
          },
          application: _var288?.application || {
            applicationData: {
              highcom: "",
              webfile_id: "",
              webfile_id_repeat: "",
              ivac_id: "",
              ivac_name: "",
              visa_type: "",
              family_count: "",
              visit_purpose: ""
            },
            isEdit: false
          },
          personalInfo: _var288?.personalInfo || {
            personalInfo: {
              full_name: "",
              email_name: "",
              phone: "",
              webfile_id: "",
              family: {}
            }
          }
        });
        return;
      }
      localStorage.setItem("authStep", "100");
      if (_var287.email) {
        localStorage.setItem("auth_email", _var287.email);
        localStorage.setItem("user_email", JSON.stringify(_var287.email));
      }
      if (_var287.mobile_no) {
        localStorage.setItem("auth_phone", _var287.mobile_no);
        localStorage.setItem("user_phone", _var287.mobile_no);
      }
      if (_var287.name) {
        localStorage.setItem("auth_name", _var287.name);
      }
      if (_var287.profile_image) {
        const _var290 = _var291(_var287.profile_image, _var286);
        if (_var290 && !_var290.startsWith("$")) {
          localStorage.setItem("auth_photo", _var290);
        } else {
          try {
            const _var292 = localStorage.getItem("loginResponseData");
            if (_var292) {
              const _var293 = JSON.parse(_var292);
              const _var294 = _var291(_var287.profile_image, _var293);
              if (_var294 && !_var294.startsWith("$")) {
                localStorage.setItem("auth_photo", _var294);
              } else {
                localStorage.setItem("auth_photo", _var287.profile_image);
              }
            } else {
              localStorage.setItem("auth_photo", _var287.profile_image);
            }
          } catch (_var295) {
            localStorage.setItem("auth_photo", _var287.profile_image);
          }
        }
      }
      const _var296 = _var128 && _var128.personalInfo && _var128.personalInfo.password || "";
      if (_var296) {
        localStorage.setItem("user_pwd", _var296);
      }
      localStorage.setItem("language", "en");
      if (_var287.initialData) {
        localStorage.setItem("initialData", JSON.stringify(_var287.initialData));
      }
      try {
        _var220();
        localStorage.removeItem("cloud_token");
      } catch {}
      const _var297 = "";
      let _var298 = _var287.profile_image || _var287.photo || _var287.profileImage || "";
      let _var299 = _var298;
      if (_var298 && _var298.startsWith("$")) {
        let _var300 = _var286;
        if (_var286.data && _var286.data._parts) {
          _var300 = _var286.data;
        } else if (_var286._parts) {
          _var300 = _var286;
        } else if (_var286.data && typeof _var286.data === "object") {
          _var300 = _var286.data;
        }
        _var299 = _var291(_var298, _var300) || _var291(_var298, _var286) || _var291(_var298, {
          data: _var286
        }) || _var291(_var298, {
          data: {
            data: _var287
          }
        }) || _var298;
        if (_var299 === _var298 && _var299.startsWith("$")) {
          try {
            const _var301 = localStorage.getItem("loginResponseData");
            if (_var301) {
              const _var302 = JSON.parse(_var301);
              const _var303 = _var291(_var298, _var302);
              if (_var303 && !_var303.startsWith("$")) {
                _var299 = _var303;
              }
            }
          } catch (_var304) {}
          if (_var299 === _var298 && _var299.startsWith("$")) {
            const _var305 = localStorage.getItem("auth_photo");
            if (_var305 && !_var305.startsWith("$")) {
              _var299 = _var305;
            }
          }
        }
      }
      const _var306 = document.getElementById("ivac-login-mobile")?.value?.trim() || "";
      const _var307 = _var288?.authUser?.user?.email || "";
      const _var308 = {
        is_authenticated: true,
        user: {
          user_phone: _var287.mobile_no || _var287.user_phone || _var306 || _var288?.authUser?.user?.user_phone || "",
          email: _var287.email || _var287.user_email || _var307 || "",
          password: _var297,
          name: _var287.name || _var287.user_name || _var288?.authUser?.user?.name || "",
          photo: _var299 || _var288?.authUser?.user?.photo || ""
        },
        is_slot_available: Boolean(_var287.slot_available ?? _var288?.authUser?.is_slot_available ?? false),
        visa_fee: Number(_var287.visa_fee ?? _var288?.authUser?.visa_fee ?? 1500)
      };
      if (_var287.token_type) {
        _var308.token_type = _var287.token_type;
      }
      if (_var287.expires_at) {
        _var308.expires_at = _var287.expires_at;
      }
      if (_var287.cloud_token || _var287.app_cloud_token) {
        _var308.cloud_token = _var287.cloud_token || _var287.app_cloud_token;
      }
      const _var309 = Number(localStorage.getItem("activeStep")) || _var288?.applicationStep?.step || 1;
      _var277({
        authUser: _var308,
        authenticationStep: {
          step: 100
        },
        applicationStep: {
          step: _var309
        },
        application: _var288?.application || {
          applicationData: {
            highcom: "",
            webfile_id: "",
            webfile_id_repeat: "",
            ivac_id: "",
            ivac_name: "",
            visa_type: "",
            family_count: "",
            visit_purpose: ""
          },
          isEdit: false
        },
        personalInfo: _var288?.personalInfo || {
          personalInfo: {
            full_name: "",
            email_name: "",
            phone: "",
            webfile_id: "",
            family: {}
          }
        }
      });
      try {
        const _var310 = _var287.ip || _var287.ip_address || _var287.client_ip || _var286.ip || "";
        const _var311 = _var310.trim ? _var310.trim() : _var310;
        if (_var311 && typeof persistClientIp === "function") {
          persistClientIp(_var311);
        } else if (typeof loadPersistedClientIp === "function") {
          const _var312 = loadPersistedClientIp();
          if (_var312 && typeof persistClientIp === "function") {
            persistClientIp(_var312);
          }
        }
      } catch (_var313) {}
      localStorage.setItem("activeStep", String(_var309 || 1));
    } catch (_var314) {}
  }
  function _var257() {
    try {
      const _var315 = _var262();
      if (_var315 && _var200) {
        localStorage.setItem("authStep", "100");
        localStorage.setItem("language", "en");
        if (_var315.data) {
          _var253(_var315);
        }
      } else {
        _var316();
      }
    } catch (_var317) {}
  }
  function _var316() {
    try {
      const _var318 = GM_getValue("authStep", "");
      const _var319 = GM_getValue("auth_email", "");
      const _var320 = GM_getValue("user_email", "");
      const _var321 = GM_getValue("auth_phone", "");
      const _var322 = GM_getValue("user_phone", "");
      const _var323 = GM_getValue("auth_name", "");
      const _var324 = GM_getValue("auth_photo", "");
      const _var325 = GM_getValue("user_pwd", "");
      const _var326 = GM_getValue("language", "");
      const _var327 = GM_getValue("activeStep", "");
      const _var328 = GM_getValue("initialData", "");
      if (_var318) {
        localStorage.setItem("authStep", _var318);
      }
      if (_var326) {
        localStorage.setItem("language", _var326);
      }
    } catch (_var329) {}
  }
  let _var330 = GM_getValue(_var39, _var62);
  let _var331 = GM_getValue(_var40, _var63);
  let _var332 = GM_getValue(_var42, _var62);
  let _var333 = GM_getValue(_var43, _var63);
  let _var334 = GM_getValue(_var45, _var62);
  let _var335 = GM_getValue(_var46, _var63);
  const _var336 = new Set();
  const _var337 = new Set();
  let _var338 = new Map();
  let _var339 = new Map();
  let _var340 = new Map();
  let _var341 = false;
  let _var342 = false;
  let _var343 = false;
  if (!GM_getValue(_var38)) {
    GM_setValue(_var38, _var54);
  }
  if (!GM_getValue(_var39)) {
    GM_setValue(_var39, _var62);
  }
  if (!GM_getValue(_var40)) {
    GM_setValue(_var40, _var63);
  }
  if (!GM_getValue(_var41)) {
    GM_setValue(_var41, 0);
  }
  if (!GM_getValue(_var42)) {
    GM_setValue(_var42, _var62);
  }
  if (!GM_getValue(_var43)) {
    GM_setValue(_var43, _var63);
  }
  if (!GM_getValue(_var44)) {
    GM_setValue(_var44, 0);
  }
  if (!GM_getValue(_var45)) {
    GM_setValue(_var45, _var62);
  }
  if (!GM_getValue(_var46)) {
    GM_setValue(_var46, _var63);
  }
  function _var344() {
    return GM_getValue(_var38, _var54);
  }
  function _var345(_var346) {
    GM_setValue(_var38, _var346);
  }
  function _var347() {
    return _var348();
  }
  function _var349(_var350) {
    _var330 = _var350;
    GM_setValue(_var39, _var350);
  }
  function _var351() {
    return _var352() || _var353();
  }
  function _var354(_var355) {
    _var331 = _var355;
    GM_setValue(_var40, _var355);
  }
  function _var356() {
    return GM_getValue(_var41, 0);
  }
  function _var357(_var358) {
    GM_setValue(_var41, _var358);
  }
  function _var359() {
    return _var332;
  }
  function _var360(_var361) {
    _var332 = _var361;
    GM_setValue(_var42, _var361);
  }
  function _var352() {
    return _var333;
  }
  function _var362(_var363) {
    _var333 = _var363;
    GM_setValue(_var43, _var363);
  }
  function _var364() {
    return GM_getValue(_var44, 0);
  }
  function _var365(_var366) {
    GM_setValue(_var44, _var366);
  }
  function _var367() {
    return GM_getValue(_var47, _var55);
  }
  function _var368(_var369) {
    GM_setValue(_var47, _var369);
  }
  function _var370() {
    return GM_getValue(_var48, _var56);
  }
  function _var371(_var372) {
    GM_setValue(_var48, _var372);
  }
  function _var373() {
    return GM_getValue(_var49, _var57);
  }
  function _var374(_var375) {
    GM_setValue(_var49, _var375);
  }
  function _var376() {
    return GM_getValue(_var50, _var58);
  }
  function _var377(_var378) {
    GM_setValue(_var50, _var378);
  }
  function _var379() {
    return GM_getValue(_var51, _var59);
  }
  function _var380(_var381) {
    GM_setValue(_var51, _var381);
  }
  function _var382() {
    return GM_getValue(_var52, _var60);
  }
  function _var383(_var384) {
    GM_setValue(_var52, _var384);
  }
  function _var385() {
    return GM_getValue(_var53, _var61);
  }
  function _var386(_var387) {
    GM_setValue(_var53, _var387);
  }
  function _var388() {
    return _var334;
  }
  function _var389(_var390) {
    _var334 = _var390;
    GM_setValue(_var45, _var390);
  }
  function _var353() {
    return _var335;
  }
  function _var391(_var392) {
    _var335 = _var392;
    GM_setValue(_var46, _var392);
  }
  function _var393(_var394, _var395) {
    const _var396 = Number.isFinite(_var395) ? _var395 : 0;
    const _var397 = Number(_var394);
    const _var398 = Number.isFinite(_var397) ? _var397 : _var396;
    const _var399 = Math.round(_var398);
    return Math.max(0, Math.min(_var74, _var399));
  }
  function _var400(_var401, _var402) {
    return Math.floor(Math.random() * (_var402 - _var401 + 1)) + _var401;
  }
  function _var403() {
    const _var404 = document.querySelector(".ivac-tab.active");
    if (_var404) {
      const _var405 = _var404.textContent.trim();
      if (_var405 === "LOGIN") {
        return "login";
      }
      if (_var405 === "SUBMIT") {
        return "submit";
      }
      if (_var405 === "Pay") {
        return "pay";
      }
    }
    return "unknown";
  }
  function _var348() {
    const _var406 = _var403();
    if (_var406 === "login") {
      return _var359();
    }
    if (_var406 === "submit") {
      return _var388();
    }
    return _var359() || _var388();
  }
  function _var237() {
    const _var407 = _var403();
    if (_var407 === "login") {
      return _var356();
    }
    if (_var407 === "submit") {
      return _var364();
    }
    return _var344();
  }
  function _var408(_var409) {
    if (!_var348()) {
      return 0;
    }
    const _var410 = _var237() * 1000;
    if (_var409 === 200) {
      return _var410;
    }
    return _var410;
  }
  function _var236(_var411, _var412, _var413 = null) {
    const _var414 = // TOLOOK
    setTimeout(() => {
      _var336.delete(_var414);
      if (_var413) {
        _var339.delete(_var413);
      }
      _var411();
    }, _var412);
    _var336.add(_var414);
    if (_var413) {
      const _var415 = _var339.get(_var413);
      if (_var415) {
        clearTimeout(_var415);
        _var336.delete(_var415);
      }
      _var339.set(_var413, _var414);
    }
    return _var414;
  }
  function _var416() {
    const _var417 = new AbortController();
    _var337.add(_var417);
    return _var417;
  }
  function _var418() {
    _var336.forEach(_var419 => clearTimeout(_var419));
    _var336.clear();
    _var337.forEach(_var420 => {
      try {
        _var420.abort();
      } catch (_var421) {}
    });
    _var337.clear();
  }
  function _var422(_var423 = null) {
    _var360(false);
    _var389(false);
    _var418();
    _var424();
    if (_var423) {
      _var425("Auto-retry stopped. All pending retries cleared.", "#10b981");
    }
  }
  async function _var426(_var427, _var428, _var429, _var430 = {}) {
    const {
      msgEl = null,
      on419 = null,
      custom401Msg = "You are logged out. Please log in.",
      show419ServerMessage = true,
      maxRetries: _var431 = _var75
    } = _var430;
    const _var432 = _var393(_var431, _var75);
    const _var433 = _var429 + "_" + Date.now();
    let _var434 = 0;
    let _var435 = _var416();
    let _var436 = false;
    _var337.add(_var435);
    const _var437 = async () => {
      if (_var435.signal.aborted || _var436) {
        _var337.delete(_var435);
        _var338.delete(_var433);
        const _var438 = _var339.get(_var433);
        if (_var438) {
          clearTimeout(_var438);
          _var336.delete(_var438);
        }
        _var339.delete(_var433);
        return;
      }
      const _var439 = performance.now();
      try {
        const _var440 = await _var427(_var435.signal);
        const _var441 = performance.now() - _var439;
        if (_var435.signal.aborted) {
          _var337.delete(_var435);
          _var338.delete(_var433);
          const _var442 = _var339.get(_var433);
          if (_var442) {
            clearTimeout(_var442);
            _var336.delete(_var442);
          }
          _var339.delete(_var433);
          _var425("Request cancelled", "#f59e0b");
          return;
        }
        let _var443 = null;
        if (_var440?.status !== undefined && _var440?.status !== null) {
          _var443 = _var440.status;
        } else if (_var440?.data?.status_code !== undefined && _var440?.data?.status_code !== null) {
          _var443 = _var440.data.status_code;
        } else if (_var440?.data?.data?.status_code !== undefined && _var440?.data?.data?.status_code !== null) {
          _var443 = _var440.data.data.status_code;
        } else if (_var440?.data?.statusCode !== undefined && _var440?.data?.statusCode !== null) {
          _var443 = _var440.data.statusCode;
        } else if (_var440?.data?.data?.statusCode !== undefined && _var440?.data?.data?.statusCode !== null) {
          _var443 = _var440.data.data.statusCode;
        }
        if (_var443 !== null && _var443 !== 200) {
          if (_var348() && _var434 < _var432 && !_var436 && !_var435.signal.aborted) {
            _var434++;
            const _var444 = _var408(_var443);
            const _var445 = _var440?.message || _var440?.data?.message || "Request returned status " + _var443;
            if (msgEl) {
              _var425(_var445 + ". Retrying in " + (_var444 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
            }
            _var236(_var437, _var444, _var433);
            return;
          } else {
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var446) {}
            const _var447 = _var440?.message || _var440?.data?.message || "Request returned status " + _var443;
            if (msgEl) {
              const _var448 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
              if (_var448 && _var448.showStatus) {
                _var448.showStatus(_var429 + " failed: " + _var447, _var443, "error");
              } else {
                _var425(_var429 + " failed: " + _var447, "#ef4444");
              }
            }
            const _var449 = _var339.get(_var433);
            if (_var449) {
              clearTimeout(_var449);
              _var336.delete(_var449);
            }
            _var337.delete(_var435);
            _var338.delete(_var433);
            _var339.delete(_var433);
            _var340.delete(_var433);
            return;
          }
        }
        _var436 = true;
        try {
          _var435.abort();
        } catch (_var450) {}
        const _var451 = _var339.get(_var433);
        if (_var451) {
          clearTimeout(_var451);
          _var336.delete(_var451);
        }
        _var337.delete(_var435);
        _var338.delete(_var433);
        _var339.delete(_var433);
        _var340.delete(_var433);
        if (_var428) {
          await _var428(_var440, _var441);
        }
        return _var440;
      } catch (_var452) {
        if (_var452?.name === "TypeError" && _var452?.message?.includes("fetch")) {
          _var452.status = 0;
        }
        let _var453 = null;
        if (_var452?.data?.status_code !== undefined && _var452?.data?.status_code !== null && typeof _var452.data.status_code === "number") {
          _var453 = _var452.data.status_code;
        } else if (_var452?.data?.data?.status_code !== undefined && _var452?.data?.data?.status_code !== null && typeof _var452.data.data.status_code === "number") {
          _var453 = _var452.data.data.status_code;
        } else if (_var452?.data?.statusCode !== undefined && _var452?.data?.statusCode !== null && typeof _var452.data.statusCode === "number") {
          _var453 = _var452.data.statusCode;
        } else if (_var452?.data?.data?.statusCode !== undefined && _var452?.data?.data?.statusCode !== null && typeof _var452.data.data.statusCode === "number") {
          _var453 = _var452.data.data.statusCode;
        } else if (_var452?.response?.data?.status_code !== undefined && _var452?.response?.data?.status_code !== null && typeof _var452.response.data.status_code === "number") {
          _var453 = _var452.response.data.status_code;
        } else if (_var452?.response?.data?.data?.status_code !== undefined && _var452?.response?.data?.data?.status_code !== null && typeof _var452.response.data.data.status_code === "number") {
          _var453 = _var452.response.data.data.status_code;
        } else if (_var452?.response?.data?.statusCode !== undefined && _var452?.response?.data?.statusCode !== null && typeof _var452.response.data.statusCode === "number") {
          _var453 = _var452.response.data.statusCode;
        } else if (_var452?.response?.data?.data?.statusCode !== undefined && _var452?.response?.data?.data?.statusCode !== null && typeof _var452.response.data.data.statusCode === "number") {
          _var453 = _var452.response.data.data.statusCode;
        }
        let _var454 = _var452.message || "Unknown error";
        if (_var452?.data?.message) {
          _var454 = _var452.data.message;
        } else if (_var452?.data?.data?.message) {
          _var454 = _var452.data.data.message;
        } else if (_var452?.data?.msg) {
          _var454 = _var452.data.msg;
        }
        const _var455 = _var452?.status || _var452?.response?.status || 0;
        if ((_var455 >= 500 && _var455 <= 599 || _var455 === 429) && _var453 !== 500) {
          if (_var455 >= 500 && _var455 <= 599 && _var430.custom5xxHandler) {
            const _var456 = _var430.custom5xxHandler(_var452, _var434, _var432, msgEl);
            if (_var456 === false) {
              const _var457 = _var339.get(_var433);
              if (_var457) {
                clearTimeout(_var457);
                _var336.delete(_var457);
              }
              if (msgEl) {
                const _var458 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var458 && _var458.showStatus) {
                  _var458.showStatus(_var429 + " failed: " + _var454, _var455, "error");
                } else {
                  _var425(_var429 + " failed: " + _var454, "#ef4444");
                }
              }
              _var337.delete(_var435);
              _var339.delete(_var433);
              return;
            }
            if (_var456 && _var456.retry && !_var436 && !_var435.signal.aborted) {
              const _var459 = _var455 === 503 || _var453 === 503 || _var452?.data?.status_code === 503 || _var452?.data?.data?.status_code === 503;
              const _var460 = 4;
              const _var461 = _var459 ? _var460 : _var432;
              if (_var434 >= _var461) {
                _var436 = true;
                try {
                  _var435.abort();
                } catch (_var462) {}
                if (msgEl) {
                  const _var463 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                  if (_var463 && _var463.showStatus) {
                    _var463.showStatus(_var429 + " failed: " + _var454, _var455, "error");
                  } else {
                    _var425(_var429 + " failed: " + _var454, "#ef4444");
                  }
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              _var434++;
              let _var464 = _var459 && _var348() ? _var237() * 1000 : _var456.delay || 20000;
              const _var465 = _var459 ? _var434 + "/" + _var460 : _var434 + "/" + _var432;
              if (msgEl) {
                _var425(_var429 + " failed. Retrying in " + (_var464 / 1000).toFixed(1) + "s... (" + _var465 + ")", "#f59e0b");
              }
              _var236(_var437, _var464, _var433);
              return;
            }
          }
          const _var466 = _var455 === 503 || _var453 === 503 || _var452?.data?.status_code === 503 || _var452?.data?.data?.status_code === 503;
          const _var467 = 4;
          const _var468 = _var466 ? _var467 : _var432;
          if (_var348() && _var434 < _var468 && !_var436 && !_var435.signal.aborted) {
            _var434++;
            let _var469 = _var466 ? _var237() * 1000 : 20000;
            if (msgEl) {
              const _var470 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
              const _var471 = _var455 === 429 ? "Rate limited" : _var454 && _var454 !== "Unknown error" ? _var454 : "Server error (" + _var455 + ")";
              const _var472 = _var466 ? _var434 + "/" + _var467 : _var434 + "/" + _var432;
              if (_var470 && _var470.showStatus) {
                _var470.showStatus(_var471 + ". Retrying in " + (_var469 / 1000).toFixed(1) + "s... (" + _var472 + ")", _var455, "warn");
              } else {
                _var425(_var471 + ". Retrying in " + (_var469 / 1000).toFixed(1) + "s... (" + _var472 + ")", "#f59e0b");
              }
            }
            _var236(_var437, _var469, _var433);
            return;
          } else {
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var473) {}
            const _var474 = _var339.get(_var433);
            if (_var474) {
              clearTimeout(_var474);
              _var336.delete(_var474);
            }
            if (msgEl) {
              const _var475 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
              const _var476 = _var455 === 429 ? "Rate limited. Please wait." : _var454 && _var454 !== "Unknown error" ? _var454 : "Server error (" + _var455 + "). Please try again.";
              if (_var475 && _var475.showStatus) {
                _var475.showStatus(_var476, _var455, "error");
              } else {
                _var425(_var476, "#ef4444");
              }
            }
            _var337.delete(_var435);
            _var339.delete(_var433);
            return;
          }
        }
        if (_var453 === null || _var453 === undefined) {
          if (_var452?.data?.status_code === 500 || _var452?.data?.data?.status_code === 500) {
            _var453 = 500;
            _var243("[requestWithRetry] Fixed: status was null but found status_code 500 in error.data, setting status=500");
          } else if (_var452?.data?.status_code === 503 || _var452?.data?.data?.status_code === 503) {
            _var453 = 503;
            _var243("[requestWithRetry] Fixed: status was null but found status_code 503 in error.data, setting status=503");
          } else {
            _var436 = true;
            _var337.delete(_var435);
            _var339.delete(_var433);
            if (msgEl) {
              _var425("Error: status_code not found in response body", "#ef4444");
            }
            return;
          }
        }
        switch (_var453) {
          case 401:
            if (_var430.custom401Handler) {
              const _var477 = _var430.custom401Handler(_var452, _var434, _var432, msgEl);
              if (_var477 === false) {
                const _var478 = _var339.get(_var433);
                if (_var478) {
                  clearTimeout(_var478);
                  _var336.delete(_var478);
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              if (_var477 && _var477.retry && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var479 = _var237() * 1000;
                const _var480 = _var477.delay || (_var479 > 0 ? _var479 : 10000);
                if (msgEl) {
                  _var425(_var454 + ". Retrying in " + (_var480 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                _var236(_var437, _var480, _var433);
                return;
              }
            }
            if (_var432 === 1) {
              _var243("401 error in single retry mode - NO RETRY (maxRetries: " + _var432 + ")");
            }
            _var243("401 error handled - user logged out, clearing session (NO RETRY)");
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var481) {}
            _var336.forEach(_var482 => clearTimeout(_var482));
            _var336.clear();
            const _var483 = _var339.get(_var433);
            if (_var483) {
              clearTimeout(_var483);
              _var336.delete(_var483);
            }
            _var339.clear();
            if (msgEl) {
              if (msgEl.showStatus) {
                msgEl.showStatus(custom401Msg, 401, "error");
              } else {
                _var425(custom401Msg, "#ef4444");
              }
            }
            _var231();
            _var337.delete(_var435);
            _var339.delete(_var433);
            return;
          case 419:
            if (_var430.custom419Handler) {
              const _var484 = _var430.custom419Handler(_var452, _var434, _var432, msgEl);
              if (_var484 === false) {
                const _var485 = _var339.get(_var433);
                if (_var485) {
                  clearTimeout(_var485);
                  _var336.delete(_var485);
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              if (_var484 && _var484.retry && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var486 = _var237() * 1000;
                const _var487 = _var484.delay || (_var486 > 0 ? _var486 : 10000);
                if (msgEl) {
                  _var425(_var454 + ". Retrying in " + (_var487 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                _var236(_var437, _var487, _var433);
                return;
              }
            }
            if (_var432 === 1) {
              _var243("419 error in single retry mode - NO RETRY (maxRetries: " + _var432 + ")");
            }
            _var243("419 error handled - session expired, autoProcessEnabled: " + _var331 + ", on419 handler: " + !!on419 + " (NO CONTINUOUS RETRY)");
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var488) {}
            _var336.forEach(_var489 => clearTimeout(_var489));
            _var336.clear();
            const _var490 = _var339.get(_var433);
            if (_var490) {
              clearTimeout(_var490);
              _var336.delete(_var490);
            }
            _var339.clear();
            if (show419ServerMessage && msgEl) {
              if (msgEl.showStatus) {
                msgEl.showStatus("Session expired. Refreshing...", 419, "warn");
              } else {
                _var425("Session expired. Refreshing...", "#f59e0b");
              }
            }
            if (on419) {
              _var243("Calling on419 handler ONCE for label: " + _var429 + " (no continuous retry)");
              on419();
            } else if (_var331) {
              _var243("Auto-restarting chain ONCE for label: " + _var429 + " (no continuous retry)");
              // TOLOOK
              setTimeout(() => {
                if (_var429.includes("Application")) {
                  _var491();
                } else if (_var429.includes("Personal")) {
                  if (!_var341) {
                    _var492();
                  }
                } else if (_var429.includes("Overview")) {
                  if (!_var342) {
                    _var493();
                  }
                }
              }, 2000);
            } else {
              _var243("419 error - no handler and autoProcess disabled, label: " + _var429);
            }
            _var337.delete(_var435);
            _var339.delete(_var433);
            return;
          case 422:
            if (_var430.custom422Handler) {
              const _var494 = _var430.custom422Handler(_var452, _var434, _var432, msgEl);
              if (_var494 === false) {
                const _var495 = _var339.get(_var433);
                if (_var495) {
                  clearTimeout(_var495);
                  _var336.delete(_var495);
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              if (_var494 && _var494.retry && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var496 = _var237() * 1000;
                const _var497 = _var494.delay || (_var496 > 0 ? _var496 : 10000);
                if (msgEl) {
                  _var425(_var454 + ". Retrying in " + (_var497 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                _var236(_var437, _var497, _var433);
                return;
              }
            }
            const _var498 = _var348() && _var434 < _var432 && !_var436 && !_var435.signal.aborted;
            _var243("422 retry check - canRetry: " + _var498 + ", autoRetryEnabled: " + _var348() + ", retryCount: " + _var434 + ", maxRetries: " + _var432 + ", isCompleted: " + _var436 + ", aborted: " + _var435.signal.aborted);
            if (_var498) {
              _var434++;
              const _var499 = _var429 && (_var429.toLowerCase().includes("send otp") || _var429.toLowerCase().includes("resend otp"));
              const _var500 = _var499 ? 12000 : 20000;
              _var243("422 retry scheduled - delay: " + _var500 + "ms (" + (_var500 / 1000).toFixed(1) + "s) - " + (_var499 ? "Send Payment OTP" : "default") + " delay (not user setting), retryCount: " + _var434 + "/" + _var432);
              if (msgEl) {
                _var425(_var454 + ". Retrying in " + (_var500 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
              }
              _var236(_var437, _var500, _var433);
              return;
            } else {
              _var243("422 retry NOT scheduled - autoRetryEnabled: " + _var348() + ", retryCount: " + _var434 + ", maxRetries: " + _var432 + ", isCompleted: " + _var436);
              _var436 = true;
              try {
                _var435.abort();
              } catch (_var501) {}
              const _var502 = _var339.get(_var433);
              if (_var502) {
                clearTimeout(_var502);
                _var336.delete(_var502);
              }
              if (msgEl) {
                const _var503 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var503 && _var503.showStatus) {
                  _var503.showStatus(_var454, _var453, "warn");
                } else {
                  _var425(_var454, "#f59e0b");
                }
              }
              _var337.delete(_var435);
              _var339.delete(_var433);
              return;
            }
          case 429:
            if (_var430.custom429Handler) {
              const _var504 = _var430.custom429Handler(_var452, _var434, _var432, msgEl);
              if (_var504 === false) {
                const _var505 = _var339.get(_var433);
                if (_var505) {
                  clearTimeout(_var505);
                  _var336.delete(_var505);
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              if (_var504 && _var504.retry && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var506 = _var237() * 1000;
                const _var507 = _var504.delay || (_var506 > 0 ? _var506 : 20000);
                if (msgEl) {
                  _var425(_var454 + ". Retrying in " + (_var507 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                _var236(_var437, _var507, _var433);
                return;
              }
            }
            if (_var432 === 1 && _var348() && _var434 < _var432 && !_var436 && !_var435.signal.aborted) {
              _var434++;
              const _var508 = 20000;
              if (msgEl) {
                const _var509 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var509 && _var509.showStatus) {
                  _var509.showStatus("Rate limited. Retrying in " + (_var508 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", _var453, "warn");
                } else {
                  _var425("Rate limited. Retrying in " + (_var508 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
              }
              _var236(_var437, _var508, _var433);
              return;
            }
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var510) {}
            const _var511 = _var339.get(_var433);
            if (_var511) {
              clearTimeout(_var511);
              _var336.delete(_var511);
            }
            if (msgEl) {
              const _var512 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
              if (_var512 && _var512.showStatus) {
                _var512.showStatus(_var454, _var453, "error");
              } else {
                _var425(_var454, "#ff4444");
              }
            }
            _var337.delete(_var435);
            _var339.delete(_var433);
            return;
          case 500:
            if (_var430.custom500Handler) {
              const _var513 = _var430.custom500Handler(_var452, _var434, _var432, msgEl);
              if (_var513 === false) {
                const _var514 = _var339.get(_var433);
                if (_var514) {
                  clearTimeout(_var514);
                  _var336.delete(_var514);
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
              if (_var513 && _var513.retry && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var515 = _var237() * 1000;
                const _var516 = _var513.delay || (_var515 > 0 ? _var515 : 20000);
                if (msgEl) {
                  _var425(_var454 + ". Retrying in " + (_var516 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                _var236(_var437, _var516, _var433);
                return;
              }
            }
            _var436 = true;
            try {
              _var435.abort();
            } catch (_var517) {}
            const _var518 = _var339.get(_var433);
            if (_var518) {
              clearTimeout(_var518);
              _var336.delete(_var518);
            }
            if (msgEl) {
              const _var519 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
              if (_var519 && _var519.showStatus) {
                _var519.showStatus(_var454, _var453, "error");
              } else {
                _var425(_var454, "#ef4444");
              }
            }
            _var337.delete(_var435);
            _var339.delete(_var433);
            return;
          case 503:
            const _var520 = _var453 === 503 || _var452?.data?.status_code === 503 || _var452?.data?.data?.status_code === 503;
            const _var521 = 4;
            if (_var348() && _var434 < _var521 && !_var436 && !_var435.signal.aborted) {
              _var434++;
              let _var522 = _var237() * 1000;
              if (msgEl) {
                const _var523 = _var454 && _var454 !== "Unknown error" && _var454.trim().length > 0 ? _var454 : "Service Unavailable (503)";
                const _var524 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var524 && _var524.showStatus) {
                  _var524.showStatus(_var523 + ". Retrying in " + (_var522 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var521 + ")", _var453, "warn");
                } else {
                  _var425(_var523 + ". Retrying in " + (_var522 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var521 + ")", "#f59e0b");
                }
              }
              _var236(_var437, _var522, _var433);
              return;
            } else {
              _var436 = true;
              try {
                _var435.abort();
              } catch (_var525) {}
              const _var526 = _var339.get(_var433);
              if (_var526) {
                clearTimeout(_var526);
                _var336.delete(_var526);
              }
              if (msgEl) {
                const _var527 = _var454 && _var454 !== "Unknown error" && _var454.trim().length > 0 ? _var454 : "Service Unavailable (503). Please try again.";
                const _var528 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var528 && _var528.showStatus) {
                  _var528.showStatus(_var527, _var453, "error");
                } else {
                  _var425(_var527, "#ef4444");
                }
              }
              _var337.delete(_var435);
              _var339.delete(_var433);
              return;
            }
          default:
            if (_var453 === 0) {
              if (_var348() && _var434 < _var432 && !_var436 && !_var435.signal.aborted) {
                _var434++;
                const _var529 = _var408(_var453);
                if (msgEl) {
                  _var425(_var429 + " failed. Retrying in " + (_var529 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                }
                const _var530 = async () => {
                  if (_var435.signal.aborted || _var436) {
                    _var337.delete(_var435);
                    _var338.delete(_var433);
                    const _var531 = _var339.get(_var433);
                    if (_var531) {
                      clearTimeout(_var531);
                      _var336.delete(_var531);
                    }
                    _var339.delete(_var433);
                    return;
                  }
                  try {
                    const _var532 = await _var427(_var435.signal);
                    const _var533 = performance.now() - _var439;
                    if (_var435.signal.aborted) {
                      _var337.delete(_var435);
                      _var338.delete(_var433);
                      const _var534 = _var339.get(_var433);
                      if (_var534) {
                        clearTimeout(_var534);
                        _var336.delete(_var534);
                      }
                      _var339.delete(_var433);
                      return;
                    }
                    _var436 = true;
                    try {
                      _var435.abort();
                    } catch (_var535) {}
                    const _var536 = _var339.get(_var433);
                    if (_var536) {
                      clearTimeout(_var536);
                      _var336.delete(_var536);
                    }
                    _var337.delete(_var435);
                    _var338.delete(_var433);
                    _var339.delete(_var433);
                    _var340.delete(_var433);
                    if (_var428) {
                      await _var428(_var532, _var533);
                    }
                    return _var532;
                  } catch (_var537) {
                    let _var538 = null;
                    if (_var537?.data?.status_code !== undefined && _var537?.data?.status_code !== null && typeof _var537.data.status_code === "number") {
                      _var538 = _var537.data.status_code;
                    } else if (_var537?.data?.data?.status_code !== undefined && _var537?.data?.data?.status_code !== null && typeof _var537.data.data.status_code === "number") {
                      _var538 = _var537.data.data.status_code;
                    } else if (_var537?.data?.statusCode !== undefined && _var537?.data?.statusCode !== null && typeof _var537.data.statusCode === "number") {
                      _var538 = _var537.data.statusCode;
                    } else if (_var537?.data?.data?.statusCode !== undefined && _var537?.data?.data?.statusCode !== null && typeof _var537.data.data.statusCode === "number") {
                      _var538 = _var537.data.data.statusCode;
                    } else if (_var537?.response?.data?.status_code !== undefined && _var537?.response?.data?.status_code !== null && typeof _var537.response.data.status_code === "number") {
                      _var538 = _var537.response.data.status_code;
                    } else if (_var537?.response?.data?.data?.status_code !== undefined && _var537?.response?.data?.data?.status_code !== null && typeof _var537.response.data.data.status_code === "number") {
                      _var538 = _var537.response.data.data.status_code;
                    } else if (_var537?.response?.data?.statusCode !== undefined && _var537?.response?.data?.statusCode !== null && typeof _var537.response.data.statusCode === "number") {
                      _var538 = _var537.response.data.statusCode;
                    } else if (_var537?.response?.data?.data?.statusCode !== undefined && _var537?.response?.data?.data?.statusCode !== null && typeof _var537.response.data.data.statusCode === "number") {
                      _var538 = _var537.response.data.data.statusCode;
                    }
                    if (_var538 === null || _var538 === undefined) {
                      if (_var537?.name === "TypeError" && _var537?.message?.includes("fetch")) {
                        _var538 = 0;
                      } else {
                        _var243("WARNING: retryError status_code not found, skipping retry");
                        _var337.delete(_var435);
                        _var339.delete(_var433);
                        return;
                      }
                    }
                    const _var539 = _var537.message || "Retry failed";
                    const _var540 = _var537?.status || _var537?.response?.status || 0;
                    if (_var540 >= 500 && _var540 <= 599 || _var540 === 429) {
                      if (_var540 >= 500 && _var540 <= 599 && _var430.custom5xxHandler) {
                        const _var541 = _var430.custom5xxHandler(_var537, _var434, _var432, msgEl);
                        if (_var541 && _var541.retry && !_var436 && !_var435.signal.aborted) {
                          _var434++;
                          const _var542 = _var541.delay || 20000;
                          if (msgEl) {
                            _var425(_var429 + " retry failed. Retrying in " + (_var542 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                          }
                          _var236(_var530, _var542, _var433);
                          return;
                        }
                      }
                      if (_var348() && _var434 < _var432 && !_var436 && !_var435.signal.aborted) {
                        _var434++;
                        const _var543 = 20000;
                        if (msgEl) {
                          const _var544 = _var540 === 429 ? "Rate limited" : "Server error (" + _var540 + ")";
                          _var425(_var429 + " retry failed: " + _var544 + ". Retrying in " + (_var543 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                        }
                        _var236(_var530, _var543, _var433);
                        return;
                      }
                    } else if (_var348() && _var538 === 0 && _var434 < _var432 && !_var436 && !_var435.signal.aborted) {
                      _var434++;
                      const _var545 = _var408(_var538);
                      if (msgEl) {
                        _var425(_var429 + " retry failed. Retrying in " + (_var545 / 1000).toFixed(1) + "s... (" + _var434 + "/" + _var432 + ")", "#f59e0b");
                      }
                      _var236(_var530, _var545, _var433);
                      return;
                    }
                    const _var546 = _var339.get(_var433);
                    if (_var546) {
                      clearTimeout(_var546);
                      _var336.delete(_var546);
                    }
                    if (msgEl) {
                      const _var547 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                      if (_var547 && _var547.showStatus) {
                        _var547.showStatus(_var429 + " failed after retries: " + _var539, _var538, "error");
                      } else {
                        _var425(_var429 + " failed after retries: " + _var539, "#ef4444");
                      }
                    }
                    _var337.delete(_var435);
                    _var338.delete(_var433);
                    _var339.delete(_var433);
                    _var340.delete(_var433);
                    throw _var537;
                  }
                };
                _var236(_var530, _var529, _var433);
                return;
              } else {
                _var436 = true;
                try {
                  _var435.abort();
                } catch (_var548) {}
                const _var549 = _var339.get(_var433);
                if (_var549) {
                  clearTimeout(_var549);
                  _var336.delete(_var549);
                }
                if (msgEl) {
                  const _var550 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                  if (_var550 && _var550.showStatus) {
                    _var550.showStatus(_var429 + " failed: " + _var454, _var453, "error");
                  } else {
                    _var425(_var429 + " failed: " + _var454, "#ef4444");
                  }
                }
                _var337.delete(_var435);
                _var339.delete(_var433);
                return;
              }
            }
            if (_var453 !== 0) {
              _var436 = true;
              _var337.delete(_var435);
              _var339.delete(_var433);
              if (msgEl) {
                const _var551 = msgEl.querySelector ? msgEl : document.querySelector(".ivac-status-panel");
                if (_var551 && _var551.showStatus) {
                  _var551.showStatus(_var429 + " failed: " + _var454, _var453, "error");
                } else {
                  _var425(_var429 + " failed: " + _var454, "#ef4444");
                }
              }
              return;
            }
        }
      }
    };
    return _var437();
  }
  function _var552(_var553, _var554) {
    if (!_var352() && !_var353()) {
      return;
    }
    const _var555 = _var237() * 1000;
    const _var556 = _var555 === 0 ? 0 : Math.max(_var555, 1000);
    const _var557 = _var555 === 0 ? 0 : Math.max(500, 2000 - _var553 / 10);
    const _var558 = _var556 + _var557;
    const _var559 = // TOLOOK
    setTimeout(() => {
      _var560.delete(_var559);
      if (_var352() || _var353()) {
        _var554();
      }
    }, _var558);
    _var560.add(_var559);
  }
  async function _var561(_var562, _var563, _var564, _var565 = {}) {
    const {
      messageElement = null,
      on401 = null,
      on419 = null,
      on429StopAll = true,
      show419ServerMessage = false,
      maxRetries: _var566 = _var76,
      custom401Message = "You are logged out. Please log in."
    } = _var565;
    const _var567 = _var393(_var566, _var76);
    const _var568 = _var416();
    const _var569 = performance.now();
    let _var570 = 0;
    const _var571 = async () => {
      try {
        const _var572 = await _var562(_var568.signal);
        const _var573 = performance.now() - _var569;
        if (_var568.signal.aborted) {
          _var337.delete(_var568);
          _var425("Request cancelled", "#f59e0b");
          return;
        }
        _var337.delete(_var568);
        if (_var563) {
          await _var563(_var572, _var573);
        }
        return _var572;
      } catch (_var574) {
        if (_var574?.name === "AbortError" || _var574?.message === "canceled") {
          _var337.delete(_var568);
          return;
        }
        if (_var574?.name === "TypeError" && _var574?.message?.includes("fetch")) {
          _var574.status = 0;
        }
        let _var575 = null;
        if (_var574?.data?.status_code !== undefined && _var574?.data?.status_code !== null) {
          _var575 = _var574.data.status_code;
        } else if (_var574?.data?.data?.status_code !== undefined && _var574?.data?.data?.status_code !== null) {
          _var575 = _var574.data.data.status_code;
        } else if (_var574?.data?.statusCode !== undefined && _var574?.data?.statusCode !== null) {
          _var575 = _var574.data.statusCode;
        } else if (_var574?.data?.data?.statusCode !== undefined && _var574?.data?.data?.statusCode !== null) {
          _var575 = _var574.data.data.statusCode;
        } else if (_var574?.response?.data?.status_code !== undefined && _var574?.response?.data?.status_code !== null) {
          _var575 = _var574.response.data.status_code;
        } else if (_var574?.response?.data?.data?.status_code !== undefined && _var574?.response?.data?.data?.status_code !== null) {
          _var575 = _var574.response.data.data.status_code;
        } else if (_var574?.response?.data?.statusCode !== undefined && _var574?.response?.data?.statusCode !== null) {
          _var575 = _var574.response.data.statusCode;
        } else if (_var574?.response?.data?.data?.statusCode !== undefined && _var574?.response?.data?.data?.statusCode !== null) {
          _var575 = _var574.response.data.data.statusCode;
        }
        let _var576 = "Request failed";
        if (_var574?.data?.message) {
          _var576 = _var574.data.message;
        } else if (_var574?.data?.data?.message) {
          _var576 = _var574.data.data.message;
        } else if (_var574?.message) {
          _var576 = _var574.message;
        } else if (_var574?.response?.data?.message) {
          _var576 = _var574.response.data.message;
        } else if (_var574?.response?.data?.data?.message) {
          _var576 = _var574.response.data.data.message;
        } else if (_var574?.data?.msg) {
          _var576 = _var574.data.msg;
        }
        const _var577 = _var574?.status || _var574?.response?.status || 0;
        const _var578 = _var575 === 500 || _var574?.data?.status_code === 500 || _var574?.data?.data?.status_code === 500;
        const _var579 = _var577 === 503 || _var575 === 503 || _var574?.data?.status_code === 503 || _var574?.data?.data?.status_code === 503;
        if ((_var577 >= 500 && _var577 <= 599 || _var577 === 429) && !_var578) {
          const _var580 = 4;
          const _var581 = _var579 ? _var580 : _var567;
          if (_var348() && _var570 < _var581) {
            _var570++;
            let _var582 = _var579 ? _var237() * 1000 : 20000;
            if (messageElement) {
              let _var583;
              if (_var577 === 429) {
                _var583 = "Rate limited";
              } else if (_var576 && _var576 !== "Request failed" && _var576.trim().length > 0) {
                _var583 = _var576;
              } else {
                _var583 = "Server error (" + _var577 + ")";
              }
              const _var584 = _var579 ? _var570 + "/" + _var580 : _var570 + "/" + _var567;
              if (messageElement.showStatus) {
                messageElement.showStatus(_var583 + ". Retrying in " + (_var582 / 1000).toFixed(1) + "s... (" + _var584 + ")", _var577, "warn");
              } else {
                _var425(_var583 + ". Retrying in " + (_var582 / 1000).toFixed(1) + "s... (" + _var584 + ")", "#f59e0b");
              }
            }
            _var236(_var571, _var582);
            return;
          } else {
            if (messageElement) {
              let _var585;
              if (_var577 === 429) {
                _var585 = "Rate limited. Please wait before trying again.";
              } else if (_var576 && _var576 !== "Request failed" && _var576.trim().length > 0) {
                _var585 = _var576;
              } else {
                _var585 = "Server error (" + _var577 + "). Please try again.";
              }
              if (messageElement.showStatus) {
                messageElement.showStatus(_var585, _var577, "error");
              } else {
                _var425(_var585, "#ef4444");
              }
            }
            if (on429StopAll && _var577 === 429) {
              _var422(messageElement);
            }
            _var337.delete(_var568);
            return;
          }
        }
        switch (_var575) {
          case 401:
            if (messageElement) {
              if (messageElement.showStatus) {
                messageElement.showStatus(custom401Message, 401, "error");
              } else {
                _var425(custom401Message, "#ef4444");
              }
            }
            if (on401) {
              on401();
            }
            _var337.delete(_var568);
            return;
          case 419:
            const _var586 = show419ServerMessage ? _var576 : "Session expired. Please try again.";
            if (messageElement) {
              if (messageElement.showStatus) {
                messageElement.showStatus(_var586, _var575, "warn");
              } else {
                _var425(_var586, "#f59e0b");
              }
            }
            if (on419) {
              _var243("Calling on419 handler ONCE (no continuous retry)");
              on419();
            }
            _var337.delete(_var568);
            return;
          case 422:
            if (_var348() && _var570 < _var567) {
              _var570++;
              const _var587 = _var564 && (_var564.toLowerCase().includes("send otp") || _var564.toLowerCase().includes("resend otp"));
              const _var588 = _var587 ? 12000 : 20000;
              if (messageElement) {
                if (messageElement.showStatus) {
                  messageElement.showStatus(_var576 + ". Retrying in " + (_var588 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var567 + ")", _var575, "warn");
                } else {
                  _var425(_var576 + ". Retrying in " + (_var588 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var567 + ")", "#f59e0b");
                }
              }
              _var236(_var571, _var588);
              return;
            } else {
              if (messageElement) {
                if (messageElement.showStatus) {
                  messageElement.showStatus(_var576, _var575, "warn");
                } else {
                  _var425(_var576, "#f59e0b");
                }
              }
              _var337.delete(_var568);
              return;
            }
          case 500:
            let _var589 = _var576;
            if (_var574?.data?.message) {
              _var589 = _var574.data.message;
            } else if (_var574?.data?.data?.message) {
              _var589 = _var574.data.data.message;
            } else if (_var574?.message) {
              _var589 = _var574.message;
            }
            _var243("[executeWithRetry] case 500 handler: message500=\"" + _var589 + "\", serverMessage=\"" + _var576 + "\", error.data.message=" + _var574?.data?.message);
            if (messageElement) {
              const _var590 = _var589 && _var589 !== "Request failed" && _var589.trim().length > 0 ? _var589 : _var576 && _var576 !== "Request failed" && _var576.trim().length > 0 ? _var576 : "Server error (500)";
              if (messageElement.showStatus) {
                messageElement.showStatus(_var590, _var575, "error");
              } else {
                _var425(_var590, "#ef4444");
              }
            }
            _var337.delete(_var568);
            return;
          case 503:
            const _var591 = _var575 === 503 || _var574?.data?.status_code === 503 || _var574?.data?.data?.status_code === 503;
            const _var592 = 4;
            if (_var348() && _var570 < _var592) {
              _var570++;
              let _var593 = _var237() * 1000;
              if (messageElement) {
                const _var594 = _var576 && _var576 !== "Request failed" && _var576.trim().length > 0 ? _var576 : "Service Unavailable (503)";
                if (messageElement.showStatus) {
                  messageElement.showStatus(_var594 + ". Retrying in " + (_var593 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var592 + ")", _var575, "warn");
                } else {
                  _var425(_var594 + ". Retrying in " + (_var593 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var592 + ")", "#f59e0b");
                }
              }
              _var236(_var571, _var593);
              return;
            } else {
              if (messageElement) {
                const _var595 = _var576 && _var576 !== "Request failed" && _var576.trim().length > 0 ? _var576 : "Service Unavailable (503). Please try again.";
                if (messageElement.showStatus) {
                  messageElement.showStatus(_var595, _var575, "error");
                } else {
                  _var425(_var595, "#ef4444");
                }
              }
              _var337.delete(_var568);
              return;
            }
        }
        if (_var575 === null || _var575 === undefined) {
          if (_var574?.data?.status_code === 500 || _var574?.data?.data?.status_code === 500) {
            _var575 = 500;
            _var243("[executeWithRetry] Fixed: status was null but found status_code 500 in error.data, setting status=500");
          } else if (_var574?.data?.status_code === 503 || _var574?.data?.data?.status_code === 503) {
            _var575 = 503;
            _var243("[executeWithRetry] Fixed: status was null but found status_code 503 in error.data, setting status=503");
          } else {
            _var337.delete(_var568);
            return;
          }
        }
        switch (_var575) {
          default:
            if (_var348() && _var575 === 0 && _var570 < _var567) {
              _var570++;
              const _var596 = _var408(_var575);
              if (messageElement) {
                _var425(_var564 + " failed. Retrying in " + (_var596 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var567 + ")", "#f59e0b");
              }
              const _var597 = async () => {
                try {
                  const _var598 = await _var562(_var568.signal);
                  const _var599 = performance.now() - _var569;
                  if (_var563) {
                    await _var563(_var598, _var599);
                  }
                  _var337.delete(_var568);
                  return _var598;
                } catch (_var600) {
                  let _var601 = null;
                  if (_var600?.data?.status_code !== undefined && _var600?.data?.status_code !== null && typeof _var600.data.status_code === "number") {
                    _var601 = _var600.data.status_code;
                  } else if (_var600?.data?.data?.status_code !== undefined && _var600?.data?.data?.status_code !== null && typeof _var600.data.data.status_code === "number") {
                    _var601 = _var600.data.data.status_code;
                  } else if (_var600?.data?.statusCode !== undefined && _var600?.data?.statusCode !== null && typeof _var600.data.statusCode === "number") {
                    _var601 = _var600.data.statusCode;
                  } else if (_var600?.data?.data?.statusCode !== undefined && _var600?.data?.data?.statusCode !== null && typeof _var600.data.data.statusCode === "number") {
                    _var601 = _var600.data.data.statusCode;
                  } else if (_var600?.response?.data?.status_code !== undefined && _var600?.response?.data?.status_code !== null && typeof _var600.response.data.status_code === "number") {
                    _var601 = _var600.response.data.status_code;
                  } else if (_var600?.response?.data?.data?.status_code !== undefined && _var600?.response?.data?.data?.status_code !== null && typeof _var600.response.data.data.status_code === "number") {
                    _var601 = _var600.response.data.data.status_code;
                  } else if (_var600?.response?.data?.statusCode !== undefined && _var600?.response?.data?.statusCode !== null && typeof _var600.response.data.statusCode === "number") {
                    _var601 = _var600.response.data.statusCode;
                  } else if (_var600?.response?.data?.data?.statusCode !== undefined && _var600?.response?.data?.data?.statusCode !== null && typeof _var600.response.data.data.statusCode === "number") {
                    _var601 = _var600.response.data.data.statusCode;
                  }
                  const _var602 = _var600?.status || _var600?.response?.status || 0;
                  if (_var602 >= 500 && _var602 <= 599 || _var602 === 429) {
                    if (_var348() && _var570 < _var567) {
                      _var570++;
                      const _var603 = 20000;
                      if (messageElement) {
                        const _var604 = _var602 === 429 ? "Rate limited" : "Server error (" + _var602 + ")";
                        _var425(_var564 + " retry failed: " + _var604 + ". Retrying in " + (_var603 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var567 + ")", "#f59e0b");
                      }
                      _var236(_var597, _var603);
                      return;
                    }
                  }
                  if (_var601 === null || _var601 === undefined) {
                    if (_var600?.name === "TypeError" && _var600?.message?.includes("fetch")) {
                      _var601 = 0;
                    } else {
                      _var243("WARNING: retryError status_code not found, skipping retry");
                      _var337.delete(_var568);
                      return;
                    }
                  }
                  const _var605 = _var600?.data?.message || _var600?.message || _var600?.response?.data?.message || "Retry failed";
                  if (_var348() && _var601 === 0 && _var570 < _var567) {
                    _var570++;
                    const _var606 = _var408(_var601);
                    if (messageElement) {
                      _var425(_var564 + " retry failed. Retrying in " + (_var606 / 1000).toFixed(1) + "s... (" + _var570 + "/" + _var567 + ")", "#f59e0b");
                    }
                    _var236(_var597, _var606);
                    return;
                  } else {
                    if (messageElement) {
                      if (messageElement.showStatus) {
                        messageElement.showStatus(_var564 + " failed after retries: " + _var605, _var601, "error");
                      } else {
                        _var425(_var564 + " failed after retries: " + _var605, "#ef4444");
                      }
                    }
                    _var337.delete(_var568);
                    throw _var600;
                  }
                }
              };
              _var236(_var597, _var596);
              return;
            } else {
              if (messageElement) {
                if (messageElement.showStatus) {
                  messageElement.showStatus(_var564 + " failed: " + _var576, _var575, "error");
                } else {
                  _var425(_var564 + " failed: " + _var576, "#ef4444");
                }
              }
              _var337.delete(_var568);
              return;
            }
        }
      }
    };
    return _var571();
  }
  function _var607(_var608, _var609) {
    const _var610 = parseInt(_var608.replace("#", ""), 16);
    const _var611 = Math.round(_var609 * 2.55);
    const _var612 = (_var610 >> 16) + _var611;
    const _var613 = (_var610 >> 8 & 255) + _var611;
    const _var614 = (_var610 & 255) + _var611;
    return "#" + (16777216 + (_var612 < 255 ? _var612 < 1 ? 0 : _var612 : 255) * 65536 + (_var613 < 255 ? _var613 < 1 ? 0 : _var613 : 255) * 256 + (_var614 < 255 ? _var614 < 1 ? 0 : _var614 : 255)).toString(16).slice(1);
  }
  const _var615 = {
    profilesKey: "ivac_user_profiles",
    currentProfileKey: "ivac_current_profile",
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      webFileId: "",
      familyMembers: []
    },
    applicationInfo: {
      highcom: "1",
      webFileId: "",
      ivacId: "",
      visaTypeId: "13",
      familyCount: "0",
      visitPurpose: "FOR MEDICAL TREATMENT"
    },
    paymentMethod: "mastercard"
  };
  let _var616 = [];
  let _var617 = null;
  let _var128 = {
    personalInfo: {
      ..._var615.personalInfo
    },
    applicationInfo: {
      ..._var615.applicationInfo
    },
    paymentMethod: _var615.paymentMethod,
    profileName: "Default Profile",
    captchaToken: null
  };
  const _var135 = {
    highcomOptions: [{
      value: "4",
      text: "Sylhet"
    }, {
      value: "1",
      text: "Dhaka"
    }, {
      value: "2",
      text: "Chittagong"
    }, {
      value: "3",
      text: "Rajshahi"
    }, {
      value: "5",
      text: "Khulna"
    }],
    ivacCenters: {
      "1": [{
        value: "9",
        text: "IVAC, BARISAL"
      }, {
        value: "12",
        text: "IVAC, JESSORE"
      }, {
        value: "20",
        text: "IVAC, SATKHIRA"
      }, {
        value: "17",
        text: "IVAC, DHAKA (JFP)"
      }],
      "2": [{
        value: "5",
        text: "IVAC, CHITTAGONG"
      }, {
        value: "21",
        text: "IVAC, CUMILLA"
      }, {
        value: "22",
        text: "IVAC, NOAKHALI"
      }, {
        value: "23",
        text: "IVAC, BRAHMANBARIA"
      }],
      "3": [{
        value: "2",
        text: "IVAC, RAJSHAHI"
      }, {
        value: "7",
        text: "IVAC, RANGPUR"
      }, {
        value: "18",
        text: "IVAC, THAKURGAON"
      }, {
        value: "19",
        text: "IVAC, BOGURA"
      }, {
        value: "24",
        text: "IVAC, KUSHTIA"
      }],
      "4": [{
        value: "4",
        text: "IVAC, SYLHET"
      }, {
        value: "8",
        text: "IVAC, MYMENSINGH"
      }],
      "5": [{
        value: "3",
        text: "IVAC, KHULNA"
      }]
    },
    visaTypes: [{
      value: "3",
      text: "TOURIST VISA"
    }, {
      value: "13",
      text: "MEDICAL/MEDICAL ATTENDANT VISA"
    }, {
      value: "1",
      text: "BUSINESS VISA"
    }, {
      value: "6",
      text: "ENTRY VISA"
    }, {
      value: "19",
      text: "DOUBLE ENTRY VISA"
    }, {
      value: "2",
      text: "STUDENT VISA"
    }, {
      value: "18",
      text: "OTHERS VISA"
    }],
    familyCounts: [{
      value: "0",
      text: "0"
    }, {
      value: "1",
      text: "1"
    }, {
      value: "2",
      text: "2"
    }, {
      value: "3",
      text: "3"
    }, {
      value: "4",
      text: "4"
    }],
    paymentMethods: [{
      value: "visa",
      name: "VISA",
      slug: "visacard",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/visa.png"
    }, {
      value: "mastercard",
      name: "MASTER",
      slug: "mastercard",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/master.png"
    }, {
      value: "amex",
      name: "AMEX",
      slug: "city_amex",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/amex.png"
    }, {
      value: "citytouch",
      name: "CITYTOUCH",
      slug: "city",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/citytouch.png"
    }, {
      value: "bankasia",
      name: "BANK ASIA",
      slug: "bankasia",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/abbank.png"
    }, {
      value: "ibbl",
      name: "IBBL",
      slug: "ibbl",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/ibbl.png"
    }, {
      value: "mtbl",
      name: "MTBL",
      slug: "mtbl",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/mtbl.png"
    }, {
      value: "upay",
      name: "Upay",
      slug: "upay",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/upay.png"
    }, {
      value: "abdirect",
      name: "AB Direct",
      slug: "abdirect",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/abbank.png"
    }, {
      value: "dbblmobilebanking",
      name: "DBBL MOBILE BANKING",
      slug: "dbblmobilebanking",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/dbblmobile.png"
    }, {
      value: "bkash",
      name: "Bkash",
      slug: "bkash",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/bkash.png"
    }, {
      value: "nagad",
      name: "Nagad",
      slug: "nagad",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/nagad.png"
    }, {
      value: "mobilemoney",
      name: "Mobile Money",
      slug: "mobilemoney",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/mobilemoney.png"
    }, {
      value: "okwallet",
      name: "Okwallet",
      slug: "okwallet",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/okwallet.png"
    }, {
      value: "dbbl_nexus",
      name: "NEXUS",
      slug: "dbbl_nexus",
      link: "https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/dbblnexus.png"
    }]
  };
  const _var618 = () => {
    try {
      const _var619 = GM_getValue(_var615.profilesKey, "[]");
      if (_var619) {
        _var616 = JSON.parse(_var619);
      }
      const _var620 = GM_getValue(_var615.currentProfileKey, null);
      if (_var620) {
        const _var621 = _var616.find(_var622 => _var622.id === _var620);
        if (_var621) {
          _var128 = {
            ..._var621.data
          };
          _var617 = _var621.id;
          return true;
        }
      }
      if (_var616.length === 0) {
        const _var623 = _var624("Default Profile");
        return true;
      }
      if (!_var617 && _var616.length > 0) {
        _var617 = _var616[0].id;
        _var128 = {
          ..._var616[0].data
        };
        return true;
      }
    } catch (_var625) {}
    return false;
  };
  const _var626 = () => {
    try {
      GM_setValue(_var615.profilesKey, JSON.stringify(_var616));
      if (_var617) {
        GM_setValue(_var615.currentProfileKey, _var617);
      }
      return true;
    } catch (_var627) {
      return false;
    }
  };
  const _var628 = () => {
    if (!_var617) {
      return;
    }
    const _var629 = _var616.findIndex(_var630 => _var630.id === _var617);
    if (_var629 !== -1) {
      _var616[_var629].data = {
        ..._var128
      };
      _var626();
    }
  };
  const _var624 = _var631 => {
    const _var632 = {
      id: Date.now().toString(),
      name: _var631,
      data: {
        personalInfo: {
          ..._var615.personalInfo
        },
        applicationInfo: {
          ..._var615.applicationInfo
        },
        paymentMethod: _var615.paymentMethod,
        profileName: _var631
      }
    };
    _var616.push(_var632);
    _var617 = _var632.id;
    _var128 = {
      ..._var632.data
    };
    _var626();
    return _var632;
  };
  const _var633 = _var634 => {
    _var616 = _var616.filter(_var635 => _var635.id !== _var634);
    if (_var617 === _var634) {
      _var617 = null;
      _var128 = {
        personalInfo: {
          ..._var615.personalInfo
        },
        applicationInfo: {
          ..._var615.applicationInfo
        },
        paymentMethod: _var615.paymentMethod,
        profileName: "Default Profile"
      };
    }
    _var626();
  };
  const _var636 = () => {
    const _var637 = JSON.stringify(_var616, null, 2);
    const _var638 = "data:application/json;charset=utf-8," + encodeURIComponent(_var637);
    const _var639 = "ivac_profiles_" + new Date().toISOString().slice(0, 10) + ".json";
    const _var640 = document.createElement("a");
    _var640.setAttribute("href", _var638);
    _var640.setAttribute("download", _var639);
    _var640.click();
  };
  const _var641 = _var642 => {
    const _var643 = _var642.target.files[0];
    if (!_var643) {
      return;
    }
    const _var644 = new FileReader();
    _var644.onload = _var645 => {
      try {
        const _var646 = JSON.parse(_var645.target.result);
        if (Array.isArray(_var646)) {
          _var616 = _var646;
          _var626();
          _var647("Imported " + _var646.length + " profiles successfully");
        } else {
          _var648("Invalid profile file format");
        }
      } catch (_var649) {
        _var648("Error importing profiles: " + _var649.message);
      }
    };
    _var644.readAsText(_var643);
  };
  function _var650() {
    const _var651 = GM_getValue(GMAIL_STORAGE_KEYS.CUSTOM_CLIENT_ID, "");
    return _var651.trim() || null;
  }
  function _var652() {
    if (!_var617 || !_var128?.personalInfo?.email) {
      return null;
    }
    return _var128.personalInfo.email.trim();
  }
  function _var653(_var654) {
    if (!_var654) {
      return "";
    }
    _var654 = _var654.trim().toLowerCase();
    if (!_var654.includes("@gmail.com")) {
      return _var654;
    }
    const _var655 = _var654.split("@");
    if (_var655.length !== 2) {
      return _var654;
    }
    let _var656 = _var655[0];
    const _var657 = _var655[1];
    if (_var656.includes("+")) {
      _var656 = _var656.split("+")[0];
    }
    _var656 = _var656.replace(/\./g, "");
    return _var656 + "@" + _var657;
  }
  function _var658() {
    if (!_var348() && !_var352()) {
      return;
    }
    _var659();
    gmailOtpPollAttempts = 0;
    pollGmailForOTP();
    gmailOtpPollingInterval = // TOLOOK
    setInterval(() => {
      gmailOtpPollAttempts++;
      if (gmailOtpPollAttempts >= GMAIL_CONFIG.MAX_POLL_ATTEMPTS) {
        _var659();
        return;
      }
      pollGmailForOTP().then(_var660 => {
        if (_var660) {
          _var659();
        }
      });
    }, GMAIL_CONFIG.POLL_INTERVAL_SECONDS * 1000);
  }
  function _var659() {
    if (gmailOtpPollingInterval) {
      clearInterval(gmailOtpPollingInterval);
      gmailOtpPollingInterval = null;
      gmailOtpPollAttempts = 0;
    }
  }
  let _var661 = null;
  let _var662 = null;
  async function _var663() {
    const _var664 = _var652() || document.getElementById("email-input")?.value?.trim();
    const _var665 = document.getElementById("personal_app_password")?.value || _var128?.personalInfo?.appPassword;
    if (!_var664) {
      return null;
    }
    if (!_var665) {
      return null;
    }
    return new Promise(_var666 => {
      if (typeof GM_xmlhttpRequest === "undefined") {
        _var666(null);
        return;
      }
      GM_xmlhttpRequest({
        method: "POST",
        url: "https://sms-user.vercel.app/api/gmail-otp",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          email: _var664,
          appPassword: _var665,
          from: "onlinepayment@sslcommerz.com"
        }),
        onload: function (_var667) {
          try {
            if (_var667.status !== 200) {
              throw new Error("Backend returned status " + _var667.status);
            }
            const _var668 = JSON.parse(_var667.responseText);
            if (!_var668.success || !_var668.otp) {
              throw new Error(_var668.message || "OTP not found");
            }
            const _var669 = _var668.otp.trim();
            const _var670 = document.getElementById("ivac-login-otp");
            if (_var670) {
              _var670.value = _var669;
              _var670.focus();
              _var670.dispatchEvent(new Event("input", {
                bubbles: true,
                cancelable: true
              }));
              _var670.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true
              }));
              _var670.dispatchEvent(new Event("keyup", {
                bubbles: true,
                cancelable: true
              }));
              const _var671 = new InputEvent("input", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText"
              });
              _var670.dispatchEvent(_var671);
              if (_var348() || _var352()) {
                // TOLOOK
                setTimeout(() => {
                  _var672();
                }, 500);
              }
            }
            _var666(_var669);
          } catch (_var673) {
            _var666(null);
          }
        },
        onerror: function (_var674) {
          _var666(null);
        },
        ontimeout: function () {
          _var666(null);
        }
      });
    });
  }
  function _var675() {
    _var676();
    _var663();
    _var662 = Date.now();
    _var661 = // TOLOOK
    setInterval(() => {
      if (Date.now() - _var662 >= 300000) {
        _var676();
        return;
      }
      _var663();
    }, 3000);
  }
  function _var676() {
    if (_var661) {
      clearInterval(_var661);
      _var661 = null;
      _var662 = null;
    }
  }
  const _var677 = {
    success: {
      accent: "#22c55e",
      soft: "rgba(34, 197, 94, 0.25)",
      text: "#dcfce7",
      label: "Success",
      icon: "✔"
    },
    error: {
      accent: "#ef4444",
      soft: "rgba(239, 68, 68, 0.25)",
      text: "#fee2e2",
      label: "Error",
      icon: "⛔"
    },
    warn: {
      accent: "#f97316",
      soft: "rgba(249, 115, 22, 0.25)",
      text: "#ffedd5",
      label: "Warning",
      icon: "⚠"
    },
    info: {
      accent: "#60a5fa",
      soft: "rgba(96, 165, 250, 0.25)",
      text: "#e0f2fe",
      label: "Info",
      icon: "ℹ"
    }
  };
  const _var678 = _var679 => {
    if (_var679.__ivacStatusReady && _var679.querySelector(".msgText") && _var679.querySelector(".msgTimer")) {
      return _var679;
    }
    _var679.__ivacStatusReady = true;
    _var679.innerHTML = `
            <span class="status-pill__code">#---</span>
            <span class="msgTimer">
                <span class="t">00:00</span>
            </span>
            <span class="msgText"></span>
        `;
    return _var679;
  };
  const _var680 = (_var681, _var682, _var683 = null, _var684 = "info") => {
    _var678(_var681);
    const _var685 = _var682.toLowerCase().includes("not found") || _var682.toLowerCase().includes("error") || _var682.toLowerCase().includes("failed") || _var682.toLowerCase().includes("invalid") || _var682.toLowerCase().includes("unauthorized") || _var682.toLowerCase().includes("forbidden");
    if ((_var683 === 200 || _var683 === 201) && _var685) {
      _var683 = null;
      if (_var684 === "success") {
        _var684 = "error";
      }
    }
    const _var686 = _var687 => _var687 === 0 || _var687 >= 500 && _var687 <= 510;
    if (_var683 === 422) {
      _var684 = "info";
    }
    if (_var683 === 419 || _var683 === 401 || _var683 === 403) {
      _var684 = "error";
    }
    if ((_var683 === 200 || _var683 === 201) && !_var685) {
      _var684 = "success";
    }
    if (_var684 === "warning") {
      _var684 = "warn";
    }
    if (!_var677[_var684]) {
      _var684 = "info";
    }
    const _var688 = _var682.replace(/\bstatus:\s*\d+|\s*\[\d+\]/g, "").trim();
    const _var689 = _var681.querySelector(".msgText");
    if (_var689) {
      _var689.textContent = _var688;
    }
    const _var690 = _var681.querySelector(".status-pill__code");
    if (_var690) {
      if (_var683 === null || _var683 === undefined || _var683 === 0) {
        _var690.textContent = "#---";
      } else {
        _var690.textContent = "#" + _var683;
      }
    }
    const _var691 = _var677[_var684] || _var677.info;
    _var681.dataset.statusType = _var684;
    _var681.style.setProperty("--panel-color", _var691.accent);
    _var681.style.setProperty("--panel-color-soft", _var691.soft);
    _var681.style.setProperty("--panel-color-text", _var691.text);
    const _var692 = _var681.querySelector(".status-pill__label");
    if (_var692) {
      _var692.textContent = "";
    }
    const _var693 = _var681.querySelector(".status-pill__icon");
    if (_var693) {
      _var693.textContent = "";
    }
    const _var694 = {
      success: {
        c: "#1f7a4d",
        bg: "#e6fff1",
        bd: "#bdf2d5"
      },
      error: {
        c: "#b42324",
        bg: "#ffe8ea",
        bd: "#ffc5ca"
      },
      warn: {
        c: "#7a5a00",
        bg: "#fff6da",
        bd: "#ffe8a3"
      },
      info: {
        c: "#084c61",
        bg: "#e6f7ff",
        bd: "#b9e6ff"
      }
    };
    const _var695 = _var694[_var684] || _var694.info;
    Object.assign(_var681.style, {
      color: _var695.c,
      borderColor: _var695.bd
    });
    clearInterval(_var681.__iv);
    const _var696 = Date.now();
    const _var697 = _var681.querySelector(".t");
    const _var698 = _var699 => {
      const _var700 = _var699 / 1000 | 0;
      const _var701 = _var700 / 60 | 0;
      return String(_var701).padStart(2, "0") + ":" + String(_var700 % 60).padStart(2, "0");
    };
    if (_var697) {
      _var697.textContent = "00:00";
      _var681.__iv = // TOLOOK
      setInterval(() => {
        if (_var697) {
          _var697.textContent = _var698(Date.now() - _var696);
        }
      }, 250);
    }
  };
  const _var702 = {
    get mobileVerify() {
      return _var98.getEndpointUrl("mobile-verify");
    },
    get login() {
      return _var98.getEndpointUrl("login");
    },
    get loginOtp() {
      return _var98.getEndpointUrl("login-otp");
    },
    get applicationSubmit() {
      return _var98.getEndpointUrl("application-info-submit");
    },
    get personalSubmit() {
      return _var98.getEndpointUrl("personal-info-submit");
    },
    get overviewSubmit() {
      return _var98.getEndpointUrl("overview-submit");
    },
    get checkout() {
      return _var98.getEndpointUrl("checkout");
    },
    get otpSend() {
      return _var98.getEndpointUrl("pay-otp-sent");
    },
    get otpVerify() {
      return _var98.getEndpointUrl("pay-otp-verify");
    },
    get slotTime() {
      return _var98.getEndpointUrl("pay-slot-time");
    },
    get payNow() {
      return _var98.getEndpointUrl("pay-now");
    },
    get captchaGenerate() {
      return _var98.getEndpointUrl("captcha-generate");
    },
    get captchaVerify() {
      return _var98.getEndpointUrl("captcha-verify");
    },
    get imageCaptchaGenerate() {
      return _var98.getEndpointUrl("image-captcha-generate");
    },
    get imageCaptchaVerify() {
      return _var98.getEndpointUrl("image-captcha-verify");
    }
  };
  const _var703 = {
    LOGIN_ENDPOINTS: ["mobile-verify", "login", "login-otp"],
    APPLICATION_ENDPOINTS: ["application-info-submit", "personal-info-submit", "overview-submit", "checkout"],
    PAYMENT_ENDPOINTS: ["pay-otp-sent", "pay-otp-verify", "pay-slot-time", "pay-now"],
    CAPTCHA_ENDPOINTS: ["captcha-generate", "captcha-verify", "image-captcha-generate", "image-captcha-verify"]
  };
  function _var704(_var705) {
    const _var706 = _var703.LOGIN_ENDPOINTS.some(_var707 => _var705 === _var98.getEndpointUrl(_var707));
    if (_var706) {
      return "https://payment.ivacbd.com/";
    } else {
      return "https://payment.ivacbd.com/application";
    }
  }
  function _var708(_var709, _var710) {
    if (_var709.status === 403 && _var710.includes("payment.ivacbd.com")) {
      const _var711 = ["mobile-verify", "login", "login-otp", "application-info-submit", "application", "personal-info-submit", "personal", "overview-submit", "overview", "checkout", "pay-otp-sent", "pay-otp-verify", "pay-slot-time", "captcha-generate", "captcha-verify", "pay-now"];
      const _var712 = _var711.some(_var713 => {
        return _var710.includes("/" + _var713) || _var710.includes(_var713 + "/") || _var710.includes(_var713.replace("-", "/")) || _var710.endsWith("/" + _var713) || _var710.includes("/api/v2/" + _var713) || _var710.includes("/api/v2/payment/" + _var713);
      });
      if (_var712 || _var710.includes("payment.ivacbd.com")) {
        GM_openInTab("https://payment.ivacbd.com/home-data", {
          active: true
        });
      }
    }
  }
  function _var714(_var715, _var716, _var717) {
    if (!_var717 || !_var715) {
      return _var715;
    }
    const _var718 = {
      ..._var715
    };
    if (_var703.LOGIN_ENDPOINTS.includes(_var716)) {
      _var718.captcha_token = _var717;
    } else if (_var716 === "application-info-submit") {
      const _var719 = _var140(_var716, "y6e7uk_token_t6d8n3");
      _var718[_var719] = _var717;
    } else if (_var716 === "pay-now") {
      const _var720 = _var140(_var716, "k5t0g8_token_y4v9f6");
      _var718[_var720] = _var717;
    } else if (_var703.PAYMENT_ENDPOINTS.includes(_var716)) {
      _var718.captcha_token = _var717;
    } else if (_var703.APPLICATION_ENDPOINTS.includes(_var716)) {
      _var718.captcha_token = _var717;
    } else {
      _var718.captcha_token = _var717;
    }
    return _var718;
  }
  let _var721 = null;
  let _var722 = "09:00 - 09:59";
  let _var723 = null;
  let _var724 = null;
  let _var200 = "";
  let _var725 = null;
  let _var726 = null;
  let _var727 = false;
  let _var728 = null;
  let _var729 = [];
  let _var730 = "";
  let _var731 = null;
  let _var732 = null;
  let _var733 = null;
  let _var734 = null;
  let _var735 = false;
  let _var560 = new Set();
  let _var736 = null;
  let _var737 = null;
  let _var738 = false;
  let _var739 = null;
  let _var740 = null;
  let _var741 = false;
  let _var742 = null;
  let _var743 = false;
  let _var744 = null;
  function _var745() {
    if (_var746) {
      clearTimeout(_var746);
      _var746 = null;
    }
    _var742 = null;
    _var743 = false;
  }
  function _var747() {
    if (_var746) {
      clearTimeout(_var746);
    }
    _var746 = // TOLOOK
    setTimeout(() => {
      _var746 = null;
      _var243("Mobile verify captcha token reservation expired (150 seconds)");
      _var745();
    }, 150000);
    _var243("Mobile verify captcha token reserved for 150 seconds");
  }
  let _var748 = false;
  let _var749 = null;
  let _var750 = null;
  let _var751 = false;
  let _var752 = "";
  let _var753 = "";
  const _var754 = 60000;
  const _var755 = 180000;
  const _var756 = 180000;
  const _var757 = 180000;
  const _var758 = 300000;
  const _var759 = {
    login: {
      token: null,
      timestamp: 0
    },
    application: {
      token: null,
      timestamp: 0
    },
    overview: {
      token: null,
      timestamp: 0
    },
    paynow: {
      token: null,
      timestamp: 0
    },
    mobileVerify: {
      xFieldName: null,
      xFieldToken: null,
      timestamp: 0
    }
  };
  function _var760(_var761) {
    const _var762 = _var759[_var761];
    if (!_var762 || !_var762.token) {
      return null;
    }
    const _var763 = Date.now() - _var762.timestamp;
    let _var764 = _var754;
    if (_var761 === "login") {
      _var764 = _var755;
    } else if (_var761 === "paynow") {
      _var764 = _var756;
    } else if (_var761 === "overview") {
      _var764 = _var757;
    }
    if (_var763 >= _var764) {
      _var759[_var761] = {
        token: null,
        timestamp: 0
      };
      return null;
    }
    return _var762.token;
  }
  function _var765(_var766, _var767) {
    if (!_var767) {
      return;
    }
    _var759[_var766] = {
      token: _var767,
      timestamp: Date.now()
    };
    const _var768 = _var766 === "login" || _var766 === "paynow" || _var766 === "overview" ? "3 minutes" : "1 minute";
    _var243("✅ Cached " + _var766 + " token for " + _var768);
  }
  function _var769(_var770) {
    if (_var770 === "mobileVerify") {
      _var759[_var770] = {
        xFieldName: null,
        xFieldToken: null,
        timestamp: 0
      };
    } else {
      _var759[_var770] = {
        token: null,
        timestamp: 0
      };
    }
  }
  function _var771() {
    const _var772 = _var759.mobileVerify;
    if (!_var772 || !_var772.xFieldName && !_var772.xFieldToken) {
      return null;
    }
    const _var773 = Date.now() - _var772.timestamp;
    if (_var773 >= _var758) {
      _var759.mobileVerify = {
        xFieldName: null,
        xFieldToken: null,
        timestamp: 0
      };
      return null;
    }
    return {
      xFieldName: _var772.xFieldName,
      xFieldToken: _var772.xFieldToken
    };
  }
  function _var774(_var775, _var776) {
    if (!_var775 && !_var776) {
      return;
    }
    _var759.mobileVerify = {
      xFieldName: _var775 || null,
      xFieldToken: _var776 || null,
      timestamp: Date.now()
    };
    _var243("✅ Cached mobile verify X-field (name: " + (_var775 || "(null)") + ", token: " + (_var776 ? "present" : "(null)") + ") for 5 minutes");
  }
  let _var777 = "";
  let _var778 = null;
  let _var779 = null;
  let _var780 = null;
  let _var746 = null;
  let _var781 = null;
  let _var782 = null;
  function _var783(_var784) {
    try {
      const _var785 = (_var784 || "").trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(_var785)) {
        _var648("Invalid date. Use YYYY-MM-DD (pick from calendar).");
        return false;
      }
      _var721 = _var785;
      const _var786 = document.getElementById("ivac-date-input");
      if (_var786) {
        _var786.value = _var785;
        _var786.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      }
      const _var787 = document.querySelector("#appointment_date") || document.querySelector("select[name=\"appointment_date\"]") || document.querySelector("select[id*=\"appointment_date\"]");
      if (_var787) {
        while (_var787.firstChild) {
          _var787.removeChild(_var787.firstChild);
        }
        const _var788 = document.createElement("option");
        _var788.value = "";
        _var788.textContent = "Select an Appointment Date";
        _var787.appendChild(_var788);
        const _var789 = document.createElement("option");
        _var789.value = _var785;
        _var789.textContent = _var785;
        _var787.appendChild(_var789);
        _var787.value = _var785;
        _var787.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        _var787.style.outline = "4px solid lime";
        _var787.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
      _var647("Date applied: " + _var785);
      return true;
    } catch (_var790) {
      console.error(_var790);
      _var648("Failed to apply appointment date");
      return false;
    }
  }
  function _var791(_var792) {
    try {
      const _var793 = (_var792 || "").trim();
      if (!_var793) {
        _var648("Time is empty");
        return false;
      }
      _var722 = _var793;
      const _var794 = document.getElementById("ivac-time-status");
      if (_var794) {
        _var794.textContent = "Selected: " + _var793;
      }
      let _var795 = document.querySelector("#appointment_time") || document.querySelector("select[name=\"appointment_time\"]") || document.querySelector("select[id*=\"appointment_time\"]");
      if (!_var795) {
        const _var796 = Array.from(document.querySelectorAll("select"));
        _var795 = _var796.find(_var797 => {
          const _var798 = _var797.querySelector("option");
          return _var798 && _var798.textContent.trim().toLowerCase() === "select an appointment time";
        });
      }
      if (_var795) {
        while (_var795.firstChild) {
          _var795.removeChild(_var795.firstChild);
        }
        const _var799 = document.createElement("option");
        _var799.value = "";
        _var799.disabled = true;
        _var799.hidden = true;
        _var799.textContent = "Select An Appointment time";
        const _var800 = document.createElement("option");
        _var800.value = _var793;
        _var800.textContent = _var793;
        const _var801 = document.createElement("option");
        _var801.value = _var793;
        _var801.textContent = _var793;
        _var795.appendChild(_var799);
        _var795.appendChild(_var800);
        _var795.appendChild(_var801);
        _var795.value = _var793;
        _var795.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        _var795.style.outline = "4px solid lime";
        _var795.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
      _var647("Time applied: " + _var793);
      return true;
    } catch (_var802) {
      console.error(_var802);
      _var648("Failed to apply appointment time");
      return false;
    }
  }
  function _var243(_var803, _var804 = null) {
    _var425(_var803, "#3b82f6");
  }
  function _var648(_var805, _var806 = null) {
    _var425(_var805, "#ff4444");
  }
  function _var647(_var807, _var808 = null, _var809 = null) {
    _var810(_var807, "#00C851", null, _var809);
  }
  function _var811(_var812, _var813) {
    _var812 = _var812.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
    const _var814 = GM_getValue(_var33, "");
    const _var815 = GM_getValue(_var34, "");
    const _var816 = _var814 || _var753 || _var31 || "";
    const _var817 = _var815 || _var777 || _var32 || "";
    const _var818 = {
      userid: _var817,
      apikey: _var816,
      data: _var812
    };
    const _var819 = "https://api.apitruecaptcha.org/one/gettext";
    fetch(_var819, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_var818)
    }).then(_var820 => _var820.json()).then(_var821 => _var813(_var821)).catch(_var822 => {
      _var813({
        error: _var822.message || "Unknown error"
      });
    });
  }
  function _var823(_var824) {
    if (window.ivacImageCaptchaCountdownInterval) {
      clearTimeout(window.ivacImageCaptchaCountdownInterval);
    }
    let _var825 = 120;
    const _var826 = () => {
      if (!_var824 || !_var824.parentElement) {
        if (window.ivacImageCaptchaCountdownInterval) {
          clearTimeout(window.ivacImageCaptchaCountdownInterval);
          window.ivacImageCaptchaCountdownInterval = null;
        }
        return;
      }
      const _var827 = Math.floor(_var825 / 60);
      const _var828 = _var825 % 60;
      const _var829 = _var827 + ":" + _var828.toString().padStart(2, "0");
      _var824.textContent = "✅ Image captcha verified - Expires in: " + _var829;
      if (_var825 <= 0) {
        _var824.textContent = "✅ Image captcha verified (Expired)";
        window.ivacImageCaptchaCountdownInterval = null;
        return;
      }
      _var825--;
      window.ivacImageCaptchaCountdownInterval = // TOLOOK
      setTimeout(_var826, 1000);
    };
    _var826();
  }
  function _var810(_var830, _var831, _var832 = null, _var833 = null) {
    let _var834 = null;
    if (!_var832) {
      const _var835 = _var403();
      _var832 = _var835;
    }
    if (_var832 === "login") {
      _var834 = document.getElementById("ivac-login-status");
    } else if (_var832 === "submit") {
      _var834 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    }
    if (!_var834) {
      _var834 = document.getElementById("ivac-status-message");
    }
    if (!_var834) {
      _var834 = document.querySelector(".ivac-status-panel");
    }
    if (_var834) {
      if (_var834.showStatus) {
        let _var836 = "info";
        if (_var833 === 200 || _var833 === 201) {
          _var836 = "success";
        } else if (_var833 === 419 || _var833 === 401) {
          _var836 = "error";
        } else if (_var833 === 422) {
          _var836 = "info";
        } else if (_var831 === "#10b981" || _var831 === "#059669" || _var831 === "#00C851") {
          _var836 = "success";
        } else if (_var831 === "#ef4444" || _var831 === "#dc2626" || _var831 === "#ff4444") {
          _var836 = "error";
        } else if (_var831 === "#f59e0b" || _var831 === "#7a5a00") {
          _var836 = "warn";
        } else if (_var831 === "#4285f4" || _var831 === "#084c61") {
          _var836 = "info";
        }
        if (_var833 === null) {
          const _var837 = _var830.match(/\[(\d+)\]/);
          if (_var837) {
            _var833 = parseInt(_var837[1]);
            const _var838 = _var830.replace(/\s*\[\d+\]\s*$/, "");
            _var834.showStatus(_var838, _var833, _var836);
          } else {
            const _var839 = _var830.match(/status:\s*(\d+)/);
            if (_var839) {
              _var833 = parseInt(_var839[1]);
              const _var840 = _var830.replace(/status:\s*\d+/, "").trim();
              _var834.showStatus(_var840, _var833, _var836);
            } else {
              _var834.showStatus(_var830, null, _var836);
            }
          }
        } else {
          _var834.showStatus(_var830, _var833, _var836);
        }
      } else {
        _var834.textContent = _var830;
        _var834.style.color = _var831;
      }
    }
  }
  function _var425(_var841, _var842) {
    _var810(_var841, _var842);
  }
  function _var843(_var844, _var845 = null) {
    const _var846 = document.querySelector(".ivac-status-panel");
    if (_var846 && _var846.showStatus) {
      _var846.showStatus(_var844, _var845, "success");
    } else {
      _var810(_var844, "#10b981", null, _var845);
    }
  }
  function _var847(_var848, _var849 = 500) {
    const _var850 = document.querySelector(".ivac-status-panel");
    if (_var850 && _var850.showStatus) {
      _var850.showStatus(_var848, _var849, "error");
    } else {
      _var810(_var848, "#ef4444");
    }
  }
  function _var851(_var852, _var853 = 422) {
    const _var854 = document.querySelector(".ivac-status-panel");
    if (_var854 && _var854.showStatus) {
      _var854.showStatus(_var852, _var853, "warn");
    } else {
      _var810(_var852, "#f59e0b");
    }
  }
  function _var855(_var856, _var857 = null) {
    const _var858 = document.querySelector(".ivac-status-panel");
    if (_var858 && _var858.showStatus) {
      _var858.showStatus(_var856, _var857, "info");
    } else {
      _var810(_var856, "#3b82f6", null, _var857);
    }
  }
  let _var859 = [];
  let _var860 = null;
  let _var861 = [];
  const _var862 = () => {
    const _var863 = new AbortController();
    _var859.push(_var863);
    return _var863;
  };
  async function _var424(_var864 = _var859, _var865 = _var861, _var866 = _var860) {
    try {
      if (_var864 && _var864.length) {
        _var864.forEach(_var867 => {
          try {
            _var867.abort();
          } catch {}
        });
        _var864.length = 0;
      }
      if (_var865 && _var865.length) {
        _var865.forEach(_var868 => clearTimeout(_var868));
        _var865.length = 0;
      }
      if (_var866) {
        clearTimeout(_var866);
      }
      for (const _var869 of Array.from(_var336)) {
        clearTimeout(_var869);
        _var336.delete(_var869);
      }
      _var860 = null;
      return true;
    } catch {
      return false;
    }
  }
  function _var870() {
    const _var871 = new AbortController();
    _var859.push(_var871);
    return _var871;
  }
  async function _var872(_var873, _var874 = "POST", _var875 = null, _var876 = false, _var877 = null, {
    signal: _var878
  } = {}) {
    const _var879 = new AbortController();
    const _var880 = Date.now();
    _var729.push({
      id: _var880,
      controller: _var879
    });
    if (_var878) {
      _var878.addEventListener("abort", () => _var879.abort(), {
        once: true
      });
    }
    try {
      const _var881 = {
        "Content-Type": "application/json",
        Accept: "application/json"
      };
      const _var882 = _var704(_var873);
      _var881.Referer = _var882;
      if (_var876) {
        const _var883 = _var877 || _var209();
        if (_var883) {
          _var881.Authorization = "Bearer " + _var883;
        }
      }
      const _var884 = {
        method: _var874,
        headers: _var881,
        signal: _var879.signal,
        referrer: _var882
      };
      if (_var875) {
        _var884.body = JSON.stringify(_var875);
      }
      const _var885 = await fetch(_var873, _var884);
      _var708(_var885, _var873);
      if (!_var885.ok) {
        const _var886 = new Error("HTTP error! status: " + _var885.status);
        _var886.status = _var885.status;
        throw _var886;
      }
      let _var887 = null;
      const _var888 = _var885.headers.get("content-type");
      const _var889 = await _var885.text();
      if (!_var887 || !_var887.message) {
        try {
          const _var890 = _var889.indexOf("{\"message\"");
          if (_var890 !== -1) {
            let _var891 = _var889.substring(_var890);
            let _var892 = 0;
            let _var893 = -1;
            for (let _var894 = 0; _var894 < _var891.length; _var894++) {
              if (_var891[_var894] === "{") {
                _var892++;
              }
              if (_var891[_var894] === "}") {
                _var892--;
                if (_var892 === 0) {
                  _var893 = _var894 + 1;
                  break;
                }
              }
            }
            if (_var893 !== -1) {
              _var891 = _var891.substring(0, _var893);
              try {
                const _var895 = JSON.parse(_var891);
                if (_var895.message) {
                  const _var896 = _var887?._parts;
                  _var887 = _var895;
                  if (_var896) {
                    _var887._parts = _var896;
                  }
                }
              } catch (_var897) {}
            }
          }
          if (!_var887 || !_var887.message) {
            const _var898 = /"message"\s*:\s*"([^"]+)"/;
            const _var899 = _var889.match(_var898);
            if (_var899) {
              const _var900 = _var889.indexOf("{\"message\"");
              const _var901 = _var889.indexOf("}", _var900);
              const _var902 = _var889.substring(_var900, _var901 + 1);
              const _var903 = /"status_code"\s*:\s*(\d+)/;
              const _var904 = _var902.match(_var903);
              const _var905 = _var887?._parts;
              if (_var904) {
                const _var906 = parseInt(_var904[1]);
                _var887 = {
                  message: _var899[1],
                  status_code: _var906
                };
              } else {
                _var887 = {
                  message: _var899[1]
                };
              }
              if (_var905) {
                _var887._parts = _var905;
              }
            }
          }
        } catch (_var907) {
          const _var908 = /"message"\s*:\s*"([^"]+)"/;
          const _var909 = _var889.match(_var908);
          const _var910 = _var887?._parts;
          if (_var909) {
            const _var911 = _var889.indexOf("{\"message\"");
            const _var912 = _var889.indexOf("}", _var911);
            const _var913 = _var889.substring(_var911, _var912 + 1);
            const _var914 = /"status_code"\s*:\s*(\d+)/;
            const _var915 = _var913.match(_var914);
            if (_var915) {
              const _var916 = parseInt(_var915[1]);
              _var887 = {
                message: _var909[1],
                status_code: _var916
              };
            } else {
              _var887 = {
                message: _var909[1]
              };
            }
            if (_var910) {
              _var887._parts = _var910;
            }
          } else {
            const _var917 = /"status_code"\s*:\s*(\d+)/;
            const _var918 = _var889.match(_var917);
            if (_var918) {
              const _var919 = parseInt(_var918[1]);
              _var887 = {
                message: _var889,
                status_code: _var919
              };
            } else {
              _var887 = {
                message: _var889
              };
            }
            if (_var910) {
              _var887._parts = _var910;
            }
          }
        }
      }
      _var729 = _var729.filter(_var920 => _var920.id !== _var880);
      let _var921 = null;
      let _var922 = false;
      if (hasStatusCodeInText && _var887) {
        if (_var887.hasOwnProperty("status_code") && typeof _var887.status_code === "number" && !isNaN(_var887.status_code) && _var887.status_code !== null) {
          _var921 = _var887.status_code;
          _var922 = true;
        } else if (_var887.data?.hasOwnProperty("status_code") && typeof _var887.data.status_code === "number" && !isNaN(_var887.data.status_code) && _var887.data.status_code !== null) {
          _var921 = _var887.data.status_code;
          _var922 = true;
        } else if (_var887.hasOwnProperty("statusCode") && typeof _var887.statusCode === "number" && !isNaN(_var887.statusCode) && _var887.statusCode !== null) {
          _var921 = _var887.statusCode;
          _var922 = true;
        } else if (_var887.data?.hasOwnProperty("statusCode") && typeof _var887.data.statusCode === "number" && !isNaN(_var887.data.statusCode) && _var887.data.statusCode !== null) {
          _var921 = _var887.data.statusCode;
          _var922 = true;
        }
      }
      let _var923 = null;
      if (_var922) {
        _var923 = _var921;
      } else {
        _var923 = null;
      }
      if (!hasStatusCodeInText) {
        _var923 = null;
      }
      if (_var887 && parts && Object.keys(parts).length > 0) {
        if (!_var887._parts) {
          const _var924 = {};
          Object.keys(parts).forEach(_var925 => {
            if (parts[_var925] !== null && parts[_var925] !== undefined) {
              _var924[_var925] = parts[_var925];
            }
          });
          _var887._parts = _var924;
        }
      }
      return {
        success: true,
        message: _var887?.message || "Request successful",
        data: _var887,
        status: _var923,
        httpStatus: _var885.status
      };
    } catch (_var926) {
      _var729 = _var729.filter(_var927 => _var927.id !== _var880);
      throw _var926;
    }
  }
  async function _var928(_var929, _var930 = "POST", _var931 = null, _var932 = false, _var933 = null, {
    signal: _var934
  } = {}) {
    const _var935 = new AbortController();
    const _var936 = Date.now();
    _var729.push({
      id: _var936,
      controller: _var935
    });
    if (_var934) {
      _var934.addEventListener("abort", () => _var935.abort(), {
        once: true
      });
    }
    try {
      const _var937 = {
        "Content-Type": "application/json",
        Accept: "application/json"
      };
      const _var938 = _var704(_var929);
      _var937.Referer = _var938;
      const _var939 = localStorage.getItem("mobile2_session");
      if (_var939 && _var929.includes("/login")) {
        _var937["X-IVAC-SESSION"] = _var939;
        _var243("Adding Mobile Verify 2 session to login request header");
      }
      if (_var932) {
        const _var940 = _var933 || _var209();
        if (_var940) {
          _var937.Authorization = "Bearer " + _var940;
        }
      }
      const _var941 = {
        method: _var930,
        headers: _var937,
        signal: _var935.signal,
        referrer: _var938,
        credentials: "include"
      };
      if (_var931) {
        _var941.body = JSON.stringify(_var931);
      }
      const _var942 = await fetch(_var929, _var941);
      _var708(_var942, _var929);
      if (!_var942.ok) {
        const _var943 = new Error("HTTP error! status: " + _var942.status);
        _var943.status = _var942.status;
        throw _var943;
      }
      let _var944 = null;
      const _var945 = _var942.headers.get("content-type");
      const _var946 = await _var942.text();
      const _var947 = _var948(_var946);
      if (_var947 && Object.keys(_var947).length > 0) {
        let _var949 = _var947["1"] || _var947["0"] || null;
        if (_var949) {
          if (typeof _var949 === "string") {
            try {
              _var944 = JSON.parse(_var949);
            } catch (_var950) {}
          } else if (typeof _var949 === "object" && _var949 !== null) {
            _var944 = _var949;
          }
        }
        const _var951 = {};
        Object.keys(_var947).forEach(_var952 => {
          if (_var947[_var952] !== null && _var947[_var952] !== undefined) {
            _var951[_var952] = _var947[_var952];
          }
        });
        if (!_var944) {
          _var944 = {};
        }
        _var944._parts = _var951;
        if (_var947["1"]) {
          let _var953 = null;
          if (typeof _var947["1"] === "object" && _var947["1"] !== null) {
            _var953 = _var947["1"];
          } else if (typeof _var947["1"] === "string") {
            try {
              _var953 = JSON.parse(_var947["1"]);
            } catch (_var954) {}
          }
          if (_var953) {
            if (!_var944.data && _var953.data) {
              _var944.data = _var953.data;
            }
            if (_var953.status === "success" && _var953.data) {
              _var944.data = _var953.data;
              _var944.status = _var953.status;
              _var944.status_code = _var953.status_code;
              _var944.message = _var953.message;
            }
          }
        }
      }
      const _var955 = /"status_code"\s*:\s*\d+/.test(_var946);
      if (!_var944 || !_var944.message) {
        try {
          const _var956 = _var946.indexOf("{\"message\"");
          if (_var956 !== -1) {
            let _var957 = _var946.substring(_var956);
            let _var958 = 0;
            let _var959 = -1;
            for (let _var960 = 0; _var960 < _var957.length; _var960++) {
              if (_var957[_var960] === "{") {
                _var958++;
              }
              if (_var957[_var960] === "}") {
                _var958--;
                if (_var958 === 0) {
                  _var959 = _var960 + 1;
                  break;
                }
              }
            }
            if (_var959 !== -1) {
              _var957 = _var957.substring(0, _var959);
              try {
                const _var961 = JSON.parse(_var957);
                if (_var961.message) {
                  const _var962 = _var944?._parts;
                  _var944 = _var961;
                  if (_var962) {
                    _var944._parts = _var962;
                  }
                }
              } catch (_var963) {}
            }
          }
          if (!_var944 || !_var944.message) {
            const _var964 = /"message"\s*:\s*"([^"]+)"/;
            const _var965 = _var946.match(_var964);
            if (_var965) {
              const _var966 = _var946.indexOf("{\"message\"");
              const _var967 = _var946.indexOf("}", _var966);
              const _var968 = _var946.substring(_var966, _var967 + 1);
              const _var969 = /"status_code"\s*:\s*(\d+)/;
              const _var970 = _var968.match(_var969);
              const _var971 = _var944?._parts;
              if (_var970) {
                const _var972 = parseInt(_var970[1]);
                _var944 = {
                  message: _var965[1],
                  status_code: _var972
                };
              } else {
                _var944 = {
                  message: _var965[1]
                };
              }
              if (_var971) {
                _var944._parts = _var971;
              }
            }
          }
        } catch (_var973) {
          const _var974 = /"message"\s*:\s*"([^"]+)"/;
          const _var975 = _var946.match(_var974);
          const _var976 = _var944?._parts;
          if (_var975) {
            const _var977 = _var946.indexOf("{\"message\"");
            const _var978 = _var946.indexOf("}", _var977);
            const _var979 = _var946.substring(_var977, _var978 + 1);
            const _var980 = /"status_code"\s*:\s*(\d+)/;
            const _var981 = _var979.match(_var980);
            if (_var981) {
              const _var982 = parseInt(_var981[1]);
              _var944 = {
                message: _var975[1],
                status_code: _var982
              };
            } else {
              _var944 = {
                message: _var975[1]
              };
            }
            if (_var976) {
              _var944._parts = _var976;
            }
          } else {
            const _var983 = /"status_code"\s*:\s*(\d+)/;
            const _var984 = _var946.match(_var983);
            if (_var984) {
              const _var985 = parseInt(_var984[1]);
              _var944 = {
                message: _var946,
                status_code: _var985
              };
            } else {
              _var944 = {
                message: _var946
              };
            }
            if (_var976) {
              _var944._parts = _var976;
            }
          }
        }
      }
      _var729 = _var729.filter(_var986 => _var986.id !== _var936);
      let _var987 = null;
      let _var988 = false;
      if (_var955 && _var944) {
        if (_var944.hasOwnProperty("status_code") && typeof _var944.status_code === "number" && !isNaN(_var944.status_code) && _var944.status_code !== null) {
          _var987 = _var944.status_code;
          _var988 = true;
        } else if (_var944.data?.hasOwnProperty("status_code") && typeof _var944.data.status_code === "number" && !isNaN(_var944.data.status_code) && _var944.data.status_code !== null) {
          _var987 = _var944.data.status_code;
          _var988 = true;
        } else if (_var944.hasOwnProperty("statusCode") && typeof _var944.statusCode === "number" && !isNaN(_var944.statusCode) && _var944.statusCode !== null) {
          _var987 = _var944.statusCode;
          _var988 = true;
        } else if (_var944.data?.hasOwnProperty("statusCode") && typeof _var944.data.statusCode === "number" && !isNaN(_var944.data.statusCode) && _var944.data.statusCode !== null) {
          _var987 = _var944.data.statusCode;
          _var988 = true;
        }
      }
      let _var989 = null;
      if (_var988) {
        _var989 = _var987;
      } else {
        _var989 = null;
      }
      if (!_var955) {
        _var989 = null;
      }
      return {
        success: true,
        message: _var944?.message || "Request successful",
        data: _var944,
        status: _var989,
        httpStatus: _var942.status
      };
    } catch (_var990) {
      _var729 = _var729.filter(_var991 => _var991.id !== _var936);
      throw _var990;
    }
  }
  async function _var992(_var993, _var994 = "POST", _var995 = null, _var996 = false, _var997 = null, _var998 = null, {
    signal: _var999
  } = {}) {
    let _var1000 = _var995;
    if (_var736 && _var998) {
      _var1000 = _var714(_var995, _var998, _var736);
    }
    return await _var872(_var993, _var994, _var1000, _var996, _var997, {
      signal: _var999
    });
  }
  async function _var1001(_var1002, _var1003 = "POST", _var1004 = null, _var1005 = false, _var1006 = null, _var1007 = null, {
    signal: _var1008
  } = {}) {
    let _var1009 = _var1004;
    if (_var736 && _var1007) {
      _var1009 = _var714(_var1004, _var1007, _var736);
    }
    return await _var928(_var1002, _var1003, _var1009, _var1005, _var1006, {
      signal: _var1008
    });
  }
  async function _var1010(_var1011 = _var36) {
    const _var1012 = GM_getValue(_var78, _var28);
    const _var1013 = {
      clientKey: _var1012,
      task: {
        type: "TurnstileTaskProxyless",
        websiteURL: _var37 || window.location.href,
        websiteKey: _var1011
      }
    };
    try {
      const _var1014 = await fetch("https://api.capmonster.cloud/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_var1013)
      });
      const _var1015 = await _var1014.json();
      if (_var1015.errorId && _var1015.errorId !== 0) {
        throw new Error(_var1015.errorDescription || _var1015.errorCode || "Unknown CapMonster error");
      }
      if (!_var1015.taskId) {
        throw new Error("No taskId received from CapMonster Cloud");
      }
      return _var1015;
    } catch (_var1016) {
      const _var1017 = _var403();
      if (_var1017 === "login") {
        _var1018("Error: " + _var1016.message, "#ff4444", 500);
      } else {
        _var1019("Error: " + _var1016.message, "#ff4444", 500);
      }
      return null;
    }
  }
  async function _var1020(_var1021) {
    const _var1022 = GM_getValue(_var78, _var28);
    const _var1023 = {
      clientKey: _var1022,
      taskId: _var1021
    };
    try {
      let _var1024;
      let _var1025 = 0;
      const _var1026 = _var77;
      do {
        _var1025++;
        const _var1027 = await fetch("https://api.capmonster.cloud/getTaskResult", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_var1023)
        });
        _var1024 = await _var1027.json();
        if (_var1024.status === "ready") {
          return _var1024;
        }
        if (_var1024.errorId && _var1024.errorId !== 0) {
          throw new Error(_var1024.errorDescription || _var1024.errorCode || "Task failed");
        }
        const _var1028 = _var403();
        if (_var1028 === "login") {
          _var1018("Solving... (" + _var1025 + "/" + _var1026 + ")", "#4285f4");
        } else {
          _var1019("Solving... (" + _var1025 + "/" + _var1026 + ")", "#4285f4", 200);
        }
        await new Promise(_var1029 => // TOLOOK
        setTimeout(_var1029, 2000));
      } while (_var1025 < _var1026);
      throw new Error("Max attempts reached");
    } catch (_var1030) {
      _var425("Error: " + _var1030.message, true);
      return null;
    }
  }
  async function _var1031(_var1032 = _var36) {
    const _var1033 = await _var1010(_var1032);
    if (!_var1033) {
      return null;
    }
    const _var1034 = await _var1020(_var1033.taskId);
    if (!_var1034) {
      return null;
    }
    const _var1035 = _var1034.solution.token;
    _var736 = _var1035;
    _var128.captchaToken = _var1035;
    const _var1036 = _var403();
    if (_var1036 === "login") {
      _var1018("Turnstile solved! Token ready for login operations.", "#00C851", 200);
    } else {
      _var1019("Turnstile solved! Token ready for application submission.", "#00C851", 200);
    }
    return _var1035;
  }
  async function _var1037() {
    _var243("🧠 Solving PayNow Turnstile...");
    const _var1038 = _var80.getSiteKey("payment/pay-now", "turnstile") || "0x4AAAAAABvQ3Mi6RktCuZ7P";
    const _var1039 = "https://payment.ivacbd.com";
    const _var1040 = await _var1010(_var1038);
    if (!_var1040) {
      return null;
    }
    const _var1041 = await _var1020(_var1040.taskId);
    if (!_var1041) {
      return null;
    }
    const _var1042 = _var1041.solution.token;
    _var647("✅ PayNow Turnstile solved successfully");
    return _var1042;
  }
  async function _var1043() {
    _var243("🧠 Solving Mobile Verify Turnstile...");
    const _var1044 = _var80.getSiteKey("mobile-verify", "turnstile") || "0x4AAAAAABpNUpzYeppBoYpe";
    const _var1045 = "https://payment.ivacbd.com";
    const _var1046 = await _var1010(_var1044);
    if (!_var1046) {
      return null;
    }
    const _var1047 = await _var1020(_var1046.taskId);
    if (!_var1047) {
      return null;
    }
    const _var1048 = _var1047.solution.token;
    _var647("✅ Mobile Verify Turnstile solved successfully");
    return _var1048;
  }
  async function _var1049() {
    try {
      _var243("🧠 Solving Application Turnstile after login...");
      const _var1050 = _var80.getSiteKey("payment/application-info-submit", "turnstile") || "0x4AAAAAABvQ3Mi6RktCuZ7P";
      const _var1051 = await _var1010(_var1050);
      if (!_var1051) {
        _var648("Failed to create Application Turnstile task");
        return null;
      }
      const _var1052 = await _var1020(_var1051.taskId);
      if (!_var1052) {
        _var648("Failed to get Application Turnstile solution");
        return null;
      }
      const _var1053 = _var1052.solution.token;
      if (_var1053) {
        _var740 = _var1053;
        _var741 = false;
        GM_setValue(_var67, _var1053);
        GM_setValue(_var71, Date.now());
        _var647("✅ Application Turnstile solved and stored successfully");
        _var1019("Application Turnstile solved and stored!", "#00C851", 200);
        return _var1053;
      }
      return null;
    } catch (_var1054) {
      _var648("Error solving Application Turnstile: " + _var1054.message);
      return null;
    }
  }
  async function _var1055() {
    try {
      _var243("🔐 [fetchAndStoreInvisibleRecaptcha] Function called - starting fetch...");
      const _var1056 = GM_getValue(_var68, null);
      const _var1057 = GM_getValue(_var69, 0);
      const _var1058 = Date.now() - _var1057;
      const _var1059 = _var1056 && _var1058 < _var70;
      if (_var1059) {
        _var243("✅ __device_id__ token already stored and valid, skipping fetch");
        return _var1056;
      }
      if (_var1056) {
        GM_deleteValue(_var68);
        GM_deleteValue(_var69);
        _var243("ℹ️ Cleared expired __device_id__ token");
      }
      _var243("🔐 [fetchAndStoreInvisibleRecaptcha] No cached token, fetching new token...");
      const _var1060 = await _var1061(null, true);
      if (_var1060) {
        try {
          GM_setValue(_var68, _var1060);
          GM_setValue(_var69, Date.now());
          const _var1062 = GM_getValue(_var68, null);
          const _var1063 = GM_getValue(_var69, 0);
          _var243("🔍 [fetchAndStoreInvisibleRecaptcha] Token stored - verify: " + !!_var1062 + ", length: " + (_var1062?.length || 0) + ", ts: " + _var1063);
        } catch (_var1064) {
          _var648("❌ Error storing token in GM storage: " + _var1064.message);
        }
        if (!window.APPLICATION_CONFIG) {
          window.APPLICATION_CONFIG = {};
        }
        window.APPLICATION_CONFIG.invisibleRecaptchaToken = _var1060;
        _var647("✅ __device_id__ token fetched and stored successfully (persistent storage, length: " + _var1060.length + ") - ready for use after 50s delay");
        return _var1060;
      } else {
        _var648("❌ [fetchAndStoreInvisibleRecaptcha] Token fetch returned null");
        return null;
      }
    } catch (_var1065) {
      _var648("❌ Error fetching __device_id__ token: " + _var1065.message);
      return null;
    }
  }
  function _var1066() {
    _var729.forEach(_var1067 => {
      _var1067.controller.abort();
    });
    _var729 = [];
    _var859.forEach(_var1068 => {
      _var1068.abort();
    });
    _var859 = [];
    _var337.forEach(_var1069 => {
      _var1069.abort();
    });
    _var337.clear();
    _var339.forEach(_var1070 => clearTimeout(_var1070));
    _var340.forEach(_var1071 => clearInterval(_var1071));
    _var339.clear();
    _var340.clear();
    _var338.clear();
    _var560.forEach(_var1072 => clearTimeout(_var1072));
    _var560.clear();
    _var243("All pending requests cancelled");
  }
  function _var1073(_var1074, _var1075, _var1076 = "#3b82f6", _var1077 = "#2563eb") {
    const _var1078 = document.createElement("button");
    _var1078.className = "ivac-button";
    _var1078.textContent = _var1074;
    const _var1079 = "btn-" + Math.random().toString(36).substr(2, 9);
    _var1078.className = "ivac-button " + _var1079;
    const _var1080 = "\n            ." + _var1079 + " {\n                background: " + _var1076 + ` !important;
                color: white !important;
                border: none !important;
                border-radius: 3px !important;
                padding: 8px !important;
                font-size: 12px !important;
                font-weight: normal !important;
                text-align: center !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .` + _var1079 + ":hover {\n                background: " + _var1077 + ` !important;
            }
            .` + _var1079 + `:active {
                opacity: 0.8 !important;
            }
        `;
    const _var1081 = document.createElement("style");
    _var1081.textContent = _var1080;
    document.head.appendChild(_var1081);
    _var1078.addEventListener("click", function (_var1082) {
      _var1075();
    });
    return _var1078;
  }
  function _var1083(_var1084) {
    const _var1085 = {
      "Update Token": "🔄",
      Profiles: "👤",
      Application: "📤",
      APPLICATION: "📤",
      APP: "📤",
      Personal: "📝",
      PERSONAL: "📝",
      PER: "📝",
      Overview: "📋",
      OVERVIEW: "📋",
      Checkout: "💳",
      CHECKOUT: "💳",
      COUT: "💳",
      "Stop All": "⏹️",
      "Send OTP": "📱",
      "SEND OTP": "📱",
      "Resend OTP": "🔄",
      "RESEND OTP": "🔄",
      "R OTP": "🔄",
      "Verify OTP": "✅",
      "Get Slots": "📅",
      "Pay Now": "💸",
      "PAY NOW": "💸",
      Captcha: "🔐",
      CAPTCHA: "🔐",
      "Verify Captcha": "✅",
      "VERIFY CAPTCHA": "✅",
      "Mobile Verify": "📞",
      MOBILE: "📞",
      "MOBILE 2": "📱",
      "Login Password": "🔐",
      LOGIN: "🔐",
      "Login OTP": "📱",
      "Application Page": "📄",
      "CF VERIFY": "✅",
      "Send Once": "⚡",
      Start: "▶️",
      Stop: "⏹️",
      default: ""
    };
    return _var1085[_var1084] || _var1085.default;
  }
  function _var1086(_var1087, _var1088, _var1089 = "text", _var1090 = false) {
    const _var1091 = document.createElement("input");
    _var1091.id = _var1087;
    _var1091.className = _var1090 ? "ivac-auth-input" : "ivac-input";
    _var1091.type = _var1089;
    _var1091.placeholder = _var1088;
    return _var1091;
  }
  function _var1092() {
    const _var1093 = document.createElement("div");
    _var1093.className = "ivac-status-panel";
    _var1093.id = "ivac-status-message";
    _var1093.updateContent = function (_var1094) {
      _var678(this);
      const _var1095 = this.querySelector(".status-pill__code");
      if (_var1095) {
        _var1095.textContent = _var1094 ? String(_var1094).trim() : "#---";
      }
      const _var1096 = this.querySelector(".msgText");
      if (_var1096) {
        _var1096.textContent = _var1094 || "";
      }
      if (!this.dataset.statusType) {
        this.dataset.statusType = "info";
      }
      if (!this.style.getPropertyValue("--panel-color")) {
        this.style.setProperty("--panel-color", "#60a5fa");
      }
      if (!this.style.getPropertyValue("--panel-color-soft")) {
        this.style.setProperty("--panel-color-soft", "rgba(96, 165, 250, 0.2)");
      }
      if (!this.style.getPropertyValue("--panel-color-text")) {
        this.style.setProperty("--panel-color-text", "#e2e8f0");
      }
      if (_var1094 && _var1094.length > 50) {
        this.classList.add("scrollable");
      } else {
        this.classList.remove("scrollable");
      }
    };
    _var1093.showStatus = function (_var1097, _var1098 = null, _var1099 = "info") {
      _var680(this, _var1097, _var1098, _var1099);
    };
    return _var1093;
  }
  function _var1100(_var1101, _var1102) {
    const _var1103 = document.getElementById(_var1101);
    if (_var1103) {
      if (_var1103.updateContent) {
        _var1103.updateContent(_var1102);
      } else {
        _var1103.textContent = _var1102;
        if (_var1102 && _var1102.length > 50) {
          _var1103.classList.add("scrollable");
        } else {
          _var1103.classList.remove("scrollable");
        }
      }
    }
  }
  function _var1104(_var1105, _var1106) {
    if (_var1106) {
      const _var1107 = _var1105.textContent;
      _var1105.setAttribute("data-original-text", _var1107);
      _var1105.classList.add("loading");
      _var1105.disabled = true;
    } else {
      const _var1108 = _var1105.getAttribute("data-original-text") || _var1105.textContent;
      _var1105.classList.remove("loading");
      _var1105.textContent = _var1108;
      _var1105.disabled = false;
    }
  }
  async function _var1061(_var1109 = null, _var1110 = false) {
    try {
      const _var1111 = window.APPLICATION_CONFIG || {};
      if (!_var1110) {
        const _var1112 = _var760("application");
        if (_var1112) {
          _var243("✅ Using cached application token (from cache, age: " + Math.round((Date.now() - _var759.application.timestamp) / 1000) + "s)");
          return _var1112;
        }
      }
      if (!_var1110) {
        if (_var1111.invisibleRecaptchaToken) {
          _var243("✅ Using pre-fetched __device_id__ token");
          return _var1111.invisibleRecaptchaToken;
        }
      }
      _var243("Step 1: Requesting application challenge token...");
      const _var1113 = _var1111.request1Body || "9V2csFmZ6ISYiwCM6ICdiwCM6IyciwCOzojIjJCL4QjOismIsIDMxojItJye";
      const _var1114 = JSON.stringify([_var1113, false]);
      _var243("[fetchInvisibleRecaptchaToken] Request body: " + _var1114.substring(0, 50) + "...");
      const _var1115 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4017c86ac8ef9fbf30eceaf4893729bcbaa5ed503b",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      _var243("[fetchInvisibleRecaptchaToken] Sending fetch request to https://payment.ivacbd.com/application...");
      const _var1116 = 4;
      const _var1117 = 15;
      let _var1118 = 0;
      let _var1119 = null;
      while (true) {
        _var1119 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1115,
          body: _var1114,
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/",
          signal: _var1109
        });
        _var708(_var1119, "https://payment.ivacbd.com/application");
        _var243("[fetchInvisibleRecaptchaToken] Response status: " + _var1119.status + " " + _var1119.statusText);
        if (_var1119.status === 503 && _var348() && _var1118 < _var1116) {
          _var1118++;
          const _var1120 = _var237() * 1000;
          _var243("[fetchInvisibleRecaptchaToken] 503 error - Retrying in " + (_var1120 / 1000).toFixed(1) + "s... (" + _var1118 + "/" + _var1116 + ")");
          _var425("Service Unavailable (503). Retrying in " + (_var1120 / 1000).toFixed(1) + "s... (" + _var1118 + "/" + _var1116 + ")", "#f59e0b");
          await new Promise(_var1121 => // TOLOOK
          setTimeout(_var1121, _var1120));
          continue;
        }
        if ((_var1119.status === 500 || _var1119.status === 502 || _var1119.status === 504) && _var348() && _var1118 < _var1117) {
          _var1118++;
          const _var1122 = 20000;
          const _var1123 = _var1119.status === 500 ? "Server error (500)" : _var1119.status === 502 ? "Bad gateway (502)" : "Gateway timeout (504)";
          _var243("[fetchInvisibleRecaptchaToken] " + _var1119.status + " error - Retrying in " + (_var1122 / 1000).toFixed(1) + "s... (" + _var1118 + "/" + _var1117 + ")");
          _var425(_var1123 + ". Retrying in " + (_var1122 / 1000).toFixed(1) + "s... (" + _var1118 + "/" + _var1117 + ")", "#f59e0b");
          await new Promise(_var1124 => // TOLOOK
          setTimeout(_var1124, _var1122));
          continue;
        }
        if (!_var1119.ok) {
          _var648("[fetchInvisibleRecaptchaToken] HTTP error! status: " + _var1119.status);
          throw new Error("HTTP error! status: " + _var1119.status);
        }
        break;
      }
      const _var1125 = await _var1119.text();
      _var243("[fetchInvisibleRecaptchaToken] Response received, length: " + _var1125.length + ", preview: " + _var1125.substring(0, 100) + "...");
      const _var1126 = _var948(_var1125);
      _var243("[fetchInvisibleRecaptchaToken] Parsed parts: " + Object.keys(_var1126).join(", "));
      let _var1127 = null;
      _var243("[fetchInvisibleRecaptchaToken] Checking parts - keys: " + Object.keys(_var1126).join(", ") + ", part '1' type: " + typeof _var1126["1"]);
      if (_var1126["1"]) {
        if (typeof _var1126["1"] === "string") {
          _var1127 = _var1126["1"].replace(/^["']|["']$/g, "").trim();
          _var243("[fetchInvisibleRecaptchaToken] Extracted from part '1' (string): " + _var1127.substring(0, 30) + "...");
        } else if (typeof _var1126["1"] === "object" && _var1126["1"] !== null) {
          _var1127 = _var1126["1"].__device_id__ || _var1126["1"].token || null;
          _var243("[fetchInvisibleRecaptchaToken] Extracted from part '1' (object): " + (_var1127 ? _var1127.substring(0, 30) + "..." : "null"));
        }
      }
      if (!_var1127 || _var1127.length === 0) {
        _var243("[fetchInvisibleRecaptchaToken] Part '1' not found or empty, trying regex fallback...");
        const _var1128 = _var1125.match(/1:\s*"([^"]+)"/);
        const _var1129 = _var1125.match(/1:\s*([A-Za-z0-9+/=]+=*)/);
        const _var1130 = _var1125.match(/"([A-Za-z0-9+/=]{100,}=*)"/);
        if (_var1128 && _var1128[1]) {
          _var1127 = _var1128[1];
          _var243("✅ Found __device_id__ token using regex pattern 1 (quoted string)");
        } else if (_var1129 && _var1129[1] && _var1129[1].length > 50) {
          _var1127 = _var1129[1];
          _var243("✅ Found __device_id__ token using regex pattern 2 (base64)");
        } else if (_var1130 && _var1130[1] && _var1130[1].length > 100) {
          _var1127 = _var1130[1];
          _var243("✅ Found __device_id__ token using regex pattern 3 (base64 in quotes)");
        } else {
          _var648("❌ [fetchInvisibleRecaptchaToken] Could not extract token using regex - text preview: " + _var1125.substring(0, 200) + "...");
        }
      }
      if (_var1127) {
        _var243("✅ Successfully fetched __device_id__ token (" + _var1127.substring(0, 30) + "...)");
        _var765("application", _var1127);
        return _var1127;
      } else {
        _var648("❌ Failed to extract __device_id__ token from response");
        throw new Error("__device_id__ token not found in response");
      }
    } catch (_var1131) {
      _var648("❌ Failed to fetch __device_id__ token: " + _var1131.message);
      throw _var1131;
    }
  }
  async function _var491() {
    _var243("Submitting application...");
    if (!_var128.applicationInfo.webFileId || !_var128.applicationInfo.highcom) {
      _var648("Please configure your profile data first using the Profile Manager");
      return;
    }
    const _var1132 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    if (_var353()) {
      _var1133("application");
    }
    return _var426(async _var1134 => {
      const _var1135 = GM_getValue("submit_app_captcha_enabled", true);
      let _var1136 = null;
      if (_var1135) {
        const _var1137 = !!(_var740 && _var741);
        if (_var1137) {
          _var243("✅ Using manually solved captcha token");
          _var1136 = _var740;
          _var736 = _var740;
          _var740 = null;
          _var741 = false;
          _var243("Using pre-solved captcha! Submitting application...");
        } else {
          const _var1138 = GM_getValue(_var67, null);
          const _var1139 = GM_getValue(_var71, 0);
          const _var1140 = Date.now() - _var1139;
          const _var1141 = _var1138 && _var1140 < _var73;
          if (_var1141) {
            _var243("✅ Using stored application turnstile token from login (one-time use)");
            _var1136 = _var1138;
            _var736 = _var1138;
            _var740 = _var1138;
            GM_deleteValue(_var67);
            GM_deleteValue(_var71);
            _var243("Stored token cleared (one-time use) - submitting application...");
          } else {
            if (_var1138) {
              _var243("Stored token expired or already used, solving new turnstile...");
              GM_deleteValue(_var67);
              GM_deleteValue(_var71);
            }
            _var243("Captcha solving is ENABLED - solving captcha before submission...");
            await _var1031(_var80.getSiteKey("payment/application-info-submit", "turnstile"));
            _var1136 = _var736;
            if (!_var1136) {
              throw new Error("Captcha solving failed, cannot proceed with application submission");
            }
          }
        }
      } else {
        _var243("Captcha solving is DISABLED - proceeding with direct submission...");
      }
      const _var1142 = _var148("application-info-submit", {});
      if (_var1135 && _var1136) {
        const _var1143 = _var140("application-info-submit", "y6e7uk_token_t6d8n3");
        _var1142[_var1143] = _var1136;
      } else {
        const _var1144 = _var140("application-info-submit", "y6e7uk_token_t6d8n3");
        if (_var1144 && _var1142[_var1144] !== undefined) {
          delete _var1142[_var1144];
        }
      }
      if (!_var1142) {
        throw new Error("Failed to generate application payload");
      }
      const _var1145 = _var140("application-info-submit", "y6e7uk_token_t6d8n3");
      const _var1146 = {
        highcom: _var1142.highcom || _var128.applicationInfo.highcom,
        webfile_id: _var1142.webfile_id || _var128.applicationInfo.webFileId,
        webfile_id_repeat: _var1142.webfile_id_repeat || _var1142.webfile_id || _var128.applicationInfo.webFileId,
        ivac_id: _var1142.ivac_id || _var128.applicationInfo.ivacId,
        visa_type: _var1142.visa_type || _var128.applicationInfo.visaTypeId,
        family_count: _var1142.family_count || _var128.applicationInfo.familyCount,
        asweoi_erilfs: _var1142.visit_purpose || _var1142.asweoi_erilfs || _var128.applicationInfo.visitPurpose || ""
      };
      if (_var1135 && _var1136) {
        _var1146[_var1145] = _var1136;
        _var243("✅ Captcha token added to payload: " + _var1145 + " = " + _var1136.substring(0, 20) + "...");
      } else if (_var1135 && _var1142[_var1145]) {
        _var1146[_var1145] = _var1142[_var1145];
        _var243("✅ Captcha token from applicationData added to payload: " + _var1145 + " = " + _var1142[_var1145].substring(0, 20) + "...");
      } else if (_var1135) {
        _var648("⚠️ WARNING: Captcha is enabled but no token found! captchaToken=" + !!_var1136 + ", applicationData[" + _var1145 + "]=" + !!_var1142[_var1145]);
      }
      const _var1147 = {};
      for (const _var1148 in _var1146) {
        if (_var1146[_var1148] !== undefined) {
          _var1147[_var1148] = _var1146[_var1148];
        }
      }
      if (_var1135) {
        if (_var1147[_var1145]) {
          _var243("✅ Verified: Captcha token is in final payload (" + _var1145 + ")");
        } else {
          _var648("❌ ERROR: Captcha token is MISSING from final payload! Field: " + _var1145);
          if (_var1136) {
            _var1147[_var1145] = _var1136;
            _var243("✅ Last resort: Added captcha token directly to cleanPayload");
          }
        }
      }
      let _var1149 = null;
      let _var1150 = null;
      let _var1151 = 0;
      let _var1152 = 0;
      let _var1153 = false;
      try {
        _var1150 = GM_getValue(_var68, null);
        _var1151 = GM_getValue(_var69, 0);
        _var1152 = Date.now() - _var1151;
        _var1153 = _var1150 && _var1150.length > 0 && _var1152 >= 0 && _var1152 < _var70;
      } catch (_var1154) {
        _var648("❌ Error reading stored token from GM storage: " + _var1154.message);
        _var1153 = false;
      }
      const _var1155 = _var348() || _var353();
      _var243("🔍 [submitApplication] Token check - hasStoredToken: " + !!_var1150 + ", storedToken length: " + (_var1150?.length || 0) + ", storedTokenTs: " + _var1151 + ", tokenAge: " + Math.round(_var1152 / 1000) + "s, maxAge: " + Math.round(_var70 / 1000) + "s, isTokenValid: " + _var1153 + ", isAutoEnabled: " + _var1155);
      if (_var1153 && _var1150) {
        _var243("🔐 ✅ Using pre-fetched __device_id__ token (stored after login) - NO fetch needed - skipping first request");
        _var1149 = _var1150;
        try {
          GM_deleteValue(_var68);
          GM_deleteValue(_var69);
        } catch (_var1156) {
          _var648("❌ Error clearing stored token from GM storage: " + _var1156.message);
        }
        const _var1157 = window.APPLICATION_CONFIG || {};
        if (_var1157.invisibleRecaptchaToken) {
          delete _var1157.invisibleRecaptchaToken;
        }
        _var1147["device-verificaion-token"] = _var1149;
        _var243("✅ Using stored device-verificaion-token (length: " + _var1149.length + ") - NO first request will be sent - only main request will be sent");
      } else {
        if (_var1150 && !_var1153) {
          _var243("ℹ️ Stored token expired (age: " + Math.round(_var1152 / 1000) + "s) or invalid, clearing and fetching fresh token");
          try {
            GM_deleteValue(_var68);
            GM_deleteValue(_var69);
          } catch (_var1158) {
            _var648("❌ Error clearing expired token: " + _var1158.message);
          }
        }
        const _var1159 = GM_getValue(_var68, null);
        const _var1160 = GM_getValue(_var69, 0);
        const _var1161 = Date.now() - _var1160;
        const _var1162 = _var1159 && _var1159.length > 0 && _var1161 >= 0 && _var1161 < _var70;
        if (_var1162 && _var1159) {
          _var243("🔍 Double-check found valid stored token - using it instead of fetching (age: " + Math.round(_var1161 / 1000) + "s)");
          _var1149 = _var1159;
          try {
            GM_deleteValue(_var68);
            GM_deleteValue(_var69);
          } catch (_var1163) {
            _var648("❌ Error clearing stored token: " + _var1163.message);
          }
          _var1147["device-verificaion-token"] = _var1149;
          _var243("✅ Using stored device-verificaion-token from double-check (length: " + _var1149.length + ") - NO first request will be sent");
        } else {
          _var243("🔐 No valid stored token found (double-check also failed) - Fetching fresh __device_id__ token (first request)...");
          _var243("🔍 Double-check results: hasToken: " + !!_var1159 + ", age: " + Math.round(_var1161 / 1000) + "s, valid: " + _var1162);
          try {
            _var243("🔐 Step 1: Fetching fresh __device_id__ token (first request) before application submission...");
            _var1149 = await _var1061(_var1134, true);
            if (_var1149) {
              _var1147["device-verificaion-token"] = _var1149;
              _var243("✅ Added fresh device-verificaion-token from first request (length: " + _var1149.length + ")");
            } else {
              _var648("❌ __device_id__ token fetch returned null");
              throw new Error("Failed to fetch __device_id__ token - token is null");
            }
          } catch (_var1164) {
            _var648("⚠️ Failed to fetch __device_id__ token: " + _var1164.message);
            if (_var1164.message && _var1164.message.includes("HTTP error")) {
              const _var1165 = _var760("application");
              if (_var1165) {
                _var243("✅ Using cached application token after HTTP error (from cache, age: " + Math.round((Date.now() - _var759.application.timestamp) / 1000) + "s)");
                _var1149 = _var1165;
                _var1147["device-verificaion-token"] = _var1149;
              } else {
                try {
                  const _var1166 = document.querySelector("input[name=\"__device_id__\"]") || document.querySelector("input[name=\"device-verificaion-token\"]");
                  if (_var1166 && _var1166.value) {
                    _var1147["device-verificaion-token"] = _var1166.value;
                    _var243("✅ Added device-verificaion-token from page (fallback)");
                  } else {
                    _var648("⚠️ device-verificaion-token not available - submission may fail");
                  }
                } catch (_var1167) {
                  _var648("⚠️ Could not get __device_id__ token from page either");
                }
              }
            } else {
              try {
                const _var1168 = document.querySelector("input[name=\"__device_id__\"]") || document.querySelector("input[name=\"device-verificaion-token\"]");
                if (_var1168 && _var1168.value) {
                  _var1147["device-verificaion-token"] = _var1168.value;
                  _var243("✅ Added device-verificaion-token from page (fallback)");
                } else {
                  _var648("⚠️ device-verificaion-token not available - submission may fail");
                }
              } catch (_var1169) {
                _var648("⚠️ Could not get __device_id__ token from page either");
              }
            }
          }
        }
      }
      _var1147.__test_id__ = "";
      const _var1170 = [_var1147];
      _var1170.push(false);
      const _var1171 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "600839bbff78701b9e6f28771dcc78c11ac097a78a",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.193\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.193\", \"Chromium\";v=\"143.0.7499.193\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      _var243("Sending application submission request...");
      if (_var1132 && _var1132.showStatus) {
        _var1132.showStatus("Submitting application...", 200, "info");
      } else {
        _var425("Submitting application...", "#f59e0b");
      }
      const _var1172 = new AbortController();
      if (_var1134) {
        _var1134.addEventListener("abort", () => _var1172.abort(), {
          once: true
        });
      }
      const _var1173 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1171,
        body: JSON.stringify(_var1170),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application",
        signal: _var1172.signal
      });
      _var708(_var1173, "https://payment.ivacbd.com/application");
      if (!_var1173.ok) {
        const _var1174 = new Error("HTTP error! status: " + _var1173.status);
        _var1174.status = _var1173.status;
        throw _var1174;
      }
      let _var1175;
      const _var1176 = _var1173.headers.get("content-type");
      const _var1177 = await _var1173.text();
      try {
        let _var1178 = 0;
        while (_var1178 < _var1177.length) {
          const _var1179 = _var1177.indexOf("{", _var1178);
          if (_var1179 === -1) {
            break;
          }
          let _var1180 = 0;
          let _var1181 = -1;
          for (let _var1182 = _var1179; _var1182 < _var1177.length; _var1182++) {
            if (_var1177[_var1182] === "{") {
              _var1180++;
            }
            if (_var1177[_var1182] === "}") {
              _var1180--;
              if (_var1180 === 0) {
                _var1181 = _var1182 + 1;
                break;
              }
            }
          }
          if (_var1181 > _var1179) {
            const _var1183 = _var1177.substring(_var1179, _var1181);
            try {
              const _var1184 = JSON.parse(_var1183);
              if (_var1184.hasOwnProperty("success") && _var1184.hasOwnProperty("status_code") && _var1184.hasOwnProperty("message")) {
                _var1175 = _var1184;
                break;
              } else if (_var1184.hasOwnProperty("status_code") && _var1184.hasOwnProperty("message") && !_var1175) {
                _var1175 = _var1184;
              } else if (_var1184.hasOwnProperty("message") && !_var1175) {
                _var1175 = _var1184;
              }
            } catch (_var1185) {}
          }
          _var1178 = _var1179 + 1;
        }
      } catch (_var1186) {}
      if (!_var1175 || !_var1175.status_code || !_var1175.message) {
        if (_var1176 && _var1176.includes("application/json")) {
          try {
            const _var1187 = JSON.parse(_var1177);
            if (_var1187.hasOwnProperty("status_code") && _var1187.hasOwnProperty("message")) {
              _var1175 = _var1187;
            }
          } catch {}
        }
      }
      if (!_var1175 || !_var1175.status_code || !_var1175.message) {
        try {
          const _var1188 = /\{\s*"success"\s*:\s*false\s*,\s*"status_code"\s*:\s*(\d+)\s*,\s*"message"\s*:\s*"([^"]+)"\s*\}/;
          const _var1189 = _var1177.match(_var1188);
          if (_var1189) {
            _var1175 = {
              success: false,
              status_code: parseInt(_var1189[1]),
              message: _var1189[2]
            };
          } else {
            const _var1190 = /"status_code"\s*:\s*(\d+)/;
            const _var1191 = /"message"\s*:\s*"([^"]+)"/;
            const _var1192 = _var1177.match(_var1190);
            const _var1193 = _var1177.match(_var1191);
            if (_var1192 && _var1193) {
              _var1175 = {
                status_code: parseInt(_var1192[1]),
                message: _var1193[1]
              };
            } else if (_var1193) {
              _var1175 = {
                message: _var1193[1]
              };
            }
          }
        } catch (_var1194) {}
      }
      if (_var1175 && !_var1175.status_code) {
        _var1175.status_code = _var1175?.data?.status_code || _var1175?.statusCode || _var1175?.data?.statusCode || null;
      }
      if (_var1175?.status_code === 500 || _var1175?.data?.status_code === 500) {
        const _var1195 = {
          status: 500,
          message: _var1175?.message || _var1175?.data?.message || "Application submission failed",
          data: _var1175
        };
        _var243("[SubmitApplication] Detected status_code 500 in response body - throwing error for retry mechanism. message: " + _var1195.message + ", data.status_code: " + (_var1195.data?.status_code || _var1195.data?.data?.status_code));
        throw _var1195;
      }
      if (_var1175?.status_code === 429 || _var1175?.data?.status_code === 429) {
        const _var1196 = {
          status: 429,
          message: _var1175?.message || _var1175?.data?.message || "Rate limited",
          data: _var1175
        };
        _var243("[SubmitApplication] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1196.message + ", data.status_code: " + (_var1196.data?.status_code || _var1196.data?.data?.status_code));
        throw _var1196;
      }
      if (_var1175?.status_code === 401 || _var1175?.data?.status_code === 401) {
        const _var1197 = {
          status: 401,
          message: _var1175?.message || _var1175?.data?.message || "You are logged out. Please log in.",
          data: _var1175
        };
        _var243("[SubmitApplication] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1197.message + ", data.status_code: " + (_var1197.data?.status_code || _var1197.data?.data?.status_code));
        throw _var1197;
      }
      if (_var1175?.status_code === 419 || _var1175?.data?.status_code === 419) {
        const _var1198 = {
          status: 419,
          message: _var1175?.message || _var1175?.data?.message || "Session expired",
          data: _var1175
        };
        _var243("[SubmitApplication] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1198.message + ", data.status_code: " + (_var1198.data?.status_code || _var1198.data?.data?.status_code));
        throw _var1198;
      }
      const _var1199 = _var1175?.status === "success" || _var1175?.status_code === 200 || _var1173?.status === 200;
      if (!_var1199) {
        const _var1200 = _var1175?.status_code || _var1175?.data?.status_code || _var1175?.statusCode || _var1175?.data?.statusCode || null;
        throw {
          status: _var1200,
          message: _var1175?.message || "Application submission failed",
          data: _var1175
        };
      }
      const _var1201 = _var1175?.status_code || _var1175?.data?.status_code || _var1175?.statusCode || _var1175?.data?.statusCode || null;
      return {
        status: _var1201,
        httpStatus: _var1173.status,
        data: _var1175,
        applicationData: _var1142,
        token: _var736
      };
    }, async (_var1202, _var1203) => {
      const _var1204 = _var1202.data?.message || "";
      const _var1205 = _var1202?.status || null;
      const _var1206 = _var1202?.data?.status_code === 200 || _var1205 === 200;
      if (_var1204) {
        _var647(_var1204, null, _var1205);
        _var810(_var1204, "#10b981", null, _var1205);
        if (_var1206) {
          _var1207("success", _var1204);
        }
      }
      if (_var1202.token) {
        delete _var128.captchaToken;
      }
      const _var1208 = _var1202.data?.message || "";
      let _var1209 = 0;
      if (_var128.personalInfo.familyMembers && Array.isArray(_var128.personalInfo.familyMembers)) {
        _var1209 = _var128.personalInfo.familyMembers.length;
      } else if (_var128.personalInfo.family && typeof _var128.personalInfo.family === "object") {
        _var1209 = Object.keys(_var128.personalInfo.family).length;
      } else if (_var128.applicationInfo.familyCount) {
        _var1209 = parseInt(_var128.applicationInfo.familyCount) || 0;
      }
      let _var1210 = 11;
      if (_var1209 === 0) {
        _var1210 = 11;
      } else if (_var1209 === 1) {
        _var1210 = 46;
      } else if (_var1209 === 2) {
        _var1210 = 81;
      } else if (_var1209 === 3) {
        _var1210 = 116;
      } else if (_var1209 > 3) {
        _var1210 = 116;
      }
      if (_var353()) {
        _var1133("personal");
        _var243("Auto-proceeding to Personal Info submission after " + _var1210 + " second delay (" + _var1209 + " family members)...");
        // TOLOOK
        setTimeout(() => {
          if (_var353()) {
            _var243("Auto-proceeding to Personal Info submission...");
            _var492();
          }
        }, _var1210 * 1000);
      } else if (_var348()) {
        _var243("Auto retry enabled - Triggering personal info submit after " + _var1210 + " second delay (" + _var1209 + " family members)...");
        // TOLOOK
        setTimeout(() => {
          if (_var348()) {
            _var492();
          }
        }, _var1210 * 1000);
      }
      if ((_var353() || _var348()) && _var1202.status === 200) {
        _var243("Auto enabled - waiting 5 seconds before fetching Overview token...");
        // TOLOOK
        setTimeout(async () => {
          if (_var353() || _var348()) {
            try {
              _var243("🔐 Fetching Overview token (request 1) for storage...");
              const _var1211 = await _var1212(null, false);
              if (_var1211) {
                _var647("✅ Overview token fetched and stored in cache (length: " + _var1211.length + ")");
              } else {
                _var648("❌ Failed to fetch Overview token - token is null");
              }
            } catch (_var1213) {
              _var648("❌ Failed to fetch Overview token: " + _var1213.message);
            }
          }
        }, 5000);
      }
    }, "Application submission", {
      retryOn422: true,
      msgEl: _var1132,
      show419ServerMessage: true,
      on419: () => {
        if (_var353()) {
          _var243("Session expired, restarting application submission...");
          _var491();
        }
      }
    });
  }
  async function _var492() {
    if (_var341) {
      _var243("Personal info submission already in progress, skipping duplicate call...");
      return;
    }
    _var341 = true;
    _var243("Submitting personal info...");
    if (!_var128.personalInfo.fullName || !_var128.personalInfo.webFileId) {
      _var648("Please configure your profile data first using the Profile Manager");
      _var341 = false;
      return;
    }
    const _var1214 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    try {
      if (_var353()) {
        _var1133("personal");
      }
      return _var426(async _var1215 => {
        const _var1216 = _var148("personal-info-submit", {});
        if (!_var1216) {
          throw new Error("Failed to generate personal info payload");
        }
        const _var1217 = {};
        if (_var1216.family && typeof _var1216.family === "object" && Object.keys(_var1216.family).length > 0) {
          Object.keys(_var1216.family).forEach((_var1218, _var1219) => {
            const _var1220 = _var1216.family[_var1218];
            if (_var1220) {
              _var1217[String(_var1219 + 1)] = {
                name: _var1220.name || _var1220.full_name || "",
                webfile_no: _var1220.webfile_no || _var1220.webfile_id || "",
                again_webfile_no: _var1220.again_webfile_no || _var1220.webfile_no || _var1220.webfile_id || ""
              };
            }
          });
        } else if (_var128.personalInfo.familyMembers && Array.isArray(_var128.personalInfo.familyMembers) && _var128.personalInfo.familyMembers.length > 0) {
          _var128.personalInfo.familyMembers.forEach((_var1221, _var1222) => {
            if (_var1221 && (_var1221.name || _var1221.webFileNo)) {
              _var1217[String(_var1222 + 1)] = {
                name: _var1221.name || _var1221.full_name || "",
                webfile_no: _var1221.webFileNo || _var1221.webfile_no || _var1221.webfile_id || "",
                again_webfile_no: _var1221.againWebFileNo || _var1221.again_webfile_no || _var1221.webFileNo || _var1221.webfile_no || _var1221.webfile_id || ""
              };
            }
          });
        } else if (_var128.personalInfo.family && Array.isArray(_var128.personalInfo.family)) {
          _var128.personalInfo.family.forEach((_var1223, _var1224) => {
            if (_var1223) {
              _var1217[String(_var1224 + 1)] = {
                name: _var1223.name || _var1223.full_name || "",
                webfile_no: _var1223.webfile_no || _var1223.webfile_id || "",
                again_webfile_no: _var1223.again_webfile_no || _var1223.webfile_no || _var1223.webfile_id || ""
              };
            }
          });
        }
        const _var1225 = {
          full_name: _var1216.full_name || _var128.personalInfo.fullName || "",
          email_name: _var1216.email_name || _var128.personalInfo.email || "",
          phone: _var1216.phone || _var1216.mobile_no || _var128.personalInfo.phone || "",
          webfile_id: _var1216.webfile_id || _var128.personalInfo.webFileId || _var128.applicationInfo.webFileId || ""
        };
        if (Object.keys(_var1217).length > 0) {
          _var1225.family = _var1217;
        }
        const _var1226 = {};
        for (const _var1227 in _var1225) {
          if (_var1225[_var1227] !== undefined) {
            _var1226[_var1227] = _var1225[_var1227];
          }
        }
        const _var1228 = [_var1226, false];
        const _var1229 = {
          accept: "text/x-component",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "next-action": "605942a41f2f192697027bd16b7527877c549050cc",
          "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
          priority: "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
          "sec-ch-ua-arch": "\"x86\"",
          "sec-ch-ua-bitness": "\"64\"",
          "sec-ch-ua-full-version": "\"143.0.7499.170\"",
          "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"10.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        };
        _var243("Sending personal info submission request...");
        _var425("Submitting personal info...", "#f59e0b");
        const _var1230 = new AbortController();
        if (_var1215) {
          _var1215.addEventListener("abort", () => _var1230.abort(), {
            once: true
          });
        }
        const _var1231 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1229,
          body: JSON.stringify(_var1228),
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/application",
          signal: _var1230.signal
        });
        _var708(_var1231, "https://payment.ivacbd.com/application");
        if (!_var1231.ok) {
          const _var1232 = new Error("HTTP error! status: " + _var1231.status);
          _var1232.status = _var1231.status;
          throw _var1232;
        }
        let _var1233;
        const _var1234 = _var1231.headers.get("content-type");
        const _var1235 = await _var1231.text();
        if (_var1234 && _var1234.includes("application/json")) {
          try {
            _var1233 = await _var1231.json();
          } catch {
            _var1233 = null;
          }
        }
        if (!_var1233 || !_var1233.message) {
          try {
            const _var1236 = _var1235.indexOf("{\"status\"");
            if (_var1236 !== -1) {
              let _var1237 = _var1235.substring(_var1236);
              let _var1238 = 0;
              let _var1239 = -1;
              for (let _var1240 = 0; _var1240 < _var1237.length; _var1240++) {
                if (_var1237[_var1240] === "{") {
                  _var1238++;
                }
                if (_var1237[_var1240] === "}") {
                  _var1238--;
                  if (_var1238 === 0) {
                    _var1239 = _var1240 + 1;
                    break;
                  }
                }
              }
              if (_var1239 !== -1) {
                _var1237 = _var1237.substring(0, _var1239);
                try {
                  const _var1241 = JSON.parse(_var1237);
                  if (_var1241.message) {
                    _var1233 = _var1241;
                  }
                } catch (_var1242) {}
              }
            }
            if (!_var1233 || !_var1233.message) {
              const _var1243 = /"message"\s*:\s*"([^"]+)"/;
              const _var1244 = _var1235.match(_var1243);
              if (_var1244) {
                const _var1245 = _var1235.indexOf("{\"message\"");
                const _var1246 = _var1235.indexOf("}", _var1245);
                const _var1247 = _var1235.substring(_var1245, _var1246 + 1);
                const _var1248 = /"status_code"\s*:\s*(\d+)/;
                const _var1249 = _var1247.match(_var1248);
                if (_var1249) {
                  const _var1250 = parseInt(_var1249[1]);
                  _var1233 = {
                    message: _var1244[1],
                    status: "success",
                    status_code: _var1250
                  };
                } else {
                  _var1233 = {
                    message: _var1244[1],
                    status: "success"
                  };
                }
              }
            }
          } catch (_var1251) {
            const _var1252 = /"message"\s*:\s*"([^"]+)"/;
            const _var1253 = _var1235.match(_var1252);
            if (_var1253) {
              const _var1254 = _var1235.indexOf("{\"message\"");
              const _var1255 = _var1235.indexOf("}", _var1254);
              const _var1256 = _var1235.substring(_var1254, _var1255 + 1);
              const _var1257 = /"status_code"\s*:\s*(\d+)/;
              const _var1258 = _var1256.match(_var1257);
              if (_var1258) {
                const _var1259 = parseInt(_var1258[1]);
                _var1233 = {
                  message: _var1253[1],
                  status: "success",
                  status_code: _var1259
                };
              } else {
                _var1233 = {
                  message: _var1253[1],
                  status: "success"
                };
              }
            } else {
              const _var1260 = /"status_code"\s*:\s*(\d+)/;
              const _var1261 = _var1235.match(_var1260);
              if (_var1261) {
                const _var1262 = parseInt(_var1261[1]);
                _var1233 = {
                  message: _var1235,
                  status: "success",
                  status_code: _var1262
                };
              } else {
                _var1233 = {
                  message: _var1235,
                  status: "success"
                };
              }
            }
          }
        }
        if (_var1233?.status_code === 422 || _var1233?.data?.status_code === 422) {
          const _var1263 = {
            status: 422,
            message: _var1233?.message || _var1233?.data?.message || "Personal info submission failed",
            data: _var1233
          };
          _var243("[SubmitPersonal] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1263.message + ", data.status_code: " + (_var1263.data?.status_code || _var1263.data?.data?.status_code));
          throw _var1263;
        }
        if (_var1233?.status_code === 429 || _var1233?.data?.status_code === 429) {
          const _var1264 = {
            status: 429,
            message: _var1233?.message || _var1233?.data?.message || "Rate limited",
            data: _var1233
          };
          _var243("[SubmitPersonal] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1264.message + ", data.status_code: " + (_var1264.data?.status_code || _var1264.data?.data?.status_code));
          throw _var1264;
        }
        if (_var1233?.status_code === 401 || _var1233?.data?.status_code === 401) {
          const _var1265 = {
            status: 401,
            message: _var1233?.message || _var1233?.data?.message || "You are logged out. Please log in.",
            data: _var1233
          };
          _var243("[SubmitPersonal] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1265.message + ", data.status_code: " + (_var1265.data?.status_code || _var1265.data?.data?.status_code));
          throw _var1265;
        }
        if (_var1233?.status_code === 419 || _var1233?.data?.status_code === 419) {
          const _var1266 = {
            status: 419,
            message: _var1233?.message || _var1233?.data?.message || "Session expired",
            data: _var1233
          };
          _var243("[SubmitPersonal] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1266.message + ", data.status_code: " + (_var1266.data?.status_code || _var1266.data?.data?.status_code));
          throw _var1266;
        }
        const _var1267 = _var1233?.status === "success" || _var1233?.status_code === 200 || _var1231?.status === 200;
        if (!_var1267) {
          let _var1268 = null;
          if (_var1233?.status_code !== undefined && _var1233?.status_code !== null && typeof _var1233.status_code === "number") {
            _var1268 = _var1233.status_code;
          } else if (_var1233?.data?.status_code !== undefined && _var1233?.data?.status_code !== null && typeof _var1233.data.status_code === "number") {
            _var1268 = _var1233.data.status_code;
          } else if (_var1233?.statusCode !== undefined && _var1233?.statusCode !== null && typeof _var1233.statusCode === "number") {
            _var1268 = _var1233.statusCode;
          } else if (_var1233?.data?.statusCode !== undefined && _var1233?.data?.statusCode !== null && typeof _var1233.data.statusCode === "number") {
            _var1268 = _var1233.data.statusCode;
          }
          throw {
            status: 422,
            message: _var1233?.message || "Personal info submission failed",
            data: {
              ..._var1233,
              status_code: _var1268
            }
          };
        }
        let _var1269 = null;
        if (_var1233?.status_code !== undefined && _var1233?.status_code !== null && typeof _var1233.status_code === "number") {
          _var1269 = _var1233.status_code;
        } else if (_var1233?.data?.status_code !== undefined && _var1233?.data?.status_code !== null && typeof _var1233.data.status_code === "number") {
          _var1269 = _var1233.data.status_code;
        } else if (_var1233?.statusCode !== undefined && _var1233?.statusCode !== null && typeof _var1233.statusCode === "number") {
          _var1269 = _var1233.statusCode;
        } else if (_var1233?.data?.statusCode !== undefined && _var1233?.data?.statusCode !== null && typeof _var1233.data.statusCode === "number") {
          _var1269 = _var1233.data.statusCode;
        }
        if (_var1269 === _var1231.status) {
          _var1269 = null;
        }
        return {
          status: _var1269,
          data: _var1233,
          personalData: _var1216
        };
      }, async (_var1270, _var1271) => {
        const _var1272 = _var1270.data?.message || "";
        const _var1273 = _var1270?.status || null;
        const _var1274 = _var1270?.data?.status_code === 200 || _var1273 === 200;
        if (_var1272) {
          _var647(_var1272, null, _var1273);
          _var810(_var1272, "#10b981", null, _var1273);
          if (_var1274) {
            _var1207("success", _var1272);
          }
        }
        const _var1275 = _var1270.data?.message || "";
        _var128.captchaToken = null;
        if (_var353()) {
          _var1133("overview");
          const _var1276 = _var385();
          _var243("Auto-proceeding to Overview submission after " + _var1276 + " second delay...");
          // TOLOOK
          setTimeout(() => {
            if (_var353()) {
              _var243("Auto-proceeding to Overview submission...");
              _var493();
            }
          }, _var1276 * 1000);
        } else if (_var348()) {
          const _var1277 = _var385();
          _var243("Auto retry enabled - Triggering overview submit after " + _var1277 + " second delay...");
          // TOLOOK
          setTimeout(() => {
            if (_var348()) {
              _var493();
            }
          }, _var1277 * 1000);
        }
      }, "Personal info submission", {
        retryOn422: false,
        msgEl: _var1214,
        show419ServerMessage: true
      });
    } finally {
      _var341 = false;
    }
  }
  function _var1278(_var1279) {
    try {
      if (!_var1279 || typeof _var1279 !== "string") {
        return null;
      }
      const _var1280 = _var948(_var1279);
      const _var1281 = _var1282 => {
        if (!_var1282) {
          return null;
        }
        if (typeof _var1282 === "object") {
          return _var1282;
        }
        if (typeof _var1282 !== "string") {
          return null;
        }
        const _var1283 = _var1282.trim();
        if (!_var1283) {
          return null;
        }
        if (_var1283.startsWith("{") && _var1283.endsWith("}") || _var1283.startsWith("[") && _var1283.endsWith("]")) {
          try {
            return JSON.parse(_var1283);
          } catch {
            return null;
          }
        }
        return null;
      };
      const _var1284 = (_var1285, _var1286 = 0) => {
        if (!_var1285 || _var1286 > 6) {
          return null;
        }
        if (Array.isArray(_var1285)) {
          for (const _var1287 of _var1285) {
            const _var1288 = _var1284(_var1287, _var1286 + 1);
            if (_var1288) {
              return _var1288;
            }
          }
          return null;
        }
        if (typeof _var1285 !== "object") {
          return null;
        }
        if (_var1285.passwordFieldConfig || _var1285.otpFieldConfig) {
          return {
            passwordFieldConfig: _var1285.passwordFieldConfig || null,
            otpFieldConfig: _var1285.otpFieldConfig || null
          };
        }
        for (const _var1289 of Object.keys(_var1285)) {
          const _var1290 = _var1284(_var1285[_var1289], _var1286 + 1);
          if (_var1290) {
            return _var1290;
          }
        }
        return null;
      };
      for (const _var1291 of Object.keys(_var1280)) {
        const _var1292 = _var1280[_var1291];
        const _var1293 = _var1281(_var1292) || _var1292;
        const _var1294 = _var1284(_var1293);
        if (_var1294 && (_var1294.passwordFieldConfig || _var1294.otpFieldConfig)) {
          return _var1294;
        }
      }
      if (_var1279.includes("\"passwordFieldConfig\"") || _var1279.includes("\"otpFieldConfig\"")) {
        const _var1295 = _var1279.indexOf("[\"$\"");
        if (_var1295 !== -1) {
          for (let _var1296 = _var1295; _var1296 < Math.min(_var1279.length, _var1295 + 200000); _var1296++) {
            if (_var1279[_var1296] === "]") {
              const _var1297 = _var1279.substring(_var1295, _var1296 + 1);
              const _var1298 = _var1281(_var1297);
              const _var1299 = _var1284(_var1298);
              if (_var1299) {
                return _var1299;
              }
            }
          }
        }
      }
      return null;
    } catch {
      return null;
    }
  }
  function _var1300(_var1301) {
    try {
      if (!_var1301) {
        return null;
      }
      const _var1302 = _var1301.passwordFieldConfig || null;
      const _var1303 = _var1301.otpFieldConfig || null;
      const _var1304 = Array.isArray(_var1302?.fields) ? _var1302.fields : [];
      const _var1305 = Array.isArray(_var1303?.fields) ? _var1303.fields : [];
      const _var1306 = _var1304.find(_var1307 => _var1307 && typeof _var1307 === "object" && _var1307.isReal)?.name || null;
      const _var1308 = _var1305.find(_var1309 => _var1309 && typeof _var1309 === "object" && _var1309.isReal)?.name || null;
      const _var1310 = _var1304.find(_var1311 => _var1311 && typeof _var1311 === "object" && _var1311.order === 5)?.name || _var1306 || null;
      const _var1312 = _var1302?.token || _var1303?.token || null;
      return {
        xFieldName: _var1310,
        xFieldToken: _var1312,
        passwordRealField: _var1306,
        passwordFieldToken: _var1302?.token || null,
        otpRealField: _var1308,
        otpFieldToken: _var1303?.token || null,
        ts: Date.now()
      };
    } catch {
      return null;
    }
  }
  async function _var1313(_var1314 = null, _var1315 = true) {
    try {
      if (_var1315) {
        const _var1316 = _var760("login");
        if (_var1316) {
          _var243("✅ Using cached login token (from cache, age: " + Math.round((Date.now() - _var759.login.timestamp) / 1000) + "s)");
          return _var1316;
        }
      }
      _var243("🔐 Step 2: Requesting login challenge token...");
      const _var1317 = "9V2csFmZ6ISYiwCM6ICdiwCM6IyciwiM6IyYiwiM6IyaiwiMyojItJye";
      const _var1318 = JSON.stringify([_var1317]);
      const _var1319 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4017c86ac8ef9fbf30eceaf4893729bcbaa5ed503b",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.193\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.193\", \"Chromium\";v=\"143.0.7499.193\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      _var243("[fetchLoginToken] Sending fetch request to https://payment.ivacbd.com/...");
      const _var1320 = 4;
      const _var1321 = 15;
      let _var1322 = 0;
      let _var1323 = null;
      while (true) {
        _var1323 = await fetch("https://payment.ivacbd.com/", {
          method: "POST",
          headers: _var1319,
          body: _var1318,
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/",
          signal: _var1314
        });
        _var708(_var1323, "https://payment.ivacbd.com/");
        _var243("[fetchLoginToken] Response status: " + _var1323.status + " " + _var1323.statusText);
        if (_var1323.status === 503 && _var348() && _var1322 < _var1320) {
          _var1322++;
          const _var1324 = _var237() * 1000;
          _var243("[fetchLoginToken] 503 error - Retrying in " + (_var1324 / 1000).toFixed(1) + "s... (" + _var1322 + "/" + _var1320 + ")");
          _var425("Service Unavailable (503). Retrying in " + (_var1324 / 1000).toFixed(1) + "s... (" + _var1322 + "/" + _var1320 + ")", "#f59e0b");
          await new Promise(_var1325 => // TOLOOK
          setTimeout(_var1325, _var1324));
          continue;
        }
        if ((_var1323.status === 500 || _var1323.status === 502 || _var1323.status === 504) && _var348() && _var1322 < _var1321) {
          _var1322++;
          const _var1326 = 20000;
          const _var1327 = _var1323.status === 500 ? "Server error (500)" : _var1323.status === 502 ? "Bad gateway (502)" : "Gateway timeout (504)";
          _var243("[fetchLoginToken] " + _var1323.status + " error - Retrying in " + (_var1326 / 1000).toFixed(1) + "s... (" + _var1322 + "/" + _var1321 + ")");
          _var425(_var1327 + ". Retrying in " + (_var1326 / 1000).toFixed(1) + "s... (" + _var1322 + "/" + _var1321 + ")", "#f59e0b");
          await new Promise(_var1328 => // TOLOOK
          setTimeout(_var1328, _var1326));
          continue;
        }
        if (!_var1323.ok) {
          _var648("[fetchLoginToken] HTTP error! status: " + _var1323.status);
          throw new Error("HTTP error! status: " + _var1323.status);
        }
        break;
      }
      const _var1329 = await _var1323.text();
      _var243("[fetchLoginToken] Response received, length: " + _var1329.length + ", preview: " + _var1329.substring(0, 100) + "...");
      const _var1330 = _var948(_var1329);
      _var243("[fetchLoginToken] Parsed parts: " + Object.keys(_var1330).join(", "));
      let _var1331 = null;
      _var243("[fetchLoginToken] Checking parts - keys: " + Object.keys(_var1330).join(", ") + ", part '1' type: " + typeof _var1330["1"]);
      if (_var1330["1"]) {
        if (typeof _var1330["1"] === "string") {
          _var1331 = _var1330["1"].replace(/^["']|["']$/g, "").trim();
          _var243("[fetchLoginToken] Extracted from part '1' (string): " + _var1331.substring(0, 30) + "...");
        } else if (typeof _var1330["1"] === "object" && _var1330["1"] !== null) {
          _var1331 = _var1330["1"].token || _var1330["1"].data || null;
          _var243("[fetchLoginToken] Extracted from part '1' (object): " + (_var1331 ? _var1331.substring(0, 30) + "..." : "null"));
        }
      }
      if (!_var1331 || _var1331.length === 0) {
        _var243("[fetchLoginToken] Part '1' not found or empty, trying regex fallback...");
        const _var1332 = _var1329.match(/1:\s*"([^"]+)"/);
        const _var1333 = _var1329.match(/1:\s*([A-Za-z0-9+/=]+=*)/);
        const _var1334 = _var1329.match(/"([A-Za-z0-9+/=]{100,}=*)"/);
        if (_var1332 && _var1332[1]) {
          _var1331 = _var1332[1];
          _var243("✅ Found login token using regex pattern 1 (quoted string)");
        } else if (_var1333 && _var1333[1] && _var1333[1].length > 50) {
          _var1331 = _var1333[1];
          _var243("✅ Found login token using regex pattern 2 (base64)");
        } else if (_var1334 && _var1334[1] && _var1334[1].length > 100) {
          _var1331 = _var1334[1];
          _var243("✅ Found login token using regex pattern 3 (base64 in quotes)");
        } else {
          _var648("❌ [fetchLoginToken] Could not extract token using regex - text preview: " + _var1329.substring(0, 200) + "...");
        }
      }
      let _var1335 = null;
      for (const _var1336 in _var1330) {
        if (_var1336 !== "1" && _var1330[_var1336]) {
          if (typeof _var1330[_var1336] === "string") {
            const _var1337 = _var1330[_var1336].replace(/^["']|["']$/g, "").trim();
            if (_var1337.length > 100 && /^[A-Za-z0-9+/=]+=*$/.test(_var1337)) {
              _var1335 = _var1337;
              _var243("[fetchLoginToken] Found potential field token in part '" + _var1336 + "'");
              break;
            }
          } else if (typeof _var1330[_var1336] === "object" && _var1330[_var1336] !== null) {
            const _var1338 = _var1330[_var1336].token || _var1330[_var1336].data || null;
            if (_var1338 && _var1338.length > 100) {
              _var1335 = _var1338;
              _var243("[fetchLoginToken] Found potential field token in part '" + _var1336 + "' object");
              break;
            }
          }
        }
      }
      if (!_var1335) {
        const _var1339 = _var1329.match(/2:\s*"([^"]{100,})"/);
        const _var1340 = _var1329.match(/field[_-]?token["\s:]+"([^"]{100,})"/i);
        const _var1341 = _var1329.match(/"([A-Za-z0-9+/=]{150,}=*)"/);
        if (_var1339 && _var1339[1]) {
          _var1335 = _var1339[1];
          _var243("[fetchLoginToken] Found field token using pattern 1");
        } else if (_var1340 && _var1340[1]) {
          _var1335 = _var1340[1];
          _var243("[fetchLoginToken] Found field token using pattern 2");
        } else if (_var1341 && _var1341[1] && _var1341[1] !== _var1331) {
          _var1335 = _var1341[1];
          _var243("[fetchLoginToken] Found field token using pattern 3");
        }
      }
      if (_var1331) {
        _var243("✅ Successfully fetched login token (" + _var1331.substring(0, 30) + "...)");
        _var765("login", _var1331);
        if (_var1335) {
          _var243("✅ Successfully extracted field token (" + _var1335.substring(0, 30) + "...)");
          return {
            loginToken: _var1331,
            fieldToken: _var1335
          };
        }
        return _var1331;
      } else {
        _var648("❌ Failed to extract login token from response");
        throw new Error("Login token not found in response");
      }
    } catch (_var1342) {
      _var648("❌ Failed to fetch login token: " + _var1342.message);
      throw _var1342;
    }
  }
  async function _var1343(_var1344 = null, _var1345 = true) {
    try {
      if (_var1345) {
        const _var1346 = _var760("paynow");
        if (_var1346) {
          _var243("✅ Using cached paynow token (from cache, age: " + Math.round((Date.now() - _var759.paynow.timestamp) / 1000) + "s)");
          return _var1346;
        }
      }
      _var243("Step 1: Requesting paynow challenge token...");
      const _var1347 = "==QflNHbhZmOiEmIsAjOiQnIsAjM6IyciwSN0ojIjJCL1kjOismIsUDN2ojItJye";
      const _var1348 = JSON.stringify([_var1347]);
      const _var1349 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4017c86ac8ef9fbf30eceaf4893729bcbaa5ed503b",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Whale\";v=\"4\", \"Not.A/Brand\";v=\"99\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"4.35.351.16\"",
        "sec-ch-ua-full-version-list": "\"Chromium\";v=\"142.0.7444.265\", \"Whale\";v=\"4.35.351.16\", \"Not.A/Brand\";v=\"99.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      _var243("[fetchPaynowToken] Sending fetch request to https://payment.ivacbd.com/application...");
      const _var1350 = 4;
      const _var1351 = 15;
      let _var1352 = 0;
      let _var1353 = null;
      while (true) {
        _var1353 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1349,
          body: _var1348,
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/application",
          signal: _var1344
        });
        _var708(_var1353, "https://payment.ivacbd.com/application");
        _var243("[fetchPaynowToken] Response status: " + _var1353.status + " " + _var1353.statusText);
        if (_var1353.status === 503 && _var348() && _var1352 < _var1350) {
          _var1352++;
          const _var1354 = _var237() * 1000;
          _var243("[fetchPaynowToken] 503 error - Retrying in " + (_var1354 / 1000).toFixed(1) + "s... (" + _var1352 + "/" + _var1350 + ")");
          _var425("Service Unavailable (503). Retrying in " + (_var1354 / 1000).toFixed(1) + "s... (" + _var1352 + "/" + _var1350 + ")", "#f59e0b");
          await new Promise(_var1355 => // TOLOOK
          setTimeout(_var1355, _var1354));
          continue;
        }
        if ((_var1353.status === 500 || _var1353.status === 502 || _var1353.status === 504) && _var348() && _var1352 < _var1351) {
          _var1352++;
          const _var1356 = 20000;
          const _var1357 = _var1353.status === 500 ? "Server error (500)" : _var1353.status === 502 ? "Bad gateway (502)" : "Gateway timeout (504)";
          _var243("[fetchPaynowToken] " + _var1353.status + " error - Retrying in " + (_var1356 / 1000).toFixed(1) + "s... (" + _var1352 + "/" + _var1351 + ")");
          _var425(_var1357 + ". Retrying in " + (_var1356 / 1000).toFixed(1) + "s... (" + _var1352 + "/" + _var1351 + ")", "#f59e0b");
          await new Promise(_var1358 => // TOLOOK
          setTimeout(_var1358, _var1356));
          continue;
        }
        if (!_var1353.ok) {
          _var648("[fetchPaynowToken] HTTP error! status: " + _var1353.status);
          throw new Error("HTTP error! status: " + _var1353.status);
        }
        break;
      }
      const _var1359 = await _var1353.text();
      _var243("[fetchPaynowToken] Response received, length: " + _var1359.length + ", preview: " + _var1359.substring(0, 100) + "...");
      const _var1360 = _var948(_var1359);
      _var243("[fetchPaynowToken] Parsed parts: " + Object.keys(_var1360).join(", "));
      let _var1361 = null;
      _var243("[fetchPaynowToken] Checking parts - keys: " + Object.keys(_var1360).join(", ") + ", part '1' type: " + typeof _var1360["1"]);
      if (_var1360["1"]) {
        if (typeof _var1360["1"] === "string") {
          _var1361 = _var1360["1"].replace(/^["']|["']$/g, "").trim();
          _var243("[fetchPaynowToken] Extracted from part '1' (string): " + _var1361.substring(0, 30) + "...");
        } else if (typeof _var1360["1"] === "object" && _var1360["1"] !== null) {
          _var1361 = _var1360["1"].token || _var1360["1"].data || null;
          _var243("[fetchPaynowToken] Extracted from part '1' (object): " + (_var1361 ? _var1361.substring(0, 30) + "..." : "null"));
        }
      }
      if (!_var1361 || _var1361.length === 0) {
        _var243("[fetchPaynowToken] Part '1' not found or empty, trying regex fallback...");
        const _var1362 = _var1359.match(/1:\s*"([^"]+)"/);
        const _var1363 = _var1359.match(/1:\s*([A-Za-z0-9+/=]+=*)/);
        const _var1364 = _var1359.match(/"([A-Za-z0-9+/=]{100,}=*)"/);
        if (_var1362 && _var1362[1]) {
          _var1361 = _var1362[1];
          _var243("✅ Found paynow token using regex pattern 1 (quoted string)");
        } else if (_var1363 && _var1363[1] && _var1363[1].length > 50) {
          _var1361 = _var1363[1];
          _var243("✅ Found paynow token using regex pattern 2 (base64)");
        } else if (_var1364 && _var1364[1] && _var1364[1].length > 100) {
          _var1361 = _var1364[1];
          _var243("✅ Found paynow token using regex pattern 3 (base64 in quotes)");
        } else {
          _var648("❌ [fetchPaynowToken] Could not extract token using regex - text preview: " + _var1359.substring(0, 200) + "...");
        }
      }
      if (_var1361) {
        _var243("✅ Successfully fetched paynow token (" + _var1361.substring(0, 30) + "...)");
        _var765("paynow", _var1361);
        return _var1361;
      } else {
        _var648("❌ Failed to extract paynow token from response");
        throw new Error("Paynow token not found in response");
      }
    } catch (_var1365) {
      _var648("❌ Failed to fetch paynow token: " + _var1365.message);
      throw _var1365;
    }
  }
  async function _var1212(_var1366 = null, _var1367 = true) {
    try {
      if (_var1367) {
        const _var1368 = _var760("overview");
        if (_var1368) {
          _var243("✅ Using cached overview token (from cache, age: " + Math.round((Date.now() - _var759.overview.timestamp) / 1000) + "s)");
          return _var1368;
        }
      }
      _var243("Step 1: Requesting overview challenge token...");
      const _var1369 = "9V2csFmZ6ISYiwCM6ICdiwCM6IyciwSM6IyYiwCM6IyaiwSMxojItJye";
      const _var1370 = JSON.stringify([_var1369]);
      const _var1371 = {
        accept: "text/x-component",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4017c86ac8ef9fbf30eceaf4893729bcbaa5ed503b",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.110\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.110\", \"Chromium\";v=\"143.0.7499.110\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      _var243("[fetchOverviewToken] Sending fetch request to https://payment.ivacbd.com/application...");
      const _var1372 = 4;
      const _var1373 = 15;
      let _var1374 = 0;
      let _var1375 = null;
      while (true) {
        _var1375 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1371,
          body: _var1370,
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/application",
          signal: _var1366
        });
        _var708(_var1375, "https://payment.ivacbd.com/application");
        _var243("[fetchOverviewToken] Response status: " + _var1375.status + " " + _var1375.statusText);
        if (_var1375.status === 503 && _var348() && _var1374 < _var1372) {
          _var1374++;
          const _var1376 = _var237() * 1000;
          _var243("[fetchOverviewToken] 503 error - Retrying in " + (_var1376 / 1000).toFixed(1) + "s... (" + _var1374 + "/" + _var1372 + ")");
          _var425("Service Unavailable (503). Retrying in " + (_var1376 / 1000).toFixed(1) + "s... (" + _var1374 + "/" + _var1372 + ")", "#f59e0b");
          await new Promise(_var1377 => // TOLOOK
          setTimeout(_var1377, _var1376));
          continue;
        }
        if ((_var1375.status === 500 || _var1375.status === 502 || _var1375.status === 504) && _var348() && _var1374 < _var1373) {
          _var1374++;
          const _var1378 = 20000;
          const _var1379 = _var1375.status === 500 ? "Server error (500)" : _var1375.status === 502 ? "Bad gateway (502)" : "Gateway timeout (504)";
          _var243("[fetchOverviewToken] " + _var1375.status + " error - Retrying in " + (_var1378 / 1000).toFixed(1) + "s... (" + _var1374 + "/" + _var1373 + ")");
          _var425(_var1379 + ". Retrying in " + (_var1378 / 1000).toFixed(1) + "s... (" + _var1374 + "/" + _var1373 + ")", "#f59e0b");
          await new Promise(_var1380 => // TOLOOK
          setTimeout(_var1380, _var1378));
          continue;
        }
        if (!_var1375.ok) {
          _var648("[fetchOverviewToken] HTTP error! status: " + _var1375.status);
          throw new Error("HTTP error! status: " + _var1375.status);
        }
        break;
      }
      const _var1381 = await _var1375.text();
      _var243("[fetchOverviewToken] Response received, length: " + _var1381.length + ", preview: " + _var1381.substring(0, 100) + "...");
      const _var1382 = _var948(_var1381);
      _var243("[fetchOverviewToken] Parsed parts: " + Object.keys(_var1382).join(", "));
      let _var1383 = null;
      _var243("[fetchOverviewToken] Checking parts - keys: " + Object.keys(_var1382).join(", ") + ", part '1' type: " + typeof _var1382["1"]);
      if (_var1382["1"]) {
        if (typeof _var1382["1"] === "string") {
          _var1383 = _var1382["1"].replace(/^["']|["']$/g, "").trim();
          _var243("[fetchOverviewToken] Extracted from part '1' (string): " + _var1383.substring(0, 30) + "...");
        } else if (typeof _var1382["1"] === "object" && _var1382["1"] !== null) {
          _var1383 = _var1382["1"].token || _var1382["1"].data || null;
          _var243("[fetchOverviewToken] Extracted from part '1' (object): " + (_var1383 ? _var1383.substring(0, 30) + "..." : "null"));
        }
      }
      if (!_var1383 || _var1383.length === 0) {
        _var243("[fetchOverviewToken] Part '1' not found or empty, trying regex fallback...");
        const _var1384 = _var1381.match(/1:\s*"([^"]+)"/);
        const _var1385 = _var1381.match(/1:\s*([A-Za-z0-9+/=]+=*)/);
        const _var1386 = _var1381.match(/"([A-Za-z0-9+/=]{100,}=*)"/);
        if (_var1384 && _var1384[1]) {
          _var1383 = _var1384[1];
          _var243("✅ Found overview token using regex pattern 1 (quoted string)");
        } else if (_var1385 && _var1385[1] && _var1385[1].length > 50) {
          _var1383 = _var1385[1];
          _var243("✅ Found overview token using regex pattern 2 (base64)");
        } else if (_var1386 && _var1386[1] && _var1386[1].length > 100) {
          _var1383 = _var1386[1];
          _var243("✅ Found overview token using regex pattern 3 (base64 in quotes)");
        } else {
          _var648("❌ [fetchOverviewToken] Could not extract token using regex - text preview: " + _var1381.substring(0, 200) + "...");
        }
      }
      if (_var1383) {
        _var243("✅ Successfully fetched overview token (" + _var1383.substring(0, 30) + "...)");
        _var765("overview", _var1383);
        return _var1383;
      } else {
        _var648("❌ Failed to extract overview token from response");
        throw new Error("Overview token not found in response");
      }
    } catch (_var1387) {
      _var648("❌ Failed to fetch overview token: " + _var1387.message);
      throw _var1387;
    }
  }
  async function _var493() {
    if (_var342) {
      _var243("Overview submission already in progress, skipping duplicate call...");
      return;
    }
    _var342 = true;
    _var243("Submitting overview...");
    const _var1388 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    try {
      if (_var353()) {
        _var1133("overview");
      }
      return _var426(async _var1389 => {
        let _var1390 = null;
        const _var1391 = _var760("overview");
        if (_var1391) {
          _var243("✅ Using cached Overview token - SKIPPING request 1 (from cache, age: " + Math.round((Date.now() - _var759.overview.timestamp) / 1000) + "s)");
          _var1390 = _var1391;
          _var243("✅ Proceeding directly to main Overview request with cached token (length: " + _var1390.length + ")");
        } else {
          try {
            _var243("🔐 Step 1: Fetching overview token (first request) before overview submission...");
            _var1390 = await _var1212(_var1389);
            if (!_var1390) {
              _var648("❌ Overview token fetch returned null");
              throw new Error("Failed to fetch overview token - token is null");
            }
            _var243("✅ Fetched new overview token (length: " + _var1390.length + ")");
          } catch (_var1392) {
            _var648("⚠️ Failed to fetch overview token: " + _var1392.message);
            if (_var1392.message && _var1392.message.includes("HTTP error")) {
              const _var1393 = _var760("overview");
              if (_var1393) {
                _var243("✅ Using cached overview token after HTTP error (from cache, age: " + Math.round((Date.now() - _var759.overview.timestamp) / 1000) + "s)");
                _var1390 = _var1393;
              } else {
                throw _var1392;
              }
            } else {
              throw _var1392;
            }
          }
        }
        const _var1394 = "en";
        const _var1395 = [_var1394, _var1390];
        const _var1396 = {
          accept: "text/x-component",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "text/plain;charset=UTF-8",
          "next-action": "60ed73ba0ee4195d8f97dc5aa1ba7762b43341b709",
          "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
          priority: "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
          "sec-ch-ua-arch": "\"x86\"",
          "sec-ch-ua-bitness": "\"64\"",
          "sec-ch-ua-full-version": "\"143.0.7499.110\"",
          "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.110\", \"Chromium\";v=\"143.0.7499.110\", \"Not A(Brand\";v=\"24.0.0.0\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"10.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        };
        _var243("Sending overview submission request...");
        _var425("Submitting overview...", "#f59e0b");
        const _var1397 = new AbortController();
        if (_var1389) {
          _var1389.addEventListener("abort", () => _var1397.abort(), {
            once: true
          });
        }
        const _var1398 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1396,
          body: JSON.stringify(_var1395),
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/application",
          signal: _var1397.signal
        });
        _var708(_var1398, "https://payment.ivacbd.com/application");
        if (!_var1398.ok) {
          const _var1399 = new Error("HTTP error! status: " + _var1398.status);
          _var1399.status = _var1398.status;
          throw _var1399;
        }
        let _var1400;
        const _var1401 = _var1398.headers.get("content-type");
        const _var1402 = await _var1398.text();
        if (_var1401 && _var1401.includes("application/json")) {
          try {
            _var1400 = await _var1398.json();
          } catch {
            _var1400 = null;
          }
        }
        if (!_var1400 || !_var1400.message) {
          try {
            const _var1403 = _var1402.indexOf("{\"status\"");
            if (_var1403 !== -1) {
              let _var1404 = _var1402.substring(_var1403);
              let _var1405 = 0;
              let _var1406 = -1;
              for (let _var1407 = 0; _var1407 < _var1404.length; _var1407++) {
                if (_var1404[_var1407] === "{") {
                  _var1405++;
                }
                if (_var1404[_var1407] === "}") {
                  _var1405--;
                  if (_var1405 === 0) {
                    _var1406 = _var1407 + 1;
                    break;
                  }
                }
              }
              if (_var1406 !== -1) {
                _var1404 = _var1404.substring(0, _var1406);
                try {
                  const _var1408 = JSON.parse(_var1404);
                  if (_var1408.message) {
                    _var1400 = _var1408;
                  }
                } catch (_var1409) {}
              }
            }
            if (!_var1400 || !_var1400.message) {
              const _var1410 = /"message"\s*:\s*"([^"]+)"/;
              const _var1411 = _var1402.match(_var1410);
              if (_var1411) {
                const _var1412 = _var1402.indexOf("{\"message\"");
                const _var1413 = _var1402.indexOf("}", _var1412);
                const _var1414 = _var1402.substring(_var1412, _var1413 + 1);
                const _var1415 = /"status_code"\s*:\s*(\d+)/;
                const _var1416 = _var1414.match(_var1415);
                if (_var1416) {
                  const _var1417 = parseInt(_var1416[1]);
                  _var1400 = {
                    message: _var1411[1],
                    status: "success",
                    status_code: _var1417
                  };
                } else {
                  _var1400 = {
                    message: _var1411[1],
                    status: "success"
                  };
                }
              }
            }
          } catch (_var1418) {
            const _var1419 = /"message"\s*:\s*"([^"]+)"/;
            const _var1420 = _var1402.match(_var1419);
            if (_var1420) {
              const _var1421 = _var1402.indexOf("{\"message\"");
              const _var1422 = _var1402.indexOf("}", _var1421);
              const _var1423 = _var1402.substring(_var1421, _var1422 + 1);
              const _var1424 = /"status_code"\s*:\s*(\d+)/;
              const _var1425 = _var1423.match(_var1424);
              if (_var1425) {
                const _var1426 = parseInt(_var1425[1]);
                _var1400 = {
                  message: _var1420[1],
                  status: "success",
                  status_code: _var1426
                };
              } else {
                _var1400 = {
                  message: _var1420[1],
                  status: "success"
                };
              }
            } else {
              const _var1427 = /"status_code"\s*:\s*(\d+)/;
              const _var1428 = _var1402.match(_var1427);
              if (_var1428) {
                const _var1429 = parseInt(_var1428[1]);
                _var1400 = {
                  message: _var1402,
                  status: "success",
                  status_code: _var1429
                };
              } else {
                _var1400 = {
                  message: _var1402,
                  status: "success"
                };
              }
            }
          }
        }
        if (_var1400?.status_code === 422 || _var1400?.data?.status_code === 422) {
          const _var1430 = {
            status: 422,
            message: _var1400?.message || _var1400?.data?.message || "Overview submission failed",
            data: _var1400
          };
          _var243("[SubmitOverview] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1430.message + ", data.status_code: " + (_var1430.data?.status_code || _var1430.data?.data?.status_code));
          throw _var1430;
        }
        if (_var1400?.status_code === 429 || _var1400?.data?.status_code === 429) {
          const _var1431 = {
            status: 429,
            message: _var1400?.message || _var1400?.data?.message || "Rate limited",
            data: _var1400
          };
          _var243("[SubmitOverview] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1431.message + ", data.status_code: " + (_var1431.data?.status_code || _var1431.data?.data?.status_code));
          throw _var1431;
        }
        if (_var1400?.status_code === 401 || _var1400?.data?.status_code === 401) {
          const _var1432 = {
            status: 401,
            message: _var1400?.message || _var1400?.data?.message || "You are logged out. Please log in.",
            data: _var1400
          };
          _var243("[SubmitOverview] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1432.message + ", data.status_code: " + (_var1432.data?.status_code || _var1432.data?.data?.status_code));
          throw _var1432;
        }
        if (_var1400?.status_code === 419 || _var1400?.data?.status_code === 419) {
          const _var1433 = {
            status: 419,
            message: _var1400?.message || _var1400?.data?.message || "Session expired",
            data: _var1400
          };
          _var243("[SubmitOverview] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1433.message + ", data.status_code: " + (_var1433.data?.status_code || _var1433.data?.data?.status_code));
          throw _var1433;
        }
        const _var1434 = _var1400?.status === "success" || _var1400?.status_code === 200 || _var1398?.status === 200;
        if (!_var1434) {
          let _var1435 = null;
          if (_var1400?.status_code !== undefined && _var1400?.status_code !== null && typeof _var1400.status_code === "number") {
            _var1435 = _var1400.status_code;
          } else if (_var1400?.data?.status_code !== undefined && _var1400?.data?.status_code !== null && typeof _var1400.data.status_code === "number") {
            _var1435 = _var1400.data.status_code;
          } else if (_var1400?.statusCode !== undefined && _var1400?.statusCode !== null && typeof _var1400.statusCode === "number") {
            _var1435 = _var1400.statusCode;
          } else if (_var1400?.data?.statusCode !== undefined && _var1400?.data?.statusCode !== null && typeof _var1400.data.statusCode === "number") {
            _var1435 = _var1400.data.statusCode;
          }
          throw {
            status: 422,
            message: _var1400?.message || "Overview submission failed",
            data: {
              ..._var1400,
              status_code: _var1435
            }
          };
        }
        let _var1436 = null;
        if (_var1400?.status_code !== undefined && _var1400?.status_code !== null && typeof _var1400.status_code === "number") {
          _var1436 = _var1400.status_code;
        } else if (_var1400?.data?.status_code !== undefined && _var1400?.data?.status_code !== null && typeof _var1400.data.status_code === "number") {
          _var1436 = _var1400.data.status_code;
        } else if (_var1400?.statusCode !== undefined && _var1400?.statusCode !== null && typeof _var1400.statusCode === "number") {
          _var1436 = _var1400.statusCode;
        } else if (_var1400?.data?.statusCode !== undefined && _var1400?.data?.statusCode !== null && typeof _var1400.data.statusCode === "number") {
          _var1436 = _var1400.data.statusCode;
        }
        if (_var1436 === _var1398.status) {
          _var1436 = null;
        }
        return {
          status: _var1436,
          data: _var1400,
          overviewData: {}
        };
      }, async (_var1437, _var1438) => {
        const _var1439 = _var1437.data?.message || "";
        const _var1440 = _var1437?.status || null;
        const _var1441 = _var1437?.data?.status_code === 200 || _var1440 === 200;
        if (_var1439) {
          _var647(_var1439, null, _var1440);
          _var810(_var1439, "#10b981", null, _var1440);
          if (_var1441) {
            _var1207("success", _var1439);
          }
        }
        const _var1442 = _var1437.data?.message || "";
        _var128.captchaToken = null;
        if (_var353()) {
          _var1133("send-otp");
          const _var1443 = _var367();
          _var243("Auto enabled - overview success, waiting " + _var1443 + " seconds before sending OTP...");
          // TOLOOK
          setTimeout(() => {
            if (_var353()) {
              _var243("Auto-proceeding to OTP sending...");
              _var1444();
            }
          }, _var1443 * 1000);
        }
      }, "Overview submission", {
        retryOn422: false,
        msgEl: _var1388,
        show419ServerMessage: true
      });
    } finally {
      _var342 = false;
    }
  }
  async function _var1445() {
    _var243("Processing checkout...");
    const _var1446 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    if (_var1446 && _var1446.showStatus) {
      _var1446.showStatus("Processing checkout...", 200, "info");
    } else {
      _var1019("Processing checkout...", "#4285f4", 200);
    }
    try {
      const _var1447 = [];
      const _var1448 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "00d9c3bb308e4639bb7636178d5deb66a203a4a101",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var1449 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1448,
        body: JSON.stringify(_var1447),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application"
      });
      if (!_var1449.ok) {
        const _var1450 = new Error("HTTP error! status: " + _var1449.status);
        _var1450.status = _var1449.status;
        throw _var1450;
      }
      let _var1451;
      const _var1452 = _var1449.headers.get("content-type");
      const _var1453 = await _var1449.text();
      if (_var1452 && _var1452.includes("application/json")) {
        try {
          _var1451 = JSON.parse(_var1453);
        } catch {
          _var1451 = null;
        }
      }
      if (!_var1451 || !_var1451.message) {
        try {
          const _var1454 = _var1453.indexOf("{\"status\"");
          if (_var1454 !== -1) {
            let _var1455 = _var1453.substring(_var1454);
            let _var1456 = 0;
            let _var1457 = -1;
            for (let _var1458 = 0; _var1458 < _var1455.length; _var1458++) {
              if (_var1455[_var1458] === "{") {
                _var1456++;
              }
              if (_var1455[_var1458] === "}") {
                _var1456--;
                if (_var1456 === 0) {
                  _var1457 = _var1458 + 1;
                  break;
                }
              }
            }
            if (_var1457 !== -1) {
              _var1455 = _var1455.substring(0, _var1457);
              try {
                const _var1459 = JSON.parse(_var1455);
                if (_var1459.message) {
                  const _var1460 = _var1451?._parts;
                  _var1451 = _var1459;
                  if (_var1460) {
                    _var1451._parts = _var1460;
                  }
                }
              } catch (_var1461) {}
            }
          }
          if (!_var1451 || !_var1451.message) {
            const _var1462 = /"message"\s*:\s*"([^"]+)"/;
            const _var1463 = _var1453.match(_var1462);
            if (_var1463) {
              _var1451 = {
                message: _var1463[1],
                status: "success"
              };
            }
          }
        } catch (_var1464) {
          const _var1465 = /"message"\s*:\s*"([^"]+)"/;
          const _var1466 = _var1453.match(_var1465);
          if (_var1466) {
            const _var1467 = _var1453.indexOf("{\"message\"");
            const _var1468 = _var1453.indexOf("}", _var1467);
            const _var1469 = _var1453.substring(_var1467, _var1468 + 1);
            const _var1470 = /"status_code"\s*:\s*(\d+)/;
            const _var1471 = _var1469.match(_var1470);
            if (_var1471) {
              const _var1472 = parseInt(_var1471[1]);
              _var1451 = {
                message: _var1466[1],
                status: "success",
                status_code: _var1472
              };
            } else {
              _var1451 = {
                message: _var1466[1],
                status: "success"
              };
            }
          } else {
            _var1451 = {
              message: _var1453,
              status: "success"
            };
          }
        }
      }
      const _var1473 = {
        success: true,
        message: _var1451.message || "Request successful",
        data: _var1451,
        status: _var1449.status
      };
      if (_var1451?.status_code === 422 || _var1451?.data?.status_code === 422) {
        const _var1474 = {
          status: 422,
          message: _var1451?.message || _var1451?.data?.message || "Checkout failed",
          data: _var1451
        };
        _var243("[DoCheckout] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1474.message + ", data.status_code: " + (_var1474.data?.status_code || _var1474.data?.data?.status_code));
        throw _var1474;
      }
      if (_var1451?.status_code === 429 || _var1451?.data?.status_code === 429) {
        const _var1475 = {
          status: 429,
          message: _var1451?.message || _var1451?.data?.message || "Rate limited",
          data: _var1451
        };
        _var243("[DoCheckout] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1475.message + ", data.status_code: " + (_var1475.data?.status_code || _var1475.data?.data?.status_code));
        throw _var1475;
      }
      if (_var1451?.status_code === 401 || _var1451?.data?.status_code === 401) {
        const _var1476 = {
          status: 401,
          message: _var1451?.message || _var1451?.data?.message || "You are logged out. Please log in.",
          data: _var1451
        };
        _var243("[DoCheckout] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1476.message + ", data.status_code: " + (_var1476.data?.status_code || _var1476.data?.data?.status_code));
        throw _var1476;
      }
      if (_var1451?.status_code === 419 || _var1451?.data?.status_code === 419) {
        const _var1477 = {
          status: 419,
          message: _var1451?.message || _var1451?.data?.message || "Session expired",
          data: _var1451
        };
        _var243("[DoCheckout] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1477.message + ", data.status_code: " + (_var1477.data?.status_code || _var1477.data?.data?.status_code));
        throw _var1477;
      }
      const _var1478 = _var1473?.data?.status_code === 200;
      if (_var1478) {
        const _var1479 = _var1473.data?.message || "";
        if (_var1479) {
          _var647(_var1479);
          if (_var1446 && _var1446.showStatus) {
            _var1446.showStatus(_var1479, 200, "success");
          } else {
            _var1019(_var1479, "#10b981", 200);
          }
        }
      } else {
        _var648(_var1473?.data?.message || _var1473?.message || "Checkout failed");
        if (_var1446 && _var1446.showStatus) {
          _var1446.showStatus(_var1473?.data?.message || _var1473?.message || "Checkout failed", 422, "error");
        } else {
          _var1019(_var1473?.data?.message || _var1473?.message || "Checkout failed", "#ff4444", 422);
        }
      }
    } catch (_var1480) {
      _var648("Checkout failed: " + _var1480.message);
      const _var1481 = _var1480?.status || 500;
      const _var1482 = _var1480.message || "Checkout failed";
      if (_var1446 && _var1446.showStatus) {
        _var1446.showStatus(_var1482, _var1481, "error");
      } else {
        _var1019(_var1482, "#ff4444", _var1481);
      }
    }
  }
  async function _var1444(_var1483 = false) {
    if (_var343) {
      _var243("OTP sending already in progress, skipping duplicate call...");
      return;
    }
    _var343 = true;
    _var243(_var1483 ? "Resending payment OTP..." : "Sending payment OTP...");
    const _var1484 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    _var1019(_var1483 ? "Resending payment OTP..." : "Sending payment OTP...", "#3b82f6", 200);
    try {
      if (_var353()) {
        _var1133("send-otp");
      }
      return _var426(async _var1485 => {
        const _var1486 = [_var1483 ? 1 : 0];
        const _var1487 = {
          accept: "text/x-component",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "next-action": "4084f8fce332c825e78b3f11c85592c550d87beb49",
          "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
          priority: "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
          "sec-ch-ua-arch": "\"x86\"",
          "sec-ch-ua-bitness": "\"64\"",
          "sec-ch-ua-full-version": "\"143.0.7499.170\"",
          "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"10.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        };
        const _var1488 = new AbortController();
        if (_var1485) {
          _var1485.addEventListener("abort", () => _var1488.abort(), {
            once: true
          });
        }
        const _var1489 = await fetch("https://payment.ivacbd.com/application", {
          method: "POST",
          headers: _var1487,
          body: JSON.stringify(_var1486),
          mode: "cors",
          credentials: "include",
          referrer: "https://payment.ivacbd.com/application",
          signal: _var1488.signal
        });
        _var708(_var1489, "https://payment.ivacbd.com/application");
        if (!_var1489.ok) {
          const _var1490 = new Error("HTTP error! status: " + _var1489.status);
          _var1490.status = _var1489.status;
          throw _var1490;
        }
        let _var1491;
        const _var1492 = _var1489.headers.get("content-type");
        const _var1493 = await _var1489.text();
        if (_var1492 && _var1492.includes("application/json")) {
          try {
            _var1491 = JSON.parse(_var1493);
          } catch {
            _var1491 = null;
          }
        }
        if (!_var1491 || !_var1491.message) {
          try {
            const _var1494 = _var1493.indexOf("{\"status\"");
            if (_var1494 !== -1) {
              let _var1495 = _var1493.substring(_var1494);
              let _var1496 = 0;
              let _var1497 = -1;
              for (let _var1498 = 0; _var1498 < _var1495.length; _var1498++) {
                if (_var1495[_var1498] === "{") {
                  _var1496++;
                }
                if (_var1495[_var1498] === "}") {
                  _var1496--;
                  if (_var1496 === 0) {
                    _var1497 = _var1498 + 1;
                    break;
                  }
                }
              }
              if (_var1497 !== -1) {
                _var1495 = _var1495.substring(0, _var1497);
                try {
                  const _var1499 = JSON.parse(_var1495);
                  if (_var1499.message) {
                    _var1491 = _var1499;
                  }
                } catch (_var1500) {}
              }
            }
            if (!_var1491 || !_var1491.message) {
              const _var1501 = /"message"\s*:\s*"([^"]+)"/;
              const _var1502 = _var1493.match(_var1501);
              if (_var1502) {
                const _var1503 = _var1493.indexOf("{\"message\"");
                const _var1504 = _var1493.indexOf("}", _var1503);
                const _var1505 = _var1493.substring(_var1503, _var1504 + 1);
                const _var1506 = /"status_code"\s*:\s*(\d+)/;
                const _var1507 = _var1505.match(_var1506);
                if (_var1507) {
                  const _var1508 = parseInt(_var1507[1]);
                  _var1491 = {
                    message: _var1502[1],
                    status: "success",
                    status_code: _var1508
                  };
                } else {
                  _var1491 = {
                    message: _var1502[1],
                    status: "success"
                  };
                }
              }
            }
          } catch (_var1509) {
            const _var1510 = /"message"\s*:\s*"([^"]+)"/;
            const _var1511 = _var1493.match(_var1510);
            if (_var1511) {
              const _var1512 = _var1493.indexOf("{\"message\"");
              const _var1513 = _var1493.indexOf("}", _var1512);
              const _var1514 = _var1493.substring(_var1512, _var1513 + 1);
              const _var1515 = /"status_code"\s*:\s*(\d+)/;
              const _var1516 = _var1514.match(_var1515);
              if (_var1516) {
                const _var1517 = parseInt(_var1516[1]);
                _var1491 = {
                  message: _var1511[1],
                  status: "success",
                  status_code: _var1517
                };
              } else {
                _var1491 = {
                  message: _var1511[1],
                  status: "success"
                };
              }
            } else {
              const _var1518 = /"status_code"\s*:\s*(\d+)/;
              const _var1519 = _var1493.match(_var1518);
              if (_var1519) {
                const _var1520 = parseInt(_var1519[1]);
                _var1491 = {
                  message: _var1493,
                  status: "success",
                  status_code: _var1520
                };
              } else {
                _var1491 = {
                  message: _var1493,
                  status: "success"
                };
              }
            }
          }
        }
        if (_var1491?.status_code === 422 || _var1491?.data?.status_code === 422) {
          const _var1521 = {
            status: 422,
            message: _var1491?.message || _var1491?.data?.message || "Failed to send payment OTP",
            data: _var1491
          };
          _var243("[SendPayOtp] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1521.message + ", data.status_code: " + (_var1521.data?.status_code || _var1521.data?.data?.status_code));
          throw _var1521;
        }
        if (_var1491?.status_code === 429 || _var1491?.data?.status_code === 429) {
          const _var1522 = {
            status: 429,
            message: _var1491?.message || _var1491?.data?.message || "Rate limited",
            data: _var1491
          };
          _var243("[SendPayOtp] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1522.message + ", data.status_code: " + (_var1522.data?.status_code || _var1522.data?.data?.status_code));
          throw _var1522;
        }
        if (_var1491?.status_code === 401 || _var1491?.data?.status_code === 401) {
          const _var1523 = {
            status: 401,
            message: _var1491?.message || _var1491?.data?.message || "You are logged out. Please log in.",
            data: _var1491
          };
          _var243("[SendPayOtp] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1523.message + ", data.status_code: " + (_var1523.data?.status_code || _var1523.data?.data?.status_code));
          throw _var1523;
        }
        if (_var1491?.status_code === 419 || _var1491?.data?.status_code === 419) {
          const _var1524 = {
            status: 419,
            message: _var1491?.message || _var1491?.data?.message || "Session expired",
            data: _var1491
          };
          _var243("[SendPayOtp] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1524.message + ", data.status_code: " + (_var1524.data?.status_code || _var1524.data?.data?.status_code));
          throw _var1524;
        }
        const _var1525 = _var1491?.status_code === 200;
        if (!_var1525) {
          throw {
            status: _var1489?.status || 422,
            message: _var1491?.message || "Failed to send payment OTP",
            data: _var1491
          };
        }
        return {
          status: 200,
          data: _var1491,
          payload: {}
        };
      }, async (_var1526, _var1527) => {
        const _var1528 = _var1526.data?.message || _var1526.message || "Payment OTP sent successfully";
        if (_var1528) {
          _var647(_var1528);
          _var1019(_var1528, "#00C851", 200);
        }
        const _var1529 = _var1526.data?.data?.phone || _var1526.data?.data?.[0]?.phone || _var1526.data?.phone || "";
        const _var1530 = (_var128.personalInfo.phone || localStorage.getItem("auth_phone") || "").trim();
        const _var1531 = _var1529.trim() || _var1530 || "No phone number found";
        const _var1532 = _var1528 + " : " + _var1531;
        _var1207("success", _var1532);
        _var128.captchaToken = null;
        if (typeof window.startOtpCountdownTimer === "function") {
          window.startOtpCountdownTimer();
        }
        if (!_var1483) {
          const _var1533 = document.getElementById("ivac-step-toggle-control");
          const _var1534 = document.getElementById("ivac-step-controls-container");
          if (_var1533 && _var1534) {
            _var1534.style.display = "none";
            _var1533.textContent = "Show Steps";
            _var1533.setAttribute("aria-expanded", "false");
          }
        }
        if (_var388()) {
          const _var1535 = _var370();
          // TOLOOK
          setTimeout(() => {
            _var243("🔄 Auto-triggering Get OTP after " + _var1535 + " seconds...");
            _var1536();
          }, _var1535 * 1000);
        }
        if (_var353()) {
          _var1133("verify-otp");
          _var552(_var1527, () => {
            _var243("OTP sent successfully, checking for next steps...");
          });
        }
      }, _var1483 ? "Resend OTP" : "Send OTP", {
        msgEl: _var1484,
        show419ServerMessage: true,
        on419: () => {
          if (_var353()) {
            _var243("Session expired, restarting OTP sending...");
            _var1444(_var1483);
          }
        },
        custom401Msg: "You are logged out. Please log in.",
        custom422Msg: "Failed to send OTP. Please try again."
      });
    } finally {
      _var343 = false;
    }
  }
  async function _var1537() {
    const _var1538 = document.getElementById("ivac-pay-otp-input")?.value;
    if (!_var1538 || _var1538.trim() === "") {
      _var648("Please enter a valid OTP");
      _var1019("Please enter a valid OTP", "#ff4444", 422);
      return;
    }
    _var243("Verifying payment OTP...");
    const _var1539 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    _var1019("Verifying payment OTP...", "#3b82f6", 200);
    if (_var353()) {
      _var1133("verify-otp");
    }
    return _var426(async _var1540 => {
      const _var1541 = _var1538.trim();
      if (!_var1541 || _var1541 === "") {
        throw {
          status: 422,
          message: "Invalid OTP. Please enter a valid OTP."
        };
      }
      const _var1542 = [_var1541];
      const _var1543 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4093c7ca3a876dc43e9e29b6c286628704129de3f7",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var1544 = new AbortController();
      if (_var1540) {
        _var1540.addEventListener("abort", () => _var1544.abort(), {
          once: true
        });
      }
      const _var1545 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1543,
        body: JSON.stringify(_var1542),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application",
        signal: _var1544.signal
      });
      _var708(_var1545, "https://payment.ivacbd.com/application");
      if (!_var1545.ok) {
        const _var1546 = new Error("HTTP error! status: " + _var1545.status);
        _var1546.status = _var1545.status;
        throw _var1546;
      }
      let _var1547;
      const _var1548 = _var1545.headers.get("content-type");
      const _var1549 = await _var1545.text();
      const _var1550 = _var948(_var1549);
      let _var1551 = _var1550["1"] || _var1550["0"] || null;
      if (_var1551) {
        if (typeof _var1551 === "string") {
          try {
            _var1547 = JSON.parse(_var1551);
            _var243("[VerifyOTP] Successfully parsed part '1' as JSON (was string)");
          } catch (_var1552) {
            _var648("[VerifyOTP] Failed to parse part '1' as JSON: " + _var1552.message);
            _var1547 = null;
          }
        } else if (typeof _var1551 === "object" && _var1551 !== null) {
          _var1547 = _var1551;
          _var243("[VerifyOTP] Part '1' already parsed as object");
        } else {
          _var1547 = null;
        }
      } else {
        _var1547 = null;
      }
      if (!_var1547) {
        if (_var1548 && _var1548.includes("application/json")) {
          try {
            _var1547 = JSON.parse(_var1549);
          } catch {
            _var1547 = null;
          }
        }
        if (!_var1547 || !_var1547.message) {
          try {
            const _var1553 = _var1549.indexOf("{\"status\"");
            if (_var1553 !== -1) {
              let _var1554 = _var1549.substring(_var1553);
              let _var1555 = 0;
              let _var1556 = -1;
              for (let _var1557 = 0; _var1557 < _var1554.length; _var1557++) {
                if (_var1554[_var1557] === "{") {
                  _var1555++;
                }
                if (_var1554[_var1557] === "}") {
                  _var1555--;
                  if (_var1555 === 0) {
                    _var1556 = _var1557 + 1;
                    break;
                  }
                }
              }
              if (_var1556 !== -1) {
                _var1554 = _var1554.substring(0, _var1556);
                try {
                  const _var1558 = JSON.parse(_var1554);
                  if (_var1558.message || _var1558.status) {
                    _var1547 = _var1558;
                  }
                } catch (_var1559) {}
              }
            }
            if (!_var1547 || !_var1547.message) {
              const _var1560 = /"message"\s*:\s*"([^"]+)"/;
              const _var1561 = _var1549.match(_var1560);
              if (_var1561) {
                _var1547 = {
                  message: _var1561[1],
                  status: "success"
                };
              }
            }
          } catch (_var1562) {
            const _var1563 = /"message"\s*:\s*"([^"]+)"/;
            const _var1564 = _var1549.match(_var1563);
            if (_var1564) {
              _var1547 = {
                message: _var1564[1],
                status: "success"
              };
            } else {
              _var1547 = {
                message: _var1549,
                status: "success"
              };
            }
          }
        }
      }
      if (_var1547 && Object.keys(_var1550).length > 0) {
        const _var1565 = {};
        Object.keys(_var1550).forEach(_var1566 => {
          if (_var1550[_var1566] && typeof _var1550[_var1566] === "object") {
            try {
              _var1565[_var1566] = JSON.parse(JSON.stringify(_var1550[_var1566]));
            } catch (_var1567) {
              if (_var1550[_var1566].data) {
                _var1565[_var1566] = {
                  data: _var1550[_var1566].data
                };
              }
            }
          } else {
            _var1565[_var1566] = _var1550[_var1566];
          }
        });
        _var1547._parts = _var1565;
        if (_var1550["1"]) {
          let _var1568 = null;
          if (typeof _var1550["1"] === "object" && _var1550["1"] !== null) {
            _var1568 = _var1550["1"];
          } else if (typeof _var1550["1"] === "string") {
            try {
              _var1568 = JSON.parse(_var1550["1"]);
            } catch (_var1569) {}
          }
          if (_var1568) {
            if (!_var1547.data && _var1568.data) {
              _var1547.data = _var1568.data;
            }
            if (_var1568.status === "success" && _var1568.data) {
              _var1547.data = _var1568.data;
              _var1547.status = _var1568.status;
              _var1547.status_code = _var1568.status_code;
              _var1547.message = _var1568.message;
            }
          }
        }
      }
      if (_var1547) {
        _var1547._rawText = _var1549;
      }
      if (_var1547?.status_code === 422 || _var1547?.data?.status_code === 422) {
        const _var1570 = {
          status: 422,
          message: _var1547?.message || _var1547?.data?.message || "OTP does not match. Please try again",
          data: _var1547
        };
        _var243("[VerifyOTP] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1570.message + ", data.status_code: " + (_var1570.data?.status_code || _var1570.data?.data?.status_code));
        throw _var1570;
      }
      const _var1571 = _var1547?.status === "success" || _var1547?.status_code === 200 || _var1547?.success === true || _var1545?.status === 200;
      if (!_var1571) {
        const _var1572 = _var1547?.status_code || _var1547?.data?.status_code || _var1547?.statusCode || _var1547?.data?.statusCode || null;
        throw {
          status: _var1572,
          message: _var1547?.message || _var1547?.error_reason || "Payment OTP verification failed",
          data: _var1547
        };
      }
      const _var1573 = _var1547?.status_code || _var1547?.data?.status_code || _var1547?.statusCode || _var1547?.data?.statusCode || null;
      return {
        status: _var1573,
        httpStatus: _var1545.status,
        data: _var1547,
        payload: {
          otp: _var1541
        }
      };
    }, async (_var1574, _var1575) => {
      const _var1576 = _var1574.data?.message || "";
      const _var1577 = _var1574?.data?.status_code === 200 || _var1574?.status === 200;
      if (_var1576) {
        _var647(_var1576);
        _var1019(_var1576, "#00C851", 200);
        if (_var1577) {
          _var1207("success", _var1576);
        }
      }
      if (typeof _var1578 === "function") {
        _var1578(1);
      }
      let _var1579 = null;
      if (_var1574.data?._parts) {
        _var243("[VerifyOTP] result.data._parts keys: " + Object.keys(_var1574.data._parts || {}).join(", "));
        if (_var1574.data._parts["1"]) {
          const _var1580 = _var1574.data._parts["1"];
          if (typeof _var1580 === "object" && _var1580 !== null) {
            _var243("[VerifyOTP] result.data._parts['1'] type: object, keys: " + Object.keys(_var1580 || {}).join(", "));
            if (_var1580.data) {
              _var243("[VerifyOTP] result.data._parts['1'].data keys: " + Object.keys(_var1580.data || {}).join(", "));
              if (_var1580.data.slot_dates) {
                _var243("[VerifyOTP] result.data._parts['1'].data.slot_dates: " + JSON.stringify(_var1580.data.slot_dates));
              }
            }
          } else if (typeof _var1580 === "string") {
            _var243("[VerifyOTP] result.data._parts['1'] is string, length: " + _var1580.length);
          }
        }
      }
      if (_var1574.data?._parts?.["1"]) {
        const _var1581 = _var1574.data._parts["1"];
        let _var1582 = null;
        if (typeof _var1581 === "object" && _var1581 !== null) {
          _var1582 = _var1581;
        } else if (typeof _var1581 === "string") {
          try {
            _var1582 = JSON.parse(_var1581);
          } catch (_var1583) {
            _var648("[VerifyOTP] Failed to parse _parts['1'] string: " + _var1583.message);
          }
        }
        if (_var1582?.data?.slot_dates && Array.isArray(_var1582.data.slot_dates)) {
          _var1579 = _var1582.data.slot_dates;
          _var243("[VerifyOTP] ✓✓✓ FOUND slot_dates in _parts['1'].data.slot_dates: " + JSON.stringify(_var1579));
        }
      }
      if (!_var1579 && _var1574.data?.data?.slot_dates && Array.isArray(_var1574.data.data.slot_dates)) {
        _var1579 = _var1574.data.data.slot_dates;
        _var243("[VerifyOTP] ✓ Found slot_dates in result.data.data.slot_dates: " + JSON.stringify(_var1579));
      } else if (_var1574.data?.slot_dates && Array.isArray(_var1574.data.slot_dates)) {
        _var1579 = _var1574.data.slot_dates;
        _var243("[VerifyOTP] ✓ Found slot_dates in result.data.slot_dates: " + JSON.stringify(_var1579));
      } else if (_var1574.data?.status === "success" && _var1574.data?.data?.slot_dates && Array.isArray(_var1574.data.data.slot_dates)) {
        _var1579 = _var1574.data.data.slot_dates;
        _var243("[VerifyOTP] ✓ Found slot_dates in result.data.data.slot_dates (after status check): " + JSON.stringify(_var1579));
      } else if (_var1574?.data?.slot_dates && Array.isArray(_var1574.data.slot_dates)) {
        _var1579 = _var1574.data.slot_dates;
        _var243("[VerifyOTP] ✓ Found slot_dates in result.data.slot_dates (fallback): " + JSON.stringify(_var1579));
      } else if (_var1574.data?._rawText) {
        try {
          const _var1584 = _var1574.data._rawText.match(/"slot_dates"\s*:\s*\["([^"]+)"/);
          if (_var1584 && _var1584[1]) {
            _var1579 = [_var1584[1]];
            _var243("[VerifyOTP] ✓ Found slot_dates in raw text via regex: " + JSON.stringify(_var1579));
          } else {
            const _var1585 = _var1574.data._rawText.match(/"slot_dates"\s*:\s*\[([^\]]+)\]/);
            if (_var1585 && _var1585[1]) {
              const _var1586 = _var1585[1].split(",").map(_var1587 => _var1587.trim().replace(/"/g, "")).filter(_var1588 => _var1588);
              if (_var1586.length > 0) {
                _var1579 = _var1586;
                _var243("[VerifyOTP] ✓ Found slot_dates array in raw text via regex: " + JSON.stringify(_var1579));
              }
            }
          }
        } catch (_var1589) {
          _var648("[VerifyOTP] Error extracting from raw text: " + _var1589.message);
        }
      }
      if (!_var1579 || _var1579.length === 0) {
        _var648("[VerifyOTP] ✗ No slot_dates found in response. Available keys in result.data: " + Object.keys(_var1574.data || {}).join(", "));
        if (_var1574.data?.data) {
          _var648("[VerifyOTP] Available keys in result.data.data: " + Object.keys(_var1574.data.data || {}).join(", "));
        }
      }
      if (_var1579 && _var1579.length > 0) {
        const _var1590 = _var1579[0];
        _var243("[VerifyOTP] Extracted first date: " + _var1590);
        _var721 = _var1590;
        let _var1591 = document.getElementById("ivac-date-input");
        if (!_var1591) {
          _var1591 = document.querySelector("input[type=\"date\"][id*=\"date\"]");
        }
        if (!_var1591) {
          _var1591 = document.querySelector("input[name*=\"date\"]");
        }
        if (_var1591) {
          _var1591.value = _var1590;
          try {
            const _var1592 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            _var1592.call(_var1591, _var1590);
          } catch (_var1593) {}
          _var1591.setAttribute("value", _var1590);
          if (_var1591.setProperty) {
            _var1591.setProperty("value", _var1590);
          }
          const _var1594 = new Event("change", {
            bubbles: true,
            cancelable: true
          });
          _var1591.dispatchEvent(_var1594);
          const _var1595 = new Event("input", {
            bubbles: true,
            cancelable: true
          });
          _var1591.dispatchEvent(_var1595);
          _var1591.focus();
          _var1591.blur();
          _var647("📅 Auto-selected date on calendar: " + _var1590);
          _var1019("📅 Date auto-selected: " + _var1590, "#00C851", 200);
          let _var1596 = 0;
          const _var1597 = 5;
          const _var1598 = // TOLOOK
          setInterval(() => {
            _var1596++;
            const _var1599 = _var1591.value;
            if (_var1599 === _var1590) {
              _var243("[VerifyOTP] ✓ Date input value confirmed: " + _var1599);
              clearInterval(_var1598);
            } else if (_var1596 >= _var1597) {
              _var648("[VerifyOTP] ✗ Date input value mismatch after " + _var1597 + " attempts! Expected: \"" + _var1590 + "\", Got: \"" + _var1599 + "\"");
              _var648("[VerifyOTP] ✗ Date input value mismatch! Expected: " + _var1590 + ", Got: " + _var1599);
              _var1591.value = _var1590;
              _var1591.setAttribute("value", _var1590);
              try {
                const _var1600 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                _var1600.call(_var1591, _var1590);
              } catch (_var1601) {}
              _var1591.dispatchEvent(new Event("change", {
                bubbles: true
              }));
              _var1591.dispatchEvent(new Event("input", {
                bubbles: true
              }));
              clearInterval(_var1598);
            } else {
              _var1591.value = _var1590;
              _var1591.dispatchEvent(new Event("change", {
                bubbles: true
              }));
            }
          }, 200);
        } else {
          _var721 = _var1590;
          _var647("📅 Date from response: " + _var1590 + " (ready for next step)");
          _var1019("📅 Date available: " + _var1590, "#00C851", 200);
        }
      } else {
        _var648("[VerifyOTP] ✗ No slot_dates found or slot_dates array is empty");
      }
      _var128.captchaToken = null;
      if ((_var353() || _var348()) && _var1574.status === 200) {
        _var243("Auto enabled and verify payment OTP status 200 - waiting 1 second before fetching PayNow token...");
        // TOLOOK
        setTimeout(async () => {
          if (_var353() || _var348()) {
            try {
              _var243("🔐 Fetching PayNow token (request 1) for X-data storage...");
              const _var1602 = await _var1343(null, false);
              if (_var1602) {
                _var647("✅ PayNow token fetched and stored in cache for X-data (length: " + _var1602.length + ")");
              } else {
                _var648("❌ Failed to fetch PayNow token - token is null");
              }
            } catch (_var1603) {
              _var648("❌ Failed to fetch PayNow token: " + _var1603.message);
            }
          }
        }, 1000);
      }
      if ((_var353() || _var348()) && _var1574.status === 200) {
        if (_var353()) {
          _var1133("get-slots");
        }
        const _var1604 = _var373();
        _var243("Auto enabled and verify payment OTP status 200 - waiting " + _var1604 + " seconds before getting slots...");
        // TOLOOK
        setTimeout(() => {
          if (_var353() || _var348()) {
            _var243("Proceeding to Get Slots...");
            _var1605();
          }
        }, _var1604 * 1000);
      }
    }, "Verify Payment OTP", {
      msgEl: _var1539,
      show419ServerMessage: true,
      on419: () => {
        if (_var353()) {
          _var243("Session expired, restarting OTP verification...");
          _var1537();
        }
      },
      custom401Msg: "You are logged out. Please log in.",
      custom422Handler: (_var1606, _var1607, _var1608, _var1609) => {
        if (_var353() || _var348()) {
          if (_var1609) {
            const _var1610 = _var1609.querySelector ? _var1609 : document.querySelector(".ivac-status-panel");
            if (_var1610 && _var1610.showStatus) {
              _var1610.showStatus(_var1606.message || "OTP does not match. Please try again.", 422, "error");
            } else {
              _var425(_var1606.message || "OTP does not match. Please try again.", "#ff4444");
            }
          }
          return false;
        }
        return undefined;
      },
      custom5xxHandler: (_var1611, _var1612, _var1613, _var1614) => {
        const _var1615 = _var1611?.status || 500;
        if (_var348() && _var1612 < _var1613) {
          const _var1616 = 20000;
          if (_var1614) {
            _var425("Verify Payment OTP failed. Retrying in " + (_var1616 / 1000).toFixed(1) + "s... (" + (_var1612 + 1) + "/" + _var1613 + ")", "#f59e0b");
          }
          return {
            retry: true,
            delay: _var1616
          };
        }
        return false;
      }
    });
  }
  async function _var1617(_var1618 = 10, _var1619 = 500) {
    for (let _var1620 = 0; _var1620 < _var1618; _var1620++) {
      const _var1621 = _var128?.personalInfo?.phone?.trim() || document.getElementById("phone-input")?.value?.trim() || document.getElementById("phone")?.value?.trim();
      if (_var1621) {
        return _var1621;
      }
      await new Promise(_var1622 => // TOLOOK
      setTimeout(_var1622, _var1619));
    }
    return null;
  }
  async function _var1623(_var1624, _var1625 = {}) {
    try {
      const _var1626 = await fetch(_var1624, _var1625);
      return _var1626;
    } catch (_var1627) {
      throw new Error("Fetch failed: " + _var1627.message);
    }
  }
  function _var1628(_var1629, _var1630 = "info") {
    switch (_var1630) {
      case "error":
        _var648(_var1629);
        break;
      case "warning":
        _var1019(_var1629, "#f59e0b");
        break;
      case "success":
        _var647(_var1629);
        break;
      case "info":
      default:
        _var243(_var1629);
        break;
    }
  }
  async function _var1536() {
    try {
      let _var1631 = _var128?.personalInfo?.phone?.trim() || document.getElementById("phone-input")?.value?.trim() || document.getElementById("phone")?.value?.trim();
      if (!_var1631) {
        _var1628("⏳ Waiting for phone field from profile manager...", "warning");
        _var1631 = await _var1617();
      }
      if (!_var1631) {
        _var1628("❌ Phone number not ready! Please select a profile in Profile Manager.", "error");
        return null;
      }
      const _var1632 = "https://sms-user.vercel.app/api/sms/" + _var1631;
      const _var1633 = await _var1623(_var1632, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });
      if (!_var1633.ok) {
        throw new Error("Server returned " + _var1633.status);
      }
      const _var1634 = await _var1633.json();
      if (!_var1634?.messages?.length) {
        _var1628("⚠ No SMS messages found!", "warning");
        return null;
      }
      const _var1635 = _var1634.messages.sort((_var1636, _var1637) => new Date(_var1637.time) - new Date(_var1636.time))[0].message;
      _var1628("🆕 Latest SMS: \"" + _var1635 + "\"", "info");
      const _var1638 = _var1635.match(/reference,\s*([A-Za-z0-9]+)/);
      if (!_var1638) {
        _var1628("❌ Could not extract OTP!", "error");
        return null;
      }
      const _var1639 = _var1638[1];
      _var1628("🔍 Extracted OTP: " + _var1639, "success");
      const _var1640 = document.getElementById("otp-pay") || document.getElementById("ivac-pay-otp-input");
      if (_var1640) {
        _var1640.value = _var1639;
        _var1640.focus();
        _var1640.style.border = "2px solid #10b981";
        // TOLOOK
        setTimeout(() => _var1640.style.border = "", 2000);
        _var1628("✅ OTP filled successfully!", "success");
        const _var1641 = _var353() || _var348();
        if (_var1641) {
          // TOLOOK
          setTimeout(() => {
            _var1628("🚀 Auto-triggering Verify OTP...", "info");
            _var1537();
          }, 500);
        } else {
          _var1628("⏸️ Auto is OFF - OTP filled, please verify manually", "info");
        }
      } else {
        _var1628("⚠ OTP input field not found!", "warning");
      }
      return _var1639;
    } catch (_var1642) {
      _var1628("❌ OTP Fetch Failed: " + _var1642.message, "error");
      return null;
    }
  }
  window.fetchLatestOTP = _var1536;
  async function _var1605() {
    _var721 = document.getElementById("ivac-date-input").value;
    if (!_var721) {
      _var648("Please select a date first");
      _var1019("Please select a date first", "#ff4444", 422);
      return;
    }
    _var243("Fetching slots for " + _var721 + "...");
    const _var1643 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    _var1019("Fetching slots for " + _var721 + "...", "#3b82f6", 200);
    if (_var353()) {
      _var1133("get-slots");
    }
    return _var426(async _var1644 => {
      const _var1645 = _var721.trim();
      if (!_var1645 || _var1645 === "") {
        throw {
          status: 422,
          message: "Please select a date first"
        };
      }
      const _var1646 = [_var1645];
      const _var1647 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "4001422df1a31a6c69d933cb85e7692fa089779841",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var1648 = new AbortController();
      if (_var1644) {
        _var1644.addEventListener("abort", () => _var1648.abort(), {
          once: true
        });
      }
      const _var1649 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1647,
        body: JSON.stringify(_var1646),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application",
        signal: _var1648.signal
      });
      _var708(_var1649, "https://payment.ivacbd.com/application");
      if (!_var1649.ok) {
        const _var1650 = new Error("HTTP error! status: " + _var1649.status);
        _var1650.status = _var1649.status;
        throw _var1650;
      }
      let _var1651;
      const _var1652 = _var1649.headers.get("content-type");
      const _var1653 = await _var1649.text();
      const _var1654 = _var948(_var1653);
      let _var1655 = _var1654["1"] || _var1654["0"] || null;
      if (_var1655) {
        if (typeof _var1655 === "string") {
          try {
            _var1651 = JSON.parse(_var1655);
            _var243("[GetSlots] Successfully parsed part '1' as JSON (was string)");
          } catch (_var1656) {
            _var648("[GetSlots] Failed to parse part '1' as JSON: " + _var1656.message);
            _var1651 = null;
          }
        } else if (typeof _var1655 === "object" && _var1655 !== null) {
          _var1651 = _var1655;
          _var243("[GetSlots] Part '1' already parsed as object");
        } else {
          _var1651 = null;
        }
      } else {
        _var1651 = null;
      }
      if (!_var1651) {
        if (_var1652 && _var1652.includes("application/json")) {
          try {
            _var1651 = JSON.parse(_var1653);
          } catch {
            _var1651 = null;
          }
        }
      }
      if (!_var1651 || !_var1651.message) {
        try {
          const _var1657 = _var1653.indexOf("{\"status\"");
          if (_var1657 !== -1) {
            let _var1658 = _var1653.substring(_var1657);
            let _var1659 = 0;
            let _var1660 = -1;
            for (let _var1661 = 0; _var1661 < _var1658.length; _var1661++) {
              if (_var1658[_var1661] === "{") {
                _var1659++;
              }
              if (_var1658[_var1661] === "}") {
                _var1659--;
                if (_var1659 === 0) {
                  _var1660 = _var1661 + 1;
                  break;
                }
              }
            }
            if (_var1660 !== -1) {
              _var1658 = _var1658.substring(0, _var1660);
              try {
                const _var1662 = JSON.parse(_var1658);
                if (_var1662.message) {
                  _var1651 = _var1662;
                }
              } catch (_var1663) {}
            }
          }
          if (!_var1651 || !_var1651.message) {
            const _var1664 = /"message"\s*:\s*"([^"]+)"/;
            const _var1665 = _var1653.match(_var1664);
            if (_var1665) {
              const _var1666 = _var1653.indexOf("{\"message\"");
              const _var1667 = _var1653.indexOf("}", _var1666);
              const _var1668 = _var1653.substring(_var1666, _var1667 + 1);
              const _var1669 = /"status_code"\s*:\s*(\d+)/;
              const _var1670 = _var1668.match(_var1669);
              if (_var1670) {
                const _var1671 = parseInt(_var1670[1]);
                _var1651 = {
                  message: _var1665[1],
                  status: "success",
                  status_code: _var1671
                };
              } else {
                _var1651 = {
                  message: _var1665[1],
                  status: "success"
                };
              }
            }
          }
        } catch (_var1672) {
          const _var1673 = /"message"\s*:\s*"([^"]+)"/;
          const _var1674 = _var1653.match(_var1673);
          if (_var1674) {
            const _var1675 = _var1653.indexOf("{\"message\"");
            const _var1676 = _var1653.indexOf("}", _var1675);
            const _var1677 = _var1653.substring(_var1675, _var1676 + 1);
            const _var1678 = /"status_code"\s*:\s*(\d+)/;
            const _var1679 = _var1677.match(_var1678);
            if (_var1679) {
              const _var1680 = parseInt(_var1679[1]);
              _var1651 = {
                message: _var1674[1],
                status: "success",
                status_code: _var1680
              };
            } else {
              _var1651 = {
                message: _var1674[1],
                status: "success"
              };
            }
          } else {
            const _var1681 = /"status_code"\s*:\s*(\d+)/;
            const _var1682 = _var1653.match(_var1681);
            if (_var1682) {
              const _var1683 = parseInt(_var1682[1]);
              _var1651 = {
                message: _var1653,
                status: "success",
                status_code: _var1683
              };
            } else {
              _var1651 = {
                message: _var1653,
                status: "success"
              };
            }
          }
        }
      }
      if (_var1651 && Object.keys(_var1654).length > 0) {
        _var1651._parts = _var1654;
        _var243("[GetSlots] Stored " + Object.keys(_var1654).length + " parts in responseData._parts: " + Object.keys(_var1654).join(", "));
      }
      if (_var1651?.status_code === 422 || _var1651?.data?.status_code === 422) {
        const _var1684 = {
          status: 422,
          message: _var1651?.message || _var1651?.data?.message || "Failed to load slots",
          data: _var1651
        };
        _var243("[GetSlots] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1684.message + ", data.status_code: " + (_var1684.data?.status_code || _var1684.data?.data?.status_code));
        throw _var1684;
      }
      if (_var1651?.status_code === 429 || _var1651?.data?.status_code === 429) {
        const _var1685 = {
          status: 429,
          message: _var1651?.message || _var1651?.data?.message || "Rate limited",
          data: _var1651
        };
        _var243("[GetSlots] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1685.message + ", data.status_code: " + (_var1685.data?.status_code || _var1685.data?.data?.status_code));
        throw _var1685;
      }
      if (_var1651?.status_code === 401 || _var1651?.data?.status_code === 401) {
        const _var1686 = {
          status: 401,
          message: _var1651?.message || _var1651?.data?.message || "You are logged out. Please log in.",
          data: _var1651
        };
        _var243("[GetSlots] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1686.message + ", data.status_code: " + (_var1686.data?.status_code || _var1686.data?.data?.status_code));
        throw _var1686;
      }
      if (_var1651?.status_code === 419 || _var1651?.data?.status_code === 419) {
        const _var1687 = {
          status: 419,
          message: _var1651?.message || _var1651?.data?.message || "Session expired",
          data: _var1651
        };
        _var243("[GetSlots] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1687.message + ", data.status_code: " + (_var1687.data?.status_code || _var1687.data?.data?.status_code));
        throw _var1687;
      }
      let _var1688 = false;
      if (_var1651 && typeof _var1651.status_code !== "undefined") {
        _var1688 = _var1651.status_code === 200;
      } else {
        _var1688 = _var1651?.status === "success" || _var1651?.success === true;
      }
      if (!_var1688) {
        throw {
          status: _var1649?.status || 422,
          message: _var1651?.message || "Failed to load slots",
          data: _var1651
        };
      }
      return {
        status: 200,
        data: _var1651,
        payload: {
          date: _var1645
        }
      };
    }, async (_var1689, _var1690) => {
      const _var1691 = _var1689.data?.message || "";
      const _var1692 = _var1689?.data?.status_code === 200 || _var1689?.status === 200;
      if (_var1691) {
        _var647(_var1691);
        _var1019(_var1691, "#00C851", 200);
        if (_var1692) {
          _var1207("success", _var1691);
        }
      }
      if (_var1689.data?.data?.slot_times && _var1689.data.data.slot_times.length > 0) {
        const _var1693 = _var1689.data.data.slot_times[0];
        _var722 = _var1693.time_display;
        const _var1694 = _var1693.time_display + " (" + _var1693.availableSlot + " slots available)";
        _var647("⏰ Auto-selected time: " + _var1694);
        _var1019("⏰ Time auto-selected: " + _var1694, "#00C851", 200);
        const _var1695 = document.getElementById("ivac-time-status");
        if (_var1695) {
          _var1695.textContent = _var1694;
          _var1695.style.color = "#00C851";
          _var1695.style.background = "#e8f5e8";
          _var1695.style.borderColor = "#00C851";
        }
      }
      _var128.captchaToken = null;
      let _var1696 = null;
      if (_var1689?.data?.data?.captcha) {
        _var1696 = _var1689.data.data.captcha;
        _var243("[GetSlots] ✓ Found captcha in result.data.data.captcha");
      } else if (_var1689?.data?.captcha) {
        _var1696 = _var1689.data.captcha;
        _var243("[GetSlots] ✓ Found captcha in result.data.captcha");
      } else if (_var1689?.data?.data?.image_captcha) {
        _var1696 = _var1689.data.data.image_captcha;
        _var243("[GetSlots] ✓ Found captcha in result.data.data.image_captcha");
      } else if (_var1689?.data?.image_captcha) {
        _var1696 = _var1689.data.image_captcha;
        _var243("[GetSlots] ✓ Found captcha in result.data.image_captcha");
      } else {
        _var648("[GetSlots] ✗ No captcha found in response structure");
      }
      if (_var1696?.captcha_id) {
        _var749 = _var1696.captcha_id;
        _var243("[GetSlots] Image captcha found in response: captcha_id=" + _var749);
        if (_var353()) {
          _var1133("reload");
        }
        let _var1697 = _var1696.captcha_image || _var1696.captcha_image_url || _var1696.image_url || _var1696.url || _var1696.image || "";
        _var243("[GetSlots] Raw image reference: " + (_var1697 ? _var1697.startsWith("$") ? _var1697 : "direct URL/data" : "empty"));
        if (_var1697 && _var1697.startsWith("$")) {
          const _var1698 = _var1689.data?._parts || {};
          const _var1699 = _var1697.substring(1);
          _var243("[GetSlots] Looking for image in part '" + _var1699 + "', available parts: " + Object.keys(_var1698).join(", "));
          const _var1700 = _var1698[_var1699];
          if (_var1700) {
            let _var1701 = String(_var1700).trim();
            if (/^\d+:/.test(_var1701)) {
              const _var1702 = _var1701.indexOf(":");
              _var1701 = _var1701.substring(_var1702 + 1).trim();
            }
            if (_var1701.startsWith("data:image/")) {
              _var1697 = _var1701;
              _var243("✓ Using part " + _var1699 + " as-is (already complete data URL)");
            } else if (_var1701.startsWith("data:")) {
              _var1697 = _var1701;
              _var243("✓ Using part " + _var1699 + " as-is (data URL format)");
            } else {
              const _var1703 = _var1701.indexOf(",");
              if (_var1703 !== -1) {
                const _var1704 = _var1701.substring(_var1703 + 1).trim();
                if (_var1704.startsWith("data:image/") || _var1704.startsWith("data:")) {
                  _var1697 = _var1704;
                  _var243("✓ Extracted data URL from part " + _var1699 + " (removed prefix before comma)");
                } else {
                  _var1697 = "data:image/png;base64," + _var1704;
                  _var243("✓ Extracted base64 from part " + _var1699 + " (added data URL prefix)");
                }
              } else {
                _var1697 = "data:image/png;base64," + _var1701;
                _var243("✓ Using part " + _var1699 + " as base64 (no comma found, added prefix)");
              }
            }
            if (_var1697 && !_var1697.startsWith("data:image/") && !_var1697.startsWith("data:")) {
              _var648("⚠ Extracted image doesn't start with 'data:' - this may be incorrect");
            }
          } else {
            _var648("Image part " + _var1699 + " not found in response parts. Available parts: " + Object.keys(_var1698).join(", "));
          }
        }
        if ((!_var1697 || _var1697.trim() === "") && _var1696.captcha_id) {
          _var1697 = "https://payment.ivacbd.com/api/v2/captcha/image/" + _var1696.captcha_id;
        }
        if (_var1697) {
          _var1697 = _var1697.replace(/^\d+:/, "");
          const _var1705 = _var1697.indexOf("data:");
          if (_var1705 > 0) {
            _var1697 = _var1697.substring(_var1705);
            _var243("✓ Removed prefix before 'data:' in final validation");
          }
          _var1697 = _var1697.trim();
          if (!_var1697.startsWith("data:")) {
            _var648("⚠ Final rawImage doesn't start with 'data:' - value: " + _var1697.substring(0, 50) + "...");
          }
        }
        _var750 = _var1706(_var1697);
        if (!_var750) {
          _var243("Image captcha missing in slot response, generating manually...");
          try {
            await _var1707();
          } catch (_var1708) {
            _var648("Failed to auto-generate image captcha. Please use the Reload button.");
          }
        } else {
          if (_var750.includes("\n") || /^\d+:/.test(_var750)) {
            _var648("Image URL contains invalid characters (line numbers or newlines), cleaning...");
            _var750 = _var750.replace(/^\d+:/, "").replace(/\n/g, "").trim();
            _var750 = _var1706(_var750);
          }
          _var751 = false;
          _var1709();
          const {
            container: _var1710,
            img: _var1711,
            input: _var1712,
            result: _var1713
          } = _var1714();
          if (_var1710) {
            _var1710.style.display = "flex";
            _var243("Image captcha container displayed");
          }
          if (_var1712) {
            _var1712.value = "";
          }
          if (_var1713) {
            _var1713.style.display = "none";
            _var1713.textContent = "";
          }
          if (_var1711) {
            _var1711.style.display = "none";
            _var1711.onerror = () => {
              _var1711.style.display = "none";
              _var648("Failed to load image captcha from slot response");
            };
            _var1711.onload = async () => {
              _var1711.style.display = "block";
              _var243("Image captcha loaded successfully");
              if (_var353() || _var348()) {
                try {
                  _var243("🤖 Auto enabled - solving image captcha immediately via TrueCaptcha...");
                  await _var1715();
                } catch (_var1716) {}
              }
            };
            if (_var750) {
              _var1711.src = _var750;
            }
          } else {
            _var648("Image captcha img element not found");
          }
          _var243("Image captcha prepared from slot response");
        }
      } else {
        _var243("No image captcha in slot response, auto-generating...");
        try {
          await _var1707();
        } catch (_var1717) {
          _var648("Failed to auto-generate image captcha. Please use the Reload button.");
        }
      }
    }, "Get Slots", {
      msgEl: _var1643,
      show419ServerMessage: true,
      on419: () => {
        if (_var353()) {
          _var243("Session expired, restarting slot fetching...");
          _var1605();
        }
      },
      custom401Msg: "You are logged out. Please log in.",
      custom422Msg: "Failed to load slots. Please try again."
    });
  }
  async function _var1718() {
    _var243("Generating captcha...");
    const _var1719 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    try {
      const _var1720 = await _var872(_var702.captchaGenerate, "GET", null, true);
      if (_var1720?.data?.status === "success" || _var1720?.data?.success) {
        _var723 = _var1720.data?.data?.captcha_token || null;
        _var724 = _var1720.data?.data?.captcha_id || null;
        _var726 = _var1720.data?.data?.captcha_image || null;
        _var727 = false;
        _var728 = null;
        if (_var726) {
          const _var1721 = document.getElementById("ivac-captcha-image");
          if (_var1721) {
            _var1721.src = _var726;
            _var1721.style.display = "block";
          }
          _var647("Captcha generated successfully");
        } else {
          _var648("Failed to get captcha image from response");
        }
      } else {
        _var648(_var1720?.data?.message || _var1720?.message || "Failed to generate captcha");
        if (_var1719 && _var1719.showStatus) {
          _var1719.showStatus(_var1720?.data?.message || _var1720?.message || "Failed to generate captcha", 422, "error");
        } else {
          _var1019(_var1720?.data?.message || _var1720?.message || "Failed to generate captcha", "#ff4444", 422);
        }
      }
    } catch (_var1722) {
      _var648("Failed to generate captcha: " + _var1722.message);
      const _var1723 = _var1722?.status || 500;
      const _var1724 = _var1722.message || "Failed to generate captcha";
      if (_var1719 && _var1719.showStatus) {
        _var1719.showStatus(_var1724, _var1723, "error");
      } else {
        _var1019(_var1724, "#ff4444", _var1723);
      }
    }
  }
  async function _var1725() {
    const _var1726 = document.getElementById("ivac-captcha-input").value;
    if (!_var1726) {
      _var648("Please enter the captcha text");
      return;
    }
    if (!_var724) {
      _var648("No captcha ID available. Please generate captcha first.");
      return;
    }
    _var243("Verifying captcha with IVAC...");
    const _var1727 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    try {
      const _var1728 = await _var872(_var702.captchaVerify, "POST", {
        captcha_input: _var1726,
        captcha_id: _var724
      }, true);
      if (_var1728?.data?.status === "success" || _var1728?.data?.success) {
        _var725 = _var1726;
        _var727 = true;
        _var728 = _var724;
        _var647("Captcha verified successfully");
      } else {
        _var727 = false;
        _var728 = null;
        _var648(_var1728?.data?.message || _var1728?.message || "Captcha verification failed");
        if (_var1727 && _var1727.showStatus) {
          _var1727.showStatus(_var1728?.data?.message || _var1728?.message || "Captcha verification failed", 422, "error");
        } else {
          _var1019(_var1728?.data?.message || _var1728?.message || "Captcha verification failed", "#ff4444", 422);
        }
      }
    } catch (_var1729) {
      _var648("Captcha verification failed: " + _var1729.message);
      const _var1730 = _var1729?.status || 500;
      const _var1731 = _var1729.message || "Captcha verification failed";
      if (_var1727 && _var1727.showStatus) {
        _var1727.showStatus(_var1731, _var1730, "error");
      } else {
        _var1019(_var1731, "#ff4444", _var1730);
      }
    }
  }
  function _var1714() {
    return {
      container: document.getElementById("image-captcha-container-paynow"),
      img: document.getElementById("image-captcha-img-paynow"),
      input: document.getElementById("image-captcha-input-paynow"),
      result: document.getElementById("image-captcha-result-paynow"),
      autoSolveBtn: document.getElementById("auto-solve-image-captcha-btn-paynow"),
      autoSolveTrueCaptchaBtn: document.getElementById("auto-solve-image-captcha-truecaptcha-btn-paynow")
    };
  }
  function _var1709() {
    _var748 = true;
    try {
      GM_setValue(_var35, "true");
    } catch (_var1732) {}
    const _var1733 = document.getElementById("image-captcha-toggle-paynow");
    if (_var1733) {
      _var1733.checked = true;
    }
    const {
      container: _var1734
    } = _var1714();
    if (_var1734) {
      _var1734.style.display = "flex";
    }
  }
  function _var1735(_var1736 = false) {
    _var749 = null;
    _var750 = null;
    _var751 = false;
    if (!_var1736) {
      return;
    }
    const {
      container: _var1737,
      img: _var1738,
      input: _var1739,
      result: _var1740,
      autoSolveBtn: _var1741
    } = _var1714();
    if (_var1738) {
      _var1738.removeAttribute("src");
      _var1738.style.display = "none";
    }
    if (_var1739) {
      _var1739.value = "";
    }
    if (_var1740) {
      _var1740.style.display = "none";
      _var1740.textContent = "";
      _var1740.className = "ivac-paynow-captcha-result";
    }
    if (_var1737) {
      _var1737.style.display = "none";
    }
    if (_var1741) {
      _var1741.disabled = false;
      _var1741.textContent = "Auto";
    }
  }
  function _var948(_var1742) {
    const _var1743 = {};
    const _var1744 = [];
    const _var1745 = /([a-z0-9]+):\s*\{/gi;
    let _var1746;
    while ((_var1746 = _var1745.exec(_var1742)) !== null) {
      _var1744.push({
        index: _var1746.index,
        partNum: _var1746[1],
        fullMatch: _var1746[1] + ":"
      });
    }
    const _var1747 = /^([a-z0-9]+):/gim;
    while ((_var1746 = _var1747.exec(_var1742)) !== null) {
      const _var1748 = _var1744.find(_var1749 => _var1749.index === _var1746.index);
      if (!_var1748) {
        _var1744.push({
          index: _var1746.index,
          partNum: _var1746[1],
          fullMatch: _var1746[0]
        });
      }
    }
    const _var1750 = /([a-z0-9]+):\s*data:/gi;
    while ((_var1746 = _var1750.exec(_var1742)) !== null) {
      const _var1751 = _var1744.find(_var1752 => _var1752.index === _var1746.index);
      if (!_var1751) {
        _var1744.push({
          index: _var1746.index,
          partNum: _var1746[1],
          fullMatch: _var1746[1] + ":"
        });
      }
    }
    for (let _var1753 = 0; _var1753 < _var1742.length - 3; _var1753++) {
      if (/[a-z0-9]/i.test(_var1742[_var1753]) && _var1742[_var1753 + 1] === ":" && (_var1742[_var1753 + 2] === "{" || _var1742[_var1753 + 2].trim() === "" && _var1742[_var1753 + 3] === "{" || _var1742.substring(_var1753 + 2, _var1753 + 7) === "data:")) {
        let _var1754 = _var1742[_var1753];
        let _var1755 = _var1753 + 1;
        while (_var1755 < _var1742.length && /[a-z0-9]/i.test(_var1742[_var1755]) && _var1742[_var1755 + 1] === ":") {
          _var1754 += _var1742[_var1755];
          _var1755++;
        }
        const _var1756 = _var1742.substring(_var1753 + _var1754.length + 1).trim();
        if (_var1756.startsWith("{") || _var1756.startsWith("data:")) {
          const _var1757 = _var1744.find(_var1758 => _var1758.index === _var1753);
          if (!_var1757) {
            _var1744.push({
              index: _var1753,
              partNum: _var1754,
              fullMatch: _var1754 + ":"
            });
          }
        }
      }
    }
    _var1744.sort((_var1759, _var1760) => _var1759.index - _var1760.index);
    if (_var1744.length > 0) {
      for (let _var1761 = 0; _var1761 < _var1744.length; _var1761++) {
        const _var1762 = _var1744[_var1761];
        const _var1763 = _var1744[_var1761 + 1];
        const _var1764 = _var1762.index + _var1762.fullMatch.length;
        const _var1765 = _var1763 ? _var1763.index : _var1742.length;
        const _var1766 = _var1742.substring(_var1764, _var1765).trim();
        if (_var1762.partNum === "1" || _var1762.partNum === "0") {
          try {
            _var1743[_var1762.partNum] = JSON.parse(_var1766);
          } catch (_var1767) {
            _var1743[_var1762.partNum] = _var1766;
          }
        } else {
          _var1743[_var1762.partNum] = _var1766;
        }
      }
      const _var1768 = _var1744[0];
      if (_var1768.index > 0) {
        const _var1769 = _var1742.substring(0, _var1768.index).trim();
        if (_var1769) {
          if (/^[A-Za-z0-9+/=]+$/.test(_var1769) || _var1769.includes("data:image") || _var1769.endsWith("=") || _var1769.match(/[A-Za-z0-9+/]{50,}/)) {
            _var1743["2"] = _var1769;
            _var243("[ParseMultiPart] Found image data before first marker (" + _var1769.length + " chars)");
          }
        }
      }
    } else {
      const _var1770 = _var1742.split("\n");
      let _var1771 = null;
      let _var1772 = [];
      for (let _var1773 = 0; _var1773 < _var1770.length; _var1773++) {
        const _var1774 = _var1770[_var1773];
        if (!_var1774.trim() && _var1771 === null) {
          continue;
        }
        const _var1775 = _var1774.indexOf(":");
        const _var1776 = _var1775 > 0 && /^[a-z0-9]+$/i.test(_var1774.substring(0, _var1775).trim());
        if (_var1776) {
          if (_var1771 !== null) {
            const _var1777 = _var1772.join("\n");
            if (_var1771 === "1" || _var1771 === "0") {
              try {
                _var1743[_var1771] = JSON.parse(_var1777);
              } catch (_var1778) {
                _var1743[_var1771] = _var1777;
              }
            } else {
              _var1743[_var1771] = _var1777;
            }
          }
          _var1771 = _var1774.substring(0, _var1775).trim();
          _var1772 = [_var1774.substring(_var1775 + 1)];
        } else if (_var1771 !== null) {
          _var1772.push(_var1774);
        }
      }
      if (_var1771 !== null) {
        const _var1779 = _var1772.join("\n");
        if (_var1771 === "1" || _var1771 === "0") {
          try {
            _var1743[_var1771] = JSON.parse(_var1779);
          } catch (_var1780) {
            _var1743[_var1771] = _var1779;
          }
        } else {
          _var1743[_var1771] = _var1779;
        }
      }
    }
    return _var1743;
  }
  function _var1781(_var1782) {
    if (!_var1782) {
      return null;
    }
    if (_var1782.captcha) {
      return _var1782.captcha;
    }
    if (_var1782.data?.captcha) {
      return _var1782.data.captcha;
    }
    if (_var1782.data?.data?.captcha) {
      return _var1782.data.data.captcha;
    }
    if (_var1782.data?.data) {
      return _var1782.data.data;
    }
    if (_var1782.data) {
      return _var1782.data;
    }
    return _var1782;
  }
  function _var244(_var1783, _var1784) {
    if (!_var1783 || !_var1784) {
      return;
    }
    if (!_var1783.data) {
      _var1783.data = {};
    }
    _var1783.data.profile_image = _var1784;
    if (!_var1783.data.data) {
      _var1783.data.data = {};
    }
    _var1783.data.data.profile_image = _var1784;
    _var1783.profile_image = _var1784;
    _var243("[updateResponseDataWithPhoto] ✓ Photo updated at all levels (length: " + _var1784.length + ", starts with: " + _var1784.substring(0, 30) + "...)");
  }
  function _var291(_var1785, _var1786) {
    if (!_var1785 || typeof _var1785 !== "string" || !_var1785.startsWith("$")) {
      return _var1785;
    }
    const _var1787 = _var1785.substring(1);
    let _var1788 = null;
    if (_var1786?._parts) {
      _var1788 = _var1786._parts;
    } else if (_var1786?.data?._parts) {
      _var1788 = _var1786.data._parts;
    } else if (_var1786?.data?.data?._parts) {
      _var1788 = _var1786.data.data._parts;
    }
    if (_var1788 && _var1788[_var1787]) {
      let _var1789 = _var1788[_var1787];
      if (typeof _var1789 !== "string") {
        _var1789 = String(_var1789);
      }
      if (/^[a-z0-9]+:/i.test(_var1789)) {
        const _var1790 = _var1789.indexOf(":");
        _var1789 = _var1789.substring(_var1790 + 1).trim();
      }
      const _var1791 = _var1789.indexOf(",");
      if (_var1791 !== -1) {
        const _var1792 = _var1789.substring(_var1791 + 1).trim();
        if (_var1792.startsWith("data:image/") || _var1792.startsWith("data:")) {
          _var1789 = _var1792;
        } else if (_var1792.includes("base64")) {
          _var1789 = "data:image/jpeg;base64," + _var1792;
        }
      }
      if (_var1789.startsWith("data:image/") || _var1789.startsWith("data:")) {
        return _var1789;
      }
      const _var1793 = _var1789.match(/data:image\/[^;]+;base64,(.+)/);
      if (_var1793) {
        return _var1793[0];
      }
      if (/^[A-Za-z0-9+/=]+$/.test(_var1789) && _var1789.length > 100) {
        return "data:image/jpeg;base64," + _var1789;
      }
      return _var1789;
    }
    return null;
  }
  function _var242(_var1794) {
    if (!_var1794) {
      return null;
    }
    let _var1795 = _var1794?.data?.profile_image || _var1794?.data?.photo || _var1794?.data?.data?.profile_image || _var1794?.data?.data?.photo || _var1794?.profile_image || _var1794?.photo || null;
    if (_var1795 && typeof _var1795 === "string" && (_var1795.startsWith("data:image/") || _var1795.startsWith("data:"))) {
      return _var1795;
    }
    if (_var1795 && typeof _var1795 === "string" && (_var1795.startsWith("http://") || _var1795.startsWith("https://"))) {
      _var243("[extractPhotoDataFromResponse] Photo is HTTP/HTTPS URL: " + _var1795.substring(0, 50) + "...");
      return _var1795;
    }
    if (_var1795 && typeof _var1795 === "string" && _var1795.startsWith("$")) {
      const _var1796 = _var1795.substring(1);
      const _var1797 = _var1794._parts || _var1794.data?._parts || _var1794.data?.data?._parts || null;
      if (_var1797 && _var1797[_var1796]) {
        _var243("[extractPhotoDataFromResponse] Looking for photo in part '" + _var1796 + "', available parts: " + Object.keys(_var1797).join(", "));
        const _var1798 = _var1797[_var1796];
        if (_var1798) {
          let _var1799 = String(_var1798).trim();
          if (/^[a-z0-9]+:/i.test(_var1799)) {
            const _var1800 = _var1799.indexOf(":");
            _var1799 = _var1799.substring(_var1800 + 1).trim();
          }
          if (_var1799.startsWith("data:image/")) {
            _var1795 = _var1799;
            _var243("[extractPhotoDataFromResponse] ✓ Using part " + _var1796 + " as-is (already complete data URL)");
          } else if (_var1799.startsWith("data:")) {
            _var1795 = _var1799;
            _var243("[extractPhotoDataFromResponse] ✓ Using part " + _var1796 + " as-is (data URL format)");
          } else {
            const _var1801 = _var1799.indexOf(",");
            if (_var1801 !== -1) {
              const _var1802 = _var1799.substring(_var1801 + 1).trim();
              if (_var1802.startsWith("data:image/") || _var1802.startsWith("data:")) {
                _var1795 = _var1802;
                _var243("[extractPhotoDataFromResponse] ✓ Extracted data URL from part " + _var1796 + " (removed prefix before comma)");
              } else {
                _var1795 = "data:image/png;base64," + _var1802;
                _var243("[extractPhotoDataFromResponse] ✓ Extracted base64 from part " + _var1796 + " (added data URL prefix)");
              }
            } else {
              _var1795 = "data:image/png;base64," + _var1799;
              _var243("[extractPhotoDataFromResponse] ✓ Using part " + _var1796 + " as base64 (no comma found, added prefix)");
            }
          }
        } else {
          _var648("[extractPhotoDataFromResponse] Photo part " + _var1796 + " not found in response parts. Available parts: " + Object.keys(_var1797).join(", "));
        }
      }
    }
    if (_var1795) {
      _var1795 = _var1795.replace(/^[a-z0-9]+:/i, "");
      const _var1803 = _var1795.indexOf("data:");
      if (_var1803 > 0) {
        _var1795 = _var1795.substring(_var1803);
        _var243("[extractPhotoDataFromResponse] ✓ Removed prefix before 'data:' in final validation");
      }
      _var1795 = _var1795.trim();
      if (!_var1795.startsWith("data:")) {
        _var648("[extractPhotoDataFromResponse] ⚠ Final photoData doesn't start with 'data:' - value: " + _var1795.substring(0, 50) + "...");
        return null;
      }
    }
    const _var1804 = _var1794._parts || _var1794.data?._parts || _var1794.data?.data?._parts || null;
    if ((!_var1795 || typeof _var1795 === "string" && _var1795.includes("$")) && _var1804) {
      _var243("[extractPhotoDataFromResponse] Photo missing or still a reference, checking _parts directly (available parts: " + Object.keys(_var1804).join(", ") + ")");
      const _var1805 = ["d", "13", "2", "3", "4", "5"];
      for (const _var1806 of _var1805) {
        const _var1807 = _var1804[_var1806];
        if (_var1807 && typeof _var1807 === "string") {
          const _var1808 = String(_var1807).trim();
          if (_var1808.includes("data:image/") || _var1808.includes("data:image/jpeg") || _var1808.includes("data:image/png") || _var1808.includes("base64")) {
            let _var1809 = _var1808;
            if (/^[a-z0-9]+:/i.test(_var1809)) {
              const _var1810 = _var1809.indexOf(":");
              _var1809 = _var1809.substring(_var1810 + 1).trim();
            }
            const _var1811 = _var1809.indexOf(",");
            if (_var1811 !== -1) {
              const _var1812 = _var1809.substring(_var1811 + 1).trim();
              if (_var1812.startsWith("data:image/") || _var1812.startsWith("data:")) {
                _var1795 = _var1812;
                _var243("[extractPhotoDataFromResponse] ✓ Found photo in part '" + _var1806 + "' (direct check)");
                break;
              } else if (_var1812.includes("base64")) {
                _var1795 = "data:image/jpeg;base64," + _var1812;
                _var243("[extractPhotoDataFromResponse] ✓ Found base64 in part '" + _var1806 + "' (direct check)");
                break;
              }
            } else if (_var1809.startsWith("data:image/") || _var1809.startsWith("data:")) {
              _var1795 = _var1809;
              _var243("[extractPhotoDataFromResponse] ✓ Found photo in part '" + _var1806 + "' (direct check)");
              break;
            } else if (_var1809.includes("base64")) {
              _var1795 = "data:image/jpeg;base64," + _var1809;
              _var243("[extractPhotoDataFromResponse] ✓ Found base64 in part '" + _var1806 + "' (direct check, added prefix)");
              break;
            }
          }
        }
      }
    } else {
      _var648("[extractPhotoDataFromResponse] ⚠ _parts not available in responseData (checked responseData._parts, responseData.data._parts, responseData.data.data._parts)");
    }
    return _var1795;
  }
  function _var1706(_var1813) {
    if (!_var1813 || typeof _var1813 !== "string") {
      return null;
    }
    if (_var1813.startsWith("data:")) {
      return _var1813;
    }
    if (_var1813.startsWith("http://") || _var1813.startsWith("https://")) {
      return _var1813;
    }
    return "data:image/png;base64," + _var1813;
  }
  function _var1814(_var1815) {
    if (!_var1815) {
      return false;
    }
    if (_var1815.status_code !== undefined && _var1815.status_code !== null) {
      const _var1816 = typeof _var1815.status_code === "number" ? _var1815.status_code : parseInt(_var1815.status_code);
      if (_var1816 >= 400) {
        return false;
      }
    }
    const _var1817 = _var1815.message || _var1815.data?.message || "";
    if (_var1817 && (_var1817.toLowerCase().includes("too many attempts") || _var1817.toLowerCase().includes("error") || _var1817.toLowerCase().includes("failed") || _var1817.toLowerCase().includes("invalid"))) {
      if (_var1815.status_code !== undefined && _var1815.status_code >= 400) {
        return false;
      }
      if (_var1817.toLowerCase().includes("too many attempts")) {
        return false;
      }
    }
    if (_var1815.success === true) {
      return true;
    }
    if (_var1815.status && typeof _var1815.status === "string" && _var1815.status.toLowerCase() === "success") {
      return true;
    }
    if (_var1815.data?.success === true) {
      return true;
    }
    if (_var1815.data?.status && typeof _var1815.data.status === "string" && _var1815.data.status.toLowerCase() === "success") {
      return true;
    }
    return false;
  }
  async function _var1707() {
    if (!_var748) {
      if (_var353()) {
        _var1133("reload");
      }
      return false;
    }
    if (!_var702.imageCaptchaGenerate) {
      _var648("Image captcha generation failed - endpoint not configured");
      return false;
    }
    if (_var353()) {
      _var1133("reload");
    }
    _var1709();
    const {
      container: _var1818,
      img: _var1819,
      input: _var1820,
      result: _var1821
    } = _var1714();
    try {
      _var243("Generating PayNow image captcha...");
      const _var1822 = ["$undefined", "$undefined"];
      const _var1823 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "60e26dd4d4281d052b3d9687d2806805eaa7c45644",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var1824 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1823,
        body: JSON.stringify(_var1822),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application"
      });
      _var708(_var1824, "https://payment.ivacbd.com/application");
      if (!_var1824.ok) {
        const _var1825 = new Error("HTTP error! status: " + _var1824.status);
        _var1825.status = _var1824.status;
        throw _var1825;
      }
      let _var1826;
      const _var1827 = _var1824.headers.get("content-type");
      const _var1828 = await _var1824.text();
      const _var1829 = _var948(_var1828);
      let _var1830 = _var1829["1"] || _var1829["0"] || null;
      if (_var1830) {
        if (typeof _var1830 === "string") {
          try {
            _var1826 = JSON.parse(_var1830);
            _var243("[GeneratePayCaptcha] Successfully parsed part '1' as JSON (was string)");
          } catch (_var1831) {
            _var648("[GeneratePayCaptcha] Failed to parse part '1' as JSON: " + _var1831.message);
            _var1826 = null;
          }
        } else if (typeof _var1830 === "object" && _var1830 !== null) {
          _var1826 = _var1830;
          _var243("[GeneratePayCaptcha] Part '1' already parsed as object");
        } else {
          _var1826 = null;
        }
      } else {
        _var1826 = null;
      }
      if (_var1826 && Object.keys(_var1829).length > 0) {
        _var1826._parts = _var1829;
        _var243("[GeneratePayCaptcha] Stored " + Object.keys(_var1829).length + " parts in responseData._parts: " + Object.keys(_var1829).join(", "));
      }
      if (!_var1826) {
        if (_var1827 && _var1827.includes("application/json")) {
          try {
            _var1826 = JSON.parse(_var1828);
          } catch {
            _var1826 = null;
          }
        }
      }
      if (!_var1826) {
        try {
          const _var1832 = _var1828.indexOf("{\"status\"");
          if (_var1832 !== -1) {
            let _var1833 = _var1828.substring(_var1832);
            let _var1834 = 0;
            let _var1835 = -1;
            for (let _var1836 = 0; _var1836 < _var1833.length; _var1836++) {
              if (_var1833[_var1836] === "{") {
                _var1834++;
              }
              if (_var1833[_var1836] === "}") {
                _var1834--;
                if (_var1834 === 0) {
                  _var1835 = _var1836 + 1;
                  break;
                }
              }
            }
            if (_var1835 !== -1) {
              _var1833 = _var1833.substring(0, _var1835);
              try {
                _var1826 = JSON.parse(_var1833);
              } catch (_var1837) {
                _var1826 = null;
              }
            }
          }
          if (!_var1826) {
            const _var1838 = _var1828.match(/\{[\s\S]*\}/);
            if (_var1838) {
              try {
                _var1826 = JSON.parse(_var1838[0]);
              } catch (_var1839) {
                _var1826 = {
                  message: _var1828,
                  status: "success"
                };
              }
            } else {
              _var1826 = {
                message: _var1828,
                status: "success"
              };
            }
          }
        } catch (_var1840) {
          _var1826 = {
            message: _var1828,
            status: "success"
          };
        }
      }
      if (_var1826?.status_code === 422 || _var1826?.data?.status_code === 422) {
        const _var1841 = {
          status: 422,
          message: _var1826?.message || _var1826?.data?.message || "Failed to generate captcha",
          data: _var1826
        };
        _var243("[GenerateImageCaptcha] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1841.message + ", data.status_code: " + (_var1841.data?.status_code || _var1841.data?.data?.status_code));
        throw _var1841;
      }
      if (_var1826?.status_code === 429 || _var1826?.data?.status_code === 429) {
        const _var1842 = {
          status: 429,
          message: _var1826?.message || _var1826?.data?.message || "Rate limited",
          data: _var1826
        };
        _var243("[GenerateImageCaptcha] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1842.message + ", data.status_code: " + (_var1842.data?.status_code || _var1842.data?.data?.status_code));
        throw _var1842;
      }
      if (_var1826?.status_code === 401 || _var1826?.data?.status_code === 401) {
        const _var1843 = {
          status: 401,
          message: _var1826?.message || _var1826?.data?.message || "You are logged out. Please log in.",
          data: _var1826
        };
        _var243("[GenerateImageCaptcha] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1843.message + ", data.status_code: " + (_var1843.data?.status_code || _var1843.data?.data?.status_code));
        throw _var1843;
      }
      if (_var1826?.status_code === 419 || _var1826?.data?.status_code === 419) {
        const _var1844 = {
          status: 419,
          message: _var1826?.message || _var1826?.data?.message || "Session expired",
          data: _var1826
        };
        _var243("[GenerateImageCaptcha] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1844.message + ", data.status_code: " + (_var1844.data?.status_code || _var1844.data?.data?.status_code));
        throw _var1844;
      }
      const _var1845 = _var1781(_var1826);
      let _var1846 = _var1845?.captcha_id || _var1845?.id;
      if (!_var1846 && _var1826?.data?.captcha_id) {
        _var1846 = _var1826.data.captcha_id;
      }
      if (!_var1846 && _var1829["1"]?.data?.captcha_id) {
        _var1846 = _var1829["1"].data.captcha_id;
      }
      let _var1847 = _var1845?.captcha_image || _var1845?.captcha_image_url || _var1845?.image_url || _var1845?.url || _var1845?.image;
      if (!_var1847) {
        _var1847 = _var1826?.data?.captcha_image || _var1826?.data?.captcha_image_url || _var1826?.data?.image_url || _var1826?.data?.url || _var1826?.captcha_image || _var1826?.captcha_image_url || _var1826?.image_url || _var1826?.url;
      }
      if (!_var1847 && _var1829) {
        for (const [_var1848, _var1849] of Object.entries(_var1829)) {
          if (_var1849 && typeof _var1849 === "string") {
            if (_var1849.includes("data:image/") || _var1849.includes("data:image/png") || _var1849.includes("data:image/jpeg")) {
              _var1847 = _var1849;
              _var243("[GeneratePayCaptcha] Found image data in part '" + _var1848 + "'");
              break;
            }
          }
        }
      }
      if (_var1847 && _var1847.startsWith("$")) {
        const _var1850 = _var1847.substring(1);
        _var243("[GeneratePayCaptcha] Looking for image in part '" + _var1850 + "', available parts: " + Object.keys(_var1829).join(", "));
        const _var1851 = _var1829[_var1850];
        if (_var1851) {
          let _var1852 = String(_var1851).trim();
          if (/^\d+:/.test(_var1852)) {
            const _var1853 = _var1852.indexOf(":");
            _var1852 = _var1852.substring(_var1853 + 1).trim();
          }
          if (_var1852.startsWith("data:image/")) {
            _var1847 = _var1852;
            _var243("✓ Using part " + _var1850 + " as-is (already complete data URL)");
          } else if (_var1852.startsWith("data:")) {
            _var1847 = _var1852;
            _var243("✓ Using part " + _var1850 + " as-is (data URL format)");
          } else {
            const _var1854 = _var1852.indexOf(",");
            if (_var1854 !== -1) {
              const _var1855 = _var1852.substring(_var1854 + 1).trim();
              if (_var1855.startsWith("data:image/") || _var1855.startsWith("data:")) {
                _var1847 = _var1855;
                _var243("✓ Extracted data URL from part " + _var1850 + " (removed prefix before comma)");
              } else {
                _var1847 = "data:image/png;base64," + _var1855;
                _var243("✓ Extracted base64 from part " + _var1850 + " (added data URL prefix)");
              }
            } else {
              _var1847 = "data:image/png;base64," + _var1852;
              _var243("✓ Using part " + _var1850 + " as base64 (no comma found, added prefix)");
            }
          }
        } else {
          _var648("[GeneratePayCaptcha] Image part " + _var1850 + " not found in response parts. Available parts: " + Object.keys(_var1829).join(", "));
        }
      }
      if ((!_var1847 || _var1847.trim() === "") && _var1828) {
        _var243("[GeneratePayCaptcha] rawImage still missing, searching raw response text for image data...");
        const _var1856 = _var1828.match(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]+/);
        if (_var1856) {
          _var1847 = _var1856[0];
          _var243("✓ Found image data in raw response text (length: " + _var1847.length + ")");
        } else {
          const _var1857 = _var1828.match(/[A-Za-z0-9+/]{100,}={0,2}/);
          if (_var1857 && _var1857[0].length > 500) {
            _var1847 = "data:image/png;base64," + _var1857[0];
            _var243("✓ Found base64 data in raw response text, converted to data URL (length: " + _var1847.length + ")");
          }
        }
      }
      if ((!_var1847 || _var1847.trim() === "") && _var1846) {
        _var243("[GeneratePayCaptcha] rawImage missing, attempting to fetch from API using captcha_id: " + _var1846);
        try {
          const _var1858 = "https://payment.ivacbd.com/api/v2/captcha/image/" + _var1846;
          const _var1859 = await fetch(_var1858, {
            method: "GET",
            credentials: "include",
            referrer: "https://payment.ivacbd.com/application"
          });
          if (_var1859.ok) {
            const _var1860 = await _var1859.blob();
            const _var1861 = new FileReader();
            _var1847 = await new Promise((_var1862, _var1863) => {
              _var1861.onloadend = () => _var1862(_var1861.result);
              _var1861.onerror = _var1863;
              _var1861.readAsDataURL(_var1860);
            });
            _var243("✓ Successfully fetched image from API endpoint and converted to data URL");
          } else {
            _var648("Failed to fetch image from API endpoint: HTTP " + _var1859.status);
            _var1847 = _var1858;
          }
        } catch (_var1864) {
          _var648("Error fetching image from API: " + _var1864.message);
          if (_var1846) {
            _var1847 = "https://payment.ivacbd.com/api/v2/captcha/image/" + _var1846;
            _var243("Using image URL as fallback: " + _var1847);
          }
        }
      }
      if (_var1847) {
        _var1847 = _var1847.replace(/^\d+:/, "");
        const _var1865 = _var1847.indexOf("data:");
        if (_var1865 > 0) {
          _var1847 = _var1847.substring(_var1865);
          _var243("✓ Removed prefix before 'data:' in final validation");
        }
        _var1847 = _var1847.trim();
        if (!_var1847.startsWith("data:") && !_var1847.startsWith("http")) {
          _var648("⚠ Final rawImage doesn't start with 'data:' or 'http' - value: " + _var1847.substring(0, 50) + "...");
        }
      }
      if (!_var1846 || !_var1847) {
        _var648("Image captcha generation failed - invalid response payload. captcha_id: " + _var1846 + ", rawImage: " + (_var1847 ? "present" : "missing"));
        _var648("[GeneratePayCaptcha] Debug info - responseData keys: " + (_var1826 ? Object.keys(_var1826).join(", ") : "null"));
        _var648("[GeneratePayCaptcha] Debug info - captchaPayload keys: " + (_var1845 ? Object.keys(_var1845).join(", ") : "null"));
        _var648("[GeneratePayCaptcha] Debug info - available parts: " + (_var1829 ? Object.keys(_var1829).join(", ") : "null"));
        if (_var1826?.data) {
          _var648("[GeneratePayCaptcha] Debug info - responseData.data keys: " + Object.keys(_var1826.data).join(", "));
        }
        return false;
      }
      _var749 = _var1846;
      _var750 = _var1706(_var1847);
      _var751 = false;
      _var243("[PayNow Image Captcha] Generated - captcha_id: " + _var749 + ", image length: " + (_var750 ? _var750.length : 0));
      if (_var353()) {
        _var1133("verify");
      }
      if (_var1818) {
        _var1818.style.display = "flex";
      }
      if (_var1819) {
        _var1819.style.display = "none";
        _var1819.onerror = () => {
          _var1819.style.display = "none";
          _var648("Failed to load image captcha");
        };
        _var1819.onload = async () => {
          _var1819.style.display = "block";
          _var243("Image captcha loaded successfully");
          if (_var353() || _var348()) {
            try {
              _var243("🤖 Auto enabled - solving image captcha immediately via TrueCaptcha...");
              await _var1715();
            } catch (_var1866) {}
          }
        };
        let _var1867 = _var750;
        _var1867 = _var1867.replace(/^\d+:/, "").trim();
        _var1867 = _var1867.replace(/\n/g, "");
        const _var1868 = _var1867.indexOf("data:");
        if (_var1868 > 0) {
          _var1867 = _var1867.substring(_var1868);
        }
        if (_var1867.startsWith("data:image/") && _var1867.includes(";base64,")) {
          _var1819.src = _var1867;
          _var243("✓ Setting image captcha source (first 100 chars): " + _var1867.substring(0, 100) + "...");
        } else {
          _var648("Invalid image captcha source format after final validation: " + _var1867.substring(0, 100) + "...");
          _var1819.style.display = "none";
        }
      }
      if (_var1820) {
        _var1820.value = "";
      }
      if (_var1821) {
        _var1821.style.display = "none";
        _var1821.textContent = "";
      }
      _var647("Image captcha ready");
      return true;
    } catch (_var1869) {
      _var648(_var1869?.message ? "Image captcha generation failed: " + _var1869.message : "Image captcha generation failed");
      return false;
    }
  }
  async function _var1870() {
    if (!_var748) {
      return false;
    }
    const {
      input: _var1871,
      result: _var1872
    } = _var1714();
    if (!_var1871 || !_var1871.value || _var1871.value.trim() === "") {
      _var648("Image captcha verification failed - please enter the captcha text");
      return false;
    }
    if (!_var702.imageCaptchaVerify) {
      _var648("Image captcha verification failed - endpoint not configured");
      return false;
    }
    const _var1873 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    if (_var353()) {
      _var1133("verify");
    }
    return _var426(async _var1874 => {
      _var243("Verifying PayNow image captcha...");
      const _var1875 = _var749;
      const _var1876 = _var1871.value.trim();
      const _var1877 = [_var1875, _var1876];
      const _var1878 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "60e26dd4d4281d052b3d9687d2806805eaa7c45644",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var1879 = new AbortController();
      if (_var1874) {
        _var1874.addEventListener("abort", () => _var1879.abort(), {
          once: true
        });
      }
      const _var1880 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var1878,
        body: JSON.stringify(_var1877),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application",
        signal: _var1879.signal
      });
      _var708(_var1880, "https://payment.ivacbd.com/application");
      if (!_var1880.ok) {
        const _var1881 = new Error("HTTP error! status: " + _var1880.status);
        _var1881.status = _var1880.status;
        throw _var1881;
      }
      let _var1882;
      const _var1883 = _var1880.headers.get("content-type");
      const _var1884 = await _var1880.text();
      if (_var1883 && _var1883.includes("application/json")) {
        try {
          _var1882 = JSON.parse(_var1884);
        } catch {
          _var1882 = null;
        }
      }
      if (!_var1882) {
        try {
          const _var1885 = _var1884.indexOf("{\"status\"");
          if (_var1885 !== -1) {
            let _var1886 = _var1884.substring(_var1885);
            let _var1887 = 0;
            let _var1888 = -1;
            for (let _var1889 = 0; _var1889 < _var1886.length; _var1889++) {
              if (_var1886[_var1889] === "{") {
                _var1887++;
              }
              if (_var1886[_var1889] === "}") {
                _var1887--;
                if (_var1887 === 0) {
                  _var1888 = _var1889 + 1;
                  break;
                }
              }
            }
            if (_var1888 !== -1) {
              _var1886 = _var1886.substring(0, _var1888);
              try {
                _var1882 = JSON.parse(_var1886);
              } catch (_var1890) {}
            }
          }
          if (!_var1882) {
            const _var1891 = _var1884.match(/\{[\s\S]*\}/);
            if (_var1891) {
              try {
                _var1882 = JSON.parse(_var1891[0]);
              } catch (_var1892) {
                _var1882 = {
                  message: _var1884,
                  status: "success"
                };
              }
            } else {
              _var1882 = {
                message: _var1884,
                status: "success"
              };
            }
          }
        } catch (_var1893) {
          _var1882 = {
            message: _var1884,
            status: "success"
          };
        }
      }
      const _var1894 = _var1882 || {};
      const _var1895 = _var1880.status || 200;
      if (_var1894?.status_code === 422 || _var1894?.data?.status_code === 422) {
        const _var1896 = {
          status: 422,
          message: _var1894?.message || _var1894?.data?.message || "Image captcha verification failed",
          data: _var1894
        };
        _var243("[VerifyImageCaptcha] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var1896.message + ", data.status_code: " + (_var1896.data?.status_code || _var1896.data?.data?.status_code));
        throw _var1896;
      }
      if (_var1894?.status_code === 429 || _var1894?.data?.status_code === 429) {
        const _var1897 = {
          status: 429,
          message: _var1894?.message || _var1894?.data?.message || "Rate limited",
          data: _var1894
        };
        _var243("[VerifyImageCaptcha] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var1897.message + ", data.status_code: " + (_var1897.data?.status_code || _var1897.data?.data?.status_code));
        throw _var1897;
      }
      if (_var1894?.status_code === 401 || _var1894?.data?.status_code === 401) {
        const _var1898 = {
          status: 401,
          message: _var1894?.message || _var1894?.data?.message || "You are logged out. Please log in.",
          data: _var1894
        };
        _var243("[VerifyImageCaptcha] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var1898.message + ", data.status_code: " + (_var1898.data?.status_code || _var1898.data?.data?.status_code));
        throw _var1898;
      }
      if (_var1894?.status_code === 419 || _var1894?.data?.status_code === 419) {
        const _var1899 = {
          status: 419,
          message: _var1894?.message || _var1894?.data?.message || "Session expired",
          data: _var1894
        };
        _var243("[VerifyImageCaptcha] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var1899.message + ", data.status_code: " + (_var1899.data?.status_code || _var1899.data?.data?.status_code));
        throw _var1899;
      }
      if (_var1894.status_code !== undefined && _var1894.status_code !== null) {
        const _var1900 = typeof _var1894.status_code === "number" ? _var1894.status_code : parseInt(_var1894.status_code);
        if (_var1900 >= 400) {
          const _var1901 = _var1894?.message || _var1894?.data?.message || _var1894?.data?.data?.message || "Image captcha verification failed (status_code: " + _var1900 + ")";
          throw {
            status: _var1900,
            message: _var1901,
            data: _var1894
          };
        }
      }
      if (_var1814(_var1894)) {
        return {
          status: _var1895,
          data: _var1894,
          verified: true
        };
      }
      const _var1902 = _var1894?.message || _var1894?.data?.message || _var1894?.data?.data?.message || "Image captcha verification failed";
      throw {
        status: _var1895,
        message: _var1902,
        data: _var1894
      };
    }, async (_var1903, _var1904) => {
      const _var1905 = _var1903?.status || 200;
      _var751 = true;
      if (_var1872) {
        _var1872.style.display = "block";
        _var1872.className = "ivac-paynow-captcha-result success";
        _var1872.textContent = "✅ Image captcha verified";
        _var823(_var1872);
      }
      _var647("Image captcha verified successfully");
      if ((_var353() || _var348()) && _var1905 === 200) {
        if (_var353()) {
          _var1133("paynow");
        }
        const _var1906 = _var379();
        _var243("Auto enabled and verify-pay status 200 - waiting " + _var1906 + " seconds before proceeding to PayNow...");
        // TOLOOK
        setTimeout(() => {
          _var243("Proceeding to PayNow...");
          _var1907();
        }, _var1906 * 1000);
      }
      return true;
    }, "Verify-pay image captcha", {
      msgEl: _var1873,
      show419ServerMessage: true,
      custom401Handler: (_var1908, _var1909, _var1910, _var1911) => {
        _var751 = false;
        _var243("[Image Captcha Verify] 401 error - NO RETRY (maxRetries: " + _var1910 + ")");
        const _var1912 = _var1908?.message || _var1908?.data?.message || _var1908?.data?.data?.message || "Unauthorized. Please login again.";
        _var648(_var1912);
        if (_var1872) {
          _var1872.style.display = "block";
          _var1872.className = "ivac-paynow-captcha-result error";
          _var1872.textContent = "❌ " + _var1912;
        }
        if (_var1911) {
          const _var1913 = _var1911.querySelector ? _var1911 : document.querySelector(".ivac-status-panel");
          if (_var1913 && _var1913.showStatus) {
            _var1913.showStatus(_var1912, 401, "error");
          } else {
            _var425(_var1912, "#ff4444");
          }
        }
        return false;
      },
      custom419Handler: (_var1914, _var1915, _var1916, _var1917) => {
        _var751 = false;
        _var243("[Image Captcha Verify] 419 error - NO RETRY (maxRetries: " + _var1916 + ")");
        const _var1918 = _var1914?.message || _var1914?.data?.message || _var1914?.data?.data?.message || "Session expired. Please refresh and try again.";
        _var648(_var1918);
        if (_var1872) {
          _var1872.style.display = "block";
          _var1872.className = "ivac-paynow-captcha-result error";
          _var1872.textContent = "❌ " + _var1918;
        }
        if (_var1917) {
          const _var1919 = _var1917.querySelector ? _var1917 : document.querySelector(".ivac-status-panel");
          if (_var1919 && _var1919.showStatus) {
            _var1919.showStatus(_var1918, 419, "error");
          } else {
            _var425(_var1918, "#ff4444");
          }
        }
        return false;
      },
      custom422Handler: (_var1920, _var1921, _var1922, _var1923) => {
        _var751 = false;
        if (_var1922 === 1) {
          _var243("[Image Captcha Verify] 422 error in single retry mode - NO RETRY (maxRetries: " + _var1922 + ")");
        }
        const _var1924 = _var1920?.message || _var1920?.data?.message || _var1920?.data?.data?.message || "Image captcha verification failed";
        _var648(_var1924);
        if (_var1872) {
          _var1872.style.display = "block";
          _var1872.className = "ivac-paynow-captcha-result error";
          _var1872.textContent = "❌ " + _var1924;
        }
        if (_var1923) {
          const _var1925 = _var1923.querySelector ? _var1923 : document.querySelector(".ivac-status-panel");
          if (_var1925 && _var1925.showStatus) {
            _var1925.showStatus(_var1924, 422, "error");
          } else {
            _var425(_var1924, "#ff4444");
          }
        }
        return false;
      },
      custom429Handler: (_var1926, _var1927, _var1928, _var1929) => {
        _var751 = false;
        if (_var1928 === 1) {
          _var243("[Image Captcha Verify] 429 error in single retry mode - NO RETRY (maxRetries: " + _var1928 + ")");
        }
        const _var1930 = _var1926?.message || _var1926?.data?.message || _var1926?.data?.data?.message || "Too Many Attempts. Please wait before trying again.";
        _var648(_var1930);
        if (_var1872) {
          _var1872.style.display = "block";
          _var1872.className = "ivac-paynow-captcha-result error";
          _var1872.textContent = "❌ " + _var1930;
        }
        if (_var1929) {
          const _var1931 = _var1929.querySelector ? _var1929 : document.querySelector(".ivac-status-panel");
          if (_var1931 && _var1931.showStatus) {
            _var1931.showStatus(_var1930, 429, "error");
          } else {
            _var425(_var1930, "#ff4444");
          }
        }
        return false;
      },
      custom5xxHandler: (_var1932, _var1933, _var1934, _var1935) => {
        const _var1936 = _var1932?.status || 500;
        if (_var348() && _var1933 < _var1934) {
          const _var1937 = 20000;
          if (_var1935) {
            _var425("Verify-pay failed. Retrying in " + (_var1937 / 1000).toFixed(1) + "s... (" + (_var1933 + 1) + "/" + _var1934 + ")", "#f59e0b");
          }
          return {
            retry: true,
            delay: _var1937
          };
        }
        _var751 = false;
        if (_var1872) {
          _var1872.style.display = "block";
          _var1872.className = "ivac-paynow-captcha-result error";
          _var1872.textContent = "❌ Verification error";
        }
        return false;
      }
    }).catch(_var1938 => {
      _var751 = false;
      const _var1939 = _var1938?.message || "Image captcha verification failed";
      _var648(_var1939);
      if (_var1872) {
        _var1872.style.display = "block";
        _var1872.className = "ivac-paynow-captcha-result error";
        _var1872.textContent = "❌ " + _var1939;
      }
      return false;
    });
  }
  async function _var1940() {
    if (!_var748) {
      _var648("Auto-solve failed - image captcha not enabled");
      return false;
    }
    const {
      img: _var1941,
      input: _var1942,
      result: _var1943,
      autoSolveBtn: _var1944
    } = _var1714();
    if (!_var1941 || !_var1941.src) {
      _var648("Auto-solve failed - no captcha image available");
      return false;
    }
    const _var1945 = GM_getValue(_var30, "");
    if (!_var752) {
      _var752 = _var1945 || _var29 || "";
    }
    if (!_var752 || _var752.trim() === "") {
      _var648("Auto-solve failed - 2Captcha API key not configured");
      if (_var1943) {
        _var1943.style.display = "block";
        _var1943.style.background = "#fee2e2";
        _var1943.style.border = "1px solid #fca5a5";
        _var1943.style.color = "#991b1b";
        _var1943.textContent = "⚠️ 2Captcha API key not set";
      }
      return false;
    }
    try {
      if (_var1944) {
        _var1944.disabled = true;
        _var1944.textContent = "Solving...";
      }
      _var243("Auto-solving PayNow image captcha via 2Captcha...");
      let _var1946 = "";
      const _var1947 = _var1941.src;
      try {
        await new Promise((_var1948, _var1949) => {
          if (_var1941.complete && _var1941.naturalWidth > 0) {
            _var1948();
          } else {
            _var1941.onload = _var1948;
            _var1941.onerror = _var1949;
            // TOLOOK
            setTimeout(() => _var1949(new Error("Image load timeout")), 5000);
          }
        });
        const _var1950 = document.createElement("canvas");
        _var1950.width = _var1941.naturalWidth || _var1941.width;
        _var1950.height = _var1941.naturalHeight || _var1941.height;
        const _var1951 = _var1950.getContext("2d");
        _var1951.drawImage(_var1941, 0, 0);
        _var1946 = _var1950.toDataURL("image/png").split(",")[1];
      } catch (_var1952) {
        if (_var1947.startsWith("data:")) {
          _var1946 = _var1947.split(",")[1] || "";
        } else if (_var1947.startsWith("http://") || _var1947.startsWith("https://")) {
          const _var1953 = await fetch(_var1947, {
            method: "GET",
            credentials: "include",
            mode: "cors"
          });
          if (!_var1953.ok) {
            throw new Error("Image fetch failed: " + _var1953.status);
          }
          const _var1954 = await _var1953.blob();
          _var1946 = await new Promise((_var1955, _var1956) => {
            const _var1957 = new FileReader();
            _var1957.onloadend = () => {
              const _var1958 = _var1957.result;
              if (typeof _var1958 === "string" && _var1958.includes(",")) {
                _var1955(_var1958.split(",")[1]);
              } else {
                _var1956(new Error("Invalid FileReader result"));
              }
            };
            _var1957.onerror = () => _var1956(new Error("FileReader error"));
            _var1957.readAsDataURL(_var1954);
          });
        } else {
          throw new Error("Unsupported image format for auto-solve");
        }
      }
      if (!_var1946 || _var1946.length < 100) {
        throw new Error("Invalid captcha image payload");
      }
      const _var1959 = new FormData();
      _var1959.append("key", _var752.trim());
      _var1959.append("method", "base64");
      _var1959.append("body", _var1946);
      _var1959.append("regsense", "1");
      _var1959.append("header_acao", "1");
      _var1959.append("json", "1");
      _var243("📤 Submitting captcha to 2Captcha API...");
      const _var1960 = await fetch("https://2captcha.com/in.php", {
        method: "POST",
        mode: "cors",
        body: _var1959
      });
      if (!_var1960.ok) {
        const _var1961 = await _var1960.text().catch(() => "");
        throw new Error("2Captcha submit HTTP error: " + _var1960.status + " " + _var1960.statusText + (_var1961 ? " - " + _var1961 : ""));
      }
      let _var1962;
      try {
        const _var1963 = await _var1960.text();
        _var243("2Captcha submit response: " + _var1963.substring(0, 200));
        try {
          _var1962 = JSON.parse(_var1963);
        } catch (_var1964) {
          if (_var1963.startsWith("OK|")) {
            const _var1965 = _var1963.split("|")[1];
            _var1962 = {
              status: 1,
              request: _var1965
            };
            _var243("Parsed 2Captcha plain text response: OK|" + _var1965);
          } else {
            _var1962 = {
              status: 0,
              request: _var1963.trim()
            };
            _var648("2Captcha error response: " + _var1963);
          }
        }
      } catch (_var1966) {
        throw new Error("2Captcha response parse error: " + _var1966.message);
      }
      if (_var1962.status !== 1 || !_var1962.request) {
        const _var1967 = _var1962.request || _var1962.error_text || _var1962.error_code || "Unknown error";
        _var648("2Captcha API error: " + _var1967 + " (status: " + _var1962.status + ")");
        throw new Error("2Captcha error: " + _var1967);
      }
      const _var1968 = _var1962.request;
      _var243("2Captcha request accepted (#" + _var1968 + "). Waiting for solution...");
      const _var1969 = "https://2captcha.com/res.php";
      let _var1970 = 0;
      const _var1971 = 30;
      const _var1972 = 2000;
      let _var1973 = "";
      while (_var1970 < _var1971) {
        _var1970 += 1;
        await new Promise(_var1974 => // TOLOOK
        setTimeout(_var1974, _var1972));
        const _var1975 = await fetch(_var1969 + "?key=" + encodeURIComponent(_var752.trim()) + "&action=get&id=" + _var1968 + "&header_acao=1&json=1", {
          method: "GET",
          mode: "cors"
        });
        if (!_var1975.ok) {
          const _var1976 = await _var1975.text().catch(() => "");
          throw new Error("2Captcha poll HTTP error: " + _var1975.status + " " + _var1975.statusText + (_var1976 ? " - " + _var1976 : ""));
        }
        let _var1977;
        try {
          const _var1978 = await _var1975.text();
          try {
            _var1977 = JSON.parse(_var1978);
          } catch (_var1979) {
            if (_var1978.startsWith("OK|")) {
              const _var1980 = _var1978.split("|")[1];
              _var1977 = {
                status: 1,
                request: _var1980
              };
              _var243("Parsed 2Captcha poll plain text response: OK|" + _var1980);
            } else if (_var1978.trim() === "CAPCHA_NOT_READY") {
              _var1977 = {
                status: 0,
                request: "CAPCHA_NOT_READY"
              };
            } else {
              _var1977 = {
                status: 0,
                request: _var1978.trim()
              };
              _var648("2Captcha poll error response: " + _var1978);
            }
          }
        } catch (_var1981) {
          throw new Error("2Captcha poll response parse error: " + _var1981.message);
        }
        if (_var1977.status === 1 && _var1977.request) {
          _var1973 = _var1977.request;
          _var243("✅ 2Captcha solution received: " + _var1973);
          break;
        }
        if (_var1977.request && _var1977.request !== "CAPCHA_NOT_READY") {
          const _var1982 = _var1977.request || _var1977.error_text || _var1977.error_code || "Unknown error";
          _var648("2Captcha poll error: " + _var1982 + " (status: " + _var1977.status + ")");
          throw new Error("2Captcha returned error: " + _var1982);
        }
      }
      if (!_var1973) {
        throw new Error("2Captcha did not return a solution in time");
      }
      if (_var1942) {
        _var1942.value = _var1973.trim();
      }
      if (_var1943) {
        _var1943.style.display = "block";
        _var1943.style.background = "#dbeafe";
        _var1943.style.border = "1px solid #93c5fd";
        _var1943.style.color = "#1e40af";
        _var1943.textContent = "🤖 Solved: " + _var1973.trim();
      }
      _var647("Image captcha solved via 2Captcha");
      const _var1983 = _var376();
      _var243("Waiting " + _var1983 + " seconds before verifying payment captcha...");
      await new Promise(_var1984 => // TOLOOK
      setTimeout(_var1984, _var1983 * 1000));
      const _var1985 = await _var1870();
      if (_var1985) {
        _var647("Solved image captcha verified successfully");
      }
      return _var1985;
    } catch (_var1986) {
      _var648(_var1986?.message ? "Auto-solve failed: " + _var1986.message : "Auto-solve failed");
      if (_var1943) {
        _var1943.style.display = "block";
        _var1943.style.background = "#fee2e2";
        _var1943.style.border = "1px solid #fca5a5";
        _var1943.style.color = "#991b1b";
        _var1943.textContent = "❌ " + (_var1986?.message || "Auto-solve error");
      }
      return false;
    } finally {
      if (_var1944) {
        _var1944.disabled = false;
        _var1944.textContent = "Auto";
      }
    }
  }
  async function _var1715(_var1987 = false) {
    if (!_var748) {
      _var648("Auto-solve failed - image captcha not enabled");
      return false;
    }
    const {
      img: _var1988,
      input: _var1989,
      result: _var1990,
      autoSolveTrueCaptchaBtn: _var1991
    } = _var1714();
    if (!_var1988 || !_var1988.src) {
      _var648("Auto-solve failed - no captcha image available");
      return false;
    }
    const _var1992 = GM_getValue(_var33, "");
    const _var1993 = GM_getValue(_var34, "");
    if (!_var753) {
      _var753 = _var1992 || _var31 || "";
    }
    if (!_var777) {
      _var777 = _var1993 || _var32 || "";
    }
    if (!_var753 || _var753.trim() === "" || !_var777 || _var777.trim() === "") {
      _var648("Auto-solve failed - TrueCaptcha API key or User ID not configured");
      if (_var1990) {
        _var1990.style.display = "block";
        _var1990.style.background = "#fee2e2";
        _var1990.style.border = "1px solid #fca5a5";
        _var1990.style.color = "#991b1b";
        _var1990.textContent = "⚠️ TrueCaptcha API key or User ID not set";
      }
      return false;
    }
    try {
      if (_var1991) {
        _var1991.disabled = true;
        _var1991.innerHTML = `
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                    Solving...
                `;
      }
      _var243("Auto-solving PayNow image captcha via TrueCaptcha...");
      let _var1994 = "";
      const _var1995 = _var1988.src;
      try {
        await new Promise((_var1996, _var1997) => {
          if (_var1988.complete && _var1988.naturalWidth > 0) {
            _var1996();
          } else {
            _var1988.onload = _var1996;
            _var1988.onerror = _var1997;
            // TOLOOK
            setTimeout(() => _var1997(new Error("Image load timeout")), 5000);
          }
        });
        const _var1998 = document.createElement("canvas");
        _var1998.width = _var1988.naturalWidth || _var1988.width;
        _var1998.height = _var1988.naturalHeight || _var1988.height;
        const _var1999 = _var1998.getContext("2d");
        _var1999.drawImage(_var1988, 0, 0);
        _var1994 = _var1998.toDataURL("image/png").split(",")[1];
      } catch (_var2000) {
        if (_var1995.startsWith("data:")) {
          _var1994 = _var1995.split(",")[1] || "";
        } else if (_var1995.startsWith("http://") || _var1995.startsWith("https://")) {
          const _var2001 = await fetch(_var1995, {
            method: "GET",
            credentials: "include",
            mode: "cors"
          });
          if (!_var2001.ok) {
            throw new Error("Image fetch failed: " + _var2001.status);
          }
          const _var2002 = await _var2001.blob();
          _var1994 = await new Promise((_var2003, _var2004) => {
            const _var2005 = new FileReader();
            _var2005.onloadend = () => {
              const _var2006 = _var2005.result;
              if (typeof _var2006 === "string" && _var2006.includes(",")) {
                _var2003(_var2006.split(",")[1]);
              } else {
                _var2004(new Error("Invalid FileReader result"));
              }
            };
            _var2005.onerror = () => _var2004(new Error("FileReader error"));
            _var2005.readAsDataURL(_var2002);
          });
        } else {
          throw new Error("Unsupported image format for auto-solve");
        }
      }
      if (!_var1994 || _var1994.length < 100) {
        throw new Error("Invalid captcha image payload");
      }
      _var1994 = _var1994.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
      const _var2007 = {
        userid: _var777.trim(),
        apikey: _var753.trim(),
        data: _var1994
      };
      const _var2008 = await fetch("https://api.apitruecaptcha.org/one/gettext", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(_var2007)
      });
      if (!_var2008.ok) {
        throw new Error("TrueCaptcha error: " + _var2008.status);
      }
      const _var2009 = await _var2008.json();
      if (!_var2009 || !_var2009.result || !_var2009.result.trim()) {
        throw new Error("TrueCaptcha error: " + (_var2009.error || "No result returned"));
      }
      const _var2010 = _var2009.result.trim();
      if (_var1989) {
        _var1989.value = _var2010;
      }
      if (_var1990) {
        _var1990.style.display = "block";
        _var1990.style.background = "#dbeafe";
        _var1990.style.border = "1px solid #93c5fd";
        _var1990.style.color = "#1e40af";
        _var1990.textContent = "🤖 Solved: " + _var2010;
      }
      _var647("Image captcha solved via TrueCaptcha");
      if (!_var1987) {
        const _var2011 = _var376();
        _var243("Waiting " + _var2011 + " seconds before verifying payment captcha...");
        await new Promise(_var2012 => // TOLOOK
        setTimeout(_var2012, _var2011 * 1000));
      } else {
        _var243("Skipping delay - verifying captcha immediately...");
      }
      const _var2013 = await _var1870();
      if (_var2013) {
        _var647("Solved image captcha verified successfully");
      } else {
        _var648("Image captcha verification failed");
      }
      return _var2013;
    } catch (_var2014) {
      _var648(_var2014?.message ? "Auto-solve failed: " + _var2014.message : "Auto-solve failed");
      if (_var1990) {
        _var1990.style.display = "block";
        _var1990.style.background = "#fee2e2";
        _var1990.style.border = "1px solid #fca5a5";
        _var1990.style.color = "#991b1b";
        _var1990.textContent = "❌ " + (_var2014?.message || "Auto-solve error");
      }
      return false;
    } finally {
      if (_var1991) {
        _var1991.disabled = false;
        _var1991.innerHTML = `
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                    Auto2
                `;
      }
    }
  }
  async function _var1907() {
    if (!_var721) {
      _var648("Please select a date first");
      return;
    }
    _var243("Processing payment...");
    const _var2015 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    const _var2016 = GM_getValue(_var35, _var748 ? "true" : "false");
    const _var2017 = _var748 && (_var2016 === true || _var2016 === "true");
    return _var426(async _var2018 => {
      if (_var353()) {
        _var1133("paynow");
      }
      const _var2019 = _var140("pay-now", "k5t0g8_token_y4v9f6");
      const _var2020 = !_var2017 && GM_getValue("pay_now_captcha_enabled", true);
      let _var2021 = null;
      if (_var2017) {
        if (_var751 && _var749) {
          _var243("✅ Using existing verified image captcha token");
        }
        _var736 = null;
        _var128.captchaToken = null;
      } else if (_var2020) {
        const _var2022 = !!(_var737 && _var738);
        const _var2023 = !!(_var739 && _var736);
        if (_var2022) {
          _var243("✅ Using manually solved captcha token");
          _var2021 = _var737;
          _var736 = _var737;
          _var128.captchaToken = _var737;
        } else if (_var2023) {
          _var243("✅ Reusing existing valid captcha token");
          _var2021 = _var739;
          _var736 = _var739;
          _var128.captchaToken = _var739;
        } else {
          _var243("⚠️ No valid captcha token found. Auto-solving new captcha...");
          _var736 = null;
          _var128.captchaToken = null;
          _var738 = false;
          _var739 = null;
          const _var2024 = await _var1037();
          if (!_var2024) {
            throw new Error("Captcha solving failed, cannot proceed with payment");
          }
          _var739 = _var2024;
          _var2021 = _var2024;
          _var736 = _var2024;
          _var128.captchaToken = _var2024;
          _var647("✅ New captcha solved successfully. Proceeding with payment...");
        }
      } else {
        _var243("Captcha solving is DISABLED - proceeding with direct payment...");
      }
      const _var2025 = _var148("pay-now", {});
      const _var2026 = _var721 || _var2025.appointment_date || _var2025.date || "";
      const _var2027 = _var722 || _var2025.appointment_time || _var2025.time || "";
      const _var2028 = _var2025.selected_payment || _var2025.payment || {};
      const _var2029 = _var2028.name || _var2025.payment_name || "VISA";
      const _var2030 = _var2028.slug || _var2025.payment_slug || "visacard";
      const _var2031 = _var2028.link || _var2025.payment_link || "";
      let _var2032 = null;
      if (_var2017) {
        _var2032 = _var749;
      } else if (_var2020 && _var2021) {
        _var2032 = _var2021;
      }
      if (!_var2026 || !_var2027) {
        throw new Error("Appointment date and time are required");
      }
      let _var2033 = null;
      const _var2034 = _var760("paynow");
      if (_var2034) {
        _var243("✅ Using cached PayNow X-data token - SKIPPING request 1 (from cache, age: " + Math.round((Date.now() - _var759.paynow.timestamp) / 1000) + "s)");
        _var2033 = _var2034;
        _var243("✅ Proceeding directly to main PayNow request with cached X-data token (length: " + _var2033.length + ")");
      } else {
        try {
          _var243("🔐 Step 1: Fetching paynow token (first request) before payment submission...");
          _var2033 = await _var1343(_var2018);
          if (!_var2033) {
            _var648("❌ Paynow token fetch returned null");
            throw new Error("Failed to fetch paynow token - token is null");
          }
          _var243("✅ Fetched new paynow token (length: " + _var2033.length + ")");
        } catch (_var2035) {
          _var648("⚠️ Failed to fetch paynow token: " + _var2035.message);
          if (_var2035.message && _var2035.message.includes("HTTP error")) {
            const _var2036 = _var760("paynow");
            if (_var2036) {
              _var243("✅ Using cached paynow token after HTTP error (from cache, age: " + Math.round((Date.now() - _var759.paynow.timestamp) / 1000) + "s)");
              _var2033 = _var2036;
            } else {
              throw _var2035;
            }
          } else {
            throw _var2035;
          }
        }
      }
      _var243("Sending payment request...");
      _var425("Processing payment...", "#f59e0b");
      const _var2037 = new FormData();
      _var2037.append("1_appointment_date", _var2026);
      _var2037.append("1_appointment_time", _var2027);
      if (_var2032) {
        _var2037.append("1_k5t0g8_token_y4v9f6", _var2032);
      }
      _var2037.append("1_selected_payment[name]", _var2029);
      _var2037.append("1_selected_payment[slug]", _var2030);
      _var2037.append("1_selected_payment[link]", _var2031 || "");
      _var2037.append("1_X-data", _var2033);
      const _var2038 = JSON.stringify(["$K1"]);
      _var2037.append("0", _var2038);
      const _var2039 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "next-action": "402ac1cb0c7f16e4eb33a6da6e6c5bd3bfdb3e62d3",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22application%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Whale\";v=\"4\", \"Not.A/Brand\";v=\"99\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"4.35.351.16\"",
        "sec-ch-ua-full-version-list": "\"Chromium\";v=\"142.0.7444.265\", \"Whale\";v=\"4.35.351.16\", \"Not.A/Brand\";v=\"99.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var2040 = new AbortController();
      if (_var2018) {
        _var2018.addEventListener("abort", () => _var2040.abort(), {
          once: true
        });
      }
      const _var2041 = await fetch("https://payment.ivacbd.com/application", {
        method: "POST",
        headers: _var2039,
        body: _var2037,
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/application",
        signal: _var2040.signal
      });
      _var708(_var2041, "https://payment.ivacbd.com/application");
      if (!_var2041.ok) {
        const _var2042 = new Error("HTTP error! status: " + _var2041.status);
        _var2042.status = _var2041.status;
        throw _var2042;
      }
      let _var2043;
      const _var2044 = _var2041.headers.get("content-type");
      const _var2045 = await _var2041.text();
      if (_var2044 && _var2044.includes("application/json")) {
        try {
          _var2043 = JSON.parse(_var2045);
        } catch {
          _var2043 = null;
        }
      }
      if (!_var2043 || !_var2043.status_code && !_var2043.message) {
        try {
          const _var2046 = _var2045.split("\n");
          for (const _var2047 of _var2046) {
            const _var2048 = _var2047.replace(/^\d+:/, "").trim();
            if (_var2048.includes("\"status_code\"") || _var2048.includes("\"message\"")) {
              try {
                const _var2049 = JSON.parse(_var2048);
                if (_var2049.status_code !== undefined || _var2049.message !== undefined) {
                  _var2043 = _var2049;
                  _var243("[PayNow] Successfully parsed response from line with status_code: " + _var2049.status_code + ", message: " + _var2049.message);
                  break;
                }
              } catch (_var2050) {
                const _var2051 = _var2048.indexOf("{");
                if (_var2051 !== -1) {
                  let _var2052 = _var2048.substring(_var2051);
                  let _var2053 = 0;
                  let _var2054 = -1;
                  for (let _var2055 = 0; _var2055 < _var2052.length; _var2055++) {
                    if (_var2052[_var2055] === "{") {
                      _var2053++;
                    }
                    if (_var2052[_var2055] === "}") {
                      _var2053--;
                      if (_var2053 === 0) {
                        _var2054 = _var2055 + 1;
                        break;
                      }
                    }
                  }
                  if (_var2054 !== -1) {
                    try {
                      const _var2056 = JSON.parse(_var2052.substring(0, _var2054));
                      if (_var2056.status_code !== undefined || _var2056.message !== undefined) {
                        _var2043 = _var2056;
                        _var243("[PayNow] Successfully parsed response with status_code: " + _var2056.status_code + ", message: " + _var2056.message);
                        break;
                      }
                    } catch (_var2057) {}
                  }
                }
              }
            }
          }
          if (!_var2043 || !_var2043.status_code && !_var2043.message) {
            const _var2058 = _var2045.indexOf("\"status_code\"");
            if (_var2058 !== -1) {
              let _var2059 = _var2058;
              while (_var2059 > 0 && _var2045[_var2059] !== "{") {
                _var2059--;
              }
              if (_var2045[_var2059] === "{") {
                let _var2060 = _var2045.substring(_var2059);
                let _var2061 = 0;
                let _var2062 = -1;
                for (let _var2063 = 0; _var2063 < _var2060.length; _var2063++) {
                  if (_var2060[_var2063] === "{") {
                    _var2061++;
                  }
                  if (_var2060[_var2063] === "}") {
                    _var2061--;
                    if (_var2061 === 0) {
                      _var2062 = _var2063 + 1;
                      break;
                    }
                  }
                }
                if (_var2062 !== -1) {
                  _var2060 = _var2060.substring(0, _var2062);
                  try {
                    const _var2064 = JSON.parse(_var2060);
                    if (_var2064.status_code !== undefined || _var2064.message !== undefined) {
                      _var2043 = _var2064;
                      _var243("[PayNow] Successfully parsed response with status_code: " + _var2064.status_code + ", message: " + _var2064.message);
                    }
                  } catch (_var2065) {
                    _var648("[PayNow] Failed to parse JSON object: " + _var2065.message);
                  }
                }
              }
            }
          }
          if (!_var2043 || !_var2043.status_code && !_var2043.message) {
            const _var2066 = _var2045.indexOf("{\"message\"");
            if (_var2066 !== -1) {
              let _var2067 = _var2045.substring(_var2066);
              let _var2068 = 0;
              let _var2069 = -1;
              for (let _var2070 = 0; _var2070 < _var2067.length; _var2070++) {
                if (_var2067[_var2070] === "{") {
                  _var2068++;
                }
                if (_var2067[_var2070] === "}") {
                  _var2068--;
                  if (_var2068 === 0) {
                    _var2069 = _var2070 + 1;
                    break;
                  }
                }
              }
              if (_var2069 !== -1) {
                _var2067 = _var2067.substring(0, _var2069);
                try {
                  const _var2071 = JSON.parse(_var2067);
                  if (_var2071.message) {
                    const _var2072 = _var2043?._parts;
                    _var2043 = _var2071;
                    if (_var2072) {
                      _var2043._parts = _var2072;
                    }
                  }
                } catch (_var2073) {}
              }
            }
          }
          if (!_var2043 || !_var2043.status_code && !_var2043.message) {
            const _var2074 = /"message"\s*:\s*"([^"]+)"/;
            const _var2075 = _var2045.match(_var2074);
            if (_var2075) {
              const _var2076 = /"status_code"\s*:\s*(\d+)/;
              const _var2077 = _var2045.match(_var2076);
              if (_var2077) {
                const _var2078 = parseInt(_var2077[1]);
                _var2043 = {
                  message: _var2075[1],
                  status_code: _var2078
                };
              } else {
                _var2043 = {
                  message: _var2075[1]
                };
              }
            }
          }
        } catch (_var2079) {
          const _var2080 = /"message"\s*:\s*"([^"]+)"/;
          const _var2081 = _var2045.match(_var2080);
          const _var2082 = /"status_code"\s*:\s*(\d+)/;
          const _var2083 = _var2045.match(_var2082);
          if (_var2081 || _var2083) {
            _var2043 = {};
            if (_var2081) {
              _var2043.message = _var2081[1];
            }
            if (_var2083) {
              _var2043.status_code = parseInt(_var2083[1]);
            }
          }
        }
      }
      try {
        const _var2084 = [];
        const _var2085 = /\{[^{}]*"status_code"\s*:\s*(\d+)[^{}]*\}/g;
        let _var2086;
        while ((_var2086 = _var2085.exec(_var2045)) !== null) {
          const _var2087 = _var2086[0];
          try {
            const _var2088 = JSON.parse(_var2087);
            if (_var2088 && (_var2088.status_code !== undefined || _var2088.message !== undefined)) {
              _var2084.push(_var2088);
            }
          } catch (_var2089) {}
        }
        if (_var2084.length > 0) {
          const _var2090 = _var2084.find(_var2091 => typeof _var2091.status_code === "number" && _var2091.status_code !== 200);
          const _var2092 = _var2084.find(_var2093 => typeof _var2093.status_code === "number" && _var2093.status_code === 200);
          const _var2094 = _var2090 || _var2092 || _var2084[0];
          const _var2095 = _var2043 && (_var2043.status_code !== undefined || _var2043.message !== undefined);
          const _var2096 = !!_var2043 && (_var2043.status === "success" || _var2043.success === true || _var2043.status_code === 200);
          if (!_var2095 || _var2096 && _var2090) {
            _var2043 = _var2094;
          }
          _var243("[PayNow] Final chosen segment from response stream - status_code: " + _var2043.status_code + ", message: " + _var2043.message);
        }
      } catch (_var2097) {
        _var243("[PayNow] Segment collection failed, continuing with existing responseData. Reason: " + _var2097.message);
      }
      if (_var2043?.status_code === 422) {
        const _var2098 = {
          status: 422,
          message: _var2043?.message || "Payment processing failed",
          data: _var2043
        };
        _var243("[PayNow] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var2098.message + ", data.status_code: " + _var2098.data.status_code);
        throw _var2098;
      }
      if (!_var2043 || typeof _var2043 !== "object") {
        _var2043 = _var2043 || {};
        _var243("[PayNow] responseData was null/undefined, initialized as empty object");
      }
      _var243("[PayNow] Parsed responseData: " + JSON.stringify(_var2043) + ", keys: " + Object.keys(_var2043).join(", "));
      const _var2099 = _var2043?.status === "success" || _var2043?.status_code === 200 || _var2043?.success === true || _var2041?.status === 200;
      if (!_var2099) {
        const _var2100 = {
          status: _var2041?.status || 422,
          message: _var2043?.message || "Payment processing failed",
          data: _var2043
        };
        _var243("[PayNow] Throwing error - status: " + _var2100.status + ", message: " + _var2100.message + ", data.status_code: " + _var2100.data?.status_code + ", data keys: " + Object.keys(_var2100.data || {}));
        throw _var2100;
      }
      return {
        status: _var2041.status,
        data: _var2043,
        paymentData: _var2025,
        token: _var2021
      };
    }, async (_var2101, _var2102) => {
      const _var2103 = _var2101.data?.message || _var2101.message || "Payment processed successfully";
      const _var2104 = _var2101.data?.status_code ?? null;
      if (_var2104 !== null && _var2104 !== 200) {
        const _var2105 = _var2101.data?.message || "Payment processing failed";
        const _var2106 = _var2105 + " (status_code: " + _var2104 + ")";
        _var243("[PayNow] Non-200 status_code in success callback path: " + _var2106);
        _var810(_var2106, "#ef4444", null, _var2104);
        const _var2107 = document.getElementById("ivac-paynow-captcha-status");
        if (_var2107) {
          _var2107.textContent = _var2106;
          _var2107.style.color = "#ef4444";
        }
        return;
      }
      const _var2108 = _var2104 ?? (_var2101?.status || 200);
      _var243("[PayNow] Success response data: " + JSON.stringify(_var2101.data));
      _var243("[PayNow] Response status_code: " + _var2108 + ", message: " + _var2103);
      if (_var2103) {
        _var647(_var2103, null, _var2108);
        const _var2109 = _var2104 ? _var2103 + " (status_code: " + _var2104 + ")" : _var2103;
        _var810(_var2109, "#10b981", null, _var2108);
      }
      _var737 = null;
      _var738 = false;
      const _var2110 = document.getElementById("ivac-paynow-captcha-status");
      if (_var2110) {
        _var2110.textContent = "✅ Payment successful - Ready for next payment";
        _var2110.style.color = "#10b981";
      }
      if (_var2017) {
        _var243("✅ Image captcha token preserved for reuse");
      }
      const _var2111 = _var2101.data?.data?.url;
      if (_var2111) {
        try {
          _var2112(_var2111);
        } catch (_var2113) {
          _var648("Failed to open payment modal: " + _var2113.message);
        }
      }
      if (_var353()) {
        _var1133("clear");
      }
      if (_var353()) {
        _var552(_var2102, () => {
          _var243("Payment processing completed, checking for next steps...");
        });
      }
    }, "Payment processing", {
      retryOn422: true,
      msgEl: _var2015,
      show419ServerMessage: true,
      on419: () => {
        if (_var353()) {
          _var243("Session expired, restarting payment processing...");
          _var1907();
        }
      },
      custom401Msg: "You are logged out. Please log in.",
      custom422Msg: "Payment processing failed. Please try again."
    });
  }
  function _var1018(_var2114, _var2115 = "#333", _var2116 = null) {
    _var810(_var2114, _var2115, "login", _var2116);
  }
  function _var1019(_var2117, _var2118 = "#333", _var2119 = null) {
    _var810(_var2117, _var2118, "submit", _var2119);
  }
  function _var2120(_var2121, _var2122 = "#333") {
    const _var2123 = document.getElementById("ivac-status-message");
    if (_var2123) {
      _var2123.textContent = _var2121;
      _var2123.style.color = _var2122;
    }
  }
  async function _var2124() {
    const _var2125 = _var128.personalInfo.phone || "";
    if (!_var2125 || _var2125.length !== 11) {
      _var1018("Please configure your phone number in Profile Manager first", "#ff4444");
      return;
    }
    const _var2126 = document.getElementById("ivac-login-status");
    await _var561(async _var2127 => {
      const _var2128 = GM_getValue("send_verification_captcha_enabled", true);
      if (_var2128) {
        const _var2129 = !!(_var742 && _var743);
        if (_var2129) {
          _var243("✅ Using manually solved captcha token");
          _var736 = _var742;
          _var128.captchaToken = _var742;
          _var742 = null;
          _var743 = false;
          _var1018("Using pre-solved captcha! Sending verification...", "#00C851", 200);
        } else {
          _var1018("Solving Turnstile...", "#4285f4");
          await _var1031(_var80.getSiteKey("mobile-verify", "turnstile"));
          if (!_var736) {
            throw new Error("Turnstile solve failed");
          }
          _var128.captchaToken = _var736;
          _var1018("Turnstile solved! Sending verification...", "#00C851", 200);
        }
      } else {
        _var1018("Captcha solving is DISABLED - sending verification directly...", "#4285f4");
      }
      const _var2130 = _var148("mobile-verify", {});
      if (_var2128 && _var736) {
        _var2130.captcha_token = _var736;
      } else {
        delete _var2130.captcha_token;
      }
      const _var2131 = await _var872(_var98.getEndpointUrl("mobile-verify"), "POST", _var2130, false);
      if (!(_var2131?.data?.status === "success" || _var2131?.data?.success) || _var2131?.data?.status !== "success") {
        let _var2132 = null;
        if (_var2131?.status !== undefined && _var2131?.status !== null && _var2131?.status !== "" && _var2131?.status !== false) {
          _var2132 = _var2131.status;
        }
        if (_var2132 === _var2131?.httpStatus) {
          _var2132 = null;
        }
        const _var2133 = {
          ..._var2131?.data
        };
        delete _var2133.status_code;
        delete _var2133.statusCode;
        _var2133.status_code = _var2132;
        throw {
          status: 422,
          message: _var2131?.data?.message || _var2131?.message || "Verification failed",
          data: _var2133
        };
      }
      let _var2134 = null;
      if (_var2131?.status !== undefined && _var2131?.status !== null && _var2131?.status !== "" && _var2131?.status !== false) {
        _var2134 = _var2131.status;
      }
      if (_var2134 === _var2131?.httpStatus) {
        _var2134 = null;
      }
      return {
        status: _var2134,
        data: _var2131.data,
        verificationPayload: _var2130,
        turnstileToken: _var736
      };
    }, async (_var2135, _var2136) => {
      const _var2137 = _var2135.data?.message || "Verification code sent";
      const _var2138 = _var2135?.status || null;
      _var810(_var2137, "#00C851", "login", _var2138);
      _var736 = null;
      _var128.captchaToken = null;
      _var742 = null;
      _var743 = false;
      if (_var348() || _var352()) {
        _var675();
      }
      if (_var352()) {
        // TOLOOK
        setTimeout(() => {
          _var243("Auto-proceeding to login with password...");
          _var2139();
        }, 2000);
      }
    }, "Mobile verification", {
      retryOn422: true,
      msgEl: _var2126,
      custom401Message: "Authentication required for mobile verification",
      show419ServerMessage: true
    });
  }
  async function _var2139() {
    const _var2140 = _var128.personalInfo.phone || "";
    const _var2141 = _var128.personalInfo.password || "";
    if (!_var2140 || _var2140.length !== 11) {
      _var1018("Please configure your phone number in Profile Manager first", "#ff4444");
      return;
    }
    if (!_var2141) {
      _var1018("Please configure your password in Profile Manager first", "#ff4444");
      return;
    }
    const _var2142 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    await _var561(async _var2143 => {
      const _var2144 = _var148("login", {});
      const _var2145 = await _var928(_var98.getEndpointUrl("login"), "POST", _var2144, false);
      if (_var2145?.data?.status !== "success" || !_var2145?.data?.data?.access_token) {
        throw {
          status: _var2145?.status || 422,
          message: _var2145?.data?.message || _var2145?.message || "Login failed",
          data: _var2145?.data
        };
      }
      return {
        status: 200,
        data: _var2145.data,
        loginPayload: _var2144
      };
    }, async (_var2146, _var2147) => {
      _var238(_var2146.data.data.access_token, _var2146.data);
      const _var2148 = _var2146.data?.message || "Login successful! Token stored with advanced sync";
      _var1018(_var2148, "#00C851", 200);
      if (_var348()) {
        _var676();
      }
      _var128.captchaToken = null;
      const _var2149 = _var348();
      const _var2150 = _var353();
      _var243("🔍 Auto check - Auto Retry: " + _var2149 + ", Auto Process: " + _var2150);
      if (_var2149 || _var2150) {
        _var243("🔐 Auto enabled - Fetching __device_id__ token IMMEDIATELY after login (first request)...");
        _var1055().then(_var2151 => {
          if (_var2151) {
            _var647("✅ __device_id__ token fetched and stored successfully (first request, length: " + _var2151.length + ")");
          } else {
            _var648("❌ __device_id__ token fetch returned null");
          }
        }).catch(_var2152 => {
          _var648("❌ Failed to fetch __device_id__ token after login: " + _var2152.message);
        });
      } else {
        _var243("ℹ️ Auto is disabled - skipping __device_id__ token fetch");
      }
      if (_var348()) {
        _var1049().catch(_var2153 => {
          _var648("Failed to solve application turnstile after login: " + _var2153.message);
        });
      }
      if (_var348()) {
        const _var2154 = _var382();
        // TOLOOK
        setTimeout(() => {
          _var243("Auto retry enabled - Triggering application submit after " + _var2154 + " second delay (second request)...");
          _var491();
        }, _var2154 * 1000);
      }
      if (_var352()) {
        // TOLOOK
        setTimeout(() => {
          _var243("Login successful - Auto-switching to Submit tab...");
          const _var2155 = document.querySelector(".ivac-tab:nth-child(2)");
          if (_var2155) {
            _var2155.click();
          } else {
            _var1578(1);
          }
        }, 2000);
      } else {
        // TOLOOK
        setTimeout(() => {
          _var243("Login successful - Auto-switching to Submit tab...");
          const _var2156 = document.querySelector(".ivac-tab:nth-child(2)");
          if (_var2156) {
            _var2156.click();
          } else {
            _var1578(1);
          }
        }, 2000);
      }
    }, "Login with password", {
      retryOn422: true,
      messageElement: _var2142,
      custom401Message: "Authentication failed. Please check credentials.",
      show419ServerMessage: true
    });
  }
  async function _var2157() {
    const _var2158 = _var128.personalInfo.phone || "";
    const _var2159 = _var128.personalInfo.password || "";
    const _var2160 = document.getElementById("ivac-login-otp")?.value?.trim() || "";
    if (!_var2158 || _var2158.length !== 11) {
      _var1018("Please configure your phone number in Profile Manager first", "#ff4444");
      return;
    }
    if (!_var2159) {
      _var1018("Please configure your password in Profile Manager first", "#ff4444");
      return;
    }
    if (!_var2160 || _var2160.trim() === "") {
      _var1018("Please enter a valid OTP", "#ff4444");
      return;
    }
    const _var2161 = document.querySelector("#ivac-bgd-content .ivac-status-panel");
    await _var561(async _var2162 => {
      const _var2163 = _var148("login-otp", {});
      const _var2164 = await _var928(_var98.getEndpointUrl("login-otp"), "POST", _var2163, false);
      if (!(_var2164?.data?.status === "success" || _var2164?.data?.success) || _var2164?.data?.status !== "success") {
        throw {
          status: _var2164?.status || 422,
          message: _var2164?.data?.message || _var2164?.message || "OTP verification failed",
          data: _var2164?.data
        };
      }
      return {
        status: 200,
        data: _var2164.data,
        otpPayload: _var2163
      };
    }, async (_var2165, _var2166) => {
      let _var2167 = null;
      if (_var2165.data) {
        const _var2168 = _var2165.data._parts || null;
        if (_var2168 && !_var2165.data._parts) {
          _var2165.data._parts = _var2168;
          _var243("[LoginOTP] Restored _parts to result.data");
        }
        _var2167 = _var242(_var2165.data);
        if (_var2167) {
          _var243("[LoginOTP] ✓ Photo extracted from response (length: " + _var2167.length + ", type: " + (_var2167.startsWith("data:") ? "data URL" : _var2167.startsWith("http") ? "HTTP URL" : "other") + ")");
          _var244(_var2165.data, _var2167);
        } else {
          _var648("[LoginOTP] ⚠ No photo found in response - checking structure...");
          if (_var2165.data._parts) {
            _var243("[LoginOTP] _parts keys: " + Object.keys(_var2165.data._parts).join(", "));
            if (_var2165.data._parts.d) {
              _var243("[LoginOTP] Attempting direct extraction from part 'd'...");
              const _var2169 = _var242({
                _parts: _var2165.data._parts
              });
              if (_var2169) {
                _var2167 = _var2169;
                _var243("[LoginOTP] ✓ Photo extracted directly from part 'd' (length: " + _var2167.length + ")");
                _var244(_var2165.data, _var2167);
              }
            }
          }
        }
      }
      if (_var2165.data?.data?.access_token) {
        _var238(_var2165.data.data.access_token, _var2165.data);
        const _var2170 = _var2165.data?.message || "OTP verified! Token stored with advanced sync";
        _var1018(_var2170, "#00C851", 200);
        if (_var2167) {}
        if (_var348()) {
          _var676();
        }
        const _var2171 = _var348();
        const _var2172 = _var353();
        _var243("🔍 Auto check - Auto Retry: " + _var2171 + ", Auto Process: " + _var2172);
        if (_var2171 || _var2172) {
          _var243("🔐 Auto enabled - Fetching __device_id__ token IMMEDIATELY after login (first request)...");
          _var1055().then(_var2173 => {
            if (_var2173) {
              _var647("✅ __device_id__ token fetched and stored successfully (first request, length: " + _var2173.length + ")");
            } else {
              _var648("❌ __device_id__ token fetch returned null");
            }
          }).catch(_var2174 => {
            _var648("❌ Failed to fetch __device_id__ token after login: " + _var2174.message);
          });
        } else {
          _var243("ℹ️ Auto is disabled - skipping __device_id__ token fetch");
        }
        if (_var348()) {
          _var1049().catch(_var2175 => {
            _var648("Failed to solve application turnstile after login: " + _var2175.message);
          });
        }
        if (_var348()) {
          // TOLOOK
          setTimeout(() => {
            _var243("Auto retry enabled - Triggering application submit after 50 second delay (second request)...");
            _var491();
          }, 50000);
        }
        // TOLOOK
        setTimeout(() => {
          _var243("Login successful - Auto-switching to Submit tab...");
          const _var2176 = document.querySelector(".ivac-tab:nth-child(2)");
          if (_var2176) {
            _var2176.click();
          } else {
            _var1578(1);
          }
        }, 2000);
      } else {
        if (_var2165.data) {
          _var238(null, _var2165.data);
        }
        _var1018(_var2165.data?.message || "OTP verified! (Token in HttpOnly cookie)", "#00C851");
        if (_var2167) {}
        if (_var348()) {
          _var676();
        }
      }
    }, "Login with OTP", {
      retryOn422: false,
      messageElement: _var2161,
      custom401Message: "Authentication failed. Please check OTP.",
      show419ServerMessage: true
    });
  }
  function _var2177() {
    try {
      clearTimeout(_var732);
      clearInterval(_var733);
      _var732 = null;
      _var733 = null;
      _var735 = false;
      _var1066();
      _var1018("Stopped", "#f59e0b");
    } catch (_var2178) {}
  }
  function _var2179() {
    try {
      _var1066();
      clearTimeout(_var732);
      clearInterval(_var733);
      _var732 = null;
      _var733 = null;
      _var735 = false;
      if (_var734) {
        _var734 = null;
      }
      _var1018("All login requests stopped", "#f59e0b");
    } catch (_var2180) {}
  }
  function _var2112(_var2181) {
    const _var2182 = String(_var2181);
    const _var2183 = /https?:\/\/securepay\.sslcommerz\.com\//i.test(_var2182);
    const _var2184 = _var2182;
    const _var2185 = /^https:\/\//i.test(_var2184);
    const _var2186 = (() => {
      try {
        const _var2187 = new URL(_var2184);
        _var2187.searchParams.set("cardname", "pathaopay");
        _var2187.searchParams.set("pay", "pathaopay");
        return _var2187.toString();
      } catch (_var2188) {
        const _var2189 = _var2184.includes("?") ? "&" : "?";
        return "" + _var2184 + _var2189 + "cardname=pathaopay&pay=pathaopay";
      }
    })();
    const _var2190 = document.createElement("div");
    _var2190.className = "ivac-modal-overlay";
    const _var2191 = document.createElement("div");
    _var2191.className = "ivac-modal";
    _var2190.appendChild(_var2191);
    const _var2192 = document.createElement("div");
    _var2192.className = "ivac-modal-header";
    _var2192.textContent = "Proceed to SecurePay";
    _var2191.appendChild(_var2192);
    const _var2193 = document.createElement("button");
    _var2193.className = "ivac-modal-close";
    _var2193.textContent = "✕";
    _var2192.appendChild(_var2193);
    const _var2194 = document.createElement("div");
    _var2194.className = "ivac-modal-body";
    const _var2195 = _var2185 ? "target=\"_blank\" rel=\"noopener\"" : "";
    _var2194.innerHTML = "You are being redirected to the payment gateway. The link has been opened in a new tab. <br/><br/>Link: <a href=\"" + _var2184 + "\" " + _var2195 + ">" + _var2184 + "</a>";
    _var2191.appendChild(_var2194);
    if (_var2185) {
      try {
        if (typeof GM_openInTab === "function") {
          GM_openInTab(_var2184, {
            active: true
          });
        } else {
          window.open(_var2184, "_blank", "noopener");
        }
      } catch (_var2196) {}
    } else {
      window.location.href = _var2184;
    }
    const _var2197 = () => {
      if (_var2191._cleanupDragListeners) {
        _var2191._cleanupDragListeners();
      }
      _var2190.remove();
    };
    _var2193.addEventListener("click", _var2197);
    const _var2198 = document.createElement("div");
    _var2198.className = "ivac-modal-actions";
    _var2198.style.cssText = "display: flex; gap: 10px; flex-wrap: nowrap;";
    const _var2199 = _var1073("VISA CARD", function () {
      if (_var2185) {
        try {
          if (typeof GM_openInTab === "function") {
            GM_openInTab(_var2184, {
              active: true
            });
          } else {
            window.open(_var2184, "_blank", "noopener");
          }
        } catch (_var2200) {}
      } else {
        window.open(_var2184, "_blank", "noopener");
      }
    }, "#10b981", "#059669");
    _var2199.style.flex = "1";
    _var2199.style.minWidth = "120px";
    _var2198.appendChild(_var2199);
    const _var2201 = _var1073("Pathao Pay", function () {
      if (_var2185) {
        try {
          if (typeof GM_openInTab === "function") {
            GM_openInTab(_var2186, {
              active: true
            });
          } else {
            window.open(_var2186, "_blank", "noopener");
          }
        } catch (_var2202) {}
      } else {
        window.open(_var2186, "_blank", "noopener");
      }
    }, "#f59e0b", "#d97706");
    _var2201.style.flex = "1";
    _var2201.style.minWidth = "120px";
    _var2198.appendChild(_var2201);
    const _var2203 = _var1073("Close", _var2197, "#9ca3af", "#6b7280");
    _var2203.style.flex = "1";
    _var2203.style.minWidth = "120px";
    _var2198.appendChild(_var2203);
    _var2191.appendChild(_var2198);
    document.body.appendChild(_var2190);
    let _var2204 = false;
    let _var2205 = 0;
    let _var2206 = 0;
    let _var2207 = 0;
    let _var2208 = 0;
    _var2191.style.position = "absolute";
    _var2191.style.left = "50%";
    _var2191.style.top = "50%";
    _var2191.style.transform = "translate(-50%, -50%)";
    const _var2209 = _var2210 => {
      _var2204 = true;
      _var2205 = _var2210.clientX;
      _var2206 = _var2210.clientY;
      const _var2211 = _var2191.getBoundingClientRect();
      _var2207 = _var2211.left;
      _var2208 = _var2211.top;
      _var2191.style.transition = "none";
      _var2210.preventDefault();
    };
    const _var2212 = _var2213 => {
      if (!_var2204) {
        return;
      }
      const _var2214 = _var2213.clientX - _var2205;
      const _var2215 = _var2213.clientY - _var2206;
      _var2191.style.left = _var2207 + _var2214 + "px";
      _var2191.style.top = _var2208 + _var2215 + "px";
      _var2191.style.transform = "none";
    };
    const _var2216 = () => {
      _var2204 = false;
    };
    _var2192.addEventListener("mousedown", _var2209);
    document.addEventListener("mousemove", _var2212);
    document.addEventListener("mouseup", _var2216);
    _var2191._cleanupDragListeners = () => {
      _var2192.removeEventListener("mousedown", _var2209);
      document.removeEventListener("mousemove", _var2212);
      document.removeEventListener("mouseup", _var2216);
    };
  }
  function _var2217() {
    if (document.getElementById("profile-manager-modal")) {
      return;
    }
    const _var2218 = document.createElement("div");
    _var2218.id = "profile-manager-modal";
    _var2218.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            max-height: 70vh;
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 10px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            z-index: 10001;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            cursor: move;
        `;
    const _var2219 = document.createElement("div");
    _var2219.className = "profile-manager-draggable-header";
    _var2219.style.cssText = `
            padding: 12px;
            cursor: move;
            background: #667eea;
            color: white;
            border-radius: 10px 10px 0 0;
            text-align: center;
            font-weight: 800;
            box-shadow: 0 3px 8px rgba(0,0,0,0.1);
            user-select: none;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
    const _var2220 = document.createElement("div");
    _var2220.style.cssText = `
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 800;
            cursor: move;
        `;
    _var2220.innerHTML = `
            <span style="font-size: 18px;">👤</span>
            <span>Profile Manager</span>
        `;
    const _var2221 = document.createElement("button");
    _var2221.id = "close-profile-modal";
    _var2221.style.cssText = `
            position: absolute;
            right: 10px;
            top: 8px;
            width: 28px;
            height: 28px;
            border: none;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
    _var2221.textContent = "✖";
    _var2219.appendChild(_var2220);
    _var2219.appendChild(_var2221);
    const _var2222 = document.createElement("div");
    _var2222.style.cssText = `
            flex: 1;
            overflow-y: auto;
            padding: 6px;
        `;
    const _var2223 = _var2224();
    _var2222.appendChild(_var2223);
    const _var2225 = _var2226();
    _var2222.appendChild(_var2225);
    const _var2227 = _var2228();
    _var2222.appendChild(_var2227);
    const _var2229 = _var2230();
    _var2222.appendChild(_var2229);
    const _var2231 = document.createElement("div");
    _var2231.style.cssText = `
            background: #000;
            padding: 10px 14px;
            border-top: 1px solid #333;
            border-radius: 0 0 10px 10px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        `;
    _var2231.innerHTML = `
            <button id="clear-profile-btn" class="button secondary">Clear</button>
            <button id="save-profile-btn" class="button">Save</button>
        `;
    _var2218.appendChild(_var2219);
    _var2218.appendChild(_var2222);
    _var2218.appendChild(_var2231);
    document.body.appendChild(_var2218);
    document.getElementById("close-profile-modal").addEventListener("click", _var2232 => {
      _var2232.stopPropagation();
      _var2218.remove();
    });
    document.getElementById("clear-profile-btn").addEventListener("click", () => {
      _var128 = {
        personalInfo: {
          ..._var615.personalInfo
        },
        applicationInfo: {
          ..._var615.applicationInfo
        },
        paymentMethod: _var615.paymentMethod,
        profileName: "Default Profile"
      };
      _var2233();
      _var647("Form Cleared");
    });
    document.getElementById("save-profile-btn").addEventListener("click", () => {
      _var2234();
      _var647("Profile Saved Successfully");
      _var2218.remove();
      _var2235();
      _var2236();
    });
    let _var2237 = false;
    let _var2238;
    let _var2239;
    function _var2240(_var2241) {
      if (_var2241.button !== 0) {
        return;
      }
      _var2237 = true;
      const _var2242 = _var2218.getBoundingClientRect();
      _var2238 = _var2241.clientX - _var2242.left;
      _var2239 = _var2241.clientY - _var2242.top;
      _var2218.style.cursor = "grabbing";
      _var2241.preventDefault();
      _var2241.stopPropagation();
    }
    function _var2243(_var2244) {
      if (!_var2237) {
        return;
      }
      const _var2245 = _var2244.clientX - _var2238;
      const _var2246 = _var2244.clientY - _var2239;
      _var2218.style.left = _var2245 + "px";
      _var2218.style.top = _var2246 + "px";
      _var2218.style.transform = "none";
    }
    function _var2247() {
      _var2237 = false;
      _var2218.style.cursor = "";
    }
    _var2219.addEventListener("mousedown", _var2240);
    document.addEventListener("mousemove", _var2243);
    document.addEventListener("mouseup", _var2247);
    document.addEventListener("mouseleave", _var2247);
    _var2219.style.cursor = "move";
    _var2233();
    _var2248();
  }
  function _var2249() {
    if (document.getElementById("retry-delay-modal")) {
      return;
    }
    const _var2250 = document.createElement("div");
    _var2250.id = "retry-delay-modal";
    _var2250.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            background: #ffffff;
            border: 2px solid #a855f7;
            border-radius: 8px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            z-index: 10001;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            cursor: move;
        `;
    const _var2251 = document.createElement("div");
    _var2251.className = "retry-delay-draggable-header";
    _var2251.style.cssText = `
            padding: 8px 12px;
            cursor: move;
            background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
            color: white;
            border-radius: 6px 6px 0 0;
            text-align: center;
            font-weight: 700;
            font-size: 14px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            user-select: none;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
    const _var2252 = document.createElement("div");
    _var2252.style.cssText = `
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            font-weight: 700;
            cursor: move;
            flex: 1;
            justify-content: center;
        `;
    _var2252.textContent = "Auto Retry Delay";
    const _var2253 = document.createElement("button");
    _var2253.id = "close-retry-delay-modal";
    _var2253.style.cssText = `
            position: absolute;
            right: 8px;
            top: 6px;
            width: 24px;
            height: 24px;
            border: none;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
    _var2253.textContent = "✖";
    _var2251.appendChild(_var2252);
    _var2251.appendChild(_var2253);
    const _var2254 = document.createElement("div");
    _var2254.style.cssText = `
            flex: 1;
            padding: 12px;
            background: #ffffff;
        `;
    const _var2255 = [{
      key: "application",
      label: "Application",
      getter: _var382,
      setter: _var383,
      default: _var60
    }, {
      key: "overview",
      label: "Overview",
      getter: _var385,
      setter: _var386,
      default: _var61
    }, {
      key: "send-otp",
      label: "Send Payment OTP",
      getter: _var367,
      setter: _var368,
      default: _var55
    }, {
      key: "payment-vfy",
      label: "Verify Payment OTP",
      getter: _var370,
      setter: _var371,
      default: _var56
    }, {
      key: "get-slot",
      label: "Get Slots",
      getter: _var373,
      setter: _var374,
      default: _var57
    }, {
      key: "auto-vfy",
      label: "Payment Captcha Verify",
      getter: _var376,
      setter: _var377,
      default: _var58
    }, {
      key: "pay-now",
      label: "Paynow",
      getter: _var379,
      setter: _var380,
      default: _var59
    }];
    _var2255.forEach((_var2256, _var2257) => {
      const _var2258 = document.createElement("div");
      _var2258.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0;
                border-bottom: ` + (_var2257 < _var2255.length - 1 ? "1px solid #e5e7eb" : "none") + ";\n            ";
      const _var2259 = document.createElement("div");
      _var2259.style.cssText = `
                font-size: 12px;
                font-weight: 600;
                color: #1f2937;
                flex: 1;
            `;
      _var2259.textContent = _var2256.label;
      const _var2260 = document.createElement("input");
      _var2260.type = "number";
      _var2260.min = "1";
      _var2260.max = "300";
      _var2260.value = _var2256.getter();
      _var2260.id = "retry-delay-input-" + _var2256.key;
      _var2260.dataset.delayKey = _var2256.key;
      _var2260.dataset.defaultValue = _var2256.default;
      _var2260.style.cssText = `
                width: 60px;
                padding: 6px;
                border: 2px solid #d1d5db;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                text-align: center;
                color: #1f2937;
                background: #f9fafb;
                box-sizing: border-box;
            `;
      _var2258.appendChild(_var2259);
      _var2258.appendChild(_var2260);
      _var2254.appendChild(_var2258);
    });
    const _var2261 = document.createElement("div");
    _var2261.style.cssText = `
            background: #f9fafb;
            padding: 10px;
            border-top: 1px solid #e5e7eb;
            border-radius: 0 0 6px 6px;
            display: flex;
            gap: 6px;
            justify-content: center;
        `;
    const _var2262 = document.createElement("button");
    _var2262.id = "save-retry-delay-btn";
    _var2262.textContent = "SAVE";
    _var2262.style.cssText = `
            flex: 1;
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            background: #22c55e;
            color: white;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        `;
    _var2262.addEventListener("mouseenter", () => {
      _var2262.style.background = "#16a34a";
      _var2262.style.transform = "translateY(-1px)";
    });
    _var2262.addEventListener("mouseleave", () => {
      _var2262.style.background = "#22c55e";
      _var2262.style.transform = "translateY(0)";
    });
    const _var2263 = document.createElement("button");
    _var2263.id = "reset-retry-delay-btn";
    _var2263.textContent = "RESET";
    _var2263.style.cssText = `
            flex: 1;
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            background: #3b82f6;
            color: white;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        `;
    _var2263.addEventListener("mouseenter", () => {
      _var2263.style.background = "#2563eb";
      _var2263.style.transform = "translateY(-1px)";
    });
    _var2263.addEventListener("mouseleave", () => {
      _var2263.style.background = "#3b82f6";
      _var2263.style.transform = "translateY(0)";
    });
    _var2261.appendChild(_var2262);
    _var2261.appendChild(_var2263);
    _var2250.appendChild(_var2251);
    _var2250.appendChild(_var2254);
    _var2250.appendChild(_var2261);
    document.body.appendChild(_var2250);
    let _var2264 = false;
    let _var2265;
    let _var2266;
    function _var2267(_var2268) {
      if (_var2268.button !== 0) {
        return;
      }
      _var2264 = true;
      const _var2269 = _var2250.getBoundingClientRect();
      _var2265 = _var2268.clientX - _var2269.left;
      _var2266 = _var2268.clientY - _var2269.top;
      _var2250.style.cursor = "grabbing";
      _var2268.preventDefault();
      _var2268.stopPropagation();
    }
    function _var2270(_var2271) {
      if (!_var2264) {
        return;
      }
      const _var2272 = _var2271.clientX - _var2265;
      const _var2273 = _var2271.clientY - _var2266;
      _var2250.style.left = _var2272 + "px";
      _var2250.style.top = _var2273 + "px";
      _var2250.style.transform = "none";
    }
    function _var2274() {
      _var2264 = false;
      _var2250.style.cursor = "";
    }
    const _var2275 = () => {
      _var2250.remove();
      document.removeEventListener("mousemove", _var2270);
      document.removeEventListener("mouseup", _var2274);
      document.removeEventListener("mouseleave", _var2274);
    };
    _var2253.addEventListener("click", _var2276 => {
      _var2276.stopPropagation();
      _var2275();
    });
    _var2262.addEventListener("click", () => {
      let _var2277 = false;
      const _var2278 = [];
      _var2255.forEach(_var2279 => {
        const _var2280 = document.getElementById("retry-delay-input-" + _var2279.key);
        const _var2281 = parseInt(_var2280.value, 10);
        if (isNaN(_var2281) || _var2281 < 1 || _var2281 > 300) {
          _var2277 = true;
          _var2280.style.borderColor = "#ef4444";
          // TOLOOK
          setTimeout(() => {
            _var2280.style.borderColor = "#d1d5db";
          }, 2000);
        } else {
          _var2279.setter(_var2281);
          _var2278.push(_var2279.label + ": " + _var2281 + "s");
        }
      });
      if (_var2277) {
        alert("Please enter valid delays between 1 and 300 seconds for all fields");
        return;
      }
      _var647("Auto retry delays saved: " + _var2278.join(", "));
      _var2275();
    });
    _var2263.addEventListener("click", () => {
      _var2255.forEach(_var2282 => {
        const _var2283 = document.getElementById("retry-delay-input-" + _var2282.key);
        _var2282.setter(_var2282.default);
        _var2283.value = _var2282.default;
      });
      _var647("All auto retry delays reset to defaults");
    });
    _var2251.addEventListener("mousedown", _var2267);
    document.addEventListener("mousemove", _var2270);
    document.addEventListener("mouseup", _var2274);
    document.addEventListener("mouseleave", _var2274);
    _var2251.style.cursor = "move";
  }
  function _var2224() {
    const _var2284 = document.createElement("div");
    _var2284.style.cssText = `
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 6px;
            padding: 8px;
            margin-bottom: 0px;
        `;
    _var2284.innerHTML = `
            <h4 style="font-size: 11px; font-weight: 600; color: #fff; margin-bottom: 4px;">Profile Management</h4>
            <div style="margin-bottom: 8px;">
                <select id="profile-select" style="width: 100%; padding: 6px 8px; border: 1px solid #555; border-radius: 4px; font-size: 10px; background: #333; color: #fff;">
                    <option value="">Select Profile</option>
                </select>
            </div>
            <div style="display: flex; gap: 4px; margin-bottom: 8px; justify-content: center; flex-wrap: wrap;">
                <button id="new-profile-btn" style="padding: 4px 8px; font-size: 9px; font-weight: 500; border-radius: 3px; border: none; cursor: pointer; background: #06b6d4; color: white;">New</button>
                <button id="delete-profile-btn" style="padding: 4px 8px; font-size: 9px; font-weight: 500; border-radius: 3px; border: none; cursor: pointer; background: #3b82f6; color: white;">Delete</button>
                <button id="export-profile-btn" style="padding: 4px 8px; font-size: 9px; font-weight: 500; border-radius: 3px; border: none; cursor: pointer; background: #10b981; color: white;">Export</button>
                <button id="import-profile-btn" style="padding: 4px 8px; font-size: 9px; font-weight: 500; border-radius: 3px; border: none; cursor: pointer; background: #10b981; color: white;">Import</button>
            </div>
            <input type="file" id="import-file-input" accept=".json" style="display: none;">
        `;
    _var2284.querySelector("#new-profile-btn").addEventListener("click", () => {
      const _var2285 = prompt("Enter profile name:", "Profile " + (_var616.length + 1));
      if (_var2285) {
        _var624(_var2285);
        _var2248();
        _var2233();
        _var2235();
        _var2286();
        _var647("Created new profile: " + _var2285);
      } else if (_var2285 === "") {
        _var648("Profile name cannot be empty");
      }
    });
    _var2284.querySelector("#delete-profile-btn").addEventListener("click", () => {
      if (_var617) {
        const _var2287 = _var616.find(_var2288 => _var2288.id === _var617)?.name;
        _var633(_var617);
        _var2248();
        _var2233();
        _var2235();
        _var2286();
        _var647("Deleted profile: " + _var2287);
      } else {
        _var648("No profile selected to delete");
      }
    });
    _var2284.querySelector("#export-profile-btn").addEventListener("click", _var636);
    _var2284.querySelector("#import-profile-btn").addEventListener("click", () => {
      _var2284.querySelector("#import-file-input").click();
    });
    _var2284.querySelector("#import-file-input").addEventListener("change", _var2289 => {
      _var641(_var2289);
      // TOLOOK
      setTimeout(() => {
        _var2248();
        _var2235();
        _var2286();
      }, 200);
    });
    _var2284.querySelector("#profile-select").addEventListener("change", _var2290 => {
      if (_var2290.target.value) {
        _var2291(_var2290.target.value);
        _var2233();
      }
    });
    return _var2284;
  }
  function _var2226() {
    const _var2292 = document.createElement("div");
    _var2292.style.cssText = `
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 6px;
            padding: 8px;
            margin-bottom: 0px;
        `;
    const _var2293 = _var135.highcomOptions.map(_var2294 => "<option value=\"" + _var2294.value + "\">" + _var2294.text + "</option>").join("");
    const _var2295 = _var135.visaTypes.map(_var2296 => "<option value=\"" + _var2296.value + "\">" + _var2296.text + "</option>").join("");
    const _var2297 = _var135.familyCounts.map(_var2298 => "<option value=\"" + _var2298.value + "\">" + _var2298.text + "</option>").join("");
    _var2292.innerHTML = `
            <h4 style="font-size: 11px; font-weight: 600; color: #fff; margin-bottom: 4px;">Application Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <select id="highcom-select" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                        ` + _var2293 + `
                    </select>
                </div>
                <div style="min-width: 0;">
                    <input type="text" id="webfile-input" placeholder="Web File ID" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <select id="ivac-select" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                        <option value="">Select IVAC Center</option>
                    </select>
                </div>
                <div style="min-width: 0;">
                    <select id="visa-type-select" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                        ` + _var2295 + `
                    </select>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <select id="family-count-select" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                        ` + _var2297 + `
                    </select>
                </div>
                <div style="min-width: 0;">
                    <input type="text" id="visit-purpose-input" placeholder="Visit Purpose" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
            </div>
            <div id="family-members-container"></div>
        `;
    _var2292.querySelector("#highcom-select").addEventListener("change", () => {
      _var2299();
    });
    _var2292.querySelector("#family-count-select").addEventListener("change", () => {
      _var2300();
    });
    return _var2292;
  }
  function _var2228() {
    const _var2301 = document.createElement("div");
    _var2301.style.cssText = `
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 6px;
            padding: 8px;
            margin-bottom: 0px;
        `;
    _var2301.innerHTML = `
            <h4 style="font-size: 11px; font-weight: 600; color: #fff; margin-bottom: 4px;">Personal Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <input type="text" id="full-name-input" placeholder="Full Name" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
                <div style="min-width: 0;">
                    <input type="email" id="email-input" placeholder="Email" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <input type="tel" id="phone-input" placeholder="Phone Number" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
                <div style="min-width: 0;">
                    <input type="password" id="password-input" placeholder="Password" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr; gap: 6px; margin-bottom: 6px; align-items: start;">
                <div style="min-width: 0;">
                    <input type="text" id="personal_app_password" placeholder="App Password" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; box-sizing: border-box; height: 36px;">
                </div>
            </div>
        `;
    return _var2301;
  }
  function _var2230() {
    const _var2302 = document.createElement("div");
    _var2302.style.cssText = `
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 6px;
            padding: 8px;
            margin-bottom: 0px;
        `;
    const _var2303 = _var135.paymentMethods.map(_var2304 => "<option value=\"" + _var2304.value + "\">" + _var2304.name + "</option>").join("");
    _var2302.innerHTML = `
            <h4 style="font-size: 11px; font-weight: 600; color: #fff; margin-bottom: 4px;">Payment Method</h4>
            <select id="payment-method-select" style="width: 100%; padding: 8px 10px; border: 1px solid #555; border-radius: 4px; font-size: 11px; background: #333; color: #fff; height: 36px; box-sizing: border-box;">
                ` + _var2303 + `
            </select>
        `;
    return _var2302;
  }
  function _var2248() {
    const _var2305 = document.getElementById("profile-select");
    if (!_var2305) {
      return;
    }
    _var2305.innerHTML = "<option value=\"\">Select Profile</option>";
    _var616.forEach(_var2306 => {
      const _var2307 = document.createElement("option");
      _var2307.value = _var2306.id;
      _var2307.textContent = _var2306.name;
      if (_var2306.id === _var617) {
        _var2307.selected = true;
      }
      _var2305.appendChild(_var2307);
    });
  }
  function _var2308() {
    const _var2309 = document.getElementById("mobile-verify-input");
    if (_var2309 && _var128.personalInfo.phone) {
      _var2309.value = _var128.personalInfo.phone;
    }
    const _var2310 = document.getElementById("login-password-input");
    if (_var2310 && _var128.personalInfo.password) {
      _var2310.value = _var128.personalInfo.password;
    }
  }
  function _var2291(_var2311) {
    const _var2312 = _var616.find(_var2313 => _var2313.id === _var2311);
    if (_var2312) {
      _var617 = _var2312.id;
      _var128 = {
        ..._var2312.data
      };
      _var626();
      _var647("Switched to profile: " + _var2312.name);
      _var2235();
      _var2236();
      _var2233();
      _var2308();
      _var2286();
      return true;
    }
    return false;
  }
  function _var2233() {
    const _var2314 = document.getElementById("highcom-select");
    const _var2315 = document.getElementById("webfile-input");
    const _var2316 = document.getElementById("ivac-select");
    const _var2317 = document.getElementById("visa-type-select");
    const _var2318 = document.getElementById("family-count-select");
    const _var2319 = document.getElementById("visit-purpose-input");
    if (_var2314) {
      _var2314.value = _var128.applicationInfo.highcom || "1";
      _var2299();
    }
    if (_var2315) {
      const _var2320 = _var128.personalInfo.webFileId || _var128.applicationInfo.webFileId || "";
      _var2315.value = _var2320;
    }
    if (_var2316) {
      _var2316.value = _var128.applicationInfo.ivacId || "";
    }
    if (_var2317) {
      _var2317.value = _var128.applicationInfo.visaTypeId || "13";
    }
    if (_var2318) {
      _var2318.value = _var128.applicationInfo.familyCount || "0";
    }
    if (_var2319) {
      _var2319.value = _var128.applicationInfo.visitPurpose || "";
    }
    const _var2321 = document.getElementById("full-name-input");
    const _var2322 = document.getElementById("email-input");
    const _var2323 = document.getElementById("phone-input");
    const _var2324 = document.getElementById("password-input");
    const _var2325 = document.getElementById("personal_app_password");
    if (_var2321) {
      _var2321.value = _var128.personalInfo.fullName || "";
    }
    if (_var2322) {
      _var2322.value = _var128.personalInfo.email || "";
    }
    if (_var2323) {
      _var2323.value = _var128.personalInfo.phone || "";
    }
    if (_var2324) {
      _var2324.value = _var128.personalInfo.password || "";
    }
    if (_var2325) {
      _var2325.value = _var128.personalInfo.appPassword || "";
    }
    const _var2326 = document.getElementById("payment-method-select");
    if (_var2326) {
      _var2326.value = _var128.paymentMethod || "okwallet";
    }
    _var2300();
  }
  function _var2300() {
    const _var2327 = document.getElementById("family-members-container");
    if (!_var2327) {
      return;
    }
    const _var2328 = parseInt(document.getElementById("family-count-select")?.value || "0");
    _var2327.innerHTML = "";
    for (let _var2329 = 0; _var2329 < _var2328; _var2329++) {
      const _var2330 = document.createElement("div");
      _var2330.style.cssText = `
                background: #333;
                border: 1px solid #555;
                border-radius: 6px;
                padding: 8px;
                margin-bottom: 0px;
            `;
      _var2330.innerHTML = "\n                <h5 style=\"font-size: 12px; font-weight: 600; color: #fff; margin-bottom: 6px; border-bottom: 1px dashed #555; padding-bottom: 4px;\">Family Member " + (_var2329 + 1) + `</h5>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; align-items: start;">
                    <div style="min-width: 0;">
                        <input type="text" placeholder="Name" data-index="` + _var2329 + "\" data-type=\"name\" value=\"" + (_var128.personalInfo.familyMembers?.[_var2329]?.name || "") + `" style="width: 100%; padding: 10px 12px; border: 1px solid #555; border-radius: 5px; font-size: 12px; background: #444; color: #fff; box-sizing: border-box; height: 38px;">
                    </div>
                    <div style="min-width: 0;">
                        <input type="text" placeholder="Web File ID" data-index="` + _var2329 + "\" data-type=\"webfile\" value=\"" + (_var128.personalInfo.familyMembers?.[_var2329]?.webFileNo || "") + `" style="width: 100%; padding: 10px 12px; border: 1px solid #555; border-radius: 5px; font-size: 12px; background: #444; color: #fff; box-sizing: border-box; height: 38px;">
                    </div>
                </div>
            `;
      _var2327.appendChild(_var2330);
    }
  }
  function _var2299() {
    const _var2331 = document.getElementById("highcom-select");
    const _var2332 = document.getElementById("ivac-select");
    if (!_var2331 || !_var2332) {
      return;
    }
    const _var2333 = _var2331.value;
    _var2332.innerHTML = "<option value=\"\">Select IVAC Center</option>";
    const _var2334 = _var135.ivacCenters[_var2333] || [];
    _var2334.forEach(_var2335 => {
      const _var2336 = document.createElement("option");
      _var2336.value = _var2335.value;
      _var2336.textContent = _var2335.text;
      _var2332.appendChild(_var2336);
    });
    if (_var128.applicationInfo.ivacId && _var2334.some(_var2337 => _var2337.value === _var128.applicationInfo.ivacId)) {
      _var2332.value = _var128.applicationInfo.ivacId;
    }
  }
  function _var2234() {
    const _var2338 = document.getElementById("highcom-select");
    const _var2339 = document.getElementById("webfile-input");
    const _var2340 = document.getElementById("ivac-select");
    const _var2341 = document.getElementById("visa-type-select");
    const _var2342 = document.getElementById("family-count-select");
    const _var2343 = document.getElementById("visit-purpose-input");
    if (_var2338) {
      _var128.applicationInfo.highcom = _var2338.value;
    }
    if (_var2339) {
      const _var2344 = _var2339.value;
      _var128.applicationInfo.webFileId = _var2344;
      _var128.personalInfo.webFileId = _var2344;
    }
    if (_var2340) {
      _var128.applicationInfo.ivacId = _var2340.value;
    }
    if (_var2341) {
      _var128.applicationInfo.visaTypeId = _var2341.value;
    }
    if (_var2342) {
      _var128.applicationInfo.familyCount = _var2342.value;
    }
    if (_var2343) {
      _var128.applicationInfo.visitPurpose = _var2343.value;
    }
    const _var2345 = document.getElementById("full-name-input");
    const _var2346 = document.getElementById("email-input");
    const _var2347 = document.getElementById("phone-input");
    const _var2348 = document.getElementById("password-input");
    const _var2349 = document.getElementById("personal_app_password");
    if (_var2345) {
      _var128.personalInfo.fullName = _var2345.value;
    }
    if (_var2346) {
      _var128.personalInfo.email = _var2346.value;
    }
    if (_var2347) {
      _var128.personalInfo.phone = _var2347.value;
    }
    if (_var2348) {
      _var128.personalInfo.password = _var2348.value;
    }
    if (_var2349) {
      _var128.personalInfo.appPassword = _var2349.value;
    }
    _var128.personalInfo.familyMembers = [];
    const _var2350 = document.querySelectorAll("[data-type=\"name\"], [data-type=\"webfile\"]");
    const _var2351 = {};
    _var2350.forEach(_var2352 => {
      const _var2353 = parseInt(_var2352.dataset.index);
      const _var2354 = _var2352.dataset.type;
      const _var2355 = _var2352.value || "";
      if (!_var2351[_var2353]) {
        _var2351[_var2353] = {};
      }
      if (_var2354 === "name") {
        _var2351[_var2353].name = _var2355;
      }
      if (_var2354 === "webfile") {
        _var2351[_var2353].webFileNo = _var2355;
        _var2351[_var2353].againWebFileNo = _var2355;
      }
    });
    _var128.personalInfo.familyMembers = Object.values(_var2351);
    const _var2356 = document.getElementById("payment-method-select");
    if (_var2356) {
      _var128.paymentMethod = _var2356.value;
    }
    if (_var617) {
      const _var2357 = _var616.find(_var2358 => _var2358.id === _var617);
      if (_var2357) {
        _var2357.data = {
          ..._var128
        };
        _var626();
      }
    }
  }
  function _var2359() {
    if (_var617) {
      const _var2360 = _var616.findIndex(_var2361 => _var2361.id === _var617);
      if (_var2360 !== -1) {
        _var616[_var2360].data = {
          ..._var128
        };
        _var626();
      }
    }
  }
  function _var2286() {
    const _var2362 = document.getElementById("header-profile-name");
    const _var2363 = document.getElementById("header-profile-phone");
    const _var2364 = document.getElementById("header-profile-select");
    if (_var2362) {
      _var2362.textContent = _var128.profileName || "Default";
    }
    if (_var2364) {
      _var2365();
    }
    if (_var2363) {
      _var2363.textContent = _var128.personalInfo?.phone || "Not set";
    }
  }
  function _var2365() {
    const _var2366 = document.getElementById("header-profile-select");
    if (!_var2366) {
      return;
    }
    _var2366.innerHTML = "";
    if (_var616 && _var616.length > 0) {
      _var616.forEach(_var2367 => {
        const _var2368 = document.createElement("option");
        _var2368.value = _var2367.id;
        _var2368.textContent = _var2367.name || "Profile " + _var2367.id;
        if (_var2367.id === _var617) {
          _var2368.selected = true;
        }
        _var2366.appendChild(_var2368);
      });
    } else {
      const _var2369 = document.createElement("option");
      _var2369.value = "";
      _var2369.textContent = "No profiles";
      _var2366.appendChild(_var2369);
    }
  }
  function _var2236() {
    _var2365();
  }
  function _var2235() {
    _var2365();
    const _var2370 = document.getElementById("mobile-verify-input");
    if (_var2370) {
      _var2370.value = _var128.personalInfo.phone || "";
    }
    const _var2371 = document.getElementById("login-password-input");
    if (_var2371) {
      _var2371.value = _var128.personalInfo.password || "";
    }
    const _var2372 = document.getElementById("ivac-login-otp");
    if (_var2372) {
      _var2372.value = "";
    }
    const _var2373 = document.getElementById("ivac-status-message");
    if (_var2373) {
      _var2373.textContent = "Profile \"" + (_var128.profileName || "Default Profile") + "\" loaded - Ready for BGD form submission and OTP operations";
    }
    const _var2374 = document.getElementById("ivac-login-status");
    if (_var2374) {
      _var2374.textContent = "Profile \"" + (_var128.profileName || "Default Profile") + "\" loaded - Ready for Login";
    }
    _var2286();
  }
  function _var1578(_var2375) {
    const _var2376 = document.querySelectorAll(".ivac-tab");
    const _var2377 = document.querySelectorAll(".ivac-tab-content");
    _var2376.forEach(_var2378 => _var2378.classList.remove("active"));
    _var2377.forEach(_var2379 => _var2379.classList.remove("active"));
    if (_var2376[_var2375]) {
      _var2376[_var2375].classList.add("active");
    }
    if (_var2377[_var2375]) {
      _var2377[_var2375].classList.add("active");
    }
  }
  function _var2380() {
    if (document.getElementById("ivac-container-root")) {
      document.getElementById("ivac-container-root").remove();
    }
    const _var2381 = document.createElement("div");
    _var2381.id = "ivac-container-root";
    _var2381.style.position = "fixed";
    _var2381.style.left = "20px";
    _var2381.style.top = "20px";
    _var2381.style.zIndex = "999999";
    _var2381.style.transform = "scale(" + _var27 + ")";
    _var2381.style.transformOrigin = "top left";
    _var2381.dataset.scale = _var27.toString();
    document.body.appendChild(_var2381);
    GM_addStyle(`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            #ivac-container {
                background: #ffffff;
                padding: 0;
                border-radius: 4px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                width: 280px;
                border: 1px solid #ddd;
                overflow: hidden;
                user-select: none;
                font-family: Arial, sans-serif;
                position: relative;
            }

            .ivac-tab-content {
                display: none;
                padding: 6px;
            }
            .ivac-tab-content.active {
                display: block;
            }

            .ivac-tab-header {
                display: flex;
                background: #333;
                border-bottom: 1px solid #222;
            }
            .ivac-tab {
                flex: 1;
                text-align: center;
                padding: 6px;
                cursor: pointer;
                font-weight: normal;
                color: #ccc;
                font-size: 11px;
                background: transparent;
            }
            .ivac-tab:hover {
                color: #fff;
                background: #444;
            }
            .ivac-tab.active {
                color: #fff;
                background: #555;
            }

            .ivac-button {
                padding: 6px;
                margin: 2px 0;
                width: 100%;
                color: white;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                font-size: 12px;
                font-weight: normal;
                background: #3b82f6;
            }
            .ivac-button:hover {
                background: #2563eb;
            }
            .ivac-button:active {
                background: #1d4ed8;
            }
            .ivac-button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .ivac-button.loading {
                position: relative;
                color: transparent;
            }

            .ivac-button.loading::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 16px;
                height: 16px;
                margin: -8px 0 0 -8px;
                border: 2px solid rgba(255,255,255,0.3);
                border-top: 2px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            .ivac-button.red {
                background: #ef4444;
            }
            .ivac-button.red:hover {
                background: #dc2626;
            }
            .ivac-button.brown {
                background: #d97706;
            }
            .ivac-button.brown:hover {
                background: #b45309;
            }
            .ivac-button.green {
                background: #10b981;
            }
            .ivac-button.green:hover {
                background: #059669;
            }
            .ivac-button.blue {
                background: #06b6d4;
            }
            .ivac-button.blue:hover {
                background: #0891b2;
            }

            .ivac-toggle {
                position: relative;
                display: inline-block;
                width: 32px;
                height: 16px;
                margin: 0 4px;
            }

            .ivac-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .ivac-toggle-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #999;
                border-radius: 16px;
                border: 1px solid #777;
            }

            .ivac-toggle-slider:before {
                position: absolute;
                content: "";
                height: 12px;
                width: 12px;
                left: 2px;
                top: 1px;
                background: #fff;
                border-radius: 50%;
            }

            .ivac-toggle input:checked + .ivac-toggle-slider {
                background: #8b5cf6;
            }

            .ivac-toggle input:checked + .ivac-toggle-slider:before {
                transform: translateX(16px);
            }

            .ivac-button-row {
                display: flex;
                justify-content: space-between;
                margin: 0;
                gap: 4px;
            }
            .ivac-button-row .ivac-button {
                margin: 0;
                flex: 1;
            }

            .ivac-status-panel {
                --panel-color: #3b82f6;
                position: relative;
                padding: 6px;
                margin: 2px 0;
                background: #1e293b;
                border-radius: 3px;
                border-left: 3px solid var(--panel-color);
                font-size: 12px;
                word-break: break-word;
                text-align: left;
                color: #e2e8f0;
                width: 100%;
                box-sizing: border-box;
                line-height: 1.4;
                display: flex !important;
                align-items: center !important;
                gap: 4px !important;
                flex-wrap: nowrap !important;
                flex-direction: row !important;
            }
            .status-pill {
                display: none;
            }
            .status-pill__pulse,
            .status-pill__icon,
            .status-pill__label {
                display: none;
            }
            .status-pill__code {
                display: inline-block;
                font-size: 10px;
                color: var(--panel-color);
                margin-right: 0;
                font-weight: 600;
                order: 1 !important;
                flex-shrink: 0 !important;
            }
            .ivac-status-panel--compact {
                padding: 4px;
                font-size: 11px;
            }
            .ivac-status-panel .msgText {
                color: #e2e8f0 !important;
                white-space: normal !important;
                word-wrap: break-word !important;
                word-break: break-word !important;
                font-size: 12px !important;
                line-height: 1.4 !important;
                display: block !important;
                flex: 1 1 0% !important;
                order: 3 !important;
                min-width: 0 !important;
                overflow: visible !important;
                text-overflow: clip !important;
                max-width: 100% !important;
                width: auto !important;
                margin-left: 0 !important;
                margin-top: 0 !important;
                margin-bottom: 0 !important;
                padding: 0 !important;
                float: none !important;
                clear: none !important;
            }

            .msgTimer {
                display: inline-block;
                margin-left: 0;
                font-size: 11px;
                color: var(--panel-color);
                order: 2 !important;
                flex-shrink: 0 !important;
                font-weight: 600;
                font-family: monospace;
            }
            .msgTimer .t {
                color: var(--panel-color);
            }
            .ivac-status-panel[data-status-type="success"] {
                --panel-color: #22c55e;
                background: #1e293b;
            }
            .ivac-status-panel[data-status-type="error"] {
                --panel-color: #ef4444;
                background: #1e293b;
            }
            .ivac-status-panel[data-status-type="warn"] {
                --panel-color: #f97316;
                background: #1e293b;
            }
            .ivac-status-panel[data-status-type="info"] {
                --panel-color: #60a5fa;
                background: #1e293b;
            }
            .ivac-input {
                padding: 5px;
                width: 100%;
                border: 1px solid #ccc;
                border-radius: 3px;
                font-size: 12px;
                box-sizing: border-box;
                background: #fff;
                color: #333;
                margin: 2px 0;
                outline: none;
            }
            .ivac-input:focus {
                border-color: #3b82f6;
            }
            .ivac-input::placeholder {
                color: #999;
            }

            .ivac-auth-input {
                padding: 5px;
                width: 100%;
                border: 1px solid #fbbf24;
                border-radius: 3px;
                font-size: 12px;
                box-sizing: border-box;
                background: #fef3c7;
                color: #92400e;
                margin: 2px 0;
                outline: none;
            }
            .ivac-auth-input:focus {
                border-color: #3b82f6;
            }
            .ivac-auth-input::placeholder {
                color: #d97706;
            }
            select {
                width: 100%;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 3px;
                font-size: 12px;
                background: #fff;
                color: #333;
                cursor: pointer;
                outline: none;
            }
            select:focus {
                border-color: #3b82f6;
            }
            select option {
                padding: 8px;
                background: #fff;
                color: #333;
            }
            .ivac-loading {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 2px solid rgba(255,255,255,0.3);
                border-radius: 50%;
                border-top-color: #fff;
                animation: spin 1s linear infinite;
                margin-right: 8px;
                vertical-align: middle;
            }
            .captcha-image {
                max-width: 100%;
                height: auto;
                margin: 8px 0;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .captcha-input-container {
                display: flex;
                gap: 4px;
                margin: 4px 0;
            }
            .captcha-input {
                flex: 1;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 3px;
                font-size: 12px;
                outline: none;
            }
            .captcha-input:focus {
                border-color: #3b82f6;
            }
            .stop-all-btn {
                background: #ef4444 !important;
                width: 100% !important;
                margin-top: 4px !important;
            }
            .stop-all-btn:hover {
                background: #dc2626 !important;
            }
            .ivac-draggable-header {
                padding: 8px;
                cursor: move;
                background: #333;
                color: white;
                text-align: center;
                font-weight: normal;
                margin: 0;
                user-select: none;
                position: relative;
                font-size: 13px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 6px;
            }
            .ivac-dragging {
                opacity: 0.9;
            }
            .ivac-reopen-btn {
                position: fixed;
                left: 20px;
                bottom: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                color: #fff;
                background: #3b82f6;
                cursor: pointer;
                z-index: 100000;
                font-weight: bold;
                font-size: 12px;
            }
            .ivac-reopen-btn:hover {
                background: #2563eb;
            }
            .ivac-footer {
                padding: 8px;
                border-top: 1px solid #ddd;
                font-size: 11px;
                color: #666;
                text-align: center;
                background: #f5f5f5;
            }
            .ivac-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100000;
                pointer-events: auto;
            }
            .ivac-modal {
                width: 400px;
                max-width: 90vw;
                background: #fff;
                border-radius: 4px;
                overflow: hidden;
                border: 1px solid #ddd;
                font-family: Arial, sans-serif;
                position: relative;
                z-index: 100003;
            }

            .ivac-modal-header {
                padding: 8px;
                background: #333;
                color: #fff;
                font-weight: bold;
                text-align: center;
                cursor: move;
                position: relative;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                z-index: 100004;
            }
            .ivac-modal-body {
                padding: 10px;
                color: #333;
                line-height: 1.5;
            }
            .ivac-modal-body a {
                color: #3b82f6;
                word-break: break-all;
                text-decoration: none;
            }
            .ivac-modal-body a:hover {
                text-decoration: underline;
            }
            .ivac-modal-actions {
                display: flex;
                gap: 4px;
                padding: 0 10px 10px 10px;
            }
            .ivac-modal-close {
                position: absolute;
                right: 8px;
                top: 8px;
                width: 24px;
                height: 24px;
                border: none;
                border-radius: 3px;
                background: rgba(255,255,255,0.2);
                color: #fff;
                font-weight: bold;
                cursor: pointer;
            }

            .ivac-modal-close:hover {
                background: rgba(255,255,255,0.3);
            }

            #profile-manager-modal {
                max-width: 85vw !important;
                max-height: 70vh !important;
                overflow: hidden !important;
            }

            #profile-manager-modal > div:nth-child(2) {
                overflow-y: auto !important;
                max-height: calc(70vh - 100px) !important;
            }

            #profile-manager-modal .grid-container {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 4px !important;
                margin-bottom: 1px !important;
                align-items: start !important;
            }

            #profile-manager-modal .grid-item {
                min-width: 0 !important;
                overflow: hidden !important;
            }

            #profile-manager-modal input,
            #profile-manager-modal select {
                box-sizing: border-box !important;
                max-width: 100% !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
            }
            .button {
                padding: 8px 12px;
                border: none;
                border-radius: 3px;
                font-size: 12px;
                font-weight: normal;
                cursor: pointer;
                font-family: Arial, sans-serif;
            }

            .button:not(.secondary):not(.danger) {
                background: #10b981;
                color: white;
            }

            .button.secondary {
                background: #6b7280;
                color: white;
            }

            .button.danger {
                background: #ef4444;
                color: white;
            }

            .button:hover {
                opacity: 0.9;
            }

            #profile-manager-modal input::placeholder,
            #profile-manager-modal select::placeholder {
                color: #999;
            }

            #profile-manager-modal input:focus,
            #profile-manager-modal select:focus {
                outline: none;
                border-color: #3b82f6;
            }

            #site-key-config-modal.dragging {
                opacity: 0.95;
            }

            #site-key-config-modal .dragging {
                cursor: grabbing !important;
            }

            #site-key-config-modal .dragging * {
                cursor: grabbing !important;
            }

            .ivac-unified-captcha {
                margin: 6px 0;
                border-radius: 3px;
                border: 1px solid #f59e0b;
                background: #fef3c7;
            }

            .ivac-captcha-controls {
                display: flex;
                align-items: center;
                gap: 2px;
                flex-wrap: wrap;
                z-index: 2;
            }

            .ivac-captcha-group {
                display: flex;
                gap: 2px;
            }

            .ivac-captcha-btn {
                font-size: 10px;
                line-height: 1;
                padding: 4px 6px;
                border-radius: 3px;
                border: 1px solid #ccc;
                color: #333;
                background: #fff;
                cursor: pointer;
                min-width: 50px;
            }

            .ivac-captcha-btn:hover {
                background: #f0f0f0;
            }

            .ivac-captcha-btn--mobile {
                border-color: #3b82f6;
                background: #dbeafe;
            }

            .ivac-captcha-btn--app {
                border-color: #8b5cf6;
                background: #e9d5ff;
            }

            .ivac-captcha-btn--pay {
                border-color: #f59e0b;
                background: #fef3c7;
            }

            .ivac-captcha-btn.active {
                font-weight: bold;
                background: #10b981;
                color: #fff;
                border-color: #10b981;
            }
            #load-mobile-btn:hover,
            #load-app-btn:hover,
            #load-pay-btn:hover {
                opacity: 0.9;
            }
            #load-mobile-btn.active,
            #load-app-btn.active,
            #load-pay-btn.active {
                background: #10b981 !important;
                color: #fff !important;
                border-color: #10b981 !important;
            }
            #profile-switcher button[data-profile-id]:hover {
                opacity: 0.9;
            }
            #profile-switcher button[data-profile-id].active {
                background: #3b82f6 !important;
                color: #fff !important;
                border-color: #3b82f6 !important;
            }

            .ivac-paynow-captcha-wrapper {
                margin: 2px 0;
                padding: 6px;
                border-radius: 3px;
                border: 1px solid #475569;
                background: #334155;
            }
            .ivac-paynow-captcha-wrapper:hover {
                border-color: #64748b;
            }
            .ivac-paynow-captcha-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                margin-bottom: 4px;
            }
            .ivac-paynow-captcha-title {
                display: flex;
                align-items: center;
                gap: 4px;
                font-size: 11px;
                font-weight: bold;
                color: #e2e8f0;
            }
            .ivac-paynow-captcha-title svg {
                color: #8b5cf6;
                width: 14px;
                height: 14px;
            }
            .ivac-paynow-captcha-toggle-label {
                display: inline-flex;
                align-items: center;
                gap: 3px;
                cursor: pointer;
                user-select: none;
            }
            .ivac-paynow-captcha-toggle-input {
                display: none;
            }
            .ivac-paynow-captcha-toggle-slider {
                position: relative;
                width: 32px;
                height: 16px;
                background: #475569;
                border-radius: 16px;
                border: 1px solid #64748b;
            }
            .ivac-paynow-captcha-toggle-slider::before {
                content: '';
                position: absolute;
                width: 12px;
                height: 12px;
                left: 2px;
                top: 1px;
                background: #fff;
                border-radius: 50%;
            }
            .ivac-paynow-captcha-toggle-input:checked + .ivac-paynow-captcha-toggle-slider {
                background: #8b5cf6;
            }
            .ivac-paynow-captcha-toggle-input:checked + .ivac-paynow-captcha-toggle-slider::before {
                transform: translateX(16px);
            }
            .ivac-paynow-captcha-toggle-text {
                font-size: 9px;
                font-weight: bold;
                color: #e2e8f0;
            }
            .ivac-paynow-captcha-container {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .ivac-paynow-captcha-image-wrapper {
                position: relative;
                width: 100%;
                min-height: 80px;
                border-radius: 3px;
                border: 1px solid #64748b;
                background: #1e293b;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .ivac-paynow-captcha-image {
                width: 100%;
                max-height: 100px;
                object-fit: contain;
            }
            .ivac-paynow-captcha-image-placeholder {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                padding: 12px;
                color: #94a3b8;
                cursor: pointer;
            }
            .ivac-paynow-captcha-image-placeholder:hover {
                color: #cbd5e1;
            }
            .ivac-paynow-captcha-image-placeholder svg {
                opacity: 0.5;
                width: 32px;
                height: 32px;
            }
            .ivac-paynow-captcha-image-placeholder span {
                font-size: 10px;
            }
            .ivac-paynow-captcha-auto-btn {
                position: absolute;
                top: 4px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                padding: 3px 6px;
                font-size: 8px;
                font-weight: bold;
                border-radius: 3px;
                border: none;
                background: #6366f1;
                color: #ffffff;
                cursor: pointer;
                z-index: 10;
                white-space: nowrap;
                min-width: 40px;
            }
            .ivac-paynow-captcha-auto-btn:hover {
                background: #4f46e5;
            }
            .ivac-paynow-captcha-controls {
                display: flex;
                flex-direction: row;
                gap: 4px;
                align-items: center;
            }
            .ivac-paynow-captcha-input {
                flex: 1;
                padding: 5px;
                font-size: 14px;
                border-radius: 3px;
                border: 1px solid #64748b;
                background: #1e293b;
                color: #e2e8f0;
                font-family: Arial, sans-serif;
                min-width: 0;
            }
            .ivac-paynow-captcha-input::placeholder {
                color: #94a3b8;
            }
            .ivac-paynow-captcha-input:focus {
                outline: none;
                border-color: #8b5cf6;
            }
            .ivac-paynow-captcha-buttons {
                display: flex;
                gap: 4px;
                flex-shrink: 0;
            }
            .ivac-paynow-captcha-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                padding: 5px 8px;
                font-size: 10px;
                font-weight: bold;
                border-radius: 3px;
                border: none;
                cursor: pointer;
                white-space: nowrap;
            }
            .ivac-paynow-captcha-btn-verify {
                background: #10b981;
                color: #ffffff;
            }
            .ivac-paynow-captcha-btn-verify:hover {
                background: #059669;
            }
            .ivac-paynow-captcha-btn-reload {
                background: #0ea5e9;
                color: #ffffff;
            }
            .ivac-paynow-captcha-btn-reload:hover {
                background: #0284c7;
            }
            .ivac-paynow-captcha-result {
                padding: 4px;
                font-size: 10px;
                font-weight: bold;
                border-radius: 3px;
                text-align: center;
            }
            .ivac-paynow-captcha-result.success {
                background: #d1fae5;
                color: #10b981;
                border: 1px solid #10b981;
            }
            .ivac-paynow-captcha-result.error {
                background: #fee2e2;
                color: #ef4444;
                border: 1px solid #ef4444;
            }
        `);
    const _var2382 = document.createElement("div");
    _var2382.id = "ivac-container";
    _var2381.appendChild(_var2382);
    const _var2383 = document.createElement("div");
    _var2383.className = "ivac-draggable-header";
    _var2383.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="flex: 1; text-align: left;">
                    <div style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">fuck Nimbus code</div>
                    <div style="font-size: 11px; opacity: 0.9; font-weight: 400; display: flex; align-items: center; gap: 6px;">
                        <span>Profile: <span id="header-profile-name">` + (_var128.profileName || "Default") + `</span></span>
                        <span>|</span>
                        <span>Phone: <span id="header-profile-phone">` + (_var128.personalInfo?.phone || "Not set") + `</span></span>
                    </div>
                </div>
            </div>
        `;
    _var2382.appendChild(_var2383);
    const _var2384 = document.createElement("button");
    _var2384.textContent = "–";
    _var2384.style.position = "absolute";
    _var2384.style.right = "8px";
    _var2384.style.top = "6px";
    _var2384.style.width = "24px";
    _var2384.style.height = "24px";
    _var2384.style.border = "none";
    _var2384.style.borderRadius = "3px";
    _var2384.style.background = "#555";
    _var2384.style.color = "#fff";
    _var2384.style.cursor = "pointer";
    _var2384.style.fontSize = "14px";
    _var2383.appendChild(_var2384);
    const _var2385 = document.createElement("div");
    _var2385.className = "ivac-tab-header";
    _var2382.appendChild(_var2385);
    const _var2386 = document.createElement("div");
    _var2386.className = "ivac-tab active";
    _var2386.textContent = "LOGIN";
    _var2385.appendChild(_var2386);
    const _var2387 = document.createElement("div");
    _var2387.className = "ivac-tab";
    _var2387.textContent = "SUBMIT";
    _var2387.style.minHeight = "22px";
    _var2387.style.padding = "4px 3px";
    _var2385.appendChild(_var2387);
    const _var2388 = document.createElement("div");
    _var2388.className = "ivac-tab";
    _var2388.textContent = "Process";
    _var2385.appendChild(_var2388);
    const _var2389 = document.createElement("div");
    _var2389.className = "ivac-tab";
    _var2389.textContent = "Fill";
    _var2385.appendChild(_var2389);
    const _var2390 = document.createElement("div");
    _var2382.appendChild(_var2390);
    const _var2391 = document.createElement("div");
    _var2391.className = "ivac-tab-content";
    _var2391.id = "ivac-bgd-content";
    _var2390.appendChild(_var2391);
    const _var2392 = _var1092();
    _var2392.textContent = "Ready for BGD form submission, OTP, and payment operations";
    _var2391.appendChild(_var2392);
    const _var2393 = document.createElement("div");
    _var2393.style.cssText = `
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 3px;
            padding: 4px;
            margin-bottom: 3px;
            display: flex;
            gap: 3px;
            align-items: center;
            flex-wrap: nowrap;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
        `;
    const _var2394 = document.createElement("label");
    _var2394.textContent = "Time:";
    _var2394.style.cssText = `
            font-size: 9px;
            font-weight: 600;
            color: #1f2937;
            white-space: nowrap;
            letter-spacing: 0.025em;
            flex-shrink: 0;
        `;
    const _var2395 = document.createElement("select");
    _var2395.id = "ivac-submit-retry-delay-select";
    _var2395.style.cssText = `
            padding: 4px 8px;
            font-size: 9px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            color: #374151;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            font-weight: 500;
            min-width: 45px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    [0, 3, 5, 8, 10, 12, 15, 20, 25, 30].forEach(_var2396 => {
      const _var2397 = document.createElement("option");
      _var2397.value = _var2396;
      _var2397.textContent = _var2396 + "s";
      _var2395.appendChild(_var2397);
    });
    const _var2398 = _var364();
    const _var2399 = [0, 3, 5, 8, 10, 12, 15, 20, 25, 30];
    let _var2400 = _var2399.includes(_var2398) ? _var2398 : 0;
    if (_var2400 === 20) {
      _var2400 = 0;
      _var365(0);
    }
    _var2395.value = String(_var2400);
    _var365(_var2400);
    _var2395.addEventListener("change", () => {
      const _var2401 = _var2395.value;
      const _var2402 = parseInt(_var2401);
      _var365(_var2402);
    });
    const _var2403 = document.createElement("button");
    _var2403.style.cssText = `
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 600;
            border: 1px solid;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9px);
            position: relative;
            overflow: visible;
            letter-spacing: 0.02em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            min-width: 70px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    const _var2404 = () => {
      const _var2405 = _var388();
      _var2403.textContent = "Single: " + (_var2405 ? "ON" : "OFF");
      _var2403.style.background = _var2405 ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      _var2403.style.color = "#ffffff";
      _var2403.style.borderColor = _var2405 ? "#10b981" : "#ef4444";
      _var2403.style.boxShadow = _var2405 ? "0 4px 12px 0 rgba(16, 185, 129, 0.3)" : "0 4px 12px 0 rgba(239, 68, 68, 0.3)";
      _var2403.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
    };
    _var2403.addEventListener("click", () => {
      const _var2406 = !_var388();
      _var389(_var2406);
      _var2404();
    });
    _var2404();
    const _var2407 = document.createElement("button");
    _var2407.style.cssText = `
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 600;
            border: 1px solid;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9px);
            position: relative;
            overflow: visible;
            letter-spacing: 0.02em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            min-width: 70px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    const _var2408 = () => {
      const _var2409 = _var353();
      _var2407.textContent = "Auto: " + (_var2409 ? "ON" : "OFF");
      _var2407.style.background = _var2409 ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      _var2407.style.color = "#ffffff";
      _var2407.style.borderColor = _var2409 ? "#10b981" : "#ef4444";
      _var2407.style.boxShadow = _var2409 ? "0 4px 12px 0 rgba(16, 185, 129, 0.3)" : "0 4px 12px 0 rgba(239, 68, 68, 0.3)";
      _var2407.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
    };
    _var2407.addEventListener("click", () => {
      const _var2410 = !_var353();
      _var391(_var2410);
      _var2408();
    });
    _var2408();
    _var2393.appendChild(_var2394);
    _var2393.appendChild(_var2395);
    _var2393.appendChild(_var2403);
    _var2393.appendChild(_var2407);
    _var2391.appendChild(_var2393);
    const _var2411 = "ivac-step-controls-container";
    const _var2412 = document.createElement("div");
    _var2412.id = _var2411;
    _var2412.style.cssText = `
            margin-bottom: 0;
            padding-bottom: 0;
        `;
    const _var2413 = "ivac-step-toggle-control";
    let _var2414 = document.getElementById(_var2413);
    let _var2415 = false;
    if (!_var2414) {
      _var2414 = document.createElement("button");
      _var2414.id = _var2413;
      _var2414.type = "button";
      _var2414.textContent = "Hide Steps";
      _var2414.title = "Hide or show Application → Resend OTP controls";
      _var2414.setAttribute("aria-expanded", "true");
      _var2414.style.cssText = `
                width: 100%;
                margin: 0 0 4px;
                padding: 6px;
                border: none;
                border-radius: 3px;
                background: #1e3a8a;
                color: #ffffff;
                font-weight: normal;
                cursor: pointer;
            `;
      _var2414.addEventListener("mouseenter", () => {
        _var2414.style.background = "#1d4ed8";
      });
      _var2414.addEventListener("mouseleave", () => {
        _var2414.style.background = "#1e3a8a";
      });
      const _var2416 = _var2417 => {
        _var2415 = _var2417;
        _var2412.style.display = _var2415 ? "none" : "";
        _var2414.textContent = _var2415 ? "Show Steps" : "Hide Steps";
        _var2414.setAttribute("aria-expanded", _var2415 ? "false" : "true");
      };
      _var2414.addEventListener("click", () => {
        _var2416(!_var2415);
      });
      _var2416(false);
    }
    _var2391.appendChild(_var2414);
    _var2391.appendChild(_var2412);
    const _var2418 = document.createElement("div");
    _var2418.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: flex-start;
        `;
    const _var2419 = document.createElement("div");
    _var2419.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2420 = _var1073("APPLICATION", _var491, "#3b82f6", "#2563eb");
    _var2420.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.application = _var2420;
    _var2419.appendChild(_var2420);
    const _var2421 = document.createElement("div");
    _var2421.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2422 = _var1073("PERSONAL", _var492, "#10b981", "#059669");
    _var2422.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.personal = _var2422;
    _var2421.appendChild(_var2422);
    _var2418.appendChild(_var2419);
    _var2418.appendChild(_var2421);
    _var2412.appendChild(_var2418);
    const _var2423 = document.createElement("div");
    _var2423.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: flex-start;
        `;
    const _var2424 = document.createElement("div");
    _var2424.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2425 = _var1073("Overview", _var493, "#8b5cf6", "#7c3aed");
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.overview = _var2425;
    _var2425.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    _var2424.appendChild(_var2425);
    const _var2426 = document.createElement("div");
    _var2426.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2427 = _var1073("CHECKOUT", _var1445, "#f59e0b", "#d97706");
    _var2427.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    _var2426.appendChild(_var2427);
    _var2423.appendChild(_var2424);
    _var2423.appendChild(_var2426);
    _var2412.appendChild(_var2423);
    const _var2428 = _var2391;
    const _var2429 = document.createElement("div");
    _var2429.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: flex-start;
        `;
    const _var2430 = document.createElement("div");
    _var2430.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2431 = _var1073("Send OTP", () => _var1444(false), "#06b6d4", "#0891b2");
    _var2431.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.sendOtp = _var2431;
    _var2430.appendChild(_var2431);
    const _var2432 = document.createElement("div");
    _var2432.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2433 = _var1073("RESEND OTP", () => _var1444(true), "#84cc16", "#65a30d");
    _var2433.style.cssText = `
            padding: 8px 10px !important;
            font-size: 12px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
        `;
    _var2432.appendChild(_var2433);
    _var2429.appendChild(_var2430);
    _var2429.appendChild(_var2432);
    _var2412.appendChild(_var2429);
    const _var2434 = document.createElement("div");
    _var2434.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 0px;
            padding: 0;
            align-items: flex-start;
        `;
    const _var2435 = document.createElement("div");
    _var2435.style.cssText = `
            display: flex;
            flex-direction: column;
            flex: 1;
        `;
    const _var2436 = document.createElement("div");
    _var2436.style.cssText = `
            display: flex;
            gap: 4px;
            align-items: center;
        `;
    const _var2437 = _var1086("ivac-pay-otp-input", "Enter Payment OTP");
    _var2437.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            min-width: 0;
        `;
    const _var2438 = document.createElement("span");
    _var2438.id = "ivac-pay-otp-timer";
    _var2438.style.cssText = `
            font-size: 11px;
            padding: 2px 6px;
            border-radius: 12px;
            background: #eef5ff;
            border: 1px solid #cfe1ff;
            white-space: nowrap;
            color: #0a6fc0;
            flex-shrink: 0;
        `;
    _var2438.textContent = "00:00";
    _var2436.appendChild(_var2437);
    _var2436.appendChild(_var2438);
    _var2435.appendChild(_var2436);
    window.otpTimerId = null;
    window.OTP_EXPIRE_SECONDS = 600;
    window.startOtpCountdownTimer = function () {
      if (window.otpTimerId) {
        clearInterval(window.otpTimerId);
      }
      let _var2439 = window.OTP_EXPIRE_SECONDS;
      const _var2440 = _var2441 => Math.floor(_var2441 / 60) + ":" + String(_var2441 % 60).padStart(2, "0");
      _var2438.textContent = _var2440(_var2439);
      _var2438.style.color = "#0a6fc0";
      window.otpTimerId = // TOLOOK
      setInterval(() => {
        _var2439--;
        _var2438.textContent = _var2440(Math.max(0, _var2439));
        if (_var2439 <= 0) {
          clearInterval(window.otpTimerId);
          window.otpTimerId = null;
          _var2438.textContent = "Expired";
          _var2438.style.color = "#b42324";
        }
      }, 1000);
    };
    window.stopOtpCountdownTimer = function () {
      if (window.otpTimerId) {
        clearInterval(window.otpTimerId);
        window.otpTimerId = null;
      }
      _var2438.textContent = "00:00";
      _var2438.style.color = "#0a6fc0";
    };
    const _var2442 = document.createElement("div");
    _var2442.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2443 = _var1073("Verify OTP", _var1537, "#ec4899", "#db2777");
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.verifyOtp = _var2443;
    _var2443.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            min-width: 0;
        `;
    _var2442.appendChild(_var2443);
    const _var2444 = document.createElement("div");
    _var2444.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 3px;
            align-items: center;
            margin-top: 0px;
            margin-bottom: 3px;
        `;
    const _var2445 = _var1073("GET PAYMENT OTP", () => _var1536(), "#10b981", "#059669");
    _var2445.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            min-width: 0;
        `;
    _var2444.appendChild(_var2445);
    _var2434.appendChild(_var2435);
    _var2434.appendChild(_var2442);
    _var2391.appendChild(_var2434);
    _var2391.appendChild(_var2444);
    const _var2446 = document.createElement("div");
    _var2446.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: flex-start;
        `;
    const _var2447 = document.createElement("div");
    _var2447.style.cssText = `
            display: flex;
            flex-direction: column;
            flex: 1;
        `;
    const _var2448 = _var1086("ivac-date-input", "Select date", "date");
    _var2448.min = new Date().toISOString().split("T")[0];
    _var2448.style.cssText = `
            width: 100%;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            min-width: 0;
        `;
    _var2448.addEventListener("change", _var2449 => {
      _var721 = _var2449.target.value;
    });
    _var2447.appendChild(_var2448);
    const _var2450 = document.createElement("div");
    _var2450.style.cssText = `
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            align-items: center;
        `;
    const _var2451 = _var1073("Get Slots", _var1605, "#6366f1", "#4f46e5");
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.getSlots = _var2451;
    _var2451.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            min-width: 0;
        `;
    _var2450.appendChild(_var2451);
    _var2446.appendChild(_var2447);
    _var2446.appendChild(_var2450);
    _var2391.appendChild(_var2446);
    const _var2452 = document.createElement("div");
    _var2452.id = "ivac-time-status";
    _var2452.style.cssText = `
            padding: 6px;
            margin: 2px 0;
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 3px;
            font-size: 12px;
            color: #6c757d;
            text-align: center;
            min-height: 20px;
        `;
    _var2452.textContent = "No time selected";
    _var2391.appendChild(_var2452);
    const _var2453 = document.createElement("div");
    _var2453.id = "ivac-paynow-image-captcha-wrapper";
    _var2453.className = "ivac-paynow-captcha-wrapper";
    _var2453.innerHTML = `
            <div class="ivac-paynow-captcha-header">
                <div class="ivac-paynow-captcha-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M9 9h6v6H9z"></path>
                    </svg>
                    <span>PayNow Image Captcha</span>
                </div>
                <label class="ivac-paynow-captcha-toggle-label">
                    <input type="checkbox" id="image-captcha-toggle-paynow" class="ivac-paynow-captcha-toggle-input">
                    <span class="ivac-paynow-captcha-toggle-slider"></span>
                    <span class="ivac-paynow-captcha-toggle-text">Enable</span>
                </label>
            </div>
            <div id="image-captcha-container-paynow" class="ivac-paynow-captcha-container" style="display: none;">
                <div class="ivac-paynow-captcha-image-wrapper">
                    <img id="image-captcha-img-paynow" alt="PayNow Captcha" class="ivac-paynow-captcha-image" style="display: none;">
                    <button id="auto-solve-image-captcha-truecaptcha-btn-paynow" type="button" class="ivac-paynow-captcha-auto-btn" style="position: absolute; top: 4px; left: 4px; background: linear-gradient(135deg, #10b981, #059669); z-index: 10;">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        Auto2
                    </button>
                    <button id="auto-solve-image-captcha-btn-paynow" type="button" class="ivac-paynow-captcha-auto-btn" style="position: absolute; top: 4px; right: 4px; z-index: 10;">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        Auto
                    </button>
                </div>
                <div class="ivac-paynow-captcha-controls">
                    <input type="text" id="image-captcha-input-paynow" class="ivac-paynow-captcha-input" placeholder="Enter captcha text">
                    <div class="ivac-paynow-captcha-buttons">
                        <button id="verify-image-captcha-btn-paynow" type="button" class="ivac-paynow-captcha-btn ivac-paynow-captcha-btn-verify">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Verify
                        </button>
                        <button id="reload-image-captcha-btn-paynow" type="button" class="ivac-paynow-captcha-btn ivac-paynow-captcha-btn-reload">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="23 4 23 10 17 10"></polyline>
                                <polyline points="1 20 1 14 7 14"></polyline>
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                            Reload
                        </button>
                    </div>
                </div>
                <div id="image-captcha-result-paynow" class="ivac-paynow-captcha-result" style="display: none;">                </div>
            </div>
        `;
    _var2391.appendChild(_var2453);
    const _var2454 = _var2453.querySelector("#image-captcha-toggle-paynow");
    const _var2455 = _var2453.querySelector("#image-captcha-container-paynow");
    const _var2456 = _var2453.querySelector("#image-captcha-img-paynow");
    const _var2457 = _var2453.querySelector("#verify-image-captcha-btn-paynow");
    const _var2458 = _var2453.querySelector("#reload-image-captcha-btn-paynow");
    const _var2459 = _var2453.querySelector("#auto-solve-image-captcha-btn-paynow");
    const _var2460 = _var2453.querySelector("#auto-solve-image-captcha-truecaptcha-btn-paynow");
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.reload = _var2458;
    window.ivacAutoFlowButtons.verify = _var2457;
    if (_var2454) {
      let _var2461 = GM_getValue(_var35, _var748 ? "true" : "false");
      if (_var2461 === undefined || _var2461 === null) {
        _var2461 = "false";
      }
      _var748 = _var2461 === true || _var2461 === "true";
      _var2454.checked = _var748;
      if (_var748 && _var2455) {
        _var2455.style.display = "flex";
        const {
          img: _var2462,
          input: _var2463,
          result: _var2464
        } = _var1714();
        if (_var2462) {
          _var2462.removeAttribute("src");
          _var2462.style.display = "none";
        }
        if (_var2463) {
          _var2463.value = "";
        }
        if (_var2464) {
          _var2464.style.display = "none";
          _var2464.textContent = "";
        }
      } else {
        _var1735(true);
      }
      _var2454.addEventListener("change", async _var2465 => {
        _var748 = _var2465.target.checked;
        try {
          GM_setValue(_var35, _var748 ? "true" : "false");
        } catch (_var2466) {}
        if (_var748) {
          if (_var2455) {
            _var2455.style.display = "flex";
          }
          const {
            img: _var2467,
            input: _var2468,
            result: _var2469
          } = _var1714();
          _var749 = null;
          _var750 = null;
          _var751 = false;
          if (_var2467) {
            _var2467.removeAttribute("src");
            _var2467.style.display = "none";
          }
          if (_var2468) {
            _var2468.value = "";
          }
          if (_var2469) {
            _var2469.style.display = "none";
            _var2469.textContent = "";
          }
        } else {
          _var1735(true);
        }
      });
    }
    if (_var2457) {
      _var2457.addEventListener("click", async () => {
        await _var1870();
      });
    }
    if (_var2458) {
      _var2458.addEventListener("click", async () => {
        await _var1707();
      });
    }
    if (_var2459) {
      _var2459.addEventListener("click", async () => {
        await _var1940();
      });
    }
    if (_var2460) {
      _var2460.addEventListener("click", async () => {
        await _var1715();
      });
    }
    const _var2470 = _var1073("PAY NOW", _var1907, "#14b8a6", "#0d9488");
    _var2470.id = "ivac-pay-now-btn";
    _var2470.style.cssText = `
            width: 100%;
            padding: 6px 8px;
            font-size: 11px;
            font-weight: 600;
            height: 36px;
            text-transform: uppercase;
            margin-bottom: 0;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.payNow = _var2470;
    _var2391.appendChild(_var2470);
    const _var2471 = _var1073("Stop All", () => {
      _var1066();
      try {
        clearTimeout(_var732);
        clearInterval(_var733);
        _var732 = null;
        _var733 = null;
        _var735 = false;
        if (_var734) {
          _var734 = null;
        }
      } catch (_var2472) {}
      _var1019("All requests stopped", "#f59e0b");
      _var243("All requests cancelled");
    }, "#ef4444", "#dc2626");
    _var2471.className += " stop-all-btn";
    _var2471.style.cssText = `
            width: 100%;
            padding: 6px 10px;
            font-size: 11px;
            height: 32px;
            margin-top: 1px;
        `;
    _var2428.appendChild(_var2471);
    const _var2473 = document.createElement("div");
    _var2473.className = "ivac-tab-content active";
    _var2473.id = "ivac-login-content";
    _var2390.appendChild(_var2473);
    const _var2474 = _var1092();
    _var2474.id = "ivac-login-status";
    _var2474.textContent = "Ready for Login";
    _var2473.appendChild(_var2474);
    const _var2475 = document.createElement("div");
    _var2475.id = "profile-switcher";
    _var2475.style.cssText = `
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;
        `;
    const _var2476 = document.createElement("label");
    _var2476.textContent = "Profile:";
    _var2476.style.cssText = `
            font-size: 11px;
            font-weight: 600;
            color: #333;
        `;
    const _var2477 = document.createElement("select");
    _var2477.id = "header-profile-select";
    _var2477.style.cssText = `
            padding: 6px 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 11px;
            background: #fff;
            color: #333;
            cursor: pointer;
            min-width: 150px;
            font-weight: 500;
        `;
    _var2477.innerHTML = "<option value=\"\">Loading...</option>";
    _var2475.appendChild(_var2476);
    _var2475.appendChild(_var2477);
    _var2473.appendChild(_var2475);
    _var2477.addEventListener("change", _var2478 => {
      if (_var2478.target.value) {
        _var2291(_var2478.target.value);
      }
    });
    // TOLOOK
    setTimeout(() => {
      _var2365();
    }, 100);
    const _var2479 = document.createElement("div");
    _var2479.style.cssText = `
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 3px;
            padding: 4px;
            margin-bottom: 3px;
            display: flex;
            gap: 3px;
            align-items: center;
            flex-wrap: nowrap;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
        `;
    const _var2480 = document.createElement("label");
    _var2480.textContent = "Time:";
    _var2480.style.cssText = `
            font-size: 9px;
            font-weight: 600;
            color: #1f2937;
            white-space: nowrap;
            letter-spacing: 0.025em;
            flex-shrink: 0;
        `;
    const _var2481 = document.createElement("select");
    _var2481.id = "ivac-login-retry-delay-select";
    _var2481.style.cssText = `
            padding: 4px 8px;
            font-size: 9px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            color: #374151;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            font-weight: 500;
            min-width: 45px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    [0, 3, 5, 8, 10, 12, 15, 20, 25, 30].forEach(_var2482 => {
      const _var2483 = document.createElement("option");
      _var2483.value = _var2482;
      _var2483.textContent = _var2482 + "s";
      _var2481.appendChild(_var2483);
    });
    const _var2484 = _var356();
    const _var2485 = [0, 3, 5, 8, 10, 12, 15, 20, 25, 30];
    let _var2486 = _var2485.includes(_var2484) ? _var2484 : 0;
    if (_var2486 === 20) {
      _var2486 = 0;
      _var357(0);
    }
    _var2481.value = String(_var2486);
    _var357(_var2486);
    _var2481.addEventListener("change", () => {
      const _var2487 = _var2481.value;
      const _var2488 = parseInt(_var2487);
      _var357(_var2488);
    });
    const _var2489 = document.createElement("button");
    _var2489.style.cssText = `
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 600;
            border: 1px solid;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9px);
            position: relative;
            overflow: visible;
            letter-spacing: 0.02em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            min-width: 70px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    const _var2490 = () => {
      const _var2491 = _var359();
      _var2489.textContent = "Single: " + (_var2491 ? "ON" : "OFF");
      _var2489.style.background = _var2491 ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      _var2489.style.color = "#ffffff";
      _var2489.style.borderColor = _var2491 ? "#10b981" : "#ef4444";
      _var2489.style.boxShadow = _var2491 ? "0 4px 12px 0 rgba(16, 185, 129, 0.3)" : "0 4px 12px 0 rgba(239, 68, 68, 0.3)";
      _var2489.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
    };
    _var2489.addEventListener("click", () => {
      const _var2492 = !_var359();
      _var360(_var2492);
      _var2490();
    });
    _var2490();
    const _var2493 = document.createElement("button");
    _var2493.style.cssText = `
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 600;
            border: 1px solid;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9px);
            position: relative;
            overflow: visible;
            letter-spacing: 0.02em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            min-width: 70px;
            text-align: center;
            height: 24px;
            box-sizing: border-box;
        `;
    const _var2494 = () => {
      const _var2495 = _var352();
      _var2493.textContent = "Auto: " + (_var2495 ? "ON" : "OFF");
      _var2493.style.background = _var2495 ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      _var2493.style.color = "#ffffff";
      _var2493.style.borderColor = _var2495 ? "#10b981" : "#ef4444";
      _var2493.style.boxShadow = _var2495 ? "0 4px 12px 0 rgba(16, 185, 129, 0.3)" : "0 4px 12px 0 rgba(239, 68, 68, 0.3)";
      _var2493.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
    };
    _var2493.addEventListener("click", () => {
      const _var2496 = !_var352();
      _var362(_var2496);
      _var2494();
    });
    _var2494();
    _var2479.appendChild(_var2480);
    _var2479.appendChild(_var2481);
    _var2479.appendChild(_var2489);
    _var2479.appendChild(_var2493);
    _var2473.appendChild(_var2479);
    const _var2497 = document.createElement("div");
    _var2497.style.cssText = `
            display: flex;
            gap: 6px;
            margin-bottom: 6px;
            padding: 0;
            align-items: center;
            flex-wrap: nowrap;
        `;
    const _var2498 = document.createElement("label");
    _var2498.textContent = "MOBILE";
    _var2498.style.cssText = `
            font-size: 11px;
            color: #374151;
            font-weight: 500;
            display: flex;
            align-items: center;
        `;
    const _var2499 = document.createElement("input");
    _var2499.type = "checkbox";
    _var2499.id = "mobile-verify-toggle";
    _var2499.checked = GM_getValue("mobile_verify_mode", false);
    _var2499.style.cssText = `
            width: 18px;
            height: 18px;
            cursor: pointer;
            margin: 0 4px 0 4px;
        `;
    const _var2500 = document.createElement("label");
    _var2500.textContent = "MOBILE 2";
    _var2500.style.cssText = `
            font-size: 11px;
            color: #374151;
            font-weight: 500;
            display: flex;
            align-items: center;
            white-space: nowrap;
            flex-shrink: 0;
        `;
    const _var2501 = document.createElement("label");
    _var2501.textContent = "LOGIN";
    _var2501.style.cssText = `
            font-size: 11px;
            color: #374151;
            font-weight: 500;
            margin-left: 12px;
            display: flex;
            align-items: center;
        `;
    const _var2502 = document.createElement("input");
    _var2502.type = "checkbox";
    _var2502.id = "auto-login-password-toggle";
    _var2502.checked = GM_getValue("auto_login_password_enabled", false);
    _var2502.style.cssText = `
            width: 18px;
            height: 18px;
            cursor: pointer;
            margin: 0 4px 0 4px;
        `;
    const _var2503 = document.createElement("input");
    _var2503.type = "number";
    _var2503.id = "login-password-delay-input";
    _var2503.placeholder = "12";
    _var2503.value = GM_getValue("login_password_delay", "12");
    _var2503.min = "0";
    _var2503.style.cssText = `
            width: 50px;
            padding: 3px 5px;
            border: 1px solid #d1d5db;
            border-radius: 3px;
            font-size: 11px;
            background: white;
            color: #374151;
            height: 22px;
            box-sizing: border-box;
        `;
    const _var2504 = () => {
      _var2503.disabled = !_var2502.checked;
      _var2503.style.opacity = _var2502.checked ? "1" : "0.5";
    };
    _var2502.addEventListener("change", _var2505 => {
      GM_setValue("auto_login_password_enabled", _var2505.target.checked);
      _var2504();
    });
    _var2503.addEventListener("input", _var2506 => {
      const _var2507 = _var2506.target.value;
      if (_var2507 !== "") {
        GM_setValue("login_password_delay", _var2507);
      }
    });
    _var2497.appendChild(_var2498);
    _var2497.appendChild(_var2499);
    _var2497.appendChild(_var2500);
    _var2497.appendChild(_var2501);
    _var2497.appendChild(_var2502);
    _var2497.appendChild(_var2503);
    _var2473.appendChild(_var2497);
    _var2504();
    const _var2508 = document.createElement("div");
    _var2508.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: center;
        `;
    const _var2509 = document.createElement("div");
    _var2509.style.cssText = `
            display: flex;
            align-items: center;
            gap: 3px;
        `;
    const _var2510 = document.createElement("input");
    _var2510.type = "text";
    _var2510.id = "mobile-verify-input";
    _var2510.placeholder = "Mobile number";
    _var2510.value = _var128.personalInfo.phone || "";
    _var2510.style.cssText = `
            width: 150px;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            background: white;
            color: #374151;
            height: 32px;
            box-sizing: border-box;
        `;
    _var2510.addEventListener("input", _var2511 => {
      _var128.personalInfo.phone = _var2511.target.value;
      _var2359();
      _var2235();
    });
    _var2509.appendChild(_var2510);
    const _var2512 = _var1073("MOBILE", () => {
      const _var2513 = _var2514();
      _var2513();
    }, "#065f46", "#047857");
    _var2512.style.cssText = `
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.mobileVerify = _var2512;
    _var2508.appendChild(_var2509);
    _var2508.appendChild(_var2512);
    _var2473.appendChild(_var2508);
    const _var2515 = () => {
      const _var2516 = _var2499.checked;
      _var2498.style.color = _var2516 ? "#9ca3af" : "#374151";
      _var2498.style.fontWeight = _var2516 ? "normal" : "500";
      _var2500.style.color = _var2516 ? "#374151" : "#9ca3af";
      _var2500.style.fontWeight = _var2516 ? "500" : "normal";
    };
    _var2499.addEventListener("change", _var2517 => {
      GM_setValue("mobile_verify_mode", _var2517.target.checked);
      _var2515();
    });
    _var2515();
    const _var2518 = document.createElement("div");
    _var2518.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: center;
        `;
    const _var2519 = document.createElement("div");
    _var2519.style.cssText = `
            display: flex;
            align-items: center;
            gap: 3px;
        `;
    const _var2520 = document.createElement("input");
    _var2520.type = "password";
    _var2520.id = "login-password-input";
    _var2520.placeholder = "Password";
    _var2520.value = _var128.personalInfo.password || "";
    _var2520.style.cssText = `
            width: 100%;
            padding: 6px 24px 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            background: white;
            color: #374151;
            height: 32px;
            box-sizing: border-box;
        `;
    const _var2521 = document.createElement("button");
    _var2521.type = "button";
    _var2521.textContent = "Show";
    _var2521.style.cssText = `
            position: absolute;
            right: 2px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 4px;
            cursor: pointer;
            padding: 2px 6px;
            font-size: 10px;
            color: #3b82f6;
            z-index: 10;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `;
    _var2521.title = "Show/Hide Password";
    _var2521.addEventListener("click", () => {
      if (_var2520.type === "password") {
        _var2520.type = "text";
        _var2521.textContent = "Hide";
        _var2521.title = "Hide Password";
      } else {
        _var2520.type = "password";
        _var2521.textContent = "Show";
        _var2521.title = "Show Password";
      }
    });
    const _var2522 = document.createElement("div");
    _var2522.style.cssText = `
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
        `;
    _var2522.appendChild(_var2520);
    _var2522.appendChild(_var2521);
    _var2520.addEventListener("input", _var2523 => {
      _var128.personalInfo.password = _var2523.target.value;
      _var2359();
      _var2235();
    });
    _var2519.appendChild(_var2522);
    const _var2524 = _var1073("LOGIN", _var2525, "#1e40af", "#1d4ed8");
    _var2524.style.cssText = `
            width: 50%;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.loginPassword = _var2524;
    _var2518.appendChild(_var2519);
    _var2518.appendChild(_var2524);
    _var2473.appendChild(_var2518);
    const _var2526 = document.createElement("div");
    _var2526.style.cssText = `
            display: flex;
            gap: 4px;
            margin-bottom: 0;
            padding: 0;
            align-items: center;
        `;
    const _var2527 = document.createElement("div");
    _var2527.style.cssText = `
            flex: 1;
            display: flex;
            align-items: center;
            gap: 3px;
        `;
    const _var2528 = _var1086("ivac-login-otp", "Enter OTP");
    _var2528.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            height: 32px;
            box-sizing: border-box;
        `;
    const _var2529 = document.createElement("span");
    _var2529.id = "otp-expire-timer";
    _var2529.style.cssText = `
            fontSize: 11px;
            padding: 2px 6px;
            borderRadius: 12px;
            background: #eef5ff;
            border: 1px solid #cfe1ff;
            whiteSpace: nowrap;
            color: #0a6fc0;
            minWidth: 50px;
            textAlign: center;
        `;
    _var2529.textContent = "00:00";
    _var2527.appendChild(_var2528);
    _var2527.appendChild(_var2529);
    const _var2530 = _var1073("GET GMAIL OTP", () => {
      _var663();
    }, "#22c55e", "#16a34a");
    _var2530.style.cssText = `
            width: 100%;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
        `;
    _var2530.title = "Manually fetch OTP from Gmail";
    const _var2531 = _var1073("Login OTP", _var672, "#a16207", "#92400e");
    _var2531.style.cssText = `
            width: 120px;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            flex-shrink: 0;
        `;
    window.ivacAutoFlowButtons = window.ivacAutoFlowButtons || {};
    window.ivacAutoFlowButtons.loginOtp = _var2531;
    _var2526.appendChild(_var2527);
    _var2526.appendChild(_var2531);
    _var2473.appendChild(_var2526);
    const _var2532 = document.createElement("div");
    _var2532.style.cssText = `
            display: flex;
            gap: 4px;
            margin-top: 3px;
            margin-bottom: 3px;
            padding: 0;
            align-items: center;
        `;
    _var2532.appendChild(_var2530);
    _var2473.appendChild(_var2532);
    const _var2533 = document.createElement("div");
    _var2533.style.cssText = `
            display: flex;
            gap: 4px;
            margin-bottom: 3px;
            padding: 0;
            align-items: center;
        `;
    const _var2534 = _var1086("ivac-mobile-verify-delay", "", "time");
    _var2534.style.cssText = `
            flex: 1;
            max-width: 150px;
            min-width: 120px;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 11px;
            height: 32px;
            box-sizing: border-box;
            background: white;
        `;
    _var2534.step = "0.001";
    _var2534.value = "18:00:03.000";
    const _var2535 = _var1073("Timer", () => {
      const _var2536 = _var2534.value || "00:00:00";
      const _var2537 = _var2538(_var2536, _var2535);
      _var2535.textContent = _var2537 ? "Cancel" : "Timer";
      _var2535.style.setProperty("background", _var2537 ? "#ef4444" : "#065f46", "important");
      _var2535.style.setProperty("color", "#ffffff", "important");
    }, "#065f46", "#047857");
    _var2535.style.cssText = `
            width: 120px;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            color: #ffffff;
            border-radius: 4px;
            font-weight: 400;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
    _var2533.appendChild(_var2534);
    _var2533.appendChild(_var2535);
    _var2473.appendChild(_var2533);
    const _var2539 = _var1073("Stop All", () => {
      _var1066();
      _var2179();
      if (_var778) {
        clearTimeout(_var778);
        _var778 = null;
        if (_var779) {
          clearTimeout(_var779);
          _var779 = null;
        }
        _var2540();
        _var2535.textContent = "Timer";
        _var2535.style.background = "#065f46";
        _var1018("Scheduled mobile verify timer stopped", "#f59e0b");
      }
    }, "#ef4444", "#dc2626");
    _var2539.className += " stop-all-btn";
    _var2539.style.cssText = `
            width: 100%;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            margin-bottom: 0px;
        `;
    _var2473.appendChild(_var2539);
    const _var2541 = document.createElement("div");
    _var2541.style.cssText = `
            display: flex;
            gap: 3px;
            margin-bottom: 0px;
            margin-top: 3px;
            align-items: flex-start;
        `;
    const _var2542 = _var1073("Application Page", () => {
      window.open("https://payment.ivacbd.com/application", "_blank", "noopener");
    }, "#3b82f6", "#2563eb");
    _var2542.className += " application-page-btn";
    _var2542.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            margin-bottom: 0px;
        `;
    const _var2543 = _var1073("Page Data", async () => {
      try {
        const _var2544 = await fetch("https://payment.ivacbd.com/", {
          headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            priority: "u=0, i",
            "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
            "sec-ch-ua-arch": "\"x86\"",
            "sec-ch-ua-bitness": "\"64\"",
            "sec-ch-ua-full-version": "\"144.0.7559.97\"",
            "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.97\", \"Google Chrome\";v=\"144.0.7559.97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "\"\"",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10.0.0\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "upgrade-insecure-requests": "1"
          },
          referrer: "https://payment.ivacbd.com",
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "include"
        });
        if (_var2544.ok) {
          const _var2545 = await _var2544.text();
          let _var2546 = null;
          const _var2547 = _var2545.match(/\\"captcha\\"\s*:\s*\{([^}]+)\}/);
          if (_var2547) {
            const _var2548 = _var2547[1];
            const _var2549 = _var2548.match(/\\"text\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"/);
            const _var2550 = _var2548.match(/\\"signature\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"/);
            const _var2551 = _var2548.match(/\\"salt\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"/);
            if (_var2549 && _var2550 && _var2551) {
              const _var2552 = _var2553 => {
                return _var2553.replace(/\\"/g, "\"").replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\u([0-9a-fA-F]{4})/g, (_var2554, _var2555) => String.fromCharCode(parseInt(_var2555, 16)));
              };
              _var2546 = {
                text: _var2552(_var2549[1]),
                signature: _var2552(_var2550[1]),
                salt: _var2552(_var2551[1])
              };
            }
          }
          if (!_var2546) {
            const _var2556 = [/\\"captcha\\"\s*:\s*\{\s*\\"text\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"\s*,\s*\\"signature\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"\s*,\s*\\"salt\\"\s*:\s*\\"((?:[^"\\]|\\.)+?)\\"/, /"captcha"\s*:\s*\{\s*"text"\s*:\s*"((?:[^"\\]|\\.)+?)"\s*,\s*"signature"\s*:\s*"((?:[^"\\]|\\.)+?)"\s*,\s*"salt"\s*:\s*"((?:[^"\\]|\\.)+?)"/];
            for (const _var2557 of _var2556) {
              const _var2558 = _var2545.match(_var2557);
              if (_var2558 && _var2558.length === 4) {
                const _var2559 = _var2560 => {
                  return _var2560.replace(/\\"/g, "\"").replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\u([0-9a-fA-F]{4})/g, (_var2561, _var2562) => String.fromCharCode(parseInt(_var2562, 16)));
                };
                _var2546 = {
                  text: _var2559(_var2558[1]),
                  signature: _var2559(_var2558[2]),
                  salt: _var2559(_var2558[3])
                };
                break;
              }
            }
          }
          const _var2563 = new DOMParser();
          const _var2564 = _var2563.parseFromString(_var2545, "text/html");
          const _var2565 = _var2564.querySelector("div.mb-3 p.text-xs.mb-2.text-gray-600")?.closest("div.mb-3");
          let _var2566 = document.querySelector("div.mb-3 p.text-xs.mb-2.text-gray-600")?.closest("div.mb-3");
          if (_var2565) {
            const _var2567 = _var2565.cloneNode(true);
            if (_var2566) {
              _var2566.replaceWith(_var2567);
            } else {
              const _var2568 = document.querySelector("form");
              if (_var2568) {
                const _var2569 = _var2568.querySelector("button[type=\"submit\"]");
                if (_var2569) {
                  _var2568.insertBefore(_var2567, _var2569);
                } else {
                  _var2568.appendChild(_var2567);
                }
              } else {
                let _var2570 = document.getElementById("math-captcha-container");
                if (!_var2570) {
                  _var2570 = document.createElement("div");
                  _var2570.id = "math-captcha-container";
                  _var2570.style.cssText = `
                                        margin: 16px 0;
                                        padding: 16px;
                                        background: #fff;
                                        border-radius: 8px;
                                        border: 1px solid #e5e7eb;
                                    `;
                  const _var2571 = document.querySelector("main") || document.querySelector(".container") || document.querySelector("form") || document.body;
                  if (_var2571) {
                    _var2571.insertBefore(_var2570, _var2571.firstChild);
                  }
                }
                _var2570.innerHTML = "";
                _var2570.appendChild(_var2567);
              }
            }
            if (_var2546) {
              const _var2572 = _var2567.querySelector("input[inputmode=\"numeric\"]");
              if (_var2572) {
                _var2572.setAttribute("data-captcha-text", _var2546.text);
                _var2572.setAttribute("data-captcha-signature", _var2546.signature);
                _var2572.setAttribute("data-captcha-salt", _var2546.salt);
              }
              // TOLOOK
              setTimeout(() => {
                const _var2573 = _var2567.querySelector("canvas") || document.querySelector("div.mb-3 canvas");
                if (_var2573 && _var2546.text) {
                  _var2574(_var2573, _var2546.text);
                }
              }, 100);
            }
          } else if (_var2546) {
            const _var2575 = `
                            <div class="mb-3">
                                <p class="text-xs mb-2 text-gray-600">Solve the math problem below:</p>
                                <div class="flex items-center gap-2 mb-2">
                                    <canvas width="160" height="45" class="rounded-md border select-none" style="image-rendering: pixelated;"></canvas>
                                </div>
                                <input inputmode="numeric" pattern="[0-9]*" placeholder="Enter answer"
                                    class="bg-white h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 border-gray-300 focus:border-slate-400"
                                    required="" type="text" value="" style="width: 25.5%;"
                                    data-captcha-text="` + _var2546.text + "\"\n                                    data-captcha-signature=\"" + _var2546.signature + "\"\n                                    data-captcha-salt=\"" + _var2546.salt + `">
                            </div>
                        `;
            if (_var2566) {
              _var2566.outerHTML = _var2575;
              // TOLOOK
              setTimeout(() => {
                const _var2576 = document.querySelector("div.mb-3 canvas");
                if (_var2576 && _var2546.text) {
                  _var2574(_var2576, _var2546.text);
                }
              }, 100);
            } else {
              const _var2577 = document.querySelector("form");
              if (_var2577) {
                const _var2578 = _var2577.querySelector("button[type=\"submit\"]");
                const _var2579 = document.createElement("div");
                _var2579.innerHTML = _var2575;
                const _var2580 = _var2579.firstElementChild;
                if (_var2578) {
                  _var2577.insertBefore(_var2580, _var2578);
                } else {
                  _var2577.appendChild(_var2580);
                }
                // TOLOOK
                setTimeout(() => {
                  const _var2581 = _var2580.querySelector("canvas");
                  if (_var2581 && _var2546.text) {
                    _var2574(_var2581, _var2546.text);
                  }
                }, 100);
              } else {
                alert("Math captcha data extracted but could not find where to insert it on the page");
              }
            }
          } else {
            alert("Math captcha not found in the fetched page");
          }
          if (_var2546 && _var2546.text && _var2546.signature && _var2546.salt) {
            try {
              const _var2582 = _var2583(_var2546.text);
              _var79 = {
                text: _var2546.text,
                signature: _var2546.signature,
                salt: _var2546.salt,
                answer: _var2582
              };
            } catch (_var2584) {
              _var79 = {
                text: _var2546.text,
                signature: _var2546.signature,
                salt: _var2546.salt
              };
            }
          }
        } else {
          alert("Failed to load page. Status: " + _var2544.status);
        }
      } catch (_var2585) {
        alert("Error loading page: " + _var2585.message);
      }
    }, "#3b82f6", "#2563eb");
    _var2543.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            margin-bottom: 0px;
        `;
    _var2541.appendChild(_var2542);
    _var2541.appendChild(_var2543);
    _var2473.appendChild(_var2541);
    const _var2586 = document.createElement("div");
    _var2586.style.cssText = `
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 6px;
            margin-bottom: 6px;
            padding: 8px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
        `;
    const _var2587 = document.createElement("div");
    _var2587.id = "ivac-time";
    _var2587.style.cssText = `
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            font-family: 'Courier New', monospace;
            letter-spacing: 1px;
        `;
    const _var2588 = document.createElement("div");
    _var2588.id = "ivac-date";
    _var2588.style.cssText = `
            font-size: 14px;
            font-weight: 500;
            color: #6b7280;
            font-family: 'Courier New', monospace;
        `;
    _var2586.appendChild(_var2587);
    _var2586.appendChild(_var2588);
    _var2473.appendChild(_var2586);
    _var119();
    const _var2589 = document.createElement("div");
    _var2589.className = "ivac-tab-content";
    _var2589.id = "ivac-process-content";
    _var2390.appendChild(_var2589);
    const _var2590 = document.createElement("div");
    _var2590.className = "ivac-tab-content";
    _var2590.id = "ivac-fill-content";
    _var2390.appendChild(_var2590);
    const _var2591 = document.createElement("div");
    _var2591.style.cssText = `
            margin-bottom: 6px;
            padding: 6px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: 6px;
        `;
    const _var2592 = document.createElement("div");
    _var2592.style.cssText = "display: flex; gap: 8px; align-items: center;";
    const _var2593 = _var1086("ivac-fill-appointment-date-input", "Select date", "date");
    _var2593.min = new Date().toISOString().split("T")[0];
    _var2593.value = _var721 || "";
    _var2593.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 12px;
            min-width: 0;
        `;
    const _var2594 = _var1073("Date", () => _var783(_var2593.value), "#0ea5e9");
    _var2594.style.cssText = `
            width: 92px;
            padding: 6px 8px;
            font-size: 12px;
            height: 32px;
            margin: 0;
            border-radius: 8px;
            font-weight: 400;
            box-sizing: border-box;
        `;
    _var2592.appendChild(_var2593);
    _var2592.appendChild(_var2594);
    _var2591.appendChild(_var2592);
    const _var2595 = document.createElement("div");
    _var2595.style.cssText = "display: flex; gap: 8px; align-items: center;";
    const _var2596 = _var1086("ivac-fill-appointment-time-input", "09:00 - 09:59", "text");
    _var2596.value = _var722 || "09:00 - 09:59";
    _var2596.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 12px;
            min-width: 0;
        `;
    const _var2597 = _var1073("Time", () => _var791(_var2596.value), "#22c55e");
    _var2597.style.cssText = `
            width: 92px;
            padding: 6px 8px;
            font-size: 12px;
            height: 32px;
            margin: 0;
            border-radius: 8px;
            font-weight: 400;
            box-sizing: border-box;
        `;
    _var2595.appendChild(_var2596);
    _var2595.appendChild(_var2597);
    _var2591.appendChild(_var2595);
    const _var2598 = document.createElement("div");
    _var2598.style.cssText = `
            margin-bottom: 6px;
            padding: 6px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: 6px;
        `;
    const _var2599 = document.createElement("div");
    _var2599.style.cssText = "display: flex; gap: 8px; align-items: center;";
    const _var2600 = _var1086("ivac-fill-gmail-otp", "Gmail OTP", "text");
    _var2600.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 12px;
            min-width: 0;
        `;
    const _var2601 = _var1073("GET GMAIL OTP", async () => {
      const _var2602 = _var2601;
      _var2602.disabled = true;
      const _var2603 = _var2602.textContent;
      _var2602.textContent = "Fetching...";
      try {
        const _var2604 = await _var663();
        if (_var2604) {
          _var2600.value = _var2604;
          _var2600.focus();
          _var2600.style.border = "2px solid #22c55e";
          // TOLOOK
          setTimeout(() => _var2600.style.border = "1px solid #d1d5db", 2000);
          const _var2605 = Array.from(document.querySelectorAll("input[placeholder=\"ENTER OTP\"][inputmode=\"numeric\"][maxlength=\"6\"]"));
          let _var2606 = null;
          for (const _var2607 of _var2605) {
            const _var2608 = window.getComputedStyle(_var2607);
            const _var2609 = _var2607.className || "";
            const _var2610 = _var2607.classList.contains("opacity-0") || _var2607.classList.contains("h-0") || _var2607.classList.contains("w-0") || _var2608.opacity === "0" || _var2608.height === "0px" || _var2608.width === "0px" || _var2608.position === "absolute" && (_var2608.opacity === "0" || _var2608.height === "0px");
            if (!_var2610 && _var2607.offsetHeight > 0 && _var2607.offsetWidth > 0) {
              _var2606 = _var2607;
              break;
            }
          }
          if (!_var2606) {
            _var2606 = document.querySelector("input[placeholder=\"ENTER OTP\"][inputmode=\"numeric\"][maxlength=\"6\"]:not(.opacity-0):not(.h-0):not(.w-0)") || document.querySelector("input[autocomplete=\"off\"][inputmode=\"numeric\"][maxlength=\"6\"][placeholder=\"ENTER OTP\"]:not([style*=\"opacity-0\"]):not([style*=\"h-0\"]):not([style*=\"w-0\"])");
          }
          if (_var2606) {
            const _var2611 = String(_var2604);
            const _var2612 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
            if (_var2612) {
              _var2612.call(_var2606, "");
            } else {
              _var2606.value = "";
            }
            _var2606.setAttribute("value", "");
            _var2606.focus();
            await new Promise(_var2613 => // TOLOOK
            setTimeout(_var2613, 100));
            for (let _var2614 = 0; _var2614 < _var2611.length; _var2614++) {
              const _var2615 = _var2611[_var2614];
              const _var2616 = _var2611.substring(0, _var2614 + 1);
              if (_var2612) {
                _var2612.call(_var2606, _var2616);
              } else {
                _var2606.value = _var2616;
              }
              _var2606.setAttribute("value", _var2616);
              const _var2617 = new KeyboardEvent("keydown", {
                bubbles: true,
                cancelable: true,
                key: _var2615,
                code: "Digit" + _var2615,
                keyCode: 48 + parseInt(_var2615)
              });
              _var2606.dispatchEvent(_var2617);
              const _var2618 = new KeyboardEvent("keypress", {
                bubbles: true,
                cancelable: true,
                key: _var2615,
                code: "Digit" + _var2615,
                keyCode: 48 + parseInt(_var2615),
                charCode: 48 + parseInt(_var2615)
              });
              _var2606.dispatchEvent(_var2618);
              const _var2619 = new InputEvent("input", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText",
                data: _var2615,
                isComposing: false
              });
              Object.defineProperty(_var2619, "target", {
                writable: false,
                value: _var2606
              });
              _var2606.dispatchEvent(_var2619);
              const _var2620 = new Event("input", {
                bubbles: true,
                cancelable: true
              });
              Object.defineProperty(_var2620, "target", {
                writable: false,
                value: _var2606
              });
              _var2606.dispatchEvent(_var2620);
              const _var2621 = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                key: _var2615,
                code: "Digit" + _var2615,
                keyCode: 48 + parseInt(_var2615)
              });
              _var2606.dispatchEvent(_var2621);
              const _var2622 = 80 + Math.random() * 70;
              await new Promise(_var2623 => // TOLOOK
              setTimeout(_var2623, _var2622));
            }
            await new Promise(_var2624 => // TOLOOK
            setTimeout(_var2624, 100));
            const _var2625 = new Event("change", {
              bubbles: true,
              cancelable: true
            });
            Object.defineProperty(_var2625, "target", {
              writable: false,
              value: _var2606
            });
            _var2606.dispatchEvent(_var2625);
            _var2606.blur();
            await new Promise(_var2626 => // TOLOOK
            setTimeout(_var2626, 200));
            _var2606.focus();
            const _var2627 = _var2606.closest("div.bg-white") || _var2606.closest("div[class*=\"bg-white\"]") || _var2606.parentElement?.parentElement;
            await new Promise(_var2628 => // TOLOOK
            setTimeout(_var2628, 400));
            let _var2629 = null;
            if (_var2627) {
              const _var2630 = Array.from(_var2627.querySelectorAll("div")).pop();
              if (_var2630) {
                _var2629 = Array.from(_var2630.querySelectorAll("button")).find(_var2631 => {
                  const _var2632 = _var2631.textContent?.trim() || "";
                  return _var2632 === "Proceed";
                });
              }
              if (!_var2629) {
                _var2629 = Array.from(_var2627.querySelectorAll("button")).find(_var2633 => {
                  const _var2634 = _var2633.textContent?.trim() || "";
                  return _var2634 === "Proceed";
                });
              }
            }
            if (!_var2629) {
              _var2629 = Array.from(document.querySelectorAll("button")).find(_var2635 => {
                const _var2636 = _var2635.textContent?.trim() || "";
                return _var2636 === "Proceed" && !_var2636.includes("Resend");
              });
            }
            if (_var2629) {
              _var2629.removeAttribute("disabled");
              _var2629.disabled = false;
              _var2629.classList.remove("bg-gray-400", "cursor-not-allowed");
              _var2629.classList.add("bg-[#28a745]", "hover:bg-[#218838]", "focus:ring-[#218838]", "cursor-pointer");
              _var2629.dispatchEvent(new MouseEvent("mouseenter", {
                bubbles: true
              }));
              _var2629.dispatchEvent(new MouseEvent("mouseleave", {
                bubbles: true
              }));
              _var2629.dispatchEvent(new Event("focus", {
                bubbles: true
              }));
              _var647("Proceed button enabled");
            } else {
              _var648("Proceed button not found");
            }
            _var2606.style.border = "2px solid #22c55e";
            // TOLOOK
            setTimeout(() => {
              _var2606.style.border = "";
            }, 2000);
            _var647("OTP typed: " + _var2611);
          } else {
            _var648("Page OTP input field not found");
          }
        } else {
          _var648("No OTP received from Gmail");
        }
      } catch (_var2637) {
        _var648("Failed to fetch Gmail OTP: " + _var2637.message);
      } finally {
        _var2602.disabled = false;
        _var2602.textContent = _var2603;
      }
    }, "#22c55e", "#16a34a");
    _var2601.style.cssText = `
            width: 140px;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            margin: 0;
            border-radius: 8px;
            font-weight: 400;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
    _var2599.appendChild(_var2600);
    _var2599.appendChild(_var2601);
    _var2598.appendChild(_var2599);
    const _var2638 = document.createElement("div");
    _var2638.style.cssText = "display: flex; gap: 8px; align-items: center;";
    const _var2639 = _var1086("ivac-fill-payment-otp", "Payment OTP", "text");
    _var2639.style.cssText = `
            flex: 1;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 12px;
            min-width: 0;
        `;
    const _var2640 = _var1073("GET PAYMENT OTP", async () => {
      const _var2641 = _var2640;
      _var2641.disabled = true;
      const _var2642 = _var2641.textContent;
      _var2641.textContent = "Fetching...";
      try {
        const _var2643 = await _var1536();
        if (_var2643) {
          _var2639.value = _var2643;
          _var2639.focus();
          _var2639.style.border = "2px solid #22c55e";
          // TOLOOK
          setTimeout(() => _var2639.style.border = "1px solid #d1d5db", 2000);
          const _var2644 = document.querySelector("input[placeholder=\"ENTER OTP\"][type=\"tel\"][autocomplete=\"off\"]") || document.querySelector("input[placeholder*=\"OTP\" i][type=\"tel\"]") || document.querySelector("input.flex-1[placeholder*=\"OTP\" i]");
          if (_var2644) {
            const _var2645 = String(_var2643);
            const _var2646 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
            if (_var2646) {
              _var2646.call(_var2644, "");
            } else {
              _var2644.value = "";
            }
            _var2644.setAttribute("value", "");
            _var2644.focus();
            await new Promise(_var2647 => // TOLOOK
            setTimeout(_var2647, 100));
            for (let _var2648 = 0; _var2648 < _var2645.length; _var2648++) {
              const _var2649 = _var2645[_var2648];
              const _var2650 = _var2645.substring(0, _var2648 + 1);
              if (_var2646) {
                _var2646.call(_var2644, _var2650);
              } else {
                _var2644.value = _var2650;
              }
              _var2644.setAttribute("value", _var2650);
              const _var2651 = new KeyboardEvent("keydown", {
                bubbles: true,
                cancelable: true,
                key: _var2649,
                code: "Digit" + _var2649,
                keyCode: 48 + parseInt(_var2649)
              });
              _var2644.dispatchEvent(_var2651);
              const _var2652 = new KeyboardEvent("keypress", {
                bubbles: true,
                cancelable: true,
                key: _var2649,
                code: "Digit" + _var2649,
                keyCode: 48 + parseInt(_var2649),
                charCode: 48 + parseInt(_var2649)
              });
              _var2644.dispatchEvent(_var2652);
              const _var2653 = new InputEvent("input", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText",
                data: _var2649,
                isComposing: false
              });
              Object.defineProperty(_var2653, "target", {
                writable: false,
                value: _var2644
              });
              _var2644.dispatchEvent(_var2653);
              const _var2654 = new Event("input", {
                bubbles: true,
                cancelable: true
              });
              Object.defineProperty(_var2654, "target", {
                writable: false,
                value: _var2644
              });
              _var2644.dispatchEvent(_var2654);
              const _var2655 = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                key: _var2649,
                code: "Digit" + _var2649,
                keyCode: 48 + parseInt(_var2649)
              });
              _var2644.dispatchEvent(_var2655);
              const _var2656 = 80 + Math.random() * 70;
              await new Promise(_var2657 => // TOLOOK
              setTimeout(_var2657, _var2656));
            }
            await new Promise(_var2658 => // TOLOOK
            setTimeout(_var2658, 100));
            const _var2659 = new Event("change", {
              bubbles: true,
              cancelable: true
            });
            Object.defineProperty(_var2659, "target", {
              writable: false,
              value: _var2644
            });
            _var2644.dispatchEvent(_var2659);
            _var2644.blur();
            await new Promise(_var2660 => // TOLOOK
            setTimeout(_var2660, 200));
            _var2644.focus();
            const _var2661 = _var2644.closest("div.flex");
            if (_var2661) {
              const _var2662 = _var2661.querySelector("button");
              if (_var2662 && _var2662.textContent?.trim() === "Verify") {
                await new Promise(_var2663 => // TOLOOK
                setTimeout(_var2663, 300));
                if (_var2662.hasAttribute("disabled")) {
                  _var2662.removeAttribute("disabled");
                  _var2662.disabled = false;
                }
                if (_var2662.classList.contains("bg-gray-400") || _var2662.classList.contains("cursor-not-allowed")) {
                  _var2662.classList.remove("bg-gray-400", "cursor-not-allowed");
                  _var2662.classList.add("bg-green-600", "hover:bg-green-700", "cursor-pointer");
                }
                _var647("Verify button ready");
              }
            }
            _var2644.style.border = "2px solid #22c55e";
            // TOLOOK
            setTimeout(() => {
              _var2644.style.border = "";
            }, 2000);
            _var647("Payment OTP typed: " + _var2645);
          } else {
            _var648("Page Payment OTP input field not found");
          }
        } else {
          _var648("No OTP received");
        }
      } catch (_var2664) {
        _var648("Failed to fetch Payment OTP: " + _var2664.message);
      } finally {
        _var2641.disabled = false;
        _var2641.textContent = _var2642;
      }
    }, "#10b981", "#059669");
    _var2640.style.cssText = `
            width: 140px;
            padding: 6px 8px;
            font-size: 11px;
            height: 32px;
            margin: 0;
            border-radius: 8px;
            font-weight: 400;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
    _var2638.appendChild(_var2639);
    _var2638.appendChild(_var2640);
    _var2598.appendChild(_var2638);
    const _var2665 = document.createElement("div");
    _var2665.style.cssText = `
            display: flex;
            gap: 8px;
            margin-bottom: 6px;
            align-items: center;
        `;
    const _var2666 = _var1086("ivac-proceed-delay", "", "time");
    _var2666.style.cssText = `
            flex: 1;
            max-width: 150px;
            min-width: 120px;
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 12px;
            height: 32px;
            box-sizing: border-box;
            background: white;
        `;
    _var2666.step = "0.001";
    _var2666.value = "18:00:03.000";
    const _var2667 = _var1073("Timer", () => {
      const _var2668 = _var2666.value || "00:00:00";
      const _var2669 = _var2670(_var2668, _var2667);
      _var2667.textContent = _var2669 ? "Cancel" : "Timer";
      _var2667.style.setProperty("background", _var2669 ? "#ef4444" : "#065f46", "important");
      _var2667.style.setProperty("color", "#ffffff", "important");
    }, "#065f46", "#047857");
    _var2667.style.cssText = `
            width: 120px;
            padding: 6px 8px;
            font-size: 12px;
            height: 32px;
            color: #ffffff;
            border-radius: 8px;
            font-weight: 400;
            box-sizing: border-box;
            flex-shrink: 0;
        `;
    _var2665.appendChild(_var2666);
    _var2665.appendChild(_var2667);
    _var2598.appendChild(_var2665);
    const _var2671 = document.createElement("div");
    _var2671.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 6px;
        `;
    const _var2672 = document.createElement("div");
    _var2672.style.cssText = `
            display: flex;
            gap: 8px;
        `;
    const _var2673 = _var1073("Mobile Verify", () => _var2674(), "#f59e0b");
    _var2673.style.flex = "1";
    _var2673.style.fontSize = "12px";
    _var2673.style.margin = "0";
    _var2673.style.fontWeight = "400";
    _var2673.style.boxSizing = "border-box";
    _var2673.style.borderRadius = "8px";
    _var2672.appendChild(_var2673);
    const _var2675 = _var1073("Password", () => _var2676(), "#3b82f6");
    _var2675.style.flex = "1";
    _var2675.style.fontSize = "12px";
    _var2675.style.margin = "0";
    _var2675.style.fontWeight = "400";
    _var2675.style.boxSizing = "border-box";
    _var2675.style.borderRadius = "8px";
    _var2672.appendChild(_var2675);
    _var2671.appendChild(_var2672);
    const _var2677 = document.createElement("div");
    _var2677.style.cssText = `
            display: flex;
            gap: 8px;
        `;
    const _var2678 = _var1073("Math Solve", async () => {
      try {
        await new Promise(_var2679 => // TOLOOK
        setTimeout(_var2679, 100));
        let _var2680 = document.querySelector("input[inputmode=\"numeric\"][pattern=\"[0-9]*\"][placeholder=\"Enter answer\"]") || document.querySelector("input[type=\"text\"][inputmode=\"numeric\"]") || document.querySelector("input[placeholder*=\"answer\" i]") || document.querySelector("input[type=\"text\"][style*=\"width: 25.5%\"]");
        if (_var2680) {
          _var2680.value = "";
          _var2680.setAttribute("value", "");
        }
        let _var2681 = null;
        let _var2682 = null;
        if (window._CA !== undefined && window._CA !== null) {
          const _var2683 = document.querySelectorAll("p, span, div, label, h1, h2, h3, h4, h5, h6");
          for (let _var2684 = 0; _var2684 < _var2683.length; _var2684++) {
            const _var2685 = _var2683[_var2684];
            const _var2686 = (_var2685.textContent || "").trim();
            if (_var2686 && _var2686.includes("=") && _var2686.includes("?")) {
              const _var2687 = _var2583(_var2686);
              if (_var2687 === window._CA) {
                _var2681 = window._CA;
                _var2682 = _var2686;
                _var243("Using canvas-detected answer: \"" + _var2682 + "\" = " + _var2681);
                break;
              }
            }
          }
          if (_var2681 === null && window._CA !== null) {
            _var2681 = window._CA;
            _var2682 = "Canvas detected";
            _var243("Using canvas-detected answer (no matching text found): " + _var2681);
          }
        }
        if (!_var2681 && _var2681 !== 0) {
          const _var2688 = document.querySelectorAll("p, span, div, label, h1, h2, h3, h4, h5, h6");
          for (let _var2689 = 0; _var2689 < _var2688.length; _var2689++) {
            const _var2690 = _var2688[_var2689];
            const _var2691 = (_var2690.textContent || "").trim();
            if (_var2691 && _var2691.includes("=") && _var2691.includes("?")) {
              const _var2692 = _var2583(_var2691);
              if (_var2692 !== null && _var2692 !== undefined) {
                _var2681 = _var2692;
                _var2682 = _var2691;
                _var243("Found captcha in visible DOM: \"" + _var2682 + "\" = " + _var2681);
                break;
              }
            }
          }
        }
        if (!_var2681 && _var2681 !== 0) {
          const _var2693 = _var2694(true);
          if (_var2693 && _var2693.text) {
            const _var2695 = Array.from(document.querySelectorAll("p, span, div, label")).map(_var2696 => (_var2696.textContent || "").trim()).filter(_var2697 => _var2697.includes("=") && _var2697.includes("?"));
            const _var2698 = _var2695.some(_var2699 => _var2699.includes(_var2693.text.split("=")[0].trim()) || _var2693.text.includes(_var2699.split("=")[0].trim()));
            if (_var2698 || _var2695.length === 0) {
              _var2682 = _var2693.text;
              _var2681 = _var2583(_var2693.text);
              _var243("Extracted captcha from page source: \"" + _var2682 + "\" = " + _var2681);
            } else {
              _var243("Skipping stale page source captcha (doesn't match visible text)");
            }
          }
        }
        if (_var2681 === null || _var2681 === undefined || isNaN(_var2681)) {
          _var648("Could not extract or calculate math answer. Captcha text found: \"" + (_var2682 || "None") + "\"");
          return;
        }
        if (_var2682) {
          _var243("Calculated answer: " + _var2682 + " = " + _var2681);
        } else {
          _var243("Using answer: " + _var2681);
        }
        if (!_var2680) {
          _var2680 = document.querySelector("input[inputmode=\"numeric\"][pattern=\"[0-9]*\"][placeholder=\"Enter answer\"]") || document.querySelector("input[type=\"text\"][inputmode=\"numeric\"]") || document.querySelector("input[placeholder*=\"answer\" i]") || document.querySelector("input[type=\"text\"][style*=\"width: 25.5%\"]");
        }
        if (!_var2680) {
          if (window.advancedFillAnswer) {
            const _var2700 = window.advancedFillAnswer(_var2681);
            if (_var2700) {
              _var647("Math solved: " + (_var2682 || "Unknown") + " = " + _var2681 + " (filled via advanced method)");
              return;
            }
          }
          _var648("Math answer input field not found on page.");
          return;
        }
        const _var2701 = _var2680.closest("form");
        const _var2702 = String(_var2681);
        _var2680.focus();
        await new Promise(_var2703 => // TOLOOK
        setTimeout(_var2703, 50));
        const _var2704 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
        if (_var2704) {
          _var2704.call(_var2680, _var2702);
        } else {
          _var2680.value = _var2702;
        }
        _var2680.setAttribute("value", _var2702);
        const _var2705 = new Event("input", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var2705, "target", {
          writable: false,
          value: _var2680,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(_var2705, "currentTarget", {
          writable: false,
          value: _var2680,
          enumerable: true,
          configurable: true
        });
        _var2680.dispatchEvent(_var2705);
        const _var2706 = new Event("change", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var2706, "target", {
          writable: false,
          value: _var2680,
          enumerable: true,
          configurable: true
        });
        _var2680.dispatchEvent(_var2706);
        const _var2707 = new Event("keyup", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var2707, "target", {
          writable: false,
          value: _var2680,
          enumerable: true,
          configurable: true
        });
        _var2680.dispatchEvent(_var2707);
        await new Promise(_var2708 => // TOLOOK
        setTimeout(_var2708, 100));
        _var2680.blur();
        const _var2709 = new Event("focusout", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var2709, "target", {
          writable: false,
          value: _var2680,
          enumerable: true,
          configurable: true
        });
        _var2680.dispatchEvent(_var2709);
        if (_var2701) {
          if (typeof _var2701.checkValidity === "function") {
            _var2701.checkValidity();
          }
          await new Promise(_var2710 => // TOLOOK
          setTimeout(_var2710, 200));
          try {
            const _var2711 = Object.keys(_var2680).find(_var2712 => _var2712.startsWith("__reactInternalInstance$") || _var2712.startsWith("__reactFiber$") || _var2712.startsWith("__reactContainer$"));
            if (_var2711) {
              const _var2713 = _var2680[_var2711];
              if (_var2713 && _var2713.memoizedProps) {
                const _var2714 = _var2713.memoizedProps;
                if (_var2714.onChange) {
                  const _var2715 = {
                    target: _var2680,
                    currentTarget: _var2680,
                    bubbles: true,
                    cancelable: true,
                    defaultPrevented: false,
                    eventPhase: 3,
                    isTrusted: false,
                    nativeEvent: _var2705,
                    preventDefault: () => {},
                    stopPropagation: () => {},
                    type: "change"
                  };
                  try {
                    _var2714.onChange(_var2715);
                  } catch (_var2716) {}
                }
              }
            }
          } catch (_var2717) {}
          const _var2718 = _var2701.querySelector("button[type=\"submit\"]");
          if (_var2718) {
            _var2718.removeAttribute("disabled");
            _var2718.disabled = false;
            _var2718.classList.remove("bg-gray-400", "cursor-not-allowed");
            _var2718.classList.add("bg-[#28a745]", "hover:bg-[#218838]", "focus:ring-[#218838]", "cursor-pointer");
            _var2701.dispatchEvent(new Event("input", {
              bubbles: true
            }));
            _var2701.dispatchEvent(new Event("change", {
              bubbles: true
            }));
            _var243("Submit button enabled");
          }
        }
        _var2680.style.border = "2px solid #22c55e";
        // TOLOOK
        setTimeout(() => {
          _var2680.style.border = "";
        }, 2000);
        _var647("Math solved: " + captchaData.text + " = " + _var2681);
      } catch (_var2719) {
        _var648("Math Solve failed: " + _var2719.message);
      }
    }, "#8b5cf6");
    _var2678.style.flex = "1";
    _var2678.style.fontSize = "12px";
    _var2678.style.margin = "0";
    _var2678.style.fontWeight = "400";
    _var2678.style.boxSizing = "border-box";
    _var2678.style.borderRadius = "8px";
    _var2677.appendChild(_var2678);
    _var2671.appendChild(_var2677);
    const _var2720 = document.createElement("div");
    _var2720.style.cssText = `
            display: flex;
            gap: 8px;
        `;
    const _var2721 = _var1073("Application Top", () => _var2722(), "#ef4444");
    _var2721.style.flex = "1";
    _var2721.style.fontSize = "12px";
    _var2721.style.margin = "0";
    _var2721.style.fontWeight = "400";
    _var2721.style.boxSizing = "border-box";
    _var2721.style.borderRadius = "8px";
    _var2720.appendChild(_var2721);
    const _var2723 = _var1073("Application Bottom", () => _var2724(), "#06b6d4");
    _var2723.style.flex = "1";
    _var2723.style.fontSize = "12px";
    _var2723.style.margin = "0";
    _var2723.style.fontWeight = "400";
    _var2723.style.boxSizing = "border-box";
    _var2723.style.borderRadius = "8px";
    _var2720.appendChild(_var2723);
    _var2671.appendChild(_var2720);
    const _var2725 = document.createElement("div");
    _var2725.style.cssText = `
            display: flex;
            gap: 8px;
        `;
    const _var2726 = _var1073("Personal", () => _var2727(), "#8b5cf6");
    _var2726.style.flex = "1";
    _var2726.style.fontSize = "12px";
    _var2726.style.margin = "0";
    _var2726.style.fontWeight = "400";
    _var2726.style.boxSizing = "border-box";
    _var2726.style.borderRadius = "8px";
    _var2725.appendChild(_var2726);
    const _var2728 = _var1073("Fill All", () => _var2729(), "#10b981");
    _var2728.style.flex = "1";
    _var2728.style.fontSize = "12px";
    _var2728.style.margin = "0";
    _var2728.style.fontWeight = "400";
    _var2728.style.boxSizing = "border-box";
    _var2728.style.borderRadius = "8px";
    _var2725.appendChild(_var2728);
    _var2671.appendChild(_var2725);
    _var2590.appendChild(_var2671);
    const _var2730 = _var1073("Clear All Fields", () => _var2731(), "#ef4444");
    _var2730.style.fontSize = "12px";
    _var2730.style.marginBottom = "6px";
    _var2590.appendChild(_var2730);
    _var2590.appendChild(_var2591);
    _var2590.appendChild(_var2598);
    const _var2732 = document.createElement("div");
    _var2732.style.cssText = `
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 12px;
            margin-bottom: 0px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        `;
    const _var2733 = document.createElement("div");
    _var2733.style.marginBottom = "6px";
    const _var2734 = document.createElement("label");
    _var2734.textContent = "📝 Paste fetch(...) snippet";
    _var2734.style.cssText = `
            display: block;
            font-weight: 600;
            font-size: 9px;
            color: #374151;
            margin-bottom: 0px;
        `;
    _var2733.appendChild(_var2734);
    const _var2735 = document.createElement("textarea");
    _var2735.id = "fsr-input";
    _var2735.placeholder = "fetch(\"" + _var98.getEndpointUrl("mobile-verify") + "\", {\"headers\":{\"accept\":\"*/*\"},\"body\":null,\"method\":\"GET\"});";
    _var2735.style.cssText = `
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            background: #ffffff;
            color: #1f2937;
            padding: 6px 10px;
            font: 500 9px system-ui;
            min-height: 70px;
            resize: vertical;
            line-height: 1.3;
            transition: all 0.3s ease;
        `;
    _var2733.appendChild(_var2735);
    _var2732.appendChild(_var2733);
    const _var2736 = document.createElement("div");
    _var2736.style.cssText = `
            display: flex;
            gap: 8px;
            margin-bottom: 0px;
        `;
    const _var2737 = document.createElement("div");
    _var2737.style.flex = "1";
    const _var2738 = document.createElement("label");
    _var2738.textContent = "🎯 Number of Hits";
    _var2738.style.cssText = `
            display: block;
            font-weight: 600;
            font-size: 8px;
            color: #374151;
            margin-bottom: 0px;
        `;
    _var2737.appendChild(_var2738);
    const _var2739 = document.createElement("input");
    _var2739.type = "text";
    _var2739.id = "fsr-count";
    _var2739.value = "10";
    _var2739.placeholder = "How many times to send";
    _var2739.style.cssText = `
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            background: #ffffff;
            color: #1f2937;
            padding: 6px 10px;
            font: 500 9px system-ui;
            transition: all 0.3s ease;
        `;
    _var2737.appendChild(_var2739);
    _var2736.appendChild(_var2737);
    const _var2740 = document.createElement("div");
    _var2740.style.flex = "1";
    const _var2741 = document.createElement("label");
    _var2741.textContent = "⏱️ Time Interval";
    _var2741.style.cssText = `
            display: block;
            font-weight: 600;
            font-size: 8px;
            color: #374151;
            margin-bottom: 0px;
        `;
    _var2740.appendChild(_var2741);
    const _var2742 = document.createElement("input");
    _var2742.type = "text";
    _var2742.id = "fsr-interval";
    _var2742.value = "5";
    _var2742.placeholder = "Seconds between hits";
    _var2742.style.cssText = `
            width: 100%;
            box-sizing: border-box;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            background: #ffffff;
            color: #1f2937;
            padding: 6px 10px;
            font: 500 9px system-ui;
            transition: all 0.3s ease;
        `;
    _var2740.appendChild(_var2742);
    _var2736.appendChild(_var2740);
    _var2732.appendChild(_var2736);
    const _var2743 = document.createElement("div");
    _var2743.style.cssText = `
            display: flex;
            gap: 8px;
            align-items: center;
        `;
    const _var2744 = _var1073("ONCE", () => _var2745(_var2735.value), "#1e40af", "#1d4ed8");
    _var2744.id = "fsr-once";
    _var2744.style.cssText = `
            flex: 1;
            padding: 6px 12px;
            font: 600 9px system-ui;
            height: 32px;
            border-radius: 8px;
            transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
        `;
    _var2743.appendChild(_var2744);
    const _var2746 = _var1073("Start", () => _var2747(), "#065f46", "#047857");
    _var2746.id = "fsr-start";
    _var2746.style.cssText = `
            flex: 1;
            padding: 6px 12px;
            font: 600 9px system-ui;
            height: 32px;
            border-radius: 8px;
            transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
        `;
    _var2743.appendChild(_var2746);
    const _var2748 = _var1073("Stop", () => _var2749(), "#991b1b", "#7f1d1d");
    _var2748.id = "fsr-stop";
    _var2748.disabled = true;
    _var2748.style.cssText = `
            flex: 1;
            padding: 6px 12px;
            font: 600 9px system-ui;
            height: 32px;
            border-radius: 8px;
            transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
            opacity: 0.35;
            cursor: not-allowed;
        `;
    _var2743.appendChild(_var2748);
    _var2732.appendChild(_var2743);
    _var2589.appendChild(_var2732);
    try {
      _var2385.insertBefore(_var2386, _var2385.firstChild);
      _var2387.classList.remove("active");
      _var2386.classList.add("active");
      _var2391.classList.remove("active");
      _var2473.classList.add("active");
      _var2390.insertBefore(_var2473, _var2390.firstChild);
    } catch (_var2750) {}
    const _var2751 = document.createElement("div");
    _var2751.className = "ivac-footer";
    _var2751.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-top: 1px solid #e2e8f0;
            border-radius: 0 0 12px 12px;
        `;
    _var2751.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 8px;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-top: 1px solid #e2e8f0;
            border-radius: 0 0 12px 12px;
            gap: 4px;
            overflow: hidden;
        `;
    const _var2752 = document.createElement("div");
    _var2752.style.cssText = `
            display: flex;
            gap: 4px;
            align-items: center;
            flex-shrink: 0;
        `;
    const _var2753 = document.createElement("button");
    _var2753.textContent = "P";
    _var2753.title = "Profile Manager";
    _var2753.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(59, 130, 246, 0.5);
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2753.addEventListener("click", () => {
      _var2217();
    });
    _var2753.addEventListener("mouseenter", () => {
      _var2753.style.transform = "translateY(-2px) scale(1.1)";
      _var2753.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
    _var2753.addEventListener("mouseleave", () => {
      _var2753.style.transform = "translateY(0) scale(1)";
      _var2753.style.boxShadow = "none";
    });
    _var2752.appendChild(_var2753);
    const _var2754 = document.createElement("button");
    _var2754.textContent = "C";
    _var2754.title = "Clear Tampermonkey Storage";
    _var2754.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(239, 68, 68, 0.5);
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2754.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all Tampermonkey storage? This will remove all saved settings, profiles, and API keys.")) {
        try {
          const _var2755 = [];
          const _var2756 = [_var38, _var39, _var40, _var41, _var42, _var43, _var44, _var45, _var46, _var78, _var30, _var33, _var34, _var35, "submit_app_captcha_enabled", "send_verification_captcha_enabled", "pay_now_captcha_enabled", _var615.profilesKey, _var615.currentProfileKey, "site_key_config", "ivac_endpoint_config", "capsolverApiKey", "userProfiles", "currentProfileId"];
          _var2756.forEach(_var2757 => {
            try {
              GM_deleteValue(_var2757);
            } catch (_var2758) {}
          });
          for (let _var2759 = 0; _var2759 < 100; _var2759++) {
            try {
              GM_deleteValue("profile_" + _var2759);
            } catch (_var2760) {
              break;
            }
          }
          if (typeof _var616 !== "undefined") {
            _var616 = [];
          }
          if (typeof _var617 !== "undefined") {
            _var617 = null;
          }
          if (typeof _var128 !== "undefined") {
            _var128 = {
              profileName: "Default",
              personalInfo: {},
              applicationInfo: {},
              paymentInfo: {}
            };
          }
          alert("Tampermonkey storage cleared successfully! Please reload the page.");
          location.reload();
        } catch (_var2761) {
          alert("Error clearing storage: " + _var2761.message);
        }
      }
    });
    _var2754.addEventListener("mouseenter", () => {
      _var2754.style.transform = "translateY(-2px) scale(1.1)";
      _var2754.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.3)";
    });
    _var2754.addEventListener("mouseleave", () => {
      _var2754.style.transform = "translateY(0) scale(1)";
      _var2754.style.boxShadow = "none";
    });
    _var2752.appendChild(_var2754);
    const _var2762 = document.createElement("button");
    _var2762.textContent = "T";
    _var2762.title = "Auto Retry Delay";
    _var2762.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(34, 197, 94, 0.5);
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2762.addEventListener("click", () => {
      _var2249();
    });
    _var2762.addEventListener("mouseenter", () => {
      _var2762.style.transform = "translateY(-2px) scale(1.1)";
      _var2762.style.boxShadow = "0 4px 12px rgba(34, 197, 94, 0.3)";
    });
    _var2762.addEventListener("mouseleave", () => {
      _var2762.style.transform = "translateY(0) scale(1)";
      _var2762.style.boxShadow = "none";
    });
    _var2752.appendChild(_var2762);
    const _var2763 = document.createElement("div");
    _var2763.style.cssText = `
            display: flex;
            gap: 4px;
            align-items: center;
            flex: 1;
            justify-content: center;
            min-width: 0;
        `;
    const _var2764 = document.createElement("button");
    _var2764.id = "load-mobile-btn";
    _var2764.setAttribute("data-captcha-type", "mobile-verify");
    _var2764.textContent = "M";
    _var2764.title = "Mobile Verify";
    _var2764.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(59, 130, 246, 0.5);
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2764.addEventListener("click", async () => {
      _var243("Loading Mobile Verify captcha...");
      try {
        const _var2765 = await _var1043();
        if (_var2765) {
          _var742 = _var2765;
          _var743 = true;
          _var747();
          _var647("Mobile Verify captcha solved successfully! (reserved for 150 seconds)");
        } else {
          _var648("Failed to solve Mobile Verify captcha");
        }
      } catch (_var2766) {
        _var648("Failed to load Mobile Verify captcha: " + _var2766.message);
      }
    });
    _var2763.appendChild(_var2764);
    const _var2767 = document.createElement("button");
    _var2767.id = "load-app-btn";
    _var2767.setAttribute("data-captcha-type", "application");
    _var2767.textContent = "A";
    _var2767.title = "Application";
    _var2767.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(168, 85, 247, 0.5);
            background: rgba(168, 85, 247, 0.2);
            color: #a855f7;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2767.addEventListener("click", async () => {
      _var243("Loading Application captcha...");
      try {
        const _var2768 = _var80.getSiteKey("payment/application-info-submit", "turnstile");
        const _var2769 = await _var1031(_var2768);
        if (_var2769) {
          _var740 = _var2769;
          _var741 = true;
          _var647("Application captcha solved successfully!");
        } else {
          _var648("Failed to solve Application captcha");
        }
      } catch (_var2770) {
        _var648("Failed to load Application captcha: " + _var2770.message);
      }
    });
    _var2763.appendChild(_var2767);
    const _var2771 = document.createElement("button");
    _var2771.id = "load-pay-btn";
    _var2771.setAttribute("data-captcha-type", "paynow");
    _var2771.textContent = "P";
    _var2771.title = "Paynow";
    _var2771.style.cssText = `
            width: 28px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid rgba(234, 88, 12, 0.5);
            background: rgba(234, 88, 12, 0.2);
            color: #ea580c;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
        `;
    _var2771.addEventListener("click", async () => {
      _var243("Loading Paynow captcha...");
      try {
        const _var2772 = await _var1037();
        if (_var2772) {
          _var737 = _var2772;
          _var738 = true;
          _var647("Paynow captcha solved successfully!");
        } else {
          _var648("Failed to solve Paynow captcha");
        }
      } catch (_var2773) {
        _var648("Failed to load Paynow captcha: " + _var2773.message);
      }
    });
    _var2763.appendChild(_var2771);
    const _var2774 = document.createElement("div");
    _var2774.style.cssText = `
            display: flex;
            align-items: center;
            gap: 4px;
            flex-shrink: 0;
            min-width: 0;
        `;
    _var2774.innerHTML = `
            <span style="font-weight: 900; font-size: 11px; background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: none;">NemBas</span>
        `;
    _var2751.appendChild(_var2752);
    _var2751.appendChild(_var2763);
    _var2751.appendChild(_var2774);
    _var2382.appendChild(_var2751);
    _var2386.addEventListener("click", () => _var1578(0));
    _var2387.addEventListener("click", () => _var1578(1));
    _var2388.addEventListener("click", () => _var1578(2));
    _var2389.addEventListener("click", () => _var1578(3));
    let _var2775 = false;
    let _var2776;
    let _var2777;
    _var2383.addEventListener("mousedown", _var2778);
    document.addEventListener("mousemove", _var2779);
    document.addEventListener("mouseup", _var2780);
    document.addEventListener("mouseleave", _var2780);
    function _var2778(_var2781) {
      if (_var2781.button !== 0) {
        return;
      }
      _var2775 = true;
      const _var2782 = _var2381.getBoundingClientRect();
      _var2776 = _var2781.clientX - _var2782.left;
      _var2777 = _var2781.clientY - _var2782.top;
      _var2381.classList.add("ivac-dragging");
      _var2781.preventDefault();
    }
    function _var2779(_var2783) {
      if (!_var2775) {
        return;
      }
      const _var2784 = parseFloat(_var2381.dataset.scale || "1");
      const _var2785 = (_var2783.clientX - _var2776) / _var2784;
      const _var2786 = (_var2783.clientY - _var2777) / _var2784;
      _var2381.style.left = _var2785 + "px";
      _var2381.style.top = _var2786 + "px";
      _var2381.style.right = "auto";
    }
    function _var2780() {
      _var2775 = false;
      _var2381.classList.remove("ivac-dragging");
    }
    function _var2787() {
      _var2382.style.display = "none";
      if (!document.getElementById("ivac-reopen-floating")) {
        const _var2788 = document.createElement("button");
        _var2788.id = "ivac-reopen-floating";
        _var2788.className = "ivac-reopen-btn";
        _var2788.title = "Open Panel";
        _var2788.textContent = "IVAC";
        _var2788.addEventListener("click", () => {
          _var2382.style.display = "block";
          _var2788.remove();
        });
        document.body.appendChild(_var2788);
      }
    }
    _var2384.addEventListener("click", _var2789 => {
      _var2789.stopPropagation();
      _var2787();
    });
    _var2787();
  }
  function _var2790() {
    try {
      if (typeof stopTokenCountdown === "function") {
        stopTokenCountdown();
      }
      if (typeof _var2791 !== "undefined" && _var2791) {
        clearInterval(_var2791);
      }
      const _var2792 = document.getElementById("ivac-container-root");
      if (_var2792) {
        const _var2793 = _var2792.cloneNode(true);
        _var2792.parentNode.replaceChild(_var2793, _var2792);
      }
    } catch (_var2794) {}
  }
  function _var2795() {
    if (!window.location.href.includes("payment.ivacbd.com")) {
      return false;
    }
    const _var2796 = document.title;
    if (_var2796 === "Just a moment..." || _var2796.includes("Checking your browser") || _var2796.includes("Please wait")) {
      return false;
    }
    if (_var2796 !== "Online Application | IVAC") {
      return false;
    }
    if (document.readyState !== "complete") {
      return false;
    }
    const _var2797 = document.body;
    if (!_var2797 || _var2797.children.length === 0) {
      return false;
    }
    return true;
  }
  function _var2798() {
    if (_var2799) {
      return;
    }
    if (_var2795()) {
      _var2800();
    } else {
      // TOLOOK
      setTimeout(_var2798, 1000);
    }
  }
  (function () {
    'use strict';

    console.log("[IVAC] Waiting for popup close button...");
    const _var2801 = new MutationObserver(() => {
      const _var2802 = Array.from(document.querySelectorAll("button")).find(_var2803 => {
        if (_var2803.textContent.trim() !== "✕") {
          return false;
        }
        if (_var2803.classList.contains("ivac-modal-close")) {
          return false;
        }
        if (_var2803.closest(".ivac-modal") || _var2803.closest(".ivac-modal-overlay")) {
          return false;
        }
        return true;
      });
      if (_var2802) {
        console.log("[IVAC] Popup close button found. Clicking...");
        _var2802.click();
        _var2801.disconnect();
      }
    });
    _var2801.observe(document.body, {
      childList: true,
      subtree: true
    });
  })();
  function _var2804() {
    try {
      const _var2805 = GM_getValue("ivac_session_config", "");
      if (_var2805) {
        const _var2806 = JSON.parse(_var2805);
        return _var2806;
      }
    } catch (_var2807) {}
    return null;
  }
  function _var2808() {
    try {
      const _var2809 = GM_getValue("ivac_api_urls", "");
      if (_var2809) {
        const _var2810 = JSON.parse(_var2809);
        Object.assign(_var702, _var2810);
      }
    } catch (_var2811) {}
  }
  function _var2812() {
    try {
      const _var2813 = GM_getValue("ivac_captcha_token_fields", "");
      if (_var2813) {
        const _var2814 = JSON.parse(_var2813);
        Object.assign(CAPTCHA_TOKEN_FIELDS, _var2814);
      }
    } catch (_var2815) {}
  }
  function _var2816() {
    try {
      const _var2817 = GM_getValue("ivac_site_keys", "");
      if (_var2817) {
        const _var2818 = JSON.parse(_var2817);
        Object.assign(SITE_KEYS, _var2818);
      }
    } catch (_var2819) {}
  }
  let _var2799 = false;
  function _var2800() {
    if (_var2799) {
      return;
    }
    _var2177();
    _var2808();
    _var2812();
    _var2816();
    _var2804();
    _var618();
    _var2380();
    // TOLOOK
    setTimeout(() => {
      _var2286();
      _var2235();
      _var257();
      const _var2820 = Number(localStorage.getItem("login_expire_at") || "0");
      if (_var2820 && _var2820 > Date.now()) {
        const _var2821 = document.querySelector(".ivac-tab-header");
        if (_var2821) {
          _var2822(_var2821);
        }
      }
    }, 200);
    _var2799 = true;
  }
  let _var2823 = false;
  let _var2824 = null;
  let _var2825 = 0;
  let _var2826 = 0;
  function _var2827(_var2828) {
    const _var2829 = String(_var2828 || "").match(/fetch\s*\(\s*(['"])(.*?)\1\s*,\s*(\{[\s\S]*\})\s*\)/);
    if (!_var2829) {
      throw new Error("Invalid fetch(...) snippet");
    }
    const _var2830 = _var2829[2];
    let _var2831;
    try {
      _var2831 = new Function("return (" + _var2829[3] + ")")();
    } catch (_var2832) {
      throw new Error("Bad options: " + _var2832.message);
    }
    return {
      url: _var2830,
      options: _var2831
    };
  }
  function _var2745(_var2833) {
    let _var2834;
    try {
      _var2834 = _var2827(_var2833);
    } catch (_var2835) {
      return;
    }
    const {
      url: _var2836,
      options: _var2837
    } = _var2834;
    const _var2838 = (_var2837.method || "GET").toUpperCase();
    const _var2839 = _var2837.headers || {};
    let _var2840 = _var2837.body;
    if (_var2840 && typeof _var2840 === "object") {
      _var2840 = JSON.stringify(_var2840);
    }
    try {
      unsafeWindow.fetch(_var2836, {
        method: _var2838,
        headers: _var2839,
        body: /(POST|PUT|PATCH|DELETE|OPTIONS)/.test(_var2838) ? _var2840 ?? null : undefined
      }).then(_var2841 => {
        const _var2842 = _var2841.status === 200;
      }).catch(_var2843 => {});
    } catch (_var2844) {}
  }
  function _var2845(_var2846) {
    const _var2847 = Number(_var2846) || 5;
    return Math.max(1, _var2847) * 1000;
  }
  function _var2848() {
    if (!_var2823) {
      return;
    }
    _var2825++;
    const _var2849 = document.getElementById("fsr-input");
    _var2745(_var2849.value);
    if (_var2825 >= _var2826) {
      _var2749();
      return;
    }
    _var2850();
  }
  function _var2850() {
    if (!_var2823) {
      return;
    }
    const _var2851 = document.getElementById("fsr-interval");
    const _var2852 = _var2845(_var2851.value);
    _var2824 = // TOLOOK
    setTimeout(_var2848, _var2852);
  }
  function _var2747() {
    if (_var2823) {
      return;
    }
    const _var2853 = document.getElementById("fsr-input");
    if (!_var2853.value.trim()) {
      return;
    }
    const _var2854 = document.getElementById("fsr-count");
    const _var2855 = Number(_var2854.value) || 10;
    if (_var2855 < 1) {
      return;
    }
    _var2823 = true;
    _var2825 = 0;
    _var2826 = _var2855;
    const _var2856 = document.getElementById("fsr-start");
    const _var2857 = document.getElementById("fsr-stop");
    const _var2858 = document.getElementById("fsr-once");
    _var2856.disabled = true;
    _var2857.disabled = false;
    _var2858.disabled = true;
    _var2856.style.opacity = "0.35";
    _var2856.style.cursor = "not-allowed";
    _var2857.style.opacity = "1";
    _var2857.style.cursor = "pointer";
    _var2858.style.opacity = "0.35";
    _var2858.style.cursor = "not-allowed";
    _var2850();
  }
  function _var2749() {
    _var2823 = false;
    if (_var2824) {
      clearTimeout(_var2824);
    }
    const _var2859 = document.getElementById("fsr-start");
    const _var2860 = document.getElementById("fsr-stop");
    const _var2861 = document.getElementById("fsr-once");
    _var2859.disabled = false;
    _var2860.disabled = true;
    _var2861.disabled = false;
    _var2859.style.opacity = "1";
    _var2859.style.cursor = "pointer";
    _var2860.style.opacity = "0.35";
    _var2860.style.cursor = "not-allowed";
    _var2861.style.opacity = "1";
    _var2861.style.cursor = "pointer";
    _var2825 = 0;
    _var2826 = 0;
  }
  function _var2862(_var2863, _var2864) {
    if (!_var2863 || _var2864 === undefined || _var2864 === null) {
      return false;
    }
    try {
      _var2863.focus();
      _var2863.click();
      if (_var2863.type === "text" || _var2863.type === "tel" || _var2863.type === "email" || _var2863.type === "password") {
        const _var2865 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        _var2865.call(_var2863, "");
        _var2863.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        const _var2866 = String(_var2864).split("");
        let _var2867 = "";
        for (let _var2868 = 0; _var2868 < _var2866.length; _var2868++) {
          _var2867 += _var2866[_var2868];
          _var2865.call(_var2863, _var2867);
          const _var2869 = new Event("input", {
            bubbles: true
          });
          Object.defineProperty(_var2869, "data", {
            value: _var2866[_var2868]
          });
          _var2863.dispatchEvent(_var2869);
          _var2863.dispatchEvent(new KeyboardEvent("keydown", {
            key: _var2866[_var2868],
            bubbles: true
          }));
          _var2863.dispatchEvent(new KeyboardEvent("keypress", {
            key: _var2866[_var2868],
            bubbles: true
          }));
          _var2863.dispatchEvent(new KeyboardEvent("keyup", {
            key: _var2866[_var2868],
            bubbles: true
          }));
        }
        if (_var2867 !== _var2863.value) {
          _var2865.call(_var2863, _var2867);
          _var2863.dispatchEvent(new Event("input", {
            bubbles: true
          }));
        }
      } else if (_var2863.tagName === "SELECT") {
        _var2863.value = _var2864;
        _var2863.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        _var2863.dispatchEvent(new Event("input", {
          bubbles: true
        }));
      } else if (_var2863.tagName === "TEXTAREA") {
        const _var2870 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
        _var2870.call(_var2863, _var2864);
        _var2863.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        _var2863.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      }
      _var2863.dispatchEvent(new Event("change", {
        bubbles: true
      }));
      _var2863.dispatchEvent(new Event("input", {
        bubbles: true
      }));
      _var2863.dispatchEvent(new Event("blur", {
        bubbles: true
      }));
      _var2863.blur();
      _var2863.dispatchEvent(new Event("keyup", {
        bubbles: true
      }));
      _var2863.dispatchEvent(new Event("focusout", {
        bubbles: true
      }));
      return true;
    } catch (_var2871) {
      return false;
    }
  }
  function _var2872(_var2873, _var2874) {
    const _var2875 = document.querySelectorAll(_var2873);
    let _var2876 = 0;
    _var2875.forEach(_var2877 => {
      if (_var2877.closest("#ivac-container-root") || _var2877.closest(".ivac-autofill-panel")) {
        return;
      }
      if (_var2862(_var2877, _var2874)) {
        _var2876++;
      }
    });
    return _var2876;
  }
  function _var2878(_var2879) {
    const _var2880 = document.getElementById("ivac-autofill-status");
    if (_var2880) {
      _var2880.textContent = _var2879;
      _var2880.style.color = "#10b981";
    }
  }
  function _var2674() {
    if (!_var128 || !_var128.personalInfo) {
      return;
    }
    const _var2881 = _var128.personalInfo.phone || "";
    const _var2882 = _var128.personalInfo.password || "";
    let _var2883 = 0;
    const _var2884 = new Set();
    const _var2885 = ["input[name=\"phone\"]", "input[type=\"tel\"]", "input[name*=\"mobile\"]", "input[placeholder*=\"mobile\" i]", "input[placeholder*=\"phone\" i]", "input[id*=\"mobile\"]", "input[id*=\"phone\"]"];
    for (const _var2886 of _var2885) {
      const _var2887 = document.querySelectorAll(_var2886);
      for (const _var2888 of _var2887) {
        if (_var2888.closest("#ivac-container-root") || _var2888.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2884.has(_var2888)) {
          continue;
        }
        if (_var2862(_var2888, _var2881)) {
          _var2883++;
          _var2884.add(_var2888);
        }
      }
    }
    const _var2889 = ["input[type=\"password\"]", "input[name*=\"password\"]", "input[id*=\"password\"]", "input[placeholder*=\"password\" i]"];
    for (const _var2890 of _var2889) {
      const _var2891 = document.querySelectorAll(_var2890);
      for (const _var2892 of _var2891) {
        if (_var2892.closest("#ivac-container-root") || _var2892.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2884.has(_var2892)) {
          continue;
        }
        if (_var2862(_var2892, _var2882)) {
          _var2883++;
          _var2884.add(_var2892);
        }
      }
    }
    _var2878("Mobile verification fields filled: " + _var2883 + " fields");
  }
  function _var2893(_var2894) {
    if (!_var2894) {
      return false;
    }
    const _var2895 = _var2894.classList;
    if (_var2895.contains("opacity-0") || _var2895.contains("h-0") || _var2895.contains("w-0") || _var2895.contains("pointer-events-none") || _var2895.contains("overflow-hidden")) {
      return false;
    }
    const _var2896 = window.getComputedStyle(_var2894);
    if (_var2896.opacity === "0" || _var2896.height === "0px" || _var2896.width === "0px" || _var2896.pointerEvents === "none" || _var2896.visibility === "hidden" || _var2896.display === "none") {
      return false;
    }
    const _var2897 = _var2894.getBoundingClientRect();
    if (_var2897.width === 0 || _var2897.height === 0) {
      return false;
    }
    return true;
  }
  function _var2676() {
    if (!_var128 || !_var128.personalInfo) {
      return;
    }
    const _var2898 = _var128.personalInfo.phone || "";
    const _var2899 = _var128.personalInfo.password || "";
    let _var2900 = 0;
    const _var2901 = new Set();
    const _var2902 = ["input[name=\"phone\"]", "input[type=\"tel\"]", "input[name*=\"mobile\"]"];
    for (const _var2903 of _var2902) {
      const _var2904 = document.querySelectorAll(_var2903);
      for (const _var2905 of _var2904) {
        if (_var2905.closest("#ivac-container-root") || _var2905.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2901.has(_var2905)) {
          continue;
        }
        if (_var2862(_var2905, _var2898)) {
          _var2900++;
          _var2901.add(_var2905);
        }
      }
    }
    const _var2906 = ["input[type=\"password\"]", "input[name*=\"password\"]", "input[id*=\"password\"]", "input[placeholder*=\"password\" i]", "input[autocomplete=\"current-password\"]", "input[autocomplete=\"new-password\"]", "input[name*=\"pass\"]", "input[name*=\"secret\"]", "input[name*=\"pwd\"]"];
    const _var2907 = [];
    for (const _var2908 of _var2906) {
      const _var2909 = document.querySelectorAll(_var2908);
      for (const _var2910 of _var2909) {
        if (_var2910.closest("#ivac-container-root") || _var2910.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2901.has(_var2910)) {
          continue;
        }
        _var2907.push(_var2910);
      }
    }
    const _var2911 = _var2907.filter(_var2893);
    let _var2912 = null;
    for (const _var2913 of _var2911) {
      if (_var2913.getAttribute("data-autocomplete-fixed") === "true" || _var2913.getAttribute("autocomplete") === "current-password") {
        _var2912 = _var2913;
        break;
      }
    }
    if (!_var2912 && _var2911.length > 0) {
      _var2912 = _var2911[0];
    }
    if (_var2912) {
      if (_var2862(_var2912, _var2899)) {
        _var2900++;
        _var2901.add(_var2912);
      }
    }
    _var2878("Login fields filled: " + _var2900 + " fields");
  }
  function _var2722() {
    if (!_var128 || !_var128.applicationInfo) {
      return;
    }
    let _var2914 = 0;
    _var2914 += _var2872("select#center", _var128.applicationInfo.highcom || "");
    _var2914 += _var2872("input#webfile_id", _var128.applicationInfo.webFileId || "");
    const _var2915 = document.querySelectorAll("input[maxlength=\"12\"]");
    if (_var2915.length >= 2) {
      _var2862(_var2915[1], _var128.applicationInfo.webFileId || "");
      _var2914++;
    }
    _var2878("Application top fields filled: " + _var2914 + " fields");
  }
  function _var2724() {
    if (!_var128 || !_var128.applicationInfo) {
      return;
    }
    let _var2916 = 0;
    const _var2917 = document.querySelectorAll("select[name=\"center\"], select#center");
    for (const _var2918 of _var2917) {
      if (_var2918.closest("#ivac-container-root") || _var2918.closest(".ivac-autofill-panel")) {
        continue;
      }
      const _var2919 = _var128.applicationInfo.ivacId || "";
      if (_var2919) {
        const _var2920 = _var2918.querySelectorAll("option");
        let _var2921 = "";
        for (const _var2922 of _var2920) {
          const _var2923 = _var2922.value || "";
          if (_var2923.endsWith("|" + _var2919)) {
            _var2921 = _var2923;
            break;
          }
        }
        if (_var2921) {
          if (_var2862(_var2918, _var2921)) {
            _var2916++;
          }
        } else {}
      }
    }
    const _var2924 = ["select[name=\"visa_type\"]", "select#visa_type"];
    for (const _var2925 of _var2924) {
      const _var2926 = document.querySelectorAll(_var2925);
      for (const _var2927 of _var2926) {
        if (_var2927.closest("#ivac-container-root") || _var2927.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2862(_var2927, _var128.applicationInfo.visaTypeId || "")) {
          _var2916++;
        }
      }
    }
    const _var2928 = ["select[name=\"family_count\"]", "select#family_count"];
    for (const _var2929 of _var2928) {
      const _var2930 = document.querySelectorAll(_var2929);
      for (const _var2931 of _var2930) {
        if (_var2931.closest("#ivac-container-root") || _var2931.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2862(_var2931, _var128.applicationInfo.familyCount || "0")) {
          _var2916++;
        }
      }
    }
    const _var2932 = ["textarea[name=\"visit_purpose\"]", "textarea[name=\"asweoi_erilfs\"]", "textarea#visit_purpose", "textarea#asweoi_erilfs", "input[name=\"visit_purpose\"]", "input[name=\"asweoi_erilfs\"]"];
    const _var2933 = _var128.applicationInfo.visitPurpose || "";
    for (const _var2934 of _var2932) {
      const _var2935 = document.querySelectorAll(_var2934);
      for (const _var2936 of _var2935) {
        if (_var2936.closest("#ivac-container-root") || _var2936.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2862(_var2936, _var2933)) {
          _var2916++;
        }
      }
    }
    _var2878("Application bottom fields filled: " + _var2916 + " fields");
  }
  function _var2727() {
    if (!_var128 || !_var128.personalInfo) {
      return;
    }
    let _var2937 = 0;
    const _var2938 = ["input[name=\"first-name\"]", "input[name=\"full-name\"]", "input[name=\"full_name\"]", "input#full_name", "input#first-name", "input#full-name"];
    const _var2939 = _var128.personalInfo.fullName || _var128.personalInfo.firstName || "";
    for (const _var2940 of _var2938) {
      const _var2941 = document.querySelectorAll(_var2940);
      for (const _var2942 of _var2941) {
        if (_var2942.closest("#ivac-container-root") || _var2942.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2862(_var2942, _var2939)) {
          _var2937++;
        }
      }
    }
    const _var2943 = ["input[name=\"email\"]", "input[type=\"email\"]", "input#email"];
    for (const _var2944 of _var2943) {
      const _var2945 = document.querySelectorAll(_var2944);
      for (const _var2946 of _var2945) {
        if (_var2946.closest("#ivac-container-root") || _var2946.closest(".ivac-autofill-panel")) {
          continue;
        }
        if (_var2862(_var2946, _var128.personalInfo.email || "")) {
          _var2937++;
        }
      }
    }
    const _var2947 = ["input[name=\"user_phone\"]", "input[name=\"phone\"]"];
    for (const _var2948 of _var2947) {
      const _var2949 = document.querySelectorAll(_var2948);
      for (const _var2950 of _var2949) {
        if (_var2950.closest("#ivac-container-root") || _var2950.closest(".ivac-autofill-panel")) {
          continue;
        }
        const _var2951 = _var128.personalInfo.phone || "";
        if (_var2862(_var2950, _var2951)) {
          _var2937++;
        }
      }
    }
    const _var2952 = document.querySelectorAll("input[name=\"webfile_id\"]");
    for (const _var2953 of _var2952) {
      if (_var2953.closest("#ivac-container-root") || _var2953.closest(".ivac-autofill-panel")) {
        continue;
      }
      if (_var2862(_var2953, _var128.applicationInfo.webFileId || "")) {
        _var2937++;
      }
    }
    if (_var128.personalInfo.familyMembers && _var128.personalInfo.familyMembers.length > 0) {
      _var128.personalInfo.familyMembers.forEach((_var2954, _var2955) => {
        const _var2956 = _var2954.fullName || _var2954.name || "";
        const _var2957 = _var2954.webFileNo || _var2954.webFileNumber || _var2954.againWebFileNo || _var2954.webfile_no || _var2954.webfile_id || "";
        const _var2958 = [{
          selector: "input[name=\"full-name-" + _var2955 + "\"]",
          value: _var2956,
          label: "Family member " + _var2955 + " name"
        }, {
          selector: "input[name=\"web-file-number-" + _var2955 + "\"]",
          value: _var2957,
          label: "Family member " + _var2955 + " webfile"
        }, {
          selector: "input[name=\"web-file-number-repeat-" + _var2955 + "\"]",
          value: _var2957,
          label: "Family member " + _var2955 + " webfile repeat"
        }];
        for (const {
          selector: _var2959,
          value: _var2960,
          label: _var2961
        } of _var2958) {
          const _var2962 = document.querySelectorAll(_var2959);
          for (const _var2963 of _var2962) {
            if (_var2963.closest("#ivac-container-root") || _var2963.closest(".ivac-autofill-panel")) {
              continue;
            }
            if (_var2862(_var2963, _var2960 || "")) {
              _var2937++;
            }
          }
        }
      });
    } else {}
    _var2878("Personal info fields filled: " + _var2937 + " fields");
  }
  function _var2729() {
    if (!_var128) {
      return;
    }
    let _var2964 = 0;
    let _var2965 = [];
    _var2676();
    _var2722();
    _var2724();
    _var2727();
    if (_var128.applicationInfo?.webFileId) {
      _var2965.push("✓ Webfile ID: " + _var128.applicationInfo.webFileId);
    }
    if (_var128.applicationInfo?.ivacId) {
      _var2965.push("✓ IVAC ID: " + _var128.applicationInfo.ivacId);
    }
    if (_var128.applicationInfo?.visaTypeId) {
      _var2965.push("✓ Visa Type: " + _var128.applicationInfo.visaTypeId);
    }
    if (_var128.applicationInfo?.familyCount) {
      _var2965.push("✓ Family Count: " + _var128.applicationInfo.familyCount);
    }
    if (_var128.applicationInfo?.visitPurpose) {
      _var2965.push("✓ Visit Purpose: " + _var128.applicationInfo.visitPurpose);
    }
    if (_var128.personalInfo?.fullName) {
      _var2965.push("✓ Full Name: " + _var128.personalInfo.fullName);
    }
    if (_var128.personalInfo?.email) {
      _var2965.push("✓ Email: " + _var128.personalInfo.email);
    }
    if (_var128.personalInfo?.phone) {
      _var2965.push("✓ Phone: " + _var128.personalInfo.phone);
    }
    const _var2966 = document.getElementById("ivac-field-mapping-status");
    if (_var2966) {
      _var2966.textContent = "";
      _var2965.forEach(_var2967 => {
        const _var2968 = document.createElement("div");
        _var2968.textContent = _var2967;
        _var2966.appendChild(_var2968);
      });
    }
    _var2878("All fields filled from profile: " + (_var128.profileName || "Current Profile"));
  }
  function _var2731() {
    const _var2969 = document.querySelectorAll("input, textarea, select");
    let _var2970 = 0;
    _var2969.forEach(_var2971 => {
      if (_var2971.closest("#ivac-container-root") || _var2971.closest(".ivac-autofill-panel")) {
        return;
      }
      if (_var2971.value) {
        _var2971.value = "";
        _var2971.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        _var2971.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        _var2970++;
      }
    });
    _var2878("Cleared " + _var2970 + " fields");
    const _var2972 = document.getElementById("ivac-field-mapping-status");
    if (_var2972) {
      _var2972.textContent = "All fields cleared...";
    }
  }
  const _var2973 = document.createElement("style");
  _var2973.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }

        .ivac-draggable-header {
            cursor: move;
            transition: background-color 0.2s ease;
        }


        .profile-manager-draggable-header {
            cursor: move;
        }

        .profile-manager-draggable-header * {
            cursor: move !important;
        }

        .profile-manager-draggable-header button {
            cursor: pointer !important;
        }

        .profile-manager-draggable-header:hover {
            background: #002855 !important;
        }

        .site-key-manager-draggable-header {
            cursor: move;
        }

        .site-key-manager-draggable-header * {
            cursor: move !important;
        }

        .site-key-manager-draggable-header button {
            cursor: pointer !important;
        }

        .site-key-manager-draggable-header:hover {
            background: #002855 !important;
        }


    `;
  document.head.appendChild(_var2973);
  function _var2974(_var2975, _var2976) {
    _var1207(_var2976, _var2975);
  }
  function _var1207(_var2977, _var2978) {
    const _var2979 = "customAlertPopup";
    document.getElementById(_var2979)?.remove();
    const _var2980 = _var2977 === "success";
    const _var2981 = document.createElement("div");
    _var2981.id = _var2979;
    _var2981.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,.5);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
    const _var2982 = document.createElement("div");
    _var2982.style.cssText = `
            width: 400px;
            height: 260px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: ` + (_var2980 ? "#3B82F6" : "#F45846") + `;
            color: #fff;
            border-radius: 12px;
        `;
    _var2982.innerHTML = "\n            <div style=\"font-size: 40px;\">" + (_var2980 ? "✓" : "✖") + "</div>\n            <h5 style=\"margin: 6px 0 6px 0;\">" + (_var2980 ? "Success!" : "Error!") + "</h5>\n            <p style=\"margin: 4px 0 10px 0; font-weight: 600; text-align: center; padding: 0 16px\">" + _var2978 + "</p>\n            <button style=\"padding: 6px 12px; border: none; border-radius: 6px; background: #fff; color: #333; cursor: pointer\" onclick=\"document.getElementById('" + _var2979 + "').remove()\">OK</button>\n        ";
    _var2981.appendChild(_var2982);
    document.body.appendChild(_var2981);
  }
  let _var2791 = null;
  let _var2983 = null;
  function _var2984(_var2985) {
    const _var2986 = Math.max(0, Math.floor(_var2985 / 1000));
    const _var2987 = String(Math.floor(_var2986 / 60)).padStart(2, "0");
    const _var2988 = String(_var2986 % 60).padStart(2, "0");
    return _var2987 + "." + _var2988;
  }
  function _var2822(_var2989) {
    const _var2990 = document.querySelector(".ivac-tab-header");
    if (!_var2990) {
      return;
    }
    const _var2991 = getComputedStyle(_var2990);
    if (_var2991.display !== "flex") {
      _var2990.style.display = "flex";
    }
    _var2990.style.alignItems = "center";
    const _var2992 = () => {
      if (!_var2983) {
        _var2983 = document.createElement("span");
        _var2983.className = "ivac-login-countdown-badge";
      }
      const _var2993 = _var2983.style;
      _var2993.marginLeft = "auto";
      _var2993.padding = "4px 12px";
      _var2993.borderRadius = "10px";
      _var2993.fontSize = "12px";
      _var2993.fontWeight = "800";
      _var2993.letterSpacing = "0.3px";
      _var2993.alignSelf = "center";
      _var2993.pointerEvents = "none";
      _var2993.lineHeight = "1.6";
      _var2993.userSelect = "auto";
      _var2993.border = "1px solid rgba(255,255,255,0.25)";
      _var2993.background = "rgba(255,255,255,0.12)";
      _var2993.color = "#f8fafc";
      _var2993.boxShadow = "0 4px 14px rgba(0,0,0,0.35)";
      _var2993.marginRight = "8px";
      if (_var2983.parentElement !== _var2990) {
        _var2990.appendChild(_var2983);
      }
    };
    _var2992();
    function _var2994() {
      let _var2995 = Number(localStorage.getItem("login_expire_at") || "0");
      return _var2995 || 0;
    }
    function _var2996() {
      const _var2997 = _var2994();
      if (!_var2997) {
        _var2983.textContent = "00.00";
        _var2983.style.color = "#f8fafc";
        _var2983.style.background = "rgba(255,255,255,0.12)";
        return;
      }
      const _var2998 = _var2997 - Date.now();
      if (_var2998 <= 0) {
        _var2983.textContent = "00.00";
        _var2983.style.color = "#fca5a5";
        _var2983.style.background = "rgba(220, 38, 38, 0.25)";
      } else if (_var2998 <= 300000) {
        _var2983.textContent = _var2984(_var2998);
        _var2983.style.color = "#fca5a5";
        _var2983.style.background = "rgba(220, 38, 38, 0.25)";
      } else {
        _var2983.textContent = _var2984(_var2998);
        _var2983.style.color = "#f8fafc";
        _var2983.style.background = "rgba(255,255,255,0.12)";
      }
    }
    clearInterval(_var2791);
    _var2996();
    _var2791 = // TOLOOK
    setInterval(_var2996, 1000);
  }
  function _var2999(_var3000 = _var64) {
    const _var3001 = Math.max(0, _var3000) * 60 * 1000;
    const _var3002 = Date.now() + _var3001;
    localStorage.setItem("login_expire_at", String(_var3002));
    const _var3003 = document.querySelector(".ivac-tab-header");
    if (_var3003) {
      _var2822(_var3003);
    }
  }
  function _var231() {
    if (_var2791) {
      clearInterval(_var2791);
      _var2791 = null;
    }
    localStorage.removeItem("login_expire_at");
    if (_var2983) {
      _var2983.textContent = "00.00";
      _var2983.style.color = "#f8fafc";
      _var2983.style.background = "rgba(255,255,255,0.12)";
    }
  }
  let _var3004 = null;
  function _var3005() {
    if (_var3004) {
      clearInterval(_var3004);
      _var3004 = null;
    }
    const _var3006 = 300;
    let _var3007 = _var3006;
    const _var3008 = _var3009 => Math.floor(_var3009 / 60) + ":" + String(_var3009 % 60).padStart(2, "0");
    const _var3010 = document.getElementById("otp-expire-timer");
    if (!_var3010) {
      return;
    }
    _var3010.textContent = _var3008(_var3007);
    _var3010.style.color = "#0a6fc0";
    _var3004 = // TOLOOK
    setInterval(() => {
      _var3007--;
      _var3010.textContent = _var3008(Math.max(0, _var3007));
      if (_var3007 <= 0) {
        clearInterval(_var3004);
        _var3004 = null;
        _var3010.textContent = "Expired";
        _var3010.style.color = "#b42324";
      }
    }, 1000);
  }
  function _var3011() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function _var3012() {
    const _var3013 = "0123456789abcdef";
    let _var3014 = "";
    for (let _var3015 = 0; _var3015 < 64; _var3015++) {
      _var3014 += _var3013[Math.floor(Math.random() * _var3013.length)];
    }
    return _var3014;
  }
  function _var3016() {
    const _var3017 = Date.now();
    const _var3018 = "0123456789abcdef";
    let _var3019 = "";
    for (let _var3020 = 0; _var3020 < 32; _var3020++) {
      _var3019 += _var3018[Math.floor(Math.random() * _var3018.length)];
    }
    return _var3017 + ":" + _var3019;
  }
  function _var3021() {
    return _var2694(false);
  }
  function _var2694(_var3022 = false) {
    try {
      if (!_var3022) {
        if (_var79 && _var79.text && _var79.signature && _var79.salt) {
          return {
            text: _var79.text,
            signature: _var79.signature,
            salt: _var79.salt
          };
        }
      }
      const _var3023 = document.documentElement ? document.documentElement.outerHTML : "";
      try {
        if (typeof window !== "undefined" && window.__NEXT_DATA__) {
          const _var3024 = window.__NEXT_DATA__;
          const _var3025 = (_var3026, _var3027 = "") => {
            if (!_var3026 || typeof _var3026 !== "object") {
              return null;
            }
            if (Array.isArray(_var3026)) {
              for (let _var3028 = 0; _var3028 < _var3026.length; _var3028++) {
                const _var3029 = _var3025(_var3026[_var3028], _var3027 + "[" + _var3028 + "]");
                if (_var3029) {
                  return _var3029;
                }
              }
            } else {
              if (_var3026.captcha && _var3026.captcha.text && _var3026.captcha.signature && _var3026.captcha.salt) {
                return _var3026.captcha;
              }
              for (const _var3030 in _var3026) {
                if (_var3026.hasOwnProperty(_var3030)) {
                  const _var3031 = _var3025(_var3026[_var3030], _var3027 ? _var3027 + "." + _var3030 : _var3030);
                  if (_var3031) {
                    return _var3031;
                  }
                }
              }
            }
            return null;
          };
          const _var3032 = _var3025(_var3024);
          if (_var3032) {
            return _var3032;
          }
        }
      } catch (_var3033) {}
      const _var3034 = [/\]\s*,\s*"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{\\s*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{[^}]*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/];
      for (const _var3035 of _var3034) {
        const _var3036 = _var3023.match(_var3035);
        if (_var3036 && _var3036.length === 4) {
          const _var3037 = _var3036[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3038 = _var3036[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3039 = _var3036[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          if (_var3037 && _var3038 && _var3039) {
            return {
              text: _var3037,
              signature: _var3038,
              salt: _var3039
            };
          }
        }
      }
      const _var3040 = [/(?:var|let|const|window\.)\s+\w+\s*=\s*\[[^\]]*\],\s*"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /=\s*\[[^\]]*\],\s*"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/];
      for (const _var3041 of _var3040) {
        const _var3042 = _var3023.match(_var3041);
        if (_var3042 && _var3042.length === 4) {
          const _var3043 = _var3042[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3044 = _var3042[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3045 = _var3042[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          if (_var3043 && _var3044 && _var3045) {
            return {
              text: _var3043,
              signature: _var3044,
              salt: _var3045
            };
          }
        }
      }
      const _var3046 = [];
      const _var3047 = document.querySelectorAll("script");
      for (let _var3048 = 0; _var3048 < _var3047.length; _var3048++) {
        const _var3049 = _var3047[_var3048];
        const _var3050 = _var3049.textContent || "";
        const _var3051 = _var3049.innerHTML || "";
        if (_var3050 && _var3050.includes("captcha")) {
          _var3046.push(_var3050);
        }
        if (_var3051 && _var3051.includes("captcha") && _var3051 !== _var3050) {
          _var3046.push(_var3051);
        }
      }
      if (document.body && document.body.innerHTML) {
        _var3046.push(document.body.innerHTML);
      }
      if (document.documentElement && document.documentElement.outerHTML) {
        _var3046.push(document.documentElement.outerHTML);
      }
      const _var3052 = document.querySelectorAll("script[type=\"application/json\"]");
      for (const _var3053 of _var3052) {
        try {
          const _var3054 = _var3053.textContent || _var3053.innerHTML;
          if (_var3054) {
            const _var3055 = JSON.parse(_var3054);
            const _var3056 = _var3057 => {
              if (!_var3057 || typeof _var3057 !== "object") {
                return null;
              }
              if (Array.isArray(_var3057)) {
                for (const _var3058 of _var3057) {
                  const _var3059 = _var3056(_var3058);
                  if (_var3059) {
                    return _var3059;
                  }
                }
              } else {
                if (_var3057.captcha && _var3057.captcha.text && _var3057.captcha.signature && _var3057.captcha.salt) {
                  return _var3057.captcha;
                }
                for (const _var3060 in _var3057) {
                  if (_var3057.hasOwnProperty(_var3060)) {
                    const _var3061 = _var3056(_var3057[_var3060]);
                    if (_var3061) {
                      return _var3061;
                    }
                  }
                }
              }
              return null;
            };
            const _var3062 = _var3056(_var3055);
            if (_var3062) {
              return _var3062;
            }
          }
        } catch (_var3063) {}
      }
      for (let _var3064 = 0; _var3064 < _var3047.length; _var3064++) {
        const _var3065 = _var3047[_var3064];
        const _var3066 = _var3065.textContent || _var3065.innerHTML || "";
        if (_var3066.includes("Application Info") && _var3066.includes("captcha")) {
          const _var3067 = [/\]\s*,\s*"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{\\s*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{[^}]*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/];
          for (const _var3068 of _var3067) {
            const _var3069 = _var3066.match(_var3068);
            if (_var3069 && _var3069.length === 4) {
              const _var3070 = _var3069[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3071 = _var3069[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3072 = _var3069[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              if (_var3070 && _var3071 && _var3072) {
                return {
                  text: _var3070,
                  signature: _var3071,
                  salt: _var3072
                };
              }
            }
          }
        }
      }
      for (let _var3073 = 0; _var3073 < _var3046.length; _var3073++) {
        const _var3074 = _var3046[_var3073];
        if (!_var3074 || !_var3074.includes("captcha")) {
          continue;
        }
        const _var3075 = [/\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{\\s*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\]\s*,\s*\\"captcha\\"\\s*:\\s*\\{[^}]*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\]\s*,\s*"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /\\"captcha\\"\\s*:\\s*\\{\\s*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\\"captcha\\"\\s*:\\s*\\{[^}]*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/];
        for (const _var3076 of _var3075) {
          const _var3077 = _var3074.match(_var3076);
          if (_var3077 && _var3077.length === 4) {
            const _var3078 = _var3077[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            const _var3079 = _var3077[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            const _var3080 = _var3077[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            if (_var3078 && _var3079 && _var3080) {
              return {
                text: _var3078,
                signature: _var3079,
                salt: _var3080
              };
            }
          }
        }
        const _var3081 = [/"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{\s*"text"\s*:\s*"((?:[^"\\]|\\.)+)"\s*,\s*"signature"\s*:\s*"((?:[^"\\]|\\.)+)"\s*,\s*"salt"\s*:\s*"((?:[^"\\]|\\.)+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"signature"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"salt"\s*:\s*"((?:[^"\\]|\\.)+)"/];
        for (const _var3082 of _var3081) {
          const _var3083 = _var3074.match(_var3082);
          if (_var3083 && _var3083.length === 4) {
            const _var3084 = _var3083[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            const _var3085 = _var3083[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            const _var3086 = _var3083[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
            if (_var3084 && _var3085 && _var3086) {
              return {
                text: _var3084,
                signature: _var3085,
                salt: _var3086
              };
            }
          }
        }
        try {
          let _var3087 = _var3074.indexOf("\"captcha\"");
          if (_var3087 === -1) {
            _var3087 = _var3074.indexOf("\\\"captcha\\\"");
          }
          if (_var3087 === -1) {
            continue;
          }
          let _var3088 = -1;
          let _var3089 = 0;
          let _var3090 = 0;
          for (let _var3091 = _var3087 - 1; _var3091 >= 0; _var3091--) {
            if (_var3074[_var3091] === "}") {
              _var3089++;
            }
            if (_var3074[_var3091] === "]") {
              _var3090++;
            }
            if (_var3074[_var3091] === "{") {
              if (_var3089 === 0 && _var3090 === 0) {
                _var3088 = _var3091;
                break;
              }
              _var3089--;
            }
            if (_var3074[_var3091] === "[") {
              if (_var3089 === 0 && _var3090 === 0) {
                _var3088 = _var3091;
                break;
              }
              _var3090--;
            }
          }
          if (_var3088 >= 0) {
            _var3089 = _var3074[_var3088] === "{" ? 1 : 0;
            _var3090 = _var3074[_var3088] === "[" ? 1 : 0;
            let _var3092 = _var3088 + 1;
            for (let _var3093 = _var3088 + 1; _var3093 < _var3074.length; _var3093++) {
              if (_var3074[_var3093] === "{") {
                _var3089++;
              }
              if (_var3074[_var3093] === "[") {
                _var3090++;
              }
              if (_var3074[_var3093] === "}") {
                _var3089--;
                if (_var3089 === 0 && _var3090 === 0) {
                  _var3092 = _var3093 + 1;
                  break;
                }
              }
              if (_var3074[_var3093] === "]") {
                _var3090--;
                if (_var3089 === 0 && _var3090 === 0) {
                  _var3092 = _var3093 + 1;
                  break;
                }
              }
            }
            if (_var3092 > _var3088) {
              let _var3094 = _var3074.substring(_var3088, _var3092);
              if (_var3094.includes("\\\"")) {
                _var3094 = _var3094.replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              }
              try {
                const _var3095 = JSON.parse(_var3094);
                if (Array.isArray(_var3095) && _var3095.length > 0) {
                  const _var3096 = _var3074.substring(_var3092);
                  let _var3097 = _var3096.match(/\\"captcha\\"\\s*:\\s*\\\{[^}]+\}/);
                  if (_var3097) {
                    try {
                      const _var3098 = _var3097[0].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
                      const _var3099 = JSON.parse("{" + _var3098 + "}");
                      if (_var3099.captcha && _var3099.captcha.text && _var3099.captcha.signature && _var3099.captcha.salt) {
                        return _var3099.captcha;
                      }
                    } catch (_var3100) {}
                  }
                  _var3097 = _var3096.match(/"captcha"\s*:\s*\{[^}]+\}/);
                  if (_var3097) {
                    try {
                      const _var3101 = JSON.parse("{" + _var3097[0] + "}");
                      if (_var3101.captcha && _var3101.captcha.text && _var3101.captcha.signature && _var3101.captcha.salt) {
                        return _var3101.captcha;
                      }
                    } catch (_var3102) {}
                  }
                  const _var3103 = _var3096.search(/[,\s]*"captcha"\s*:\s*\{/);
                  if (_var3103 === -1) {
                    const _var3104 = _var3096.search(/[,\s]*\\"captcha\\"\\s*:\\s*\\\{/);
                    if (_var3104 !== -1) {
                      let _var3105 = 1;
                      let _var3106 = _var3104 + _var3096.substring(_var3104).indexOf("{") + 1;
                      for (let _var3107 = _var3106; _var3107 < _var3096.length; _var3107++) {
                        if (_var3096[_var3107] === "{" || _var3096[_var3107] === "\\{") {
                          _var3105++;
                        }
                        if (_var3096[_var3107] === "}" || _var3096.substring(_var3107, _var3107 + 2) === "\\}") {
                          _var3105--;
                          if (_var3105 === 0) {
                            _var3106 = _var3107 + 1;
                            break;
                          }
                        }
                      }
                      if (_var3106 > _var3104) {
                        const _var3108 = _var3096.substring(_var3104, _var3106);
                        const _var3109 = _var3108.replace(/\\"/g, "\"").replace(/\\\\/g, "\\").replace(/\\\{/g, "{").replace(/\\\}/g, "}");
                        try {
                          const _var3110 = JSON.parse("{" + _var3109 + "}");
                          if (_var3110.captcha && _var3110.captcha.text && _var3110.captcha.signature && _var3110.captcha.salt) {
                            return _var3110.captcha;
                          }
                        } catch (_var3111) {}
                      }
                    }
                  } else {
                    let _var3112 = 1;
                    let _var3113 = _var3103 + _var3096.substring(_var3103).indexOf("{") + 1;
                    for (let _var3114 = _var3113; _var3114 < _var3096.length; _var3114++) {
                      if (_var3096[_var3114] === "{") {
                        _var3112++;
                      }
                      if (_var3096[_var3114] === "}") {
                        _var3112--;
                        if (_var3112 === 0) {
                          _var3113 = _var3114 + 1;
                          break;
                        }
                      }
                    }
                    if (_var3113 > _var3103) {
                      const _var3115 = _var3096.substring(_var3103, _var3113);
                      try {
                        const _var3116 = JSON.parse("{" + _var3115 + "}");
                        if (_var3116.captcha && _var3116.captcha.text && _var3116.captcha.signature && _var3116.captcha.salt) {
                          return _var3116.captcha;
                        }
                      } catch (_var3117) {}
                    }
                  }
                }
                if (_var3095.captcha && _var3095.captcha.text && _var3095.captcha.signature && _var3095.captcha.salt) {
                  return _var3095.captcha;
                }
              } catch (_var3118) {}
            }
          }
        } catch (_var3119) {}
      }
      try {
        const _var3120 = document.documentElement ? document.documentElement.outerHTML : "";
        const _var3121 = _var3120.search(/"captcha"/i);
        if (_var3121 !== -1) {
          const _var3122 = Math.max(0, _var3121 - 500);
          const _var3123 = Math.min(_var3120.length, _var3121 + 2000);
          const _var3124 = _var3120.substring(_var3122, _var3123);
          const _var3125 = [/"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{\s*"text"\s*:\s*"((?:[^"\\]|\\.)+)"\s*,\s*"signature"\s*:\s*"((?:[^"\\]|\\.)+)"\s*,\s*"salt"\s*:\s*"((?:[^"\\]|\\.)+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"signature"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"salt"\s*:\s*"((?:[^"\\]|\\.)+)"/, /\]\s*,\s*"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /\]\s*,\s*"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"signature"\s*:\s*"((?:[^"\\]|\\.)+)"[^}]*"salt"\s*:\s*"((?:[^"\\]|\\.)+)"/];
          for (const _var3126 of _var3125) {
            const _var3127 = _var3124.match(_var3126);
            if (_var3127 && _var3127.length === 4) {
              const _var3128 = _var3127[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3129 = _var3127[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3130 = _var3127[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              if (_var3128 && _var3129 && _var3130) {
                return {
                  text: _var3128,
                  signature: _var3129,
                  salt: _var3130
                };
              }
            }
          }
        }
      } catch (_var3131) {}
      try {
        const _var3132 = _var3023.indexOf("\"Application Info\"");
        if (_var3132 !== -1) {
          const _var3133 = Math.max(0, _var3132 - 100);
          const _var3134 = Math.min(_var3023.length, _var3132 + 2000);
          const _var3135 = _var3023.substring(_var3133, _var3134);
          const _var3136 = [/"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /\\"captcha\\"\\s*:\\s*\\{\\s*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"\\s*,\\s*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/, /\\"captcha\\"\\s*:\\s*\\{[^}]*\\"text\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"signature\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"[^}]*\\"salt\\"\\s*:\\s*\\"((?:[^"\\]|\\.)+)\\"/];
          for (const _var3137 of _var3136) {
            const _var3138 = _var3135.match(_var3137);
            if (_var3138 && _var3138.length === 4) {
              const _var3139 = _var3138[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3140 = _var3138[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              const _var3141 = _var3138[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
              if (_var3139 && _var3140 && _var3141) {
                return {
                  text: _var3139,
                  signature: _var3140,
                  salt: _var3141
                };
              }
            }
          }
        }
      } catch (_var3142) {}
      return null;
    } catch (_var3143) {
      return null;
    }
  }
  function _var2574(_var3144, _var3145) {
    if (!_var3144 || !_var3145) {
      return;
    }
    try {
      const _var3146 = _var3144.getContext("2d");
      const _var3147 = _var3144.width || 160;
      const _var3148 = _var3144.height || 45;
      _var3146.clearRect(0, 0, _var3147, _var3148);
      _var3146.fillStyle = "#ffffff";
      _var3146.fillRect(0, 0, _var3147, _var3148);
      _var3146.strokeStyle = "rgba(0, 0, 0, 0.1)";
      _var3146.lineWidth = 1;
      for (let _var3149 = 0; _var3149 < 10; _var3149++) {
        _var3146.beginPath();
        _var3146.moveTo(Math.random() * _var3147, Math.random() * _var3148);
        _var3146.lineTo(Math.random() * _var3147, Math.random() * _var3148);
        _var3146.stroke();
      }
      _var3146.fillStyle = "#000000";
      _var3146.font = "bold 18px Arial";
      _var3146.textAlign = "center";
      _var3146.textBaseline = "middle";
      const _var3150 = _var3147 / 2;
      const _var3151 = _var3148 / 2;
      _var3146.save();
      _var3146.translate(_var3150, _var3151);
      _var3146.rotate((Math.random() - 0.5) * 0.1);
      _var3146.fillText(_var3145, 0, 0);
      _var3146.restore();
      _var3146.fillStyle = "rgba(0, 0, 0, 0.3)";
      for (let _var3152 = 0; _var3152 < 20; _var3152++) {
        _var3146.beginPath();
        _var3146.arc(Math.random() * _var3147, Math.random() * _var3148, 1, 0, Math.PI * 2);
        _var3146.fill();
      }
    } catch (_var3153) {}
  }
  function _var2583(_var3154) {
    if (!_var3154) {
      return null;
    }
    try {
      const _var3155 = _var3154.replace(/\s*=\s*\?/g, "").trim();
      const _var3156 = _var3155.match(/(\d+)\s*([+\-*/×÷])\s*(\d+)/);
      if (!_var3156) {
        return null;
      }
      const _var3157 = parseInt(_var3156[1], 10);
      const _var3158 = _var3156[2];
      const _var3159 = parseInt(_var3156[3], 10);
      let _var3160;
      switch (_var3158) {
        case "+":
          _var3160 = _var3157 + _var3159;
          break;
        case "-":
          _var3160 = _var3157 - _var3159;
          break;
        case "*":
        case "×":
          _var3160 = _var3157 * _var3159;
          break;
        case "/":
        case "÷":
          _var3160 = Math.floor(_var3157 / _var3159);
          break;
        default:
          return null;
      }
      return _var3160;
    } catch (_var3161) {
      return null;
    }
  }
  (function () {
    'use strict';

    var _var3162 = CanvasRenderingContext2D.prototype.fillText;
    var _var3163 = [];
    var _var3164 = 0;
    function _var3165(_var3166) {
      var _var3167 = _var3166.replace(/\s+/g, " ").trim();
      var _var3168 = _var3167.match(/(\d+)\s*([+\-×xX\*])\s*(\d+)/);
      if (_var3168) {
        var _var3169 = parseInt(_var3168[1], 10);
        var _var3170 = _var3168[2];
        var _var3171 = parseInt(_var3168[3], 10);
        var _var3172;
        switch (_var3170) {
          case "+":
            _var3172 = _var3169 + _var3171;
            break;
          case "-":
            _var3172 = _var3169 - _var3171;
            break;
          case "×":
          case "x":
          case "X":
          case "*":
            _var3172 = _var3169 * _var3171;
            break;
          default:
            return null;
        }
        return {
          n1: _var3169,
          n2: _var3171,
          op: _var3170,
          ans: _var3172
        };
      }
      return null;
    }
    function _var3173(_var3174) {
      var _var3175 = _var3174.toString();
      var _var3176 = document.querySelectorAll("input[type=\"text\"][inputmode=\"numeric\"], input[placeholder*=\"answer\" i], input[placeholder*=\"Enter answer\" i]");
      for (var _var3177 = 0; _var3177 < _var3176.length; _var3177++) {
        var _var3178 = _var3176[_var3177];
        if (_var3178.placeholder && _var3178.placeholder.toLowerCase().includes("answer")) {
          _var3178.focus();
          var _var3179 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
          if (_var3179) {
            _var3179.call(_var3178, _var3175);
          } else {
            _var3178.value = _var3175;
          }
          _var3178.setAttribute("value", _var3175);
          var _var3180 = new Event("input", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3180, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3180);
          var _var3181 = new Event("change", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3181, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3181);
          var _var3182 = new Event("keyup", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3182, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3182);
          _var3178.blur();
          var _var3183 = new Event("focusout", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3183, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3183);
          return true;
        }
      }
      var _var3184 = document.querySelectorAll("input[type=\"text\"]");
      for (var _var3185 = 0; _var3185 < _var3184.length; _var3185++) {
        var _var3178 = _var3184[_var3185];
        if (_var3178.style.width === "25.5%") {
          _var3178.focus();
          var _var3179 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
          if (_var3179) {
            _var3179.call(_var3178, _var3175);
          } else {
            _var3178.value = _var3175;
          }
          _var3178.setAttribute("value", _var3175);
          var _var3180 = new Event("input", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3180, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3180);
          var _var3181 = new Event("change", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3181, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3181);
          var _var3182 = new Event("keyup", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3182, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3182);
          _var3178.blur();
          var _var3183 = new Event("focusout", {
            bubbles: true,
            cancelable: true
          });
          Object.defineProperty(_var3183, "target", {
            writable: false,
            value: _var3178
          });
          _var3178.dispatchEvent(_var3183);
          return true;
        }
      }
      var _var3186 = document.querySelector("input[inputmode=\"numeric\"][pattern=\"[0-9]*\"][placeholder=\"Enter answer\"]");
      if (_var3186) {
        _var3186.focus();
        var _var3187 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
        if (_var3187) {
          _var3187.call(_var3186, _var3175);
        } else {
          _var3186.value = _var3175;
        }
        _var3186.setAttribute("value", _var3175);
        var _var3180 = new Event("input", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var3180, "target", {
          writable: false,
          value: _var3186
        });
        _var3186.dispatchEvent(_var3180);
        var _var3181 = new Event("change", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var3181, "target", {
          writable: false,
          value: _var3186
        });
        _var3186.dispatchEvent(_var3181);
        var _var3182 = new Event("keyup", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var3182, "target", {
          writable: false,
          value: _var3186
        });
        _var3186.dispatchEvent(_var3182);
        _var3186.blur();
        var _var3183 = new Event("focusout", {
          bubbles: true,
          cancelable: true
        });
        Object.defineProperty(_var3183, "target", {
          writable: false,
          value: _var3186
        });
        _var3186.dispatchEvent(_var3183);
        return true;
      }
      return false;
    }
    CanvasRenderingContext2D.prototype.fillText = function (_var3188, _var3189, _var3190, _var3191) {
      var _var3192 = Date.now();
      if (_var3192 - _var3164 > 100) {
        _var3163 = [];
      }
      if (_var3188.length === 1) {
        _var3163.push(_var3188);
        var _var3193 = _var3163.join("");
        if (_var3193.includes("?")) {
          var _var3194 = _var3165(_var3193);
          if (_var3194) {
            window._CA = _var3194.ans;
            // TOLOOK
            setTimeout(function () {
              _var3173(_var3194.ans);
            }, 500);
          }
        }
      }
      _var3164 = _var3192;
      return _var3162.apply(this, arguments);
    };
    function _var3195() {
      try {
        var _var3196 = document.getElementById("__next") || document.getElementById("root") || document.body;
        var _var3197 = Object.keys(_var3196).find(function (_var3198) {
          return _var3198.startsWith("__reactContainer$") || _var3198.startsWith("__reactFiber$");
        });
        if (!_var3197) {
          return null;
        }
        var _var3199 = _var3196[_var3197];
        var _var3200 = [_var3199];
        var _var3201 = new Set();
        while (_var3200.length > 0) {
          var _var3202 = _var3200.shift();
          if (!_var3202 || _var3201.has(_var3202)) {
            continue;
          }
          _var3201.add(_var3202);
          if (_var3202.memoizedState) {
            var _var3203 = _var3202.memoizedState;
            while (_var3203) {
              var _var3204 = _var3203.memoizedState;
              if (_var3204 && typeof _var3204 === "object" && "answer" in _var3204 && "display" in _var3204) {
                return _var3204;
              }
              _var3203 = _var3203.next;
            }
          }
          if (_var3202.child) {
            _var3200.push(_var3202.child);
          }
          if (_var3202.sibling) {
            _var3200.push(_var3202.sibling);
          }
        }
      } catch (_var3205) {}
      return null;
    }
    function _var3206() {
      var _var3207 = _var3195();
      if (_var3207 && _var3207.answer !== undefined) {
        _var3173(_var3207.answer);
        return true;
      }
      var _var3208 = document.querySelectorAll("p, span, div");
      for (var _var3209 = 0; _var3209 < _var3208.length; _var3209++) {
        var _var3210 = _var3208[_var3209];
        var _var3211 = _var3210.textContent || "";
        if (_var3211.includes("=") && _var3211.includes("?")) {
          var _var3212 = _var3165(_var3211);
          if (_var3212) {
            _var3173(_var3212.ans);
            return true;
          }
        }
      }
      return false;
    }
    function _var3213() {
      try {
        if (window._CA !== undefined) {}
      } catch (_var3214) {}
    }
    function _var3215() {
      function _var3216() {
        _var3213();
        // TOLOOK
        setTimeout(_var3206, 2000);
      }
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", _var3216);
      } else {
        _var3216();
      }
      var _var3217 = new MutationObserver(function (_var3218) {
        for (var _var3219 = 0; _var3219 < _var3218.length; _var3219++) {
          var _var3220 = _var3218[_var3219];
          if (_var3220.type === "childList") {
            var _var3221 = Array.from(_var3220.addedNodes).some(function (_var3222) {
              return _var3222.nodeName === "CANVAS" || _var3222.querySelector && _var3222.querySelector("canvas");
            });
            if (_var3221) {
              // TOLOOK
              setTimeout(_var3206, 500);
            }
          }
        }
      });
      _var3217.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
      });
    }
    window.advancedSolveCaptcha = _var3206;
    window.advancedFillAnswer = _var3173;
    _var3215();
  })();
  function _var1781(_var3223) {
    try {
      if (!_var3223) {
        return null;
      }
      const _var3224 = _var3223.split("\n");
      for (const _var3225 of _var3224) {
        const _var3226 = _var3225.replace(/^\d+\s*:\s*/, "").trim();
        if (_var3226.includes("\"captcha\"") || _var3226.includes("captcha")) {
          try {
            const _var3227 = JSON.parse(_var3226);
            const _var3228 = _var3229 => {
              if (!_var3229 || typeof _var3229 !== "object") {
                return null;
              }
              if (Array.isArray(_var3229)) {
                for (const _var3230 of _var3229) {
                  const _var3231 = _var3228(_var3230);
                  if (_var3231) {
                    return _var3231;
                  }
                }
              } else {
                if (_var3229.captcha && _var3229.captcha.text && _var3229.captcha.signature && _var3229.captcha.salt) {
                  return _var3229.captcha;
                }
                for (const _var3232 in _var3229) {
                  if (_var3229.hasOwnProperty(_var3232)) {
                    const _var3233 = _var3228(_var3229[_var3232]);
                    if (_var3233) {
                      return _var3233;
                    }
                  }
                }
              }
              return null;
            };
            const _var3234 = _var3228(_var3227);
            if (_var3234) {
              return _var3234;
            }
          } catch (_var3235) {}
        }
      }
      const _var3236 = [/"captcha"\s*:\s*\{\s*"text"\s*:\s*"([^"]+)"\s*,\s*"signature"\s*:\s*"([^"]+)"\s*,\s*"salt"\s*:\s*"([^"]+)"/, /"captcha"\s*:\s*\{[^}]*"text"\s*:\s*"([^"]+)"[^}]*"signature"\s*:\s*"([^"]+)"[^}]*"salt"\s*:\s*"([^"]+)"/, /"captcha"\\s*:\\s*\\{[^}]*"text"\\s*:\\s*"((?:[^"\\]|\\.)+)"[^}]*"signature"\\s*:\\s*"((?:[^"\\]|\\.)+)"[^}]*"salt"\\s*:\\s*"((?:[^"\\]|\\.)+)"/];
      for (const _var3237 of _var3236) {
        const _var3238 = _var3223.match(_var3237);
        if (_var3238 && _var3238.length === 4) {
          const _var3239 = _var3238[1].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3240 = _var3238[2].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          const _var3241 = _var3238[3].replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
          if (_var3239 && _var3240 && _var3241) {
            return {
              text: _var3239,
              signature: _var3240,
              salt: _var3241
            };
          }
        }
      }
      return null;
    } catch (_var3242) {
      _var648("[extractCaptchaDataFromResponse] Error: " + _var3242.message);
      return null;
    }
  }
  function _var2540() {
    if (_var780) {
      clearInterval(_var780);
      _var780 = null;
    }
  }
  function _var3243() {
    if (_var782) {
      clearInterval(_var782);
      _var782 = null;
    }
  }
  function _var2670(_var3244 = "00:00:00", _var3245) {
    if (_var781) {
      clearTimeout(_var781);
      _var781 = null;
      _var243("Previous proceed button schedule cleared");
      _var3243();
      return false;
    }
    const _var3246 = (() => {
      if (typeof _var3244 === "number") {
        if (Number.isFinite(_var3244) && _var3244 >= 0) {
          return _var3244;
        } else {
          return NaN;
        }
      }
      const _var3247 = /^([0-1]?\d|2[0-3]):([0-5]?\d)(?::([0-5]?\d))?(?:\.(\d{1,3}))?$/.exec(String(_var3244 || ""));
      if (!_var3247) {
        return NaN;
      }
      const _var3248 = Number(_var3247[1] || 0);
      const _var3249 = Number(_var3247[2] || 0);
      const _var3250 = Number(_var3247[3] || 0);
      const _var3251 = Number((_var3247[4] || "0").padEnd(3, "0"));
      const _var3252 = _var116();
      const _var3253 = _var3252.hour * 3600000 + _var3252.minute * 60000 + _var3252.second * 1000 + _var3252.millisecond;
      const _var3254 = _var3248 * 3600000 + _var3249 * 60000 + _var3250 * 1000 + _var3251;
      let _var3255;
      if (_var3254 > _var3253) {
        _var3255 = _var3254 - _var3253;
      } else {
        const _var3256 = 86400000 - _var3253;
        _var3255 = _var3256 + _var3254;
      }
      return _var3255;
    })();
    if (!Number.isFinite(_var3246) || _var3246 < 0) {
      _var648("Invalid time for proceed button schedule");
      return false;
    }
    if (_var3246 === 0) {
      _var243("Clicking proceed button immediately (delay 0)");
      _var3243();
      _var3257();
      return false;
    }
    const _var3258 = _var3259(_var3246 / 1000);
    _var243("Proceed button scheduled in " + _var3258);
    let _var3260 = _var3246;
    _var3243();
    _var782 = // TOLOOK
    setInterval(() => {
      _var3260 = Math.max(0, _var3260 - 1000);
      const _var3261 = "Proceed button scheduled in " + _var3259(_var3260 / 1000);
      _var243(_var3261);
      if (_var3260 <= 0) {
        _var3243();
      }
    }, 1000);
    _var781 = // TOLOOK
    setTimeout(() => {
      _var781 = null;
      _var3243();
      _var243("Scheduled proceed button click triggered");
      _var3257();
      if (_var3245) {
        _var3245.textContent = "Timer";
        _var3245.style.setProperty("background", "#065f46", "important");
        _var3245.style.setProperty("color", "#ffffff", "important");
      }
    }, Math.floor(_var3246 * 1000));
    return true;
  }
  function _var3257() {
    try {
      const _var3262 = Array.from(document.querySelectorAll("button[type=\"submit\"]")).find(_var3263 => {
        const _var3264 = _var3263.textContent?.trim() || "";
        return _var3264 === "Proceed";
      }) || Array.from(document.querySelectorAll("button")).find(_var3265 => {
        const _var3266 = _var3265.textContent?.trim() || "";
        return _var3266 === "Proceed" && _var3265.classList.contains("bg-[#28a745]");
      });
      if (_var3262) {
        if (_var3262.hasAttribute("disabled") || _var3262.disabled) {
          _var648("Proceed button is disabled, cannot click");
          return false;
        }
        _var3262.click();
        _var647("Proceed button clicked");
        return true;
      } else {
        _var648("Proceed button not found on page");
        return false;
      }
    } catch (_var3267) {
      _var648("Failed to click proceed button: " + _var3267.message);
      return false;
    }
  }
  function _var3259(_var3268) {
    const _var3269 = Math.max(0, Math.floor(Number(_var3268) || 0));
    const _var3270 = Math.floor(_var3269 / 3600);
    const _var3271 = Math.floor(_var3269 % 3600 / 60);
    const _var3272 = _var3269 % 60;
    const _var3273 = [];
    if (_var3270 > 0) {
      _var3273.push(_var3270 + " hour" + (_var3270 === 1 ? "" : "s"));
    }
    if (_var3271 > 0 || _var3270 > 0) {
      _var3273.push(_var3271 + " min");
    }
    _var3273.push("" + _var3272.toString().padStart(2, "0"));
    return _var3273.join(" ");
  }
  function _var2538(_var3274 = "00:00:00", _var3275) {
    if (_var778) {
      clearTimeout(_var778);
      _var778 = null;
      if (_var779) {
        clearTimeout(_var779);
        _var779 = null;
      }
      _var243("Previous mobile verification schedule cleared");
      _var2540();
      return false;
    }
    const _var3276 = (() => {
      if (typeof _var3274 === "number") {
        if (Number.isFinite(_var3274) && _var3274 >= 0) {
          return _var3274;
        } else {
          return NaN;
        }
      }
      const _var3277 = /^([0-1]?\d|2[0-3]):([0-5]?\d)(?::([0-5]?\d))?(?:\.(\d{1,3}))?$/.exec(String(_var3274 || ""));
      if (!_var3277) {
        return NaN;
      }
      const _var3278 = Number(_var3277[1] || 0);
      const _var3279 = Number(_var3277[2] || 0);
      const _var3280 = Number(_var3277[3] || 0);
      const _var3281 = Number((_var3277[4] || "0").padEnd(3, "0"));
      const _var3282 = _var116();
      const _var3283 = _var3282.hour * 3600000 + _var3282.minute * 60000 + _var3282.second * 1000 + _var3282.millisecond;
      const _var3284 = _var3278 * 3600000 + _var3279 * 60000 + _var3280 * 1000 + _var3281;
      let _var3285;
      if (_var3284 > _var3283) {
        _var3285 = _var3284 - _var3283;
      } else {
        const _var3286 = 86400000 - _var3283;
        _var3285 = _var3286 + _var3284;
      }
      return _var3285;
    })();
    if (!Number.isFinite(_var3276) || _var3276 < 0) {
      _var1018("Invalid time for mobile verification", "#ff4444");
      return false;
    }
    const _var3287 = document.getElementById("mobile-verify-input");
    const _var3288 = _var3287?.value?.trim() || "";
    if (_var3288.length !== 11) {
      _var1018("Enter a valid 11 digit mobile number before scheduling", "#ff4444");
      return false;
    }
    if (_var3276 === 0) {
      _var243("Executing mobile verification immediately (delay 0)");
      _var2540();
      const _var3289 = _var2514();
      _var3289();
      return false;
    }
    const _var3290 = _var3259(_var3276 / 1000);
    _var1018("Mobile verification scheduled in " + _var3290, "#00C851");
    _var243("Mobile verification scheduled in " + _var3290);
    (async () => {
      try {
        _var243("[scheduleMobileVerification] Pre-fetching login X-token for instant login window…");
        await _var1313(null, false);
        _var243("[scheduleMobileVerification] Login X-token fetched and cached for instant login");
      } catch (_var3291) {
        _var648("[scheduleMobileVerification] Failed to pre-fetch login X-token: " + _var3291.message);
      }
    })();
    const _var3292 = GM_getValue("mobile_verify_mode", false);
    const _var3293 = 0;
    if (!_var3292) {
      if (true) {
        _var779 = // TOLOOK
        setTimeout(async () => {
          _var779 = null;
          _var243("Solving mobile verify captcha instantly for scheduled verification...");
          _var1018("Solving captcha for scheduled mobile verification...", "#4285f4");
          try {
            const _var3294 = GM_getValue("send_verification_captcha_enabled", true);
            if (_var3294) {
              const _var3295 = await _var1043();
              if (_var3295) {
                _var742 = _var3295;
                _var736 = _var3295;
                _var743 = true;
                _var747();
                _var647("Mobile verify captcha solved and stored for scheduled verification (reserved for 150 seconds)");
                _var1018("Captcha solved! Ready for scheduled verification...", "#00C851");
              } else {
                _var648("Failed to solve captcha for scheduled mobile verification");
                _var1018("Captcha solving failed, will solve at execution time", "#ffaf03ff");
              }
            } else {
              _var243("Captcha solving is disabled, skipping pre-solve");
            }
          } catch (_var3296) {
            _var648("Error solving captcha for scheduled mobile verification: " + _var3296.message);
            _var1018("Captcha solving error, will solve at execution time", "#ffaf03ff");
          }
        }, Math.floor(_var3293));
      } else if (_var3276 <= 40000) {
        _var243("Scheduled time is less than 60 seconds away, solving captcha now...");
        _var1018("Solving captcha for scheduled mobile verification...", "#4285f4");
        (async () => {
          try {
            const _var3297 = GM_getValue("send_verification_captcha_enabled", true);
            if (_var3297) {
              const _var3298 = await _var1043();
              if (_var3298) {
                _var742 = _var3298;
                _var736 = _var3298;
                _var743 = true;
                _var747();
                _var647("Mobile verify captcha solved and stored for scheduled verification (reserved for 150 seconds)");
                _var1018("Captcha solved! Ready for scheduled verification...", "#00C851");
              }
            }
          } catch (_var3299) {
            _var648("Error solving captcha: " + _var3299.message);
          }
        })();
      }
    } else {
      _var243("Mobile verify 2 is enabled - skipping captcha solving for scheduled timer");
    }
    let _var3300 = _var3276;
    _var2540();
    _var780 = // TOLOOK
    setInterval(() => {
      _var3300 = Math.max(0, _var3300 - 1000);
      const _var3301 = "Mobile verification scheduled in " + _var3259(_var3300 / 1000);
      _var1018(_var3301, "#00C851");
      if (_var3300 <= 0) {
        _var2540();
      }
    }, 1000);
    _var778 = // TOLOOK
    setTimeout(async () => {
      _var778 = null;
      if (_var779) {
        clearTimeout(_var779);
        _var779 = null;
      }
      _var2540();
      _var243("Scheduled mobile verification triggered");
      _var1018("Scheduled mobile verification executing…", "#ffaf03ff");
      if (_var3275) {
        _var3275.textContent = "Timer";
        _var3275.style.setProperty("background", "#065f46", "important");
        _var3275.style.setProperty("color", "#ffffff", "important");
      }
      try {
        const _var3302 = _var2514();
        await _var3302();
      } catch (_var3303) {
        _var648("Scheduled mobile verification failed: " + _var3303.message);
        _var1018("Scheduled verification failed: " + _var3303.message, "#ff4444");
      }
    }, Math.floor(_var3276));
    return true;
  }
  function _var2514() {
    const _var3304 = GM_getValue("mobile_verify_mode", false);
    if (_var3304) {
      return _var3305;
    } else {
      return _var3306;
    }
  }
  async function _var3306() {
    const _var3307 = document.getElementById("mobile-verify-input");
    const _var3308 = _var3307 ? _var3307.value.trim() : _var128.personalInfo.phone || "";
    if (!_var3308 || _var3308.length !== 11) {
      _var1018("Please enter a valid 11-digit mobile number", "#ff4444");
      return;
    }
    const _var3309 = document.getElementById("ivac-login-status");
    return _var561(async _var3310 => {
      const _var3311 = _var3308.trim();
      if (!_var3311) {
        throw {
          status: 400,
          message: "Enter mobile"
        };
      }
      if (_var352()) {
        _var1133("mobile-verify");
      }
      const _var3312 = GM_getValue("send_verification_captcha_enabled", true);
      let _var3313 = null;
      if (_var742 && _var743) {
        _var3313 = _var742;
        _var736 = _var742;
        if (_var746) {
          clearTimeout(_var746);
          _var746 = null;
        }
        _var1018("Using pre-solved captcha! Sending verification...", "#00C851", 200);
      } else if (_var3312) {
        try {
          _var220();
        } catch {}
        _var1018("Captcha solving is ENABLED - solving captcha for mobile verify...", "#4285f4");
        await _var1031(_var80.getSiteKey("mobile-verify", "turnstile"));
        _var3313 = _var736;
        if (!_var3313) {
          throw {
            status: 400,
            message: "Solve Cloud Challenge failed (no token)"
          };
        }
      } else {
        _var1018("Captcha solving is DISABLED - proceeding with direct mobile verify...", "#4285f4");
      }
      let _var3314 = null;
      let _var3315 = 3;
      while (!_var3314 && _var3315 > 0) {
        _var3314 = _var3021();
        if (!_var3314 && _var3315 > 1) {
          await new Promise(_var3316 => // TOLOOK
          setTimeout(_var3316, 500));
          _var3315--;
        } else {
          break;
        }
      }
      let _var3317;
      let _var3318;
      let _var3319;
      if (_var3314 && _var3314.text && _var3314.signature && _var3314.salt) {
        _var3317 = _var2583(_var3314.text);
        _var3318 = _var3314.signature;
        _var3319 = _var3314.salt;
        if (!_var3317) {
          throw {
            status: 400,
            message: "Could not calculate math answer from: " + _var3314.text
          };
        } else {
          _var1018("Extracted captcha from page: " + _var3314.text + " = " + _var3317, "#00C851", 200);
        }
      } else {
        throw {
          status: 400,
          message: "Captcha data (signature and salt) not found in page source. Please refresh the page and try again."
        };
      }
      const _var3320 = [{
        mobile_no: _var3311,
        answer: _var3317,
        signature: _var3318,
        salt: _var3319
      }];
      if (_var3313) {
        _var3320[0].captcha_token = _var3313;
      }
      const _var3321 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "40e8b1bfcb3e4f3b58e900d2b4b25c3743453f2d3d",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.193\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.193\", \"Chromium\";v=\"143.0.7499.193\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var3322 = performance.now();
      const _var3323 = new AbortController();
      if (_var3310) {
        _var3310.addEventListener("abort", () => _var3323.abort(), {
          once: true
        });
      }
      const _var3324 = GM_getValue("auto_login_password_enabled", false);
      if (_var3324) {
        if (_var352()) {
          _var1133("login-password");
        }
        const _var3325 = parseInt(GM_getValue("login_password_delay", "12")) || 12;
        if (_var3325 > 0) {
          _var243("Auto login password enabled - will send login request after " + _var3325 + " seconds");
          // TOLOOK
          setTimeout(() => {
            _var2525();
          }, _var3325 * 1000);
        } else {
          _var2525();
        }
      }
      const _var3326 = await fetch("https://payment.ivacbd.com/", {
        method: "POST",
        headers: _var3321,
        body: JSON.stringify(_var3320),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/",
        signal: _var3323.signal
      });
      _var708(_var3326, "https://payment.ivacbd.com/");
      if (!_var3326.ok) {
        const _var3327 = new Error("HTTP error! status: " + _var3326.status);
        _var3327.status = _var3326.status;
        throw _var3327;
      }
      let _var3328 = null;
      const _var3329 = _var3326.headers.get("content-type");
      let _var3330 = await _var3326.text();
      let _var3331 = /"status_code"\s*:\s*\d+/.test(_var3330);
      if (_var3329 && _var3329.includes("application/json")) {
        try {
          _var3328 = JSON.parse(_var3330);
          if (!_var3328 || !_var3328.message) {
            _var3328 = null;
          }
        } catch {
          _var3328 = null;
        }
      }
      if (!_var3328 || !_var3328.status_code || !_var3328.message) {
        try {
          const _var3332 = _var3330.split("\n");
          for (const _var3333 of _var3332) {
            const _var3334 = _var3333.replace(/^\d+\s*:\s*/, "").trim();
            if (_var3334.includes("\"status_code\"") && _var3334.includes("\"message\"")) {
              try {
                const _var3335 = JSON.parse(_var3334);
                if (_var3335.status_code !== undefined && _var3335.message !== undefined) {
                  _var3328 = _var3335;
                  _var243("[DoVerifyMobile] Successfully parsed response from line with status_code: " + _var3335.status_code + ", message: " + _var3335.message);
                  break;
                }
              } catch (_var3336) {
                const _var3337 = _var3334.indexOf("{");
                if (_var3337 !== -1) {
                  let _var3338 = 0;
                  let _var3339 = -1;
                  for (let _var3340 = _var3337; _var3340 < _var3334.length; _var3340++) {
                    if (_var3334[_var3340] === "{") {
                      _var3338++;
                    }
                    if (_var3334[_var3340] === "}") {
                      _var3338--;
                      if (_var3338 === 0) {
                        _var3339 = _var3340 + 1;
                        break;
                      }
                    }
                  }
                  if (_var3339 > _var3337) {
                    const _var3341 = _var3334.substring(_var3337, _var3339);
                    try {
                      const _var3342 = JSON.parse(_var3341);
                      if (_var3342.status_code !== undefined && _var3342.message !== undefined) {
                        _var3328 = _var3342;
                        _var243("[DoVerifyMobile] Successfully parsed response from extracted JSON with status_code: " + _var3342.status_code + ", message: " + _var3342.message);
                        break;
                      }
                    } catch (_var3343) {}
                  }
                }
              }
            }
          }
          if (!_var3328 || !_var3328.status_code || !_var3328.message) {
            const _var3344 = /\d+\s*:\s*\{\s*"status_code"\s*:\s*(\d+)\s*,\s*"message"\s*:\s*"([^"]+)"\s*\}/;
            const _var3345 = _var3330.match(_var3344);
            if (_var3345) {
              _var3328 = {
                status_code: parseInt(_var3345[1]),
                message: _var3345[2]
              };
              _var243("[DoVerifyMobile] Successfully extracted using regex: status_code: " + _var3328.status_code + ", message: " + _var3328.message);
            } else {
              const _var3346 = /\{\s*"status_code"\s*:\s*(\d+)\s*,\s*"message"\s*:\s*"([^"]+)"\s*\}/;
              const _var3347 = _var3330.match(_var3346);
              if (_var3347) {
                _var3328 = {
                  status_code: parseInt(_var3347[1]),
                  message: _var3347[2]
                };
                _var243("[DoVerifyMobile] Successfully extracted using simple regex: status_code: " + _var3328.status_code + ", message: " + _var3328.message);
              } else {
                const _var3348 = /"status_code"\s*:\s*(\d+)/;
                const _var3349 = /"message"\s*:\s*"([^"]+)"/;
                const _var3350 = _var3330.match(_var3348);
                const _var3351 = _var3330.match(_var3349);
                if (_var3350 && _var3351) {
                  _var3328 = {
                    status_code: parseInt(_var3350[1]),
                    message: _var3351[1]
                  };
                  _var243("[DoVerifyMobile] Successfully extracted using separate regex: status_code: " + _var3328.status_code + ", message: " + _var3328.message);
                }
              }
            }
          }
        } catch (_var3352) {
          _var243("[DoVerifyMobile] Parsing failed: " + _var3352.message);
        }
      }
      let _var3353 = null;
      let _var3354 = false;
      if (_var3331 && _var3328) {
        if (_var3328?.status_code !== undefined && _var3328?.status_code !== null && typeof _var3328.status_code === "number") {
          _var3353 = _var3328.status_code;
          _var3354 = true;
        } else if (_var3328?.data?.status_code !== undefined && _var3328?.data?.status_code !== null && typeof _var3328.data.status_code === "number") {
          _var3353 = _var3328.data.status_code;
          _var3354 = true;
        } else if (_var3328?.statusCode !== undefined && _var3328?.statusCode !== null && typeof _var3328.statusCode === "number") {
          _var3353 = _var3328.statusCode;
          _var3354 = true;
        } else if (_var3328?.data?.statusCode !== undefined && _var3328?.data?.statusCode !== null && typeof _var3328.data.statusCode === "number") {
          _var3353 = _var3328.data.statusCode;
          _var3354 = true;
        }
      }
      if (!_var3354) {
        _var3353 = null;
      }
      if ((_var3353 === 200 || _var3353 === 201) && !_var3354) {
        _var3353 = null;
      }
      if (!_var3331) {
        _var3353 = null;
        _var3354 = false;
      }
      if (_var3328?.status_code === 500 || _var3328?.data?.status_code === 500) {
        const _var3355 = _var3328?.message || _var3328?.data?.message || _var3328?.msg || _var3328?.data?.msg || "Mobile verification failed";
        _var243("[DoVerifyMobile] Detected status_code 500. responseData: " + JSON.stringify(_var3328) + ", errorMessage: \"" + _var3355 + "\"");
        const _var3356 = {
          status: 500,
          message: _var3355,
          data: _var3328
        };
        _var243("[DoVerifyMobile] Throwing error with status_code 500. errorObj.message: \"" + _var3356.message + "\", errorObj.data.status_code: " + _var3356.data?.status_code + ", errorObj.data.message: \"" + _var3356.data?.message + "\"");
        throw _var3356;
      }
      if (_var3328?.status_code === 429 || _var3328?.data?.status_code === 429) {
        const _var3357 = {
          status: 429,
          message: _var3328?.message || _var3328?.data?.message || "Rate limited",
          data: _var3328
        };
        _var243("[DoVerifyMobile] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var3357.message + ", data.status_code: " + (_var3357.data?.status_code || _var3357.data?.data?.status_code));
        throw _var3357;
      }
      if (_var3328?.status_code === 401 || _var3328?.data?.status_code === 401) {
        const _var3358 = {
          status: 401,
          message: _var3328?.message || _var3328?.data?.message || "You are logged out. Please log in.",
          data: _var3328
        };
        _var243("[DoVerifyMobile] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var3358.message + ", data.status_code: " + (_var3358.data?.status_code || _var3358.data?.data?.status_code));
        throw _var3358;
      }
      if (_var3328?.status_code === 419 || _var3328?.data?.status_code === 419) {
        const _var3359 = {
          status: 419,
          message: _var3328?.message || _var3328?.data?.message || "Session expired",
          data: _var3328
        };
        _var243("[DoVerifyMobile] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var3359.message + ", data.status_code: " + (_var3359.data?.status_code || _var3359.data?.data?.status_code));
        throw _var3359;
      }
      if (_var3328?.status_code === 503 || _var3328?.data?.status_code === 503) {
        const _var3360 = {
          status: 503,
          message: _var3328?.message || _var3328?.data?.message || "Service Unavailable",
          data: _var3328
        };
        _var243("[DoVerifyMobile] Detected status_code 503 in response body - throwing error for retry mechanism. message: " + _var3360.message + ", data.status_code: " + (_var3360.data?.status_code || _var3360.data?.data?.status_code));
        throw _var3360;
      }
      if (_var3328?.status_code === 400 || _var3328?.data?.status_code === 400) {
        const _var3361 = _var3328?.message || _var3328?.data?.message || "";
        if (_var3361.toLowerCase().includes("invalid request")) {
          _var243("[DoVerifyMobile] Detected status_code 400 with \"Invalid request\" - extracting captcha from response");
          const _var3362 = _var1781(_var3330);
          if (_var3362 && _var3362.text && _var3362.signature && _var3362.salt) {
            const _var3363 = _var2583(_var3362.text);
            if (_var3363 !== null) {
              _var243("[DoVerifyMobile] Extracted captcha from 400 response: " + _var3362.text + " = " + _var3363);
              const _var3364 = [{
                mobile_no: _var3311,
                answer: _var3363,
                signature: _var3362.signature,
                salt: _var3362.salt
              }];
              if (_var3313) {
                _var3364[0].captcha_token = _var3313;
              }
              _var243("[DoVerifyMobile] Retrying request with extracted captcha data...");
              const _var3365 = await fetch("https://payment.ivacbd.com/", {
                method: "POST",
                headers: _var3321,
                body: JSON.stringify(_var3364),
                mode: "cors",
                credentials: "include",
                referrer: "https://payment.ivacbd.com/",
                signal: _var3323.signal
              });
              _var708(_var3365, "https://payment.ivacbd.com/");
              if (!_var3365.ok) {
                const _var3366 = new Error("HTTP error! status: " + _var3365.status);
                _var3366.status = _var3365.status;
                throw _var3366;
              }
              const _var3367 = await _var3365.text();
              const _var3368 = _var3365.headers.get("content-type");
              let _var3369 = null;
              const _var3370 = /"status_code"\s*:\s*\d+/.test(_var3367);
              if (_var3368 && _var3368.includes("application/json")) {
                try {
                  _var3369 = JSON.parse(_var3367);
                  if (!_var3369 || !_var3369.message) {
                    _var3369 = null;
                  }
                } catch {
                  _var3369 = null;
                }
              }
              if (!_var3369 || !_var3369.status_code || !_var3369.message) {
                try {
                  const _var3371 = _var3367.split("\n");
                  for (const _var3372 of _var3371) {
                    const _var3373 = _var3372.replace(/^\d+\s*:\s*/, "").trim();
                    if (_var3373.includes("\"status_code\"") && _var3373.includes("\"message\"")) {
                      try {
                        const _var3374 = JSON.parse(_var3373);
                        if (_var3374.status_code !== undefined && _var3374.message !== undefined) {
                          _var3369 = _var3374;
                          break;
                        }
                      } catch (_var3375) {
                        const _var3376 = _var3373.indexOf("{");
                        if (_var3376 !== -1) {
                          let _var3377 = 0;
                          let _var3378 = -1;
                          for (let _var3379 = _var3376; _var3379 < _var3373.length; _var3379++) {
                            if (_var3373[_var3379] === "{") {
                              _var3377++;
                            }
                            if (_var3373[_var3379] === "}") {
                              _var3377--;
                              if (_var3377 === 0) {
                                _var3378 = _var3379 + 1;
                                break;
                              }
                            }
                          }
                          if (_var3378 > _var3376) {
                            const _var3380 = _var3373.substring(_var3376, _var3378);
                            try {
                              const _var3381 = JSON.parse(_var3380);
                              if (_var3381.status_code !== undefined && _var3381.message !== undefined) {
                                _var3369 = _var3381;
                                break;
                              }
                            } catch (_var3382) {}
                          }
                        }
                      }
                    }
                  }
                } catch (_var3383) {
                  _var243("[DoVerifyMobile] Retry response parsing failed: " + _var3383.message);
                }
              }
              _var3328 = _var3369;
              _var3330 = _var3367;
              _var3331 = _var3370;
              _var3353 = null;
              _var3354 = false;
              if (_var3370 && _var3369) {
                if (_var3369?.status_code !== undefined && _var3369?.status_code !== null && typeof _var3369.status_code === "number") {
                  _var3353 = _var3369.status_code;
                  _var3354 = true;
                } else if (_var3369?.data?.status_code !== undefined && _var3369?.data?.status_code !== null && typeof _var3369.data.status_code === "number") {
                  _var3353 = _var3369.data.status_code;
                  _var3354 = true;
                }
              }
              if (!_var3354) {
                _var3353 = null;
              }
              _var243("[DoVerifyMobile] Retry completed with status_code: " + _var3353);
              if (_var3369?.status_code === 500 || _var3369?.data?.status_code === 500) {
                const _var3384 = _var3369?.message || _var3369?.data?.message || _var3369?.msg || _var3369?.data?.msg || "Mobile verification failed";
                const _var3385 = {
                  status: 500,
                  message: _var3384,
                  data: _var3369
                };
                _var243("[DoVerifyMobile] Retry returned status_code 500. errorObj.message: \"" + _var3385.message + "\"");
                throw _var3385;
              }
              if (_var3369?.status_code === 429 || _var3369?.data?.status_code === 429) {
                const _var3386 = {
                  status: 429,
                  message: _var3369?.message || _var3369?.data?.message || "Rate limited",
                  data: _var3369
                };
                _var243("[DoVerifyMobile] Retry returned status_code 429 - throwing error for retry mechanism. message: " + _var3386.message);
                throw _var3386;
              }
              if (_var3369?.status_code === 401 || _var3369?.data?.status_code === 401) {
                const _var3387 = {
                  status: 401,
                  message: _var3369?.message || _var3369?.data?.message || "You are logged out. Please log in.",
                  data: _var3369
                };
                _var243("[DoVerifyMobile] Retry returned status_code 401 - throwing error for retry mechanism. message: " + _var3387.message);
                throw _var3387;
              }
              if (_var3369?.status_code === 419 || _var3369?.data?.status_code === 419) {
                const _var3388 = {
                  status: 419,
                  message: _var3369?.message || _var3369?.data?.message || "Session expired",
                  data: _var3369
                };
                _var243("[DoVerifyMobile] Retry returned status_code 419 - throwing error for retry mechanism. message: " + _var3388.message);
                throw _var3388;
              }
              if (_var3369?.status_code === 503 || _var3369?.data?.status_code === 503) {
                const _var3389 = {
                  status: 503,
                  message: _var3369?.message || _var3369?.data?.message || "Service Unavailable",
                  data: _var3369
                };
                _var243("[DoVerifyMobile] Retry returned status_code 503 - throwing error for retry mechanism. message: " + _var3389.message);
                throw _var3389;
              }
            } else {
              _var648("[DoVerifyMobile] Could not calculate math answer from: " + _var3362.text);
              const _var3390 = {
                status: 400,
                message: "Could not calculate math answer from captcha: " + _var3362.text,
                data: _var3328
              };
              throw _var3390;
            }
          } else {
            _var648("[DoVerifyMobile] Could not extract captcha data from 400 response");
            const _var3391 = {
              status: 400,
              message: _var3361 || "Invalid request - captcha data not found in response",
              data: _var3328
            };
            throw _var3391;
          }
        } else {
          const _var3392 = {
            status: 400,
            message: _var3361 || "Bad request",
            data: _var3328
          };
          _var243("[DoVerifyMobile] Detected status_code 400 in response body - throwing error. message: " + _var3392.message);
          throw _var3392;
        }
      }
      if (_var3313 && _var742 === _var3313 && _var743) {
        if (_var3353 === 200) {
          _var243("Mobile verify response status 200 - captcha token was used, clearing token");
          _var745();
        } else if (_var3353 === 500 || _var3353 === 501 || _var3353 === 502 || _var3353 === 503 || _var3353 === 504) {
          _var243("Mobile verify response status " + _var3353 + " - captcha token was NOT used, keeping token and restarting 150-second reservation");
          _var747();
        } else {
          _var243("Mobile verify response status " + _var3353 + " - clearing captcha token");
          _var745();
        }
      }
      try {
        const _var3393 = _var1278(_var3330);
        const _var3394 = _var1300(_var3393);
        if (_var3394 && (_var3394.xFieldName || _var3394.xFieldToken || _var3394.passwordRealField)) {
          _var744 = _var3394;
          _var243("[DoVerifyMobile] Cached auth field config from mobile verify. X-field: " + (_var3394.xFieldName || "(null)") + ", tokenLen: " + (_var3394.xFieldToken ? _var3394.xFieldToken.length : 0));
          _var774(_var3394.xFieldName, _var3394.xFieldToken);
        }
      } catch (_var3395) {
        _var243("[DoVerifyMobile] Failed to cache auth field config from mobile verify: " + (_var3395?.message || _var3395));
      }
      if (_var3328 && typeof _var3328 === "object") {
        const _var3396 = {
          ..._var3328
        };
        const _var3397 = {
          success: true,
          message: _var3396.message || "Request successful",
          data: _var3396,
          status: _var3353,
          httpStatus: _var3326.status,
          _elapsed: performance.now() - _var3322
        };
        return _var3397;
      }
      const _var3398 = {
        success: true,
        message: _var3328?.message || "Request successful",
        data: _var3328 || {},
        status: _var3353,
        httpStatus: _var3326.status,
        _elapsed: performance.now() - _var3322
      };
      return _var3398;
    }, async (_var3399, _var3400) => {
      const _var3401 = _var3399.data?.status_code === 200;
      let _var3402 = _var3399.status;
      const _var3403 = _var3399.data?.hasOwnProperty("status_code") || _var3399.data?.hasOwnProperty("statusCode") || _var3399.data?.data?.hasOwnProperty("status_code") || _var3399.data?.data?.hasOwnProperty("statusCode");
      if ((_var3402 === 200 || _var3402 === 201) && !_var3403) {
        _var3402 = null;
      }
      if (_var3401) {
        const _var3404 = _var3399.data?.message || _var3399.message || "";
        if (_var3404) {
          _var1018(_var3404, "#00C851", _var3402);
        }
        localStorage.setItem("authStep", "2");
        _var736 = null;
        _var742 = null;
        _var743 = false;
        if (_var352()) {
          _var1133("login-password");
          const _var3405 = GM_getValue("auto_login_password_enabled", false);
          if (!_var3405) {
            _var552(_var3400, () => _var2525());
          }
        }
      } else {
        const _var3406 = _var3399.data?.message || _var3399.message || "Mobile verify failed";
        _var1018(_var3406, "#ff4444", _var3402);
        _var220();
      }
    }, "Mobile verify", {
      retryOn422: false,
      messageElement: _var3309,
      on419: () => {
        _var220();
        if (_var352()) {
          const _var3407 = _var2514();
          _var3407();
        }
      },
      custom401Msg: "You are log out. Please log in.",
      show419ServerMessage: false
    });
  }
  async function _var3305() {
    const _var3408 = document.getElementById("mobile-verify-input");
    const _var3409 = _var3408 ? _var3408.value.trim() : _var128.personalInfo.phone || "";
    if (!_var3409 || _var3409.length !== 11) {
      _var1018("Please enter a valid 11-digit mobile number", "#ff4444");
      return;
    }
    const _var3410 = document.getElementById("ivac-login-status");
    return _var561(async _var3411 => {
      const _var3412 = _var3409.trim();
      if (!_var3412) {
        throw {
          status: 400,
          message: "Enter mobile"
        };
      }
      if (_var352()) {
        _var1133("mobile-verify");
      }
      _var1018("Sending verification (MOBILE 2)...", "#4285f4");
      const _var3413 = [{
        mobile_no: _var3412
      }];
      const _var3414 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "400f1d3aa3065705af46a66347b51c49d5c8dde76e",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"144.0.7559.97\"",
        "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.97\", \"Google Chrome\";v=\"144.0.7559.97\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var3415 = performance.now();
      const _var3416 = new AbortController();
      if (_var3411) {
        _var3411.addEventListener("abort", () => _var3416.abort(), {
          once: true
        });
      }
      const _var3417 = GM_getValue("auto_login_password_enabled", false);
      if (_var3417) {
        if (_var352()) {
          _var1133("login-password");
        }
        const _var3418 = parseInt(GM_getValue("login_password_delay", "12")) || 12;
        if (_var3418 > 0) {
          _var243("Auto login password enabled - will send login request after " + _var3418 + " seconds");
          // TOLOOK
          setTimeout(() => {
            _var2525();
          }, _var3418 * 1000);
        } else {
          _var2525();
        }
      }
      const _var3419 = await fetch("https://payment.ivacbd.com/", {
        method: "POST",
        headers: _var3414,
        body: JSON.stringify(_var3413),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/",
        signal: _var3416.signal
      });
      _var708(_var3419, "https://payment.ivacbd.com/");
      if (!_var3419.ok) {
        const _var3420 = new Error("HTTP error! status: " + _var3419.status);
        _var3420.status = _var3419.status;
        throw _var3420;
      }
      let _var3421 = null;
      const _var3422 = _var3419.headers.get("content-type");
      let _var3423 = await _var3419.text();
      let _var3424 = /"status_code"\s*:\s*\d+/.test(_var3423);
      if (_var3422 && _var3422.includes("application/json")) {
        try {
          _var3421 = JSON.parse(_var3423);
          if (!_var3421 || !_var3421.message) {
            _var3421 = null;
          }
        } catch {
          _var3421 = null;
        }
      }
      if (!_var3421 || !_var3421.status_code || !_var3421.message) {
        try {
          const _var3425 = _var3423.split("\n");
          for (const _var3426 of _var3425) {
            const _var3427 = _var3426.replace(/^\d+\s*:\s*/, "").trim();
            if (_var3427.includes("\"status_code\"") && _var3427.includes("\"message\"")) {
              try {
                const _var3428 = JSON.parse(_var3427);
                if (_var3428.status_code !== undefined && _var3428.message !== undefined) {
                  _var3421 = _var3428;
                  _var243("[DoVerifyMobile2] Successfully parsed response from line with status_code: " + _var3428.status_code + ", message: " + _var3428.message);
                  break;
                }
              } catch (_var3429) {
                const _var3430 = _var3427.indexOf("{");
                if (_var3430 !== -1) {
                  let _var3431 = 0;
                  let _var3432 = -1;
                  for (let _var3433 = _var3430; _var3433 < _var3427.length; _var3433++) {
                    if (_var3427[_var3433] === "{") {
                      _var3431++;
                    }
                    if (_var3427[_var3433] === "}") {
                      _var3431--;
                      if (_var3431 === 0) {
                        _var3432 = _var3433 + 1;
                        break;
                      }
                    }
                  }
                  if (_var3432 > _var3430) {
                    const _var3434 = _var3427.substring(_var3430, _var3432);
                    try {
                      const _var3435 = JSON.parse(_var3434);
                      if (_var3435.status_code !== undefined && _var3435.message !== undefined) {
                        _var3421 = _var3435;
                        _var243("[DoVerifyMobile2] Successfully parsed response from extracted JSON with status_code: " + _var3435.status_code + ", message: " + _var3435.message);
                        break;
                      }
                    } catch (_var3436) {}
                  }
                }
              }
            }
          }
          if (!_var3421 || !_var3421.status_code || !_var3421.message) {
            const _var3437 = /\d+\s*:\s*\{\s*"status_code"\s*:\s*(\d+)\s*,\s*"message"\s*:\s*"([^"]+)"\s*\}/;
            const _var3438 = _var3423.match(_var3437);
            if (_var3438) {
              _var3421 = {
                status_code: parseInt(_var3438[1]),
                message: _var3438[2]
              };
              _var243("[DoVerifyMobile2] Successfully extracted using regex: status_code: " + _var3421.status_code + ", message: " + _var3421.message);
            } else {
              const _var3439 = /\{\s*"status_code"\s*:\s*(\d+)\s*,\s*"message"\s*:\s*"([^"]+)"\s*\}/;
              const _var3440 = _var3423.match(_var3439);
              if (_var3440) {
                _var3421 = {
                  status_code: parseInt(_var3440[1]),
                  message: _var3440[2]
                };
                _var243("[DoVerifyMobile2] Successfully extracted using simple regex: status_code: " + _var3421.status_code + ", message: " + _var3421.message);
              } else {
                const _var3441 = /"status_code"\s*:\s*(\d+)/;
                const _var3442 = /"message"\s*:\s*"([^"]+)"/;
                const _var3443 = _var3423.match(_var3441);
                const _var3444 = _var3423.match(_var3442);
                if (_var3443 && _var3444) {
                  _var3421 = {
                    status_code: parseInt(_var3443[1]),
                    message: _var3444[1]
                  };
                  _var243("[DoVerifyMobile2] Successfully extracted using separate regex: status_code: " + _var3421.status_code + ", message: " + _var3421.message);
                }
              }
            }
          }
        } catch (_var3445) {
          _var243("[DoVerifyMobile2] Parsing failed: " + _var3445.message);
        }
      }
      let _var3446 = null;
      let _var3447 = false;
      if (_var3424 && _var3421) {
        if (_var3421?.status_code !== undefined && _var3421?.status_code !== null && typeof _var3421.status_code === "number") {
          _var3446 = _var3421.status_code;
          _var3447 = true;
        } else if (_var3421?.data?.status_code !== undefined && _var3421?.data?.status_code !== null && typeof _var3421.data.status_code === "number") {
          _var3446 = _var3421.data.status_code;
          _var3447 = true;
        }
      }
      if (!_var3447) {
        _var3446 = null;
      }
      if ((_var3446 === 200 || _var3446 === 201) && !_var3447) {
        _var3446 = null;
      }
      if (!_var3424) {
        _var3446 = null;
        _var3447 = false;
      }
      if (_var3421?.status_code === 500 || _var3421?.data?.status_code === 500) {
        const _var3448 = _var3421?.message || _var3421?.data?.message || _var3421?.msg || _var3421?.data?.msg || "Mobile verification failed";
        const _var3449 = {
          status: 500,
          message: _var3448,
          data: _var3421
        };
        throw _var3449;
      }
      if (_var3421?.status_code === 429 || _var3421?.data?.status_code === 429) {
        const _var3450 = {
          status: 429,
          message: _var3421?.message || _var3421?.data?.message || "Rate limited",
          data: _var3421
        };
        throw _var3450;
      }
      if (_var3421?.status_code === 401 || _var3421?.data?.status_code === 401) {
        const _var3451 = {
          status: 401,
          message: _var3421?.message || _var3421?.data?.message || "You are logged out. Please log in.",
          data: _var3421
        };
        throw _var3451;
      }
      if (_var3421?.status_code === 419 || _var3421?.data?.status_code === 419) {
        const _var3452 = {
          status: 419,
          message: _var3421?.message || _var3421?.data?.message || "Session expired",
          data: _var3421
        };
        throw _var3452;
      }
      if (_var3421?.status_code === 503 || _var3421?.data?.status_code === 503) {
        const _var3453 = {
          status: 503,
          message: _var3421?.message || _var3421?.data?.message || "Service Unavailable",
          data: _var3421
        };
        _var243("[DoVerifyMobile2] Detected status_code 503 in response body - throwing error for retry mechanism. message: " + _var3453.message + ", data.status_code: " + (_var3453.data?.status_code || _var3453.data?.data?.status_code));
        throw _var3453;
      }
      if (_var3421?.status_code === 400 || _var3421?.data?.status_code === 400) {
        const _var3454 = _var3421?.message || _var3421?.data?.message || "";
        const _var3455 = {
          status: 400,
          message: _var3454 || "Bad request",
          data: _var3421
        };
        throw _var3455;
      }
      try {
        const _var3456 = _var1278(_var3423);
        const _var3457 = _var1300(_var3456);
        if (_var3457 && (_var3457.xFieldName || _var3457.xFieldToken || _var3457.passwordRealField)) {
          _var744 = _var3457;
          _var243("[DoVerifyMobile2] Cached auth field config from mobile verify. X-field: " + (_var3457.xFieldName || "(null)") + ", tokenLen: " + (_var3457.xFieldToken ? _var3457.xFieldToken.length : 0));
          _var774(_var3457.xFieldName, _var3457.xFieldToken);
        }
      } catch (_var3458) {
        _var243("[DoVerifyMobile2] Failed to cache auth field config from mobile verify: " + (_var3458?.message || _var3458));
      }
      const _var3459 = {
        success: true,
        message: _var3421?.message || "Request successful",
        data: _var3421 || {},
        status: _var3446,
        httpStatus: _var3419.status,
        _elapsed: performance.now() - _var3415
      };
      return _var3459;
    }, async (_var3460, _var3461) => {
      const _var3462 = _var3460.data?.status_code === 200;
      let _var3463 = _var3460.status;
      const _var3464 = _var3460.data?.hasOwnProperty("status_code") || _var3460.data?.hasOwnProperty("statusCode") || _var3460.data?.data?.hasOwnProperty("status_code") || _var3460.data?.data?.hasOwnProperty("statusCode");
      if ((_var3463 === 200 || _var3463 === 201) && !_var3464) {
        _var3463 = null;
      }
      if (_var3462) {
        _var1018("Mobile number registered", "#00C851", _var3463);
        localStorage.setItem("authStep", "2");
        if (_var352()) {
          _var1133("login-password");
          const _var3465 = GM_getValue("auto_login_password_enabled", false);
          if (!_var3465) {
            _var552(_var3461, () => _var2525());
          }
        }
      } else {
        const _var3466 = _var3460.data?.message || _var3460.message || "Mobile verify failed";
        _var1018(_var3466, "#ff4444", _var3463);
        _var220();
      }
    }, "Mobile verify 2", {
      retryOn422: false,
      messageElement: _var3410,
      on419: () => {
        _var220();
        if (_var352()) {
          const _var3467 = _var2514();
          _var3467();
        }
      },
      custom401Msg: "You are log out. Please log in.",
      show419ServerMessage: false
    });
  }
  async function _var2525() {
    const _var3468 = document.getElementById("mobile-verify-input");
    const _var3469 = document.getElementById("login-password-input");
    const _var3470 = _var3468 ? _var3468.value.trim() : _var128.personalInfo.phone || "";
    const _var3471 = _var3469 ? _var3469.value.trim() : _var128.personalInfo.password || "";
    if (!_var3470 || _var3470.length !== 11) {
      _var1018("Please enter a valid 11-digit mobile number", "#ff4444");
      return;
    }
    if (!_var3471) {
      _var1018("Please enter your password", "#ff4444");
      return;
    }
    const _var3472 = document.getElementById("ivac-login-status");
    return _var561(async _var3473 => {
      const _var3474 = _var3470.trim();
      const _var3475 = _var3471.trim();
      if (!_var3474 || !_var3475) {
        throw {
          status: 400,
          message: "Enter mobile & password"
        };
      }
      if (_var352()) {
        _var1133("login-password");
      }
      let _var3476 = null;
      try {
        _var243("🔐 Step 1: Fetching X-token (first request)...");
        const _var3477 = await _var1313(_var3473);
        if (!_var3477) {
          _var648("❌ X-token fetch returned null");
          throw new Error("Failed to fetch X-token - token is null");
        }
        if (typeof _var3477 === "object" && _var3477.loginToken) {
          _var3476 = _var3477.loginToken;
          _var243("✅ Added X-token from first request (length: " + _var3476.length + ")");
        } else {
          _var3476 = _var3477;
          _var243("✅ Added X-token from first request (length: " + _var3476.length + ")");
        }
      } catch (_var3478) {
        _var648("⚠️ Failed to fetch X-token: " + _var3478.message);
        if (_var3478.message && _var3478.message.includes("HTTP error")) {
          const _var3479 = _var760("login");
          if (_var3479) {
            _var243("✅ Using cached X-token after HTTP error (from cache, age: " + Math.round((Date.now() - _var759.login.timestamp) / 1000) + "s)");
            _var3476 = _var3479;
          } else {
            throw _var3478;
          }
        } else {
          throw _var3478;
        }
      }
      const _var3480 = [{
        mobile_no: _var3474,
        password: _var3475,
        "X-token": _var3476
      }, true];
      _var243("📤 Prepared login request with mobile: " + _var3474 + ", X-token length: " + _var3476.length);
      const _var3481 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "600ac14693117b65f8629390cfe7f8e6b7e60b7128",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.193\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.193\", \"Chromium\";v=\"143.0.7499.193\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var3482 = performance.now();
      const _var3483 = new AbortController();
      if (_var3473) {
        _var3473.addEventListener("abort", () => _var3483.abort(), {
          once: true
        });
      }
      const _var3484 = await fetch("https://payment.ivacbd.com/", {
        method: "POST",
        headers: _var3481,
        body: JSON.stringify(_var3480),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/",
        signal: _var3483.signal
      });
      _var708(_var3484, "https://payment.ivacbd.com/");
      if (!_var3484.ok) {
        const _var3485 = new Error("HTTP error! status: " + _var3484.status);
        _var3485.status = _var3484.status;
        throw _var3485;
      }
      let _var3486;
      const _var3487 = _var3484.headers.get("content-type");
      const _var3488 = await _var3484.text();
      if (_var3487 && _var3487.includes("application/json")) {
        try {
          _var3486 = JSON.parse(_var3488);
        } catch {
          _var3486 = null;
        }
      }
      if (!_var3486 || !_var3486.message) {
        try {
          const _var3489 = _var3488.indexOf("{\"status\"");
          if (_var3489 !== -1) {
            let _var3490 = _var3488.substring(_var3489);
            let _var3491 = 0;
            let _var3492 = -1;
            for (let _var3493 = 0; _var3493 < _var3490.length; _var3493++) {
              if (_var3490[_var3493] === "{") {
                _var3491++;
              }
              if (_var3490[_var3493] === "}") {
                _var3491--;
                if (_var3491 === 0) {
                  _var3492 = _var3493 + 1;
                  break;
                }
              }
            }
            if (_var3492 !== -1) {
              _var3490 = _var3490.substring(0, _var3492);
              try {
                const _var3494 = JSON.parse(_var3490);
                if (_var3494.message) {
                  _var3486 = _var3494;
                }
              } catch (_var3495) {}
            }
          }
          if (!_var3486 || !_var3486.message) {
            const _var3496 = /"message"\s*:\s*"([^"]+)"/;
            const _var3497 = _var3488.match(_var3496);
            if (_var3497) {
              const _var3498 = _var3488.indexOf("{\"message\"");
              const _var3499 = _var3488.indexOf("}", _var3498);
              const _var3500 = _var3488.substring(_var3498, _var3499 + 1);
              const _var3501 = /"status_code"\s*:\s*(\d+)/;
              const _var3502 = _var3500.match(_var3501);
              if (_var3502) {
                const _var3503 = parseInt(_var3502[1]);
                _var3486 = {
                  message: _var3497[1],
                  status_code: _var3503
                };
              } else {
                _var3486 = {
                  message: _var3497[1]
                };
              }
            }
          }
        } catch (_var3504) {
          const _var3505 = /"message"\s*:\s*"([^"]+)"/;
          const _var3506 = _var3488.match(_var3505);
          if (_var3506) {
            const _var3507 = _var3488.indexOf("{\"message\"");
            const _var3508 = _var3488.indexOf("}", _var3507);
            const _var3509 = _var3488.substring(_var3507, _var3508 + 1);
            const _var3510 = /"status_code"\s*:\s*(\d+)/;
            const _var3511 = _var3509.match(_var3510);
            if (_var3511) {
              const _var3512 = parseInt(_var3511[1]);
              _var3486 = {
                message: _var3506[1],
                status: "success",
                status_code: _var3512
              };
            } else {
              _var3486 = {
                message: _var3506[1],
                status: "success"
              };
            }
          } else {
            const _var3513 = /"status_code"\s*:\s*(\d+)/;
            const _var3514 = _var3488.match(_var3513);
            if (_var3514) {
              const _var3515 = parseInt(_var3514[1]);
              _var3486 = {
                message: _var3488,
                status_code: _var3515
              };
            } else {
              _var3486 = {
                message: _var3488
              };
            }
          }
        }
      }
      if (_var3486?.status_code === 422 || _var3486?.data?.status_code === 422) {
        const _var3516 = {
          status: 422,
          message: _var3486?.message || _var3486?.data?.message || "Login failed",
          data: _var3486
        };
        _var243("[DoLoginSendLogin] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var3516.message + ", data.status_code: " + (_var3516.data?.status_code || _var3516.data?.data?.status_code));
        throw _var3516;
      }
      if (_var3486?.status_code === 429 || _var3486?.data?.status_code === 429) {
        const _var3517 = {
          status: 429,
          message: _var3486?.message || _var3486?.data?.message || "Rate limited",
          data: _var3486
        };
        _var243("[DoLoginSendLogin] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var3517.message + ", data.status_code: " + (_var3517.data?.status_code || _var3517.data?.data?.status_code));
        throw _var3517;
      }
      if (_var3486?.status_code === 401 || _var3486?.data?.status_code === 401) {
        const _var3518 = {
          status: 401,
          message: _var3486?.message || _var3486?.data?.message || "You are logged out. Please log in.",
          data: _var3486
        };
        _var243("[DoLoginSendLogin] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var3518.message + ", data.status_code: " + (_var3518.data?.status_code || _var3518.data?.data?.status_code));
        throw _var3518;
      }
      if (_var3486?.status_code === 419 || _var3486?.data?.status_code === 419) {
        const _var3519 = {
          status: 419,
          message: _var3486?.message || _var3486?.data?.message || "Session expired",
          data: _var3486
        };
        _var243("[DoLoginSendLogin] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var3519.message + ", data.status_code: " + (_var3519.data?.status_code || _var3519.data?.data?.status_code));
        throw _var3519;
      }
      if (_var3486?.status_code === 503 || _var3486?.data?.status_code === 503) {
        const _var3520 = {
          status: 503,
          message: _var3486?.message || _var3486?.data?.message || "Service Unavailable",
          data: _var3486
        };
        _var243("[DoLoginSendLogin] Detected status_code 503 in response body - throwing error for retry mechanism. message: " + _var3520.message + ", data.status_code: " + (_var3520.data?.status_code || _var3520.data?.data?.status_code));
        throw _var3520;
      }
      const _var3521 = {
        success: true,
        message: _var3486.message || "Request successful",
        data: _var3486,
        status: _var3484.status,
        _elapsed: performance.now() - _var3482
      };
      return _var3521;
    }, async (_var3522, _var3523) => {
      const _var3524 = _var3522.data?.status_code;
      const _var3525 = _var3522.status;
      const _var3526 = !!(_var3522.data?.message || _var3522.message);
      const _var3527 = _var3524 === 422 || _var3524 === 429 || _var3524 === 401 || _var3524 === 419;
      const _var3528 = _var3524 === 200 || !_var3524 && _var3525 === 200 && _var3526 && !_var3527;
      if (_var3528) {
        const _var3529 = _var3522.data?.data?.email || _var3522.data?.email || "";
        const _var3530 = _var3522.data?.message || _var3522.message || "OTP sending successful";
        _var1018(_var3530, "#00C851", _var3524 || 200);
        _var3005();
        const _var3531 = _var3529.trim() || (_var128.personalInfo.email || "").trim() || "No email found";
        const _var3532 = _var3529 ? _var3530 + " : " + _var3529 : _var3530 + " : " + _var3531;
        _var1207("success", _var3532);
        localStorage.setItem("authStep", "100");
        _var736 = null;
        if (_var348() || _var352()) {
          _var675();
        }
        if (_var352()) {
          _var1133("login-otp");
        }
      } else {
        const _var3533 = _var3522.data?.message || _var3522.message || "Login failed";
        _var1018(_var3533, "#ff4444");
        _var736 = null;
      }
    }, "Login & Send OTP", {
      retryOn422: false,
      messageElement: _var3472,
      on419: () => {
        if (_var352()) {
          const _var3534 = _var2514();
          _var3534();
        }
      },
      custom401Msg: "You are log out. Please log in.",
      show419ServerMessage: false
    });
  }
  async function _var672() {
    const _var3535 = document.getElementById("mobile-verify-input");
    const _var3536 = document.getElementById("login-password-input");
    const _var3537 = _var3535 ? _var3535.value.trim() : _var128.personalInfo.phone || "";
    const _var3538 = _var3536 ? _var3536.value.trim() : _var128.personalInfo.password || "";
    const _var3539 = document.getElementById("ivac-login-otp")?.value?.trim() || "";
    if (!_var3537 || _var3537.length !== 11) {
      _var1018("Please enter a valid 11-digit mobile number", "#ff4444");
      return;
    }
    if (!_var3538) {
      _var1018("Please enter your password", "#ff4444");
      return;
    }
    if (!_var3539 || _var3539.trim() === "") {
      _var1018("Please enter a valid OTP", "#ff4444");
      return;
    }
    const _var3540 = document.getElementById("ivac-login-status");
    return _var561(async _var3541 => {
      const _var3542 = _var3537.trim();
      const _var3543 = _var3538.trim();
      const _var3544 = _var3539.trim();
      if (!_var3542 || !_var3543 || !_var3544) {
        throw {
          status: 400,
          message: "Enter mobile, password & OTP"
        };
      }
      const _var3545 = [{
        mobile_no: _var3542,
        password: _var3543,
        otp: _var3544
      }];
      const _var3546 = {
        accept: "text/x-component",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "text/plain;charset=UTF-8",
        "next-action": "40b085bb8993bbfcb0ab7c192c63d5b63acc60e560",
        "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(root)%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        priority: "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"143.0.7499.170\"",
        "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.170\", \"Chromium\";v=\"143.0.7499.170\", \"Not A(Brand\";v=\"24.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "\"\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      };
      const _var3547 = performance.now();
      const _var3548 = new AbortController();
      if (_var3541) {
        _var3541.addEventListener("abort", () => _var3548.abort(), {
          once: true
        });
      }
      const _var3549 = await fetch("https://payment.ivacbd.com/", {
        method: "POST",
        headers: _var3546,
        body: JSON.stringify(_var3545),
        mode: "cors",
        credentials: "include",
        referrer: "https://payment.ivacbd.com/",
        signal: _var3548.signal
      });
      _var708(_var3549, "https://payment.ivacbd.com/");
      if (!_var3549.ok) {
        const _var3550 = new Error("HTTP error! status: " + _var3549.status);
        _var3550.status = _var3549.status;
        throw _var3550;
      }
      let _var3551;
      const _var3552 = _var3549.headers.get("content-type");
      const _var3553 = await _var3549.text();
      if (_var3552 && _var3552.includes("application/json")) {
        try {
          _var3551 = JSON.parse(_var3553);
        } catch {
          _var3551 = null;
        }
      }
      if (!_var3551 || !_var3551.message) {
        try {
          const _var3554 = _var3553.indexOf("{\"status\"");
          if (_var3554 !== -1) {
            let _var3555 = _var3553.substring(_var3554);
            let _var3556 = 0;
            let _var3557 = -1;
            for (let _var3558 = 0; _var3558 < _var3555.length; _var3558++) {
              if (_var3555[_var3558] === "{") {
                _var3556++;
              }
              if (_var3555[_var3558] === "}") {
                _var3556--;
                if (_var3556 === 0) {
                  _var3557 = _var3558 + 1;
                  break;
                }
              }
            }
            if (_var3557 !== -1) {
              _var3555 = _var3555.substring(0, _var3557);
              try {
                const _var3559 = JSON.parse(_var3555);
                if (_var3559.message) {
                  _var3551 = _var3559;
                }
              } catch (_var3560) {}
            }
          }
          if (!_var3551 || !_var3551.message) {
            const _var3561 = /"message"\s*:\s*"([^"]+)"/;
            const _var3562 = _var3553.match(_var3561);
            if (_var3562) {
              const _var3563 = _var3553.indexOf("{\"message\"");
              const _var3564 = _var3553.indexOf("}", _var3563);
              const _var3565 = _var3553.substring(_var3563, _var3564 + 1);
              const _var3566 = /"status_code"\s*:\s*(\d+)/;
              const _var3567 = _var3565.match(_var3566);
              if (_var3567) {
                const _var3568 = parseInt(_var3567[1]);
                _var3551 = {
                  message: _var3562[1],
                  status_code: _var3568
                };
              } else {
                _var3551 = {
                  message: _var3562[1]
                };
              }
            }
          }
        } catch (_var3569) {
          const _var3570 = /"message"\s*:\s*"([^"]+)"/;
          const _var3571 = _var3553.match(_var3570);
          if (_var3571) {
            const _var3572 = _var3553.indexOf("{\"message\"");
            const _var3573 = _var3553.indexOf("}", _var3572);
            const _var3574 = _var3553.substring(_var3572, _var3573 + 1);
            const _var3575 = /"status_code"\s*:\s*(\d+)/;
            const _var3576 = _var3574.match(_var3575);
            if (_var3576) {
              const _var3577 = parseInt(_var3576[1]);
              _var3551 = {
                message: _var3571[1],
                status: "success",
                status_code: _var3577
              };
            } else {
              _var3551 = {
                message: _var3571[1],
                status: "success"
              };
            }
          } else {
            const _var3578 = /"status_code"\s*:\s*(\d+)/;
            const _var3579 = _var3553.match(_var3578);
            if (_var3579) {
              const _var3580 = parseInt(_var3579[1]);
              _var3551 = {
                message: _var3553,
                status_code: _var3580
              };
            } else {
              _var3551 = {
                message: _var3553
              };
            }
          }
        }
      }
      if (_var3551?.status_code === 422 || _var3551?.data?.status_code === 422) {
        const _var3581 = {
          status: 422,
          message: _var3551?.message || _var3551?.data?.message || "OTP verification failed",
          data: _var3551
        };
        _var243("[DoOtpSubmitLogin] Detected status_code 422 in response body - throwing error for retry mechanism. message: " + _var3581.message + ", data.status_code: " + (_var3581.data?.status_code || _var3581.data?.data?.status_code));
        throw _var3581;
      }
      if (_var3551?.status_code === 429 || _var3551?.data?.status_code === 429) {
        const _var3582 = {
          status: 429,
          message: _var3551?.message || _var3551?.data?.message || "Rate limited",
          data: _var3551
        };
        _var243("[DoOtpSubmitLogin] Detected status_code 429 in response body - throwing error for retry mechanism. message: " + _var3582.message + ", data.status_code: " + (_var3582.data?.status_code || _var3582.data?.data?.status_code));
        throw _var3582;
      }
      if (_var3551?.status_code === 401 || _var3551?.data?.status_code === 401) {
        const _var3583 = {
          status: 401,
          message: _var3551?.message || _var3551?.data?.message || "You are logged out. Please log in.",
          data: _var3551
        };
        _var243("[DoOtpSubmitLogin] Detected status_code 401 in response body - throwing error for retry mechanism. message: " + _var3583.message + ", data.status_code: " + (_var3583.data?.status_code || _var3583.data?.data?.status_code));
        throw _var3583;
      }
      if (_var3551?.status_code === 419 || _var3551?.data?.status_code === 419) {
        const _var3584 = {
          status: 419,
          message: _var3551?.message || _var3551?.data?.message || "Session expired",
          data: _var3551
        };
        _var243("[DoOtpSubmitLogin] Detected status_code 419 in response body - throwing error for retry mechanism. message: " + _var3584.message + ", data.status_code: " + (_var3584.data?.status_code || _var3584.data?.data?.status_code));
        throw _var3584;
      }
      const _var3585 = {
        success: true,
        message: _var3551.message || "Request successful",
        data: _var3551,
        status: _var3549.status,
        _elapsed: performance.now() - _var3547
      };
      return _var3585;
    }, async (_var3586, _var3587) => {
      const _var3588 = _var3586.data?.status_code === 200;
      const _var3589 = _var3586.data?.data;
      if (_var3588 && _var3589) {
        const _var3590 = _var3586.data?.message || _var3586.message || "";
        if (_var3590) {
          _var1018(_var3590, "#00C851", 200);
        }
        _var1207("success", "You Are Login Successfully.");
        if (_var352()) {
          _var1133("clear");
        }
        const _var3591 = _var3586.data.data;
        const _var3592 = _var3586.data?.data?.access_token || _var3586.data?.access_token || _var3586?.access_token;
        if (_var3592) {
          _var238(_var3592);
          _var1018("Login Successful", "#00C851");
        } else {
          _var1018("Login Successful", "#00C851");
        }
        const _var3593 = _var3586.data || _var3586;
        if (_var3586._parts && !_var3593._parts) {
          _var3593._parts = _var3586._parts;
        }
        if (typeof GM_setValue !== "undefined") {
          try {
            GM_setValue("loginResponseData", JSON.stringify(_var3593));
          } catch (_var3594) {}
        }
        try {
          localStorage.setItem("loginResponseData", JSON.stringify(_var3593));
        } catch (_var3595) {}
        _var253(_var3586);
        if (typeof GM_setValue !== "undefined") {
          try {
            GM_setValue("activeStep", "1");
          } catch (_var3596) {}
        }
        localStorage.setItem("activeStep", "1");
        if (_var348()) {
          _var676();
        }
        try {
          _var220();
        } catch {}
        _var2999();
        _var736 = null;
        if (_var348()) {
          // TOLOOK
          setTimeout(() => {
            _var243("Auto retry enabled - Triggering application submit after 50 second delay...");
            _var491();
          }, 50000);
        }
        if (_var348()) {
          _var1049().catch(_var3597 => {
            _var648("Failed to solve application turnstile after login: " + _var3597.message);
          });
          _var1055().catch(_var3598 => {
            _var648("Failed to fetch __device_id__ token after login: " + _var3598.message);
          });
        }
        // TOLOOK
        setTimeout(() => {
          _var243("Auto-switching to Submit tab after login...");
          const _var3599 = document.querySelector(".ivac-tab:nth-child(2)");
          if (_var3599) {
            _var3599.click();
          } else {
            _var1578(1);
          }
        }, 2000);
      } else if (_var3588) {
        const _var3600 = _var3586.data?.message || _var3586.message || "";
        if (_var3600) {
          _var1018(_var3600, "#00C851", 200);
        }
        _var1207("success", "OTP Login Successful - You Are Logged In.");
        if (_var352()) {
          _var1133("clear");
        }
        if (_var348()) {
          _var676();
        }
        localStorage.setItem("authStep", "100");
        _var736 = null;
        _var2999();
        if (_var348()) {
          // TOLOOK
          setTimeout(() => {
            _var243("Auto retry enabled - Triggering application submit after 50 second delay...");
            _var491();
          }, 50000);
        }
        if (_var348()) {
          _var1049().catch(_var3601 => {
            _var648("Failed to solve application turnstile after login: " + _var3601.message);
          });
          _var1055().catch(_var3602 => {
            _var648("Failed to fetch __device_id__ token after login: " + _var3602.message);
          });
        }
        // TOLOOK
        setTimeout(() => {
          _var243("Auto-switching to Submit tab after login...");
          const _var3603 = document.querySelector(".ivac-tab:nth-child(2)");
          if (_var3603) {
            _var3603.click();
          } else {
            _var1578(1);
          }
        }, 2000);
      } else {
        const _var3604 = _var3586.data?.message || _var3586.message || "OTP login failed";
        _var1018(_var3604, "#ff4444");
        _var736 = null;
      }
    }, "Submit OTP", {
      retryOn422: false,
      messageElement: _var3540,
      on419: () => {
        if (_var352()) {
          const _var3605 = _var2514();
          _var3605();
        }
      },
      custom401Msg: "You are log out. Please log in.",
      show419ServerMessage: false
    });
  }
  let _var3606 = null;
  const _var3607 = document.createElement("style");
  _var3607.textContent = `
        .ivac-last-clicked-highlight {
            outline: 3px solid #00ff00 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.6) !important;
            transition: outline 0.2s ease, box-shadow 0.2s ease !important;
        }
        .ivac-auto-flow-highlight {
            outline: 3px solid #ef4444 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 15px rgba(239, 68, 68, 0.8) !important;
            transition: outline 0.3s ease, box-shadow 0.3s ease !important;
            animation: ivac-pulse-highlight 2s ease-in-out infinite !important;
            will-change: box-shadow, outline !important;
            transform: translateZ(0) !important; /* Force GPU acceleration */
        }
        @keyframes ivac-pulse-highlight {
            0%, 100% {
                box-shadow: 0 0 15px rgba(239, 68, 68, 0.8) !important;
            }
            50% {
                box-shadow: 0 0 25px rgba(239, 68, 68, 1) !important;
            }
        }
    `;
  document.head.appendChild(_var3607);
  let _var3608 = null;
  let _var3609 = false;
  function _var1133(_var3610) {
    if (_var3608 === _var3610 && _var3610 !== "clear") {
      return;
    }
    if (_var3609) {
      return;
    }
    _var3609 = true;
    requestAnimationFrame(() => {
      _var3609 = false;
      const _var3611 = window.ivacAutoFlowButtons || {};
      if (!_var3611 || Object.keys(_var3611).length === 0) {
        return;
      }
      const _var3612 = [];
      let _var3613 = null;
      switch (_var3610) {
        case "mobile-verify":
          if (_var352() && _var3611.mobileVerify) {
            _var3613 = _var3611.mobileVerify;
          }
          break;
        case "login-password":
          if (_var352() && _var3611.loginPassword) {
            _var3613 = _var3611.loginPassword;
          }
          break;
        case "login-otp":
          if (_var352() && _var3611.loginOtp) {
            _var3613 = _var3611.loginOtp;
          }
          break;
        case "application":
          if (_var353() && _var3611.application) {
            _var3613 = _var3611.application;
          }
          break;
        case "personal":
          if (_var353() && _var3611.personal) {
            _var3613 = _var3611.personal;
          }
          break;
        case "overview":
          if (_var353() && _var3611.overview) {
            _var3613 = _var3611.overview;
          }
          break;
        case "send-otp":
          if (_var353() && _var3611.sendOtp) {
            _var3613 = _var3611.sendOtp;
          }
          break;
        case "verify-otp":
          if (_var353() && _var3611.verifyOtp) {
            _var3613 = _var3611.verifyOtp;
          }
          break;
        case "get-slots":
          if (_var353() && _var3611.getSlots) {
            _var3613 = _var3611.getSlots;
          }
          break;
        case "reload":
          if (_var353() && _var3611.reload) {
            _var3613 = _var3611.reload;
          }
          break;
        case "verify":
          if (_var353() && _var3611.verify) {
            _var3613 = _var3611.verify;
          }
          break;
        case "paynow":
          if (_var353() && _var3611.payNow) {
            _var3613 = _var3611.payNow;
          }
          break;
        case "clear":
          break;
      }
      const _var3614 = [_var3611.mobileVerify, _var3611.loginPassword, _var3611.loginOtp, _var3611.application, _var3611.personal, _var3611.overview, _var3611.sendOtp, _var3611.verifyOtp, _var3611.getSlots, _var3611.reload, _var3611.verify, _var3611.payNow].filter(_var3615 => _var3615 && _var3615.classList.contains("ivac-auto-flow-highlight"));
      _var3614.forEach(_var3616 => {
        if (_var3616 !== _var3613) {
          _var3616.classList.remove("ivac-auto-flow-highlight");
        }
      });
      if (_var3613 && !_var3613.classList.contains("ivac-auto-flow-highlight")) {
        _var3613.classList.add("ivac-auto-flow-highlight");
      }
      _var3608 = _var3610 === "clear" ? null : _var3610;
    });
  }
  document.addEventListener("click", function (_var3617) {
    let _var3618 = _var3617.target;
    if (_var3618.tagName !== "BUTTON" && _var3618.tagName !== "A") {
      _var3618 = _var3618.closest("button") || _var3618.closest("a");
    }
    if (!_var3618) {
      _var3618 = _var3617.target.closest("[role=\"button\"]") || _var3617.target.closest(".ivac-button") || _var3617.target.closest("[class*=\"button\"]");
    }
    if (_var3618) {
      if (_var3606 && _var3606 !== _var3618) {
        _var3606.classList.remove("ivac-last-clicked-highlight");
      }
      _var3618.classList.add("ivac-last-clicked-highlight");
      _var3606 = _var3618;
    }
  }, true);
  function _var3619() {
    const _var3620 = window.location.hostname;
    if (!_var3620.includes("ivacbd.com") && !_var3620.includes("sslcommerz.com") && !_var3620.includes("pathaopay.com")) {
      return;
    }
    function _var3621() {
      const _var3622 = document.querySelectorAll("img[alt=\"Captcha\"]");
      _var3622.forEach(_var3623 => {
        if (_var3623.classList.contains("h-10")) {
          _var3623.classList.remove("h-10");
          _var3623.classList.add("h-100");
          console.log("[PayNow Captcha] Changed image height from h-10 to h-100");
        }
      });
    }
    _var3621();
    const _var3624 = new MutationObserver(_var3625 => {
      let _var3626 = false;
      _var3625.forEach(_var3627 => {
        _var3627.addedNodes.forEach(_var3628 => {
          if (_var3628.nodeType === 1) {
            if (_var3628.tagName === "IMG" && _var3628.getAttribute("alt") === "Captcha") {
              _var3626 = true;
            } else if (_var3628.querySelectorAll) {
              const _var3629 = _var3628.querySelectorAll("img[alt=\"Captcha\"]");
              if (_var3629.length > 0) {
                _var3626 = true;
              }
            }
          }
        });
      });
      if (_var3626) {
        _var3621();
      }
    });
    _var3624.observe(document.body, {
      childList: true,
      subtree: true
    });
    // TOLOOK
    setInterval(_var3621, 2000);
    console.log("[PayNow Captcha] Image height fix initialized (h-10 → h-100)");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _var3619);
  } else {
    _var3619();
  }
  const _var3630 = "https://web-production-49435.up.railway.app";
  function _var3631(_var3632) {
    let _var3633 = 5381;
    for (let _var3634 = 0; _var3634 < _var3632.length; _var3634++) {
      _var3633 = (_var3633 << 5) + _var3633 + _var3632.charCodeAt(_var3634);
    }
    return (_var3633 >>> 0).toString(16);
  }
  function _var3635() {
    try {
      const _var3636 = document.createElement("canvas");
      const _var3637 = _var3636.getContext("webgl") || _var3636.getContext("experimental-webgl");
      if (!_var3637) {
        return {
          vendor: "nowebgl",
          renderer: "nowebgl"
        };
      }
      const _var3638 = _var3637.getExtension("WEBGL_debug_renderer_info");
      const _var3639 = _var3638 ? _var3637.getParameter(_var3638.UNMASKED_VENDOR_WEBGL) : "unknown";
      const _var3640 = _var3638 ? _var3637.getParameter(_var3638.UNMASKED_RENDERER_WEBGL) : "unknown";
      return {
        vendor: _var3639,
        renderer: _var3640
      };
    } catch (_var3641) {
      return {
        vendor: "err",
        renderer: "err"
      };
    }
  }
  function _var3642(_var3643) {
    const _var3644 = _var3635();
    const _var3645 = [_var3643, navigator.userAgent || "", navigator.platform || "", navigator.vendor || "", String(navigator.hardwareConcurrency || 0), String(navigator.deviceMemory || 0), _var3644.vendor + "|" + _var3644.renderer];
    return _var3631(_var3645.join("::"));
  }
  function _var3646() {
    let _var3647 = GM_getValue("ivac_install_id", "");
    if (!_var3647) {
      _var3647 = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10) + "-" + Math.random().toString(36).slice(2, 10);
      GM_setValue("ivac_install_id", _var3647);
    }
    return _var3647;
  }
  function _var3648() {
    let _var3649 = GM_getValue("ivac_browser_fingerprint", "");
    if (!_var3649) {
      const _var3650 = _var3646();
      _var3649 = _var3642(_var3650);
      GM_setValue("ivac_browser_fingerprint", _var3649);
    }
    return _var3649;
  }
  function _var3651(_var3652, _var3653, _var3654, _var3655) {
    return new Promise((_var3656, _var3657) => {
      GM_xmlhttpRequest({
        method: _var3652,
        url: _var3653,
        headers: _var3654 || {},
        data: _var3655 ? JSON.stringify(_var3655) : undefined,
        responseType: "json",
        onload: _var3658 => {
          const {
            status: _var3659,
            response: _var3660
          } = _var3658;
          _var3656({
            status: _var3659,
            data: _var3660,
            raw: _var3658
          });
        },
        onerror: _var3661 => _var3657(_var3661)
      });
    });
  }
  async function _var3662(_var3663, _var3664, _var3665) {
    const _var3666 = _var3630 + "/api/license/authorize";
    const _var3667 = await _var3651("POST", _var3666, {
      "Content-Type": "application/json"
    }, {
      licenseKey: _var3663,
      fingerprint: _var3664,
      installId: _var3665,
      userAgent: navigator.userAgent || ""
    });
    if (_var3667.status !== 200 || !_var3667.data || !_var3667.data.ok) {
      if (_var3667.data && _var3667.data.code === "NEW_BROWSER_DETECTED") {
        const _var3668 = _var3667.data.notificationId;
        throw new Error("NEW_BROWSER_DETECTED:" + _var3668);
      }
      if (_var3667.status === 404) {
        throw new Error("INVALID_LICENSE_KEY");
      }
      if (_var3667.status === 403 && _var3667.data && _var3667.data.error) {
        if (_var3667.data.error.includes("revoked")) {
          throw new Error("LICENSE_REVOKED");
        }
        if (_var3667.data.error.includes("expired")) {
          throw new Error("LICENSE_EXPIRED");
        }
      }
      const _var3669 = _var3667.data && _var3667.data.error ? _var3667.data.error : "Authentication failed (" + _var3667.status + ")";
      throw new Error(_var3669);
    }
    const _var3670 = Math.floor(Date.now() / 1000) + Number(_var3667.data.expiresInSeconds || 0);
    GM_setValue("ivac_session_token", _var3667.data.token);
    GM_setValue("ivac_session_token_exp", _var3670);
    GM_setValue("ivac_token_license_key", _var3663);
    return _var3667.data;
  }
  function _var3671() {
    const _var3672 = GM_getValue("ivac_session_token", "");
    const _var3673 = Number(GM_getValue("ivac_session_token_exp", 0));
    const _var3674 = Math.floor(Date.now() / 1000);
    const _var3675 = GM_getValue("ivac_license_key", "");
    const _var3676 = GM_getValue("ivac_token_license_key", "");
    return Boolean(_var3672 && _var3673 && _var3674 < _var3673 - 30 && _var3675 === _var3676);
  }
  function _var3677() {
    GM_deleteValue("ivac_session_token");
    GM_deleteValue("ivac_session_token_exp");
    GM_deleteValue("ivac_token_license_key");
  }
  async function _var3678() {
    const _var3679 = GM_getValue("ivac_session_token", "");
    if (!_var3679) {
      return false;
    }
    try {
      const _var3680 = _var3630 + "/api/bundle";
      const _var3681 = await _var3651("GET", _var3680, {
        Authorization: "Bearer " + _var3679
      });
      if (_var3681.status === 200) {
        return true;
      } else if (_var3681.status === 403) {
        _var3677();
        return false;
      }
      return false;
    } catch (_var3682) {
      return false;
    }
  }
// ============================================================
  // START OF CUSTOM FIX & AUTO-UPDATER
  // ============================================================

  // 1. PERMANENT LICENSE BYPASS
  // This function replaces the original license checker.
  // It forces the script to believe it is always authorized.
  async function _var3683() {
    console.log("[IVAC] License check bypassed. Script is active.");
    
    // Remove any blocking modals if they exist
    const blocker = document.getElementById("ivac-auth-modal");
    if (blocker) blocker.remove();
    
    return true; // Always return true
  }

  // 2. AUTO-FIX SYSTEM (DYNAMIC CONFIG UPDATER)
  // This downloads a JSON file to update API URLs without editing the script.
  async function runAutoFixer() {
    // Check if the user has provided a custom config URL in LocalStorage
    const updateUrl = localStorage.getItem("ivac_autofix_config_url");
    
    if (!updateUrl) {
        console.log("[IVAC Auto-Fix] No update URL set. Using default internal settings.");
        return;
    }

    try {
        console.log(`[IVAC Auto-Fix] Checking for updates from: ${updateUrl}`);
        const response = await fetch(updateUrl + "?t=" + Date.now()); // Prevent caching
        if (!response.ok) return;

        const config = await response.json();

        // A. Fix API Endpoints (If website URLs change)
        // _var98 is the internal object holding API definitions
        if (config.endpoints && typeof _var98 !== 'undefined') {
            Object.keys(config.endpoints).forEach(key => {
                if (_var98.endpoints[key]) {
                    console.log(`[IVAC Auto-Fix] Patching endpoint: ${key}`);
                    _var98.endpoints[key] = { ..._var98.endpoints[key], ...config.endpoints[key] };
                }
            });
        }

        // B. Fix Captcha Keys (Turnstile/Recaptcha keys)
        // _var80 is the internal object holding Site Keys
        if (config.siteKeys && typeof _var80 !== 'undefined') {
            console.log("[IVAC Auto-Fix] Patching Site Keys");
            _var80.importFromJSON(config.siteKeys);
        }
        
        console.log("[IVAC Auto-Fix] Script updated successfully from remote config.");
        // Notify user via the script's internal toaster function
        if (typeof _var647 === "function") _var647("Script Auto-Fixed from remote config!");

    } catch (err) {
        console.error("[IVAC Auto-Fix] Update failed:", err);
    }
  }

  // 3. MAIN INITIALIZATION LOOP
  // This is the entry point that starts the automation
  (async function _var3706() {
    try {
      // Run the auto-fixer before starting the UI
      await runAutoFixer();

      // Check license (always true now)
      const authorized = await _var3683();
      
      if (authorized) {
        // Initialize Session Check
        if (typeof _var255 === "function") _var255();
        
        // Initialize UI Injection
        if (typeof _var2798 === "function") _var2798();
      } 
      // Fallback for loading states
      else if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", _var3684); // Original fallback
      } else {
        if (typeof _var3684 === "function") _var3684();
      }
    } catch (e) {
      console.error("[IVAC] Init Error:", e);
      // Emergency UI load
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => { if(typeof _var2800 === 'function') _var2800(); });
      } else {
        if(typeof _var2800 === 'function') _var2800();
      }
    }
  })();
  // ============================================================
  // END OF CUSTOM FIX
  // ============================================================
})();