const axios = require('axios');
const cds = require('@sap/cds');



const getReportData = async function () {
    return new Promise((resolve, reject) => {
        const auth = {
            username: 'hsingh@mckinsol.com',
            password: 'HelloWorld@123!@#',
        };
        const Url = 'https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults?$select=CGLACCT,TGLACCT,CGLACCT_TC,TGLACCT_TC,CACC_DOC_UUID,CPOSTING_DATE,CPROJECT_UUID_01,COEOREF_OBJ_TC,TOEOREF_OBJ_TC,KCZ8291A7E7AB2E0C5469C18C,KCAMTCOMP,KCZ15C66BA57F4C2105DCFB9D,KCZ099A5E5FF2637757812202,KCZD84DE6D29EAEBAD2A1D043'
       
        axios.get(Url, {withCredentials: true,
            auth,
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch',
                'Application-Interface-Key': '077wa73s',
            } })
            .then(response => {
                resolve(response.data.d.results)
            })
            .catch(error => {
                reject(error)
            })
    })

}



class CatalogService extends cds.ApplicationService {

    async init() {
        // const db = await cds.connect.to('db');

        this.on ('READ', 'ReportData', async (req) => {

                 
           
            // const db_data =  await SELECT.from(so_error_data) ;
            // const db_data1 =  await SELECT.from(so_error_itemdata) ;
            // var array3 = db_data.concat(db_data1)
            // return array3;
            // return  [{"CACC_DOC_UUID":"2000000001((62"},{"CACC_DOC_UUID":"199100"}]
            let data = await getReportData()
            console.log(JSON.stringify(data))
           return data
        });



await super.init();
}

};

module.exports = {CatalogService};

