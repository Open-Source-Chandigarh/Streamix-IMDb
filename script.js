
const video1 = document.getElementById('my-video1');
const video2 = document.getElementById('my-video2');
const video3 = document.getElementById('my-video3');
const video4 = document.getElementById('my-video4');
const video5 = document.getElementById('my-video5');
const video6 = document.getElementById('my-video6');
const video7 = document.getElementById('my-video7');
const video8 = document.getElementById('my-video8');


        function playVideoWhenVisible(video) {
        const videoRect = video.getBoundingClientRect();
        const isVisible = (
            videoRect.top >= 0 &&
            videoRect.left >= 0 &&
            videoRect.bottom <= window.innerHeight &&
            videoRect.right <= window.innerWidth
        );
        if (isVisible) {
            video.play();
        } else {
            video.pause();
        }
        }

        window.addEventListener('scroll', function() {
            playVideoWhenVisible(video1);
            playVideoWhenVisible(video2);
            playVideoWhenVisible(video3);
            playVideoWhenVisible(video4);
            playVideoWhenVisible(video5);
            playVideoWhenVisible(video6);
            playVideoWhenVisible(video7);
            playVideoWhenVisible(video8);
            
          });
          
          window.addEventListener('resize', function() {
            playVideoWhenVisible(video1);
            playVideoWhenVisible(video2);
            playVideoWhenVisible(video3);
            playVideoWhenVisible(video4);
            playVideoWhenVisible(video5);
            playVideoWhenVisible(video6);
            playVideoWhenVisible(video7);
            playVideoWhenVisible(video8);
          })

