function onEdit(){

    var tabLists="lists";
    var tabValidation = "Main";

    var ss = SpreadsheetApp.ActiveSpreadsheet().getActiveSheet();
    var datass = SpreadsheetApp.ActiveSpreadsheet().getSheetByName(tabLists);

    var activeCell = ss.getActiveCell();

    if(activeCell.getColumn() == 1 && activeCell.getRow() > 1 && ss.getSheetName() == tabValidation){
        activeCell.offset(0,1).clearContent().clearDataValidations();

        var makes = datass.getRange(1,1,1, datass.getLastCo)
    }
}