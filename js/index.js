const inputSelector = document.querySelector('#input_selector');
const outputSelector = document.querySelector('#output_selector');
const inputText = document.querySelector('#input_text');
const outputText = document.querySelector('#output_text');

function convertBitTo(byteType, bits) {
    if(byteType == 'bit'){
        return bits + ' bit';
    }else if (byteType === 'byte') {
        return bits / 8 + ' byte';
    } else if (byteType === 'kb') {
        return bits / ( 1024 * 8 )+ ' kb';
    } else if (byteType === 'mb') {
        return bits / (1024 * 1024 * 8) + ' mb';
    } else {
        return 'Invalid type';
    }
}

function convertByteTo(byteType, bytes) {
    if(byteType == 'bit'){
        return bytes * 8 + ' bit';
    }else if (byteType === 'byte') {
        return bytes + ' byte';
    } else if (byteType === 'kb') {
        return bytes / 1024 + ' KB';
    } else if (byteType === 'kb') {
        return bytes / (1024 * 1024) + ' mb';
    } else {
        return 'Invalid type';
    }
}

function convertKBTo(byteType, kb) {
    if(byteType == 'bit'){
        return kb * 8 * 1024 + ' bit';
    }else if(byteType == 'byte'){
        return kb * 1024 + ' byte';
    }else if(byteType == 'kb'){
        return kb +' kb';
    }else if(byteType == 'mb'){
        return kb / 1024 + ' mb';
    }else{
        return 'Invalid type';
    }
}

function convertMBTo(byteType, mb){
    if(byteType == 'bit'){
        return mb * 8 * 1024 * 1024 + ' bit';
    }else if(byteType == 'byte'){
        return mb * 1024 * 1024 + ' byte';
    }else if(byteType == 'kb'){
        return mb * 1024 +' kb';
    }else if(byteType == 'mb'){
        return mb + ' mb';
    }else{
        return 'Invalid type';
    }
}

function changeValue(){
    let inputType = inputSelector.value;
    let byteType = outputSelector.value;
    let values = parseInt(inputText.value);
    let returnValue = "";

    if(inputType == 'bit'){
        returnValue = convertBitTo(byteType, values);
    }else if(inputType == 'byte'){
        returnValue = convertByteTo(byteType, values);
    }else if(inputType == 'kb'){
        returnValue = convertKBTo(byteType, values);
    }else if(inputType == 'mb'){
        returnValue = convertMBTo(byteType, values);
    }else{
        returnValue = 'Invalid type';
    }

    outputText.value = returnValue;
}

inputText.addEventListener("change", changeValue);

inputSelector.addEventListener("change", changeValue);