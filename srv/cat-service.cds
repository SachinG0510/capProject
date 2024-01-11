using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity ReportData {
    key CPOSTING_DATE   : String;
        CACC_DOC_UUID : String;
        CGLACCT:String;
        CGLACCT_TC:String;
        COEOREF_OBJ_TC:String;
        CPROJECT_UUID_01:String;
        KCAMTCOMP:String;
        KCZ099A5E5FF2637757812202:String;
        KCZ15C66BA57F4C2105DCFB9D:String;
        KCZ8291A7E7AB2E0C5469C18C:String;
        KCZD84DE6D29EAEBAD2A1D043:String;
        TGLACCT:String;
        TGLACCT_TC:String;
        TOEOREF_OBJ_TC:String;
    }
}
