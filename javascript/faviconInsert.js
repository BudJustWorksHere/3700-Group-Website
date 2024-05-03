function includeFavicon() {
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = 'http://css1.seattleu.edu/~apena1/3700-Website-Group-8/assets/favicon.ico';
    document.head.appendChild(link);
}

includeFavicon();