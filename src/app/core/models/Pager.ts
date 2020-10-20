export class Pager {

    // constructor( totalItems :number,  page?:number,  pageSize:number = 10) {
    //     // calculate total, start and end pages
    //     var totalPages = Math.ceil( totalItems / pageSize);
    //     var currentPage = page != null ? page: 1;
    //     var startPage = currentPage - 5;
    //     var endPage = currentPage + 4;
    //     if (startPage <= 0) {
    //         endPage -= (startPage - 1);
    //         startPage = 1;
    //     }
    //     if (endPage > totalPages) {
    //         endPage = totalPages;
    //         if (endPage > 10) {
    //             startPage = endPage - 9;
    //         }
    //     }

    //     totalItems = totalItems;
    //     currentPage = currentPage;
    //     pageSize = pageSize;
    //     totalPages = totalPages;
    //     startPage = startPage;
    //     endPage = endPage;

    // }

    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
}
