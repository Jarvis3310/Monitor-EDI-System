export const mockKHSITFlow = [
  {
    EDI_NO: '202308110045',
    EDI_ID: 'KHDW',
    EDI_FLOW_ID: 'KHDW_SIGV',
    JOB_ALL_CN: '18',
    DATA_DATE: '20230811',
    STATUS_ID: 'F',
    RESULT_ID: 'F',
    IS_AUTOMATIC: 'Y',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:23'
  },
  {
    EDI_NO: '202308110044',
    EDI_ID: 'KHODS01',
    EDI_FLOW_ID: 'SIGV',
    JOB_ALL_CN: '327',
    DATA_DATE: '20230811',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    IS_AUTOMATIC: 'Y',
    DT_BEGIN: '2023-08-11 15:35',
    DT_END: '2023-08-11 16:05'
  }
];

export const mockKHSITJob = [
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '10',
    EDI_JOB_ID: 'SP_KHDW_SIGV_TRAS',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'F',
    DT_BEGIN: '2023-08-11 16:21',
    DT_END: '2023-08-11 16:23'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '9',
    EDI_JOB_ID: 'SP_KHDW_SIGV_CRD',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:14',
    DT_END: '2023-08-11 16:21'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '8',
    EDI_JOB_ID: 'SP_KHDW_SIGV_CONTR',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:14'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '7',
    EDI_JOB_ID: 'SP_KHDW_SIGV_APP',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '6',
    EDI_JOB_ID: 'SP_KHDW_SIGV_CUST',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '5',
    EDI_JOB_ID: 'SP_KHDW_SIGV_VEN',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '4',
    EDI_JOB_ID: 'SP_KHDW_SIGV_PRD',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '3',
    EDI_JOB_ID: 'SP_KHDW_SIGV_ORG',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '2',
    EDI_JOB_ID: 'SP_KHDW_SIGV_REF',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110045',
    EDI_JOB_NO: '1',
    EDI_JOB_ID: 'SP_KHDW_SIGV_DELETE_DATA',
    EDI_JOB_TYPE: 'MariaDBProcedure',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:06',
    DT_END: '2023-08-11 16:06'
  },
  {
    EDI_NO: '202308110044',
    EDI_JOB_NO: '327',
    EDI_JOB_ID: 'TR_KHDW_SIGV',
    EDI_JOB_TYPE: 'EDITrigNextFlow',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:05',
    DT_END: '2023-08-11 16:05'
  },
  {
    EDI_NO: '202308110044',
    EDI_JOB_NO: '326',
    EDI_JOB_ID: 'IM_SIGV_KH_WSUB_TERM_N_COND',
    EDI_JOB_TYPE: 'MariaDBImport',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:05',
    DT_END: '2023-08-11 16:05'
  },
  {
    EDI_NO: '202308110044',
    EDI_JOB_NO: '325',
    EDI_JOB_ID: 'IM_SIGV_KH_WSUB_SYS_PARAMETER',
    EDI_JOB_TYPE: 'MariaDBImport',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:05',
    DT_END: '2023-08-11 16:05'
  },
  {
    EDI_NO: '202308110044',
    EDI_JOB_NO: '324',
    EDI_JOB_ID: 'IM_SIGV_KH_WSUB_SUB_LIST',
    EDI_JOB_TYPE: 'MariaDBImport',
    STATUS_ID: 'F',
    RESULT_ID: 'S',
    DT_BEGIN: '2023-08-11 16:05',
    DT_END: '2023-08-11 16:05'
  }
];
