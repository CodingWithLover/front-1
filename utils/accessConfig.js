// 权限配置
export {
  ACCESSCONFIG
}
var ACCESSCONFIG = {
  // 客户管理
  'customer': 'iquote.customer', // 客户
  'clueCustomerPage': 'iquote.customerClue.clueCustomerPage', // 客户列表
  'clueCustomerCount': 'iquote.customerClue.clueCustomerCount', // 客户统计
  'queryCRMCustomerDetail': 'iquote.customerClue.queryCRMCustomerDetail', // 客户详情
  'editCRMCustomer': 'iquote.customerClue.editCRMCustomer', // 修改保存
  'addCRMCustomer': 'iquote.customerClue.addCRMCustomer', // 客户新增
  'updateCRMCustomerToTest': 'iquote.customer.updateCRMCustomerToTest', // 客户删除
  'addCustomerNode': 'iquote.customerClue.addCustomerNode', // 客户量房
  'queryCustomerFollow': 'iquote.customerClueFollow.queryCustomerFollow', // 客户跟进列表
  'saveCustomerFollow': 'iquote.customerClueFollow.saveCustomerFollow', // 客户跟进添加
  'queryUserListByOrganizationId': 'iquote.user.queryUserListByOrganizationId', // 转设计师/业务员列表
  'addCustomerStylistAllocation': 'iquote.customerRoleUserClue.addCustomerStylistAllocation', // 合同转设计师确认
  'addCustomerStylistAllocationReport': 'iquote.customerRoleUserClue.addCustomerStylistAllocationReport', // 已报备转设计师确认
  'editDecorationCompany':'iquote.customerChance.editDecorationCompany',// 转装企
  // 'addCustomerSalesmanAllocation': 'iquote.customerRoleUserClue.addCustomerSalesmanAllocation', // 转业务员确认
  'urging': 'iquote.customerFollow.urging', // 催办新增
  'queryRecords': 'iquote.customerAppoint.queryRecords', // 历史记录
  'findCRMContract': 'iquote.contract.findCRMContract', // 合同列表
  'queryCustomerAllocation': 'iquote.customerRoleUserClue.queryCustomerAllocation', // 服务团队
  'getCustomerProject': 'iquote.customerClue.getCustomerProject', // 报价列表
  'queryCustomerContact': 'iquote.CustomerContact.queryCustomerContact', // 联系人
  'saveCustomerContact': 'iquote.CustomerClueContact.saveCustomerContact', // 联系人新增
  'reportAllocation': 'iquote.customerRoleUserClue.reportAddAllocation', // 报备
  'findQuotaChangeListCsm':'iquote.contractMaster.findQuotaChangeListCsm',
  'designConstruction':'sensitive.designConstruction', // 设计施工
  //首页
  'saveLxpg':'rwz.U015.saveLxpg', // 立项派单 重新派单
  'saveJdsb':'rwz.task.saveJdsb', // 进度上报
  'saveLxpg002':'rwz.U015.saveLxpg002', // 监理派单
  'queryGcskByBusinessCode':'rwz.U018.queryGcskByBusinessCode', // 进度款申请
  'taskCheck':'rwz.U015.taskCheck', // 工程管家评审权限
  'queryRwzCusLists':'rwz.customer.queryRwzCusLists', // 任我装客户管理
  'saveRwzCustomer':'rwz.customer.saveRwzCustomer', // 新增修改
  'customerFollow':'rwz.customer.customerFollow', // 跟进
  'appointCusOrg':'rwz.customer.appointCusOrg', // 会员
  'saveRwzIquote':'rwz.customer.saveRwzIquote', //报价
  'addCustomerSalesman':'rwz.customer.addCustomerSalesmanAllocation', // 转业务员
  'addCustomerDesign':'rwz.customer.addCustomerDesignAllocation', // 转设计师
  'addDepositNew':'rwz.payDetailInfo.addDepositNew' , // 定金

  'queryRwzOrgs':'rwz.organization.queryRwzOrgs', // 任我装会员管理
  'saveRwzOrganization':'rwz.organization.saveRwzOrganization', // 新增修改
  'approvalOrgs':'rwz.organization.approvalOrgs', // 审核

  'queryUserPartners':'rwz.partner.queryUserPartners', // 任我装伙伴管理
  'savePartner':'rwz.partner.savePartner', // 新增修改
  'updatePartnerStatus':'rwz.partner.updatePartnerStatus', // 启用禁用

  'commission':'rwz.commission', // 任我装佣金管理
  'personalCard':'rwz.personalCard', // 任我装个人名片
  'brand':'rwz.brand', // 任我装品牌实力

  'queryUserListByOrganizationId2':'rwz.user.queryUserListByOrganizationId2' , // 任我装员工管理
  'addOrgUser':'rwz.user.updateUserStatus' , // 员工新增
  'updateUserStatus':'rwz.user.addOrgUser' , // 员工启用、禁用

  'queryTemplateByUserId':'rwz.userTaskTemplate.queryTemplateByUserId' , // 播报模板
  'queryProjectMobile':'rwz.projectInfo.queryProjectMobile' , // 工地管理

  'updateCommissionRate':'rwz.partner.updateCommissionRate' , // 修改佣金比例

  'queryFeeDetailsByUser':'rwz.organizationFeeDetail.queryFeeDetailsByUser' , // 费用管理

  'spread':'rwz.customer.spread' , // 客户推广

  'queryInspectRecordForPage':'rwz.inspectRecord.queryInspectRecordForPage' , // 巡检管理
  'queryProLists':'rwz.problem.queryProLists' , // 问题管理

  'saveNbjd':'rwz.U015.saveNbjd' , // 内部交底
  'saveKgys':'rwz.U015.saveKgys' , // 开工仪式
  'saveXcjd':'rwz.U015.saveXcjd' , // 现场交底
  'saveKglsq':'rwz.U015.saveKglsq' , // 开工令申请
  'finishAllTasks':'rwz.task.finishAllTasks' , // 一键完工
  'saveInstall':'supplychain.cgdd.saveInstall' , // 到场安装
}
