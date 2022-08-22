  //BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
  findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.includes(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'Domain is blocked';
      document.documentElement.scrollTop = 0;
      return;
    }
  }
  
  // toxic websites
  social_media = [
    "facebook.com",
    "instagram.com",
    "linkedin.com",
    "tiktok.com",
    "twitter.com"
  ]

  news = [
    "nytimes.com",
    "wsj.com",
    "cnn.com",
    "washingtonpost.com",
    "ft.com"
  ]

  // only allow social media browsing around dinner time
  for (var i = 0; i < social_media.length; i++) {
    site = social_media[i];
    const dayOfWeek = new Date().getDay();
    const hour = new Date().getHours();

    if (dayOfWeek === 6 || dayOfWeek === 0) {
        if (hour < 18 || hour >= 21) { // 1 more hour for social media on weekends
            findAllURL(site)
        }
    }
    else {
        if (hour < 19 || hour >= 21) {
            findAllURL(site)
        }
    }
  }

  // only allow news browsing in the morning
  for (var i = 0; i < news.length; i++) {
    site = news[i];
    const dayOfWeek = new Date().getDay();
    const hour = new Date().getHours();

    if (dayOfWeek === 6 || dayOfWeek === 0) {
        if (hour < 5 || hour >= 11) { // later morning hours on weekends
            findAllURL(site)
        }
    }
    else {
        if (hour < 5 || hour >= 10) {
            findAllURL(site)
        }
    }
  }