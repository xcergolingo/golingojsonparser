function parseText() {
    var inputText = document.getElementById("input-text").value;
    var outputText = document.getElementById("output-text");
    var output = parse(inputText);
    outputText.value = JSON.stringify(output);
}

function parse(text) {
    var lines = text.split('\n');
    var courseName = lines[0].split(':')[1].trim();
    var contents = [];
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var content = {};
        var index = line.lastIndexOf('(');
        var contentStr = line.substring(0, index - 1);
        var translatedContent = line.substring(line.lastIndexOf('(') + 1, line.lastIndexOf(')'));
        content.mContent = contentStr;
        content.mTranslatedContent = translatedContent;
		
		// others
		content.mPhoneticStory = '';
		content.mOnlineTranslation = '';
		content.mWebLink = '';
		content.mPhoneticInfo = '';
		content.mTags = 'WT9Y2MWZWW@PRIVATERELAY.APPLEID.COM,';
		content.mImageStr = '';
		
        contents.push(content);
    }
    var json = {};
    json.courseName = courseName;
    json.contents = contents;
    return json;
}


function downloadFile2() {
    var outputText = document.getElementById("output-text").value;
    var data = "text/json;charset=utf-8," + encodeURIComponent(outputText);
    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'output.json';
    a.innerHTML = 'download JSON';
    var container = document.getElementsByClassName('output-box')[0];
    container.appendChild(a);
}

function downloadFile() {
    var outputText = document.getElementById("output-text").value;
    var data = "text/json;charset=utf-8," + encodeURIComponent(outputText);
    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'GoLingoContent.golingocontent';
    a.innerHTML = 'download JSON';
    var container = document.getElementsByClassName('output-box')[0];
	if (container.getElementsByTagName('a').length > 0) {
        container.removeChild(container.getElementsByTagName('a')[0]);
    }
    container.appendChild(a);
    container.appendChild(a);
}
