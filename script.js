const reels = [
  {
    isMuted: true,
    username: "goal_master",
    likeCount: 125000,
    isLiked: false,
    commentCount: 870,
    caption: "Messi’s magic can’t be explained, only admired ✨⚽",
    video: "./[4K] Lionel Messi - Way Down We Go - pyeftbl (1080p, h264, youtube).mp4",
    userProfile: "https://example.com/profiles/messi.jpg",
    shareCount: 450,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "cr7_edits",
    likeCount: 210500,
    isLiked: true,
    commentCount: 1120,
    caption: "Siuuu forever 🔥🐐",
    video: "./ronaldo.mp4",
    userProfile: "https://example.com/profiles/cr7.jpg",
    shareCount: 700,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "neymar_flicks",
    likeCount: 98000,
    isLiked: false,
    commentCount: 640,
    caption: "Neymar’s skills = Art 🎨⚽",
    video: "./Neymar.mp4",
    userProfile: "https://example.com/profiles/neymar.jpg",
    shareCount: 330,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "haaland_power",
    likeCount: 150300,
    isLiked: true,
    commentCount: 950,
    caption: "The beast of Man City 💥⚽",
    video: "./haaland.mp4",
    userProfile: "https://example.com/profiles/haaland.jpg",
    shareCount: 510,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "mbappe_speed",
    likeCount: 134200,
    isLiked: false,
    commentCount: 775,
    caption: "Speed + skill = Mbappé 🌪️🔥",
    video: "./mbappe.mp4",
    userProfile: "https://example.com/profiles/mbappe.jpg",
    shareCount: 420,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "ronaldinho_smile",
    likeCount: 110000,
    isLiked: true,
    commentCount: 580,
    caption: "When football becomes happiness 😄⚽",
    video: "./Ronaldinho.mp4",
    userProfile: "https://example.com/profiles/ronaldinho.jpg",
    shareCount: 350,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "xavi_playmaker",
    likeCount: 67000,
    isLiked: false,
    commentCount: 410,
    caption: "Midfield perfection 🎯",
    video: "./xavi.mp4",
    userProfile: "https://example.com/profiles/xavi.jpg",
    shareCount: 220,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "iniesta_control",
    likeCount: 72000,
    isLiked: true,
    commentCount: 460,
    caption: "Silent genius of football 🧠⚽",
    video: "./Iniesta.mp4",
    userProfile: "https://example.com/profiles/iniesta.jpg",
    shareCount: 240,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "salah_king",
    likeCount: 95000,
    isLiked: false,
    commentCount: 630,
    caption: "Egyptian King 👑🇪🇬",
    video: "./salah.mp4",
    userProfile: "https://example.com/profiles/salah.jpg",
    shareCount: 300,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "vini_jr",
    likeCount: 82000,
    isLiked: false,
    commentCount: 510,
    caption: "Dancing through defenders 💃⚽",
    video: "./vini.mp4",
    userProfile: "https://example.com/profiles/vini.jpg",
    shareCount: 280,
    isFollowed: true
  }
];
 var allreels=document.querySelector('.all-reels')

 function addData() {
   var sum=''
 reels.forEach(function(elem,idx){
     sum=sum+ ` <div class="reel">
                    <video autoplay loop ${elem.isMuted?'muted':' '}  preload="auto" src="${elem.video}"></video>
                    <div id=${idx} class="mute">
                    ${elem.isMuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
                      
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1611756468665-09dd5ed49091?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" alt="">
                            <hisMuted: true,4>${elem.
                              username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="icons">
                            <i class="ri-heart-3-${elem.isLiked ? 'fill liked' : 'line'}"></i>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="icons">
                            <i class="ri-chat-3-line"></i>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="icons">
                            <i class="ri-share-forward-line"></i>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="icons">
                            <i class="ri-more-2-fill"></i>
                        </div>
                    </div>
                </div> `
})

 allreels.innerHTML=sum;
}
 addData();

 allreels.addEventListener('click',function(dets){
  if(dets.target.className=='icons'){
    reels[dets.target.id].isLiked = !reels[dets.target.id].isLiked;
    if(reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
    }
    else{
      reels[dets.target.id].likeCount--
    }
    addData();
  }
  if(dets.target.className=='follow'){
    reels[dets.target.id].isFollowed = !reels[dets.target.id].isFollowed;
    addData();
  }
  if(dets.target.className=='mute'){
    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted=true
    }
    else{
      reels[dets.target.id].isMuted=false
    }
    addData();
  }
  
 })