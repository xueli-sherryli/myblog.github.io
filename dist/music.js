const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false,  
    audio: [
	 {
		name: '航向你的海岛',
		artist: '泠鸢yousa / 纯白p',
		url: 'http://music.163.com/song/media/outer/url?id=1804552401.mp3',
		cover: 'http://p2.music.126.net/vZQ6fdcFVjhUJB96BaEnwg==/109951165543194247.jpg?',
	 },
	 {
		name: '夏日已所剩无几',
		artist: '泠鸢yousa',
		url: 'http://music.163.com/song/media/outer/url?id=444706525.mp3',
		cover: 'http://p2.music.126.net/GULe52JbCtVW0vjXZ1o2yw==/109951162817808719.jpg',
	 },
	 {
		name: '时光盲盒',
		artist: 'YuH_ChiliChill / 雨狸',
		url: 'http://music.163.com/song/media/outer/url?id=1824454154.mp3',
		cover: 'http://p1.music.126.net/h9fwhS2GHKKmhhu-08MU_w==/109951165774793134.jpg',
	 },
    ]
});
