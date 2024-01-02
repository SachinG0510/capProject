using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity ReportData {
    key CPOSTING_DATE   : String;
        CACC_DOC_UUID : String;
    }
}
