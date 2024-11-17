const languageSelector = document.getElementById('languageSelector');
const iframeInput = document.getElementById('iframeInput');
const videoDisplay = document.getElementById('videoDisplay');
const videoContainer = document.getElementById('videoContainer');

function loadVideo() {
    const iframeCode = iframeInput.value.trim();
    if (iframeCode) {
        videoContainer.innerHTML = iframeCode;
        videoDisplay.style.display = 'block';
    } else {
        alert('Please paste a valid iframe code!');
    }
}

languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    if (selectedLanguage === 'vi') {
        document.querySelector('h1').innerText = 'VideoFrame';
        iframeInput.placeholder = 'Dán mã iframe của video vào đây...';
        document.querySelector('button').innerText = 'Tải Video';
        document.querySelector('.video-display h2').innerText = 'Xem trước Video';
    } else {
        document.querySelector('h1').innerText = 'VideoFrame';
        iframeInput.placeholder = 'Paste your iframe video code here...';
        document.querySelector('button').innerText = 'Load Video';
        document.querySelector('.video-display h2').innerText = 'Video Preview';
    }
});
