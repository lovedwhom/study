var globalVariable = 'this is a global variable';

function globalFunctiom() {
    var localVariable ='this is a local variable';
    globalVariable='this is a changed variable';
    console.log('Visit global.local variable');

    console.log(globalVariable);
    console.log(localVariable);

    function localFuntion() {
        var innerLocalVariablle = 'this is innder local variable'
        console.log('Visit global/local/innner variable');

        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariablle)

    }
    localFuntion()
}

globalFunctiom();