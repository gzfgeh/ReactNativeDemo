/**
 *
 * Description: 导出公告的API
 *
 * Created by GUZHENFU on 2017/4/12.
 */

 let ApiContant = {
    //UAT
    // BASE_URL : "https://appnativepost.uat.shcem.com/shcem/",
    // DOWNLOAD_URL : "https://fms.uat.shcem.com/mapi/file/dynamicimage?id=",
    // UPLOADER_URL : "https://fms.uat.shcem.com/mapi/file/uploadfile",
    // FILE_LIST_URL : "https://fms.uat.shcem.com/mapi/file/FileInfos",
    // URL_INFO_DETAIL : "https://inform.uat.shcem.com/Mobile/Index?QuotationID:",
    // CATOGOTY_ID : 1879,
    // NOTICE_CATOGOTY_ID : 1882,

    //生产
    BASE_URL : "https://appnativepost.shcem.com/shcem/",
    DOWNLOAD_URL : "https://fms.shcem.com/mapi/file/dynamicimage?id=",
    UPLOADER_URL : "https://fms.shcem.com/mapi/file/uploadfile",
    FILE_LIST_URL : "https://fms.shcem.com/mapi/file/FileInfos",
    URL_INFO_DETAIL : "https://inform.shcem.com/Mobile/Index?QuotationID:",
    CATOGOTY_ID : 1895,
    NOTICE_CATOGOTY_ID : 1885,
    PP_ID: 18,
    PE_ID: 37,
    
    TOP_NUM : 5,

    //Service Name
    IQUERY_INFO_SERVICE  : "Shcem.Inform.ServiceContract.IQueryInfoService",
    IBALANCE_MGR_SERVICE  : "shcem.finance.service.IBalanceMgrService",
    ILEADS_SERVICE  : "Shcem.Trade.ServiceContract.ILeadsService",
    INEWCOUPONSERVICE  :"Shcem.Member.ServiceContract.INewCouponService",
    ICOUPONMGRSERVICE  : "shcem.finance.service.ICouponMgrService",
    IPUSH_MSG_FOR_APP_SERVICE  : "shcem.common.service.IPushMsgForAppService",
    ICLIENT_LOGIN_SERVICE  : "Shcem.Member.ServiceContract.IClientLoginService",
    IVERIFY_CODE_MOBILE_SERVICE  : "Shcem.CommonServiceContract.IVerifyCodeMobileService",
    IENQUIRY_SERVICE  : "Shcem.Trade.ServiceContract.IEnquiryService",
    IEXPENSE_SERVICE  : "Shcem.Trade.ServiceContract.IExpensesService",
    IORDER_SERVICE  : "Shcem.Trade.ServiceContract.IOrderService",
    IDELIVERY_SERVICE  : "Shcem.Trade.ServiceContract.IDeliveryService",
    ICLIENT_SERVICE  : "Shcem.Member.ServiceContract.IClientService",
    IDELIVERY_SINOPEC_SERVICE  : "Shcem.Trade.ServiceContract.IDeliverySinopecService",
    IRECEIPT_SERVICE  : "Shcem.Trade.ServiceContract.IReceiptService",
    INEWCOUPON_SERVICE  : "Shcem.Member.ServiceContract.INewCouponService",
    ILEADSTEMPLATESERVICE_SERVICE  : "Shcem.Trade.ServiceContract.ILeadsTemplateService",
    IDELIVERYDATE  : "Shcem.Trade.ServiceContract.IDeliveryDate",
    IORDERSERVICE  : "Cbihx.Trade.ServiceContract.IOrderService",

    //Method Name
    GET_TOP_INFORM_LIST : "getTopInformList",
    QUERY_ONE_FIRM_BANLANCE : "queryOneFirmBanlance",
    GET_DAYS_INFO : "GetDaysInfo",
    GET_UNREAD_MSG_NUM : "getUnReadMsgNum",
    UPDATE_USER_IMAGE : "UpdateUserImage",
    CHANGE_PAYMENT_PWD : "ChangePaymentPwd",
    GET_MESSAGE_HISTORY_LIST : "getMessageHistoryList",
    LOGIN_FOR_TOKEN : "LoginForToken",
    GET_USER_INFO : "GetUserInfo",
    REGISTER : "Register",
    FORGET_PWD : "ForgetPwd",
    CHECK_VERIFY_CODE : "CheckVerifyCode",
    SEND_VERIFY_CODE : "SendVerifyCode",
    FORGET_PAYMENT_PWD : "ForgetPaymentPwd",
    CHECK_EXIST_USER_MOBILE : "CheckExistUserMobile",
    CANCEL_ENQUIRY : "CancelEnquiry",
    GET_LEADS_DETAIL_INFO : "GetLeadsDetailInfo",
    GET_AND_CHECK_EXPENSE : "GetAndCheckExpenses",
    CREATE_ENQUIRY : "CreateEnquiry",
    GET_LEADS_LIST : "GetLeadsList",
    GETQUANTITYOFSTATUS:"GetQuantityOfStatus",
    COUPON_GETLIST : "GetList",
    QUERYCOUPONFLOWLISTFORFRONT:"queryCouponFlowListForFront",
    EXCHANGECOUPONBYCODE:"ExchangeCouponByCode",
    RECHARGEBYCOUPON :"RechargeByCoupon",
    GETCOUPONTYPESFORCHARGEFEE : "GetCouponTypesForChargeFee",
    CHECKPAYMENTPWD : "CheckPaymentPwd",
    CHARGEFEECOUPON : "ChargeFeeCoupon",
    GETCOUPONACTIVITYID:"GetCouponActivityID",
    ORDER_BY_LEADS : "OrderByLeads",
    GET_LIST : "GetList",
    GET_SELL_LIST : "GetSellList",
    GET_BUY_LIST : "GetBuyList",
    GET_TRADE_TO_DO_NUM : "GetTraderToDoNum",
    GET_RECEIVE_LIST : "GetReceiveList",
    GET_INFO : "GetInfo",
    ORDER : "Order",
    QUERY : "Query",
    BREACH_CONTRACT : "BreachContract",
    GET_ORDER_DETAIL_INFO : "GetOrderDetailInfo",
    GET_RECEIPT_FILE_LIST : "GetReceiptFileList",
    UPDATE_SELL_ARRIVAL_TIME : "UpdateSellArrivalTime",
    GET_ORDER_INFO : "GetOrderInfo",
    PAY_PRICE : "PayPrice",
    CONFIRM : "Confirm",
    AFFIRMMOREORFEW : "AffirmMoreOrFew",
    GETLEADSTEMPLATELIST : "GetLeadsTemplateList",
    RELEASEOFFERBYTEMPLATEIDS : "ReleaseOfferByTemplateIDs",
    GETLEADSTEMPLATEDETAIL : "GetLeadsTemplateDetail",
    EDITLEADSTEMPLATE : "EditLeadsTemplate",
    GETDELIVERYDATELIST : "GetDeliveryDateList",
    COUNTEROFFER : "CounterOffer",
    ORDERBYCOUNTEROFFER : "OrderByCounterOffer",
    GETSELFPICKINFO : "GetSelfPickInfo",
    GETTRASFERINFO : "GetTrasferInfo",
    GETDISTRIBUTION : "GetDistribution",
    SAVE : "Save",
    GETFEE : "GetFee",
    PAY : "Pay",
    GET_ORDER_HOME_LIST: "GetOrderHomeList",
};

module.exports = ApiContant;