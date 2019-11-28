function addLink() 
{ 
    var body_element = document.body; var selection;
    selection = window.getSelection(); 
    if (window.clipboardData) { // Internet Explorer 
        var pagelink ="\r\n\r\n ԭ�ĳ���[ Zcoder`Blog ](yi-yun.github.io) \n���ر������⣬������CC BY-NC-SA 4.0����Э��\nת���뱣��ԭ������: "+document.location.href+""; 
        var copytext = selection + pagelink;
        window.clipboardData.setData ("Text", copytext); 
        return false; 
    }
    else {
        var pagelink = "<br/>ԭ�ĳ���[ Zcoder`Blog ](yi-yun.github.io)<br/>���ر������⣬������ CC BY-NC-SA 4.0 ����Э��<br/>ת���뱣��ԭ������: "+document.location.href+"";
        var copytext = selection + "<br/>"+pagelink;
        var newdiv = document.createElement('div');
        newdiv.style.position='absolute';
        newdiv.style.left='-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function() { body_element.removeChild(newdiv);},0);
    } 
} 
document.oncopy = addLink;
